const screen = document.querySelector('.screen');

function buttonClick(event) {
    const buttonText = event.target.innerText;

    if (buttonText === 'C') {
        screen.textContent = 'Calculating';
    } else if (buttonText === '=') {
        try {
            let result = eval(screen.textContent.replace('÷', '/').replace('×', '*'));
            result = parseFloat(result.toFixed(3));
            screen.textContent = result.toString();
        } catch (error) {
            screen.textContent = 'Error';
        }
    } else if (buttonText === '%') {
        screen.textContent = parseFloat(screen.textContent) * 0.01;
    } else {
        if (screen.textContent === 'Calculating' || screen.textContent === 'Error') {
            screen.textContent = buttonText;
        } else if (!screen.textContent.includes('.') || buttonText !== '.') {
            if (!Number.isInteger(parseFloat(screen.textContent)) || buttonText !== '.') {
                screen.textContent += buttonText;
            }
        } else {
            screen.textContent = screen.textContent.slice(1) + buttonText;
        }
    }
}

const buttons = document.querySelectorAll('.calc-button');

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
