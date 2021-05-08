const bars = document.querySelector('#bars')
const menu = document.querySelector('#mobile-menu')
bars.addEventListener('click', myFunc)
window.addEventListener('resize', () => {
    if(window.innerWidth >= 768){
        if(!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    }
})



function myFunc(){
    console.log(window.innerWidth)
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden')
    }
}

function buttonCourseOne() {
    document.getElementById('video-section').innerHTML = 'First course';
}
