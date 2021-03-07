# Rebase Branch

> [!WARNING]
> Rebasing a branch is effectively rewriting your `git` history and should be done with care. I do this only when resolving merge conflicts for a PR, or for branches I have not pushed up to a remote yet.

This script will rebase your current branch against the upstream (source repo, assuming you're working off a fork) `main` branch.

```bash
git fetch upstream
git checkout <PR branch>
git rebase -i upstream/main
git push origin <PR branch> -f
```

> [!NOTE]
> Replace `PR branch` with the name of your current working branch (the one you want to rebase against `main`).

## Configuring Upstream

If you don't have the upstream repository configured yet, run this command to set it:

```bash
git remote add upstream <url>
```

## What if my repository isn't a fork?

If you are working on your own original project, then replace `upstream` in the top script with `origin`.

## Rebasing interactively

The `-i` flag in the rebase command opens the interactive rebase tool in your default text editor. Here you should see a list of commits on your branch, sorted in order from oldest to newest.

You will see the text `pick`, followed by the commit hash and message. `pick` represents the action to take on that commit. In this case, `pick` will use the commit as-is in the rewrite. The options I commonly use are `squash`, to squish the commit into the previous one, and `drop` to remove the commit (and its changes!) from the branch entirely.

> [!NOTE]
> When squashing ALL commits, the first commit in the list should be left as `pick` (or another option such as `reword` or `edit`) as the other commits will use that commit as the squash point.

## Force Push

The final line in the script is a "force push", indicated by the `-f` flag. A "force push" will force your remote branch to match the commit history of your local branch, rewriting the activity as needed.

This can cause confusion for other developers, and I only do this for branches that have not merged in to `main` yet.
