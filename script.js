function clicarBotao(){
    let bota = document.getElementById('bot')
    let men = document.getElementById('menu')
    let ca = document.getElementById('ca')
    let rd = document.getElementById('rd')
    let cr = document.getElementById('cr')
    let nav = document.getElementsByClassName('nav')
    if (men.style.display == 'none'){
        men.style.display = 'flex'
        men.style.width = '250px'
        ca.style.width = '100px'
        rd.style.width = '150px'
        cr.style.width = '200px'
        men.style.transition = 'width 0.5s'
    }else if (men.style.display = 'flex'){
        men.style.display = 'none'
    }
}