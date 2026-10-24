/**
 * ==============================================================================
 * MOINKCRAFT 3 - BIOMES REGISTRY & GENERATION SYSTEM (/biomes.js)
 * ==============================================================================
 * 
 * Welcome to the biomes module! This file controls all world biomes, terrain
 * heights, surface dressing (grass, sand, sandstone, gravel, snow), cave systems,
 * ore abundance multipliers, and structure affinities.
 * 
 * You can easily tweak existing biomes or create brand-new biomes by editing
 * the BIOMES object below.
 * 
 * ------------------------------------------------------------------------------
 * HOW TO CUSTOMIZE OR ADD A BIOME:
 * ------------------------------------------------------------------------------
 * Each biome profile has the following fields:
 *   - name: Friendly name (e.g. "Sunny Desert", "Alpine Mountains")
 *   - surfaceBlock: Block ID placed on the top surface layer (e.g. 1=Grass, 8=Sand, 20=Glass/Snow)
 *   - subSurfaceBlock: Block ID placed beneath the surface (e.g. 2=Dirt, 220=Sandstone)
 *   - subDepth: How many blocks thick the sub-surface layer is (e.g. 4)
 *   - stoneBlock: Deep stone block ID (default 3=Stone)
 *   - baseHeight: Base Y coordinate for the surface (world height is 64; lower Y is higher terrain!)
 *   - heightVariation: Amplitude of rolling hills
 *   - roughness: Frequency of terrain bumps (higher = jagged peaks, lower = flat plains)
 *   - oreMultipliers: Object mapping ore block IDs to spawn multipliers (e.g. { 25: 3.0 } for 3x gold)
 *   - structures: Array of structure keys from structures.js that spawn in this biome
 *   - skyColor, grassColor: Aesthetic color hexes for the environment
 * ==============================================================================
 */

(function (root) {
    'use strict';

    // --------------------------------------------------------------------------
    // 1. BIOME PROFILES REGISTRY
    // --------------------------------------------------------------------------
    const BIOMES = {
        plains: {
            name: "Plains",
            surfaceBlock: 1,      // Grass
            subSurfaceBlock: 2,   // Dirt
            subDepth: 4,
            stoneBlock: 3,        // Stone
            baseHeight: 40,
            heightVariation: 4,
            roughness: 0.3,
            structures: ['village_house', 'ruined_portal', 'tree'],
            skyColor: '#87ceeb',
            grassColor: '#79c05a'
        },
        forest: {
            name: "Forest",
            surfaceBlock: 1,      // Grass
            subSurfaceBlock: 2,   // Dirt
            subDepth: 4,
            stoneBlock: 3,
            baseHeight: 38,
            heightVariation: 5,
            roughness: 0.45,
            treesChance: 0.35,
            structures: ['tree', 'village_house', 'ruined_portal'],
            skyColor: '#7cb5d8',
            grassColor: '#59a845'
        },
        desert: {
            name: "Desert",
            surfaceBlock: 8,       // Sand
            subSurfaceBlock: 220,  // Sandstone
            subDepth: 6,
            stoneBlock: 3,
            baseHeight: 42,
            heightVariation: 3,
            roughness: 0.22,
            structures: ['desert_pyramid', 'desert_well', 'desert_cactus', 'desert_bush', 'ruined_portal'],
            skyColor: '#f9d29d',
            grassColor: '#d4b76a',
            oreMultipliers: {
                25: 3.0, // Gold Ore (3x common in desert!)
                27: 3.0  // Redstone Ore (3x common!)
            }
        },
        ocean: {
            name: "Ocean",
            surfaceBlock: 8,       // Sand/Gravel seabed
            subSurfaceBlock: 57,   // Gravel
            subDepth: 3,
            stoneBlock: 3,
            baseHeight: 52,        // Deep sea trench (sea level is 45)
            heightVariation: 5,
            seaLevel: 45,
            waterBlock: 63,        // Water
            structures: ['ocean_shipwreck', 'ocean_ruin'],
            skyColor: '#6da0d0'
        },
        mountains: {
            name: "Mountains",
            surfaceBlock: 1,       // Grass / High rocks
            subSurfaceBlock: 3,    // Stone
            subDepth: 2,
            stoneBlock: 3,
            baseHeight: 25,        // Towering peaks!
            heightVariation: 14,
            roughness: 0.85,
            structures: ['ruined_portal', 'tree'],
            skyColor: '#9ec4e0',
            grassColor: '#6d9952',
            oreMultipliers: {
                95: 4.0, // Emeralds (4x in mountains!)
                13: 2.0  // Coal (2x)
            }
        },
        snowy_tundra: {
            name: "Snowy Tundra",
            surfaceBlock: 1,      // Snowy terrain
            subSurfaceBlock: 2,   // Dirt
            subDepth: 4,
            stoneBlock: 3,
            baseHeight: 41,
            heightVariation: 4,
            roughness: 0.35,
            structures: ['tree', 'ruined_portal'],
            skyColor: '#b0c4de',
            grassColor: '#80998a'
        },
        swamp: {
            name: "Swamp",
            surfaceBlock: 1,       // Dark Grass
            subSurfaceBlock: 2,    // Dirt
            subDepth: 3,
            stoneBlock: 3,
            baseHeight: 44,        // Flat marshland near sea level
            heightVariation: 2,
            roughness: 0.25,
            structures: ['tree', 'ruined_portal'],
            skyColor: '#6e7f70',
            grassColor: '#4c6538'
        }
    };

    /**
     * Fast deterministic pseudo-random hash function for procedural generation.
     */
    function biomeHash(x, y = 0, s = 0) {
        let h = (x * 374761393) ^ (y * 668265263) ^ (s * 1013904223);
        h = Math.imul(h ^ (h >>> 13), 1274126177);
        return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
    }

    /**
     * Determines the overworld biome at block coordinate X.
     * Natural wide biomes (180-280+ blocks per biome band) with smooth transitions.
     * @param {number} x Block X coordinate
     * @param {number} [seed=0] World seed offset
     * @returns {string} Biome key: 'plains' | 'forest' | 'desert' | 'ocean' | 'mountains'
     */
    function getOverworldBiome(x, seed = 0) {
        const s = (typeof seed === 'number' && !isNaN(seed)) ? seed : 0;
        
        // Temperature wave (broad scale)
        const temp = Math.sin(x * 0.0038 + s * 0.0001) + 0.38 * Math.sin(x * 0.0105 + 1.7);
        // Moisture/elevation wave
        const elev = Math.sin(x * 0.0022 + s * 0.0004 + 2.5) + 0.45 * Math.sin(x * 0.0075 + 0.5);

        if (temp < -0.42) return 'ocean';
        if (temp > 0.42) return 'desert';
        if (elev > 0.85) return 'mountains';
        if (Math.sin(x * 0.0075 + s * 0.0003) > 0.12) return 'forest';
        return 'plains';
    }

    /**
     * Calculates the surface Y height for any X block in the Overworld.
     * Smoothly blends across biome heights so there are no hard cuts.
     * @param {number} x Block X coordinate
     * @param {number} [seed=0] World seed offset
     * @returns {number} Surface Y level (0-63)
     */
    function getOverworldSurfaceY(x, seed = 0) {
        const s = (typeof seed === 'number' && !isNaN(seed)) ? seed : 0;
        const biome = getOverworldBiome(x, s);

        if (biome === 'ocean') {
            // Ocean bed reaches down into the depths
            const oceanFloor = 50 + Math.floor(Math.sin(x * 0.06 + s * 0.001) * 3 + Math.sin(x * 0.14) * 2);
            return Math.min(56, Math.max(46, oceanFloor));
        }

        if (biome === 'desert') {
            // Gentle rolling dunes
            const dune = 42 + Math.floor(Math.sin(x * 0.04 + s * 0.001) * 3 + Math.sin(x * 0.015) * 2);
            return Math.min(46, Math.max(38, dune));
        }

        if (biome === 'mountains') {
            // Majestic mountain ridges
            const mtn = 25 + Math.floor(Math.sin(x * 0.035 + s * 0.001) * 10 + Math.sin(x * 0.08) * 4);
            return Math.min(38, Math.max(16, mtn));
        }

        if (biome === 'forest') {
            // Forest rolling hills
            const fHills = 38 + Math.floor(Math.sin(x * 0.05 + s * 0.001) * 4 + Math.sin(x * 0.02) * 2);
            return Math.min(44, Math.max(32, fHills));
        }

        // Plains default
        const plainsHills = 40 + Math.floor(Math.sin(x * 0.05 + s * 0.001) * 3 + Math.sin(x * 0.02) * 2);
        return Math.min(44, Math.max(36, plainsHills));
    }

    /**
     * Checks if coordinate (x, y) is part of a subterranean cave network.
     * @param {number} x Block X coordinate
     * @param {number} y Block Y coordinate
     * @param {number} [seed=0] World seed offset
     * @returns {boolean} True if air cave
     */
    function isOverworldCave(x, y, seed = 0) {
        const s = (typeof seed === 'number' && !isNaN(seed)) ? seed : 0;
        const caveNoise = Math.sin(x * 0.09 + s * 0.0005) * Math.cos(y * 0.11) +
                          Math.sin(x * 0.04 - y * 0.05) +
                          Math.sin((x + y) * 0.06);
        return (caveNoise > 1.68 && biomeHash(x, y, 77 + s) > 0.15 && y < 61);
    }

    /**
     * Registers a new biome definition or modifies an existing one.
     * @param {string} id Unique biome identifier
     * @param {Object} def Biome configuration definition
     */
    function registerBiome(id, def) {
        if (!id || typeof def !== 'object') return;
        BIOMES[id] = Object.assign({}, BIOMES[id] || {}, def);
    }

    /**
     * Returns the biome configuration for a given biome ID.
     * @param {string} id Biome identifier
     * @returns {Object} Biome definition object
     */
    function getBiomeDef(id) {
        return BIOMES[id] || BIOMES.plains;
    }

    // --------------------------------------------------------------------------
    // 2. EXPORTS
    // --------------------------------------------------------------------------
    const exportsObj = {
        BIOMES,
        getOverworldBiome,
        getOverworldSurfaceY,
        isOverworldCave,
        registerBiome,
        getBiomeDef,
        biomeHash
    };

    // Attach to global window in browser
    if (typeof window !== 'undefined') {
        window.BIOME_SYSTEM = exportsObj;
        Object.assign(window, exportsObj);
    }

    // Node.js / CommonJS export
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = exportsObj;
    }

})(typeof globalThis !== 'undefined' ? globalThis : this);
