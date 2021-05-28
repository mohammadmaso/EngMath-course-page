class Spinner extends HTMLElement {
    constructor() {
        super();
    }



    connectedCallback() {
        this.innerHTML = `
      <style>
        .whirlpool {
    width: 100px;
    height: 100px;
    margin: 43vh auto;
    position: relative;
    max-height: 100vh;
}

.ring23:before
{
    content: '';
    border-radius: 50%;
    border: 1px solid #555;
    height: 30px;
    width: 100px;
    position: absolute;
}

.ring1:before
{
    left: 40px;
    width: 20px;
    top: 12px;
    height: 6px;
    animation: 2.5s ease 0s infinite spinner;
}

.ring2:before
{
    left: 35px;
    width: 30px;
    top: 10.5px;
    height: 9px;
    animation: 2.5s ease 0.1s infinite spinner;
}

.ring3:before
{
    left: 30px;
    width: 40px;
    top: 9px;
    height: 12px;
    animation: 2.5s ease 0.2s infinite spinner;
}

.ring4:before
{
    left: 25px;
    width: 50px;
    top: 7.5px;
    height: 15px;
    animation: 2.5s ease 0.3s infinite spinner;
}

.ring5:before
{
    left: 20px;
    width: 60px;
    top: 6px;
    height: 18px;
    animation: 2.5s ease 0.4s infinite spinner;
}

.ring6:before
{
    left: 15px;
    width: 70px;
    top: 4.5px;
    height: 21px;
    animation: 2.5s ease 0.5s infinite spinner;
}

.ring7:before
{
    left: 10px;
    width: 80px;
    top: 3px;
    height: 24px;
    animation: 2.5s ease 0.6s infinite spinner;
}

.ring8:before
{
    left: 5px;
    width: 90px;
    top: 1.5px;
    height: 27px;
    animation: 2.5s ease 0.7s infinite spinner;
}

.ring9:before
{
    width: 100px;
    height: 30px;
    animation: 2.5s ease 0.8s infinite spinner;
}



@keyframes spinner {
    0% {
        transform: translateY(10px);
        animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
    }
    50% {
        transform: translateY(60px);
        animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
    }
    100% {
        transform: translateY(10px);
        animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
    }
}
      </style>
      <div class="whirlpool" id="whirlpool">
              <div class="ring23 ring1"></div>
              <div class="ring23 ring2"></div>
              <div class="ring23 ring3"></div>
              <div class="ring23 ring4"></div>
              <div class="ring23 ring5"></div>
              <div class="ring23 ring6"></div>
              <div class="ring23 ring7"></div>
              <div class="ring23 ring8"></div>
              <div class="ring23 ring9"></div>
      </div>
    `;
    }
}

customElements.define('spinner-component', Spinner);

const wait = (delay = 2000) =>
    new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) =>
    (typeof elementOrSelector === 'string'
            ? document.querySelector(elementOrSelector)
            : elementOrSelector
    ).style.display = visible ? 'block' : 'none';

setVisible('.page', false);
setVisible('#whirlpool', true);

document.addEventListener('DOMContentLoaded', () =>
    wait(   2000).then(() => {
        setVisible('.page', true);
        setVisible('#whirlpool', false);
    }));