const bars = document.getElementById('#bars')
const menu = document.getElementById('#mobile-menu')

function myFunc(){
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden')
    }
}