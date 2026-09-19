const button=document.getElementsByClassName("open-side-nav")[0];
const content=document.getElementsByClassName("small-nav")[0];

button.addEventListener('click', function() {
    content.style.display='flex';
});