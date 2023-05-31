let feedsHead = document.querySelector('.right-bar .right-container .head');

window.addEventListener('scroll', ()=>{
    feedsHead.classList.toggle('sticky', window.scrollY > 0)
})