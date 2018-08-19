$('document').ready(function() {
    let nextButton = document.getElementById('NextButton');
    let atTheRestaurant = document.getElementById('R000150.1');
    let orderType = document.getElementById('R004000.3'); // Carry-out
    let overallSatisfaction = document.getElementById('R001000.5'); // Highly satisfied

    if (atTheRestaurant != null) {
        atTheRestaurant.checked = true;
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (orderType != null) {
        orderType.checked = true;
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (overallSatisfaction != null) {
        overallSatisfaction.checked = true;
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }
});