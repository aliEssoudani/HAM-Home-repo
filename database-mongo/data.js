
const samplePosts = [
  { 
    username: "Michael V. Kline",
    imagesrc: ['https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/IS7a7ygdodown61000000000.webp',
        'https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISz35my6k5gzn61000000000.webp',
        'https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/IS3znoyz69kvb50000000000.webp',
        'https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISbtkch2hqfdrj1000000000.webp'],
    price: 3.000,
    rooms: '2 bedrooms - 2 bathrooms',
    address: '185 Woodbine Ave, Staten Island, New York',
    rating: 7.8,
    description: "Owner pay water & sewer Fantastic location you will love this beautifully light and bright fully renovated house 4 bedroom & 2 bathroom with garage driveway backyard Near major roadways and bus transportation with a fast & easy commute to NYC convenient to everything.You have plenty of outdoor space to relax or enjoy and barbequing.No pets & no smoking",
    date: "2018-04-19T12:59-0500",
    availibility: true
  },
  { 
    username: "Robert P. Collins",
    imagesrc: ["https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISzn860zub6asq0000000000.webp"],
    price: 2.200,
    rooms: '3 bedrooms - 1 bathroom',
    address: '14018 246th St, Jamaica, New York',
    rating: 6.5,
    description: "Updated 3-bedroom apartment in a beautiful home that is in a very convenient location.",
    date: "2019-09-22T12:59-0500",
    availibility: true
  },
  {
    username: "Pablo P. Prescott",
    imagesrc: ["https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISr1q2xzuw0e7p0000000000.webp",
        "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISjvnqetqosg7p0000000000.webp",
        "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISbplewmmgkj7p0000000000.webp",
        "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISvchqv9e04p7p0000000000.webp"],
    price: 1.250,
    rooms: '1 bedroom - 1 bathroom',
    address: '79 Weiner St, Staten Island, New York',
    rating: 6.2,
    description: "Spacious one bedroom apartment for rent in Richmond Valley!! This immaculate 2nd floor apartment is located on a beautiful block with plenty of parking. Only a two block walk to the train. Close to Expwy & Outerbridge. Short walk to Bricktown Mall/Target shopping center.",
    date: "2019-01-07T12:59-0500",
    availibility: true
  },
  {
    username: "Mario E. Randall",
    imagesrc: ["https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISr1ikh9b94nts1000000000.webp",
        "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISbpdwgw2tnsts1000000000.webp",
        "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISzn0wetdga9us1000000000.webp",
        "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISjbw7eg50ueus1000000000.webp"],
    price: 4.600,
    rooms: '5 bedrooms - 2 bathrooms',
    address: '6927 181st St. Flushing, New York',
    rating: 7.3,
    description: "Center Hall Colonial Located In The Heart Of Fresh Meadows Features 5 Bedrooms, 2.5 Bathrooms and Extra Large Backyard.",
    date: "2018-11-07T12:59-0500",
    availibility: true
  },
  {
    username: "Julia E. Folse",
    imagesrc: ["https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISbp1frfzuv8xp0000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISb17niunaqump0000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISvcxqq2refexp0000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISrx22mj498hyp0000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISf0t2qpiyyjxp0000000000.webp"],
    price: 5.200,
    rooms: '3 bedrooms - 3 bathrooms',
    address: '2049 West St, Brooklyn, New York',
    rating: 7.0,
    description: "Whole Gravesend House for Rent . Ave T~ West St. 4bd with 3 bathrooms and Private parking, $6000 neg. www.TeamYona.com. Wide Comfortable home 3 baths ONE ON EACH FLOOR 4 Bedrooms 3 on second floor, a 4th in basement Master is nice and big Renovated kitchen with stainless steel appliance, back door to back yard and garage! Separate Dining Room and Living Room on main level, with full bath. Nice layout and flow Finished basement + guest room + full bathroom. Laundry hook up in the basement. Large Backyard GOOD INCOME & Credit over 700 LEASE SIGNING: One month security First months rent One month agents fee Follow me on instagram @teamyonaschampions",
    date: "2017-12-12T12:59-0500",
    availibility: true
  },
  {
    username: "Natasha D. Strausbaugh",
    imagesrc: ["https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISfglje70719sx1000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISnmnvwd4f96sx1000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/IS7aj7w0wysbsx1000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISrxejvnnichsx1000000000.webp"
            ],
    price: 2.050,
    rooms: '2 bedrooms - 1 bathroom',
    address: '20-05 Willets Point Blvd, Whitestone, New York',
    rating: 6.8,
    description: "New To The Market and will not last long. This is a Spacious 2 bedroom on the First Floor of a 2 Family Home with access to yard space. Completely Renovated Move in Ready. Chef inspired Galley Style Kitchen with Dishwasher Granite Countertops and Stainless Steel Appliances. Large Open Living Room and Formal dining room. Immaculate Bathroom with Floor to ceiling tiles and 2 Bedrooms queen size Br and a smaller bedroom. Close to stores transportation and shopping. Heat gas and water included. Sorry no pets. Move in ASAP",
    date: "2019-08-08T12:59-0500",
    availibility: true
  },
  {
    username: "Maryanne D. Bode",
    imagesrc: ["https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISf0pbiipvwc7b0000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISjntt67wstk4b1000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISr98uc30qg3201000000000.webp"
            ],
    price: 1.750,
    rooms: '2 bedrooms - 1 bathroom',
    address: 'Malone Ave, Staten Island, New York',
    rating: 5.9,
    description: "First floor two bedroom apartment. Heat and hot water is included. Close to shopping center, transportation and parks. No pets & no smoking.",
    date: "2020-02-02T12:59-0500",
    availibility: true
  },
  {
    username: "Vicki A. Bartlett",
    imagesrc: ["https://cdn2.french-property.com/image/upload/v1591968944/1-IFPC30109-c67033450940256e58c0.jpg",
            "https://cdn2.french-property.com/image/upload/v1591968944/1-IFPC30109-0a7aeb05188c36c19cd4.jpg",
            "https://cdn2.french-property.com/image/upload/v1591968944/1-IFPC30109-1aa05d40cd83974de7c9.jpg",
            "https://cdn2.french-property.com/image/upload/v1591968944/1-IFPC30109-557a19f741e35be586a1.jpg"
            ],
    price: 3.000,
    rooms: '2 bedrooms - 2 bathrooms',
    address: '1928 Werninger Street Houston, Texas',
    rating: 7.9,
    description: "Nestled in bustling Old Town Nice two blocks from the famous Promenade des Anglais (Beach) and one block from the Nice Opera House and the Flower Market (Marche aux Fleurs Cours Saleya) available for private sale this is this rarely available gem. Located on the 3rd Floor of an 18 Century walk-up building the space has been entirely renovated with respect and taste. The sunny south-facing living space features 3 meter high ceilings and steps out to a little balcony perfect for al fresco petite dejeuner The lower floor features a good-sized bedroom, large enough for a queen size bed and built-in storage and en-suite bathroom whilst the loft space above features two single beds and another bathroom.",
    date: "2020-04-02T12:59-0500",
    availibility: true
  },
  {
    username: "Shane V. Brown",
    imagesrc: ["https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/IS3nmnnhxzddow1000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISjro43pk248xw1000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISnygmm2muk55x1000000000.webp",
            "https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISfsea4whmc85x1000000000.webp"
            ],
    price: 1.200,
    rooms: '4 bedrooms - 2 bathrooms',
    address: '5664 Vanderbilt Dr, Mobile, Alabama',
    rating: 5.7,
    description: "Popular neighborhood across for The University of South Alabama. 4 bedrooms 2 Baths. One car garage attached. Pets are negotiable and require nonrefundable $275 pet fee per animal.",
    date: "2019-09-22T12:59-0500",
    availibility: true
  }
];

module.exports.samplePosts = samplePosts;