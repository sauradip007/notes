# Cleans up all cached files
git clean -idfx
# i (interactive) - allows interactive selection of files to remove
# d (directories) - recursively travels directories
# f (force) - bypasses `clean.requireForce` check
# x - removes only .gitignored files, not manually created untracked files

# Using interactive mode:
# Select option 2 to filter by pattern
# Enter `.env` as ignore pattern (this preserves your .env file)
# Hit enter to apply filter
# Select 1 to clean everything else