let header = document.querySelector('header'),
toggleMenu = document.querySelector('header .toggle-menu i'),
mobileNav = document.querySelector('header .nav');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})

toggleMenu.addEventListener('click', ()=>{
    if(toggleMenu.classList.contains('bx-menu')){
        mobileNav.style.display='flex';
        toggleMenu.classList.replace('bx-menu', 'bx-x');
    }else if(toggleMenu.classList.contains('bx-x')){
        mobileNav.style.display='none';
        toggleMenu.classList.replace('bx-x', 'bx-menu');
    }
    // mobileNav.style.display='flex';
})