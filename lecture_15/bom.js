let counter = 0;
let intervalId = null;


function showSize() {
    document.getElementById('sizeInfo').innerHTML=`
    <strong>Window Size : </strong><br>

    ${window.innerWidth}
    ${window.innerHeight}
    ${window.outerHeight}
    ${window.scrollX}
    ${window.location.href}    
    window.location.reload, window.open()
    `
}