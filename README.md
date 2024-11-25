# Webxdc App Template

Template project for building [Webxdc](https://webxdc.org/) applications

## Getting started

Make sure you have the following installed:

- [`NodeJS`](https://nodejs.org/)
- [`pnpm`](https://pnpm.io/)

Some commonly used scripts:

- Install deps (usually when initially cloning the repo):

  ```sh
  pnpm install
  ```

- Perform some code checks:

  ```sh
  pnpm run lint # Check formatting and code quality
  pnpm run types # Check types
  ```

- Start the dev server:

  ```sh
  pnpm run vite:dev
  ```

- Start the Webxdc emulator (must have the dev server running already):

  ```sh
  pnpm run webxdc:emulator
  ```

- Build the application for distribution:

  ```sh
  pnpm run vite:build
  ```

## License

[MIT](./LICENSE)
