# get the CURRENT state of upstream
git fetch upstream
# switch to branch you made PR from
git checkout <PR branch> 
# rebase with interactive editor
# NOTE - top commit should be `pick`, rest should be `squash`
# To rebase without squashing, ALL should be `pick`.
git rebase -i upstream/main
# force the new single commit to the remote PR branch
git push origin <PR branch> -f