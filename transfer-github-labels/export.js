/**
 * Inspired by @MoOx original script: https://gist.github.com/MoOx/93c2853fee760f42d97f
 * Adds file download per @micalevisk https://gist.github.com/MoOx/93c2853fee760f42d97f#gistcomment-2660220
 *
 * Changes include:
 * - Get the description from the `title` attribute instead of `aria-label` (doesn't exist anymore)
 * - Use style.backgroundColor and parse the rgb(...) to hex (rather than regex parsing of 'style' string)
 * - Downloads labels to a JSON file named after the webpage to know which GitHub repo they came from.
 *
 * Last tested 2019-July-27:
 * - Chrome 75.0.3770.142
 * - Safari 12.1.2
 * - macOS 10.14.6	 */
function exportGitHubLabels() {
  let labels = [];
  [].slice.call(document.querySelectorAll(".js-label-link")).forEach((element) => {
    labels.push({
      name: element.textContent.trim(),
      description: element.getAttribute("title"),
      color:
        // style.backgroundColor returns "rgb(...)"
        // but GitHub expects hex when we import the colors
        element.style.backgroundColor
          // grab between 'rgb(' and ')'
          .substring(4, element.style.backgroundColor.length - 1)
          // convert comma-delimited string into array of three numbers
          .split(",")
          // reduce array of three numbers into single hex color
          .reduce((hexValue, rgbValue) => {
            return (
              // append next two-digit hex value
              hexValue +
              // convert decimal to hex
              Number(rgbValue)
                .toString(16)
                // each number in a hex color is two characters
                .padStart(2, "0")
            );
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
