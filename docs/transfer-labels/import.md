# Import Labels

This script will import labels to a GitHub repository. To use this script, navigate to the labels page of your repository and run this in your browser console.

```js
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

let labels = [
  // insert your label template here
];

labels.forEach((label) => createOrUpdate(label));
```

> [!NOTE]
> Using one of our [label templates](/transfer-labels/templates.md), replace the empty `labels` array with your list of chosen labels.
