class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <header class="z-30 w-full px-4 py-4 bg-white sm:px-4 shadow-lg">
  <div class="flex items-center justify-between mx-auto max-w-7xl">
  <a href="/">
          <img class="w-72"  src="Engineering Mathematics Open Course.png"/>
          </a>

    <div class="relative hidden space-x-1 md:inline-flex" x-data="{ one: false, two: false }">
      <div class="relative">
        <button class="flex items-center rounded-full btn btn-sm btn-white" @click="one = true">
<ion-icon name="flask-outline" class="mr-1"></ion-icon>
          Visualizations
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="flex-none w-4 h-4 ml-1 -mr-1 transition duration-200 ease-out transform"
            :class="{ 'rotate-180': one }"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div
          class="absolute top-0 z-50 w-screen max-w-xs p-2 mx-0 my-12 text-sm text-gray-800 transform bg-white rounded shadow lg:left-1/2 lg:-translate-x-1/2"
          x-show.transition.in.opacity.out.opacity="one"
          @click.away="one = false"
          x-cloak
        >
          <div class="flex flex-col space-y-1 font-medium text-gray-800">
            <a href="#" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-blue-400"> Fourier Transform </a>
            <a href="#" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-blue-400">Fourier Transform <ion-icon name="logo-nodejs"></ion-icon></a>
            <a href="#" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-blue-400"> Rectangular Membrane </a>
            <a href="#" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-blue-400"> Circular Membrane </a>
            <a href="#" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-blue-400">Fourier Heatmap</a>
            <a href="#" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-blue-400"> Mobius & Conformal Mapping</a>
            <a href="#" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-blue-400"> Vibrating String</a>
            <a href="#" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-blue-400">Vibrating String <ion-icon name="logo-nodejs"></ion-icon></a>
            <a href="#" class="flex items-center justify-center p-3 transition bg-gray-200 rounded text-blue-600 hover:bg-gray-300">
              View all visualizations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="w-4 h-4 ml-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
       
      </div>
      <div class="relative">
        <a href="course.html" class="flex items-center rounded-full btn btn-sm btn-white">
        <ion-icon name="book-outline" class="mr-1"></ion-icon>
             Courses
        </a>
        
      </div>
      
      <div class="relative">
        <button class="flex items-center rounded-full btn btn-sm btn-white" @click="two = true">
        <a href="#about">
             About Us</a>
        </button>
        
      </div>
     
      <div class="relative">
        <button class="flex items-center rounded-full btn btn-sm text-blue-100 bg-blue-500 hover:bg-blue-300" @click="two = true">
        <ion-icon name="help-buoy" class="mr-1"></ion-icon>
        <a href="#help">
             help </a>
        </button>
        
      </div>
    </div>
      <div class="inline-flex md:hidden" x-data="{ open: false }">
        <button class="flex-none px-2 btn btn-white btn-sm" @click="open = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="w-5 h-5"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span class="sr-only">Open Menu</span>
        </button>
        <div class="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 m-2 space-y-1 bg-white rounded shadow" x-show.transition="open" @click.away="open = false" x-cloak>
          <button class="self-end flex-none px-2 btn btn-link btn-icon" @click="open = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span class="sr-only">Close Menu</span>
          </button>
          <div class="grid grid-cols-2 gap-1">
            <a href="visualization.html" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-primary"><ion-icon name="flask-outline" class="mr-1"></ion-icon>Visualizations</a>
            <a href="course.html" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-primary"><ion-icon name="book-outline" class="mr-1"></ion-icon>Courses</a>
            <a href="#about" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-primary">About Us</a>
            <a href="#help" class="px-3 py-2 transition rounded hover:bg-gray-200 hover:text-primary">Help</a>
          </div>
        </div>
   
  </div>
</header>

    `;
  }
}

customElements.define('header-component', Header);
