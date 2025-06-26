# Binary Clock PWA

A beautiful, modern binary clock Progressive Web App (PWA) built with React, TypeScript, and Tailwind CSS. This application displays the current time in both traditional digital format and binary representation, featuring a sleek dark/light mode toggle.

## ✨ Features

- **Binary Time Display**: View time in binary format with visual dots representing 1s and 0s
- **Digital Clock**: Traditional time display alongside binary representation
- **Dark/Light Mode**: Toggle between beautiful dark and light themes
- **Progressive Web App**: Installable on devices, works offline
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Clock updates every 100ms for smooth second transitions
- **Theme Persistence**: Remembers your theme preference
- **Accessible**: Proper ARIA labels and keyboard navigation

## 🚀 Live Demo

The app is deployed and ready to use. You can install it on your device for the best experience.

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **PWA** - Service worker for offline functionality

## 📱 PWA Features

- **Installable**: Add to home screen on mobile/desktop
- **Offline Support**: Works without internet connection
- **App-like Experience**: Runs in standalone mode
- **Fast Loading**: Cached resources for instant startup
- **Responsive Icons**: Adaptive icons for different platforms

## 🎯 How to Read Binary Time

Each column represents one digit of the current time (HH:MM:SS):

- **H**: Hours (two columns)
- **M**: Minutes (two columns) 
- **S**: Seconds (two columns)

Each column shows 4 dots representing binary digits:
- **Top dot**: 8 (2³)
- **Second dot**: 4 (2²)
- **Third dot**: 2 (2¹)
- **Bottom dot**: 1 (2⁰)

**Glowing dots** = 1, **Dim dots** = 0

**Example**: If a column shows `0101`, that equals 0×8 + 1×4 + 0×2 + 1×1 = 5

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── BinaryClock.tsx  # Main clock component
│   ├── BinaryColumn.tsx # Individual binary digit column
│   ├── TimeDisplay.tsx  # Digital time display
│   ├── ClockLegend.tsx  # How-to-read instructions
│   ├── Header.tsx       # App header with title
│   └── ThemeToggle.tsx  # Dark/light mode toggle
├── hooks/               # Custom React hooks
│   └── useTheme.ts      # Theme management hook
├── utils/               # Utility functions
│   └── timeUtils.ts     # Time formatting and binary conversion
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles

public/
├── manifest.json        # PWA manifest
├── sw.js               # Service worker
├── icon-192.png        # App icon (192x192)
└── icon-512.png        # App icon (512x512)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd binary-clock-pwa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Themes

The app uses Tailwind CSS with custom color schemes. You can modify themes in:
- `src/App.tsx` - Background gradients
- `src/components/BinaryColumn.tsx` - Binary dot colors
- `tailwind.config.js` - Global theme configuration

### Binary Dot Styling

Customize the binary dots in `BinaryColumn.tsx`:
- Colors for active/inactive states
- Hover effects and animations
- Size and spacing

### Time Update Frequency

Adjust the clock update interval in `BinaryClock.tsx`:
```typescript
const interval = setInterval(() => {
  setTime(new Date());
}, 100); // Change this value (in milliseconds)
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project uses:
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Prettier** - Code formatting (recommended)

## 📱 Installation as PWA

### Desktop (Chrome/Edge)
1. Click the install icon in the address bar
2. Or go to Settings → Install Binary Clock

### Mobile (iOS Safari)
1. Tap the Share button
2. Select "Add to Home Screen"

### Mobile (Android Chrome)
1. Tap the menu (three dots)
2. Select "Add to Home Screen"

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by binary clock enthusiasts worldwide
 
---
made with bolt.new

**Enjoy your binary time! ⏰**
