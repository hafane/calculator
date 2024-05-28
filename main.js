import { calc } from './calc'
import './style.css'


document.querySelector('#app').innerHTML = `
<div class='container'>
  <div class='calculator'>
    <div class='result__list'>
      <ul class='list'></ul>
      <div class='historyLine'></div>
    </div>
    <div class='resCon'>
        <p class="result">0</p>
    </div>
    <div class="btnCon">
        <button class="btn clear blue">C</button>
        <button class="btn blue">+/-</button>
        <button class="btn blue">/</button>
        <button class="btn blue">*</button>

        <button class="btn black">7</button>
        <button class="btn black">8</button>
        <button class="btn black">9</button>
        <button class="btn blue">-</button>

        <button class="btn black">4</button>
        <button class="btn black">5</button>
        <button class="btn black">6</button>
        <button class="btn blue">+</button>

        <button class="btn black">1</button>
        <button class="btn black">2</button>
        <button class="btn black">3</button>
        <button class="btn fullblue">=</button>

        <button class="btn black">%</button>
        <button class="btn black">0</button>
        <button class="btn black">.</button>
    </div>
  </div>
</div>
`

calc(document.querySelector('.result'), 
document.querySelector('.btnCon'), 
document.querySelector('.list'), 
document.querySelector('.result__list'), 
document.querySelector('.historyLine'))
