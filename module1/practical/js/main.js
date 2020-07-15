window.addEventListener('load', function(){
    const redRange = document.querySelector('#redRange');
    const greenRange = document.querySelector('#greenRange');
    const blueRange = document.querySelector('#blueRange');
    const redResult = document.querySelector('#redResult');
    const greenResult = document.querySelector('#greenResult');
    const blueResult = document.querySelector('#blueResult');
    const painting = document.querySelector('.painting');
    
    function greenValue() {
        return Math.round(greenRange.value * 2.55);
    }
    
    function blueValue() {
        return Math.round(blueRange.value * 2.55);
    }
    
    redRange.addEventListener('input', showColor);
    
    greenRange.addEventListener('input', showColor);
    
    blueRange.addEventListener('input', showColor);
    
    function showColor() {
        redResult.value = redRange.value;
        greenResult.value = greenValue();
        blueResult.value = blueValue();
        painting.style.backgroundColor = `rgb(${redResult.valueAsNumber}, ${greenValue()}, ${blueValue()})`;
    }
    
    showColor();

});
