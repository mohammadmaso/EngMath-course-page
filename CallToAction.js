

class CallToAction extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `
    <section class="px-0 py-12 mx-auto max-w-7xl sm:px-4">
    <div
        class="grid items-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden text-blue-900 bg-blue-100 rounded-none card card-body sm:rounded-lg md:px-10 md:grid-cols-5 lg:gap-0">
        <div class="col-span-1 md:col-span-3">
            <h2 class="mb-3 font-serif text-2xl font-normal leading-tight lg:text-3xl">PDE MathTools
Helps You Understand The Mathematical Concepts That You're Learning</h2>
            <p class="mb-6 text-sm font-light lg:text-base">The visualizations helps you gain a deeper understanding of the topics and see visually how they really works. They are written in Java and JavaFX.
If you are curious how you could write such a fancy visualizations read this article.

The primary idea to develop such an online tool for students has been taken from MIT Mathlets page.</p>
            <button id="modal-1-btn" class="text-white shadow btn btn-white btn-lg  bg-blue-500 hover:bg-blue-600">Demo</ion-icon></button>
            <button id="modal-1-btn" class=" text-blue-900 shadow btn btn-white btn-lg sm:w-auto">Visualizations</ion-icon></button>
        </div>
        <div class="col-span-1 md:col-span-2">
            <img src="assets/Images/mac.png" class="w-full ml-0 select-none lg:ml-48" alt="Mac App"/>
        </div>
    </div>
</section>
    `;
    }
}

customElements.define('call-to-action-component', CallToAction);


