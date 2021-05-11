const homeNav = document.getElementById('home-nav')
const coursesNav = document.getElementById('courses-nav')
const visualizationNav = document.getElementById('visualization-nav')

var pathName = window.location.pathname
pathName = pathName.replace("/", "")
pathName = pathName.replace("/", "")
if (pathName == 'Courses') {
    coursesNav.classList.add("bg-gray-900", "text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium")
    homeNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    visualizationNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
}
if (pathName == 'Visualization') {
    visualizationNav.classList.add("bg-gray-900", "text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium")
    homeNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    coursesNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
}
if (pathName == "") {
    homeNav.classList.add("bg-gray-900", "text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium")
    visualizationNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
    coursesNav.classList.add("text-gray-300", "hover:bg-gray-700", "hover:text-white", "px-3", "py-2", "rounded-md", "text-sm", "font-medium",)
}
console.log(pathName);