var currentBill = 0;
var tipAmount = 0;
var numberOfPeople = 0;

const updateBill = () => {
    currentBill = Number($('#bill-input').val());
    updateCalculationDisplay();
}

const updateNumberOfPeople = () => {
    numberOfPeople = Number($('#people-input').val());
    updateCalculationDisplay();
}

const updateTip = (newTipAmount) => {
    tipAmount = newTipAmount;
    updateCalculationDisplay();
}

const reset = () => {
    $('#bill-input').val(0);
    $('#people-input').val(0);
    currentBill = 0;
    tipAmount = 0;
    numberOfPeople = 1;
    console.log(tipAmount);
    updateCalculationDisplay();
};

const updateCalculationDisplay = () => {
    let newTip = currentBill * tipAmount / Math.max(1, numberOfPeople);
    let newTotal = (currentBill + (currentBill * tipAmount)) / Math.max(1, numberOfPeople);
    $('#tip-amount').text("$" + newTip.toFixed(2));
    $('#total-amount').text("$" + newTotal.toFixed(2));
}

$(document).ready(() => {
    console.log("ready");
    $(document).on("click", '#tip-btn-1', {"param": .05}, (event) => {updateTip(event.data.param)});
    $(document).on("click", '#tip-btn-2', {"param": .1}, (event) => {updateTip(event.data.param)});
    $(document).on("click", '#tip-btn-3', {"param": .15}, (event) => {updateTip(event.data.param)});
    $(document).on("click", '#tip-btn-4', {"param": .25}, (event) => {updateTip(event.data.param)});
    $(document).on("click", '#tip-btn-5', {"param": .5}, (event) => {updateTip(event.data.param)});
    $(document).on("click", "#reset-btn", reset);
    $(document).on("input", "#bill-input", updateBill);
    $(document).on("input", "#people-input", updateNumberOfPeople);
})