const homeNav = document.getElementById('home-nav')
const coursesNav = document.getElementById('courses-nav')
const visualizationNav = document.getElementById('visualization-nav')
//for movile view
const homeNavMob = document.getElementById('home-nav-mob')
const coursesNavMob = document.getElementById('courses-nav-mob')
const visualizationNavMob = document.getElementById('visualization-nav-mob')
var pathName = window.location.pathname
pathName = pathName.replace("/", "")
pathName = pathName.replace("/", "")
if (pathName == "") {
    homeNav.classList.add("bg-gray-900", "text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium")
    visualizationNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    coursesNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    //for mobile view
    homeNavMob.classList.add("bg-gray-900", "text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
    coursesNavMob.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
    visualizationNavMob.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
}
if (pathName == 'Courses') {
    coursesNav.classList.add("bg-gray-900", "text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium")
    homeNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    visualizationNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    //for mobile view
    coursesNavMob.classList.add("bg-gray-900", "text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
    homeNavMob.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
    visualizationNavMob.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
}
if (pathName == 'Visualization') {
    visualizationNav.classList.add("bg-gray-900", "text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium")
    homeNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    coursesNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    //for mobile view
    visualizationNavMob.classList.add("bg-gray-900", "text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
    coursesNavMob.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
    homeNavMob.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "px-3", "py-2", "rounded-md", "text-base", "font-medium")
}