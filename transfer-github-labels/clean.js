/**
 * This script will remove all existing labels from a repository
 * to allow a clean slate for using the import.js script. Unfortunately
 * you'll have to manually click through the alerts for each delete call.
 * Have fun!
 */
let labels = document.querySelectorAll("form.js-delete-label > .btn-link");

console.log(labels);

labels.forEach((label) => {
  label.click();
  window.dispatchEvent(new KeyboardEvent("keydown", { key: "enter" }));
});
