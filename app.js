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

const updateSelectedButton = (index) => {
    for(let i=0; i < 6; i++) {
        let newClass = "unselected";
        if(index == i) {
            newClass = "selected";
        }
        $('#tip-btn-' + i).attr("class", newClass);
    }
}

const reset = () => {
    currentBill = 0;
    tipAmount = .15;
    numberOfPeople = 1;
    $('#bill-input').val(currentBill);
    $('#people-input').val(numberOfPeople);
    updateSelectedButton(3);
    updateCalculationDisplay();
};

const updateCalculationDisplay = () => {
    let newTip = currentBill * tipAmount / Math.max(1, numberOfPeople);
    let newTotal = (currentBill + (currentBill * tipAmount)) / Math.max(1, numberOfPeople);
    $('#tip-amount').text("$" + newTip.toFixed(2));
    $('#total-amount').text("$" + newTotal.toFixed(2));
}

$(document).ready(() => {
    $(document).on("click", '#tip-btn-1', {"param": .05, "index": 1}, (event) => {
        updateTip(event.data.param);
        updateSelectedButton(event.data.index);
    });
    $(document).on("click", '#tip-btn-2', {"param": .1, "index": 2}, (event) => {
        updateTip(event.data.param);
        updateSelectedButton(event.data.index);
    });
    $(document).on("click", '#tip-btn-3', {"param": .15, "index": 3}, (event) => {
        updateTip(event.data.param);
        updateSelectedButton(event.data.index);
    });
    $(document).on("click", '#tip-btn-4', {"param": .25, "index": 4}, (event) => {
        updateTip(event.data.param);
        updateSelectedButton(event.data.index);
    });
    $(document).on("click", '#tip-btn-5', {"param": .5, "index": 5}, (event) => {
        updateTip(event.data.param);
        updateSelectedButton(event.data.index);
    });
    $(document).on("click", "#reset-btn", reset);
    $(document).on("input", "#bill-input", updateBill);
    $(document).on("input", "#people-input", updateNumberOfPeople);
    reset();
});