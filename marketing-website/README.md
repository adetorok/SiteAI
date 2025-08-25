# Cursor Marketing Website

A modern, responsive marketing website for the Cursor Clinical Study Management Platform, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Landing Pages
- **Main Landing Page** - "Why Cursor" with comprehensive value proposition
- **Features & Benefits Page** - Detailed feature breakdown with interactive elements
- **Demo Page** - Coming soon
- **Login Page** - Coming soon

### Technical Features
- **Error Boundaries** - Graceful error handling with fallback UI
- **Debug Utilities** - Comprehensive debugging tools for development
- **Smoke Testing** - Built-in testing panel for functionality verification
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **TypeScript** - Full type safety and modern development experience
- **Performance Optimized** - Lazy loading and optimized builds

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Development**: Hot reloading, ESLint, TypeScript compiler

## 📁 Project Structure

```
marketing-website/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ErrorBoundary.tsx
│   │   └── SmokeTest.tsx
│   ├── pages/             # Page components
│   │   ├── MainLanding.tsx
│   │   └── FeaturesPage.tsx
│   ├── utils/             # Utility functions
│   │   └── debug.ts
│   ├── App.tsx            # Main app component
│   ├── App.css            # Global styles
│   ├── index.tsx          # Entry point
│   └── index.css          # Tailwind imports
├── package.json            # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 8+

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd marketing-website

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🎨 Design System

### Colors
- **Primary Blue**: `#2563eb` (cursor-blue)
- **Success Green**: `#059669` (cursor-green)
- **Neutral Gray**: `#6b7280` (cursor-gray)
- **Light Gray**: `#f9fafb` (cursor-light-gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)

## 🧪 Testing

### Smoke Tests
The application includes a built-in smoke testing panel that appears in development mode. Click "Run Tests" in the bottom-right corner to verify:

- Component rendering
- Navigation functionality
- Button interactions
- Responsive design
- Error boundaries
- Performance metrics

### Manual Testing
- Test all navigation links
- Verify responsive design on different screen sizes
- Check error handling by triggering errors
- Test button click handlers

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the project
npm run build

# Serve the build folder
npx serve -s build
```

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Set to `production` for production builds
- `REACT_APP_API_URL`: Backend API endpoint (if applicable)

### Tailwind Configuration
Custom colors and fonts are defined in `tailwind.config.js`. Modify this file to update the design system.

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation
- Mobile-optimized layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Screen reader compatibility

## 🚨 Error Handling

- **Error Boundaries**: Catch and display React errors gracefully
- **Fallback UI**: User-friendly error messages with recovery options
- **Debug Information**: Detailed error logs in development mode
- **Graceful Degradation**: Application continues to function even with errors

## 🔍 Debugging

### Development Mode
- Console logging for all major operations
- Performance monitoring
- Component render tracking
- Error boundary information

### Production Mode
- Debug utilities automatically disabled
- Minimal console output
- Optimized performance

## 📈 Performance

- Lazy loading of components
- Optimized bundle sizes
- Efficient re-rendering
- CSS optimization with Tailwind

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for Cursor Clinical Study Management Platform.

## 🆘 Support

For support and questions:
- Check the documentation
- Review the code comments
- Contact the development team

---

**Built with ❤️ for the Cursor team**
