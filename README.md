# Movie Watchlist App

A React-based movie meal generator application built to demonstrate state management using React Query. This app allows users to pick and add meals to their list and be able to pick a random meal if they need inspiration for their next meal. This project can be displayed by running the following in the terminal:

```
npm install
npm run dev
```

## Project Goals

- Demonstrate effective server-state management using React Query
- Integrate a real backend for data and asset storage
- Build intuitive UI flows with modals and multi-page navigation
- Maintain a clean, minimal interface without UI libraries

## Tech Stack

- **React** – Component-based UI development
- **TanStack Redux Query** – Server-state management (fetching, caching, and syncing meal data)
- **Backend Management (Supabase)** – Backend-as-a-Service for:
  - Meal data storage
  - Image/file storage
- **React Router (BrowserRouter)** – Client-side routing between pages
- **React Context API** - Used to handle states for opening/closing modal forms
- **CSS Modules** – Scoepd, maintainable component styling

## Core Features

1. A recipe list page where the user can:

- View and add meals to their list

2. A random meal generator page where:

- the user can open a modal to add individual meals to their meal list
- a random meal generator button, when clicked, displays a random meal from the list
- a carousel using CSS to display various meal images

3. Modal-Based Meal Creation

- Add new meals via a modal form
- Modal state managed using React Context
- Immediate UI updates without full page reloads

4. Image Carousel

- CSS-based carousel displaying meal images
- Images served from Supabase storage

## Key Learnings

This project demonstrates my ability to:

- Design and implement React Query to handle state management
- Integrate a backend service (Supabase)
- Manage derived and conditional UI state, separating UI state from server state effectively
- Structure an SPA page application with multiple page components
- Make UI and UX decisions without relying on UI libraries
