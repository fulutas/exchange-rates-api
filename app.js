// App

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

eventListeners();


function eventListeners() {

    // when input is written
    amountElement.addEventListener("input", exchangeCurrency);

    // 1. when the currency changes
    firstSelect.onchange = function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };

    // 2. when the currency changes
    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };

};

function exchangeCurrency() {

    currency.changeAmount(amountElement.value);
    currency.exchange()
        .then(result => {
            ui.displayResult(result);
        })
        .catch(err => console.log(err));

}