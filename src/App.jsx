import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Clock, Users, Sun, Cloud, CloudRain, CloudSun, Star, Trophy, Zap, 
  TreePine, Palette, PartyPopper, ChevronRight, ChevronLeft, Heart, Share2, 
  Navigation, Calendar, Sparkles, Target, Award, TrendingUp, Search, Filter,
  Bell, Settings, Home, Compass, MessageCircle, Shield, Check, X, Plus,
  Camera, Gift, Flame, Map, Coffee, Book, Music, Bike, Fish, Bird, Leaf,
  Mountain, Waves, Footprints, Tent, Sunrise, Moon, CloudSnow, Wind,
  ThermometerSun, Umbrella, Eye, EyeOff, Lock, Unlock, UserCheck, AlertCircle,
  Info, ExternalLink, Phone, Mail, ChevronDown, ChevronUp, MoreHorizontal,
  RefreshCw, Send, Image, Smile, Mic, Video, Play, Pause, Volume2, Download
} from 'lucide-react';

// ============================================================================
// REAL IRISH DATA - Midlands & Surrounding Areas
// ============================================================================

const IRISH_LOCATIONS = {
  parks: [
    {
      id: 'dun-na-si',
      name: 'Dún na Sí Amenity Park',
      location: 'Moate, Co. Westmeath',
      coords: { lat: 53.3939, lng: -7.7186 },
      distance: '12km',
      driveTime: '15 min',
      type: 'nature',
      ageRange: '2-12',
      cost: 'Free',
      rating: 4.8,
      reviews: 156,
      image: '🌳',
      heroColor: 'from-emerald-600 to-green-500',
      description: 'Beautiful amenity park featuring the mythological Fairy Trail, adventure playground, lakeside walks, and Heritage Centre exploring Irish folklore.',
      features: ['Fairy Trail', 'Playground', 'Lake walks', 'Heritage Centre', 'Picnic areas', 'Toilets'],
      tip: 'The Fairy Trail is magical for under-7s. Allow 2 hours minimum. Café on-site for hot chocolate!',
      weatherSuitability: { sunny: 100, cloudy: 90, rainy: 40 },
      accessibility: 'Partial - main paths accessible, some woodland trails uneven',
      parking: 'Free parking on-site',
      openingHours: 'Dawn to dusk',
      bestTime: 'Morning for quieter experience',
      tags: ['free', 'playground', 'nature', 'fairy-trail', 'heritage', 'picnic', 'lake'],
      familyReviews: [
        { family: "O'Brien Family", text: "Our kids (4 & 6) absolutely loved the fairy doors. We've been back 5 times!", rating: 5 },
        { family: "Murphy Family", text: "Great wet weather backup with the Heritage Centre. Lovely café too.", rating: 4 }
      ]
    },
    {
      id: 'lough-boora',
      name: 'Lough Boora Discovery Park',
      location: 'Boora, Co. Offaly',
      coords: { lat: 53.2561, lng: -7.7008 },
      distance: '25km',
      driveTime: '28 min',
      type: 'nature',
      ageRange: '3-14',
      cost: 'Free',
      rating: 4.9,
      reviews: 342,
      image: '🦌',
      heroColor: 'from-amber-600 to-orange-500',
      description: 'Award-winning parkland on restored bogland featuring sculpture trail, cycling paths, bird watching, fishing lakes, and mesolithic archaeological sites.',
      features: ['Sculpture Trail', 'Cycle paths (bike hire)', 'Bird hides', 'Fishing lakes', 'Café', 'Playground'],
      tip: 'Hire bikes at the entrance - the sculpture trail is 5km and perfect for cycling. Red deer often spotted at dawn!',
      weatherSuitability: { sunny: 100, cloudy: 95, rainy: 30 },
      accessibility: 'Excellent - flat, paved cycle paths throughout',
      parking: 'Free parking',
      openingHours: '9am - 6pm (later in summer)',
      bestTime: 'Early morning for wildlife, afternoon for cycling',
      tags: ['free', 'cycling', 'wildlife', 'sculpture', 'fishing', 'birds', 'archaeological'],
      familyReviews: [
        { family: "Kelly Family", text: "The sculpture trail by bike is incredible. Kids loved spotting the giant figures!", rating: 5 },
        { family: "Walsh Family", text: "Saw deer with fawns in June. Magical experience for the whole family.", rating: 5 }
      ]
    },
    {
      id: 'burgess-park',
      name: 'Burgess Park',
      location: 'Athlone, Co. Westmeath',
      coords: { lat: 53.4228, lng: -7.9407 },
      distance: '2km',
      driveTime: '5 min',
      type: 'playground',
      ageRange: '1-10',
      cost: 'Free',
      rating: 4.5,
      reviews: 89,
      image: '🛝',
      heroColor: 'from-blue-500 to-cyan-400',
      description: 'Popular town park with excellent playground, basketball court, walking paths, and riverside location near Athlone town centre.',
      features: ['Modern playground', 'Basketball court', 'Walking paths', 'Riverside', 'Benches', 'Near shops'],
      tip: 'Great for a quick play after school. Ice cream from nearby shops a popular tradition!',
      weatherSuitability: { sunny: 100, cloudy: 85, rainy: 20 },
      accessibility: 'Good - flat paths, playground on grass',
      parking: 'Street parking nearby',
      openingHours: 'Always open',
      bestTime: 'After school (3-5pm) for meeting other families',
      tags: ['free', 'playground', 'quick-visit', 'town-centre', 'riverside'],
      familyReviews: [
        { family: "Doyle Family", text: "Our go-to after school. Kids always find friends to play with.", rating: 4 },
        { family: "Ryan Family", text: "Clean, safe, and well-maintained. Perfect for toddlers.", rating: 5 }
      ]
    },
    {
      id: 'belvedere-house',
      name: 'Belvedere House & Gardens',
      location: 'Mullingar, Co. Westmeath',
      coords: { lat: 53.5089, lng: -7.4097 },
      distance: '35km',
      driveTime: '35 min',
      type: 'heritage',
      ageRange: '3-14',
      cost: '€9 adult / €5 child / €25 family',
      rating: 4.7,
      reviews: 278,
      image: '🏛️',
      heroColor: 'from-violet-600 to-purple-500',
      description: 'Stunning 18th-century estate with 160 acres of parkland, walled garden, Victorian glasshouses, fairy trail, animal sanctuary, and adventure playground.',
      features: ['Georgian House tours', 'Walled garden', 'Fairy village', 'Animal sanctuary', 'Adventure playground', 'Café', 'Lakeside walks'],
      tip: 'The fairy village is hidden in the woods - pick up a map at reception. Halloween and Christmas events are spectacular!',
      weatherSuitability: { sunny: 100, cloudy: 85, rainy: 60 },
      accessibility: 'Partial - main paths good, some woodland areas challenging',
      parking: 'Free parking',
      openingHours: '9:30am - 6pm (seasonal variations)',
      bestTime: 'Allow half day, morning start recommended',
      tags: ['heritage', 'gardens', 'fairy-trail', 'animals', 'playground', 'café', 'events'],
      familyReviews: [
        { family: "Brennan Family", text: "The fairy village had our 3-year-old enchanted. Beautiful grounds!", rating: 5 },
        { family: "Connolly Family", text: "Great value family ticket. Easily spend 4-5 hours here.", rating: 5 }
      ]
    },
    {
      id: 'derryglad-folk-museum',
      name: 'Derryglad Folk & Heritage Museum',
      location: 'Curraghboy, Co. Roscommon',
      coords: { lat: 53.4847, lng: -8.1789 },
      distance: '18km',
      driveTime: '22 min',
      type: 'heritage',
      ageRange: '4-12',
      cost: '€8 adult / €4 child',
      rating: 4.6,
      reviews: 67,
      image: '🚜',
      heroColor: 'from-amber-700 to-yellow-600',
      description: 'Fascinating folk museum showcasing rural Irish life through the ages. Vintage tractors, farm machinery, household items, and recreated cottages.',
      features: ['Vintage machinery', 'Recreated cottages', 'Farm tools', 'Household history', 'Outdoor exhibits'],
      tip: 'Kids love sitting on the old tractors! Owners are passionate and give wonderful tours.',
      weatherSuitability: { sunny: 95, cloudy: 90, rainy: 70 },
      accessibility: 'Moderate - some uneven ground outdoors',
      parking: 'Free on-site',
      openingHours: 'By appointment - call ahead',
      bestTime: 'Book morning slot for personal tour',
      tags: ['heritage', 'educational', 'tractors', 'history', 'unique'],
      familyReviews: [
        { family: "Hughes Family", text: "Hidden gem! The owner's stories brought history alive for our kids.", rating: 5 }
      ]
    },
    {
      id: 'hodson-bay',
      name: 'Hodson Bay Beach & Woods',
      location: 'Hodson Bay, Co. Westmeath',
      coords: { lat: 53.4589, lng: -7.9847 },
      distance: '8km',
      driveTime: '12 min',
      type: 'nature',
      ageRange: '0-14',
      cost: 'Free',
      rating: 4.4,
      reviews: 112,
      image: '🏖️',
      heroColor: 'from-sky-500 to-blue-400',
      description: 'Beautiful lakeside beach on Lough Ree with woodland walks, swimming area (summer), and stunning sunsets. Popular family picnic spot.',
      features: ['Sandy beach', 'Swimming (seasonal)', 'Woodland walks', 'Picnic areas', 'Sunsets', 'Bird watching'],
      tip: 'Bring a picnic for sunset - absolutely stunning over Lough Ree. Water shoes recommended for paddling.',
      weatherSuitability: { sunny: 100, cloudy: 70, rainy: 20 },
      accessibility: 'Moderate - beach access via steps, woodland paths uneven',
      parking: 'Free parking',
      openingHours: 'Always open',
      bestTime: 'Summer afternoons, any evening for sunset',
      tags: ['free', 'beach', 'swimming', 'sunset', 'picnic', 'nature'],
      familyReviews: [
        { family: "Gallagher Family", text: "Our summer happy place. Kids swim while we watch the sunset.", rating: 5 },
        { family: "McCarthy Family", text: "Beautiful walk even in winter. Hot chocolate from car boot tradition!", rating: 4 }
      ]
    },
    {
      id: 'clara-bog',
      name: 'Clara Bog Nature Reserve',
      location: 'Clara, Co. Offaly',
      coords: { lat: 53.3225, lng: -7.6164 },
      distance: '20km',
      driveTime: '25 min',
      type: 'nature',
      ageRange: '5-14',
      cost: 'Free',
      rating: 4.3,
      reviews: 45,
      image: '🌿',
      heroColor: 'from-lime-600 to-green-500',
      description: 'One of the finest remaining raised bogs in Europe. Boardwalk trail, unique wildlife, and important conservation site. Educational and peaceful.',
      features: ['Boardwalk trail', 'Wildlife spotting', 'Information boards', 'Photography', 'Conservation education'],
      tip: 'Bring binoculars! Great for teaching kids about ecosystems and conservation. Sundews (carnivorous plants) visible in summer.',
      weatherSuitability: { sunny: 95, cloudy: 85, rainy: 40 },
      accessibility: 'Good - boardwalk is accessible',
      parking: 'Small car park',
      openingHours: 'Daylight hours',
      bestTime: 'Morning for wildlife, any time for walk',
      tags: ['free', 'nature', 'educational', 'wildlife', 'boardwalk', 'conservation'],
      familyReviews: [
        { family: "Dunne Family", text: "Fascinating place. Our nature-loving 8-year-old was in heaven.", rating: 4 }
      ]
    },
    {
      id: 'athlone-castle',
      name: 'Athlone Castle',
      location: 'Athlone Town Centre',
      coords: { lat: 53.4228, lng: -7.9407 },
      distance: '2km',
      driveTime: '5 min',
      type: 'heritage',
      ageRange: '4-14',
      cost: '€10 adult / €6 child / €28 family',
      rating: 4.6,
      reviews: 234,
      image: '🏰',
      heroColor: 'from-stone-600 to-slate-500',
      description: 'Impressive 12th-century castle with award-winning visitor centre. Interactive exhibits on sieges, local history, and John McCormack. Panoramic river views.',
      features: ['Interactive exhibits', 'Dress-up area', 'Audio guides', 'Panoramic views', 'Gift shop', 'Events'],
      tip: 'The dress-up area lets kids be soldiers and nobles. Viking and medieval events throughout the year are brilliant!',
      weatherSuitability: { sunny: 90, cloudy: 95, rainy: 100 },
      accessibility: 'Partial - lift to some floors, tower has stairs',
      parking: 'Town centre parking nearby (paid)',
      openingHours: '10am - 5pm (check seasonal hours)',
      bestTime: 'Rainy days! Also check for special event dates.',
      tags: ['heritage', 'indoor', 'rainy-day', 'interactive', 'dress-up', 'views'],
      familyReviews: [
        { family: "Lynch Family", text: "Perfect rainy day activity. Kids loved dressing up as soldiers!", rating: 5 },
        { family: "Burke Family", text: "Really well done museum. Engaging for all ages.", rating: 4 }
      ]
    }
  ],
  indoorPlay: [
    {
      id: 'jump-zone',
      name: 'Jump Zone Athlone',
      location: 'Monksland, Athlone',
      coords: { lat: 53.4128, lng: -7.9207 },
      distance: '3km',
      driveTime: '6 min',
      type: 'indoor-play',
      ageRange: '3-14',
      cost: '€12-15/child (sessions)',
      rating: 4.4,
      reviews: 187,
      image: '🦘',
      heroColor: 'from-orange-500 to-red-500',
      description: 'Massive trampoline park with interconnected trampolines, foam pits, ninja course, dodgeball courts, and toddler area.',
      features: ['Main trampolines', 'Foam pit', 'Ninja course', 'Dodgeball', 'Toddler zone', 'Café', 'Party rooms'],
      tip: 'Book online - weekend afternoons sell out. Toddler sessions (under 5s only) on weekday mornings are calmer.',
      weatherSuitability: { sunny: 100, cloudy: 100, rainy: 100 },
      accessibility: 'Limited - trampolines require mobility',
      parking: 'Free on-site',
      openingHours: '10am - 8pm (varies)',
      bestTime: 'Weekday mornings for toddlers, book ahead for weekends',
      tags: ['indoor', 'active', 'rainy-day', 'high-energy', 'toddler-sessions', 'parties'],
      familyReviews: [
        { family: "Daly Family", text: "Guaranteed to tire them out! Book ahead or prepare to wait.", rating: 4 },
        { family: "Moran Family", text: "Toddler sessions are brilliant - much calmer than general sessions.", rating: 5 }
      ]
    },
    {
      id: 'glendeer-pet-farm',
      name: 'Glendeer Pet Farm',
      location: 'Drum, Co. Roscommon',
      coords: { lat: 53.5847, lng: -8.2089 },
      distance: '28km',
      driveTime: '32 min',
      type: 'animals',
      ageRange: '1-10',
      cost: '€10 adult / €8 child',
      rating: 4.7,
      reviews: 312,
      image: '🐑',
      heroColor: 'from-green-500 to-emerald-400',
      description: 'Award-winning pet farm with indoor and outdoor play areas. Meet farm animals, bottle-feed lambs (spring), tractor rides, and excellent café.',
      features: ['Animal handling', 'Bottle feeding (spring)', 'Indoor play barn', 'Outdoor playground', 'Tractor rides', 'Café', 'Picnic areas'],
      tip: 'Spring lambing season is magical - kids can bottle-feed lambs. Indoor barn is great for rainy days!',
      weatherSuitability: { sunny: 100, cloudy: 95, rainy: 80 },
      accessibility: 'Good - main areas accessible',
      parking: 'Free on-site',
      openingHours: '10am - 5pm (seasonal)',
      bestTime: 'Spring for lambing, feeding time 2pm daily',
      tags: ['animals', 'farm', 'indoor-option', 'toddler-friendly', 'café', 'playground'],
      familyReviews: [
        { family: "Nolan Family", text: "Our toddler's absolute favourite place. The lambs in spring are adorable!", rating: 5 },
        { family: "Fitzpatrick Family", text: "Great wet weather option with the indoor barn. Lovely café too.", rating: 5 }
      ]
    },
    {
      id: 'athlone-library',
      name: 'Athlone Library',
      location: 'Athlone Town Centre',
      coords: { lat: 53.4248, lng: -7.9387 },
      distance: '2km',
      driveTime: '5 min',
      type: 'library',
      ageRange: '0-14',
      cost: 'Free',
      rating: 4.5,
      reviews: 78,
      image: '📚',
      heroColor: 'from-indigo-500 to-blue-400',
      description: 'Modern library with excellent children\'s section, regular story times, craft events, coding clubs, and comfortable reading areas.',
      features: ['Children\'s section', 'Story time (weekly)', 'Craft events', 'Coding club', 'Computers', 'Quiet areas', 'Free WiFi'],
      tip: 'Story time Tuesday mornings is wonderful for toddlers. Check their events calendar - regular free workshops!',
      weatherSuitability: { sunny: 100, cloudy: 100, rainy: 100 },
      accessibility: 'Excellent - fully accessible',
      parking: 'Town centre parking',
      openingHours: 'Mon-Sat, varies',
      bestTime: 'Tuesday mornings for story time',
      tags: ['free', 'indoor', 'educational', 'story-time', 'crafts', 'rainy-day'],
      familyReviews: [
        { family: "Casey Family", text: "Free, warm, and the librarians are so welcoming to kids!", rating: 5 }
      ]
    }
  ],
  swimming: [
    {
      id: 'athlone-springs',
      name: 'Athlone Springs Hotel Pool',
      location: 'Monksland, Athlone',
      coords: { lat: 53.4028, lng: -7.9107 },
      distance: '4km',
      driveTime: '8 min',
      type: 'swimming',
      ageRange: '0-14',
      cost: '€8-12 per person',
      rating: 4.3,
      reviews: 145,
      image: '🏊',
      heroColor: 'from-cyan-500 to-blue-500',
      description: 'Hotel leisure centre with 20m pool, children\'s pool, sauna, steam room, and gym. Family swim times available.',
      features: ['20m pool', 'Children\'s pool', 'Family changing', 'Sauna (adults)', 'Café'],
      tip: 'Family swim times on weekends are best. Gets busy during school holidays - arrive early!',
      weatherSuitability: { sunny: 100, cloudy: 100, rainy: 100 },
      accessibility: 'Good - pool hoist available',
      parking: 'Free hotel parking',
      openingHours: 'Check for public swim times',
      bestTime: 'Weekend family swim sessions',
      tags: ['swimming', 'indoor', 'rainy-day', 'exercise'],
      familyReviews: [
        { family: "Quinn Family", text: "Clean pool, good kids' area. Nice café for afterwards.", rating: 4 }
      ]
    }
  ],
  nature: [
    {
      id: 'lough-ree',
      name: 'Lough Ree Shore Walks',
      location: 'Various access points',
      coords: { lat: 53.5, lng: -7.95 },
      distance: '5-15km',
      driveTime: 'Varies',
      type: 'nature',
      ageRange: '3-14',
      cost: 'Free',
      rating: 4.6,
      reviews: 89,
      image: '🌅',
      heroColor: 'from-amber-500 to-orange-400',
      description: 'Beautiful lakeshore walks around Lough Ree with wildlife, wildflowers, and stunning views. Multiple access points from Athlone area.',
      features: ['Lakeshore walks', 'Wildlife', 'Photography', 'Fishing spots', 'Boat trips available'],
      tip: 'Coosan Point is great for short walks. Bring binoculars for bird watching. Sunset walks are magical.',
      weatherSuitability: { sunny: 100, cloudy: 80, rainy: 30 },
      accessibility: 'Varies by location',
      parking: 'Various free spots',
      openingHours: 'Always open',
      bestTime: 'Golden hour for photography, calm days for wildlife',
      tags: ['free', 'nature', 'walks', 'wildlife', 'photography', 'sunset'],
      familyReviews: [
        { family: "Whelan Family", text: "Free, beautiful, and always different. Our Sunday tradition.", rating: 5 }
      ]
    }
  ]
};

// Flatten all locations for easy access
const ALL_LOCATIONS = [
  ...IRISH_LOCATIONS.parks,
  ...IRISH_LOCATIONS.indoorPlay,
  ...IRISH_LOCATIONS.swimming,
  ...IRISH_LOCATIONS.nature
];

// ============================================================================
// EVENTS DATA - Real-style events for Midlands
// ============================================================================

const EVENTS = [
  {
    id: 'halloween-boora',
    name: 'Spooky Trail at Lough Boora',
    venue: 'Lough Boora Discovery Park',
    date: '26-27 Oct',
    time: '11am - 4pm',
    cost: 'Free (normal admission)',
    emoji: '🎃',
    type: 'seasonal',
    ageRange: '3-12',
    description: 'Spooky sculptures trail with Halloween activities, costume parade, and treats!',
    familiesGoing: 12,
    spotsLeft: null,
    featured: true
  },
  {
    id: 'pumpkin-patch',
    name: 'Pumpkin Picking Day',
    venue: 'Ballinahown Farm, Westmeath',
    date: '19-31 Oct',
    time: '10am - 5pm',
    cost: '€3/pumpkin',
    emoji: '🎃',
    type: 'seasonal',
    ageRange: '2-12',
    description: 'Pick your own pumpkins from the patch, meet farm animals, hot chocolate available.',
    familiesGoing: 8,
    spotsLeft: null,
    featured: true
  },
  {
    id: 'library-crafts',
    name: 'Halloween Craft Morning',
    venue: 'Athlone Library',
    date: 'Tue 29 Oct',
    time: '10:30am - 12pm',
    cost: 'Free',
    emoji: '🎨',
    type: 'workshop',
    ageRange: '4-10',
    description: 'Make spooky crafts including paper bats, ghost decorations, and Halloween masks.',
    familiesGoing: 4,
    spotsLeft: 12,
    featured: false
  },
  {
    id: 'belvedere-halloween',
    name: 'Halloween at Belvedere House',
    venue: 'Belvedere House, Mullingar',
    date: '26-31 Oct',
    time: '10am - 5pm',
    cost: '€12/child',
    emoji: '👻',
    type: 'seasonal',
    ageRange: '4-12',
    description: 'Haunted fairy trail, costume competitions, spooky crafts, and twilight tours.',
    familiesGoing: 15,
    spotsLeft: 50,
    featured: true
  },
  {
    id: 'storytime-tuesday',
    name: 'Weekly Story Time',
    venue: 'Athlone Library',
    date: 'Every Tuesday',
    time: '10:30am',
    cost: 'Free',
    emoji: '📖',
    type: 'recurring',
    ageRange: '0-5',
    description: 'Songs, stories, and rhymes for babies and toddlers. No booking required.',
    familiesGoing: 6,
    spotsLeft: null,
    featured: false
  },
  {
    id: 'junior-parkrun',
    name: 'Athlone Junior Parkrun',
    venue: 'Burgess Park',
    date: 'Every Sunday',
    time: '9:30am',
    cost: 'Free',
    emoji: '🏃',
    type: 'recurring',
    ageRange: '4-14',
    description: '2km fun run for 4-14 year olds. Walk, jog, or run - everyone welcome!',
    familiesGoing: 20,
    spotsLeft: null,
    featured: false
  },
  {
    id: 'toddler-trampoline',
    name: 'Toddler Bounce Session',
    venue: 'Jump Zone Athlone',
    date: 'Mon, Wed, Fri',
    time: '10am - 12pm',
    cost: '€8/child',
    emoji: '🦘',
    type: 'recurring',
    ageRange: '1-4',
    description: 'Exclusive bounce time for under-5s. Calmer atmosphere, age-appropriate activities.',
    familiesGoing: 8,
    spotsLeft: null,
    featured: false
  },
  {
    id: 'christmas-belvedere',
    name: 'Christmas at Belvedere House',
    venue: 'Belvedere House, Mullingar',
    date: '30 Nov - 22 Dec',
    time: '4pm - 8pm',
    cost: '€15/child',
    emoji: '🎄',
    type: 'seasonal',
    ageRange: '2-12',
    description: 'Magical Christmas experience with Santa visit, elf workshop, Christmas train, and more.',
    familiesGoing: 3,
    spotsLeft: 200,
    featured: false
  }
];

// ============================================================================
// CHALLENGES & GAMIFICATION
// ============================================================================

const CHALLENGES = {
  daily: [
    { id: 'd1', title: 'Leaf Detective', description: 'Find and collect 5 different coloured autumn leaves', points: 15, emoji: '🍂', difficulty: 'easy', timeEstimate: '20 min', outdoor: true },
    { id: 'd2', title: 'Cloud Spotters', description: 'Lie on the grass and find 3 shapes in the clouds', points: 10, emoji: '☁️', difficulty: 'easy', timeEstimate: '15 min', outdoor: true },
    { id: 'd3', title: 'Puddle Jumpers', description: 'Find and jump in 5 puddles (wellies required!)', points: 15, emoji: '💦', difficulty: 'easy', timeEstimate: '20 min', outdoor: true },
    { id: 'd4', title: 'Nature Sound Hunt', description: 'Close your eyes and count how many different sounds you hear', points: 10, emoji: '👂', difficulty: 'easy', timeEstimate: '10 min', outdoor: true },
    { id: 'd5', title: 'Stick Tower Challenge', description: 'Build the tallest tower you can using only sticks', points: 20, emoji: '🪵', difficulty: 'medium', timeEstimate: '30 min', outdoor: true },
    { id: 'd6', title: 'Bug Safari', description: 'Find 3 different types of bugs or insects', points: 15, emoji: '🐛', difficulty: 'easy', timeEstimate: '25 min', outdoor: true },
    { id: 'd7', title: 'Rainy Day Artist', description: 'Draw a picture of what you see through the window', points: 15, emoji: '🎨', difficulty: 'easy', timeEstimate: '20 min', outdoor: false },
    { id: 'd8', title: 'Kitchen Scientists', description: 'Make a volcano with baking soda and vinegar', points: 20, emoji: '🌋', difficulty: 'medium', timeEstimate: '30 min', outdoor: false }
  ],
  seasonal: {
    autumn: {
      name: 'Autumn Explorer',
      emoji: '🍁',
      description: 'Complete these autumn adventures to earn your badge!',
      tasks: [
        { id: 'a1', name: 'Jump in a leaf pile', points: 10 },
        { id: 'a2', name: 'Find a conker (horse chestnut)', points: 10 },
        { id: 'a3', name: 'Spot a squirrel', points: 15 },
        { id: 'a4', name: 'Make leaf art or rubbing', points: 15 },
        { id: 'a5', name: 'Visit a new park', points: 20 },
        { id: 'a6', name: 'Feed the ducks', points: 10 },
        { id: 'a7', name: 'Find a spider web with dew', points: 15 },
        { id: 'a8', name: 'Collect 5 acorns', points: 10 },
        { id: 'a9', name: 'Watch a sunset', points: 15 },
        { id: 'a10', name: 'Build a stick den', points: 25 }
      ],
      reward: 'Autumn Explorer Badge 🍁',
      deadline: '30 November'
    },
    halloween: {
      name: 'Halloween Hero',
      emoji: '🎃',
      description: 'Complete spooky Halloween adventures before October 31st!',
      tasks: [
        { id: 'h1', name: 'Visit a pumpkin patch', points: 20 },
        { id: 'h2', name: 'Carve a pumpkin', points: 15 },
        { id: 'h3', name: 'Do a spooky trail', points: 20 },
        { id: 'h4', name: 'Make a Halloween craft', points: 15 },
        { id: 'h5', name: 'Attend a Halloween event', points: 25 }
      ],
      reward: 'Halloween Hero Badge 🎃',
      deadline: '31 October',
      limited: true
    }
  },
  discovery: {
    name: 'Midlands Explorer',
    emoji: '🗺️',
    description: 'Discover the best family spots in the Midlands!',
    tasks: [
      { id: 'e1', name: 'Visit Dún na Sí fairy trail', location: 'dun-na-si', points: 25 },
      { id: 'e2', name: 'Cycle at Lough Boora', location: 'lough-boora', points: 30 },
      { id: 'e3', name: 'Explore Athlone Castle', location: 'athlone-castle', points: 25 },
      { id: 'e4', name: 'Picnic at Hodson Bay', location: 'hodson-bay', points: 20 },
      { id: 'e5', name: 'Walk the Clara Bog boardwalk', location: 'clara-bog', points: 25 },
      { id: 'e6', name: 'Visit Belvedere House gardens', location: 'belvedere-house', points: 30 },
      { id: 'e7', name: 'Meet animals at Glendeer Farm', location: 'glendeer-pet-farm', points: 25 },
      { id: 'e8', name: 'Story time at Athlone Library', location: 'athlone-library', points: 15 },
      { id: 'e9', name: 'Swim at Athlone Springs', location: 'athlone-springs', points: 20 },
      { id: 'e10', name: 'Watch sunset at Lough Ree', location: 'lough-ree', points: 20 }
    ],
    reward: 'Midlands Explorer Badge + Hidden Gems Map 🗺️'
  },
  social: {
    name: 'Community Builder',
    emoji: '👋',
    description: 'Connect with other families and build your community!',
    tasks: [
      { id: 's1', name: 'Have a playdate with a new family', points: 30 },
      { id: 's2', name: 'Join an open event', points: 20 },
      { id: 's3', name: 'Create an open invitation', points: 25 },
      { id: 's4', name: 'Complete 5 playdates', points: 40 },
      { id: 's5', name: 'Get vouched by 3 families', points: 50 }
    ],
    reward: 'Community Builder Badge + Early Event Access 👋'
  }
};

// ============================================================================
// CONTEXT & STATE
// ============================================================================

const getCurrentWeather = () => ({
  temp: 12,
  condition: 'partly_cloudy',
  forecast: 'Dry until 4pm, light showers expected this evening',
  wind: '15 km/h SW',
  humidity: '78%',
  sunset: '17:42'
});

const getCurrentContext = () => ({
  weather: getCurrentWeather(),
  time: new Date().toLocaleTimeString('en-IE', { hour: '2-digit', minute: '2-digit' }),
  dayOfWeek: new Date().toLocaleDateString('en-IE', { weekday: 'long' }),
  date: new Date().toLocaleDateString('en-IE', { day: 'numeric', month: 'long' }),
  season: 'autumn',
  schoolStatus: 'Mid-term break',
  hoursOfDaylight: 10,
  goldenHourStart: '16:30'
});

const INITIAL_FAMILY = {
  id: 'murphy-family',
  name: 'Murphy Family',
  kids: [
    { name: 'Emma', age: 5, interests: ['fairy-trails', 'animals', 'crafts'] },
    { name: 'Liam', age: 3, interests: ['tractors', 'playgrounds', 'water'] }
  ],
  location: 'Athlone',
  interests: ['nature', 'free-activities', 'soft-play'],
  verificationTier: 'verified',
  stats: {
    streak: 3,
    badges: 8,
    adventuresTotal: 47,
    adventuresThisMonth: 6,
    placesDiscovered: 18,
    playdatesCompleted: 12
  },
  completedTasks: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'h1'],
  savedPlaces: ['dun-na-si', 'lough-boora', 'glendeer-pet-farm'],
  recentActivity: [
    { type: 'visit', place: 'Dún na Sí', date: '2 days ago' },
    { type: 'challenge', name: 'Leaf Detective', date: '3 days ago' },
    { type: 'playdate', family: "O'Brien Family", place: 'Burgess Park', date: '5 days ago' }
  ]
};

const NEARBY_FAMILIES = [
  { 
    id: 'obrien',
    name: "O'Brien Family", 
    kids: [{ name: 'Sophie', age: 4 }, { name: 'Jack', age: 6 }],
    distance: '1.2km', 
    status: 'At Burgess Park until 4pm', 
    available: true,
    verified: true,
    mutualConnections: 3
  },
  { 
    id: 'kelly',
    name: 'Kelly Family', 
    kids: [{ name: 'Twins', age: 5 }],
    distance: '2.8km', 
    status: 'Looking for soft play buddies', 
    available: true,
    verified: true,
    mutualConnections: 1
  },
  { 
    id: 'walsh',
    name: 'Walsh Family', 
    kids: [{ name: 'Mia', age: 3 }, { name: 'Finn', age: 7 }],
    distance: '0.8km', 
    status: 'Free after 3pm', 
    available: false,
    verified: true,
    mutualConnections: 2
  },
  { 
    id: 'ryan',
    name: 'Ryan Family', 
    kids: [{ name: 'Aoife', age: 4 }],
    distance: '3.5km', 
    status: 'Available all day', 
    available: true,
    verified: false,
    mutualConnections: 0
  }
];

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

const WeatherIcon = ({ condition, size = 20, className = '' }) => {
  const iconProps = { size, className };
  switch (condition) {
    case 'sunny': return <Sun {...iconProps} />;
    case 'partly_cloudy': return <CloudSun {...iconProps} />;
    case 'cloudy': return <Cloud {...iconProps} />;
    case 'rainy': return <CloudRain {...iconProps} />;
    case 'snow': return <CloudSnow {...iconProps} />;
    default: return <Sun {...iconProps} />;
  }
};

const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  const variants = {
    default: 'bg-white/10 text-gray-300',
    success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    info: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    premium: 'bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-200 border border-amber-500/40',
    free: 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40'
  };
  const sizes = {
    xs: 'text-xs px-1.5 py-0.5',
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5'
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const variants = {
    primary: 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    ghost: 'hover:bg-white/10 text-gray-300',
    danger: 'bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  return (
    <button 
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '', gradient = '', hover = true, onClick }) => (
  <div 
    className={`
      bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 
      ${hover ? 'hover:border-white/20 hover:bg-white/8 transition-all cursor-pointer' : ''}
      ${gradient}
      ${className}
    `}
    onClick={onClick}
  >
    {children}
  </div>
);

const ProgressBar = ({ value, max, className = '', showLabel = true }) => (
  <div className={className}>
    {showLabel && (
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-400">Progress</span>
        <span className="text-emerald-300">{value}/{max}</span>
      </div>
    )}
    <div className="h-2 bg-black/30 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  </div>
);

// ============================================================================
// MAIN COMPONENTS
// ============================================================================

// Activity Detail Modal
const ActivityDetail = ({ activity, onClose, family }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const isSaved = family.savedPlaces.includes(activity.id);
  
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-hidden bg-slate-900 rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl">
        {/* Header Image */}
        <div className={`h-48 bg-gradient-to-br ${activity.heroColor} relative`}>
          <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-30">
            {activity.image}
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              {activity.cost === 'Free' && <Badge variant="free">Free</Badge>}
              <Badge variant="default">{activity.type}</Badge>
            </div>
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">{activity.name}</h2>
            <p className="text-white/80 text-sm">{activity.location}</p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="flex items-center justify-around py-3 border-b border-white/10 bg-black/20">
          <div className="text-center">
            <p className="text-lg font-semibold text-white">{activity.distance}</p>
            <p className="text-xs text-gray-400">Distance</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-white">{activity.driveTime}</p>
            <p className="text-xs text-gray-400">Drive</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-white flex items-center justify-center gap-1">
              <Star size={14} className="text-amber-400" fill="currentColor" />
              {activity.rating}
            </p>
            <p className="text-xs text-gray-400">{activity.reviews} reviews</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-white">{activity.ageRange}</p>
            <p className="text-xs text-gray-400">Ages</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-white/10">
          {['overview', 'details', 'reviews'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[40vh]">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <p className="text-gray-300">{activity.description}</p>
              
              {/* Weather Match */}
              <div className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <WeatherIcon condition="partly_cloudy" size={24} className="text-emerald-400" />
                <div>
                  <p className="text-sm font-medium text-emerald-300">Great weather match today!</p>
                  <p className="text-xs text-gray-400">Dry until 4pm - perfect for outdoor exploring</p>
                </div>
              </div>
              
              {/* Pro Tip */}
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <p className="text-sm font-medium text-amber-300 mb-1">💡 Pro Tip</p>
                <p className="text-sm text-gray-300">{activity.tip}</p>
              </div>
              
              {/* Features */}
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Features</p>
                <div className="flex flex-wrap gap-2">
                  {activity.features.map((feature, i) => (
                    <Badge key={i} variant="default">{feature}</Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'details' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Opening Hours</p>
                  <p className="text-sm text-white">{activity.openingHours}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cost</p>
                  <p className="text-sm text-white">{activity.cost}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Parking</p>
                  <p className="text-sm text-white">{activity.parking}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Best Time</p>
                  <p className="text-sm text-white">{activity.bestTime}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Accessibility</p>
                <p className="text-sm text-white">{activity.accessibility}</p>
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="space-y-3">
              {activity.familyReviews?.map((review, i) => (
                <div key={i} className="p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-white text-sm">{review.family}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={i < review.rating ? 'text-amber-400' : 'text-gray-600'} 
                          fill={i < review.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Actions */}
        <div className="p-4 border-t border-white/10 bg-black/20 flex gap-3">
          <Button variant="secondary" className="flex-1" onClick={() => {}}>
            <Heart size={16} className={isSaved ? 'fill-current text-red-400' : ''} />
            {isSaved ? 'Saved' : 'Save'}
          </Button>
          <Button variant="secondary" className="flex-1">
            <Share2 size={16} />
            Share
          </Button>
          <Button variant="primary" className="flex-1">
            <Navigation size={16} />
            Navigate
          </Button>
        </div>
      </div>
    </div>
  );
};

// Activity Card
const ActivityCard = ({ activity, onSelect, compact = false }) => {
  const context = getCurrentContext();
  const weatherMatch = activity.weatherSuitability?.[context.weather.condition.replace('_', '')] || 80;
  
  if (compact) {
    return (
      <Card className="p-3" onClick={() => onSelect(activity)}>
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.heroColor} flex items-center justify-center text-2xl`}>
            {activity.image}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-white truncate">{activity.name}</h4>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin size={10} /> {activity.distance}
              </span>
              <span>•</span>
              <span>{activity.cost}</span>
            </div>
          </div>
          <ChevronRight size={16} className="text-gray-500" />
        </div>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden" onClick={() => onSelect(activity)}>
      {/* Header with gradient */}
      <div className={`h-24 bg-gradient-to-br ${activity.heroColor} relative`}>
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">
          {activity.image}
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          {activity.cost === 'Free' && <Badge variant="free" size="xs">Free</Badge>}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="success" size="xs">
            <WeatherIcon condition={context.weather.condition} size={10} />
            {weatherMatch}% match
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1">{activity.name}</h3>
        <p className="text-sm text-gray-400 mb-3">{activity.location}</p>
        
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {activity.distance}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {activity.driveTime}
          </span>
          <span>👶 {activity.ageRange}</span>
        </div>
        
        <p className="text-sm text-gray-300 line-clamp-2 mb-3">{activity.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-sm text-amber-400">
              <Star size={14} fill="currentColor" /> {activity.rating}
            </span>
            <span className="text-xs text-gray-500">({activity.reviews})</span>
          </div>
          <span className="text-sm font-medium text-emerald-400">{activity.cost}</span>
        </div>
      </div>
    </Card>
  );
};

// Event Card
const EventCard = ({ event, featured = false }) => (
  <Card 
    className={`p-4 ${featured ? 'border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10' : ''}`}
    hover
  >
    <div className="flex items-start gap-3">
      <div className="text-3xl">{event.emoji}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-white">{event.name}</h4>
          {event.limited && <Badge variant="warning" size="xs">Limited!</Badge>}
        </div>
        <p className="text-sm text-gray-400">{event.venue}</p>
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
          <Calendar size={12} />
          <span>{event.date}</span>
          <span>•</span>
          <span>{event.time}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <Badge variant={event.cost === 'Free' ? 'free' : 'default'} size="xs">
            {event.cost}
          </Badge>
          {event.familiesGoing > 0 && (
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <Users size={12} /> {event.familiesGoing} families going
            </span>
          )}
        </div>
      </div>
    </div>
    {featured && (
      <Button variant="primary" size="sm" className="w-full mt-4">
        Join This Event
      </Button>
    )}
  </Card>
);

// Challenge Card
const ChallengeCard = ({ challenge, family, type = 'seasonal' }) => {
  const completedCount = challenge.tasks?.filter(t => family.completedTasks.includes(t.id)).length || 0;
  const totalTasks = challenge.tasks?.length || 0;
  
  return (
    <Card className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{challenge.emoji}</span>
          <div>
            <h4 className="font-semibold text-white">{challenge.name}</h4>
            {challenge.deadline && (
              <p className="text-xs text-gray-400">Complete by {challenge.deadline}</p>
            )}
          </div>
        </div>
        {challenge.limited && <Badge variant="warning" size="xs">Limited Time!</Badge>}
      </div>
      
      <p className="text-sm text-gray-300 mb-3">{challenge.description}</p>
      
      <ProgressBar value={completedCount} max={totalTasks} className="mb-3" />
      
      <div className="flex flex-wrap gap-2 mb-3">
        {challenge.tasks?.slice(0, 5).map((task) => (
          <Badge 
            key={task.id}
            variant={family.completedTasks.includes(task.id) ? 'success' : 'default'}
            size="xs"
          >
            {family.completedTasks.includes(task.id) ? '✓' : '○'} {task.name}
          </Badge>
        ))}
        {totalTasks > 5 && (
          <Badge variant="default" size="xs">+{totalTasks - 5} more</Badge>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-purple-300">🏆 {challenge.reward}</span>
        <Button variant="secondary" size="sm">View All Tasks</Button>
      </div>
    </Card>
  );
};

// Daily Adventure Card
const DailyAdventureCard = ({ challenge, onAccept }) => {
  const context = getCurrentContext();
  const isWeatherAppropriate = challenge.outdoor ? 
    context.weather.condition !== 'rainy' : true;
  
  return (
    <Card className="p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{challenge.emoji}</span>
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-wider font-medium">Today's Adventure</p>
            <h4 className="font-semibold text-white">{challenge.title}</h4>
          </div>
        </div>
        <div className="text-right">
          <Badge variant="success" size="xs">+{challenge.points} pts</Badge>
          <p className="text-xs text-gray-400 mt-1">{challenge.timeEstimate}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-300 mb-3">{challenge.description}</p>
      
      {!isWeatherAppropriate && (
        <div className="flex items-center gap-2 p-2 bg-amber-500/10 rounded-lg mb-3">
          <CloudRain size={16} className="text-amber-400" />
          <p className="text-xs text-amber-300">Weather alert: Better suited for dry days!</p>
        </div>
      )}
      
      <div className="flex gap-2">
        <Button variant="primary" size="sm" className="flex-1" onClick={onAccept}>
          <Target size={14} />
          Accept Challenge
        </Button>
        <Button variant="ghost" size="sm">
          <RefreshCw size={14} />
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 size={14} />
        </Button>
      </div>
    </Card>
  );
};

// Family Card (for nearby families)
const FamilyCard = ({ family, onConnect }) => (
  <Card className="p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${family.available ? 'bg-emerald-400' : 'bg-amber-400'}`} />
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-white">{family.name}</p>
            {family.verified && <Shield size={12} className="text-emerald-400" />}
          </div>
          <p className="text-xs text-gray-400">
            Kids: {family.kids.map(k => `${k.name} (${k.age})`).join(', ')} • {family.distance}
          </p>
          <p className="text-xs text-gray-500 mt-1">{family.status}</p>
        </div>
      </div>
      <div className="text-right">
        {family.mutualConnections > 0 && (
          <p className="text-xs text-gray-400 mb-2">{family.mutualConnections} mutual</p>
        )}
        <Button variant="primary" size="sm" onClick={() => onConnect(family)}>
          Say Hi
        </Button>
      </div>
    </div>
  </Card>
);

// Context Banner
const ContextBanner = ({ context }) => (
  <Card className="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30">
    <div className="flex items-start gap-3">
      <Sparkles className="text-emerald-400 mt-0.5" size={20} />
      <div className="flex-1">
        <p className="text-sm text-emerald-300 font-medium">
          {context.weather.condition === 'sunny' && "Perfect day for outdoor adventures!"}
          {context.weather.condition === 'partly_cloudy' && "Great conditions for exploring!"}
          {context.weather.condition === 'cloudy' && "Good day for activities - staying dry!"}
          {context.weather.condition === 'rainy' && "Rainy day? We've got indoor ideas!"}
        </p>
        <p className="text-xs text-gray-300 mt-1">
          {context.weather.forecast}. It's {context.schoolStatus.toLowerCase()} – 
          here's what families are loving right now.
        </p>
        <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <WeatherIcon condition={context.weather.condition} size={14} />
            {context.weather.temp}°C
          </span>
          <span className="flex items-center gap-1">
            <Wind size={14} />
            {context.weather.wind}
          </span>
          <span className="flex items-center gap-1">
            <Sunset size={14} className="text-orange-400" />
            Sunset {context.weather.sunset}
          </span>
        </div>
      </div>
    </div>
  </Card>
);

// Stats Dashboard
const StatsDashboard = ({ family }) => (
  <Card className="p-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-white flex items-center gap-2">
        <Trophy size={18} className="text-amber-400" />
        {family.name}
      </h3>
      <Badge variant="premium" size="sm">
        <Flame size={12} />
        {family.stats.streak} week streak!
      </Badge>
    </div>
    
    <div className="grid grid-cols-4 gap-4 text-center">
      <div>
        <p className="text-2xl font-bold text-white">{family.stats.badges}</p>
        <p className="text-xs text-gray-400">Badges</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{family.stats.adventuresThisMonth}</p>
        <p className="text-xs text-gray-400">This Month</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{family.stats.placesDiscovered}</p>
        <p className="text-xs text-gray-400">Places</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{family.stats.playdatesCompleted}</p>
        <p className="text-xs text-gray-400">Playdates</p>
      </div>
    </div>
  </Card>
);

// Category Filter Pills
const CategoryPills = ({ selected, onSelect }) => {
  const categories = [
    { id: 'all', emoji: '✨', label: 'All' },
    { id: 'free', emoji: '🆓', label: 'Free' },
    { id: 'outdoor', emoji: '🌳', label: 'Outdoor' },
    { id: 'indoor', emoji: '🏠', label: 'Indoor' },
    { id: 'active', emoji: '🔥', label: 'Active' },
    { id: 'creative', emoji: '🎨', label: 'Creative' },
    { id: 'animals', emoji: '🐾', label: 'Animals' },
    { id: 'heritage', emoji: '🏰', label: 'Heritage' },
  ];
  
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
            selected === cat.id
              ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'
          }`}
        >
          <span>{cat.emoji}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
};

// ============================================================================
// MAIN APP
// ============================================================================

export default function PlayDateAdventure() {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [family] = useState(INITIAL_FAMILY);
  const context = getCurrentContext();
  
  // Filter activities based on category
  const filteredActivities = ALL_LOCATIONS.filter(activity => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'free') return activity.cost === 'Free';
    if (selectedCategory === 'outdoor') return ['nature', 'playground'].includes(activity.type);
    if (selectedCategory === 'indoor') return ['indoor-play', 'library', 'heritage', 'swimming'].includes(activity.type);
    if (selectedCategory === 'active') return ['indoor-play', 'swimming'].includes(activity.type);
    if (selectedCategory === 'animals') return activity.type === 'animals' || activity.tags?.includes('animals');
    if (selectedCategory === 'heritage') return activity.type === 'heritage';
    return true;
  });
  
  // Get featured events
  const featuredEvents = EVENTS.filter(e => e.featured);
  const recurringEvents = EVENTS.filter(e => e.type === 'recurring');
  
  // Get today's challenge
  const todayChallenge = CHALLENGES.daily[new Date().getDay() % CHALLENGES.daily.length];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background texture */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-50" />
      
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-white/5">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                PlayDate
              </h1>
              <p className="text-xs text-gray-500">{context.dayOfWeek} • {context.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <WeatherIcon condition={context.weather.condition} size={18} className="text-amber-400" />
                <span>{context.weather.temp}°C</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Flame size={16} className="text-orange-400" />
                <span className="text-orange-300 font-medium">{family.stats.streak}</span>
              </div>
              <button className="relative p-2 hover:bg-white/5 rounded-xl transition-colors">
                <Bell size={20} className="text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation Tabs */}
      <div className="sticky top-14 z-30 bg-slate-950/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-lg mx-auto px-4 py-2">
          <div className="flex gap-1 bg-white/5 p-1 rounded-xl">
            {[
              { id: 'discover', label: 'Discover', icon: <Compass size={16} /> },
              { id: 'events', label: 'Events', icon: <PartyPopper size={16} /> },
              { id: 'families', label: 'Connect', icon: <Users size={16} /> },
              { id: 'challenges', label: 'Challenges', icon: <Target size={16} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-500/20 text-emerald-300 shadow-lg shadow-emerald-500/10'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 py-6 pb-24 space-y-6 relative">
        
        {/* ==================== DISCOVER TAB ==================== */}
        {activeTab === 'discover' && (
          <>
            {/* Context Banner */}
            <ContextBanner context={context} />
            
            {/* Today's Adventure */}
            <DailyAdventureCard 
              challenge={todayChallenge} 
              onAccept={() => console.log('Challenge accepted!')}
            />
            
            {/* Category Filters */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">What are you looking for?</h3>
              <CategoryPills selected={selectedCategory} onSelect={setSelectedCategory} />
            </div>
            
            {/* Free Activities Highlight */}
            {selectedCategory === 'all' && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    🆓 Free Activities Near You
                  </h3>
                  <button 
                    onClick={() => setSelectedCategory('free')}
                    className="text-xs text-emerald-400 hover:text-emerald-300"
                  >
                    See all
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {ALL_LOCATIONS.filter(a => a.cost === 'Free').slice(0, 4).map(activity => (
                    <Card 
                      key={activity.id} 
                      className="p-3"
                      onClick={() => setSelectedActivity(activity)}
                    >
                      <div className={`w-full h-16 rounded-xl bg-gradient-to-br ${activity.heroColor} flex items-center justify-center text-3xl mb-2`}>
                        {activity.image}
                      </div>
                      <h4 className="font-medium text-white text-sm truncate">{activity.name}</h4>
                      <p className="text-xs text-gray-400">{activity.distance}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Activity Feed */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-400">
                  {selectedCategory === 'all' ? 'Perfect for today' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} activities`}
                </h3>
                <span className="text-xs text-gray-500">{filteredActivities.length} places</span>
              </div>
              <div className="space-y-4">
                {filteredActivities.map(activity => (
                  <ActivityCard 
                    key={activity.id} 
                    activity={activity} 
                    onSelect={setSelectedActivity}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        
        {/* ==================== EVENTS TAB ==================== */}
        {activeTab === 'events' && (
          <>
            {/* Featured Events */}
            <div>
              <h3 className="font-medium text-white flex items-center gap-2 mb-3">
                <span className="text-xl">🎃</span> Halloween Events
              </h3>
              <div className="space-y-3">
                {featuredEvents.map(event => (
                  <EventCard key={event.id} event={event} featured />
                ))}
              </div>
            </div>
            
            {/* Weekly Recurring */}
            <div>
              <h3 className="font-medium text-white flex items-center gap-2 mb-3">
                <Calendar size={18} className="text-blue-400" />
                Weekly Activities
              </h3>
              <div className="space-y-3">
                {recurringEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
            
            {/* Create Event CTA */}
            <Card className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                <Plus size={18} className="text-blue-400" />
                Create Your Own Event
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                Planning a trip to the park? Invite other families to join!
              </p>
              <Button variant="primary" className="w-full">
                Create Open Invitation
              </Button>
            </Card>
          </>
        )}
        
        {/* ==================== FAMILIES TAB ==================== */}
        {activeTab === 'families' && (
          <>
            {/* Broadcast Location */}
            <Card className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-500/20">
              <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-emerald-400" />
                Let families know where you're heading
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                Broadcast your plans and invite others to join spontaneously!
              </p>
              <Button variant="primary" className="w-full">
                "We're heading to..." →
              </Button>
            </Card>
            
            {/* Available Now */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Families Available Now
                </h3>
                <span className="text-xs text-gray-500">{NEARBY_FAMILIES.filter(f => f.available).length} online</span>
              </div>
              <div className="space-y-3">
                {NEARBY_FAMILIES.map(fam => (
                  <FamilyCard 
                    key={fam.id} 
                    family={fam} 
                    onConnect={(f) => console.log('Connecting with', f.name)}
                  />
                ))}
              </div>
            </div>
            
            {/* Trust & Safety */}
            <Card className="p-4">
              <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                <Shield size={18} className="text-emerald-400" />
                Your Safety
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                All families with the <Shield size={12} className="inline text-emerald-400" /> badge have been ID verified. 
                You're verified too!
              </p>
              <div className="flex gap-2">
                <Badge variant="success" size="sm">
                  <UserCheck size={12} />
                  ID Verified
                </Badge>
                <Badge variant="info" size="sm">
                  <Users size={12} />
                  12 Playdates
                </Badge>
              </div>
            </Card>
          </>
        )}
        
        {/* ==================== CHALLENGES TAB ==================== */}
        {activeTab === 'challenges' && (
          <>
            {/* Stats Dashboard */}
            <StatsDashboard family={family} />
            
            {/* Active Seasonal Challenge */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Active Challenges</h3>
              <ChallengeCard 
                challenge={CHALLENGES.seasonal.halloween} 
                family={family}
              />
            </div>
            
            <ChallengeCard 
              challenge={CHALLENGES.seasonal.autumn} 
              family={family}
            />
            
            {/* Today's Quick Challenge */}
            <DailyAdventureCard 
              challenge={todayChallenge} 
              onAccept={() => console.log('Challenge accepted!')}
            />
            
            {/* Available Challenges */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">More Challenges</h3>
              <div className="space-y-3">
                {[CHALLENGES.discovery, CHALLENGES.social].map((challenge, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{challenge.emoji}</span>
                        <div>
                          <p className="font-medium text-white">{challenge.name}</p>
                          <p className="text-xs text-gray-400">{challenge.tasks.length} tasks • {challenge.reward}</p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-500" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Badge Collection Preview */}
            <Card className="p-4">
              <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                <Award size={18} className="text-amber-400" />
                Your Badges
              </h4>
              <div className="flex flex-wrap gap-3">
                {['🌳', '🗺️', '👋', '☀️', '🏃', '📚', '🎨', '🦆'].map((badge, i) => (
                  <div key={i} className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
                    {badge}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-600 border-2 border-dashed border-gray-700">
                  <Plus size={20} />
                </div>
              </div>
            </Card>
          </>
        )}
      </main>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-white/5 z-40">
        <div className="max-w-lg mx-auto px-6 py-3">
          <div className="flex items-center justify-around">
            {[
              { icon: <Home size={22} />, label: 'Home', tab: 'discover' },
              { icon: <Search size={22} />, label: 'Search', tab: 'search' },
              { icon: <Plus size={28} />, label: 'Plan', tab: 'plan', primary: true },
              { icon: <MessageCircle size={22} />, label: 'Messages', tab: 'messages' },
              { icon: <Award size={22} />, label: 'Profile', tab: 'profile' }
            ].map((item, i) => (
              <button 
                key={i}
                onClick={() => item.tab && setActiveTab(item.tab === 'discover' ? 'discover' : activeTab)}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  item.primary 
                    ? 'bg-emerald-500 p-3 rounded-2xl -mt-6 shadow-lg shadow-emerald-500/30' 
                    : 'text-gray-500 hover:text-emerald-400'
                }`}
              >
                {item.icon}
                {!item.primary && <span className="text-xs">{item.label}</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Activity Detail Modal */}
      {selectedActivity && (
        <ActivityDetail 
          activity={selectedActivity} 
          onClose={() => setSelectedActivity(null)}
          family={family}
        />
      )}
      
      {/* Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
