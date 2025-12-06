# PlayDate Adventure 🌳

A context-aware family activity discovery and playdate platform for Irish families.

## Features

- 🗺️ **Real Irish Locations** - Curated database of family-friendly spots in the Midlands
- 🌦️ **Weather-Aware** - Smart suggestions based on current conditions
- 🆓 **Free Activities Featured** - Budget-friendly options always prominent
- 🎯 **Gamified Challenges** - Daily adventures and seasonal challenges
- 👨‍👩‍👧‍👦 **Family Connections** - Safe, verified family networking
- 📅 **Live Events** - Halloween, Christmas, weekly activities

---

## Quick Start Options

### Option 1: Instant Preview (No Setup Required)

Simply open **`PlayDate-Preview.html`** directly in your browser!

```bash
# On Mac
open PlayDate-Preview.html

# On Windows
start PlayDate-Preview.html

# On Linux
xdg-open PlayDate-Preview.html
```

This standalone HTML file runs without any build tools.

---

### Option 2: Full Development Setup

For the complete development experience with hot reloading:

#### Prerequisites
- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm or yarn

#### Installation

```bash
# Navigate to project folder
cd playdate-project

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

#### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
playdate-project/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

---

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

---

## Customization

### Adding New Locations

Edit the `IRISH_LOCATIONS` object in `App.jsx`:

```javascript
{
  id: 'unique-id',
  name: 'Location Name',
  location: 'Town, County',
  distance: '10km',
  driveTime: '15 min',
  type: 'nature', // nature, playground, indoor, heritage, animals
  ageRange: '2-12',
  cost: 'Free', // or '€X/person'
  rating: 4.5,
  reviews: 100,
  image: '🌳', // emoji
  heroColor: 'from-emerald-600 to-green-500', // Tailwind gradient
  description: 'Description text...',
  features: ['Feature 1', 'Feature 2'],
  tip: 'Pro tip for visitors...',
  // ... more fields
}
```

### Adding New Events

Edit the `EVENTS` array in `App.jsx`:

```javascript
{
  id: 'unique-id',
  name: 'Event Name',
  venue: 'Venue Name',
  date: '26 Oct',
  time: '11am - 4pm',
  cost: 'Free',
  emoji: '🎃',
  type: 'seasonal', // seasonal, recurring, workshop
  ageRange: '3-12',
  familiesGoing: 10,
  featured: true
}
```

### Adding New Challenges

Edit the `CHALLENGES` object in `App.jsx`.

---

## Live Demo

**[View Live App](https://sean4e.github.io/PlayDate/)**

---

## Deployment

This project auto-deploys to GitHub Pages on every push to `main`.

### Manual Deploy

```bash
npm run build
# dist/ folder is ready for any static host
```

---

## Product Vision

PlayDate is designed as an **invite-based, word-of-mouth** platform - not a discovery app. The core philosophy:

- **Shared by people you know** - Families share spots with their network
- **Trust circles** - See recommendations from 1st/2nd degree connections
- **Location-aware** - Dynamic content based on user's actual location
- **Organic growth** - Invite codes to bring friends into your circle

---

## Next Steps for Production

1. **Geolocation Integration**
   - Browser geolocation API
   - Dynamic location-based activities
   - User-contributed places

2. **Invite System**
   - Invite codes for friend referrals
   - "Shared by [Family]" attribution
   - Network visualization

3. **Backend Integration**
   - Firebase Auth for user management
   - Firestore for data persistence
   - Cloud Functions for business logic

4. **Real Weather API**
   - Met Éireann API integration
   - Location-based forecasts

5. **Maps Integration**
   - Google Maps for navigation
   - Location-based filtering

---

## License

MIT License - Built by 4E Virtual Design

---

## Support

Questions? Contact: sean@4e.ie
