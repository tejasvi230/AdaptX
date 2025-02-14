const features = {
  autism: "Autism-related accessibility feature details...",
  dyslexia: "Dyslexia-friendly settings and tools...",
  color_blindness: "Enhancements for color-blind users...",
  mobility: "Features for improved mobility access...",
};

function loadFeature(featureKey) {
  document.getElementById(
    "feature-content"
  ).innerHTML = `<p>${features[featureKey]}</p>`;
}
