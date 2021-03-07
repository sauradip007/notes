# Clean Branches

This removes all branches from your local repository except the `main` branch.

> [!WARNING]
> This will also remove any branches that have not been merged into `main` yet, so use care.

```bash
git branch | grep -v "main" | xargs git branch -D
```

## Preserving a Different Branch

Maybe your default branch isn't `main`. Maybe it's `develop`, or `default`, or some other way cooler name.

To change the branch that is left alone by this script, replace the text `main` with the name of the branch you would like to keep.
