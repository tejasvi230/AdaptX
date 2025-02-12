document.addEventListener(
    "DOMContentLoaded", function() {
      const body = document.body;
      const colorButtons = document.querySelectorAll(".color-options button");
      const fontSelect = document.getElementById("font-select");
      const fontSizeInput = document.getElementById("font-size");
      const highContrastCheckbox =
          document.getElementById("high-contrast-mode");
      const grayscaleCheckbox = document.getElementById("grayscale-mode");
      const underlineLinksCheckbox = document.getElementById("underline-links");
      const downloadButton = document.getElementById("download-theme");

      // Apply Color Theme
      colorButtons.forEach(button = > {
        button.addEventListener(
            "click", () = > {
              body.className = ""; // Reset classes
              body.classList.add(button.getAttribute("data-theme"));
            });
      });

      // Apply Font
      fontSelect.addEventListener(
          "change", () = > { body.style.fontFamily = fontSelect.value; });

      // Adjust Font Size
      fontSizeInput.addEventListener(
          "input",
          () = > { body.style.fontSize = `${fontSizeInput.value} px`; });

      // Toggle High Contrast Mode
      highContrastCheckbox.addEventListener(
          "change", () = > {
            body.classList.toggle("high-contrast",
                                  highContrastCheckbox.checked);
          });

      // Toggle Grayscale Mode
      grayscaleCheckbox.addEventListener(
          "change", () = > {
            body.classList.toggle("grayscale", grayscaleCheckbox.checked);
          });

      // Toggle Underline Links
      underlineLinksCheckbox.addEventListener(
          "change", () = > {
            const links = document.querySelectorAll("a");
            links.forEach(link = > {
              link.style.textDecoration =
                  underlineLinksCheckbox.checked ? "underline" : "none";
            });
          });

      // Download Theme as CSS
      downloadButton.addEventListener(
          "click", () = > {
            const styles = ` body {
              font - family : ${body.style.fontFamily || "Arial, sans-serif"};
              font - size : ${body.style.fontSize || "16px"};
              background - color
                  : ${window.getComputedStyle(body).backgroundColor};
            color:
              ${window.getComputedStyle(body).color};
            filter:
              ${window.getComputedStyle(body).filter};
            }
            a {
              text - decoration
                  : ${underlineLinksCheckbox.checked ? "underline" : "none"};
            }
            `;
            const blob = new Blob([styles], {
              type:
                "text/css"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "accessible-theme.css";
            a.click();
            URL.revokeObjectURL(url);
          });
    });
