let courses = [
    {
        title: "Introduction",
        length: "36",
        aparat_embed: '<div id="4447514988"><script type="text/JavaScript" src="https://www.aparat.com/embed/w0Ir8?data[rnddiv]=4447514988&data[responsive]=yes&data[title]=%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C%D8%A7%D8%AA%20%D9%85%D9%87%D9%86%D8%AF%D8%B3%DB%8C%D8%8C%D8%AC%D9%84%D8%B3%D9%87%20%D8%B3%D9%88%D9%85%20%D8%AA%D8%AD%D9%84%DB%8C%D9%84%20%D9%81%D9%88%D8%B1%DB%8C%D9%87%D8%8C%D8%AF%DA%A9%D8%AA%D8%B1%20%D8%B9%D9%84%DB%8C%20%D8%A7%DA%A9%D8%A8%D8%B1%DB%8C%D8%A7%D9%86%D8%8C%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%AE%D9%88%D8%A7%D8%AC%D9%87%20%D9%86%D8%B5%DB%8C%D8%B1"></script></div>',
        description: "This is test description ",
        homework_link: "Homework.com",
    },
    {
        title: "Forirer transform",
        length: "55",
        aparat_embed: '<div id="4447514988"><script type="text/JavaScript" src="https://www.aparat.com/embed/w0Ir8?data[rnddiv]=4447514988&data[responsive]=yes&data[title]=%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C%D8%A7%D8%AA%20%D9%85%D9%87%D9%86%D8%AF%D8%B3%DB%8C%D8%8C%D8%AC%D9%84%D8%B3%D9%87%20%D8%B3%D9%88%D9%85%20%D8%AA%D8%AD%D9%84%DB%8C%D9%84%20%D9%81%D9%88%D8%B1%DB%8C%D9%87%D8%8C%D8%AF%DA%A9%D8%AA%D8%B1%20%D8%B9%D9%84%DB%8C%20%D8%A7%DA%A9%D8%A8%D8%B1%DB%8C%D8%A7%D9%86%D8%8C%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%AE%D9%88%D8%A7%D8%AC%D9%87%20%D9%86%D8%B5%DB%8C%D8%B1"></script></div>',
        description: "This is test description ",
        homework_link: "Homework.com",
    },
]

var menu_container = document.getElementById("menu_container")

courses.forEach(create_list)

function create_list(item, index){
    menu_container.innerHTML += `
            <div class="grid justify-items-stretch grid-cols-2 px-4 py-2 mt-2  text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"> 
                <div class="flex place-items-center font-semibold">
                    <ion-icon class="mr-1" name="videocam-outline"></ion-icon>
                    <a onclick="handleCourseSelect(${index})" href="#">${item.title}</a>
                </div>
              <div class="flex place-items-center place-self-end text-sm">
                <ion-icon class="mr-1" name="time-outline"></ion-icon>
                <p>${item.length} min</p>
              </div>
            </div> 
    `
}

function handleCourseSelect(index){
    course_container.innerHTML = `
    <a href="#"
        class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
        ${courses[index].title}
    </a>
    `


}





