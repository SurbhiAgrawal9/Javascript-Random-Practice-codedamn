function toggleOverflowWrap(){
    const textElement = document.getElementById('t1')
    if (window.getComputedStyle(textElement).overflowWrap === 'break-word') {
        textElement.style.overflowWrap = 'normal'
        } else {
            textElement.style.overflowWrap = 'break-word'
        }

}
