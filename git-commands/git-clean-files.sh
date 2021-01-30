# Cleans up all cached files
git clean -idfx
# i (interactive) - allows interactive selection of files to remove
# d (directories) - recursively travels directories
# f (force) - bypasses `clean.requireForce` check
# x - removes only .gitignored files, not manually created untracked files