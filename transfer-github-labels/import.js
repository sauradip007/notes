/**
 * Inspired by @Isaddo original script: https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4
 * Adds descriptions per @NillerMedDild https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4#gistcomment-2715349
 *
 * Changes include:
 * - CSS selectors use `js` prefix
 *
 * Last tested 2019-July-27:
 *   - Chrome 75.0.3770.142
 *   - Safari 12.1.2
 *   - macOS 10.14.6	 */
function createLabel(label) {
  document.querySelector(".js-new-label-name-input").value = label.name;
  document.querySelector(".js-new-label-description-input").value =
    label.description;
  document.querySelector(".js-new-label-color-input").value = "#" + label.color;
  document.querySelector(".js-details-target ~ .btn-primary").disabled = false;
  document.querySelector(".js-details-target ~ .btn-primary").click();
}
function updateLabel(label) {
  let updatedLabel = false;
  [].slice
    .call(document.querySelectorAll(".js-labels-list-item"))
    .forEach((element) => {
      if (
        element.querySelector(".js-label-link").textContent.trim() ===
        label.name
      ) {
        updatedLabel = true;
        element.querySelector(".js-edit-label").click();
        element.querySelector(".js-new-label-name-input").value = label.name;
        element.querySelector(".js-new-label-description-input").value =
          label.description;
        element.querySelector(".js-new-label-color-input").value =
          "#" + label.color;
        element.querySelector(".js-edit-label-cancel ~ .btn-primary").click();
      }
    });
  return updatedLabel;
}
function createOrUpdate(label) {
  if (!updateLabel(label)) {
    createLabel(label);
  }
}
[
  {
    name: "🟥 priority: critical",
    description: "Must be fixed ASAP",
    color: "b60205",
  },
  {
    name: "🟧 priority: high",
    description: "Stalls work on the project or its dependents",
    color: "ff9f1c",
  },
  {
    name: "🟨 priority: medium",
    description: "Not blocking but should be fixed soon",
    color: "ffcc00",
  },
  {
    name: "🟩 priority: low",
    description: "Low priority and doesn't need to be rushed",
    color: "cfda2c",
  },
  {
    name: "🟪 priority: none",
    description: "No priority, should only be performed when a developer is available",
    color: "008672"
  },
  {
    name: "🏁 status: ready for dev",
    description: "Ready for work",
    color: "cccccc",
  },
  {
    name: "🚧 status: blocked",
    description: "Blocked and therefore not ready for work",
    color: "999999",
  },
  {
    name: "🧹 status: ticket work required",
    description: "Needs more details before it can be worked on",
    color: "666666",
  },
  {
    name: "🏷 status: label work required",
    description: "Needs proper labelling before it can be worked on",
    color: "666666"
  },
  {
    name: "🙅 status: discontinued",
    description: "Not suitable for work as repo is in maintenance",
    color: "eeeeee"
  },
  {
    name: "⛔️ status: discarded",
    description: "Will not be worked on",
    color: "eeeeee",
  },
  {
    name: "🚦 status: awaiting triage",
    description: "Has not been triaged & therefore, not ready for work",
    color: "333333",
  },
  {
    name: "⭐ goal: addition",
    description: "Addition of new feature",
    color: "ffffff",
  },
  {
    name: "✨ goal: improvement",
    description: "Improvement to an existing feature",
    color: "ffffff",
  },
  {
    name: "🛠 goal: fix",
    description: "Bug fix",
    color: "ffffff",
  },
  {
    name: "📄 aspect: text",
    description: "Concerns the documentation material in the repository",
    color: "04338c",
  },
  {
    name: "💻 aspect: code",
    description: "Concerns the software code in the repository",
    color: "04338c",
  },
  {
    name: "🕹 aspect: interface",
    description: "Concerns end-users' experience with the software",
    color: "04338c",
  },
  {
    name: "🤖 aspect: dx",
    description: "Concerns developers' experience with the codebase",
    color: "04338c",
  },
  {
    name: "❓ talk: question",
    description: "Can be resolved with an answer",
    color: "f9bbe5",
  },
  {
    name: "💬 talk: discussion",
    description: "Open for discussions and feedback",
    color: "f9bbe5",
  },
  {
    name: "good first issue",
    description: "New-contributor friendly",
    color: "7f0799",
  },
  {
    name: "help wanted",
    description: "Open to participation from the community",
    color: "7f0799",
  },
  {
    name: "🔒 staff only",
    description: "Restricted to project staff members",
    color: "7f0799",
  },
].forEach((label) => createOrUpdate(label));
