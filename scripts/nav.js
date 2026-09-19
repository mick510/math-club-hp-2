//toggle display of side-nav between none and flex
const openSideNav=document.getElementsByClassName('open-side-nav')[0];
const smallNav=document.getElementsByClassName('small-nav')[0];

openSideNav.addEventListener('click', function(event) {
    event.stopPropagation();
    smallNav.style.display = 'flex';
});

document.addEventListener('click', function(event) {
    if (!smallNav.contains(event.target)) {
        smallNav.style.display = 'none';
    }
});

//toggle display of menu options under resources
const menuOptionsToggle=document.getElementsByClassName('button-menu-options')[0];
const menuOptions=document.getElementsByClassName('side-nav-menu-options')[0];

menuOptionsToggle.addEventListener('click', function() {
    if (menuOptions.style.display=='none') {
        menuOptions.style.display='flex';
    } else {
        menuOptions.style.display='none'
    }
});