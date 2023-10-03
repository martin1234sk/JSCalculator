
    // ADD NUMBERS

    const input = document.getElementById('input')

    function addToInput(clickedElement) {
        input.innerHTML += clickedElement.innerHTML
    }

    // CALCULATE

    let result

    function calculate() {
        result = math.evaluate(input.innerHTML)
        input.innerHTML = result
    }

    // CLEAR INPUT

    function clearInput() {
        input.innerHTML = ''
    }