# Clean Labels

This script will remove all labels from a repository. To run this, navigate to your repository's labels page and run this in your browser console.

> [!ATTENTION]
> GitHub triggers a `confirm` event on each label delete request. Currently, I don't have a way to programmatically bypass that (PRs are welcome!), so running this script will mean clicking through a LOT of browser prompts.

```js
let labels = document.querySelectorAll("form.js-delete-label > .btn-link");

console.log(labels);

labels.forEach((label) => {
  label.click();
  window.dispatchEvent(new KeyboardEvent("keydown", { key: "enter" }));
});
```
