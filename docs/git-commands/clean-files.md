# Clean Files

This script will clean up (delete) any files in your local repository that are not being tracked by `git` - usually due to being in the `.gitignore`.

```bash
git clean -idfx
```

Flags:

- `i`: interactive - offers a GUI for selecting and filtering the files to clean
- `d`: directories - allows recursive clean-up of directories
- `f`: force - bypasses the `git` config `clean.requireForce` setting
- `x`: removes _only_ files listed in `.gitingore`, not any newly-created files that haven't been committed yet.

## Using the Interactive Mode

I commonly run this to clean everything up and bring my repository back to a "fresh" state, as if I had just cloned it. However, the one file I always want to preserve is my `.env` file. SO:

- Select option 2 to filter by pattern
- Enter `.env` as ignore pattern (this preserves your `.env` file)
- Hit enter to apply filter
- Select 1 to clean everything else
