var pointer = document.getElementById('pointer');

pointer.style.position = 'relative';


window.addEventListener('mousemove', (e) => {
    console.log(e);
    pointer.style.left = (e.clientX) + "px";
    pointer.style.top = (e.clientY) + "px";
});