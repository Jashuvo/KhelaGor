
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'LEGO Star Wars Millennium Falcon',
    description: 'Inspire youngsters and adults with this 75257 LEGO Star Wars Millennium Falcon model. This brick-built version of the iconic Corellian freighter features an array of details, like rotating top and bottom gun turrets, 2 spring-loaded shooters, a lowering ramp and an opening cockpit with space for 2 minifigures.',
    price: 8499,
    salePrice: 7999,
    category: 'Puzzles',
    brand: 'LEGO',
    imageUrl: 'https://i.ibb.co/6rkyyP9/lego-falcon.jpg',
    images: ['https://i.ibb.co/6rkyyP9/lego-falcon.jpg', 'https://i.ibb.co/L8yPScj/lego-falcon-2.jpg', 'https://i.ibb.co/GHYxLQt/lego-falcon-3.jpg'],
    stock: 15,
    rating: 4.8,
    reviewCount: 152,
    ageGroup: '9+',
    availability: 'In Stock',
    specifications: {
      'Pieces': '1351',
      'Dimensions': '14.88 x 2.78 x 22.91 inches',
      'Minifigures': '7'
    }
  },
  {
    id: '2',
    name: 'Hot Wheels 20-Car Gift Pack',
    description: 'Speed into an instant Hot Wheels collection with a race-ready pack that features 20 highly detailed vehicles. Hot Wheels 20-Car packs deliver 20 times the amped up action and are perfect for car enthusiasts of all ages.',
    price: 1500,
    category: 'Vehicles',
    brand: 'Hot Wheels',
    imageUrl: 'https://i.ibb.co/wY3xNqk/hot-wheels-pack.jpg',
    images: ['https://i.ibb.co/wY3xNqk/hot-wheels-pack.jpg'],
    stock: 50,
    rating: 4.9,
    reviewCount: 210,
    ageGroup: '3+',
    availability: 'In Stock',
    specifications: {
      'Scale': '1:64',
      'Material': 'Die-cast metal',
      'Count': '20'
    }
  },
  {
    id: '3',
    name: 'Barbie Dreamhouse',
    description: 'Measuring an impressive 3 feet tall and 4 feet wide and featuring 3 stories, 8 rooms, all-angle play, a working elevator and a pool with a slide, the Barbie Dreamhouse encourages young imaginations to move into this dollhouse and set up a dream home!',
    price: 12000,
    salePrice: 11500,
    category: 'Dolls',
    brand: 'Barbie',
    imageUrl: 'https://i.ibb.co/7C9M0tQ/barbie-dreamhouse.jpg',
    images: ['https://i.ibb.co/7C9M0tQ/barbie-dreamhouse.jpg', 'https://i.ibb.co/Yy4zJ0P/barbie-dreamhouse-2.jpg'],
    stock: 8,
    rating: 4.6,
    reviewCount: 98,
    ageGroup: '3+',
    availability: 'In Stock',
    specifications: {
      'Dimensions': '30 x 30 x 8 inches',
      'Weight': '22 pounds',
      'Accessories': '70+'
    }
  },
  {
    id: '4',
    name: 'Marvel Legends Series Spider-Man',
    description: 'With over 80 years of comic book history, Marvel has become a cornerstone of fan collections around the world. With the Marvel Legends Series, fan favorite Marvel Comic Universe and Marvel Cinematic Universe characters are designed with premium detail and articulation for top-of-the-line poseable and displayable collectibles.',
    price: 2200,
    category: 'Action Figures',
    brand: 'Marvel',
    imageUrl: 'https://i.ibb.co/K2Jd5X9/marvel-spiderman.jpg',
    images: ['https://i.ibb.co/K2Jd5X9/marvel-spiderman.jpg'],
    stock: 25,
    rating: 4.7,
    reviewCount: 76,
    ageGroup: '4+',
    availability: 'In Stock',
    specifications: {
      'Height': '6 inches',
      'Articulation': 'Premium',
      'Series': 'Marvel Legends'
    }
  },
  {
    id: '5',
    name: 'Fisher-Price Laugh & Learn Smart Stages Piggy Bank',
    description: 'This little piggy goes to market, this little piggy stays home, and this little piggy goes “Wee, wee, wee!” all the way to the bank! The Laugh & Learn Smart Stages Piggy Bank introduces baby to counting, colors, animals and sizes with songs, music and phrases.',
    price: 1800,
    category: 'Educational',
    brand: 'Fisher-Price',
    imageUrl: 'https://i.ibb.co/Q8Q9f4Y/fisher-price-piggy.jpg',
    images: ['https://i.ibb.co/Q8Q9f4Y/fisher-price-piggy.jpg'],
    stock: 40,
    rating: 4.9,
    reviewCount: 305,
    ageGroup: '6-36 months',
    availability: 'In Stock',
    specifications: {
      'Songs & Phrases': '40+',
      'Batteries': '3 AA required',
      'Skills': 'Counting, Colors, Animals'
    }
  },
  {
    id: '6',
    name: 'Nerf N-Strike Elite Disruptor',
    description: 'Fire and strike fast with the Nerf N-Strike Elite Disruptor blaster! This quick-draw blaster has a rotating drum that holds up to 6 Elite darts. Choose your target and fire 1 dart at a time, or unleash all 6 darts in rapid succession with slam-fire action.',
    price: 1250,
    category: 'Outdoor',
    brand: 'Nerf',
    imageUrl: 'https://i.ibb.co/z5pB0QJ/nerf-disruptor.jpg',
    images: ['https://i.ibb.co/z5pB0QJ/nerf-disruptor.jpg'],
    stock: 30,
    rating: 4.5,
    reviewCount: 180,
    ageGroup: '8+',
    availability: 'In Stock',
    specifications: {
      'Darts': '6 Elite Darts',
      'Firing Range': '90 feet (27 meters)',
      'Action': 'Slam-fire'
    }
  },
  {
    id: '7',
    name: 'Melissa & Doug Wooden Blocks',
    description: 'This favorite collection of 100 wooden blocks comes in four colors and nine shapes. Little builders will have a great time stacking, building, and knocking down these blocks in countless colorful combinations.',
    price: 2500,
    category: 'Educational',
    brand: 'Melissa & Doug',
    imageUrl: 'https://i.ibb.co/3s8sXbC/melissa-doug-blocks.jpg',
    images: ['https://i.ibb.co/3s8sXbC/melissa-doug-blocks.jpg'],
    stock: 22,
    rating: 4.8,
    reviewCount: 112,
    ageGroup: '2+',
    availability: 'In Stock',
    specifications: {
      'Pieces': '100',
      'Material': 'Wood',
      'Package': 'Wooden crate for storage'
    }
  },
  {
    id: '8',
    name: 'Tonka Classic Steel Mighty Dump Truck',
    description: 'This sturdy, steel construction vehicle is ready for the toughest loading jobs. Move the bed up and down to trigger its unloading action! Constructed with steel and guaranteed for life!',
    price: 3500,
    category: 'Vehicles',
    brand: 'Tonka',
    imageUrl: 'https://i.ibb.co/yQJ4T25/tonka-dump-truck.jpg',
    images: ['https://i.ibb.co/yQJ4T25/tonka-dump-truck.jpg'],
    stock: 18,
    rating: 4.9,
    reviewCount: 95,
    ageGroup: '3+',
    availability: 'In Stock',
    specifications: {
      'Material': 'Steel',
      'Dimensions': '17 x 8.5 x 10.88 inches',
      'Feature': 'Movable bed'
    }
  },
  {
    id: '9',
    name: 'Radio Flyer Classic Red Wagon',
    description: 'This classic full-sized Radio Flyer wagon has become a symbol of American childhood. The all-steel seamless body with no-scratch edges and 10" steel wheels with real rubber tires ensure this wagon is built to last for generations of family fun!',
    price: 6000,
    category: 'Outdoor',
    brand: 'Radio Flyer',
    imageUrl: 'https://i.ibb.co/xL3D3Yc/red-wagon.jpg',
    images: ['https://i.ibb.co/xL3D3Yc/red-wagon.jpg'],
    stock: 5,
    rating: 4.7,
    reviewCount: 65,
    ageGroup: '3+',
    availability: 'Low Stock',
    specifications: {
      'Body': 'All-steel seamless',
      'Wheels': '10" steel with rubber tires',
      'Handle': 'Extra-long handle for easy pulling'
    }
  },
  {
    id: '10',
    name: 'Catan Board Game',
    description: 'Your adventurous settlers seek to tame the remote but rich isle of Catan. Start by revealing Catan’s many harbors and regions: pastures, fields, mountains, hills, forests, and desert. The random mix creates a different board virtually every game. No two games are the same!',
    price: 3200,
    category: 'Puzzles',
    brand: 'Catan Studio',
    imageUrl: 'https://i.ibb.co/QYV2wZg/catan-board-game.jpg',
    images: ['https://i.ibb.co/QYV2wZg/catan-board-game.jpg'],
    stock: 40,
    rating: 4.9,
    reviewCount: 450,
    ageGroup: '10+',
    availability: 'In Stock',
    specifications: {
      'Players': '3-4',
      'Playtime': '60 minutes',
      'Genre': 'Strategy'
    }
  },
  {
    id: '11',
    name: 'Jurassic World T-Rex Figure',
    description: 'Get ready for thrilling action and adventure with Jurassic World! This Super Colossal Tyrannosaurus Rex is based on the iconic Tyrannosaurus Rex from Jurassic World and features realistic detail and decoration.',
    price: 4500,
    category: 'Action Figures',
    brand: 'Jurassic World',
    imageUrl: 'https://i.ibb.co/wJ2Q959/jurassic-park-t-rex.jpg',
    images: ['https://i.ibb.co/wJ2Q959/jurassic-park-t-rex.jpg'],
    stock: 12,
    rating: 4.6,
    reviewCount: 88,
    ageGroup: '4+',
    availability: 'In Stock',
    specifications: {
      'Length': '3 feet',
      'Feature': 'Eats mini action figures (sold separately)',
      'Articulation': 'Legs, arms, and jaw'
    }
  },
  {
    id: '12',
    name: 'Fisher-Price Rock-a-Stack',
    description: 'The classic, colorful stacking toy is a childhood staple. Baby can sort and stack the five rings, then bat at the wobbly base to see what happens, helping to develop their curiosity and sense of discovery.',
    price: 750,
    category: 'Educational',
    brand: 'Fisher-Price',
    imageUrl: 'https://i.ibb.co/v3Y0S3g/fisher-price-rock-a-stack.jpg',
    images: ['https://i.ibb.co/v3Y0S3g/fisher-price-rock-a-stack.jpg'],
    stock: 100,
    rating: 4.9,
    reviewCount: 512,
    ageGroup: '6+ months',
    availability: 'In Stock',
    specifications: {
      'Rings': '5 colorful rings',
      'Base': 'Wobbly, bat-at base',
      'Material': 'Plant-based materials'
    }
  },
  {
    id: '13',
    name: 'Disney Princess Dress Up Trunk',
    description: 'This 21-piece deluxe dress up trunk includes four classic Disney Princess characters outfits: Aurora, Belle, Cinderella, and Snow White. It includes 4 tops and 3 skirts with matching royal accessories.',
    price: 3800,
    category: 'Dolls',
    brand: 'Disney',
    imageUrl: 'https://i.ibb.co/L5Q1b1w/disney-princess-trunk.jpg',
    images: ['https://i.ibb.co/L5Q1b1w/disney-princess-trunk.jpg'],
    stock: 16,
    rating: 4.5,
    reviewCount: 45,
    ageGroup: '3+',
    availability: 'In Stock',
    specifications: {
      'Pieces': '21',
      'Characters': 'Aurora, Belle, Cinderella, Snow White',
      'Size': 'Fits sizes 4-6X'
    }
  },
  {
    id: '14',
    name: 'Paw Patrol, Chase’s 5-in-1 Ultimate Cruiser',
    description: 'An action-packed 5-in-1 vehicle! The Ultimate Cruiser has a car, 2 motorcycles, a boat and a helicopter! It features flashing lights and sounds, and launches projectiles to save the day!',
    price: 5500,
    category: 'Vehicles',
    brand: 'Paw Patrol',
    imageUrl: 'https://i.ibb.co/2vB5bQh/paw-patrol-cruiser.jpg',
    images: ['https://i.ibb.co/2vB5bQh/paw-patrol-cruiser.jpg'],
    stock: 14,
    rating: 4.8,
    reviewCount: 92,
    ageGroup: '3+',
    availability: 'In Stock',
    specifications: {
      'Vehicles': '5 (Cruiser, 2 Motorcycles, Boat, Helicopter)',
      'Features': 'Lights, Sounds, Projectile Launcher',
      'Includes': 'Chase figure'
    }
  },
  {
    id: '15',
    name: 'Little Tikes First Slide',
    description: 'This Little Tikes First Slide is the perfect beginner\'s slide, sized especially for younger kids. It promotes fitness, balance, and coordination. Folds down without tools for compact storage and moving.',
    price: 3000,
    category: 'Outdoor',
    brand: 'Little Tikes',
    imageUrl: 'https://i.ibb.co/4T4S6mB/little-tikes-slide.jpg',
    images: ['https://i.ibb.co/4T4S6mB/little-tikes-slide.jpg'],
    stock: 10,
    rating: 4.7,
    reviewCount: 130,
    ageGroup: '18 months - 6 years',
    availability: 'In Stock',
    specifications: {
      'Dimensions': '23 x 18 x 39 inches',
      'Weight Limit': '60 lbs',
      'Feature': 'Folds for easy storage'
    }
  }
];
