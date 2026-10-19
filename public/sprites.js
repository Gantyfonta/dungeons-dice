/**
 * ==============================================================================
 * MOINKCRAFT 3 - SPRITE REGISTRY & SPRITE CREATOR FILE (sprites.js)
 * ==============================================================================
 * 
 * Welcome to the sprite editor! You can create and customize sprites for EVERY
 * block and item in Moinkcraft right in this file.
 * 
 * HOW TO EDIT OR CREATE SPRITES:
 * ------------------------------------------------------------------------------
 * 1. Each sprite is a 7x7 pixel grid (7 rows, 7 characters per row).
 * 2. 'colors': Map single characters (letters, numbers, symbols) to hex colors.
 *    - Use '.' or ' ' for TRANSPARENT pixels (great for tools, weapons, food).
 * 3. 'pixels': Array of 7 strings. Each character maps to a color in 'colors'!
 * 
 * EXAMPLE:
 *   // 8: Sand
 *   8: {
 *     name: "Sand",
 *     colors: {
 *       "q": "#ffecb3",
 *       "r": "#ffe082",
 *       "s": "#ffd54f",
 *       "t": "#fff8e1",
 *       ".": "transparent"
 *     },
 *     pixels: [
 *       "qtqtqtq",
 *       "rqtrqrt",
 *       "qqrtqqr",
 *       "rtqqrtr",
 *       "qqsqqqs",
 *       "tqtqttq",
 *       "qtqtqtq"
 *     ]
 *   }
 * 
 * You can also just provide a raw array of 7 strings (e.g. sand: [ ... ]),
 * which will use the built-in fallback color palette below!
 * ==============================================================================
 */

// Global fallback color palette when letters aren't explicitly defined in 'colors'
const DEFAULT_SPRITE_PALETTE = {
  '.': 'transparent',
  ' ': 'transparent',
  '0': 'transparent',
  'k': '#1a1a1a', // Black / Dark Gray
  'w': '#ffffff', // White
  's': '#808080', // Stone Gray
  'S': '#555555', // Dark Stone Gray
  'l': '#a6a6a6', // Light Stone Gray
  'd': '#7a5a3a', // Dirt Brown
  'D': '#4d3a24', // Dark Dirt Brown
  'g': '#5b8a3e', // Grass Green
  'G': '#3e5b2e', // Dark Foliage Green
  'q': '#ffecb3', // Sand Base
  'r': '#ffe082', // Sand Dark Speckle
  's': '#ffd54f', // Sand Deep Grain
  't': '#fff8e1', // Sand Light Highlight
  'p': '#d2b48c', // Wood Plank Tan
  'b': '#6d4c41', // Wood Bark Brown
  'B': '#3e2723', // Dark Bark Brown
  'c': '#00e5ff', // Cyan / Diamond
  'C': '#00b8d4', // Dark Cyan
  'y': '#ffd700', // Gold Yellow
  'Y': '#fbc02d', // Dark Gold
  'm': '#ff1744', // Redstone Red
  'e': '#2ecc71', // Emerald Green
  'E': '#27ae60', // Dark Emerald Green
  'z': '#9c27b0', // Zanite Purple
  'Z': '#7b1fa2', // Dark Zanite Purple
  'o': '#ff9800', // Orange / Carrot
  'O': '#e65100', // Dark Orange
  'i': '#f5f5f5', // Iron Ingot Light
  'I': '#bdbdbd'  // Iron Ingot Shadow
};

// ==============================================================================
// SPRITES REGISTRY (All 143 Blocks & Items)
// ==============================================================================
const SPRITES = {};

// 1: Grass
SPRITES[1] = {
  id: 1,
  name: "Grass",
  colors: {
    "a": "#6aa446",
    "b": "#5b8a3e",
    "c": "#a05518",
    "d": "#914b12",
    "e": "#884711"
  },
  pixels: [
    "aaaaaaa",
    "bbbbbbb",
    "ccccccc",
    "ddddddd",
    "ddddddd",
    "ddddddd",
    "eeeeeee"
  ]
};
SPRITES["grass"] = SPRITES[1];

// 2: Dirt
SPRITES[2] = {
  id: 2,
  name: "Dirt",
  colors: {
    "a": "#af6223",
    "b": "#a05518",
    "c": "#914b12",
    "d": "#884711"
  },
  pixels: [
    "aaaaaaa",
    "aaaaaaa",
    "bbbbbbb",
    "ccccccc",
    "ccccccc",
    "ccccccc",
    "ddddddd"
  ]
};
SPRITES["dirt"] = SPRITES[2];

// 3: Stone
SPRITES[3] = {
  id: 3,
  name: "Stone",
  colors: {
      "s": "#828282",
      "S": "#555555",
      "l": "#9e9e9e"
  },
  pixels: [
    "ssssssS",
    "sllssSs",
    "slsssss",
    "ssssSss",
    "sSsssss",
    "sssslls",
    "Sssssss",
  ]
};
SPRITES["stone"] = SPRITES[3];

// 4: Wood
SPRITES[4] = {
  id: 4,
  name: "Wood",
  colors: {
    "a": "#3e2723",
    "b": "#6d4c41",
    "c": "#8d6e63",
    "d": "#765347"
  },
  pixels: [
    "abbbbac",
    "acbbbac",
    "bcbdbbd",
    "bbbdcbd",
    "bbabcbb",
    "cbababc",
    "cbbbabc"
  ]
};
SPRITES["wood"] = SPRITES[4];

// 5: Leaves
SPRITES[5] = {
  id: 5,
  name: "Leaves",
  colors: {
    "a": "#1b5e20",
    "b": "#2e7d32",
    "c": "#4caf50"
  },
  pixels: [
    "abb.ba.",
    ".b.b.bb",
    "b.bcbbc",
    "cbab.ab",
    "b.abb..",
    ".bcb.bb",
    "bac.b.a"
  ]
};
SPRITES["leaves"] = SPRITES[5];

// 6: Lava
SPRITES[6] = {
  id: 6,
  name: "Lava",
  colors: {
    "a": "#bf360c",
    "b": "#ff5722",
    "c": "#ffeb3b"
  },
  pixels: [
    "abcbcba",
    "baacccb",
    "bcabacb",
    "ccbcabc",
    "bbcbbba",
    "baacacb",
    "abcbcba"
  ]
};
SPRITES["lava"] = SPRITES[6];

// 7: Cobble
SPRITES[7] = {
  id: 7,
  name: "Cobble",
  colors: {
    "a": "#424242",
    "b": "#616161",
    "c": "#757575"
  },
  pixels: [
    "abaabba",
    "bcbbccb",
    "abaabcb",
    "abcbaba",
    "bccbabb",
    "abbabcc",
    "abcabcb"
  ]
};
SPRITES["cobble"] = SPRITES[7];

// 8: Sand
SPRITES[8] = {
  id: 8,
  name: "Sand",
  colors: {
      "q": "#ffecb3",
      "r": "#ffe082",
      "s": "#ffd54f",
      "t": "#fff8e1"
  },
  pixels: [
    "qtqtqtq",
    "rqtrqrt",
    "qqrtqqr",
    "rtqqrtr",
    "qqsqqqs",
    "tqtqttq",
    "qtqtqtq",
  ]
};
SPRITES["sand"] = SPRITES[8];

// 9: Glass
SPRITES[9] = {
  id: 9,
  name: "Glass",
  colors: {
    "a": "#81d4fa",
    "b": "#ffffff"
  },
  pixels: [
    "aaaaaaa",
    "ab....a",
    "a.b...a",
    "a.....a",
    "a.....a",
    "a.....a",
    "aaaaaaa"
  ]
};
SPRITES["glass"] = SPRITES[9];

// 10: Planks
SPRITES[10] = {
  id: 10,
  name: "Planks",
  colors: {
    "a": "#b59469",
    "b": "#decaa9",
    "c": "#d2b48c",
    "d": "#d28d5b"
  },
  pixels: [
    "abccbcc",
    "dddddaa",
    "ccbcddd",
    "abccbcc",
    "dddddac",
    "ccbcddd",
    "abccbcc"
  ]
};
SPRITES["planks"] = SPRITES[10];

// 11: Clock
SPRITES[11] = {
  id: 11,
  name: "Clock",
  colors: {
      "g": "#fdd835",
      "G": "#f9a825",
      "w": "#ffffff",
      "k": "#212121",
      ".": "transparent"
  },
  pixels: [
    "..gGg..",
    ".gwwwg.",
    "gwwkwwG",
    "Gwwkkwg",
    "gwwwwww",
    ".gGgGg.",
    "..gGg..",
  ]
};
SPRITES["clock"] = SPRITES[11];

// 12: Crafting Table
SPRITES[12] = {
  id: 12,
  name: "Crafting Table",
  colors: {
    "a": "#9c714f",
    "b": "#dbac85",
    "c": "#c0916d",
    "d": "#553e2a",
    "e": "#787878",
    "f": "#d7ccc8"
  },
  pixels: [
    "aaaaaaa",
    "abbcdda",
    "aeecbda",
    "aeecffa",
    "abdcffa",
    "abdcffa",
    "aaaaaaa"
  ]
};
SPRITES["crafting_table"] = SPRITES[12];

// 13: Coal Ore
SPRITES[13] = {
  id: 13,
  name: "Coal Ore",
  colors: {
    "a": "#828282",
    "b": "#555555",
    "c": "#212121",
    "d": "#000000"
  },
  pixels: [
    "aaaaaab",
    "accaaba",
    "adaaaaa",
    "aaaabaa",
    "abaaaaa",
    "aaaadca",
    "baaaaaa"
  ]
};
SPRITES["coal_ore"] = SPRITES[13];

// 14: Iron Ore
SPRITES[14] = {
  id: 14,
  name: "Iron Ore",
  colors: {
    "a": "#828282",
    "b": "#555555",
    "c": "#d7ccc8",
    "d": "#bcaaa4"
  },
  pixels: [
    "aaaaaab",
    "accaaba",
    "adaaaaa",
    "aaaabaa",
    "abaaaaa",
    "aaaadca",
    "baaaaaa"
  ]
};
SPRITES["iron_ore"] = SPRITES[14];

// 15: Stick
SPRITES[15] = {
  id: 15,
  name: "Stick",
  colors: {
    "a": "#5d4037",
    "b": "#3e2723"
  },
  pixels: [
    "......a",
    ".....ab",
    "....ab.",
    "...ab..",
    "..ab...",
    ".ab....",
    "ab....."
  ]
};
SPRITES["stick"] = SPRITES[15];

// 16: Wood Pickaxe
SPRITES[16] = {
  id: 16,
  name: "Wood Pickaxe",
  colors: {
      "w": "#6d4c41",
      "W": "#3e2723",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".wwWww.",
    "w..s..w",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
  ]
};
SPRITES["wood_pickaxe"] = SPRITES[16];

// 17: Wood Shovel
SPRITES[17] = {
  id: 17,
  name: "Wood Shovel",
  colors: {
    "a": "#6d4c41",
    "b": "#5d4037",
    "c": "#3e2723"
  },
  pixels: [
    ".abbba.",
    ".abbba.",
    ".abbba.",
    "..aaa..",
    "...c...",
    "...c...",
    "...c..."
  ]
};
SPRITES["wood_shovel"] = SPRITES[17];

// 18: Wood Axe
SPRITES[18] = {
  id: 18,
  name: "New Item",
  colors: {
    "a": "#6d4c41",
    "b": "#5d4037"
  },
  pixels: [
    ".a.a...",
    ".aaaa..",
    ".aab...",
    "...b...",
    "...b...",
    "...b...",
    "...b..."
  ]
};
SPRITES["wood_axe"] = SPRITES[18];

// 19: Stone Pickaxe
SPRITES[19] = {
  id: 19,
  name: "Stone Pickaxe",
  colors: {
      "c": "#616161",
      "C": "#424242",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".ccCcc.",
    "c..s..c",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
  ]
};
SPRITES["stone_pickaxe"] = SPRITES[19];

// 20: Stone Shovel
SPRITES[20] = {
  id: 20,
  name: "Stone Shovel",
  colors: {
    "a": "#616161",
    "b": "#696969",
    "c": "#5d4037"
  },
  pixels: [
    ".abbba.",
    ".abbba.",
    ".abbba.",
    "..aaa..",
    "...c...",
    "...c...",
    "...c..."
  ]
};
SPRITES["stone_shovel"] = SPRITES[20];

// 21: Stone Axe
SPRITES[21] = {
  id: 21,
  name: "Stone Axe",
  colors: {
    "a": "#616161",
    "b": "#5d4037"
  },
  pixels: [
    ".a.a.a.",
    ".aaaaa.",
    ".aabaa.",
    ".a.b.a.",
    "...b...",
    "...b...",
    "...b..."
  ]
};
SPRITES["stone_axe"] = SPRITES[21];

// 22: Iron Pickaxe
SPRITES[22] = {
  id: 22,
  name: "Iron Pickaxe",
  colors: {
      "i": "#e0e0e0",
      "I": "#bdbdbd",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".iiIii.",
    "i..s..i",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
  ]
};
SPRITES["iron_pickaxe"] = SPRITES[22];

// 23: Iron Shovel
SPRITES[23] = {
  id: 23,
  name: "Iron Shovel",
  colors: {
    "a": "#bdbdbd",
    "b": "#e0e0e0",
    "c": "#5d4037"
  },
  pixels: [
    ".abbba.",
    ".abbba.",
    ".abbba.",
    "..aaa..",
    "...c...",
    "...c...",
    "...c..."
  ]
};
SPRITES["iron_shovel"] = SPRITES[23];

// 24: Iron Axe
SPRITES[24] = {
  id: 24,
  name: "Iron Axe",
  colors: {
    "a": "#e0e0e0",
    "b": "#bdbcbc",
    "c": "#5d4037"
  },
  pixels: [
    ".abb...",
    ".aaa...",
    ".a.c...",
    "...c...",
    "...c...",
    "...c...",
    "...c..."
  ]
};
SPRITES["iron_axe"] = SPRITES[24];

// 25: Gold Ore
SPRITES[25] = {
  id: 25,
  name: "Gold Ore",
  colors: {
    "a": "#828282",
    "b": "#555555",
    "c": "#ffeb3b",
    "d": "#fbc02d"
  },
  pixels: [
    "aaaaaab",
    "accaaba",
    "addaaaa",
    "aaaabaa",
    "abaadca",
    "abaacba",
    "baaaaaa"
  ]
};
SPRITES["gold_ore"] = SPRITES[25];

// 26: Diamond Ore
SPRITES[26] = {
  id: 26,
  name: "Diamond Ore",
  colors: {
      "s": "#828282",
      "S": "#555555",
      "d": "#00e5ff",
      "D": "#00b8d4"
  },
  pixels: [
    "ssssssS",
    "sddssSs",
    "sDDsdds",
    "ssssSss",
    "sddssss",
    "sDDssSs",
    "Sssssss",
  ]
};
SPRITES["diamond_ore"] = SPRITES[26];

// 27: Redstone Ore
SPRITES[27] = {
  id: 27,
  name: "Redstone Ore",
  colors: {
    "a": "#555555",
    "b": "#828282",
    "c": "#ff1744",
    "d": "#b71c1c"
  },
  pixels: [
    "abbbbba",
    "cdbbbac",
    "babbbbd",
    "bbbbabb",
    "cbbdcbb",
    "dabbbab",
    "abbbadc"
  ]
};
SPRITES["redstone_ore"] = SPRITES[27];

// 28: Obsidian
SPRITES[28] = {
  id: 28,
  name: "Obsidian",
  colors: {
    "a": "#000000",
    "b": "#311b92",
    "c": "#191919",
    "d": "#4a148c",
    "e": "#212121"
  },
  pixels: [
    "aabaaab",
    "acdcccb",
    "aeeeeca",
    "bccbecd",
    "aceeeca",
    "dccbcba",
    "baaaaaa"
  ]
};
SPRITES["obsidian"] = SPRITES[28];

// 29: Bedrock
SPRITES[29] = {
  id: 29,
  name: "Bedrock",
  colors: {
    "a": "#1a1a1a",
    "b": "#000000",
    "c": "#bababa",
    "d": "#333333"
  },
  pixels: [
    "abcdbba",
    "bdaabad",
    "abbddcc",
    "dacbbdb",
    "abadaab",
    "bddccbd",
    "cbdabba"
  ]
};
SPRITES["bedrock"] = SPRITES[29];

// 30: Coal
SPRITES[30] = {
  id: 30,
  name: "Coal",
  colors: {
      "c": "#212121",
      "C": "#000000",
      "l": "#424242",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "..cCl..",
    ".clcCc.",
    ".cCCCc.",
    "..cCc..",
    ".......",
    ".......",
  ]
};
SPRITES["coal"] = SPRITES[30];

// 31: Iron Ingot
SPRITES[31] = {
  id: 31,
  name: "Iron Ingot",
  colors: {
    "a": "#ffffff",
    "b": "#f5f5f5",
    "c": "#bdbdbd"
  },
  pixels: [
    ".......",
    "..aabc.",
    ".aaabc.",
    ".abbbc.",
    ".bbcc..",
    ".......",
    "......."
  ]
};
SPRITES["iron_ingot"] = SPRITES[31];

// 32: Gold Ingot
SPRITES[32] = {
  id: 32,
  name: "Gold Ingot",
  colors: {
    "a": "#fff59e",
    "b": "#fbc02d",
    "c": "#fff176"
  },
  pixels: [
    ".......",
    "..aab..",
    ".acccb.",
    ".acccb.",
    ".abbb..",
    ".......",
    "......."
  ]
};
SPRITES["gold_ingot"] = SPRITES[32];

// 33: Diamond
SPRITES[33] = {
  id: 33,
  name: "Diamond",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      "h": "#e0f7fa",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "..dhd..",
    ".dhhhd.",
    ".ddddd.",
    "..dDd..",
    "...D...",
    ".......",
  ]
};
SPRITES["diamond"] = SPRITES[33];

// 34: Redstone Dust
SPRITES[34] = {
  id: 34,
  name: "Redstone Dust",
  colors: {
      "r": "#ff1744",
      "R": "#b71c1c",
      "h": "#ff8a80",
      ".": "transparent"
  },
  pixels: [
    ".......",
    ".......",
    "..rhr..",
    ".rrhRr.",
    "..rRr..",
    ".......",
    ".......",
  ]
};
SPRITES["redstone_dust"] = SPRITES[34];

// 35: Ladder
SPRITES[35] = {
  id: 35,
  name: "Ladder",
  colors: {
      "w": "#8d6e63",
      "W": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    "w.....w",
    "wWWWWWw",
    "w.....w",
    "wWWWWWw",
    "w.....w",
    "wWWWWWw",
    "w.....w",
  ]
};
SPRITES["ladder"] = SPRITES[35];

// 51: Netherrack
SPRITES[51] = {
  id: 51,
  name: "Netherrack",
  colors: {
      "r": "#b71c1c",
      "R": "#7f0000",
      "l": "#d32f2f"
  },
  pixels: [
    "rRrrlrR",
    "rRlrrRr",
    "rrrRrrr",
    "RrlrrRr",
    "rRrRrlr",
    "rlrrrRr",
    "RrrlrRr",
  ]
};
SPRITES["netherrack"] = SPRITES[51];

// 52: Glowstone
SPRITES[52] = {
  id: 52,
  name: "Glowstone",
  colors: {
      "y": "#fff59d",
      "Y": "#fbc02d",
      "w": "#fffde7"
  },
  pixels: [
    "yYywyYy",
    "YyYwYyY",
    "ywwywwy",
    "wYYyYYw",
    "ywwywwy",
    "YyYwYyY",
    "yYywyYy",
  ]
};
SPRITES["glowstone"] = SPRITES[52];

// 57: Gravel
SPRITES[57] = {
  id: 57,
  name: "Gravel",
  colors: {
      "g": "#bdbdbd",
      "G": "#9e9e9e",
      "d": "#757575"
  },
  pixels: [
    "gGgGgGg",
    "GgdgGgd",
    "gGgGgGg",
    "gdgGgdg",
    "gGgGgGg",
    "GgdgGgd",
    "gGgGgGg",
  ]
};
SPRITES["gravel"] = SPRITES[57];

// 58: Flint
SPRITES[58] = {
  id: 58,
  name: "Flint",
  colors: {
      "f": "#424242",
      "F": "#212121",
      "l": "#616161",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "...ff..",
    "..flf..",
    ".fllff.",
    ".fFffF.",
    "..fF...",
    ".......",
  ]
};
SPRITES["flint"] = SPRITES[58];

// 59: Flint and Steel
SPRITES[59] = {
  id: 59,
  name: "Flint Steel",
  colors: {
    "a": "#e0e0e0",
    "b": "#424242"
  },
  pixels: [
    "....aa.",
    "...a..a",
    ".b....a",
    "bbb..a.",
    "bbbb...",
    ".bb....",
    "......."
  ]
};
SPRITES["flint_and_steel"] = SPRITES[59];

// 60: Nether Portal
SPRITES[60] = {
  id: 60,
  name: "Nether Portal",
  colors: {
    "a": "#ab47bc",
    "b": "#6a1b9a",
    "c": "#4a148c"
  },
  pixels: [
    "abcccaa",
    "bcaabcb",
    "cbbcbac",
    "cacacac",
    "cbabcbc",
    "acccbbc",
    "cbaaacb"
  ]
};
SPRITES["nether_portal"] = SPRITES[60];

// 61: Nether Brick
SPRITES[61] = {
  id: 61,
  name: "Nether Brick",
  colors: {
    "a": "#4a0000",
    "b": "#680000",
    "c": "#2d0000"
  },
  pixels: [
    "abacbaa",
    "ccccccc",
    "aacaaba",
    "abcabaa",
    "ccccccc",
    "aabacba",
    "abaacaa"
  ]
};
SPRITES["nether_brick"] = SPRITES[61];

// 63: Water
SPRITES[63] = {
  id: 63,
  name: "Water",
  colors: {
    "a": "#0f5e9c",
    "b": "#083d66",
    "c": "#29b6f6",
    "d": "#45bff7"
  },
  pixels: [
    "aaaabba",
    "cabbbaa",
    "caaaacc",
    "dccddcc",
    "ddcccdd",
    "caaaccc",
    "abbaaaa"
  ]
};
SPRITES["water"] = SPRITES[63];

// 64: Bucket
SPRITES[64] = {
  id: 64,
  name: "Bucket",
  colors: {
    "a": "#9e9e9e",
    "b": "#e0e0e0",
    "c": "#b8b8b8"
  },
  pixels: [
    ".......",
    "abbbbba",
    "acbbbca",
    "accccca",
    ".accca.",
    "..aaa..",
    "......."
  ]
};
SPRITES["bucket"] = SPRITES[64];

// 65: Water Bucket
SPRITES[65] = {
  id: 65,
  name: "Water Bucket",
  colors: {
    "a": "#9e9e9e",
    "b": "#0f5e9c",
    "c": "#b8b8b8",
    "d": "#2d6e9f"
  },
  pixels: [
    ".......",
    "abbbbba",
    "acbbbca",
    "acccdca",
    ".accca.",
    "..aaa..",
    "......."
  ]
};
SPRITES["water_bucket"] = SPRITES[65];

// 66: Lava Bucket
SPRITES[66] = {
  id: 66,
  name: "New Item",
  colors: {
    "a": "#9e9e9e",
    "b": "#ff5722",
    "c": "#ffa200",
    "d": "#b8b8b8",
    "e": "#fe8a67"
  },
  pixels: [
    ".......",
    "abbbcba",
    "adbcbda",
    "adddeda",
    ".addda.",
    "..aaa..",
    "......."
  ]
};
SPRITES["lava_bucket"] = SPRITES[66];

// 67: Furnace
SPRITES[67] = {
  id: 67,
  name: "Furnace",
  colors: {
    "a": "#424242",
    "b": "#757575",
    "c": "#666666",
    "d": "#ff764d",
    "e": "#ff5722",
    "f": "#ff3c00",
    "g": "#212121"
  },
  pixels: [
    "aaaaaaa",
    "abbccca",
    "acdefca",
    "acccbba",
    "acgggca",
    "abccbba",
    "aaaaaaa"
  ]
};
SPRITES["furnace"] = SPRITES[67];

// 70: Rotten Pork
SPRITES[70] = {
  id: 70,
  name: "Rotten Pork",
  colors: {
      "p": "#556b2f",
      "P": "#3e4d22",
      "b": "#8d6e63",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "..ppp..",
    ".ppPpp.",
    ".ppppp.",
    "..ppp..",
    "...b...",
    ".......",
  ]
};
SPRITES["rotten_pork"] = SPRITES[70];

// 71: Fishing Rod
SPRITES[71] = {
  id: 71,
  name: "Fishing Rod",
  colors: {
    "a": "#8d6e63",
    "b": "#ffffff",
    "c": "#424242"
  },
  pixels: [
    "....aa.",
    "...a..b",
    "..a...b",
    ".a....b",
    ".ac...b",
    "a...c.c",
    "a....c."
  ]
};
SPRITES["fishing_rod"] = SPRITES[71];

// 72: Raw Fish
SPRITES[72] = {
  id: 72,
  name: "Raw Fish",
  colors: {
    "a": "#82b1ff",
    "b": "#ffffff",
    "c": "#3e68a8"
  },
  pixels: [
    ".......",
    "...aaa.",
    "a.aaaaa",
    "aaaabca",
    "a.aaaaa",
    "...aaa.",
    "......."
  ]
};
SPRITES["raw_fish"] = SPRITES[72];

// 73: Clock-Wire
SPRITES[73] = {
  id: 73,
  name: "Clock-Wire",
  colors: {
    "a": "#fdd835",
    "b": "#9e9e9e",
    "c": "#e0e0e0"
  },
  pixels: [
    "....a..",
    "..bc...",
    ".c...b.",
    "b..ac.c",
    ".c...c.",
    "..ccb..",
    "......."
  ]
};
SPRITES["clock_wire"] = SPRITES[73];

// 74: Raw Chimken
SPRITES[74] = {
  id: 74,
  name: "Raw Chimken",
  colors: {
      "c": "#ffccbc",
      "C": "#d84315",
      "b": "#ffffff",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "..ccc..",
    ".ccCcc.",
    ".ccccc.",
    "..ccc..",
    "...b...",
    "..bb...",
  ]
};
SPRITES["raw_chimken"] = SPRITES[74];

// 75: Feather
SPRITES[75] = {
  id: 75,
  name: "Feather",
  colors: {
      "w": "#f5f5f5",
      "W": "#e0e0e0",
      "s": "#8d6e63",
      ".": "transparent"
  },
  pixels: [
    ".....w.",
    "....ww.",
    "...www.",
    "..Www..",
    ".Www...",
    "..s....",
    ".s.....",
  ]
};
SPRITES["feather"] = SPRITES[75];

// 76: Wood Sword
SPRITES[76] = {
  id: 76,
  name: "Wood Sword",
  colors: {
    "a": "#6d4c41",
    "b": "#3e2723",
    "c": "#5d4037"
  },
  pixels: [
    ".....aa",
    "....aa.",
    "...aa..",
    "b.aa...",
    ".ba....",
    "cb.....",
    "c.b...."
  ]
};
SPRITES["wood_sword"] = SPRITES[76];

// 77: Stone Sword
SPRITES[77] = {
  id: 77,
  name: "Stone Sword",
  colors: {
    "a": "#616161",
    "b": "#424242",
    "c": "#5d4037"
  },
  pixels: [
    ".....aa",
    "....aa.",
    "...aa..",
    "b.aa...",
    ".ba....",
    "cb.....",
    "c.b...."
  ]
};
SPRITES["stone_sword"] = SPRITES[77];

// 78: Iron Sword
SPRITES[78] = {
  id: 78,
  name: "Iron Sword",
  colors: {
      "i": "#e0e0e0",
      "I": "#bdbdbd",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".....ii",
    "....ii.",
    "...ii..",
    "I.ii...",
    ".Ii....",
    "sI.....",
    "s.I....",
  ]
};
SPRITES["iron_sword"] = SPRITES[78];

// 79: Gold Sword
SPRITES[79] = {
  id: 79,
  name: "Gold Sword",
  colors: {
      "y": "#fff176",
      "Y": "#fbc02d",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".....yy",
    "....yy.",
    "...yy..",
    "Y.yy...",
    ".Yy....",
    "sY.....",
    "s.Y....",
  ]
};
SPRITES["gold_sword"] = SPRITES[79];

// 80: Diamond Sword
SPRITES[80] = {
  id: 80,
  name: "Diamond Sword",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".....dd",
    "....dd.",
    "...dd..",
    "D.dd...",
    ".Dd....",
    "sD.....",
    "s.D....",
  ]
};
SPRITES["diamond_sword"] = SPRITES[80];

// 82: Diamond Pickaxe
SPRITES[82] = {
  id: 82,
  name: "Diamond Pickaxe",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".ddDdd.",
    "d..s..d",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
  ]
};
SPRITES["diamond_pickaxe"] = SPRITES[82];

// 83: Diamond Shovel
SPRITES[83] = {
  id: 83,
  name: "Diamond Shovel",
  colors: {
    "a": "#00b8d4",
    "b": "#00e5ff",
    "c": "#5d4037"
  },
  pixels: [
    ".abbba.",
    ".abbba.",
    ".abbba.",
    "..aaa..",
    "...c...",
    "...c...",
    "...c..."
  ]
};
SPRITES["diamond_shovel"] = SPRITES[83];

// 84: Diamond Axe
SPRITES[84] = {
  id: 84,
  name: "Diamond Axe",
  colors: {
    "a": "#00b8d4",
    "b": "#00e5ff",
    "c": "#5d4037"
  },
  pixels: [
    "a.bab.a",
    "abbbbba",
    "abbcbba",
    ".a.c.a.",
    "...c...",
    "...c...",
    "...c..."
  ]
};
SPRITES["diamond_axe"] = SPRITES[84];

// 85: Bow
SPRITES[85] = {
  id: 85,
  name: "Bow",
  colors: {
    "a": "#8d6e63",
    "b": "#ffffff"
  },
  pixels: [
    "..aa...",
    ".a..b..",
    "a...b..",
    "a...b..",
    "a...b..",
    ".a..b..",
    "..aa..."
  ]
};
SPRITES["bow"] = SPRITES[85];

// 86: Arrow
SPRITES[86] = {
  id: 86,
  name: "Arrow",
  colors: {
      "h": "#424242",
      "s": "#8d6e63",
      "f": "#ffffff",
      ".": "transparent"
  },
  pixels: [
    "......h",
    ".....hs",
    "....s..",
    "...s...",
    "..s....",
    ".fs....",
    "f......",
  ]
};
SPRITES["arrow"] = SPRITES[86];

// 90: End Portal
SPRITES[90] = {
  id: 90,
  name: "End Portal",
  colors: {
    "a": "#20152e",
    "b": "#362150",
    "c": "#00e5ff"
  },
  pixels: [
    "aabaaba",
    "abcabaa",
    "baabaab",
    "aaacaaa",
    "baabaab",
    "abcabaa",
    "aabaaba"
  ]
};
SPRITES["end_portal"] = SPRITES[90];

// 91: End Stone
SPRITES[91] = {
  id: 91,
  name: "End Stone",
  colors: {
      "e": "#fff9c4",
      "E": "#fbc02d",
      "l": "#fffde7"
  },
  pixels: [
    "eEeeEeE",
    "EeleEle",
    "eeeEeee",
    "eleeeEl",
    "eEeEeee",
    "eleeeEe",
    "EeEeeEe",
  ]
};
SPRITES["end_stone"] = SPRITES[91];

// 92: Master Clock Core
SPRITES[92] = {
  id: 92,
  name: "Master Clock Core",
  colors: {
    "a": "#f1c40f",
    "b": "#212121",
    "c": "#ffffff"
  },
  pixels: [
    "..aaa..",
    ".abbba.",
    "abbcbba",
    "abbccba",
    "abbbbba",
    ".abbba.",
    "..aaa.."
  ]
};
SPRITES["master_clock_core"] = SPRITES[92];

// 93: Sapling
SPRITES[93] = {
  id: 93,
  name: "Sapling",
  colors: {
      "g": "#76b052",
      "G": "#3e5b2e",
      "s": "#5c3b1e",
      ".": "transparent"
  },
  pixels: [
    "..gg...",
    ".gggg..",
    "ggGggg.",
    ".gggg..",
    "..s....",
    "..s....",
    "..s....",
  ]
};
SPRITES["sapling"] = SPRITES[93];

// 94: Chest
SPRITES[94] = {
  id: 94,
  name: "Chest",
  colors: {
    "a": "#8d6e63",
    "b": "#b18372",
    "c": "#a26f5d",
    "d": "#f1c40f"
  },
  pixels: [
    "aaaaaaa",
    "abbcbba",
    "abcdcba",
    "aaaaaaa",
    "abbbbba",
    "abbbbba",
    "aaaaaaa"
  ]
};
SPRITES["chest"] = SPRITES[94];

// 95: Emerald
SPRITES[95] = {
  id: 95,
  name: "Emerald",
  colors: {
      "e": "#2ecc71",
      "E": "#27ae60",
      "h": "#a5d6a7",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "..ehe..",
    ".ehhhe.",
    ".eeeee.",
    "..eEe..",
    "...E...",
    ".......",
  ]
};
SPRITES["emerald"] = SPRITES[95];

// 100: Chrono-Blueprint
SPRITES[100] = {
  id: 100,
  name: "Chrono-Blueprint",
  colors: {
      "p": "#9c27b0",
      "g": "#f1c40f",
      "b": "#1e88e5",
      "w": "#ffffff"
  },
  pixels: [
    "ggggggg",
    "gbbbbbg",
    "gbwwwbg",
    "gbwbwbg",
    "gbwwwbg",
    "gbbbbbg",
    "ggggggg",
  ]
};
SPRITES["chrono_blueprint"] = SPRITES[100];

// 101: Piston
SPRITES[101] = {
  id: 101,
  name: "Piston",
  colors: {
      "w": "#d2b48c",
      "s": "#757575",
      "S": "#424242",
      ".": "transparent"
  },
  pixels: [
    "wwwwwww",
    "wwwwwww",
    "..sss..",
    "..sss..",
    "ssssssS",
    "ssssssS",
    "Sssssss",
  ]
};
SPRITES["piston"] = SPRITES[101];

// 102: Redstone Block
SPRITES[102] = {
  id: 102,
  name: "Redstone Block",
  colors: {
      "r": "#ff1744",
      "R": "#b71c1c",
      "h": "#ff8a80"
  },
  pixels: [
    "rrrrrrR",
    "rhhrrRr",
    "rhrrrrr",
    "rrrrRrr",
    "rRrrrrr",
    "rrrrhhr",
    "Rrrrrrr",
  ]
};
SPRITES["redstone_block"] = SPRITES[102];

// 103: Piston Head
SPRITES[103] = {
  id: 103,
  name: "Piston Head",
  colors: {
      "w": "#d2b48c",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    "wwwwwww",
    "wwwwwww",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
  ]
};
SPRITES["piston_head"] = SPRITES[103];

// 104: Iron Wrench
SPRITES[104] = {
  id: 104,
  name: "Iron Wrench",
  colors: {
    "a": "#f5f5f5",
    "b": "#bdbdbd"
  },
  pixels: [
    "..a.a..",
    "..aaa..",
    "...b...",
    "...a...",
    "...b...",
    "..a.a..",
    "...b..."
  ]
};
SPRITES["iron_wrench"] = SPRITES[104];

// 105: Lever
SPRITES[105] = {
  id: 105,
  name: "Lever",
  colors: {
      "c": "#616161",
      "s": "#5c3b1e",
      ".": "transparent"
  },
  pixels: [
    ".....s.",
    "....s..",
    "...s...",
    "..s....",
    "ccccccc",
    "ccccccc",
    ".......",
  ]
};
SPRITES["lever"] = SPRITES[105];

// 106: Sticky Piston
SPRITES[106] = {
  id: 106,
  name: "Sticky Piston",
  colors: {
      "g": "#76b052",
      "w": "#d2b48c",
      "s": "#757575",
      "S": "#424242",
      ".": "transparent"
  },
  pixels: [
    "wwgggww",
    "wwwwwww",
    "..sss..",
    "..sss..",
    "ssssssS",
    "ssssssS",
    "Sssssss",
  ]
};
SPRITES["sticky_piston"] = SPRITES[106];

// 107: Pressure Plate
SPRITES[107] = {
  id: 107,
  name: "Pressure Plate",
  colors: {
    "a": "#828282",
    "b": "#555555"
  },
  pixels: [
    ".......",
    ".......",
    ".......",
    ".......",
    ".......",
    ".aaaaa.",
    ".abbba."
  ]
};
SPRITES["pressure_plate"] = SPRITES[107];

// 108: Dispenser
SPRITES[108] = {
  id: 108,
  name: "Dispenser",
  colors: {
    "a": "#424242",
    "b": "#111111",
    "c": "#636363",
    "d": "#757575"
  },
  pixels: [
    "aabbbca",
    "ccabacc",
    "cdcacdc",
    "cdddddc",
    "cdddddc",
    "cdddddc",
    "accccca"
  ]
};
SPRITES["dispenser"] = SPRITES[108];

// 109: Slime Block
SPRITES[109] = {
  id: 109,
  name: "Slime Block",
  colors: {
      "g": "#b6e192",
      "G": "#76b052",
      "c": "#a1d877"
  },
  pixels: [
    "GGGGGGG",
    "GgggggG",
    "GgcccgG",
    "GgcccgG",
    "GgcccgG",
    "GgggggG",
    "GGGGGGG",
  ]
};
SPRITES["slime_block"] = SPRITES[109];

// 110: Aether Grass
SPRITES[110] = {
  id: 110,
  name: "Aether Grass",
  colors: {
      "c": "#b2ebf2",
      "C": "#4dd0e1",
      "d": "#eceff1",
      "D": "#cfd8dc"
  },
  pixels: [
    "ccccccc",
    "ccccccc",
    "cCcCCcC",
    "dDdDdDd",
    "ddDddDd",
    "DddDddd",
    "ddddDdd",
  ]
};
SPRITES["aether_grass"] = SPRITES[110];

// 111: Aether Dirt
SPRITES[111] = {
  id: 111,
  name: "Aether Dirt",
  colors: {
      "d": "#eceff1",
      "D": "#cfd8dc",
      "l": "#ffffff"
  },
  pixels: [
    "ddDddDd",
    "Dddlddd",
    "ddDddDd",
    "ddddDdd",
    "DddDddd",
    "ddldddD",
    "ddDdddd",
  ]
};
SPRITES["aether_dirt"] = SPRITES[111];

// 112: Holystone
SPRITES[112] = {
  id: 112,
  name: "Holystone",
  colors: {
      "h": "#f5f5f5",
      "H": "#e0e0e0",
      "l": "#ffffff"
  },
  pixels: [
    "hhhhhhH",
    "hllhhHh",
    "hlhhhhh",
    "hhhhHhh",
    "hHhhhhh",
    "hhhhllh",
    "Hhhhhhh",
  ]
};
SPRITES["holystone"] = SPRITES[112];

// 113: Ambrosium Ore
SPRITES[113] = {
  id: 113,
  name: "Ambrosium Ore",
  colors: {
      "h": "#f5f5f5",
      "H": "#e0e0e0",
      "y": "#f1c40f",
      "Y": "#f39c12"
  },
  pixels: [
    "hhhhhhH",
    "hyyhhHh",
    "hYYhyyh",
    "hhhhHhh",
    "hyyhhhh",
    "hYYhhHh",
    "Hhhhhhh",
  ]
};
SPRITES["ambrosium_ore"] = SPRITES[113];

// 114: Ambrosium Shard
SPRITES[114] = {
  id: 114,
  name: "Ambrosium Shard",
  colors: {
      "y": "#f1c40f",
      "Y": "#d4ac0d",
      "h": "#fff9c4",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "..yhy..",
    ".yhhhy.",
    ".yyyyy.",
    "..yYy..",
    "...Y...",
    ".......",
  ]
};
SPRITES["ambrosium_shard"] = SPRITES[114];

// 115: Skyroot Log
SPRITES[115] = {
  id: 115,
  name: "Skyroot Log",
  colors: {
      "l": "#cfd8dc",
      "L": "#90a4ae",
      "w": "#eceff1"
  },
  pixels: [
    "lLllLll",
    "lLllLll",
    "lLlwLll",
    "lLllLll",
    "lLllLll",
    "lLlwLll",
    "lLllLll",
  ]
};
SPRITES["skyroot_log"] = SPRITES[115];

// 116: Skyroot Leaves
SPRITES[116] = {
  id: 116,
  name: "Skyroot Leaves",
  colors: {
      "b": "#e1f5fe",
      "B": "#81d4fa",
      "w": "#ffffff"
  },
  pixels: [
    "bBbBbBb",
    "BbwBbwb",
    "bBbBbBb",
    "bwbBbwb",
    "bBbBbBb",
    "BbwBbwb",
    "bBbBbBb",
  ]
};
SPRITES["skyroot_leaves"] = SPRITES[116];

// 117: Zanite Ore
SPRITES[117] = {
  id: 117,
  name: "Zanite Ore",
  colors: {
      "h": "#f5f5f5",
      "H": "#e0e0e0",
      "z": "#9c27b0",
      "Z": "#7b1fa2"
  },
  pixels: [
    "hhhhhhH",
    "hzzhhHh",
    "hZZhzzh",
    "hhhhHhh",
    "hzzhhhh",
    "hZZhhHh",
    "Hhhhhhh",
  ]
};
SPRITES["zanite_ore"] = SPRITES[117];

// 118: Zanite Gem
SPRITES[118] = {
  id: 118,
  name: "Zanite Gem",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      "h": "#e1bee7",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "..zhz..",
    ".zhhhz.",
    ".zzzzz.",
    "..zZz..",
    "...Z...",
    ".......",
  ]
};
SPRITES["zanite_gem"] = SPRITES[118];

// 119: Aether Portal
SPRITES[119] = {
  id: 119,
  name: "Aether Portal",
  colors: {
      "c": "#e0f7fa",
      "C": "#81d4fa",
      "w": "#ffffff"
  },
  pixels: [
    "cCclcCc",
    "ClcCclC",
    "cCcwcCc",
    "wCcCclC",
    "cCcwcCc",
    "ClcCclC",
    "cCcwcCc",
  ]
};
SPRITES["aether_portal"] = SPRITES[119];

// 120: Farmland
SPRITES[120] = {
  id: 120,
  name: "Farmland",
  colors: {
      "d": "#4e342e",
      "D": "#3e2723",
      "w": "#271b17"
  },
  pixels: [
    "ddDddDd",
    "wwwwwww",
    "ddDddDd",
    "wwwwwww",
    "ddDddDd",
    "wwwwwww",
    "ddddDdd",
  ]
};
SPRITES["farmland"] = SPRITES[120];

// 121: Wood Hoe
SPRITES[121] = {
  id: 121,
  name: "Wood Hoe",
  colors: {
      "w": "#6d4c41",
      "W": "#3e2723",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".wWw...",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
  ]
};
SPRITES["wood_hoe"] = SPRITES[121];

// 122: Stone Hoe
SPRITES[122] = {
  id: 122,
  name: "Stone Hoe",
  colors: {
      "c": "#616161",
      "C": "#424242",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".cCc...",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
  ]
};
SPRITES["stone_hoe"] = SPRITES[122];

// 123: Iron Hoe
SPRITES[123] = {
  id: 123,
  name: "Iron Hoe",
  colors: {
      "i": "#e0e0e0",
      "I": "#bdbdbd",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".iIi...",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
  ]
};
SPRITES["iron_hoe"] = SPRITES[123];

// 124: Diamond Hoe
SPRITES[124] = {
  id: 124,
  name: "Diamond Hoe",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".dDd...",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
  ]
};
SPRITES["diamond_hoe"] = SPRITES[124];

// 125: Leather
SPRITES[125] = {
  id: 125,
  name: "Leather",
  colors: {
    "a": "#6b4b43",
    "b": "#8d6e63"
  },
  pixels: [
    "..a.a..",
    ".ababa.",
    "abbbbba",
    "abbbbba",
    "abbabba",
    "aba.aba",
    ".a...a."
  ]
};
SPRITES["leather"] = SPRITES[125];

// 130: Leather Helmet
SPRITES[130] = {
  id: 130,
  name: "Leather Helmet",
  colors: {
      "l": "#8d6e63",
      "L": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".lllll.",
    "lllllll",
    "ll...ll",
    "lllllll",
    "l.....l",
    ".......",
    ".......",
  ]
};
SPRITES["leather_helmet"] = SPRITES[130];

// 131: Leather Chestplate
SPRITES[131] = {
  id: 131,
  name: "Leather Chestplate",
  colors: {
      "l": "#8d6e63",
      "L": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    "l.....l",
    "lllllll",
    "lllllll",
    ".lllll.",
    ".lllll.",
    ".lllll.",
    ".......",
  ]
};
SPRITES["leather_chestplate"] = SPRITES[131];

// 132: Leather Leggings
SPRITES[132] = {
  id: 132,
  name: "Leather Leggings",
  colors: {
      "l": "#8d6e63",
      "L": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    "lllllll",
    "lllllll",
    "ll...ll",
    "ll...ll",
    "ll...ll",
    "ll...ll",
    ".......",
  ]
};
SPRITES["leather_leggings"] = SPRITES[132];

// 133: Leather Boots
SPRITES[133] = {
  id: 133,
  name: "Leather Boots",
  colors: {
      "l": "#8d6e63",
      "L": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".......",
    ".......",
    "l.....l",
    "l.....l",
    "ll...ll",
    "lll.lll",
    ".......",
  ]
};
SPRITES["leather_boots"] = SPRITES[133];

// 134: Iron Helmet
SPRITES[134] = {
  id: 134,
  name: "Iron Helmet",
  colors: {
      "i": "#f5f5f5",
      "I": "#bdbdbd",
      ".": "transparent"
  },
  pixels: [
    ".iiiii.",
    "iiiiiii",
    "ii...ii",
    "iiiiiii",
    "i.....i",
    ".......",
    ".......",
  ]
};
SPRITES["iron_helmet"] = SPRITES[134];

// 135: Iron Chestplate
SPRITES[135] = {
  id: 135,
  name: "Iron Chestplate",
  colors: {
      "i": "#f5f5f5",
      "I": "#bdbdbd",
      ".": "transparent"
  },
  pixels: [
    "i.....i",
    "iiiiiii",
    "iiiiiii",
    ".iiiii.",
    ".iiiii.",
    ".iiiii.",
    ".......",
  ]
};
SPRITES["iron_chestplate"] = SPRITES[135];

// 136: Iron Leggings
SPRITES[136] = {
  id: 136,
  name: "Iron Leggings",
  colors: {
      "i": "#f5f5f5",
      "I": "#bdbdbd",
      ".": "transparent"
  },
  pixels: [
    "iiiiiii",
    "iiiiiii",
    "ii...ii",
    "ii...ii",
    "ii...ii",
    "ii...ii",
    ".......",
  ]
};
SPRITES["iron_leggings"] = SPRITES[136];

// 137: Iron Boots
SPRITES[137] = {
  id: 137,
  name: "Iron Boots",
  colors: {
      "i": "#f5f5f5",
      "I": "#bdbdbd",
      ".": "transparent"
  },
  pixels: [
    ".......",
    ".......",
    "i.....i",
    "i.....i",
    "ii...ii",
    "iii.iii",
    ".......",
  ]
};
SPRITES["iron_boots"] = SPRITES[137];

// 138: Gold Helmet
SPRITES[138] = {
  id: 138,
  name: "Gold Helmet",
  colors: {
      "g": "#fff176",
      "G": "#fbc02d",
      ".": "transparent"
  },
  pixels: [
    ".ggggg.",
    "ggggggg",
    "gg...gg",
    "ggggggg",
    "g.....g",
    ".......",
    ".......",
  ]
};
SPRITES["gold_helmet"] = SPRITES[138];

// 139: Gold Chestplate
SPRITES[139] = {
  id: 139,
  name: "Gold Chestplate",
  colors: {
      "g": "#fff176",
      "G": "#fbc02d",
      ".": "transparent"
  },
  pixels: [
    "g.....g",
    "ggggggg",
    "ggggggg",
    ".ggggg.",
    ".ggggg.",
    ".ggggg.",
    ".......",
  ]
};
SPRITES["gold_chestplate"] = SPRITES[139];

// 140: Gold Leggings
SPRITES[140] = {
  id: 140,
  name: "Gold Leggings",
  colors: {
      "g": "#fff176",
      "G": "#fbc02d",
      ".": "transparent"
  },
  pixels: [
    "ggggggg",
    "ggggggg",
    "gg...gg",
    "gg...gg",
    "gg...gg",
    "gg...gg",
    ".......",
  ]
};
SPRITES["gold_leggings"] = SPRITES[140];

// 141: Gold Boots
SPRITES[141] = {
  id: 141,
  name: "Gold Boots",
  colors: {
      "g": "#fff176",
      "G": "#fbc02d",
      ".": "transparent"
  },
  pixels: [
    ".......",
    ".......",
    "g.....g",
    "g.....g",
    "gg...gg",
    "ggg.ggg",
    ".......",
  ]
};
SPRITES["gold_boots"] = SPRITES[141];

// 142: Diamond Helmet
SPRITES[142] = {
  id: 142,
  name: "Diamond Helmet",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      ".": "transparent"
  },
  pixels: [
    ".ddddd.",
    "ddddddd",
    "dd...dd",
    "ddddddd",
    "d.....d",
    ".......",
    ".......",
  ]
};
SPRITES["diamond_helmet"] = SPRITES[142];

// 143: Diamond Chestplate
SPRITES[143] = {
  id: 143,
  name: "Diamond Chestplate",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      ".": "transparent"
  },
  pixels: [
    "d.....d",
    "ddddddd",
    "ddddddd",
    ".ddddd.",
    ".ddddd.",
    ".ddddd.",
    ".......",
  ]
};
SPRITES["diamond_chestplate"] = SPRITES[143];

// 144: Diamond Leggings
SPRITES[144] = {
  id: 144,
  name: "Diamond Leggings",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      ".": "transparent"
  },
  pixels: [
    "ddddddd",
    "ddddddd",
    "dd...dd",
    "dd...dd",
    "dd...dd",
    "dd...dd",
    ".......",
  ]
};
SPRITES["diamond_leggings"] = SPRITES[144];

// 145: Diamond Boots
SPRITES[145] = {
  id: 145,
  name: "Diamond Boots",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      ".": "transparent"
  },
  pixels: [
    ".......",
    ".......",
    "d.....d",
    "d.....d",
    "dd...dd",
    "ddd.ddd",
    ".......",
  ]
};
SPRITES["diamond_boots"] = SPRITES[145];

// 150: Zanite Pickaxe
SPRITES[150] = {
  id: 150,
  name: "Zanite Pickaxe",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".zzZzz.",
    "z..s..z",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
  ]
};
SPRITES["zanite_pickaxe"] = SPRITES[150];

// 151: Zanite Shovel
SPRITES[151] = {
  id: 151,
  name: "Zanite Shovel",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    "..zzz..",
    ".zzZzz.",
    "..zzz..",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
  ]
};
SPRITES["zanite_shovel"] = SPRITES[151];

// 152: Zanite Axe
SPRITES[152] = {
  id: 152,
  name: "Zanite Axe",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    "..zz...",
    ".zzzz..",
    ".zzs...",
    "...s...",
    "...s...",
    "...s...",
    "...s...",
  ]
};
SPRITES["zanite_axe"] = SPRITES[152];

// 153: Zanite Sword
SPRITES[153] = {
  id: 153,
  name: "Zanite Sword",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".....zz",
    "....zz.",
    "...zz..",
    "Z.zz...",
    ".Zz....",
    "sZ.....",
    "s.Z....",
  ]
};
SPRITES["zanite_sword"] = SPRITES[153];

// 154: Zanite Hoe
SPRITES[154] = {
  id: 154,
  name: "Zanite Hoe",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      "s": "#5d4037",
      ".": "transparent"
  },
  pixels: [
    ".zZz...",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
    "....s..",
  ]
};
SPRITES["zanite_hoe"] = SPRITES[154];

// 155: Zanite Helmet
SPRITES[155] = {
  id: 155,
  name: "Zanite Helmet",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      ".": "transparent"
  },
  pixels: [
    ".zzzzz.",
    "zzzzzzz",
    "zz...zz",
    "zzzzzzz",
    "z.....z",
    ".......",
    ".......",
  ]
};
SPRITES["zanite_helmet"] = SPRITES[155];

// 156: Zanite Chestplate
SPRITES[156] = {
  id: 156,
  name: "Zanite Chestplate",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      ".": "transparent"
  },
  pixels: [
    "z.....z",
    "zzzzzzz",
    "zzzzzzz",
    ".zzzzz.",
    ".zzzzz.",
    ".zzzzz.",
    ".......",
  ]
};
SPRITES["zanite_chestplate"] = SPRITES[156];

// 157: Zanite Leggings
SPRITES[157] = {
  id: 157,
  name: "Zanite Leggings",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      ".": "transparent"
  },
  pixels: [
    "zzzzzzz",
    "zzzzzzz",
    "zz...zz",
    "zz...zz",
    "zz...zz",
    "zz...zz",
    ".......",
  ]
};
SPRITES["zanite_leggings"] = SPRITES[157];

// 158: Zanite Boots
SPRITES[158] = {
  id: 158,
  name: "Zanite Boots",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      ".": "transparent"
  },
  pixels: [
    ".......",
    ".......",
    "z.....z",
    "z.....z",
    "zz...zz",
    "zzz.zzz",
    ".......",
  ]
};
SPRITES["zanite_boots"] = SPRITES[158];

// 160: Iron Block
SPRITES[160] = {
  id: 160,
  name: "Iron Block",
  colors: {
      "i": "#f5f5f5",
      "I": "#bdbdbd",
      "w": "#ffffff"
  },
  pixels: [
    "wwwwwwI",
    "wiiiiiI",
    "wiiiiiI",
    "wiiiiiI",
    "wiiiiiI",
    "wiiiiiI",
    "IIIIIII",
  ]
};
SPRITES["iron_block"] = SPRITES[160];

// 161: Gold Block
SPRITES[161] = {
  id: 161,
  name: "Gold Block",
  colors: {
      "y": "#fff176",
      "Y": "#fbc02d",
      "w": "#fffde7"
  },
  pixels: [
    "wwwwwwY",
    "wyyyyyY",
    "wyyyyyY",
    "wyyyyyY",
    "wyyyyyY",
    "wyyyyyY",
    "YYYYYYY",
  ]
};
SPRITES["gold_block"] = SPRITES[161];

// 162: Diamond Block
SPRITES[162] = {
  id: 162,
  name: "Diamond Block",
  colors: {
      "d": "#00e5ff",
      "D": "#00b8d4",
      "w": "#e0f7fa"
  },
  pixels: [
    "wwwwwwD",
    "wdddddD",
    "wdddddD",
    "wdddddD",
    "wdddddD",
    "wdddddD",
    "DDDDDDD",
  ]
};
SPRITES["diamond_block"] = SPRITES[162];

// 163: Zanite Block
SPRITES[163] = {
  id: 163,
  name: "Zanite Block",
  colors: {
      "z": "#9c27b0",
      "Z": "#7b1fa2",
      "w": "#e1bee7"
  },
  pixels: [
    "wwwwwwZ",
    "wzzzzzZ",
    "wzzzzzZ",
    "wzzzzzZ",
    "wzzzzzZ",
    "wzzzzzZ",
    "ZZZZZZZ",
  ]
};
SPRITES["zanite_block"] = SPRITES[163];

// 164: Emerald Block
SPRITES[164] = {
  id: 164,
  name: "Emerald Block",
  colors: {
      "e": "#2ecc71",
      "E": "#27ae60",
      "w": "#a5d6a7"
  },
  pixels: [
    "wwwwwwE",
    "weeeeeE",
    "weeeeeE",
    "weeeeeE",
    "weeeeeE",
    "weeeeeE",
    "EEEEEEE",
  ]
};
SPRITES["emerald_block"] = SPRITES[164];

// 170: Carrot
SPRITES[170] = {
  id: 170,
  name: "Carrot",
  colors: {
      "o": "#ff9800",
      "O": "#e65100",
      "g": "#4caf50",
      ".": "transparent"
  },
  pixels: [
    ".....g.",
    "....g..",
    "...oo..",
    "..oOo..",
    ".ooo...",
    "..o....",
    ".......",
  ]
};
SPRITES["carrot"] = SPRITES[170];

// 171: Carrot Crop
SPRITES[171] = {
  id: 171,
  name: "Carrot Crop",
  colors: {
      "g": "#4caf50",
      "G": "#2e7d32",
      "o": "#ff9800",
      ".": "transparent"
  },
  pixels: [
    "..g.g..",
    ".gGgGg.",
    "..gGg..",
    "..ggg..",
    "..ooo..",
    "..ooo..",
    "...o...",
  ]
};
SPRITES["carrot_crop"] = SPRITES[171];

// 172: Time Setter
SPRITES[172] = {
  id: 172,
  name: "Time Setter",
  colors: {
    "a": "#4a148c",
    "b": "#9c27b0",
    "c": "#07b8f2",
    "d": "#757575",
    "e": "#292929",
    "f": "#fdd835"
  },
  pixels: [
    "abbbbba",
    "bccdeeb",
    "bcfddeb",
    "bcffdeb",
    "bcffdeb",
    "bccfeeb",
    "abbbbba"
  ]
};
SPRITES["time_setter"] = SPRITES[172];

// 173: Breaker
SPRITES[173] = {
  id: 173,
  name: "Breaker",
  colors: {
    "a": "#212121",
    "b": "#454545",
    "c": "#616161",
    "d": "#ff1744",
    "e": "#564424"
  },
  pixels: [
    "abcccba",
    "bcdddcb",
    "cdcecdc",
    "ccceccc",
    "ccceccc",
    "bcceccb",
    "abcccba"
  ]
};
SPRITES["breaker"] = SPRITES[173];

// 174: Observer
SPRITES[174] = {
  id: 174,
  name: "Observer",
  colors: {
    "a": "#383838",
    "b": "#212121",
    "c": "#575757",
    "d": "#424242",
    "e": "#111111",
    "f": "#ff1744"
  },
  pixels: [
    "abbabba",
    "accacca",
    "daadaad",
    "ddddddd",
    "aadddaa",
    "eadedae",
    "eefffee"
  ]
};
SPRITES["observer"] = SPRITES[174];

// 190: Mystic Grass
SPRITES[190] = {
  id: 190,
  name: "Mystic Grass",
  colors: {
      "p": "#9c27b0",
      "P": "#4a148c",
      "d": "#311b92",
      "D": "#1a237e"
  },
  pixels: [
    "ppppppp",
    "ppppppp",
    "pPpPPpP",
    "dDdDdDd",
    "ddDddDd",
    "DddDddd",
    "ddddDdd",
  ]
};
SPRITES["mystic_grass"] = SPRITES[190];

// 191: Mystic Dirt
SPRITES[191] = {
  id: 191,
  name: "Mystic Dirt",
  colors: {
      "d": "#4a148c",
      "D": "#311b92",
      "l": "#7b1fa2"
  },
  pixels: [
    "ddDddDd",
    "Dddlddd",
    "ddDddDd",
    "ddddDdd",
    "DddDddd",
    "ddldddD",
    "ddDdddd",
  ]
};
SPRITES["mystic_dirt"] = SPRITES[191];

// 192: Mystic Stone
SPRITES[192] = {
  id: 192,
  name: "Mystic Stone",
  colors: {
      "s": "#311b92",
      "S": "#1a237e",
      "l": "#4a148c"
  },
  pixels: [
    "ssssssS",
    "sllssSs",
    "slsssss",
    "ssssSss",
    "sSsssss",
    "sssslls",
    "Sssssss",
  ]
};
SPRITES["mystic_stone"] = SPRITES[192];

// 193: Mystic Log
SPRITES[193] = {
  id: 193,
  name: "Mystic Log",
  colors: {
      "b": "#1a237e",
      "B": "#0d47a1",
      "l": "#283593"
  },
  pixels: [
    "bBbbBbb",
    "bBbbBbb",
    "bBblBbb",
    "bBbbBbb",
    "bBbbBbb",
    "bBblBbb",
    "bBbbBbb",
  ]
};
SPRITES["mystic_log"] = SPRITES[193];

// 194: Mystic Leaves
SPRITES[194] = {
  id: 194,
  name: "Mystic Leaves",
  colors: {
      "p": "#e1bee7",
      "P": "#ba68c8",
      "l": "#f3e5f5"
  },
  pixels: [
    "pPpPpPp",
    "PplpPpl",
    "pPpPpPp",
    "plpPplp",
    "pPpPpPp",
    "PplpPpl",
    "pPpPpPp",
  ]
};
SPRITES["mystic_leaves"] = SPRITES[194];

// 195: Mystic Portal
SPRITES[195] = {
  id: 195,
  name: "Mystic Portal",
  colors: {
      "p": "#ba68c8",
      "P": "#9c27b0",
      "l": "#ea80fc"
  },
  pixels: [
    "pPplpPp",
    "PlpPplP",
    "pPllpPp",
    "lPpPplP",
    "pPplpPp",
    "PlpPplP",
    "pPplpPp",
  ]
};
SPRITES["mystic_portal"] = SPRITES[195];

// 196: Magic Wand
SPRITES[196] = {
  id: 196,
  name: "Magic Wand",
  colors: {
      "g": "#f1c40f",
      "p": "#9c27b0",
      "w": "#ffffff",
      ".": "transparent"
  },
  pixels: [
    "......w",
    ".....wg",
    "....g..",
    "...p...",
    "..p....",
    ".p.....",
    "p......",
  ]
};
SPRITES["magic_wand"] = SPRITES[196];

// 197: Mana Shard
SPRITES[197] = {
  id: 197,
  name: "Mana Shard",
  colors: {
      "m": "#00e5ff",
      "M": "#0097a7",
      "w": "#ffffff",
      ".": "transparent"
  },
  pixels: [
    ".......",
    "..mwm..",
    ".mwwwm.",
    ".mmmmm.",
    "..mMm..",
    "...M...",
    ".......",
  ]
};
SPRITES["mana_shard"] = SPRITES[197];

// 200: Empty Bottle
SPRITES[200] = {
  id: 200,
  name: "Empty Bottle",
  colors: {
    "a": "#8d6e63",
    "b": "#e0f7fa"
  },
  pixels: [
    "...a...",
    "...b...",
    "..bbb..",
    ".b...b.",
    ".b...b.",
    ".b...b.",
    "..bbb.."
  ]
};
SPRITES["empty_bottle"] = SPRITES[200];

// 201: Speed Potion
SPRITES[201] = {
  id: 201,
  name: "Speed Potion",
  colors: {
    "a": "#8d6e63",
    "b": "#e0f7fa",
    "c": "#81d4fa",
    "d": "#2d8bbe",
    "e": "#0288d1"
  },
  pixels: [
    "...a...",
    "...b...",
    "..bbb..",
    ".bcccb.",
    ".bdddb.",
    ".beeeb.",
    "..bbb.."
  ]
};
SPRITES["speed_potion"] = SPRITES[201];

// 202: Jump Potion
SPRITES[202] = {
  id: 202,
  name: "Jump Potion",
  colors: {
    "a": "#8d6e63",
    "b": "#e0f7fa",
    "c": "#a5d6a7",
    "d": "#639c65",
    "e": "#388e3c"
  },
  pixels: [
    "...a...",
    "...b...",
    "..bbb..",
    ".bcccb.",
    ".bdddb.",
    ".beeeb.",
    "..bbb.."
  ]
};
SPRITES["jump_potion"] = SPRITES[202];

// 203: Night Vision Potion
SPRITES[203] = {
  id: 203,
  name: "Night Vision Potion",
  colors: {
    "a": "#8d6e63",
    "b": "#e0f7fa",
    "c": "#9575cd",
    "d": "#512da8"
  },
  pixels: [
    "...a...",
    "...b...",
    "..bbb..",
    ".bcccb.",
    ".bdcdb.",
    ".bcccb.",
    "..bbb.."
  ]
};
SPRITES["night_vision_potion"] = SPRITES[203];

// 210: Crawler
SPRITES[210] = {
  id: 210,
  name: "Crawler",
  colors: {
    "a": "#828282",
    "b": "#666666",
    "c": "#ababab"
  },
  pixels: [
    "abcccba",
    "aabcbaa",
    "abacaba",
    "abacaba",
    "acbabca",
    "acabaca",
    "acabaca"
  ]
};
SPRITES["crawler"] = SPRITES[210];

// 211: Scrap
SPRITES[211] = {
  id: 211,
  name: "Scrap",
  colors: {
    "a": "#455a64",
    "b": "#78909c",
    "c": "#b0bec5",
    "d": "#37474f",
    ".": "transparent"
  },
  pixels: [
    "....a..",
    "..aabca",
    ".abcbda",
    ".acbda.",
    "abcba..",
    "aada...",
    "......."
  ]
};
SPRITES["scrap"] = SPRITES[211];

// 212: Scrap Block
SPRITES[212] = {
  id: 212,
  name: "Scrap Block",
  colors: {
    "a": "#37474f",
    "b": "#546e7a",
    "c": "#78909c",
    "d": "#90a4ae",
    "e": "#263238"
  },
  pixels: [
    "dabbbac",
    "acbccca",
    "bbeeebb",
    "abcbbaa",
    "bbeeebb",
    "acbbcaa",
    "cabbbad"
  ]
};
SPRITES["scrap_block"] = SPRITES[212];

// ==============================================================================
// SPRITE RENDERING ENGINE & HELPERS
// ==============================================================================

const _spriteCanvasCache = new Map();

/**
 * Returns an offscreen canvas with the rendered sprite at the requested size.
 * Uses crisp nearest-neighbor pixelated scaling.
 */
function getSpriteCanvas(idOrKey, targetSize = 32) {
  const entry = SPRITES[idOrKey];
  if (!entry) return null;

  const cacheKey = String(entry.id || idOrKey) + '_' + targetSize;
  if (_spriteCanvasCache.has(cacheKey)) {
    return _spriteCanvasCache.get(cacheKey);
  }

  // Handle both object format and raw array format
  const pixels = Array.isArray(entry) ? entry : entry.pixels;
  if (!pixels || !pixels.length) return null;

  const colors = entry.colors || {};
  const rows = pixels.length;
  const cols = pixels[0].length;

  const canvas = document.createElement('canvas');
  canvas.width = targetSize;
  canvas.height = targetSize;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const cellW = targetSize / cols;
  const cellH = targetSize / rows;

  for (let y = 0; y < rows; y++) {
    const rowStr = pixels[y];
    for (let x = 0; x < cols; x++) {
      const char = rowStr[x] || '.';
      let color = colors[char] || DEFAULT_SPRITE_PALETTE[char];
      if (!color || color === 'transparent' || color === 'none') {
        continue;
      }
      ctx.fillStyle = color;
      ctx.fillRect(
        Math.floor(x * cellW),
        Math.floor(y * cellH),
        Math.ceil(cellW),
        Math.ceil(cellH)
      );
    }
  }

  _spriteCanvasCache.set(cacheKey, canvas);
  return canvas;
}

/**
 * Draws a sprite directly to any 2D canvas context.
 */
function drawSprite(ctx, idOrKey, x, y, size = 32) {
  const canvas = getSpriteCanvas(idOrKey, Math.round(size));
  if (!canvas) return false;
  const prevSmoothing = ctx.imageSmoothingEnabled;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, x, y, size, size);
  ctx.imageSmoothingEnabled = prevSmoothing;
  return true;
}

/**
 * Checks if a sprite is defined for the given ID or key.
 */
function hasSprite(idOrKey) {
  return !!SPRITES[idOrKey];
}

/**
 * Clears all cached canvases. Call this if you modify SPRITES at runtime!
 */
function reloadSprites() {
  _spriteCanvasCache.clear();
}

// Expose globally to window
if (typeof window !== 'undefined') {
  window.SPRITES = SPRITES;
  window.DEFAULT_SPRITE_PALETTE = DEFAULT_SPRITE_PALETTE;
  window.getSpriteCanvas = getSpriteCanvas;
  window.drawSprite = drawSprite;
  window.hasSprite = hasSprite;
  window.reloadSprites = reloadSprites;
}

// Export for Node/ES environments if applicable
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SPRITES,
    DEFAULT_SPRITE_PALETTE,
    getSpriteCanvas,
    drawSprite,
    hasSprite,
    reloadSprites
  };
}
