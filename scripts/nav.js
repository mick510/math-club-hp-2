//toggle display of side-nav between none and flex
const openSideNav=document.getElementsByClassName('open-side-nav')[0];
const smallNav=document.getElementsByClassName('small-nav')[0];

let checkOpenSideNav;

openSideNav.addEventListener('click', function() {
    checkOpenSideNav=smallNav.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    if (
        checkOpenSideNav && 
        !smallNav.contains(event.target) &&
        !openSideNav.contains(event.target)
    ) {
        checkOpenSideNav=smallNav.classList.toggle('open');
    }
});

//toggle display of menu options under resources
const menuOptionsToggle=document.getElementsByClassName('button-menu-options')[0];
const menuOptions=document.getElementsByClassName('side-nav-menu-options')[0];
const triangle=document.getElementsByClassName('triangle')[0];

let checkOpenMenuOptions;

menuOptionsToggle.addEventListener('click', function() {
    checkOpenMenuOptions=menuOptions.classList.toggle('open');
    if (checkOpenMenuOptions) {
        triangle.style.transform = 'rotate(90deg)';
    } else {
        triangle.style.transform = 'rotate(0deg)';
    }
});

//toggle everything off when we get big header due to window size
window.addEventListener('resize', function() {
    if (window.innerWidth > 650&&checkOpenSideNav) {
        checkOpenSideNav=smallNav.classList.toggle('open');
    }

    if (checkOpenMenuOptions) {
        checkOpenMenuOptions=menuOptions.classList.toggle('open');
        triangle.style.transform = 'rotate(0deg)';
    }
});