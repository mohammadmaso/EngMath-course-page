let courses = [
    {
        title: "Introduction",
        length: "36",
        aparat_embed: '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/w0Ir8/vt/frame?&recom=none" title="ریاضیات مهندسی،جلسه سوم تحلیل فوریه،دکتر علی اکبریان،دانشگاه خواجه نصیر" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>',
        description: "This is test description ",
        homework_link: "Homework.com",
    },
    {
        title: "Forirer transform",
        length: "55",
        aparat_embed:'<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/s8ncb/vt/frame?&recom=none" title="ریاضیات مهندسی،جلسه چهارم تحلیل فوریه،دکتر علی اکبریان،دانشگاه خواجه نصیر(HD)" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>',
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
                    
                    <a onclick="handleCourseSelect(${index})" href="#">${item.title}</a>
                </div>
              <div class="flex place-items-center place-self-end text-sm">
                <ion-icon class="mr-1" name="time-outline"></ion-icon>
                <p>${item.length} min</p>
              </div>
            </div> 
    `
}

course_container.innerHTML = `

    `

function handleCourseSelect(index){
    document.title = courses[index].title
    course_container.innerHTML = `
    <a href="#"
        class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
        ${courses[index].title}
    </a>
    
    <div class="flex place-items-center place-self-end text-sm">
                <ion-icon class="mr-1" name="time-outline"></ion-icon>
                <p>${courses[index].length} min</p>
    </div>
    <div class="shadow-md my-3">${courses[index].aparat_embed}</div>
    <button class="btn items-start bg-blue-100">
    <ion-icon name="download-outline"></ion-icon>
    <span>Download homework</span>
    </button>
    `
}





