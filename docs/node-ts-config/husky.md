# Husky Configuration

Husky is a tool that runs pre-commit checks to determine that code is compliant with the standards before it reaches a remote repository. This config goes in a `.huskyrc` file in the root project directory.

```json
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

The configuration adds a pre-commit hook, which runs on all files staged for a commit when `git commit` is called. This configuration calls the `lint-staged` settings from the `package.json`.

Therefore, we need to add that to the `package.json`:

```json
  "lint-staged": {
    "*.ts": ["eslint --fix", "prettier --write"]
  }
```

This will run the linter and formatter on any staged `.ts` files, save the changes, re-stage, and then process the commit request.
