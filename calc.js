export function calc(p, btns, list, line, main, bgbtns) {
    let first = ''
    let second = ''
    let sign = ''
    let result = ''
    let finish = false
    let resultArray = []

    let arrSign = ['/', '*', '-', '+']
    let arrAct = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const clear = () => {
        first = ''
        second = ''
        sign = ''
        result = ''
        finish = false
        p.textContent = 0
    }

    function calcE(e) {
        let key = e.target.textContent
        if (!e.target.classList.contains('btn')) {
            return
        }
        if (key === 'C') {
            clear()
            return
        }
        if (arrAct.includes(key)) {
            if (second === '' && sign === '') {
                first += key
                p.textContent = first
            } else if (first !== '' && second !== '' && finish) {
                second = key
                p.textContent = second
                finish = false
            } else {
                second += key
                p.textContent = second
            }
        }
        if (arrSign.includes(key)) {
            sign = key
            p.textContent = sign
        }
        if (key === '=') {
            if (second === '') second = first
            switch (sign) {
                case '-':
                    result = Number(first) - Number(second)
                    resultArray.push(result)
                    if (result = Number(first) - Number(second)) {
                        first = result
                    }
                    break;

                case '+':
                    result = Number(first) + Number(second)
                    resultArray.push(result)
                    if (result = Number(first) + Number(second)) {
                        first = result
                    }
                    break;

                case '*':
                    result = Number(first) * Number(second)
                    resultArray.push(result)
                    if (result = Number(first) * Number(second)) {
                        first = result
                    }
                    break;

                case '/':
                    if (second === '0') {
                        p.textContent = 'Ошибка'
                        first = ''
                        second = ''
                        sign = ''
                        result = ''
                        return
                    }
                    result = Number(first) / Number(second)
                    resultArray.push(result)
                    if (result = Number(first) / Number(second)) {
                        first = result
                    }
                    break;
                default:
                    console.log('err')
                    return
            }
            finish = true
            p.textContent = result
            const date = new Date()
            const formatted = date.toLocaleTimeString('ru-RU', {timeStyle: 'medium'})
            list.innerHTML += `<li class='item'>
                    <h2 class='int'>${resultArray.slice(-1)}</h2>
                    <p class='time'>${formatted}</p>
                </li>
                <hr>`

        }
        if(key === '+/-' && first !== '') {
            first = -first
            p.textContent = first
        } else if(key === '+/-' && first !== '' && second !== '' && finish) {
            result = -result
            p.textContent = result
        }
        if(key === '%' && first !== '') {
            first = first * 0.01
            p.textContent = first
        } else if(key === '%' && first !== '' && second !== '' && finish) {
            result = result * 0.01
            p.textContent = result
        }
        if(key === '.' && first !== '' && sign === '') {
            first = first + '.'
            p.textContent = first
        } else if(key === '.' && sign !== '' && second !== '') {
            second = second + '.'
            p.textContent = second
        }
    }


    function changeBG(e) {
        let tt = e.target.textContent
        if(!e.target.classList.contains('bgchange')) {
            return
        }
        if(tt === 'M') {
            main.removeAttribute('style')
        }
        if(tt === 'R') {
            let random = '#' + Math.floor(Math.random() * 16777215).toString(16)
            main.style.background = random
        }
    }

    bgbtns.addEventListener('click', changeBG)
    line.addEventListener('click', () => {
        list.classList.toggle('active')
    })
    btns.addEventListener('click', calcE)
}