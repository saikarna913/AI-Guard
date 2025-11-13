# SafeText AI - Frontend# SafeText AI - Frontend# Welcome to your Lovable project



A React + TypeScript + Vite frontend for analyzing text content safety using AI.



## Project StructureA React + TypeScript + Vite frontend for analyzing text content safety using AI.## Project info



```

Frontend/

├── src/## Project Structure**URL**: https://lovable.dev/projects/7c6f50e0-aa26-4269-bf0c-e7c61e69468c

│   ├── pages/           # Page components (routes)

│   │   ├── Index.tsx    # Main analysis page - calls /api/analyze

│   │   ├── Contact.tsx  # Contact form - calls /api/contact

│   │   ├── About.tsx    # About page```## How can I edit this code?

│   │   ├── Team.tsx     # Team page

│   │   ├── Usage.tsx    # Usage guideFrontend/

│   │   ├── API.tsx      # API documentation

│   │   └── NotFound.tsx # 404 page├── src/There are several ways of editing your application.

│   ├── components/      # Reusable UI components

│   │   ├── Navigation.tsx  # Header/nav bar│   ├── pages/           # Page components (routes)

│   │   ├── NavLink.tsx     # Navigation link wrapper

│   │   └── ui/             # shadcn/ui pre-built components│   │   ├── Index.tsx    # Main analysis page - calls /api/analyze**Use Lovable**

│   ├── integrations/

│   │   └── backend/│   │   ├── Contact.tsx  # Contact form - calls /api/contact

│   │       └── client.ts   # Backend API client - wraps fetch calls

│   ├── hooks/           # React custom hooks (toast, mobile detection)│   │   ├── About.tsx    # About pageSimply visit the [Lovable Project](https://lovable.dev/projects/7c6f50e0-aa26-4269-bf0c-e7c61e69468c) and start prompting.

│   ├── lib/             # Utility functions

│   ├── App.tsx          # Main app with routing│   │   ├── Team.tsx     # Team page

│   └── main.tsx         # React entry point

├── public/              # Static assets│   │   ├── Usage.tsx    # Usage guideChanges made via Lovable will be committed automatically to this repo.

├── index.html           # HTML template

├── package.json         # Dependencies│   │   ├── API.tsx      # API documentation

└── vite.config.ts       # Vite build config

```│   │   └── NotFound.tsx # 404 page**Use your preferred IDE**



## How It Works│   ├── components/      # Reusable UI components



1. **User enters text** on the Index page (`src/pages/Index.tsx`).│   │   ├── Navigation.tsx  # Header/nav barIf you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

2. **Frontend calls backend** via `src/integrations/backend/client.ts`:

   - `analyzeText({text, model, language})` → POST `/api/analyze`│   │   ├── NavLink.tsx     # Navigation link wrapper

   - `sendContactEmail({name, email, message})` → POST `/api/contact`

3. **Backend processes** the request and returns results.│   │   └── ui/             # shadcn/ui pre-built componentsThe only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

4. **Results display** on the page.

│   ├── integrations/

## Environment Setup

│   │   └── backend/Follow these steps:

Create a `.env` file in the root:

│   │       └── client.ts   # Backend API client - wraps fetch calls

```

VITE_API_BASE_URL=http://localhost:8000│   ├── hooks/           # React custom hooks (toast, mobile detection)```sh

```

│   ├── lib/             # Utility functions# Step 1: Clone the repository using the project's Git URL.

For production, point to your deployed backend URL (e.g., `https://api.example.com`).

│   ├── App.tsx          # Main app with routinggit clone <YOUR_GIT_URL>

## Local Development

│   └── main.tsx         # React entry point

### Install & Run

├── public/              # Static assets# Step 2: Navigate to the project directory.

```powershell

npm install├── index.html           # HTML templatecd <YOUR_PROJECT_NAME>

npm run dev

```├── package.json         # Dependencies



Frontend will run on `http://localhost:5173`.└── vite.config.ts       # Vite build config# Step 3: Install the necessary dependencies.



### Build for Production```npm i



```powershell

npm run build

```## How It Works# Step 4: Start the development server with auto-reloading and an instant preview.



Output goes to `dist/` — deploy this folder to any static host (Netlify, Vercel, etc.).npm run dev



## Tech Stack1. **User enters text** on the Index page (`src/pages/Index.tsx`).```



- **Vite** - Fast build tool2. **Frontend calls backend** via `src/integrations/backend/client.ts`:

- **React** - UI library

- **TypeScript** - Type safety   - `analyzeText({text, model, language})` → POST `/api/analyze`**Edit a file directly in GitHub**

- **Tailwind CSS** - Styling

- **shadcn/ui** - Pre-built UI components   - `sendContactEmail({name, email, message})` → POST `/api/contact`

- **React Router** - Client-side routing

- **Lucide React** - Icons3. **Backend processes** the request and returns results.- Navigate to the desired file(s).

- **Zod** - Schema validation

4. **Results display** on the page.- Click the "Edit" button (pencil icon) at the top right of the file view.

## Key Files Explained

- Make your changes and commit the changes.

- `src/pages/Index.tsx` — Text analysis page. Calls backend `/api/analyze`.

- `src/pages/Contact.tsx` — Contact form. Calls backend `/api/contact`.## Environment Setup

- `src/integrations/backend/client.ts` — Fetches to backend endpoints. Update base URL via `VITE_API_BASE_URL`.

- `src/App.tsx` — Main router setup.**Use GitHub Codespaces**

- `src/components/Navigation.tsx` — Header with links.

Create a `.env` file in the root:

## Backend Integration

- Navigate to the main page of your repository.

The frontend expects these backend endpoints:

```- Click on the "Code" button (green button) near the top right.

| Endpoint | Method | Body | Response |

|----------|--------|------|----------|VITE_API_BASE_URL=http://localhost:8000- Select the "Codespaces" tab.

| `/api/analyze` | POST | `{text, model?, language?}` | `{category, safety, score, ...}` |

| `/api/classify` | POST | `{text}` | `{category, safety, score}` |```- Click on "New codespace" to launch a new Codespace environment.

| `/api/contact` | POST | `{name, email, message}` | `{success: true, message}` |

- Edit files directly within the Codespace and commit and push your changes once you're done.

See `../backend/README.md` for backend setup.

For production, point to your deployed backend URL (e.g., `https://api.example.com`).

## Deployment

## What technologies are used for this project?

### To Netlify

## Local Development

```powershell

npm install -g netlify-cliThis project is built with:

netlify deploy --prod --dir=dist

```### Install & Run



### To Vercel- Vite



```powershell```powershell- TypeScript

npm i -g vercel

vercel --prodnpm install- React

```

npm run dev- shadcn-ui

Both require `VITE_API_BASE_URL` set to your backend URL in their environment variable UI.

```- Tailwind CSS



Frontend will run on `http://localhost:5173`.## How can I deploy this project?



### Build for ProductionSimply open [Lovable](https://lovable.dev/projects/7c6f50e0-aa26-4269-bf0c-e7c61e69468c) and click on Share -> Publish.



```powershell## Can I connect a custom domain to my Lovable project?

npm run build

```Yes, you can!



Output goes to `dist/` — deploy this folder to any static host (Netlify, Vercel, etc.).To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.



## Tech StackRead more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


- **Vite** - Fast build tool
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Pre-built UI components
- **React Router** - Client-side routing
- **Lucide React** - Icons
- **Zod** - Schema validation

## Key Files Explained

- `src/pages/Index.tsx` — Text analysis page. Calls backend `/api/analyze`.
- `src/pages/Contact.tsx` — Contact form. Calls backend `/api/contact`.
- `src/integrations/backend/client.ts` — Fetches to backend endpoints. Update base URL via `VITE_API_BASE_URL`.
- `src/App.tsx` — Main router setup.
- `src/components/Navigation.tsx` — Header with links.

## Backend Integration

The frontend expects these backend endpoints:

| Endpoint | Method | Body | Response |
|----------|--------|------|----------|
| `/api/analyze` | POST | `{text, model?, language?}` | `{category, safety, score, ...}` |
| `/api/classify` | POST | `{text}` | `{category, safety, score}` |
| `/api/contact` | POST | `{name, email, message}` | `{success: true, message}` |

See `../backend/README.md` for backend setup.

## Deployment

### To Netlify

```powershell
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### To Vercel

```powershell
npm i -g vercel
vercel --prod
```

Both require `VITE_API_BASE_URL` set to your backend URL in their environment variable UI.
