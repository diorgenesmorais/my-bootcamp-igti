window.addEventListener('load', function(){
    const redRange = document.querySelector('#redRange');
    const greenRange = document.querySelector('#greenRange');
    const blueRange = document.querySelector('#blueRange');
    const redResult = document.querySelector('#redResult');
    const greenResult = document.querySelector('#greenResult');
    const blueResult = document.querySelector('#blueResult');
    const painting = document.querySelector('.painting');

    redRange.addEventListener('input', function() {
        redResult.value = this.value;
        showColor();
    });
    
    greenRange.addEventListener('input', function() {
        greenResult.value = this.value;
        showColor();
    });
    
    blueRange.addEventListener('input', function() {
        blueResult.value = this.value;
        showColor();
    });

    function showColor() {
        painting.style.backgroundColor = `rgb(${redResult.valueAsNumber}, ${greenRange.valueAsNumber}, ${blueRange.valueAsNumber})`;
    }
    
    showColor();

});
