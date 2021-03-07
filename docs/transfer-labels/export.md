# Export Existing Labels

This script will export your existing repository labels into a JSON file. To use this, visit your repository's label page and paste this into your browser console.

```js
function exportGitHubLabels() {
  let labels = [];
  [].slice
    .call(document.querySelectorAll(".js-label-link"))
    .forEach((element) => {
      labels.push({
        name: element.textContent.trim(),
        description: element.getAttribute("title"),
        color: element.style.backgroundColor
          .substring(4, element.style.backgroundColor.length - 1)
          .split(",")
          .reduce((hexValue, rgbValue) => {
            return hexValue + Number(rgbValue).toString(16).padStart(2, "0");
          }, ""),
      });
    });
  return labels;
}
function saveDataAsJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 4)], { type: "text/json" });
  const a = document.createElement("a");
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  a.click();
}
saveDataAsJSON(exportGitHubLabels(), document.title + ".json");
```
