# Front-end Vue 3 + TypeScript + Vite

[Vue.js](https://vuejs.org/) 
[Vite](https://vitejs.dev/)

## Getting Started

1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Configure environment variables.
   - Create `.env.local` file (or `.env.development`, or `.env.production`, see [official docs](https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes)).
4. Run `npm run dev`.

## Scripts

- `npm run dev` - Run in development mode
- `npm run build` - Build the application for production

## Documentation
<!-- [https://kmart-office-docs.vercel.app/](https://kmart-office-docs.vercel.app/) -->

```raw
.
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   │   ├── * images/
│   │   └── * styles/
│   │       └── main.scss
│   ├── * components/
│   │   ├── * atoms/
│   │   ├── * molecules/
│   │   ├── * organisms/
│   │   └── * templates/
│   ├── mocks/
│   │   └── * api/
│   ├── * pages
│   ├── plugins/
│   ├── router/
│   │   ├── * path
│   │   └── index.ts
│   └── utils/
├── .env.local
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

Notes:
📂: Folder
⚛️: related folder
```

## Tools

- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Date & Time Utility**: [dayjs](https://day.js.org/)
- **Data Fetching**: [axios](https://github.com/axios/axios)
- **Routing**: [Vue router](https://router.vuejs.org/)
- **Api Mock**: [Msw](https://mswjs.io/)

