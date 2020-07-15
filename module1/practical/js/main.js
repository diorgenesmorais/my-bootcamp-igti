window.addEventListener('load', function(){
    const redRange = document.querySelector('#redRange');
    const greenRange = document.querySelector('#greenRange');
    const blueRange = document.querySelector('#blueRange');
    const redResult = document.querySelector('#redResult');
    const greenResult = document.querySelector('#greenResult');
    const blueResult = document.querySelector('#blueResult');
    const painting = document.querySelector('.painting');

    redRange.addEventListener('input', showColor);
    
    greenRange.addEventListener('input', showColor);
    
    blueRange.addEventListener('input', showColor);
    
    function showColor() {
        redResult.value = redRange.value;
        greenResult.value = greenRange.value
        blueResult.value = blueRange.value
        painting.style.backgroundColor = `rgb(${redResult.valueAsNumber}, ${greenRange.valueAsNumber}, ${blueRange.valueAsNumber})`;
    }
    
    showColor();

});
