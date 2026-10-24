/**
 * ==============================================================================
 * MOINKCRAFT 3 - STRUCTURE REGISTRY & STRUCTURE CREATOR FILE (structures.js)
 * ==============================================================================
 * 
 * Welcome to the structure editor! You can create and customize any world-generating
 * structure right in this file, similar to sprites.js, recipes.js, and biomes.js.
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
 *    - lootTable: Name of a loot table from LOOT_TABLES (e.g. 'village', 'desert_pyramid',
 *                 'ocean_ruin', 'ruined_portal', 'nether_fortress', 'dungeon')
 *                 OR a custom inline loot table object { rolls: [min, max], items: [...] }!
 *    - chestLoot: Optional explicit array of loot items for chests ('C') in the structure.
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
 *     lootTable: "desert_pyramid" // Uses LOOT_TABLES.desert_pyramid
 *   };
 * ==============================================================================
 */

(function (root) {
    'use strict';

    // Global Registry of all structures
    const STRUCTURES = {};

    // --------------------------------------------------------------------------
    // 0. LOOT TABLES REGISTRY FOR CHESTS
    // --------------------------------------------------------------------------
    const LOOT_TABLES = {
        village: {
            rolls: [3, 6],
            items: [
                { id: 30, name: 'Coal', weight: 35, count: [3, 8] },
                { id: 10, name: 'Oak Planks', weight: 40, count: [4, 12] },
                { id: 95, name: 'Emerald', weight: 20, count: [1, 3] },
                { id: 31, name: 'Iron Ingot', weight: 25, count: [1, 4] },
                { id: 93, name: 'Oak Sapling', weight: 20, count: [1, 3] },
                { id: 70, name: 'Apple', weight: 25, count: [2, 5] },
                { id: 170, name: 'Wheat', weight: 30, count: [3, 7] },
                { id: 72, name: 'Bread', weight: 25, count: [1, 4] },
                { id: 33, name: 'Diamond', weight: 4, count: [1, 1] }
            ]
        },
        desert_pyramid: {
            rolls: [4, 7],
            items: [
                { id: 32, name: 'Gold Ingot', weight: 35, count: [2, 7] },
                { id: 34, name: 'Redstone Dust', weight: 40, count: [4, 12] },
                { id: 31, name: 'Iron Ingot', weight: 30, count: [2, 5] },
                { id: 33, name: 'Diamond', weight: 15, count: [1, 3] },
                { id: 95, name: 'Emerald', weight: 20, count: [1, 3] },
                { id: 59, name: 'Flint and Steel', weight: 15, count: [1, 1] },
                { id: 11, name: 'Clock', weight: 15, count: [1, 1] },
                { id: 211, name: 'Metal Scrap', weight: 25, count: [2, 6] },
                { id: 201, name: 'Golden Apple', weight: 8, count: [1, 1] }
            ]
        },
        ocean_shipwreck: {
            rolls: [3, 6],
            items: [
                { id: 31, name: 'Iron Ingot', weight: 35, count: [2, 6] },
                { id: 32, name: 'Gold Ingot', weight: 25, count: [1, 4] },
                { id: 211, name: 'Metal Scrap', weight: 30, count: [3, 8] },
                { id: 200, name: 'Glass Bottle', weight: 30, count: [1, 4] },
                { id: 71, name: 'Fishing Rod', weight: 20, count: [1, 1] },
                { id: 95, name: 'Emerald', weight: 15, count: [1, 2] },
                { id: 33, name: 'Diamond', weight: 10, count: [1, 2] }
            ]
        },
        ocean_ruin: {
            rolls: [2, 5],
            items: [
                { id: 32, name: 'Gold Ingot', weight: 30, count: [2, 5] },
                { id: 52, name: 'Glowstone', weight: 25, count: [2, 6] },
                { id: 211, name: 'Metal Scrap', weight: 25, count: [2, 5] },
                { id: 31, name: 'Iron Ingot', weight: 25, count: [1, 3] },
                { id: 95, name: 'Emerald', weight: 15, count: [1, 2] }
            ]
        },
        ruined_portal: {
            rolls: [3, 6],
            items: [
                { id: 25, name: 'Gold Ore', weight: 30, count: [2, 6] },
                { id: 32, name: 'Gold Ingot', weight: 35, count: [1, 5] },
                { id: 28, name: 'Obsidian', weight: 25, count: [1, 4] },
                { id: 59, name: 'Flint and Steel', weight: 20, count: [1, 1] },
                { id: 201, name: 'Golden Apple', weight: 10, count: [1, 1] },
                { id: 31, name: 'Iron Ingot', weight: 20, count: [1, 3] }
            ]
        },
        nether_fortress: {
            rolls: [4, 7],
            items: [
                { id: 32, name: 'Gold Ingot', weight: 35, count: [3, 8] },
                { id: 33, name: 'Diamond', weight: 15, count: [1, 3] },
                { id: 125, name: 'Nether Ingot', weight: 20, count: [1, 2] },
                { id: 28, name: 'Obsidian', weight: 25, count: [2, 5] },
                { id: 211, name: 'Metal Scrap', weight: 25, count: [2, 6] }
            ]
        },
        aether_shrine: {
            rolls: [3, 6],
            items: [
                { id: 115, name: 'Ambrosium Shard', weight: 35, count: [3, 8] },
                { id: 116, name: 'Zanite Gem', weight: 30, count: [2, 5] },
                { id: 117, name: 'Golden Amber', weight: 20, count: [1, 3] },
                { id: 118, name: 'Gravitite', weight: 12, count: [1, 2] },
                { id: 114, name: 'Aether Quartz', weight: 25, count: [2, 6] }
            ]
        },
        dungeon: {
            rolls: [4, 7],
            items: [
                { id: 31, name: 'Iron Ingot', weight: 35, count: [2, 6] },
                { id: 30, name: 'Coal', weight: 30, count: [4, 10] },
                { id: 34, name: 'Redstone Dust', weight: 25, count: [3, 8] },
                { id: 33, name: 'Diamond', weight: 15, count: [1, 2] },
                { id: 72, name: 'Bread', weight: 30, count: [2, 5] },
                { id: 201, name: 'Golden Apple', weight: 8, count: [1, 1] }
            ]
        }
    };

    /**
     * Resolves an item identifier to a numeric ID.
     */
    function resolveItemId(val) {
        if (typeof val === 'number') return val;
        if (!val || typeof val !== 'string') return 1;
        const key = val.toLowerCase().replace(/[\s-]/g, '_');
        const names = {
            'air': 0, 'stone': 3, 'grass': 1, 'dirt': 2, 'cobble': 7, 'cobblestone': 7,
            'planks': 10, 'oak_planks': 10, 'wood': 4, 'log': 4, 'oak_log': 4,
            'glass': 9, 'sand': 8, 'sandstone': 220, 'gravel': 57,
            'coal': 30, 'iron_ingot': 31, 'iron': 31, 'gold_ingot': 32, 'gold': 32,
            'diamond': 33, 'emerald': 95, 'redstone_dust': 34, 'redstone': 34,
            'flint': 58, 'flint_and_steel': 59, 'obsidian': 28, 'clock': 11,
            'bread': 72, 'apple': 70, 'wheat': 170, 'golden_apple': 201,
            'metal_scrap': 211, 'scrap': 211, 'scrap_block': 212,
            'glass_bottle': 200, 'empty_bottle': 200, 'bottle': 200,
            'fishing_rod': 71, 'cactus': 218, 'dead_bush': 219,
            'wooden_door': 214, 'door': 214, 'trapdoor': 217, 'wooden_trapdoor': 217,
            'hammer': 213, 'chest': 94
        };
        return names[key] || 1;
    }

    /**
     * Registers a custom loot table that any structure can reference by name.
     */
    function registerLootTable(name, tableDef) {
        if (!name || typeof tableDef !== 'object') return;
        LOOT_TABLES[name] = tableDef;
    }

    /**
     * Generates a 27-slot Minecraft-style chest inventory with items distributed
     * realistically across random slots according to loot tables or chestLoot definitions.
     */
    function generateChestItems(struct, posKey, rngHash) {
        const items = new Array(27).fill(null);
        let table = null;

        if (struct.lootTable) {
            if (typeof struct.lootTable === 'string') {
                table = LOOT_TABLES[struct.lootTable] || null;
            } else if (typeof struct.lootTable === 'object') {
                table = struct.lootTable;
            }
        }

        if (table && table.items && table.items.length) {
            const rollsRange = table.rolls || [3, 6];
            const minRolls = rollsRange[0] || 2;
            const maxRolls = rollsRange[1] || minRolls;
            const numRolls = minRolls + Math.floor(rngHash(posKey, 111) * (maxRolls - minRolls + 1));
            
            const totalWeight = table.items.reduce((acc, it) => acc + (it.weight || 10), 0);
            
            for (let r = 0; r < numRolls; r++) {
                let rollVal = rngHash(posKey, 200 + r * 13) * totalWeight;
                let chosen = table.items[0];
                for (const item of table.items) {
                    const w = item.weight || 10;
                    if (rollVal <= w) {
                        chosen = item;
                        break;
                    }
                    rollVal -= w;
                }

                if (chosen) {
                    const id = resolveItemId(chosen.id);
                    const countRange = chosen.count || [chosen.countMin || 1, chosen.countMax || 1];
                    const cMin = Array.isArray(countRange) ? countRange[0] : (chosen.countMin || 1);
                    const cMax = Array.isArray(countRange) ? countRange[1] : (chosen.countMax || cMin);
                    const count = cMin + Math.floor(rngHash(posKey, 500 + r * 17) * (cMax - cMin + 1));

                    // Random slot distribution across the 27 chest slots
                    let slot = Math.floor(rngHash(posKey, 700 + r * 19) * 27);
                    let attempts = 0;
                    while (items[slot] && attempts < 27) {
                        slot = (slot + 1) % 27;
                        attempts++;
                    }
                    items[slot] = { id, count };
                }
            }
        } else if (struct.chestLoot && struct.chestLoot.length) {
            // Explicit chest loot items
            for (let i = 0; i < struct.chestLoot.length; i++) {
                const loot = struct.chestLoot[i];
                const chance = loot.chance !== undefined ? loot.chance : 1.0;
                if (rngHash(posKey, 900 + i * 23) <= chance) {
                    const id = resolveItemId(loot.id);
                    const countMin = loot.countMin || 1;
                    const countMax = loot.countMax || countMin;
                    const count = countMin + Math.floor(rngHash(posKey, 950 + i * 29) * (countMax - countMin + 1));
                    
                    let slot = loot.slot !== undefined ? loot.slot : Math.floor(rngHash(posKey, 990 + i * 31) * 27);
                    let attempts = 0;
                    while (items[slot] && attempts < 27) {
                        slot = (slot + 1) % 27;
                        attempts++;
                    }
                    items[slot] = { id, count };
                }
            }
        }
        return items;
    }

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

    // Village House with Chest & Villager
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
        lootTable: "village",
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
        lootTable: "ruined_portal"
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
        lootTable: "desert_pyramid"
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
        lootTable: "ocean_shipwreck"
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
        lootTable: "ocean_ruin"
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
        lootTable: "nether_fortress"
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
     * - Chests loot generation via LOOT_TABLES or chestLoot
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

                        // Chest entity & loot generation from LOOT_TABLES
                        if (blockId === 94) {
                            if (!tileEntities[dim]) tileEntities[dim] = {};
                            const items = generateChestItems(struct, posKey, (k, s) => hash(wx + s, wy, s));
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
    root.LOOT_TABLES = LOOT_TABLES;
    root.registerLootTable = registerLootTable;
    root.generateChestItems = generateChestItems;
    root.placeStructure = placeStructure;
    root.canStructureSpawn = canStructureSpawn;
    root.checkAndSpawnStructures = checkAndSpawnStructures;
    root.resolveItemId = resolveItemId;

    // Export to module.exports for Node/Bundlers
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            STRUCTURES,
            LOOT_TABLES,
            registerLootTable,
            generateChestItems,
            placeStructure,
            canStructureSpawn,
            checkAndSpawnStructures,
            resolveItemId
        };
    }

})(typeof window !== 'undefined' ? window : globalThis);
