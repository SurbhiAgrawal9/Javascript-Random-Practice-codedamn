function toggleOverflowWrap(){
    const textElement = document.getElementById('t1')
    if (window.getComputedStyle(textElement).overflowWrap === 'break-word') { //window.getComputedStyle  is written only for testcase purpose 
        textElement.style.overflowWrap = 'normal'
        } else {
            textElement.style.overflowWrap = 'break-word'
        }

}
