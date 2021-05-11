# Semantic Versioning

These are the procedures I follow for incrementing the version number of Node.js projects (within the `package.json`).

Note that versions are _never_ incremented manually, but instead incremented with `npm` commands.

A project initially starts at version `0.0.0`, and receives NO version updates during the initial setup. When the setup is complete and the project is ready for first deployment, the version is bumped to `1.0.0`. All subsequent changes will follow these rules.

## Major Versions

Major version increments are performed with `npm version major`. A major version is released when changes are made that break the previous functionality of the codebase. Additionally, large refactors or changes that touch the majority of the files within the application will result in a major version bump.

## Minor Versions

Minor version increments are performed with `npm version minor`. A minor version is released any time a new feature is added to the code base, or an existing feature is removed.

## Patch Versions

Patch version increments are performed with `npm version patch`. A patch version is released when bugs are fixed in existing features, or tweaks are made without adding additional

## No Version

Versions are not incremented for documentation changes, workflow modifications, test updates, or tooling configs. Anything that does not impact the end user experience is not a version update.

## When to Update?

The command to update the version (and the related commit) should only be performed _after_ the pull request has passed CI, is approved, and is ready for merge. This prevents additional commits from being pushed after the version is bumped - this would be a bad practise.
