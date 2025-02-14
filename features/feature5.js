// // Get references to the input elements and the text element
// const textElement = document.getElementById("text");
// const fontSizeInput = document.getElementById("fontSize");
// const fontColorInput = document.getElementById("fontColor");
// const fontStyleInput = document.getElementById("fontStyle");

// // Add event listeners to update the text style dynamically
// fontSizeInput.addEventListener(
//     "input",
//     () = > { textElement.style.fontSize = `${fontSizeInput.value} px`; });

// fontColorInput.addEventListener(
//     "input", () = > { textElement.style.color = fontColorInput.value; });

// fontStyleInput.addEventListener(
//     "change", () = > { textElement.style.fontFamily = fontStyleInput.value;
//     });
// fontSizeInput.addEventListener(
//     "input", () = > {
//       console.log("Font size changed to:", fontSizeInput.value);
//       textElement.style.fontSize = `${fontSizeInput.value} px`;
//     });
function setTheme(theme) {
  document.body.className = '';
  if (theme == = 'high-contrast') {
    document.body.classList.add('high-contrast');
  } else if (theme == = 'grayscale') {
    document.body.classList.add('grayscale');
  } else if (theme == = 'underline-links') {
    document.body.classList.add('underline-links');
  }
}

function changeFont() {
  const selectedFont = document.getElementById('fontSelect').value;
  document.body.style.fontFamily = selectedFont;
}

function changeFontSize() {
  const fontSize = document.getElementById('fontSize').value + 'px';
  // document.body.style.fontSize = fontSize;
  document.documentElement.style.fontSize = fontSize;
}

function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
}

function toggleGrayscale() { document.body.classList.toggle('grayscale'); }

function toggleUnderlineLinks() {
  document.body.classList.toggle('underline-links');
}

function downloadCSS() {
  const cssContent = `body {
    font - family : ${document.body.style.fontFamily};
    font - size : ${document.body.style.fontSize};
  }
  `;
  const blob = new Blob([cssContent], {
    type:
      'text/css'
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'custom-theme.css';
  link.click();
}