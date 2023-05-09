let btn = document.querySelector('.e')
let cnt = document.querySelector('.contact')


btn.addEventListener('click', (e) => {
    // if (btn) {
    //     cnt.removeAttribute('style')
    // } else{
    //     cnt.setAttribute('style', "display: none;")
    // }
    if (cnt.getAttribute('style') == 'display: none;') {
        cnt.removeAttribute('style')
    } else {
        cnt.setAttribute('style', 'display: none;')
    }
})