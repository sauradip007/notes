# to force my fork to match the original:
git fetch upstream
git reset --hard upstream/main
git push --force


# if no upstream:
git remote add upstream <url>