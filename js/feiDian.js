if (localStorage.getItem('theme') == 'dark') {
    //dark
    let docElm = document.querySelector('html')
    let imgElms = document.querySelectorAll('img')
    docElm.style.filter = 'invert(90%)';
    imgElms.forEach((imgElm) => imgElm.style.filter = 'invert(100%)')
} else {
    //light
    let docElm = document.querySelector('html')
    let imgElms = document.querySelectorAll('img')
    docElm.style.filter = 'none';
    imgElms.forEach((imgElm) => imgElm.style.filter = 'none')
}