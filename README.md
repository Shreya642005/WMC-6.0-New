# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Backend Setup (Express + MongoDB Atlas)

1. Create a `.env` file at project root from `.env.example` and set:
   - `MONGODB_URI` (from MongoDB Atlas)
   - `PORT` (optional, default 5000)

2. Install dependencies (already in package.json):

```
npm install
```

3. Run both frontend and backend in dev:

```
npm run dev:full
```

- Frontend: http://localhost:5173
- API: http://localhost:5000

### API
- GET `/api/missions` → list missions
- POST `/api/missions` → create mission

Request body for POST example:

```
{
  "title": "Rhino Rampage Downtown",
  "description": "...",
  "date": "2024-01-15",
  "time": "14:30",
  "location": "Wall Street",
  "coordinates": [40.7074, -74.0113],
  "urgency": "critical",
  "status": "active",
  "area": "Manhattan"
}
```

Frontend uses Vite proxy, so it can call `/api/*` directly.
