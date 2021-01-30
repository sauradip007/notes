# Removes ALL branches from local repo except "main"
# This will delete unmerged changes as well.
git branch | grep -v "main" | xargs git branch -D 