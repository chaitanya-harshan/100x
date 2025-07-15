*tsc, tsx(direct)*

-> `npm init`

# tsc --init
-> creates typescript project & `tsconfig.json`
___________________________________________________

# Running TypeScript files

## Building and Running
1. `tsc -b`: Builds the project from `src` to `dist`.
2. `node dist/index.js`: Runs the compiled JavaScript file from `dist`.

## Direct Compilation and Execution (without building)
`tsc index.ts; node index.js`

## Using `tsx` (Recommended for Development)
`tsx index.ts` (running ts files directly)
