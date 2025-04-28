
# Contributing to CartFlow

Thanks for your interest in contributing to **CartFlow**! 🎉  
This guide will help you set up your environment, follow the coding style, and submit useful contributions.

## 1. Getting Started

- ### Prerequisites
    - Node.js (v18 or higher recommended)
    - npm (v9 or higher) or yarn
    - Git

- ### Setup
    - **Fork the repository**  
       Click the "Fork" button on the [GitHub repo](https://github.com/nassiry/cartflow).
    
    - **Clone your fork**
       ```bash
       git clone https://github.com/nassiry/cartflow.git
       cd cartflow
       ```

- ### Install dependencies

```bash
npm install
```

## 2. Development Workflow

### Available Scripts

- `npm run lint` — Analyze code for potential issues using ESLint.
- `npm run lint:fix` — Automatically fix linting errors where possible.
- `npm run format` — Format your codebase with Prettier for consistent styling.
- `npm run build` — Compile and bundle the project into the `dist/` directory.

## 3. Code Style

- **Linting:** We use ESLint with strict rules. Run `npm run lint` before committing.
- **Formatting:** Prettier enforces consistent styling. Run `npm run format` or configure your editor to format on save.
- **Git Commit Messages:** Follow [Conventional Commits](https://www.conventionalcommits.org/).
    ```bash
    npm run lint
    npm run format
    ```
    > Use a code editor with ESLint & Prettier plugins for auto-formatting on save.

## 4. Demo Updates

If your contribution includes changes to **public APIs** or **core functionality**, you may need to update the online demo:

- **Demo Location:** The demo lives in `./demo/`.
- **Testing Locally:** Run the demo locally to verify changes:
    ```bash
    npm run demo  # Starts demo server at http://localhost:3000  
    ```
- **Update Demo Files:**
    - Modify `demo/index.html` or relevant demo scripts if APIs change.
    - Add/remove examples to reflect new features or breaking changes.

## 5. Making Contributions

### Pull Request Guidelines

- **Keep PRs focused:** Address one issue or feature per PR.
- **Test your changes:** Ensure `npm run lint` and `npm test` (if applicable) pass.
- **Update documentation:** If you change APIs or behavior, update the relevant docs.
- **Rebase your branch:** Sync with `upstream/main` before submitting:
    ```bash
    git fetch upstream
    git rebase upstream/main
    ```
  
## 6. Need Help?

- For questions, open a [GitHub Discussion](https://github.com/nassiry/cartflow/discussions).
- Found a bug? [File an issue](https://github.com/nassiry/cartflow/issues).

## 7. Share Your Usage

We'd love to see how you're using this library in your projects! Here's how you can share:

- **Add to our showcase:**
Submit a PR adding your project to our `SHOWCASE.md`.
- See [SHOWCASE.md](./SHOWCASE.md) to share how you're using this library.

- ### Example format:

```html
- [Your Project Name](https://yourlink.com)  
  Brief description ("Used for real-time in our ecommerce APP.")
```

## Thank You!
We appreciate your time and effort! Every contribution, big or small, makes a difference.
Happy coding!