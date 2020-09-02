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
    name: "notice: good first issue",
    description: "This issue is open ONLY to new contributors",
    color: "006b75",
  },
  {
    name: "notice: help wanted",
    description: "This issue is open for PR submissions!",
    color: "0e8a16",
  },
  {
    name: "status: approved",
    description: "This PR is approved and is pending merge",
    color: "c2e0c6",
  },
  {
    name: "status: awaiting review",
    description: "This PR has not yet been reviewed",
    color: "e99695",
  },
  {
    name: "status: denied",
    description: "This PR will not be accepted at this time",
    color: "b60205",
  },
  {
    name: "status: merge conflict",
    description: "This PR has a merge conflict that must be resolved",
    color: "e99695",
  },
  {
    name: "status: question",
    description: "This issue/PR requires additional information/clarification",
    color: "fef2c0",
  },
  {
    name: "status: requires update",
    description: "This PR needs an update after being reviewed",
    color: "e99695",
  },
  {
    name: "status: stale",
    description: "This issue/PR has had no recent activity and may be closed.",
    color: "fef2c0",
  },
  {
    name: "status: triage",
    description: "This issue needs to be triaged and a fix identified",
    color: "e99695",
  },
  {
    name: "type: bug",
    description: "Related to a bug in the code",
    color: "d4c5f9",
  },
  {
    name: "type: chore",
    description: 'Related to a chore or "busywork" type task',
    color: "d4c5f9",
  },
  {
    name: "type: dependencies",
    description: "Related to the `npm` dependencies",
    color: "d4c5f9",
  },
  {
    name: "type: documentation",
    description: "Related to the documentation files",
    color: "d4c5f9",
  },
  {
    name: "type: request",
    description: "Related to a new feature request or update",
    color: "d4c5f9",
  },
  {
    name: "type: unknown",
    description: "The scope of this issue is unknown",
    color: "d4c5f9",
  },
].forEach((label) => createOrUpdate(label));
