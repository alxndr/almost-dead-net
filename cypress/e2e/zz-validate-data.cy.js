const allShows = [ // TODO replace with proper Cypress fixtures... hopefully hooked up to the csv file?
  {id: 1, date: '1/26/2013', venue: 'Brooklyn Bowl'},
  {id: 2, date: '12/27/2013', venue: 'Capitol Theatre'},
  {id: 3, date: '8/1/2014', venue: 'Gathering of the Vibes'},
  {id: 4, date: '9/19/2014', venue: 'Concord Music Hall'},
  {id: 5, date: '9/20/2014', venue: 'Concord Music Hall'},
  {id: 6, date: '10/5/2014', venue: 'Hardly Strictly Bluegrass Festival'},
  {id: 7, date: '10/10/2014', venue: 'Boulder Theater'},
  {id: 8, date: '10/11/2014', venue: 'Ogden Theatre'},
  {id: 9, date: '11/2/2014', venue: 'Suwannee Hulaween'},
  {id: 10, date: '12/29/2014', venue: 'Capitol Theatre'},
  {id: 11, date: '12/30/2014', venue: 'Capitol Theatre'},
  {id: 12, date: '12/31/2014', venue: 'Capitol Theatre'},
  {id: 13, date: '1/23/2015', venue: 'Brooklyn Bowl'},
  {id: 14, date: '1/24/2015', venue: 'Brooklyn Bowl'},
  {id: 15, date: '2/5/2015', venue: 'Higher Ground'},
  {id: 16, date: '2/6/2015', venue: 'Paradise Rock Club'},
  {id: 17, date: '2/7/2015', venue: 'State Theater, Portland'},
  {id: 18, date: '2/8/2015', venue: 'Fete Ballroom'},
  {id: 19, date: '2/14/2015', venue: 'Ogden Theatre'},
  {id: 20, date: '2/15/2015', venue: 'Ogden Theatre'},
  {id: 21, date: '2/16/2015', venue: 'Boulder Theater'},
  {id: 22, date: '4/22/2015', venue: 'First Avenue, Minneapolis'},
  {id: 23, date: '4/23/2015', venue: 'Turner Hall Ballroom'},
  {id: 24, date: '4/24/2015', venue: 'Concord Music Hall'},
  {id: 25, date: '4/25/2015', venue: 'The Pageant'},
  {id: 26, date: '5/1/2015', venue: 'Joy Theater'},
  {id: 27, date: '5/2/2015', venue: 'Joy Theater'},
  {id: 28, date: '5/9/2015', venue: 'Capitol Theatre'},
  {id: 29, date: '5/16/2015', venue: 'Theater of the Living Arts'},
  {id: 30, date: '5/22/2015', venue: 'CounterPoint Music Festival'},
  {id: 31, date: '5/23/2015', venue: 'Summer Camp'},
  {id: 32, date: '5/24/2015', venue: 'Ville Festival'},
  {id: 33, date: '5/30/2015', venue: 'Beanstalk Festival'},
  {id: 34, date: '6/3/2015', venue: 'Songs of Love'},
  {id: 35, date: '6/5/2015', venue: 'Mountain Jam'},
  {id: 36, date: '6/6/2015', venue: 'Wakarusa'},
  {id: 37, date: '6/26/2015', venue: 'Electric Forest'},
  {id: 38, date: '7/5/2015', venue: 'High Sierra Music Festival'},
  {id: 39, date: '7/10/2015', venue: 'All Good Festival'},
  {id: 40, date: '8/8/2015', venue: 'Arise Festival'},
  {id: 41, date: '8/14/2015', venue: 'Peach Music Festival'},
  {id: 42, date: '8/22/2015', venue: 'The Music Box'},
  {id: 43, date: '9/4/2015', venue: 'North Coast Music Festival'},
  {id: 44, date: '9/6/2015', venue: 'Last Breath Farm'},
  {id: 45, date: '9/19/2015', venue: 'Harvest Jazz & Blues Festival'},
  {id: 46, date: '10/2/2015', venue: 'Brooklyn Bowl'},
  {id: 47, date: '10/3/2015', venue: 'Brooklyn Bowl'},
  {id: 48, date: '10/4/2015', venue: 'Brooklyn Bowl'},
  {id: 49, date: '10/28/2015', venue: 'The Orange Peel'},
  {id: 50, date: '10/29/2015', venue: 'Suwannee Hulaween'},
  {id: 51, date: '10/30/2015', venue: 'Music Farm'},
  {id: 52, date: '10/31/2015', venue: 'The Ritz'},
  {id: 53, date: '11/27/2015', venue: 'Paradise Rock Club'},
  {id: 54, date: '11/28/2015', venue: 'Paradise Rock Club'},
  {id: 55, date: '12/11/2015', venue: 'Brooklyn Bowl, Las Vegas'},
  {id: 56, date: '12/12/2015', venue: 'Fox Theater, Oakland'},
  {id: 57, date: '12/19/2015', venue: 'The Fillmore, Denver'},
  {id: 58, date: '12/31/2015', venue: 'The Fillmore, Philadelphia'},
  {id: 59, date: '1/1/2016', venue: 'Capitol Theatre'},
  {id: 60, date: '1/2/2016', venue: 'Capitol Theatre'},
  {id: 61, date: '1/6/2016', venue: 'Jam Cruise'},
  {id: 62, date: '1/7/2016', venue: 'Jam Cruise'},
  {id: 63, date: '2/10/2016', venue: 'The 9:30 Club'},
  {id: 64, date: '2/11/2016', venue: 'College Street Music Hall'},
  {id: 65, date: '2/12/2016', venue: 'Lupo\'s Heartbreak Hotel'},
  {id: 66, date: '2/13/2016', venue: 'State Theater, Portland'},
  {id: 67, date: '2/14/2016', venue: 'Higher Ground'},
  {id: 68, date: '3/24/2016', venue: 'Brooklyn Bowl'},
  {id: 69, date: '3/25/2016', venue: 'Brooklyn Bowl'},
  {id: 70, date: '3/26/2016', venue: 'Brooklyn Bowl'},
  {id: 71, date: '4/29/2016', venue: 'Joy Theater'},
  {id: 72, date: '4/30/2016', venue: 'Joy Theater'},
  {id: 73, date: '6/30/2016', venue: 'High Sierra Music Festival'},
  {id: 74, date: '7/1/2016', venue: 'The Depot'},
  {id: 75, date: '7/2/2016', venue: 'Belly Up'},
  {id: 76, date: '7/3/2016', venue: 'Red Rocks'},
  {id: 77, date: '8/13/2016', venue: 'Peach Music Festival'},
  {id: 78, date: '8/20/2016', venue: 'Hot August Music Festival'},
  {id: 79, date: '8/25/2016', venue: 'LOCKN'},
  {id: 80, date: '8/26/2016', venue: 'LOCKN'},
  {id: 81, date: '10/6/2016', venue: 'Brooklyn Bowl'},
  {id: 82, date: '10/7/2016', venue: 'Brooklyn Bowl'},
  {id: 83, date: '10/8/2016', venue: 'Brooklyn Bowl'},
  {id: 84, date: '11/11/2016', venue: 'House of Blues, San Diego'},
  {id: 85, date: '11/12/2016', venue: 'Fox Theater, Oakland'},
  {id: 86, date: '11/26/2016', venue: 'The Fillmore, Philadelphia'},
  {id: 87, date: '12/2/2016', venue: 'House of Blues, Boston'},
  {id: 88, date: '12/4/2016', venue: 'Breathless & Now Onyx Resorts'},
  {id: 89, date: '12/15/2016', venue: 'Ogden Theatre'},
  {id: 90, date: '12/16/2016', venue: 'Boulder Theater'},
  {id: 91, date: '12/17/2016', venue: 'Belly Up'},
  {id: 92, date: '12/28/2016', venue: 'Threes Brewing'},
  {id: 93, date: '12/29/2016', venue: 'Brooklyn Bowl'},
  {id: 94, date: '12/30/2016', venue: 'Capitol Theatre'},
  {id: 95, date: '12/31/2016', venue: 'Capitol Theatre'},
  {id: 96, date: '1/12/2017', venue: 'Ryman Auditorium'},
  {id: 97, date: '1/13/2017', venue: 'Music Farm'},
  {id: 98, date: '1/14/2017', venue: 'Sunshine Music Festival'},
  {id: 99, date: '1/15/2017', venue: 'Sunshine Music Festival'},
   {id: 100, date: '3/9/2017', venue: 'Brooklyn Bowl'},
   {id: 101, date: '3/10/2017', venue: 'Brooklyn Bowl'},
   {id: 102, date: '3/11/2017', venue: 'Brooklyn Bowl'},
   {id: 103, date: '3/16/2017', venue: 'Brooklyn Bowl'},
   {id: 104, date: '3/17/2017', venue: 'Brooklyn Bowl'},
   {id: 105, date: '3/18/2017', venue: 'Brooklyn Bowl'},
   {id: 106, date: '3/31/2017', venue: 'Fool\'s Paradise'},
   {id: 107, date: '4/28/2017', venue: 'Ogden Theatre'},
   {id: 108, date: '4/29/2017', venue: '1stBank Center'},
   {id: 109, date: '5/5/2017', venue: 'Joy Theater'},
   {id: 110, date: '5/6/2017', venue: 'Joy Theater'},
   {id: 111, date: '5/7/2017', venue: 'Joy Theater'},
   {id: 112, date: '6/3/2017', venue: 'Candler Park Music & Food Festival'},
   {id: 113, date: '7/16/2017', venue: 'Green River Festival'},
   {id: 114, date: '7/21/2017', venue: 'Capitol Theatre'},
   {id: 115, date: '7/22/2017', venue: 'Capitol Theatre'},
   {id: 116, date: '8/10/2017', venue: 'Peach Music Festival'},
   {id: 117, date: '8/25/2017', venue: 'LOCKN'},
   {id: 118, date: '8/26/2017', venue: 'LOCKN'},
   {id: 119, date: '8/31/2017', venue: 'Red Rocks'},
   {id: 120, date: '9/2/2017', venue: 'North Coast Music Festival'},
   {id: 121, date: '10/5/2017', venue: 'Brooklyn Bowl'},
   {id: 122, date: '10/6/2017', venue: 'Brooklyn Bowl'},
   {id: 123, date: '10/7/2017', venue: 'Brooklyn Bowl'},
   {id: 124, date: '10/12/2017', venue: 'Brooklyn Bowl'},
   {id: 125, date: '10/13/2017', venue: 'Brooklyn Bowl'},
   {id: 126, date: '10/14/2017', venue: 'Brooklyn Bowl'},
   {id: 127, date: '10/26/2017', venue: 'Hulaween'},
   {id: 128, date: '11/9/2017', venue: 'Teragram Ballroom'},
   {id: 129, date: '11/10/2017', venue: 'Teragram Ballroom'},
   {id: 130, date: '11/11/2017', venue: 'Fox Theater, Oakland'},
   {id: 131, date: '11/24/2017', venue: 'The Fillmore, Philadelphia'},
   {id: 132, date: '11/25/2017', venue: 'The Fillmore, Philadelphia'},
   {id: 133, date: '12/4/2017', venue: 'Dominican Holidaze'},
   {id: 134, date: '12/8/2017', venue: 'House of Blues, Boston'},
   {id: 135, date: '12/9/2017', venue: 'House of Blues, Boston'},
   {id: 136, date: '1/12/2018', venue: 'Capitol Theatre'},
   {id: 137, date: '1/13/2018', venue: 'Capitol Theatre'},
   {id: 138, date: '1/14/2018', venue: 'Capitol Theatre'},
   {id: 139, date: '2/15/2018', venue: 'War Memorial Auditorium'},
   {id: 140, date: '2/16/2018', venue: 'The Pageant'},
   {id: 141, date: '2/17/2018', venue: 'Riviera Theatre'},
   {id: 142, date: '2/18/2018', venue: 'Orpheum Theatre'},
   {id: 143, date: '3/8/2018', venue: 'Brooklyn Bowl'},
   {id: 144, date: '3/9/2018', venue: 'Brooklyn Bowl'},
   {id: 145, date: '3/10/2018', venue: 'Brooklyn Bowl'},
   {id: 146, date: '3/15/2018', venue: 'Landmark Theatre, Syracuse'},
   {id: 147, date: '3/16/2018', venue: 'Palace Theatre'},
   {id: 148, date: '3/17/2018', venue: 'State Theater, Portland'},
   {id: 149, date: '4/21/2018', venue: 'SweetWater 420 Fest'},
   {id: 150, date: '5/4/2018', venue: 'Mardi Gras World Ballroom'},
   {id: 151, date: '5/5/2018', venue: 'Mardi Gras World Ballroom'},
   {id: 152, date: '6/16/2018', venue: 'Founders Fest'},
   {id: 153, date: '7/13/2018', venue: 'Targhee Fest'},
   {id: 154, date: '7/14/2018', venue: 'The Depot'},
   {id: 155, date: '7/15/2018', venue: 'RIDE Festival'},
   {id: 156, date: '7/19/2018', venue: 'Prospect Park'},
   {id: 157, date: '7/20/2018', venue: 'Blue Hills Bank Pavilion'},
   {id: 158, date: '7/21/2018', venue: 'Peach Music Festival'},
   {id: 159, date: '8/2/2018', venue: 'Werk Out Music & Arts Festival'},
   {id: 160, date: '8/10/2018', venue: 'The Showbox'},
   {id: 161, date: '8/11/2018', venue: 'McDonald Theatre'},
   {id: 162, date: '8/12/2018', venue: 'Athletic Club of Bend'},
   {id: 163, date: '8/16/2018', venue: 'Red Rocks'},
   {id: 164, date: '8/23/2018', venue: 'LOCKN'},
   {id: 165, date: '8/24/2018', venue: 'LOCKN'},
   {id: 166, date: '9/8/2018', venue: 'Waterloo Music Festival'},
   {id: 167, date: '10/18/2018', venue: 'Tower Theater'},
   {id: 168, date: '10/19/2018', venue: 'Tower Theater'},
   {id: 169, date: '10/20/2018', venue: 'The Anthem'},
   {id: 170, date: '10/25/2018', venue: 'Hulaween'},
   {id: 171, date: '11/8/2018', venue: 'The Wiltern'},
   {id: 172, date: '11/9/2018', venue: 'The Wiltern'},
   {id: 173, date: '11/10/2018', venue: 'Fox Theater, Oakland'},
   {id: 174, date: '11/11/2018', venue: 'Fox Theater, Oakland'},
   {id: 175, date: '1/18/2019', venue: 'Capitol Theatre'},
   {id: 176, date: '1/19/2019', venue: 'Capitol Theatre'},
   {id: 177, date: '1/20/2019', venue: 'Capitol Theatre'},
   {id: 178, date: '2/14/2019', venue: 'Tabernacle'},
   {id: 179, date: '2/15/2019', venue: 'The Pageant'},
   {id: 180, date: '2/16/2019', venue: 'The Pageant'},
   {id: 181, date: '2/17/2019', venue: 'The Sylvee'},
   {id: 182, date: '3/1/2019', venue: 'Palace Theatre'},
   {id: 183, date: '3/2/2019', venue: 'State Theater, Portland'},
   {id: 184, date: '3/3/2019', venue: 'State Theater, Portland'},
   {id: 185, date: '3/13/2019', venue: 'Penn\'s Peak'},
   {id: 186, date: '3/14/2019', venue: 'College Street Music Hall'},
   {id: 187, date: '3/15/2019', venue: 'The Wellmont Theater'},
   {id: 188, date: '3/16/2019', venue: 'Masonic Cleveland Auditorium'},
   {id: 189, date: '4/19/2019', venue: 'SweetWater 420 Fest'},
   {id: 190, date: '4/26/2019', venue: 'Mardi Gras World Ballroom'},
   {id: 191, date: '4/27/2019', venue: 'Mardi Gras World Ballroom'},
   {id: 192, date: '5/31/2019', venue: 'Cuthbert Amphitheater'},
   {id: 193, date: '6/1/2019', venue: 'Marymoor Amphitheater'},
   {id: 194, date: '6/2/2019', venue: 'KettleHouse Amphitheater'},
   {id: 195, date: '6/14/2019', venue: 'Mountain Jam Festival'},
   {id: 196, date: '6/15/2019', venue: 'Bonnaroo Music & Arts Festival'},
   {id: 197, date: '7/11/2019', venue: 'Huntington Bank Pavilion at Northerly Island'},
   {id: 198, date: '7/13/2019', venue: 'Levitate Music Festival'},
   {id: 199, date: '7/27/2019', venue: 'Peach Music Festival'},
   {id: 200, date: '7/28/2019', venue: 'Lake Champlain Maritime Festival'},
   {id: 201, date: '8/16/2019', venue: 'Greek Theatre, Los Angeles'},
   {id: 202, date: '8/17/2019', venue: 'Frost Ampitheater'},
   {id: 203, date: '8/22/2019', venue: 'LOCKN'},
   {id: 204, date: '8/29/2019', venue: 'Red Rocks'},
   {id: 205, date: '9/12/2019', venue: 'House of Blues, Dallas'},
   {id: 206, date: '9/13/2019', venue: 'House of Blues, Houston'},
   {id: 207, date: '9/14/2019', venue: 'Austin City Limits Live'},
   {id: 208, date: '9/26/2019', venue: 'Metropolitan Opera House'},
   {id: 209, date: '9/27/2019', venue: 'Metropolitan Opera House'},
   {id: 210, date: '9/28/2019', venue: 'The Anthem'},
   {id: 211, date: '10/27/2019', venue: 'Hulaween'},
   {id: 212, date: '11/25/2019', venue: 'Brooklyn Bowl'},
   {id: 213, date: '2/21/2020', venue: 'Capitol Theatre'},
   {id: 214, date: '2/22/2020', venue: 'Capitol Theatre'},
   {id: 215, date: '2/23/2020', venue: 'Capitol Theatre'},
   {id: 216, date: '10/1/2020', venue: 'Capitol Theatre'},
   {id: 217, date: '10/2/2020', venue: 'Capitol Theatre'},
   {id: 218, date: '10/3/2020', venue: 'Capitol Theatre'},
   {id: 219, date: '5/28/2021', venue: 'Westville Music Bowl'},
   {id: 220, date: '5/29/2021', venue: 'Westville Music Bowl'},
   {id: 221, date: '5/30/2021', venue: 'Westville Music Bowl'},
   {id: 222, date: '6/18/2021', venue: 'Westville Music Bowl'},
   {id: 223, date: '6/19/2021', venue: 'Westville Music Bowl'},
   {id: 224, date: '6/20/2021', venue: 'Westville Music Bowl'},
   {id: 225, date: '7/2/2021', venue: 'Peach Music Festival'},
   {id: 226, date: '7/30/2021', venue: 'Westville Music Bowl'},
   {id: 227, date: '7/31/2021', venue: 'Westville Music Bowl'},
   {id: 228, date: '8/14/2021', venue: 'LOCKN'},
   {id: 229, date: '8/15/2021', venue: 'LOCKN'},
   {id: 230, date: '8/19/2021', venue: 'Jacobs Pavilion'},
   {id: 231, date: '8/20/2021', venue: 'Artpark'},
   {id: 232, date: '8/21/2021', venue: 'MECU Pavilion'},
   {id: 233, date: '8/23/2021', venue: 'Leader Bank Pavilion'},
   {id: 234, date: '9/4/2021', venue: 'Westville Music Bowl'},
   {id: 235, date: '9/24/2021', venue: 'Salvage Station'},
   {id: 236, date: '9/25/2021', venue: 'Salvage Station'},
   {id: 237, date: '10/1/2021', venue: 'private'},
   {id: 238, date: '10/7/2021', venue: 'Wellmont Theater'},
   {id: 239, date: '10/8/2021', venue: 'Wellmont Theater'},
   {id: 240, date: '10/9/2021', venue: 'Wellmont Theater'},
   {id: 241, date: '10/22/2021', venue: 'Hollywood Palladium'},
   {id: 242, date: '10/23/2021', venue: 'Frost Ampitheater'},
   {id: 243, date: '12/3/2021', venue: '1stBank Center'},
   {id: 244, date: '2/10/2022', venue: 'Brooklyn Bowl'},
   {id: 245, date: '2/11/2022', venue: 'Fillmore'},
   {id: 246, date: '2/12/2022', venue: 'Fillmore'},
   {id: 247, date: '3/17/2022', venue: 'Sylvee'},
   {id: 248, date: '3/18/2022', venue: 'Sylvee'},
   {id: 249, date: '3/19/2022', venue: 'Pageant'},
   {id: 250, date: '3/20/2022', venue: 'Pageant'},
   {id: 251, date: '4/28/2022', venue: 'Ovation'},
   {id: 252, date: '4/29/2022', venue: 'Rabbit Rabbit'},
   {id: 253, date: '4/30/2022', venue: 'Rabbit Rabbit'},
   {id: 254, date: '5/1/2022', venue: 'Centennial Olympic'},
   {id: 255, date: '5/14/2022', venue: 'Westville'},
   {id: 256, date: '5/15/2022', venue: 'BeachLife'},
   {id: 257, date: '5/27/2022', venue: 'Summer Camp'},
   {id: 258, date: '6/1/2022', venue: 'Ford'},
   {id: 259, date: '6/2/2022', venue: 'Ford'},
   {id: 260, date: '6/3/2022', venue: 'Red Rocks'},
   {id: 261, date: '6/24/2022', venue: 'Northlands'},
   {id: 262, date: '7/1/2022', venue: 'Peach'},
   {id: 263, date: '7/3/2022', venue: 'High Sierra'},
   {id: 264, date: '7/7/2022', venue: 'Snowshoe'},
   {id: 265, date: '7/8/2022', venue: 'Stage AE'},
   {id: 266, date: '7/9/2022', venue: 'Great South Bay'},
   {id: 267, date: '7/21/2022', venue: 'KettleHouse'},
   {id: 268, date: '7/22/2022', venue: 'String Summit'},
   {id: 269, date: '8/12/2022', venue: 'Palladium'},
   {id: 270, date: '8/13/2022', venue: 'Frost'},
   {id: 271, date: '8/25/2022', venue: 'Saratoga'},
   {id: 272, date: '8/26/2022', venue: 'Pavilion'},
   {id: 273, date: '8/27/2022', venue: 'Pavilion'},
   {id: 274, date: '9/29/2022', venue: 'Wellmont'},
   {id: 275, date: '9/30/2022', venue: 'Wellmont'},
   {id: 276, date: '10/1/2022', venue: 'Wellmont'},
   {id: 277, date: '10/30/2022', venue: 'Hulaween'},
]

function validate(show) {
  const {id, date, venue} = allShows[show.id - 1]
  it(`#${show.id} is ${date} @ ${venue}`, () => {
    cy.visit(`/show/${id}`)
    cy.get('main')
      .find('h1')
      .as('h1')
    cy.get('@h1')
      .contains(date)
    cy.get('@h1')
      .contains(venue)
    cy.contains('Video unavailable')
      .should('not.exist')
  })
}

const isSampling = !Cypress.env('VALIDATE_ALL')

describe('data validation', () => {
  describe(`when isSampling = ${isSampling}`, () => {
    const timestamp = String(Date.now());
    allShows
      .filter(({id}) => isSampling ? timestamp.includes(id) : true)
      .forEach(validate)
  })
})
