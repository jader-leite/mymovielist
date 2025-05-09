# MyMovieList 🎬

A modern movie list application built with React, TypeScript, and Chakra UI. Keep track of your favorite movies, discover new ones, and manage your watchlist all in one place.

## 🌐 Live Demo

Access the aplication at: [MyMovieList Live](https://mymovielist-seven.vercel.app/)

## ✨ Features

- 🎯 Search for movies with real-time results
- 📱 Responsive design for all devices
- ⭐ Add movies to favorites
- 🔍 Detailed movie information
- 🎨 Modern and intuitive UI

## 🛠️ Technologies

- [React](https://reactjs.org/) - Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Chakra UI](https://chakra-ui.com/) - Component Library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vite](https://vitejs.dev/) - Build Tool
- [React Router](https://reactrouter.com/) - Routing
- [Zustand](https://github.com/pmndrs/zustand) - State Management
- [Axios](https://axios-http.com/) - HTTP Client
- [Vercel](https://vercel.com/) - Deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/jader-leite/mymovielist.git
cd mymovielist
```

2. Install dependencies
```bash
pnpm install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
VITE_OMDB_API_KEY=your_omdb_api_key
VITE_TMDB_API_KEY=your_tmdb_api_key
```

4. Start the development server
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier

## 🏗️ Project Structure

```
src/
├── assets/        # Static assets
├── components/    # Reusable components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API services
├── stores/        # State management
├── types/         # TypeScript types
└── utils/         # Utility functions
```

