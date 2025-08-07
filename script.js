const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const redSpanValue = document.getElementById('red-value');
const greenSpanValue = document.getElementById('green-value');
const blueSpanValue = document.getElementById('blue-value');

const colorBox = document.getElementById('color-box');
const copyBtn = document.getElementById('copyButton');
const inputType = document.getElementById('inputType');

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);
copyBtn.addEventListener('click', copyRGBValue);

function updateColor() {
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = rgbColor;

    redSpanValue.textContent = redValue;
    greenSpanValue.textContent = greenValue;
    blueSpanValue.textContent = blueValue;

    inputType.textContent = rgbColor;
}

updateColor();

function copyRGBValue() {
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    navigator.clipboard.writeText(rgbColor)
        .then(() => {
            alert("RGB color value copied to clipboard : " + rgbColor);
        })
        .catch((error) => {
            console.error("Failed to copy RGB value : ", error);
        });
}