const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');
const cssCode = document.getElementById('cssCode');
const copyBtn = document.getElementById('copyBtn');

function updateGradient() {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  document.body.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
}

color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);
direction.addEventListener('change', updateGradient);

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(cssCode.textContent)
    .then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy CSS', 1500);
    });
});

updateGradient();
