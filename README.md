# Code Snippets

Some bits of code that I need on occasion, saved here for ease of access.

## Funny Codes

Some funny or nonsensical scripts I have written. 

### Hello World

I was challenged to write an absurdly long program that prints "Hello World" to the console.

## Git Commands

Helpful commands for the `git` CLI.
- `git-clean-branches`: Helpful script for cleaning up ALL branches except `main`.
- `git-clean-files`: Removes untracked and cached files from the local repository.
- `git-update-fork`: Forces a local repository to match the `main` branch of the original repository. Avoids endless "update" commits.
- `git-squash-commits`: Rebases a branch against `main`, optionally squashes the commits into one.

## Node TS Config

Tooling files specifically for Node/TypeScript projects. Covers ESLint, Husky, and Prettier.

## Notes

Various random notes I need.

## Optional Workflows

Extra workflows that can be added to a GitHub repo.
- `codeql-typescript-node.yml`: Code Quality analysis for Node/TypeScript projects.
- `dependabot`: Configuration for Dependabot to update `npm` packages.
- `merge-conflit`: Labeller for pull requests with merge conflicts.
- `node-ci`: CI to run the `lint` and `build` scripts on a PR.
- `stale`: Labeller to flag stale issues/PRs.

## Transfer-GitHub-Labels

Browser-run code to export the labels on a GitHub repo, download them, and import them into another repo.

Scripts:

- `clean`: This will remove all of the existing labels on the repository. GitHub will prompt for confirmation, so you'll have to click through all of those. 
- `export`: This will grab the data for your existing labels and store it in a `.json` file. Useful if you want to copy labels to a new repository.
- `import`: This will load the `default-labels.json` labels into your repository. Run this in your browser console when you're viewing the labels page. You can add addtional labels to the end of the array (where commented).

Data:

- `default-labels.json`: This is the list of Creative Commons labels used by default in my repositories.
- `skill-label-template.json`: This is a sample object for creating the `skill` labels. Replace `skillname` with the appropriate skill (i.e. TypeScript)
- `hacktoberfest.json`: This holds the two Hacktoberfest-related labels.
- `misc.json`: This is a sample object for creating miscellaneous, project-specific labels. Each label should have a relevant emoji, a category, and a name.

## Feedback and Bugs

If you have feedback or a bug report, please feel free to open a GitHub issue!

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## Questions

If you have questions regarding contributing, using the project, or any related topic, you can reach us at our [Chat Server](http://chat.nhcarrigan.com) where we would be happy to help!

## Licensing

Copyright (C) 2020 Nicholas Carrigan

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.

The full license terms may be viewed in the [LICENSE.md file](./LICENSE.md)

## Contact

We may be contacted through our [Chat Server](http://chat.nhcarrigan.com) or via [email form](https://contact.nhcarrigan.com).