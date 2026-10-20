/**
 * =========================================================================================
 *  MOINKCRAFT THRIE - 7-SLOT HEXAGON RECIPE REGISTRY (/recipes.js)
 * =========================================================================================
 * 
 *  WELCOME! This file controls all crafting recipes in Moinkcraft Thrie.
 *  The crafting system uses a 7-slot hexagon layout:
 * 
 *            o   o          Row 0:  [0]  [1]
 *          o   o   o        Row 1: [2]  [3]  [4]     --->    [ OUTPUT ]
 *            o   o          Row 2:  [5]  [6]
 * 
 *  Slot 3 is the center core of the hexagon.
 * 
 *  -----------------------------------------------------------------------------------------
 *  HOW TO ADD, CHANGE, OR REMOVE RECIPES:
 *  -----------------------------------------------------------------------------------------
 *  1. INFINITE CRAFT STYLE (SHAPELESS - PRIMARY):
 *     Simply place the required ingredients anywhere on the 7 hexagon slots!
 *     Format examples:
 *       { inputs: ['water_bucket', 'lava_bucket'], output: 'obsidian' }
 *       { inputs: ['iron_ingot', 'flint'], output: 'flint_and_steel' }
 *       { inputs: ['stick', 'iron_ingot', 'iron_ingot'], output: 'iron_sword' }
 *       { inputs: ['planks'], output: 'stick', count: 2 }
 *       { inputs: { cobble: 7 }, output: 'furnace' }
 *       { inputs: { iron_ingot: 7 }, output: 'iron_block' }
 * 
 *     You can use friendly item names ('iron_ingot', 'diamond', 'stick', 'cobble')
 *     OR numeric block IDs (31, 33, 15, 7)!
 * 
 *  2. SHAPED RECIPES (FOR SPECIFIC DESIGNS ON THE HEXAGON):
 *     If you want an exact physical placement on the 7 hexagon slots:
 *       {
 *         name: "Iron Pickaxe (Shaped)",
 *         shaped: true,
 *         slots: {
 *           0: 'iron_ingot', 1: 'iron_ingot', 2: 'iron_ingot',
 *           3: 'stick',
 *           5: 'stick'
 *         },
 *         output: 'iron_pickaxe'
 *       }
 * 
 *  3. TO CHANGE A RECIPE:
 *     Find it below, and edit its `inputs`, `output`, or `count`!
 * 
 *  4. TO REMOVE A RECIPE:
 *     Simply delete the recipe object or comment it out with `//`!
 * 
 *  5. TO ADD A RECIPE:
 *     Scroll down to the RECIPES list and add your new recipe object!
 * =========================================================================================
 */

(function (root) {
    'use strict';

    // Comprehensive dictionary mapping intuitive names & aliases to item IDs
    const ITEM_ALIASES = Object.assign({}, root.ITEM_ALIASES || {}, {
        // Nature & Terrain
        'grass': 1, 'grass_block': 1,
        'dirt': 2,
        'stone': 3, 'smooth_stone': 3,
        'wood': 4, 'log': 4, 'wood_log': 4, 'oak_log': 4,
        'leaves': 5, 'leaf': 5,
        'lava': 6,
        'cobble': 7, 'cobblestone': 7,
        'sand': 8,
        'glass': 9,
        'planks': 10, 'wood_planks': 10, 'plank': 10,
        'clock': 11,
        'crafting_table': 12, 'table': 12, 'workbench': 12,
        'coal_ore': 13,
        'iron_ore': 14,
        'stick': 15, 'sticks': 15,
        'gold_ore': 25,
        'diamond_ore': 26,
        'redstone_ore': 27,
        'obsidian': 28,
        'bedrock': 29,
        'coal': 30,
        'iron': 31, 'iron_ingot': 31, 'ingot': 31,
        'gold': 32, 'gold_ingot': 32,
        'diamond': 33, 'diamonds': 33,
        'redstone': 34, 'redstone_dust': 34,
        'ladder': 35, 'ladders': 35,
        'netherrack': 51,
        'glowstone': 52,
        'gravel': 57,
        'flint': 58,
        'flint_and_steel': 59, 'lighter': 59,
        'nether_portal': 60,
        'nether_brick': 61,
        'water': 63,
        'bucket': 64, 'empty_bucket': 64,
        'water_bucket': 65,
        'lava_bucket': 66,
        'furnace': 67,
        'rotten_pork': 70,
        'fishing_rod': 71, 'rod': 71,
        'raw_fish': 72, 'fish': 72,
        'clock_wire': 73, 'wire': 73, 'string': 73,
        'raw_chimken': 74, 'chicken': 74, 'raw_chicken': 74,
        'feather': 75,
        'bow': 85,
        'arrow': 86, 'arrows': 86,
        'end_portal': 90,
        'end_stone': 91,
        'master_clock_core': 92,
        'sapling': 93,
        'chest': 94,
        'emerald': 95,
        'chrono_blueprint': 100, 'blueprint': 100,
        'piston': 101,
        'redstone_block': 102,
        'piston_head': 103,
        'iron_wrench': 104, 'wrench': 104,
        'lever': 105,
        'sticky_piston': 106,
        'pressure_plate': 107,
        'dispenser': 108,
        'slime_block': 109, 'slime': 109,

        // Aether dimension items
        'aether_grass': 110,
        'aether_dirt': 111,
        'holystone': 112,
        'ambrosium_ore': 113,
        'ambrosium_shard': 114, 'ambrosium': 114,
        'skyroot_log': 115, 'skyroot_wood': 115,
        'skyroot_leaves': 116,
        'zanite_ore': 117,
        'zanite_gem': 118, 'zanite': 118,
        'aether_portal': 119,
        'farmland': 120,

        // Wood tools
        'wood_pickaxe': 16,
        'wood_shovel': 17,
        'wood_axe': 18,
        'wood_sword': 76,
        'wood_hoe': 121,

        // Stone tools
        'stone_pickaxe': 19,
        'stone_shovel': 20,
        'stone_axe': 21,
        'stone_sword': 77,
        'stone_hoe': 122,

        // Iron tools
        'iron_pickaxe': 22,
        'iron_shovel': 23,
        'iron_axe': 24,
        'iron_sword': 78,
        'iron_hoe': 123,

        // Diamond tools
        'diamond_pickaxe': 82,
        'diamond_shovel': 83,
        'diamond_axe': 84,
        'diamond_sword': 80,
        'diamond_hoe': 124,

        // Zanite tools
        'zanite_pickaxe': 150,
        'zanite_shovel': 151,
        'zanite_axe': 152,
        'zanite_sword': 153,
        'zanite_hoe': 154,

        // Armor
        'leather': 125,
        'leather_helmet': 130, 'leather_chestplate': 131, 'leather_leggings': 132, 'leather_boots': 133,
        'iron_helmet': 134, 'iron_chestplate': 135, 'iron_leggings': 136, 'iron_boots': 137,
        'gold_helmet': 138, 'gold_chestplate': 139, 'gold_leggings': 140, 'gold_boots': 141,
        'diamond_helmet': 142, 'diamond_chestplate': 143, 'diamond_leggings': 144, 'diamond_boots': 145,
        'zanite_helmet': 155, 'zanite_chestplate': 156, 'zanite_leggings': 157, 'zanite_boots': 158,

        // Storage / Mineral Blocks
        'iron_block': 160,
        'gold_block': 161,
        'diamond_block': 162,
        'zanite_block': 163,
        'emerald_block': 164,

        // Food & Agriculture
        'carrot': 170,
        'carrot_crop': 171,

        // Redstone automation
        'time_setter': 172,
        'breaker': 173,
        'observer': 174,

        // Mystic dimension & magic
        'mystic_grass': 190,
        'mystic_dirt': 191,
        'mystic_stone': 192,
        'mystic_log': 193,
        'mystic_leaves': 194,
        'mystic_portal': 195,
        'magic_wand': 196, 'wand': 196,
        'mana_shard': 197,

        // Alchemy & Potions
        'empty_bottle': 200, 'bottle': 200, 'glass_bottle': 200,
        'speed_potion': 201,
        'jump_potion': 202,
        'night_vision_potion': 203,

        // Creatures & Automata
        'crawler': 210,

        // Scrap Material & Blocks
        'scrap': 211, 'metal_scrap': 211, 'iron_scrap': 211,
        'scrap_block': 212, 'block_of_scrap': 212,

        // Construction, Hammer, Doors & Desert
        'hammer': 213, 'iron_hammer': 213, 'stone_hammer': 213, 'wood_hammer': 213,
        'door': 214, 'wooden_door': 214,
        'door_bottom': 215,
        'door_top': 216,
        'trapdoor': 217, 'wooden_trapdoor': 217,
        'cactus': 218,
        'dead_bush': 219,
        'sandstone': 220
    });

    /**
     * Resolves any input (name string, numeric ID, or formatted string) to an item ID number.
     */
    function resolveItemId(val) {
        if (typeof val === 'number') return val;
        if (typeof val === 'string') {
            const key = val.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
            if (ITEM_ALIASES[key] !== undefined) return ITEM_ALIASES[key];
            if (root.ITEM_ALIASES && root.ITEM_ALIASES[key] !== undefined) return root.ITEM_ALIASES[key];
            if (root.BLOCK_TYPES) {
                for (const [id, def] of Object.entries(root.BLOCK_TYPES)) {
                    if (def.key === key || (def.name && def.name.toLowerCase().replace(/[^a-z0-9]+/g, '_') === key)) {
                        return Number(id);
                    }
                }
            }
            if (root.SPRITES) {
                for (const [id, def] of Object.entries(root.SPRITES)) {
                    if (def.name && def.name.toLowerCase().replace(/[^a-z0-9]+/g, '_') === key) {
                        return Number(id);
                    }
                }
            }
            const parsed = parseInt(val, 10);
            if (!isNaN(parsed)) return parsed;
        }
        return null;
    }

    /**
     * =====================================================================================
     *  HEXAGON RECIPES LIST
     * =====================================================================================
     *  Feel free to edit, add, or delete entries!
     */
    const RECIPES = [
        // ---------------------------------------------------------------------------------
        // 1. INFINITE CRAFT COMBINATIONS (Elemental & Discovery)
        // ---------------------------------------------------------------------------------
        { name: "Obsidian (Water + Lava)", inputs: ['water_bucket', 'lava_bucket'], output: 'obsidian', returnBuckets: true },
        { name: "Glass (Lava + Sand)", inputs: ['lava_bucket', 'sand'], output: 'glass', returnBuckets: true },
        { name: "Farmland (Water + Dirt)", inputs: ['water_bucket', 'dirt'], output: 'farmland', returnBuckets: true },
        { name: "Netherrack (Lava + Cobble)", inputs: ['lava_bucket', 'cobble'], output: 'netherrack', returnBuckets: true },
        { name: "Grass (Dirt + Sapling)", inputs: ['dirt', 'sapling'], output: 'grass', count: 2 },
        { name: "Dirt (Sand + Gravel)", inputs: ['sand', 'gravel'], output: 'dirt', count: 2 },
        { name: "Obsidian Core (Obsidian + Clock)", inputs: ['obsidian', 'clock'], output: 'master_clock_core' },
        { name: "Nether Portal (Obsidian + Diamond)", inputs: ['obsidian', 'diamond'], output: 'nether_portal' },
        { name: "Time Setter (Clock + Redstone)", inputs: ['clock', 'redstone_dust'], output: 'time_setter' },
        { name: "Water Bucket Refill (Bucket + Water)", inputs: ['bucket', 'water'], output: 'water_bucket' },
        { name: "Lava Bucket Refill (Bucket + Lava)", inputs: ['bucket', 'lava'], output: 'lava_bucket' },

        // ---------------------------------------------------------------------------------
        // 2. BASIC MATERIALS & WOODWORKING
        // ---------------------------------------------------------------------------------
        { name: "Planks (Wood)", inputs: ['wood'], output: 'planks', count: 4 },
        { name: "Planks (Skyroot)", inputs: ['skyroot_log'], output: 'planks', count: 4 },
        { name: "Planks (Mystic)", inputs: ['mystic_log'], output: 'planks', count: 4 },
        { name: "Sticks (1 Plank)", inputs: ['planks'], output: 'stick', count: 2 },
        { name: "Sticks (2 Planks)", inputs: ['planks', 'planks'], output: 'stick', count: 4 },
        { name: "Sticks (2 Sticks)", inputs: ['stick', 'stick'], output: 'stick', count: 2 },
        { name: "Crafting Table (4 Planks)", inputs: ['planks', 'planks', 'planks', 'planks'], output: 'crafting_table', count: 1 },
        { name: "Crafting Table (Stack)", inputs: { planks: 4 }, output: 'crafting_table', count: 1 },
        { name: "Chest (6 Planks)", inputs: ['planks', 'planks', 'planks', 'planks', 'planks', 'planks'], output: 'chest', count: 1 },
        { name: "Chest (Stack)", inputs: { planks: 6 }, output: 'chest', count: 1 },
        { name: "Furnace (7 Cobble)", inputs: ['cobble', 'cobble', 'cobble', 'cobble', 'cobble', 'cobble', 'cobble'], output: 'furnace', count: 1 },
        { name: "Furnace (Cobble Stack)", inputs: { cobble: 7 }, output: 'furnace', count: 1 },
        { name: "Furnace (Cobble + Coal Infinite Craft)", inputs: ['cobble', 'coal'], output: 'furnace', count: 1 },
        { name: "Ladder (3 Sticks)", inputs: ['stick', 'stick', 'stick'], output: 'ladder', count: 3 },
        { name: "Ladder (Stack)", inputs: { stick: 3 }, output: 'ladder', count: 3 },

        // Doors, Trapdoors & Construction
        { name: "Door (Shaped Vertical Left)", shaped: true, slots: { 0: 'planks', 3: 'planks', 5: 'planks' }, output: 'door', count: 1 },
        { name: "Door (Shaped Vertical Right)", shaped: true, slots: { 1: 'planks', 3: 'planks', 6: 'planks' }, output: 'door', count: 1 },
        { name: "Door (Planks + Stick)", inputs: ['planks', 'planks', 'planks', 'stick'], output: 'door', count: 2 },
        { name: "Door (Planks + Iron)", inputs: ['planks', 'planks', 'iron_ingot'], output: 'door', count: 2 },
        { name: "Trapdoor (Shaped Horizontal)", shaped: true, slots: { 2: 'planks', 3: 'planks', 4: 'planks' }, output: 'trapdoor', count: 2 },
        { name: "Trapdoor (Stick + 2 Planks)", inputs: ['stick', 'planks', 'planks'], output: 'trapdoor', count: 2 },
        { name: "Trapdoor (Stick + 3 Planks)", inputs: ['stick', 'planks', 'planks', 'planks'], output: 'trapdoor', count: 3 },
        { name: "Sandstone (4 Sand)", inputs: ['sand', 'sand', 'sand', 'sand'], output: 'sandstone', count: 1 },
        { name: "Sandstone (Stack)", inputs: { sand: 4 }, output: 'sandstone', count: 1 },
        { name: "Sandstone (2 Sand Infinite Craft)", inputs: ['sand', 'sand'], output: 'sandstone', count: 1 },

        // Hammer (Transforms blocks to wall backdrops and back)
        { name: "Hammer (Cobble + Sticks)", inputs: ['cobble', 'cobble', 'cobble', 'stick', 'stick'], output: 'hammer', count: 1 },
        { name: "Hammer (Iron + Sticks)", inputs: ['iron_ingot', 'iron_ingot', 'iron_ingot', 'stick', 'stick'], output: 'hammer', count: 1 },
        { name: "Hammer (Wood Planks + Sticks)", inputs: ['planks', 'planks', 'planks', 'stick', 'stick'], output: 'hammer', count: 1 },
        { name: "Hammer (Cobble Stack)", inputs: { cobble: 3, stick: 2 }, output: 'hammer', count: 1 },
        { name: "Hammer (Iron Stack)", inputs: { iron_ingot: 3, stick: 2 }, output: 'hammer', count: 1 },
        { name: "Hammer (Planks Stack)", inputs: { planks: 3, stick: 2 }, output: 'hammer', count: 1 },

        // ---------------------------------------------------------------------------------
        // 3. TOOLS & WEAPONS (Wood, Stone, Iron, Diamond, Zanite)
        // ---------------------------------------------------------------------------------
        // Wood Tools
        { name: "Wood Sword", inputs: ['planks', 'planks', 'stick'], output: 'wood_sword' },
        { name: "Wood Sword (Logs)", inputs: ['wood', 'wood', 'stick'], output: 'wood_sword' },
        { name: "Wood Shovel", inputs: ['planks', 'stick', 'stick'], output: 'wood_shovel' },
        { name: "Wood Pickaxe", inputs: ['planks', 'planks', 'planks', 'stick', 'stick'], output: 'wood_pickaxe' },
        { name: "Wood Pickaxe (Stack)", inputs: { planks: 3, stick: 2 }, output: 'wood_pickaxe' },
        { name: "Wood Axe (Shaped)", shaped: true, slots: { 0: 'planks', 1: 'planks', 4: 'planks', 3: 'stick', 5: 'stick' }, output: 'wood_axe' },
        { name: "Wood Axe (Shapeless)", inputs: ['planks', 'planks', 'planks', 'stick'], output: 'wood_axe' },
        { name: "Wood Hoe (Shaped)", shaped: true, slots: { 0: 'planks', 1: 'planks', 3: 'stick', 5: 'stick' }, output: 'wood_hoe' },
        { name: "Wood Hoe (Shapeless)", inputs: ['planks', 'planks', 'stick', 'stick'], output: 'wood_hoe' },

        // Stone Tools
        { name: "Stone Sword", inputs: ['cobble', 'cobble', 'stick'], output: 'stone_sword' },
        { name: "Stone Sword (From Wood)", inputs: ['cobble', 'cobble', 'wood_sword'], output: 'stone_sword' },
        { name: "Stone Shovel", inputs: ['cobble', 'stick', 'stick'], output: 'stone_shovel' },
        { name: "Stone Pickaxe", inputs: ['cobble', 'cobble', 'cobble', 'stick', 'stick'], output: 'stone_pickaxe' },
        { name: "Stone Pickaxe (Stack)", inputs: { cobble: 3, stick: 2 }, output: 'stone_pickaxe' },
        { name: "Stone Axe (Shaped)", shaped: true, slots: { 0: 'cobble', 1: 'cobble', 4: 'cobble', 3: 'stick', 5: 'stick' }, output: 'stone_axe' },
        { name: "Stone Axe (Shapeless)", inputs: ['cobble', 'cobble', 'cobble', 'stick'], output: 'stone_axe' },
        { name: "Stone Hoe (Shaped)", shaped: true, slots: { 0: 'cobble', 1: 'cobble', 3: 'stick', 5: 'stick' }, output: 'stone_hoe' },
        { name: "Stone Hoe (Shapeless)", inputs: ['cobble', 'cobble', 'stick', 'stick'], output: 'stone_hoe' },

        // Iron Tools
        { name: "Iron Sword", inputs: ['iron_ingot', 'iron_ingot', 'stick'], output: 'iron_sword' },
        { name: "Iron Sword (Shaped)", shaped: true, slots: { 1: 'iron_ingot', 3: 'iron_ingot', 5: 'stick' }, output: 'iron_sword' },
        { name: "Iron Shovel", inputs: ['iron_ingot', 'stick', 'stick'], output: 'iron_shovel' },
        { name: "Iron Pickaxe", inputs: ['iron_ingot', 'iron_ingot', 'iron_ingot', 'stick', 'stick'], output: 'iron_pickaxe' },
        { name: "Iron Pickaxe (Stack)", inputs: { iron_ingot: 3, stick: 2 }, output: 'iron_pickaxe' },
        { name: "Iron Pickaxe (Shaped)", shaped: true, slots: { 0: 'iron_ingot', 1: 'iron_ingot', 2: 'iron_ingot', 3: 'stick', 5: 'stick' }, output: 'iron_pickaxe' },
        { name: "Iron Axe (Shaped)", shaped: true, slots: { 0: 'iron_ingot', 1: 'iron_ingot', 4: 'iron_ingot', 3: 'stick', 5: 'stick' }, output: 'iron_axe' },
        { name: "Iron Axe (Shapeless)", inputs: ['iron_ingot', 'iron_ingot', 'iron_ingot', 'stick'], output: 'iron_axe' },
        { name: "Iron Hoe (Shaped)", shaped: true, slots: { 0: 'iron_ingot', 1: 'iron_ingot', 3: 'stick', 5: 'stick' }, output: 'iron_hoe' },
        { name: "Iron Hoe (Shapeless)", inputs: ['iron_ingot', 'iron_ingot', 'stick', 'stick'], output: 'iron_hoe' },

        // Diamond Tools
        { name: "Diamond Sword", inputs: ['diamond', 'diamond', 'stick'], output: 'diamond_sword' },
        { name: "Diamond Sword (Shaped)", shaped: true, slots: { 1: 'diamond', 3: 'diamond', 5: 'stick' }, output: 'diamond_sword' },
        { name: "Diamond Shovel", inputs: ['diamond', 'stick', 'stick'], output: 'diamond_shovel' },
        { name: "Diamond Pickaxe", inputs: ['diamond', 'diamond', 'diamond', 'stick', 'stick'], output: 'diamond_pickaxe' },
        { name: "Diamond Pickaxe (Stack)", inputs: { diamond: 3, stick: 2 }, output: 'diamond_pickaxe' },
        { name: "Diamond Pickaxe (Shaped)", shaped: true, slots: { 0: 'diamond', 1: 'diamond', 2: 'diamond', 3: 'stick', 5: 'stick' }, output: 'diamond_pickaxe' },
        { name: "Diamond Axe (Shaped)", shaped: true, slots: { 0: 'diamond', 1: 'diamond', 4: 'diamond', 3: 'stick', 5: 'stick' }, output: 'diamond_axe' },
        { name: "Diamond Axe (Shapeless)", inputs: ['diamond', 'diamond', 'diamond', 'stick'], output: 'diamond_axe' },
        { name: "Diamond Hoe (Shaped)", shaped: true, slots: { 0: 'diamond', 1: 'diamond', 3: 'stick', 5: 'stick' }, output: 'diamond_hoe' },
        { name: "Diamond Hoe (Shapeless)", inputs: ['diamond', 'diamond', 'stick', 'stick'], output: 'diamond_hoe' },

        // Zanite Tools
        { name: "Zanite Sword", inputs: ['zanite_gem', 'zanite_gem', 'stick'], output: 'zanite_sword' },
        { name: "Zanite Shovel", inputs: ['zanite_gem', 'stick', 'stick'], output: 'zanite_shovel' },
        { name: "Zanite Pickaxe", inputs: { zanite_gem: 3, stick: 2 }, output: 'zanite_pickaxe' },
        { name: "Zanite Pickaxe (List)", inputs: ['zanite_gem', 'zanite_gem', 'zanite_gem', 'stick', 'stick'], output: 'zanite_pickaxe' },
        { name: "Zanite Axe (Shaped)", shaped: true, slots: { 0: 'zanite_gem', 1: 'zanite_gem', 4: 'zanite_gem', 3: 'stick', 5: 'stick' }, output: 'zanite_axe' },
        { name: "Zanite Axe (Shapeless)", inputs: ['zanite_gem', 'zanite_gem', 'zanite_gem', 'stick'], output: 'zanite_axe' },
        { name: "Zanite Hoe (Shaped)", shaped: true, slots: { 0: 'zanite_gem', 1: 'zanite_gem', 3: 'stick', 5: 'stick' }, output: 'zanite_hoe' },
        { name: "Zanite Hoe (Shapeless)", inputs: ['zanite_gem', 'zanite_gem', 'stick', 'stick'], output: 'zanite_hoe' },

        // ---------------------------------------------------------------------------------
        // 4. COMBAT, HUNTING & METALWORKING
        // ---------------------------------------------------------------------------------
        { name: "Flint and Steel", inputs: ['iron_ingot', 'flint'], output: 'flint_and_steel' },
        { name: "Bow (Full)", inputs: ['stick', 'stick', 'stick', 'clock_wire', 'clock_wire', 'clock_wire'], output: 'bow' },
        { name: "Bow (Infinite Craft)", inputs: ['stick', 'clock_wire'], output: 'bow' },
        { name: "Arrow (Flint + Stick + Feather)", inputs: ['flint', 'stick', 'feather'], output: 'arrow', count: 4 },
        { name: "Bucket (3 Iron)", inputs: ['iron_ingot', 'iron_ingot', 'iron_ingot'], output: 'bucket' },
        { name: "Bucket (Stack)", inputs: { iron_ingot: 3 }, output: 'bucket' },
        { name: "Clock (Redstone + Gold)", inputs: ['redstone_dust', 'gold_ingot'], output: 'clock' },
        { name: "Clock (4 Gold + Redstone)", inputs: { gold_ingot: 4, redstone_dust: 1 }, output: 'clock' },
        { name: "Fishing Rod", inputs: ['stick', 'stick', 'clock_wire'], output: 'fishing_rod' },
        { name: "Iron Wrench", inputs: { iron_ingot: 6 }, output: 'iron_wrench' },
        { name: "Chrono-Blueprint (5 Iron + Clock)", inputs: { iron_ingot: 5, clock: 1 }, output: 'chrono_blueprint' },
        { name: "Chrono-Blueprint (Simple)", inputs: ['iron_ingot', 'clock'], output: 'chrono_blueprint' },

        // ---------------------------------------------------------------------------------
        // 5. ARMOR (Leather, Iron, Gold, Diamond, Zanite)
        // ---------------------------------------------------------------------------------
        // Leather Armor
        { name: "Leather Helmet", inputs: { leather: 5 }, output: 'leather_helmet' },
        { name: "Leather Helmet (Shaped)", shaped: true, slots: { 0: 'leather', 1: 'leather', 2: 'leather', 4: 'leather' }, output: 'leather_helmet' },
        { name: "Leather Chestplate", inputs: { leather: 7 }, output: 'leather_chestplate' },
        { name: "Leather Chestplate (Ring)", shaped: true, slots: { 0: 'leather', 1: 'leather', 2: 'leather', 4: 'leather', 5: 'leather', 6: 'leather' }, output: 'leather_chestplate' },
        { name: "Leather Leggings", inputs: { leather: 6 }, output: 'leather_leggings' },
        { name: "Leather Boots", inputs: { leather: 4 }, output: 'leather_boots' },

        // Iron Armor
        { name: "Iron Helmet", inputs: { iron_ingot: 5 }, output: 'iron_helmet' },
        { name: "Iron Helmet (Shaped)", shaped: true, slots: { 0: 'iron_ingot', 1: 'iron_ingot', 2: 'iron_ingot', 4: 'iron_ingot' }, output: 'iron_helmet' },
        { name: "Iron Chestplate", inputs: { iron_ingot: 7 }, output: 'iron_chestplate' },
        { name: "Iron Chestplate (Ring)", shaped: true, slots: { 0: 'iron_ingot', 1: 'iron_ingot', 2: 'iron_ingot', 4: 'iron_ingot', 5: 'iron_ingot', 6: 'iron_ingot' }, output: 'iron_chestplate' },
        { name: "Iron Leggings", inputs: { iron_ingot: 6 }, output: 'iron_leggings' },
        { name: "Iron Boots", inputs: { iron_ingot: 4 }, output: 'iron_boots' },

        // Gold Armor
        { name: "Gold Helmet", inputs: { gold_ingot: 5 }, output: 'gold_helmet' },
        { name: "Gold Chestplate", inputs: { gold_ingot: 7 }, output: 'gold_chestplate' },
        { name: "Gold Leggings", inputs: { gold_ingot: 6 }, output: 'gold_leggings' },
        { name: "Gold Boots", inputs: { gold_ingot: 4 }, output: 'gold_boots' },

        // Diamond Armor
        { name: "Diamond Helmet", inputs: { diamond: 5 }, output: 'diamond_helmet' },
        { name: "Diamond Helmet (Shaped)", shaped: true, slots: { 0: 'diamond', 1: 'diamond', 2: 'diamond', 4: 'diamond' }, output: 'diamond_helmet' },
        { name: "Diamond Chestplate", inputs: { diamond: 7 }, output: 'diamond_chestplate' },
        { name: "Diamond Chestplate (Ring)", shaped: true, slots: { 0: 'diamond', 1: 'diamond', 2: 'diamond', 4: 'diamond', 5: 'diamond', 6: 'diamond' }, output: 'diamond_chestplate' },
        { name: "Diamond Leggings", inputs: { diamond: 6 }, output: 'diamond_leggings' },
        { name: "Diamond Boots", inputs: { diamond: 4 }, output: 'diamond_boots' },

        // Zanite Armor
        { name: "Zanite Helmet", inputs: { zanite_gem: 5 }, output: 'zanite_helmet' },
        { name: "Zanite Chestplate", inputs: { zanite_gem: 7 }, output: 'zanite_chestplate' },
        { name: "Zanite Leggings", inputs: { zanite_gem: 6 }, output: 'zanite_leggings' },
        { name: "Zanite Boots", inputs: { zanite_gem: 4 }, output: 'zanite_boots' },

        // ---------------------------------------------------------------------------------
        // 6. REDSTONE, MECHANISMS & AUTOMATION
        // ---------------------------------------------------------------------------------
        { name: "Lever", inputs: ['stick', 'cobble'], output: 'lever' },
        { name: "Pressure Plate", inputs: ['stone', 'stone'], output: 'pressure_plate' },
        { name: "Piston", inputs: ['planks', 'cobble', 'iron_ingot', 'redstone_dust'], output: 'piston' },
        { name: "Sticky Piston", inputs: ['piston', 'slime_block'], output: 'sticky_piston' },
        { name: "Sticky Piston (Sapling)", inputs: ['piston', 'sapling'], output: 'sticky_piston' },
        { name: "Slime Block (4 Saplings)", inputs: { sapling: 4 }, output: 'slime_block' },
        { name: "Crawler", inputs: ['slime_block', 'piston', 'iron_ingot'], output: 'crawler' },
        { name: "Dispenser", inputs: ['cobble', 'bow', 'redstone_dust'], output: 'dispenser' },
        { name: "Breaker", inputs: ['cobble', 'iron_ingot', 'piston'], output: 'breaker' },
        { name: "Observer", inputs: ['cobble', 'redstone_dust', 'iron_ingot'], output: 'observer' },

        // ---------------------------------------------------------------------------------
        // 7. COMPRESSION & DECOMPRESSION BLOCKS
        // ---------------------------------------------------------------------------------
        { name: "Redstone Block (7 Dust)", inputs: { redstone_dust: 7 }, output: 'redstone_block' },
        { name: "Redstone Dust (Decompress)", inputs: ['redstone_block'], output: 'redstone_dust', count: 9 },
        { name: "Iron Block (7 Ingots)", inputs: { iron_ingot: 7 }, output: 'iron_block' },
        { name: "Iron Ingots (Decompress)", inputs: ['iron_block'], output: 'iron_ingot', count: 9 },
        { name: "Gold Block (7 Ingots)", inputs: { gold_ingot: 7 }, output: 'gold_block' },
        { name: "Gold Ingots (Decompress)", inputs: ['gold_block'], output: 'gold_ingot', count: 9 },
        { name: "Diamond Block (7 Gems)", inputs: { diamond: 7 }, output: 'diamond_block' },
        { name: "Diamonds (Decompress)", inputs: ['diamond_block'], output: 'diamond', count: 9 },
        { name: "Zanite Block (7 Gems)", inputs: { zanite_gem: 7 }, output: 'zanite_block' },
        { name: "Zanite Gems (Decompress)", inputs: ['zanite_block'], output: 'zanite_gem', count: 9 },
        { name: "Emerald Block (7 Gems)", inputs: { emerald: 7 }, output: 'emerald_block' },
        { name: "Emeralds (Decompress)", inputs: ['emerald_block'], output: 'emerald', count: 9 },
        { name: "Scrap Block (7 Scrap)", inputs: { scrap: 7 }, output: 'scrap_block', count: 1 },
        { name: "Scrap Block (4 Scrap)", inputs: ['scrap', 'scrap', 'scrap', 'scrap'], output: 'scrap_block', count: 1 },
        { name: "Scrap (Decompress)", inputs: ['scrap_block'], output: 'scrap', count: 7 },

        // ---------------------------------------------------------------------------------
        // 8. MAGIC & ALCHEMY
        // ---------------------------------------------------------------------------------
        { name: "Magic Wand", inputs: ['mana_shard', 'mana_shard', 'stick'], output: 'magic_wand' },
        { name: "Magic Wand (Simple)", inputs: ['mana_shard', 'stick'], output: 'magic_wand' },
        { name: "Empty Bottle (3 Glass)", inputs: ['glass', 'glass', 'glass'], output: 'empty_bottle', count: 3 },
        { name: "Empty Bottle (1 Glass)", inputs: ['glass'], output: 'empty_bottle', count: 1 },
        { name: "Speed Potion", inputs: ['empty_bottle', 'ambrosium_shard'], output: 'speed_potion' },
        { name: "Jump Potion", inputs: ['empty_bottle', 'feather'], output: 'jump_potion' },
        { name: "Night Vision Potion", inputs: ['empty_bottle', 'glowstone'], output: 'night_vision_potion' }
    ];

    /**
     * Finds a matching recipe for the items currently placed on the 7-slot hexagon grid.
     * @param {Array<Object|null>} grid Array of 7 slots (null or { id, count })
     * @returns {Object|null} Match object or null if no recipe matches
     */
    function findHexRecipe(grid) {
        if (!grid || !Array.isArray(grid) || grid.length !== 7) return null;

        // Check if any slot has items
        const occupied = [];
        const countsById = {};
        for (let i = 0; i < 7; i++) {
            const item = grid[i];
            if (item && item.id && item.count > 0) {
                occupied.push({ slot: i, id: item.id, count: item.count });
                countsById[item.id] = (countsById[item.id] || 0) + item.count;
            }
        }
        if (occupied.length === 0) return null;

        const distinctGridIds = Object.keys(countsById).map(Number);

        // 1. Check SHAPED recipes first
        for (const recipe of RECIPES) {
            if (recipe.shaped || recipe.slots) {
                let match = true;
                const reqSlots = recipe.slots || {};

                for (let i = 0; i < 7; i++) {
                    const reqVal = reqSlots[i];
                    if (reqVal !== undefined && reqVal !== null) {
                        const targetId = resolveItemId(reqVal);
                        if (!grid[i] || grid[i].id !== targetId || grid[i].count < 1) {
                            match = false;
                            break;
                        }
                    } else {
                        // Empty slot expected
                        if (grid[i] && grid[i].count > 0) {
                            match = false;
                            break;
                        }
                    }
                }

                if (match) {
                    const resultId = resolveItemId(recipe.output || recipe.result);
                    const amount = recipe.count || recipe.amount || 1;
                    return {
                        recipe,
                        type: 'shaped',
                        result: resultId,
                        amount,
                        slotsToDeduct: reqSlots
                    };
                }
            }
        }

        // 2. Check SHAPELESS / INFINITE CRAFT recipes
        let bestMatch = null;
        let bestScore = -1;

        for (const recipe of RECIPES) {
            if (recipe.shaped || recipe.slots) continue; // Skip shaped in this pass
            if (!recipe.inputs) continue;

            const reqCountsById = {};
            let reqTotalSlots = 0;

            if (Array.isArray(recipe.inputs)) {
                reqTotalSlots = recipe.inputs.length;
                for (const raw of recipe.inputs) {
                    const id = resolveItemId(raw);
                    if (id === null) continue;
                    reqCountsById[id] = (reqCountsById[id] || 0) + 1;
                }
            } else if (typeof recipe.inputs === 'object') {
                for (const [raw, count] of Object.entries(recipe.inputs)) {
                    const id = resolveItemId(raw);
                    if (id === null) continue;
                    reqCountsById[id] = (reqCountsById[id] || 0) + (Number(count) || 1);
                    reqTotalSlots += (Number(count) || 1);
                }
            }

            const reqDistinctIds = Object.keys(reqCountsById).map(Number);
            if (reqDistinctIds.length === 0) continue;

            // Strict condition A: All items in grid must be in recipe
            let hasForeignItem = false;
            for (const gridId of distinctGridIds) {
                if (!reqCountsById[gridId]) {
                    hasForeignItem = true;
                    break;
                }
            }
            if (hasForeignItem) continue;

            // Strict condition B: Grid must contain ALL required item types with sufficient counts
            let hasEnough = true;
            for (const [idStr, needed] of Object.entries(reqCountsById)) {
                const id = Number(idStr);
                if ((countsById[id] || 0) < needed) {
                    hasEnough = false;
                    break;
                }
            }
            if (!hasEnough) continue;

            // Strict condition C: Occupied slots must not exceed required ingredients
            // (Prevents extra occupied slots from matching smaller recipes, e.g. 3 planks matching a 2-plank stick recipe)
            if (occupied.length > reqTotalSlots) continue;

            // Total items currently on grid vs items required by this recipe
            let totalGridItems = 0;
            for (const c of Object.values(countsById)) totalGridItems += c;

            // Scoring:
            // 1. More specific recipes (requiring more items) score higher base
            let score = reqTotalSlots * 30;
            // 2. Bonus if recipe item count matches total items on grid
            if (reqTotalSlots === totalGridItems) score += 60;
            // 3. Bonus if slot count matches
            if (reqTotalSlots === occupied.length) score += 40;
            // 4. Bonus for multi-ingredient combinations
            score += reqDistinctIds.length * 15;

            if (score > bestScore) {
                bestScore = score;
                const resultId = resolveItemId(recipe.output || recipe.result);
                const amount = recipe.count || recipe.amount || 1;
                bestMatch = {
                    recipe,
                    type: 'shapeless',
                    result: resultId,
                    amount,
                    requiredCounts: reqCountsById
                };
            }
        }

        return bestMatch;
    }

    /**
     * Consumes ingredients from the 7-slot hexagon grid for the given recipe match.
     * @param {Array<Object|null>} grid Array of 7 slots
     * @param {Object} matchResult Match result from findHexRecipe
     */
    function consumeHexRecipe(grid, matchResult) {
        if (!grid || !matchResult) return;

        if (matchResult.type === 'shaped' && matchResult.slotsToDeduct) {
            for (const slotIdxStr of Object.keys(matchResult.slotsToDeduct)) {
                const i = Number(slotIdxStr);
                if (grid[i]) {
                    const consumedId = grid[i].id;
                    grid[i].count--;
                    if (grid[i].count <= 0) {
                        // Return bucket if water/lava bucket was consumed
                        if (consumedId === 65 || consumedId === 66) {
                            grid[i] = { id: 64, count: 1 };
                        } else {
                            grid[i] = null;
                        }
                    }
                }
            }
        } else if (matchResult.type === 'shapeless' && matchResult.requiredCounts) {
            for (const [idStr, neededCount] of Object.entries(matchResult.requiredCounts)) {
                const targetId = Number(idStr);
                let remainingToDeduct = neededCount;

                for (let i = 0; i < 7; i++) {
                    if (grid[i] && grid[i].id === targetId) {
                        const deduct = Math.min(grid[i].count, remainingToDeduct);
                        grid[i].count -= deduct;
                        remainingToDeduct -= deduct;

                        if (grid[i].count <= 0) {
                            if (targetId === 65 || targetId === 66) {
                                grid[i] = { id: 64, count: 1 };
                            } else {
                                grid[i] = null;
                            }
                        }

                        if (remainingToDeduct <= 0) break;
                    }
                }
            }
        }
    }

    /**
     * Helper functions exposed for the user to add, remove, and list recipes
     */
    function addRecipe(recipe) {
        if (!recipe) return;
        RECIPES.unshift(recipe);
    }

    function removeRecipe(nameOrOutput) {
        const id = resolveItemId(nameOrOutput);
        const lowerName = typeof nameOrOutput === 'string' ? nameOrOutput.toLowerCase() : null;

        for (let i = RECIPES.length - 1; i >= 0; i--) {
            const r = RECIPES[i];
            const outId = resolveItemId(r.output || r.result);
            if (outId === id || (lowerName && r.name && r.name.toLowerCase().includes(lowerName))) {
                RECIPES.splice(i, 1);
            }
        }
    }

    function getRecipes() {
        return RECIPES;
    }

    // Export to global scope
    root.ITEM_ALIASES = ITEM_ALIASES;
    root.resolveItemId = resolveItemId;
    root.HEX_RECIPES = RECIPES;
    root.findHexRecipe = findHexRecipe;
    root.consumeHexRecipe = consumeHexRecipe;
    root.addRecipe = addRecipe;
    root.removeRecipe = removeRecipe;
    root.getRecipes = getRecipes;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            ITEM_ALIASES,
            resolveItemId,
            HEX_RECIPES: RECIPES,
            findHexRecipe,
            consumeHexRecipe,
            addRecipe,
            removeRecipe,
            getRecipes
        };
    }

})(typeof window !== 'undefined' ? window : globalThis);
