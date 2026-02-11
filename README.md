# Year 10 Transport / Health & Disease Revision Flashcards

An interactive web application for studying Year 10 Transport, Health & Disease topics through digital flashcards.

## Features

- **14 Questions** based on the pasted worksheet, including:
  - Blood components and red blood cell adaptations
  - Heart structure and circulatory system (arteries vs veins)
  - Communicable disease (phagocytes, antibodies, vaccination)
  - HIV treatment (antiretrovirals)
  - Practical maths (clear zones, percentage change, SA:V)
  - Osmosis required practical style questions

- **Interactive Flashcards**: 
  - Click any card to flip between question and answer
  - Smooth 3D flip animations
  - Color-coded design (blue front, gradient blue back)
  - Hover effects for better user experience

- **Responsive Design**: 
  - Works on desktop, tablet, and mobile devices
  - Grid layout automatically adjusts to screen size
  - Staggered loading animations

- **Reset Functionality**: 
  - "Reset All Cards" button to flip all cards back to questions
  - Perfect for starting a new study session

## How to Use

### Method 1: Local Web Server (Recommended)
1. Open Terminal/Command Prompt
2. Navigate to the project folder:
   ```bash
  cd "/Users/danieltagg/Desktop/Desktop - Daniel's MacBook Pro/Yr10_transport_health&disease_endofunitrevision"
   ```
3. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your web browser and go to: `http://localhost:8000`

### Method 2: Direct File Opening
1. Double-click the `index.html` file
2. It should open in your default web browser

## Study Tips

1. **First Pass**: Read through all questions first to identify knowledge gaps
2. **Active Testing**: Click cards to test yourself before revealing answers
3. **Spaced Repetition**: Focus more time on questions you find difficult
4. **Reset and Retry**: Use the reset button to test yourself multiple times
5. **Mobile Study**: The app works great on phones for studying on the go

## File Structure

```
B1revision/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # JavaScript functionality and flashcard data
└── README.md       # This documentation file
```

## Question Topics Covered

1. **Blood & Circulation**: blood components, heart diagram, arteries
2. **Disease & Immunity**: phagocytes, antibodies, vaccination, HIV treatment
3. **Required Practical Skills**: clear zones, osmosis, graphs
4. **Maths Skills**: area of circle, % change, surface area : volume

## Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries required
- **Modern CSS**: Uses CSS Grid, Flexbox, and 3D transforms
- **ES6 JavaScript**: Modern JavaScript features for clean, readable code
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern web browser with CSS3 and ES6 support

---

Created for Year 10 revision.