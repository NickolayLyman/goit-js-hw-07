const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = '70px';
rangeRef.addEventListener('input', () => (
    textRef.style.fontSize = rangeRef.value + 'px')
);