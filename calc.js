export function calc(p, btns, list, history, line) {
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
            list.innerHTML += resultArray.slice(-1)

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


    function toggleHistory() {
        // history.classList.add('move')
    }

    // function changeBG() {

    // }


    line.addEventListener('click', toggleHistory)
    btns.addEventListener('click', calcE)
}