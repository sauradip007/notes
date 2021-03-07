# Git Ignore

This configuration tells `git` to ignore specific files and directories, ensuring they are not committed or pushed up to a remote repository. This goes in your root project directory, in a `.gitignore` file.

```txt
/node_modules/
/prod/
.env
```

## Rules

- `/node_modules/`: This will ignore any installed node packages (at the root of the project). These should not be committed as they bloat the git history unnecessarily.
- `/prod/`: When paired with the TypeScript configuration provided, this will prevent the compiled JavaScript files from being committed. These do not need to be version controlled and will pollute your git history if tracked.
- `.env`: The `.env` file is used to hold your project secrets, such as API keys or database passwords. It should **never** be committed to a version control.
