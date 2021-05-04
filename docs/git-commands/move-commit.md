# Move A Commit

On occasion, when I update a local repository by pulling down the remote `main` branch before making my new changes, I forget to switch to a new branch after completing this. This means I accidentally commit changes to the `main` branch. Here's how to fix that:

## Move to a new branch

First, ensure you are still on `main` (or whichever branch you accidentally committed to.) Then, use this script (replacing `<new>` with your desired new branch name):

```bash
git branch <new>
git reset --hard origin/main
git checkout <new>
```

- `git branch <new>` creates a new branch from your *current* state of `main`, including the commit you created.
- `git reset --hard origin/main` will reset your local main to the state of the origin `main` branch, removing the extra commit.
- `git checkout <new>` will switch to your new branch, which now includes the extra commit.

Once this is done, you can push your changes up to the remote repository on your new branch!
