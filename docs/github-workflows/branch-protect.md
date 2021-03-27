# Branch Protection Rules

The `main` branch on a repository should have a protection ruleset configured. In this ruleset:

- At least 1 review should be required.
- Stale reviews should be dismissed when a new commit is pushed to an open PR.
- The CI that fires on `pull_request` events should be required.
- The external integrations that run against pull requests should also be required.
- Branches should be required to be up to date before merging.
- Optionally require signed commits (this hasn't been tested yet).
