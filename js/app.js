const computerIcon = document.querySelector("body > div:nth-child(1)")
const computerPng = document.querySelector("body > div:nth-child(1) > img")

 let divX = 0;
 let divY = 0;

computerIcon.style.left = `${divX}px`
computerIcon.style.top = `${divY}px`




computerIcon.addEventListener('mousedown', () => {
    // computerPng.style.background = "blue";
})
computerIcon.addEventListener('mousemove', (e) => {
    console.log('ruch');
    divX = e.clientX;
    divY = e.clientY;
    computerIcon.style.left = `${divX - 50}px`
    computerIcon.style.right = `${divY - 50}px`

})
computerIcon.addEventListener('mouseup', () => {
    console.log('puscilem');
})