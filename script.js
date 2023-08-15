let bota = document.getElementById('bot')
let men = document.getElementById('menu')
let ca = document.getElementById('ca')
let rd = document.getElementById('rd')
let cr = document.getElementById('cr')
function clicarBotao(){
    if (men.style.display == 'none'){
        men.style.display = 'flex'
        men.style.transform = 'translateY(10px)'
        
        bota.style.rotate = '90deg'
        bota.style.marginLeft = '0px'
        bota.style.marginBottom = '0px'
        bota.style.transition = '0.5s'
    }else if (men.style.display = 'flex'){
        men.style.display = 'none'
        
        bota.style.rotate = '0deg'
        bota.style.marginLeft = '0px'
        bota.style.marginBottom = '0px'
        bota.style.transition = '0.5s'
    }
}
