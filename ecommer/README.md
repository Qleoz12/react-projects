# E-commerce

This is a Monorepo that uses TurboRepo to manage application with [Nestjs](https://docs.nestjs.com/) and [Reactjs](https://react.dev/)

## Getting Started

First, install the dependencies

```
npm install
```

For add new depencies

```
npm i name-dependecies --workspace name-project-dir(api or client)
```

Run the production server:
```
npm run buld
```
and
```
npm start
```


Run the development server: 

```
npm run dev
```

Open frontend http://localhost:5173 with our browser to see the result

API routes can be accessed on http://localhost:3000/api with our browser to see the result

### The structure of this monorepo repository is as follows:

The structure of this monorepo repository is as follows:

```
.
├── apps
│   ├── api
│   │   ├── src
│   │   ├── package.json
│   │   └── ...
│   └── client
│       ├── src
│       ├── package.json
│       └── ...
├── package.json
├── README.md
└── ...
```

- The `apps` folder is the root directory for all the applications in the monorepo.
- The `apps/api` folder contains the NestJS backend.
- The `apps/client` folder contains the React frontend.
- The `package.json` file in the root directory of the repository contains dependencies and common scripts for all the applications.


