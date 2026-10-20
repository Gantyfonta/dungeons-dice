/**
 * ==============================================================================
 * MOINKCRAFT 3 - STRUCTURE REGISTRY & STRUCTURE CREATOR FILE (structures.js)
 * ==============================================================================
 * 
 * Welcome to the structure editor! You can create and customize any world-generating
 * structure right in this file, similar to sprites.js and recipes.js.
 * 
 * HOW TO EDIT OR CREATE STRUCTURES:
 * ------------------------------------------------------------------------------
 * 1. Each structure in STRUCTURES has:
 *    - name: Friendly structure name.
 *    - biomes: Array of biomes where this structure can spawn:
 *              ['plains', 'forest', 'desert', 'ocean', 'nether', 'aether', 'mystic']
 *              or ['*'] to allow spawning in all biomes of that dimension.
 *    - dimension: 'overworld' | 'nether' | 'the_end' | 'aether' | 'mystic'
 *    - frequency: Chance per eligible chunk to spawn (e.g. 0.18 = 18% of chunks).
 *    - minChunkDist: Minimum distance in chunks from world spawn (x=0) before it spawns.
 *    - spawnType: 
 *        'surface'    - Anchored right on ground surface (grass, sand, netherrack, etc.)
 *        'ocean_bed'  - Anchored on the underwater seabed in ocean biomes
 *        'sky'        - Floating in the air
 *    - blocks: Mapping of single characters to block IDs (numbers or string names).
 *              Use '.' or ' ' for empty air (skip or clear).
 *    - grid: Array of strings representing the structure from TOP row to BOTTOM row!
 *            Each character in each row maps to a block in 'blocks'.
 *    - chestLoot: Optional array of loot item definitions for any chest ('C') in the structure.
 *    - mobSpawns: Optional mobs to spawn with the structure.
 * 
 * EXAMPLE:
 *   STRUCTURES["tent"] = {
 *     name: "Desert Tent",
 *     dimension: 'overworld',
 *     biomes: ['desert'],
 *     frequency: 0.10,
 *     spawnType: 'surface',
 *     blocks: {
 *       'w': 10, // Planks
 *       'c': 7,  // Cobblestone
 *       'C': 94, // Chest
 *       '.': 0   // Air
 *     },
 *     grid: [
 *       "  www  ",
 *       " w...w ",
 *       "w..C..w",
 *       "ccccccc"
 *     ],
 *     chestLoot: [
 *       { id: 32, countMin: 1, countMax: 3, chance: 0.7 } // Gold
 *     ]
 *   };
 * ==============================================================================
 */

(function (root) {
    'use strict';

    // Global Registry of all structures
    const STRUCTURES = {};

    // --------------------------------------------------------------------------
    // 1. OVERWORLD - PLAINS & FOREST STRUCTURES
    // --------------------------------------------------------------------------

    // Oak Tree
    STRUCTURES["tree"] = {
        name: "Oak Tree",
        dimension: "overworld",
        biomes: ["plains", "forest"],
        frequency: 0.22,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "w": 4,  // Wood log
            "l": 5,  // Leaves
            ".": 0   // Air
        },
        grid: [
            "..lll..",
            ".lllll.",
            ".lllll.",
            "..www..",
            "...w...",
            "...w..."
        ]
    };

    // Village House
    STRUCTURES["village_house"] = {
        name: "Village House",
        dimension: "overworld",
        biomes: ["plains", "forest"],
        frequency: 0.16,
        minChunkDist: 2,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "c": 7,   // Cobble foundation
            "w": 10,  // Wood planks
            "g": 9,   // Glass window
            "d": 216, // Door top
            "D": 215, // Door bottom
            "C": 94,  // Chest
            ".": 0    // Interior air
        },
        grid: [
            "  wwwwwwwww  ",
            " wwwwwwwwwww ",
            "wwcwwwwwwwcww",
            "w.g...g...g.w",
            "w...........w",
            "w.C.......D.w",
            "ccccccccccccc"
        ],
        chestLoot: [
            { id: 30, countMin: 4, countMax: 10, chance: 0.9 }, // Coal
            { id: 95, countMin: 1, countMax: 3, chance: 0.5 },  // Emerald
            { id: 10, countMin: 6, countMax: 16, chance: 0.8 }, // Planks
            { id: 31, countMin: 1, countMax: 3, chance: 0.3 }   // Iron
        ],
        mobSpawns: [
            { type: "villager", offsetX: 4, offsetY: -2 }
        ]
    };

    // Ruined Portal (Plains, Forest & Desert)
    STRUCTURES["ruined_portal"] = {
        name: "Ruined Portal",
        dimension: "overworld",
        biomes: ["plains", "forest", "desert"],
        frequency: 0.12,
        minChunkDist: 1,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "o": 28,  // Obsidian
            "g": 161, // Gold Block
            "n": 51,  // Netherrack
            "C": 94,  // Chest
            "L": 6,   // Lava
            ".": 0    // Air
        },
        grid: [
            "  .ooo.  ",
            "  o...o  ",
            "  o...o  ",
            "  o...o  ",
            " gonnnoC ",
            "nnnnnnnnn"
        ],
        chestLoot: [
            { id: 25, countMin: 2, countMax: 5, chance: 0.8 }, // Gold Ore
            { id: 32, countMin: 1, countMax: 3, chance: 0.6 }, // Gold Ingot
            { id: 28, countMin: 1, countMax: 3, chance: 0.5 }, // Obsidian
            { id: 59, countMin: 1, countMax: 1, chance: 0.4 }  // Flint & Steel
        ]
    };

    // --------------------------------------------------------------------------
    // 2. OVERWORLD - DESERT BIOME STRUCTURES
    // --------------------------------------------------------------------------

    // Desert Cactus
    STRUCTURES["desert_cactus"] = {
        name: "Desert Cactus",
        dimension: "overworld",
        biomes: ["desert"],
        frequency: 0.35,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "K": 218, // Cactus
            ".": 0
        },
        grid: [
            ".K.",
            "KKK",
            ".K.",
            ".K."
        ]
    };

    // Desert Dead Bush
    STRUCTURES["desert_bush"] = {
        name: "Dead Bush",
        dimension: "overworld",
        biomes: ["desert"],
        frequency: 0.40,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "b": 219 // Dead Bush
        },
        grid: [
            "b"
        ]
    };

    // Desert Well
    STRUCTURES["desert_well"] = {
        name: "Desert Well",
        dimension: "overworld",
        biomes: ["desert"],
        frequency: 0.10,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "S": 220, // Sandstone
            "w": 63,  // Water
            ".": 0    // Air
        },
        grid: [
            " SSSSS ",
            " S...S ",
            " S.w.S ",
            " SSSSS "
        ]
    };

    // Desert Pyramid / Temple
    STRUCTURES["desert_pyramid"] = {
        name: "Desert Pyramid",
        dimension: "overworld",
        biomes: ["desert"],
        frequency: 0.12,
        minChunkDist: 2,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "S": 220, // Sandstone
            "s": 8,   // Sand
            "g": 161, // Gold block
            "r": 27,  // Redstone ore
            "C": 94,  // Treasure chest
            "d": 216, // Door top
            "D": 215, // Door bottom
            ".": 0    // Air
        },
        grid: [
            "       SSSSS       ",
            "      SSSSSSS      ",
            "     SSSSSSSSS     ",
            "    SSSS.S.SSSS    ",
            "   SSSSS.S.SSSSS   ",
            "  SSSSSS...SSSSSS  ",
            " SSSSSSS...SSSSSSS ",
            "SSSSSSSS.D.SSSSSSSS",
            "SSSSSSSC.g.CSSSSSSS",
            "SSSSSSSSSSSSSSSSSSS"
        ],
        chestLoot: [
            { id: 32, countMin: 3, countMax: 8, chance: 0.9 }, // Gold Ingots
            { id: 34, countMin: 5, countMax: 14, chance: 0.9 }, // Redstone Dust
            { id: 33, countMin: 1, countMax: 2, chance: 0.4 },  // Diamond
            { id: 11, countMin: 1, countMax: 1, chance: 0.5 }   // Clock
        ]
    };

    // --------------------------------------------------------------------------
    // 3. OVERWORLD - OCEAN BIOME STRUCTURES
    // --------------------------------------------------------------------------

    // Sunken Shipwreck on Ocean Floor
    STRUCTURES["ocean_shipwreck"] = {
        name: "Ocean Shipwreck",
        dimension: "overworld",
        biomes: ["ocean"],
        frequency: 0.16,
        spawnType: "ocean_bed",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "w": 10,  // Planks
            "L": 4,   // Log (Mast)
            "T": 217, // Trapdoor
            "C": 94,  // Treasure chest
            ".": 63   // Water inside
        },
        grid: [
            "      L      ",
            "      L      ",
            "    wwLww    ",
            "   w..L..w   ",
            "  w...L..Tw  ",
            " wwwwwCwwwww ",
            "  wwwwwwwww  "
        ],
        chestLoot: [
            { id: 32, countMin: 2, countMax: 6, chance: 0.8 }, // Gold Ingot
            { id: 31, countMin: 2, countMax: 5, chance: 0.8 }, // Iron Ingot
            { id: 200, countMin: 1, countMax: 3, chance: 0.7 }, // Glass Bottle
            { id: 211, countMin: 2, countMax: 5, chance: 0.6 }, // Metal Scrap
            { id: 71, countMin: 1, countMax: 1, chance: 0.4 }   // Fishing Rod
        ]
    };

    // Ocean Underwater Ruin
    STRUCTURES["ocean_ruin"] = {
        name: "Ocean Ruin",
        dimension: "overworld",
        biomes: ["ocean"],
        frequency: 0.14,
        spawnType: "ocean_bed",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "c": 7,   // Cobblestone
            "S": 220, // Sandstone
            "g": 52,  // Glowstone
            "C": 94,  // Chest
            ".": 63   // Water
        },
        grid: [
            "  cccc  ",
            " c....c ",
            " c.g..c ",
            " S.C..S ",
            "cSSSSSc"
        ],
        chestLoot: [
            { id: 31, countMin: 1, countMax: 3, chance: 0.7 },
            { id: 32, countMin: 1, countMax: 4, chance: 0.6 },
            { id: 95, countMin: 1, countMax: 1, chance: 0.3 }
        ]
    };

    // --------------------------------------------------------------------------
    // 4. NETHER DIMENSION STRUCTURES
    // --------------------------------------------------------------------------

    // Nether Fortress Bridge
    STRUCTURES["nether_fortress"] = {
        name: "Nether Fortress",
        dimension: "nether",
        biomes: ["*"],
        frequency: 0.28,
        spawnType: "surface",
        anchorX: "left",
        anchorY: "bottom",
        blocks: {
            "n": 61, // Nether Brick
            "g": 52, // Glowstone
            "C": 94, // Nether Chest
            ".": 0
        },
        grid: [
            "n...g...n...C...n",
            "n...............n",
            "nnnnnnnnnnnnnnnnn",
            "  nn         nn  ",
            "  nn         nn  "
        ],
        chestLoot: [
            { id: 32, countMin: 2, countMax: 6, chance: 0.9 }, // Gold
            { id: 33, countMin: 1, countMax: 2, chance: 0.4 }, // Diamond
            { id: 59, countMin: 1, countMax: 1, chance: 0.5 }  // Flint & Steel
        ]
    };

    // --------------------------------------------------------------------------
    // 5. OTHER DIMENSION STRUCTURES (AETHER & MYSTIC)
    // --------------------------------------------------------------------------

    // Skyroot Tree (Aether)
    STRUCTURES["aether_tree"] = {
        name: "Skyroot Tree",
        dimension: "aether",
        biomes: ["*"],
        frequency: 0.15,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "w": 115, // Skyroot Log
            "l": 116, // Skyroot Leaves
            ".": 0
        },
        grid: [
            "..lll..",
            ".lllll.",
            ".lllll.",
            "..www..",
            "...w...",
            "...w..."
        ]
    };

    // Mystic Tree (Mystic)
    STRUCTURES["mystic_tree"] = {
        name: "Mystic Tree",
        dimension: "mystic",
        biomes: ["*"],
        frequency: 0.15,
        spawnType: "surface",
        anchorX: "center",
        anchorY: "bottom",
        blocks: {
            "w": 193, // Mystic Log
            "l": 194, // Mystic Leaves
            ".": 0
        },
        grid: [
            "..lll..",
            ".lllll.",
            ".lllll.",
            "..www..",
            "...w...",
            "...w..."
        ]
    };

    // --------------------------------------------------------------------------
    // STRUCTURE PLACEMENT ENGINE & HELPERS
    // --------------------------------------------------------------------------

    /**
     * Places a structure into the target world at coordinates (startX, groundY).
     * Automatically handles:
     * - Character to block mapping
     * - Doors linking (215 bottom + 216 top)
     * - Trapdoors (217)
     * - Chests loot generation
     * - Mobs spawning
     */
    function placeStructure(structDefOrKey, world, startX, groundY, dim, tileEntities, spawnMob, rngHashFn) {
        const struct = typeof structDefOrKey === 'string' ? STRUCTURES[structDefOrKey] : structDefOrKey;
        if (!struct || !struct.grid || !struct.grid.length) return false;

        const grid = struct.grid;
        const rows = grid.length;
        const cols = grid[0].length;
        const blocks = struct.blocks || {};

        const hash = rngHashFn || function (x, y, s = 0) {
            let h = (x * 374761393) ^ (y * 668265263) ^ (s * 1013904223);
            h = Math.imul(h ^ (h >>> 13), 1274126177);
            return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
        };

        // Determine top-left corner
        let originX = startX;
        if (struct.anchorX === 'center') {
            originX = startX - Math.floor(cols / 2);
        }

        // Row 0 is the top of the structure; row (rows - 1) is bottom
        let originY = groundY - (rows - 1);
        if (struct.anchorY === 'top') {
            originY = groundY;
        }

        // Place all blocks from grid
        for (let r = 0; r < rows; r++) {
            const line = grid[r];
            const wy = originY + r;
            for (let c = 0; c < line.length; c++) {
                const char = line[c];
                const wx = originX + c;
                const posKey = `${wx},${wy}`;

                if (char === ' ' || char === '.') {
                    // Air or clear
                    if (blocks[char] === 0) {
                        delete world[posKey];
                    }
                    continue;
                }

                const blockId = blocks[char];
                if (blockId !== undefined && blockId !== null) {
                    if (blockId === 0) {
                        delete world[posKey];
                    } else {
                        world[posKey] = blockId;

                        // Chest entity & loot
                        if (blockId === 94) {
                            if (!tileEntities[dim]) tileEntities[dim] = {};
                            const items = new Array(27).fill(null);
                            if (struct.chestLoot && struct.chestLoot.length) {
                                let slotIdx = 0;
                                for (const loot of struct.chestLoot) {
                                    if (slotIdx >= 27) break;
                                    const chance = loot.chance !== undefined ? loot.chance : 1.0;
                                    const rVal = hash(wx + slotIdx, wy, 991);
                                    if (rVal <= chance) {
                                        const countMin = loot.countMin || 1;
                                        const countMax = loot.countMax || countMin;
                                        const count = countMin + Math.floor(hash(wx, wy + slotIdx, 992) * (countMax - countMin + 1));
                                        items[slotIdx] = { id: loot.id, count };
                                        slotIdx++;
                                    }
                                }
                            }
                            tileEntities[dim][posKey] = { items };
                        }

                        // Door linking
                        if (blockId === 215) { // Door bottom
                            const partnerKey = `${wx},${wy-1}`;
                            if (!tileEntities[dim]) tileEntities[dim] = {};
                            tileEntities[dim][posKey] = { type: 'door', open: false, partner: partnerKey };
                            if (world[partnerKey] === 216) {
                                tileEntities[dim][partnerKey] = { type: 'door', open: false, partner: posKey };
                            }
                        } else if (blockId === 216) { // Door top
                            const partnerKey = `${wx},${wy+1}`;
                            if (!tileEntities[dim]) tileEntities[dim] = {};
                            tileEntities[dim][posKey] = { type: 'door', open: false, partner: partnerKey };
                            if (world[partnerKey] === 215) {
                                tileEntities[dim][partnerKey] = { type: 'door', open: false, partner: posKey };
                            }
                        }

                        // Trapdoor
                        if (blockId === 217) {
                            if (!tileEntities[dim]) tileEntities[dim] = {};
                            tileEntities[dim][posKey] = { type: 'trapdoor', open: false };
                        }
                    }
                }
            }
        }

        // Spawn associated mobs if specified
        if (struct.mobSpawns && struct.mobSpawns.length && typeof spawnMob === 'function') {
            for (const mobDef of struct.mobSpawns) {
                const mx = (originX + (mobDef.offsetX || 0)) * 32; // TILE_SIZE
                const my = (originY + (mobDef.offsetY || 0)) * 32;
                spawnMob(mobDef.type, mx, my);
            }
        }

        return true;
    }

    /**
     * Checks if a structure can spawn in a given biome and chunk.
     */
    function canStructureSpawn(structKey, chunkX, dim, biome, hashFn) {
        const s = STRUCTURES[structKey];
        if (!s) return false;
        if (s.dimension !== dim) return false;

        // Check chunk distance
        if (s.minChunkDist && Math.abs(chunkX) < s.minChunkDist) return false;

        // Check biome match
        if (s.biomes && !s.biomes.includes('*') && !s.biomes.includes(biome)) {
            return false;
        }

        // Check random roll
        const r = hashFn(chunkX, 733 + (s.name ? s.name.length : 1));
        return r < (s.frequency || 0.1);
    }

    /**
     * Main chunk structure generation handler.
     * Iterates through all registered structures and places eligible ones!
     */
    function checkAndSpawnStructures(chunkX, dim, world, tileEntities, spawnMob, biome, getSurfaceY, hashFn) {
        const hash = hashFn || function (x, y, s = 0) {
            let h = (x * 374761393) ^ (y * 668265263) ^ (s * 1013904223);
            h = Math.imul(h ^ (h >>> 13), 1274126177);
            return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
        };

        const chunkStart = chunkX * 16; // CHUNK_SIZE = 16
        const chunkCenter = chunkStart + 8;

        for (const [key, struct] of Object.entries(STRUCTURES)) {
            if (struct.dimension !== dim) continue;
            if (struct.biomes && !struct.biomes.includes('*') && !struct.biomes.includes(biome)) continue;
            if (struct.minChunkDist && Math.abs(chunkX) < struct.minChunkDist) continue;

            const roll = hash(chunkX, 1103 + (key.length * 37));
            if (roll < (struct.frequency || 0.1)) {
                // Determine anchor ground Y
                let groundY = 40;
                if (typeof getSurfaceY === 'function') {
                    groundY = getSurfaceY(chunkCenter);
                }

                if (struct.spawnType === 'ocean_bed' && dim === 'overworld') {
                    // Deep ocean floor
                    groundY = Math.max(50, groundY);
                }

                placeStructure(struct, world, chunkCenter, groundY - 1, dim, tileEntities, spawnMob, hash);
                break; // One major structure per chunk to prevent overlap
            }
        }
    }

    // Export to global scope
    root.STRUCTURES = STRUCTURES;
    root.placeStructure = placeStructure;
    root.canStructureSpawn = canStructureSpawn;
    root.checkAndSpawnStructures = checkAndSpawnStructures;

    // Export to module.exports for Node/Bundlers
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            STRUCTURES,
            placeStructure,
            canStructureSpawn,
            checkAndSpawnStructures
        };
    }

})(typeof window !== 'undefined' ? window : globalThis);
