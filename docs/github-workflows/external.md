# External Integrations

These are the external integrations I apply to my repositories. The badges are set up in the new repository template too!

## LGTM

The LGTM analysis scans PRs for various code quality and security issues, such unprotected API endpoints, vulnerable database queries, or unused module imports.

The integration will automatically scan new repositories, but will throw a build error until the initial project is set up. Once the initial project is set up, you can re-trigger the build to get teh base commit.

Then, LGTM will analyse PRs to ensure no new concerns are introduced. If a concern is noted, the integration will comment on the PR to identify the new issues.

## Code Climate

Code Climate will scan the code base for things like repetition, file length, cognitive overhead, and tech debt. Repositories will need to be added manually - this should be done after the initial project setup.

You will need to manually enable PR comments and PR status updates. You will also need to add `**/*.spec.ts` to the exclusion settings to avoid being flagged for repeating code in the test files.

> [!NOTE]
> Once both of these are set up, ensure that you require the status checks they generate in the branch protection settings.

## Renovate

This is a new integration I'm exploring, to replace dependabot. More information will come if I like it.
