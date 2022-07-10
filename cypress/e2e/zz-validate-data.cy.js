const allShows = { // TODO replace with proper Cypress fixtures... hopefully hooked up to the csv file?
  1: {id: 1, date: '1/26/2013', venue: 'Brooklyn Bowl'},
  2: {id: 2, date: '12/27/2013', venue: 'Capitol Theatre'},
  3: {id: 3, date: '8/1/2014', venue: 'Gathering of the Vibes'},
  4: {id: 4, date: '9/19/2014', venue: 'Concord Music Hall'},
  5: {id: 5, date: '9/20/2014', venue: 'Concord Music Hall'},
  6: {id: 6, date: '10/5/2014', venue: 'Hardly Strictly Bluegrass Festival'},
  7: {id: 7, date: '10/10/2014', venue: 'Boulder Theater'},
  8: {id: 8, date: '10/11/2014', venue: 'Ogden Theatre'},
  9: {id: 9, date: '11/2/2014', venue: 'Suwannee Hulaween'},
  10: {id: 10, date: '12/29/2014', venue: 'Capitol Theatre'},
  11: {id: 11, date: '12/30/2014', venue: 'Capitol Theatre'},
  12: {id: 12, date: '12/31/2014', venue: 'Capitol Theatre'},
  13: {id: 13, date: '1/23/2015', venue: 'Brooklyn Bowl'},
  14: {id: 14, date: '1/24/2015', venue: 'Brooklyn Bowl'},
  15: {id: 15, date: '2/5/2015', venue: 'Higher Ground'},
  16: {id: 16, date: '2/6/2015', venue: 'Paradise Rock Club'},
  17: {id: 17, date: '2/7/2015', venue: 'State Theater, Portland'},
  18: {id: 18, date: '2/8/2015', venue: 'Fete Ballroom'},
  19: {id: 19, date: '2/14/2015', venue: 'Ogden Theatre'},
  20: {id: 20, date: '2/15/2015', venue: 'Ogden Theatre'},
  21: {id: 21, date: '2/16/2015', venue: 'Boulder Theater'},
  22: {id: 22, date: '4/22/2015', venue: 'First Avenue, Minneapolis'},
  23: {id: 23, date: '4/23/2015', venue: 'Turner Hall Ballroom'},
  24: {id: 24, date: '4/24/2015', venue: 'Concord Music Hall'},
  25: {id: 25, date: '4/25/2015', venue: 'The Pageant'},
  26: {id: 26, date: '5/1/2015', venue: 'Joy Theater'},
  27: {id: 27, date: '5/2/2015', venue: 'Joy Theater'},
  28: {id: 28, date: '5/9/2015', venue: 'Capitol Theatre'},
  29: {id: 29, date: '5/16/2015', venue: 'Theater of the Living Arts'},
  30: {id: 30, date: '5/22/2015', venue: 'CounterPoint Music Festival'},
  31: {id: 31, date: '5/23/2015', venue: 'Summer Camp'},
  32: {id: 32, date: '5/24/2015', venue: 'Ville Festival'},
  33: {id: 33, date: '5/30/2015', venue: 'Beanstalk Festival'},
  34: {id: 34, date: '6/3/2015', venue: 'Songs of Love'},
  35: {id: 35, date: '6/5/2015', venue: 'Mountain Jam'},
  36: {id: 36, date: '6/6/2015', venue: 'Wakarusa'},
  37: {id: 37, date: '6/26/2015', venue: 'Electric Forest'},
  38: {id: 38, date: '7/5/2015', venue: 'High Sierra Music Festival'},
  39: {id: 39, date: '7/10/2015', venue: 'All Good Festival'},
  40: {id: 40, date: '8/8/2015', venue: 'Arise Festival'},
  41: {id: 41, date: '8/14/2015', venue: 'Peach Music Festival'},
  42: {id: 42, date: '8/22/2015', venue: 'The Music Box'},
  43: {id: 43, date: '9/4/2015', venue: 'North Coast Music Festival'},
  44: {id: 44, date: '9/6/2015', venue: 'Last Breath Farm'},
  45: {id: 45, date: '9/19/2015', venue: 'Harvest Jazz & Blues Festival'},
  46: {id: 46, date: '10/2/2015', venue: 'Brooklyn Bowl'},
  47: {id: 47, date: '10/3/2015', venue: 'Brooklyn Bowl'},
  48: {id: 48, date: '10/4/2015', venue: 'Brooklyn Bowl'},
  49: {id: 49, date: '10/28/2015', venue: 'The Orange Peel'},
  50: {id: 50, date: '10/29/2015', venue: 'Suwannee Hulaween'},
  51: {id: 51, date: '10/30/2015', venue: 'Music Farm'},
  52: {id: 52, date: '10/31/2015', venue: 'The Ritz'},
  53: {id: 53, date: '11/27/2015', venue: 'Paradise Rock Club'},
  54: {id: 54, date: '11/28/2015', venue: 'Paradise Rock Club'},
  55: {id: 55, date: '12/11/2015', venue: 'Brooklyn Bowl, Las Vegas'},
  56: {id: 56, date: '12/12/2015', venue: 'Fox Theater, Oakland'},
  57: {id: 57, date: '12/19/2015', venue: 'The Fillmore, Denver'},
  58: {id: 58, date: '12/31/2015', venue: 'The Fillmore, Philadelphia'},
  59: {id: 59, date: '1/1/2016', venue: 'Capitol Theatre'},
  60: {id: 60, date: '1/2/2016', venue: 'Capitol Theatre'},
  61: {id: 61, date: '1/6/2016', venue: 'Jam Cruise'},
  62: {id: 62, date: '1/7/2016', venue: 'Jam Cruise'},
  63: {id: 63, date: '2/10/2016', venue: 'The 9:30 Club'},
  64: {id: 64, date: '2/11/2016', venue: 'College Street Music Hall'},
  65: {id: 65, date: '2/12/2016', venue: 'Lupo\'s Heartbreak Hotel'},
  66: {id: 66, date: '2/13/2016', venue: 'State Theater, Portland'},
  67: {id: 67, date: '2/14/2016', venue: 'Higher Ground'},
  68: {id: 68, date: '3/24/2016', venue: 'Brooklyn Bowl'},
  69: {id: 69, date: '3/25/2016', venue: 'Brooklyn Bowl'},
  70: {id: 70, date: '3/26/2016', venue: 'Brooklyn Bowl'},
  71: {id: 71, date: '4/29/2016', venue: 'Joy Theater'},
  72: {id: 72, date: '4/30/2016', venue: 'Joy Theater'},
  73: {id: 73, date: '6/30/2016', venue: 'High Sierra Music Festival'},
  74: {id: 74, date: '7/1/2016', venue: 'The Depot'},
  75: {id: 75, date: '7/2/2016', venue: 'Belly Up'},
  76: {id: 76, date: '7/3/2016', venue: 'Red Rocks'},
  77: {id: 77, date: '8/13/2016', venue: 'Peach Music Festival'},
  78: {id: 78, date: '8/20/2016', venue: 'Hot August Music Festival'},
  79: {id: 79, date: '8/25/2016', venue: 'LOCKN'},
  80: {id: 80, date: '8/26/2016', venue: 'LOCKN'},
  81: {id: 81, date: '10/6/2016', venue: 'Brooklyn Bowl'},
  82: {id: 82, date: '10/7/2016', venue: 'Brooklyn Bowl'},
  83: {id: 83, date: '10/8/2016', venue: 'Brooklyn Bowl'},
  84: {id: 84, date: '11/11/2016', venue: 'House of Blues, San Diego'},
  85: {id: 85, date: '11/12/2016', venue: 'Fox Theater, Oakland'},
  86: {id: 86, date: '11/26/2016', venue: 'The Fillmore, Philadelphia'},
  87: {id: 87, date: '12/2/2016', venue: 'House of Blues, Boston'},
  88: {id: 88, date: '12/4/2016', venue: 'Breathless & Now Onyx Resorts'},
  89: {id: 89, date: '12/15/2016', venue: 'Ogden Theatre'},
  90: {id: 90, date: '12/16/2016', venue: 'Boulder Theater'},
  91: {id: 91, date: '12/17/2016', venue: 'Belly Up'},
  92: {id: 92, date: '12/28/2016', venue: 'Threes Brewing'},
  93: {id: 93, date: '12/29/2016', venue: 'Brooklyn Bowl'},
  94: {id: 94, date: '12/30/2016', venue: 'Capitol Theatre'},
  95: {id: 95, date: '12/31/2016', venue: 'Capitol Theatre'},
  96: {id: 96, date: '1/12/2017', venue: 'Ryman Auditorium'},
  97: {id: 97, date: '1/13/2017', venue: 'Music Farm'},
  98: {id: 98, date: '1/14/2017', venue: 'Sunshine Music Festival'},
  99: {id: 99, date: '1/15/2017', venue: 'Sunshine Music Festival'},
  100: {id: 100, date: '3/9/2017', venue: 'Brooklyn Bowl'},
  101: {id: 101, date: '3/10/2017', venue: 'Brooklyn Bowl'},
  102: {id: 102, date: '3/11/2017', venue: 'Brooklyn Bowl'},
  103: {id: 103, date: '3/16/2017', venue: 'Brooklyn Bowl'},
  104: {id: 104, date: '3/17/2017', venue: 'Brooklyn Bowl'},
  105: {id: 105, date: '3/18/2017', venue: 'Brooklyn Bowl'},
  106: {id: 106, date: '3/31/2017', venue: 'Fool\'s Paradise'},
  107: {id: 107, date: '4/28/2017', venue: 'Ogden Theatre'},
  108: {id: 108, date: '4/29/2017', venue: '1stBank Center'},
  109: {id: 109, date: '5/5/2017', venue: 'Joy Theater'},
  110: {id: 110, date: '5/6/2017', venue: 'Joy Theater'},
  111: {id: 111, date: '5/7/2017', venue: 'Joy Theater'},
  112: {id: 112, date: '6/3/2017', venue: 'Candler Park Music & Food Festival'},
  113: {id: 113, date: '7/16/2017', venue: 'Green River Festival'},
  114: {id: 114, date: '7/21/2017', venue: 'Capitol Theatre'},
  115: {id: 115, date: '7/22/2017', venue: 'Capitol Theatre'},
  116: {id: 116, date: '8/10/2017', venue: 'Peach Music Festival'},
  117: {id: 117, date: '8/25/2017', venue: 'LOCKN'},
  118: {id: 118, date: '8/26/2017', venue: 'LOCKN'},
  119: {id: 119, date: '8/31/2017', venue: 'Red Rocks'},
  120: {id: 120, date: '9/2/2017', venue: 'North Coast Music Festival'},
  121: {id: 121, date: '10/5/2017', venue: 'Brooklyn Bowl'},
  122: {id: 122, date: '10/6/2017', venue: 'Brooklyn Bowl'},
  123: {id: 123, date: '10/7/2017', venue: 'Brooklyn Bowl'},
  124: {id: 124, date: '10/12/2017', venue: 'Brooklyn Bowl'},
  125: {id: 125, date: '10/13/2017', venue: 'Brooklyn Bowl'},
  126: {id: 126, date: '10/14/2017', venue: 'Brooklyn Bowl'},
  127: {id: 127, date: '10/26/2017', venue: 'Hulaween'},
  128: {id: 128, date: '11/9/2017', venue: 'Teragram Ballroom'},
  129: {id: 129, date: '11/10/2017', venue: 'Teragram Ballroom'},
  130: {id: 130, date: '11/11/2017', venue: 'Fox Theater, Oakland'},
  131: {id: 131, date: '11/24/2017', venue: 'The Fillmore, Philadelphia'},
  132: {id: 132, date: '11/25/2017', venue: 'The Fillmore, Philadelphia'},
  133: {id: 133, date: '12/4/2017', venue: 'Dominican Holidaze'},
  134: {id: 134, date: '12/8/2017', venue: 'House of Blues, Boston'},
  135: {id: 135, date: '12/9/2017', venue: 'House of Blues, Boston'},
  136: {id: 136, date: '1/12/2018', venue: 'Capitol Theatre'},
  137: {id: 137, date: '1/13/2018', venue: 'Capitol Theatre'},
  138: {id: 138, date: '1/14/2018', venue: 'Capitol Theatre'},
  139: {id: 139, date: '2/15/2018', venue: 'War Memorial Auditorium'},
  140: {id: 140, date: '2/16/2018', venue: 'The Pageant'},
  141: {id: 141, date: '2/17/2018', venue: 'Riviera Theatre'},
  142: {id: 142, date: '2/18/2018', venue: 'Orpheum Theatre'},
  143: {id: 143, date: '3/8/2018', venue: 'Brooklyn Bowl'},
  144: {id: 144, date: '3/9/2018', venue: 'Brooklyn Bowl'},
  145: {id: 145, date: '3/10/2018', venue: 'Brooklyn Bowl'},
  146: {id: 146, date: '3/15/2018', venue: 'Landmark Theatre, Syracuse'},
  147: {id: 147, date: '3/16/2018', venue: 'Palace Theatre'},
  148: {id: 148, date: '3/17/2018', venue: 'State Theater, Portland'},
  149: {id: 149, date: '4/21/2018', venue: 'SweetWater 420 Fest'},
  150: {id: 150, date: '5/4/2018', venue: 'Mardi Gras World Ballroom'},
  151: {id: 151, date: '5/5/2018', venue: 'Mardi Gras World Ballroom'},
  152: {id: 152, date: '6/16/2018', venue: 'Founders Fest'},
  153: {id: 153, date: '7/13/2018', venue: 'Targhee Fest'},
  154: {id: 154, date: '7/14/2018', venue: 'The Depot'},
  155: {id: 155, date: '7/15/2018', venue: 'RIDE Festival'},
  156: {id: 156, date: '7/19/2018', venue: 'Prospect Park'},
  157: {id: 157, date: '7/20/2018', venue: 'Blue Hills Bank Pavilion'},
  158: {id: 158, date: '7/21/2018', venue: 'Peach Music Festival'},
  159: {id: 159, date: '8/2/2018', venue: 'Werk Out Music & Arts Festival'},
  160: {id: 160, date: '8/10/2018', venue: 'The Showbox'},
  161: {id: 161, date: '8/11/2018', venue: 'McDonald Theatre'},
  162: {id: 162, date: '8/12/2018', venue: 'Athletic Club of Bend'},
  163: {id: 163, date: '8/16/2018', venue: 'Red Rocks'},
  164: {id: 164, date: '8/23/2018', venue: 'LOCKN'},
  165: {id: 165, date: '8/24/2018', venue: 'LOCKN'},
  166: {id: 166, date: '9/8/2018', venue: 'Waterloo Music Festival'},
  167: {id: 167, date: '10/18/2018', venue: 'Tower Theater'},
  168: {id: 168, date: '10/19/2018', venue: 'Tower Theater'},
  169: {id: 169, date: '10/20/2018', venue: 'The Anthem'},
  170: {id: 170, date: '10/25/2018', venue: 'Hulaween'},
  171: {id: 171, date: '11/8/2018', venue: 'The Wiltern'},
  172: {id: 172, date: '11/9/2018', venue: 'The Wiltern'},
  173: {id: 173, date: '11/10/2018', venue: 'Fox Theater, Oakland'},
  174: {id: 174, date: '11/11/2018', venue: 'Fox Theater, Oakland'},
  175: {id: 175, date: '1/18/2019', venue: 'Capitol Theatre'},
  176: {id: 176, date: '1/19/2019', venue: 'Capitol Theatre'},
  177: {id: 177, date: '1/20/2019', venue: 'Capitol Theatre'},
  178: {id: 178, date: '2/14/2019', venue: 'Tabernacle'},
  179: {id: 179, date: '2/15/2019', venue: 'The Pageant'},
  180: {id: 180, date: '2/16/2019', venue: 'The Pageant'},
  181: {id: 181, date: '2/17/2019', venue: 'The Sylvee'},
  182: {id: 182, date: '3/1/2019', venue: 'Palace Theatre'},
  183: {id: 183, date: '3/2/2019', venue: 'State Theater, Portland'},
  184: {id: 184, date: '3/3/2019', venue: 'State Theater, Portland'},
  185: {id: 185, date: '3/13/2019', venue: 'Penn\'s Peak'},
  186: {id: 186, date: '3/14/2019', venue: 'College Street Music Hall'},
  187: {id: 187, date: '3/15/2019', venue: 'The Wellmont Theater'},
  188: {id: 188, date: '3/16/2019', venue: 'Masonic Cleveland Auditorium'},
  189: {id: 189, date: '4/19/2019', venue: 'SweetWater 420 Fest'},
  190: {id: 190, date: '4/26/2019', venue: 'Mardi Gras World Ballroom'},
  191: {id: 191, date: '4/27/2019', venue: 'Mardi Gras World Ballroom'},
  192: {id: 192, date: '5/31/2019', venue: 'Cuthbert Amphitheater'},
  193: {id: 193, date: '6/1/2019', venue: 'Marymoor Amphitheater'},
  194: {id: 194, date: '6/2/2019', venue: 'KettleHouse Amphitheater'},
  195: {id: 195, date: '6/14/2019', venue: 'Mountain Jam Festival'},
  196: {id: 196, date: '6/15/2019', venue: 'Bonnaroo Music & Arts Festival'},
  197: {id: 197, date: '7/11/2019', venue: 'Huntington Bank Pavilion at Northerly Island'},
  198: {id: 198, date: '7/13/2019', venue: 'Levitate Music Festival'},
  199: {id: 199, date: '7/27/2019', venue: 'Peach Music Festival'},
  200: {id: 200, date: '7/28/2019', venue: 'Lake Champlain Maritime Festival'},
  201: {id: 201, date: '8/16/2019', venue: 'Greek Theatre, Los Angeles'},
  202: {id: 202, date: '8/17/2019', venue: 'Frost Ampitheater'},
  203: {id: 203, date: '8/22/2019', venue: 'LOCKN'},
  204: {id: 204, date: '8/29/2019', venue: 'Red Rocks'},
  205: {id: 205, date: '9/12/2019', venue: 'House of Blues, Dallas'},
  206: {id: 206, date: '9/13/2019', venue: 'House of Blues, Houston'},
  207: {id: 207, date: '9/14/2019', venue: 'Austin City Limits Live'},
  208: {id: 208, date: '9/26/2019', venue: 'Metropolitan Opera House'},
  209: {id: 209, date: '9/27/2019', venue: 'Metropolitan Opera House'},
  210: {id: 210, date: '9/28/2019', venue: 'The Anthem'},
  211: {id: 211, date: '10/27/2019', venue: 'Hulaween'},
  212: {id: 212, date: '11/25/2019', venue: 'Brooklyn Bowl'},
  213: {id: 213, date: '2/21/2020', venue: 'Capitol Theatre'},
  214: {id: 214, date: '2/22/2020', venue: 'Capitol Theatre'},
  215: {id: 215, date: '2/23/2020', venue: 'Capitol Theatre'},
  216: {id: 216, date: '10/1/2020', venue: 'Capitol Theatre'},
  217: {id: 217, date: '10/2/2020', venue: 'Capitol Theatre'},
  218: {id: 218, date: '10/3/2020', venue: 'Capitol Theatre'},
  219: {id: 219, date: '5/28/2021', venue: 'Westville Music Bowl'},
  220: {id: 220, date: '5/29/2021', venue: 'Westville Music Bowl'},
  221: {id: 221, date: '5/30/2021', venue: 'Westville Music Bowl'},
  222: {id: 222, date: '6/18/2021', venue: 'Westville Music Bowl'},
  223: {id: 223, date: '6/19/2021', venue: 'Westville Music Bowl'},
  224: {id: 224, date: '6/20/2021', venue: 'Westville Music Bowl'},
  225: {id: 225, date: '7/2/2021', venue: 'Peach Music Festival'},
  226: {id: 226, date: '7/30/2021', venue: 'Westville Music Bowl'},
  227: {id: 227, date: '7/31/2021', venue: 'Westville Music Bowl'},
  228: {id: 228, date: '8/14/2021', venue: 'LOCKN'},
  229: {id: 229, date: '8/15/2021', venue: 'LOCKN'},
  230: {id: 230, date: '8/19/2021', venue: 'Jacobs Pavilion'},
  231: {id: 231, date: '8/20/2021', venue: 'Artpark'},
  232: {id: 232, date: '8/21/2021', venue: 'MECU Pavilion'},
  233: {id: 233, date: '8/23/2021', venue: 'Leader Bank Pavilion'},
  234: {id: 234, date: '9/4/2021', venue: 'Westville Music Bowl'},
  235: {id: 235, date: '9/24/2021', venue: 'Salvage Station'},
  236: {id: 236, date: '9/25/2021', venue: 'Salvage Station'},
  237: {id: 237, date: '10/1/2021', venue: 'private'},
  238: {id: 238, date: '10/7/2021', venue: 'Wellmont Theater'},
  239: {id: 239, date: '10/8/2021', venue: 'Wellmont Theater'},
  240: {id: 240, date: '10/9/2021', venue: 'Wellmont Theater'},
  241: {id: 241, date: '10/22/2021', venue: 'Hollywood Palladium'},
  242: {id: 242, date: '10/23/2021', venue: 'Frost Ampitheater'},
  243: {id: 243, date: '12/3/2021', venue: '1stBank Center'},
  244: {id: 244, date: '2/10/2022', venue: 'Brooklyn Bowl'},
  245: {id: 245, date: '2/11/2022', venue: 'Fillmore'},
  246: {id: 246, date: '2/12/2022', venue: 'Fillmore'},
  247: {id: 247, date: '3/17/2022', venue: 'Sylvee'},
  248: {id: 248, date: '3/18/2022', venue: 'Sylvee'},
  249: {id: 249, date: '3/19/2022', venue: 'Pageant'},
  250: {id: 250, date: '3/20/2022', venue: 'Pageant'},
  251: {id: 251, date: '4/28/2022', venue: 'Ovation'},
  252: {id: 252, date: '4/29/2022', venue: 'Rabbit Rabbit'},
  253: {id: 253, date: '4/30/2022', venue: 'Rabbit Rabbit'},
  254: {id: 254, date: '5/1/2022', venue: 'Centennial Olympic'},
  255: {id: 255, date: '5/14/2022', venue: 'Westville'},
  256: {id: 256, date: '5/15/2022', venue: 'BeachLife'},
  257: {id: 257, date: '5/27/2022', venue: 'Summer Camp'},
  258: {id: 258, date: '6/1/2022', venue: 'Ford'},
  259: {id: 259, date: '6/2/2022', venue: 'Ford'},
  260: {id: 260, date: '6/3/2022', venue: 'Red Rocks'},
  261: {id: 261, date: '6/24/2022', venue: 'Northlands'},
  262: {id: 262, date: '7/1/2022', venue: 'Peach'},
  263: {id: 263, date: '7/3/2022', venue: 'High Sierra'},
  264: {id: 264, date: '7/7/2022', venue: 'Snowshoe'},
  265: {id: 265, date: '7/8/2022', venue: 'Stage AE'},
  266: {id: 266, date: '7/9/2022', venue: 'Great South Bay'},
}

function validate(show) {
  const {id, date, venue} = allShows[show.id]
  it(`#${show.id} is ${date} @ ${venue}`, () => {
    cy.visit(`/show/${id}`)
    cy.get('main')
      .find('h1')
      .as('h1')
    cy.get('@h1')
      .contains(date)
    cy.get('@h1')
      .contains(venue)
  })
}

const isSampling = !Cypress.env('VALIDATE_ALL')

describe('data validation', () => {
  describe(`when isSampling = ${isSampling}`, () => {
    const timestamp = String(Date.now());
    Object.values(allShows)
      .filter(({id}) => isSampling ? timestamp.includes(id) : true)
      .forEach(validate)
  })
})
