const formElement = document.getElementById('word-counter-form');
const fieldElement = formElement.querySelector('.form-control');

const resultElement = document.getElementById('word-counter-result');
const wordsQuantityElement = resultElement.querySelector('span.quantity');

formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const fieldValue = fieldElement.value.trim().replace(/\r|\n/g, ' ');

    const wordsQuantity = fieldValue.split(' ').filter(i => {
        return i !== ''
    }).length;

    const formIsValid = fieldValue === '' || wordsQuantity === 0;

    if (formIsValid) {
        fieldElement.parentElement.classList.add('has-error');
    }
    else {
        fieldElement.parentElement.classList.remove('has-error');
        formElement.classList.add('hidden');
        resultElement.classList.remove('hidden');

        wordsQuantityElement.innerHTML = wordsQuantity;
    }
});

const resetButtonElement = document.getElementById('word-counter-restart');
resetButtonElement.addEventListener('click', function () {
    wordsQuantityElement.innerHTML = '';
    fieldElement.value = '';

    formElement.classList.remove('hidden');
    resultElement.classList.add('hidden');
});

