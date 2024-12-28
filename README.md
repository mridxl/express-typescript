# Express TypeScript Template

A minimal template for building Node.js applications with TypeScript and Express, featuring hot-reloading with nodemon.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

## Project Structure

```
express-typescript/
├── src/
│   └── index.ts
├── nodemon.json
├── package.json
├── tsconfig.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start production server:
```bash
npm start
```

## Available Scripts

- `npm run dev`: Starts development server with hot-reloading
- `npm run build`: Compiles TypeScript to JavaScript
- `npm start`: Runs the compiled application

## Configuration Files

### tsconfig.json
- Targets ES6
- Uses CommonJS modules
- Enables strict type-checking
- Outputs compiled files to `./dist`

### nodemon.json
- Watches `src` directory for changes
- Monitors TypeScript files
- Ignores test files
- Executes using ts-node

## Dependencies

### Production
- express: ^4.21.2

### Development
- @types/express: ^5.0.0
- @types/node: ^22.10.2
- nodemon: ^3.1.9
- ts-node: ^10.9.2
- typescript: ^5.7.2

## Default Endpoints

- `GET /`: Returns welcome message
- Server runs on `http://localhost:3000`
