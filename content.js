$('document').ready(function() {
    let nextButton = document.getElementById('NextButton');
    let atTheRestaurant = document.getElementById('R000150.1');
    let orderType = document.getElementById('R004000.3'); // Carry-out
    let overallSatisfaction = document.getElementById('R001000.5'); // Highly satisfied
    let didYouExperienceAProblem = document.getElementById('R016000.2');
    let commentBox = document.getElementById('S081000'); // Textarea asking for highly satisfied reasoning
    let didYouCustomizeYourSandwichOrWrap = document.getElementById('R000103.2'); // No

    let highlySatisfieds = [
        document.getElementById('R013000.9'),
        document.getElementById('R011000.5'),
        document.getElementById('R007000.5'),
        document.getElementById('R008000.5'),
        document.getElementById('R028000.5'),
        document.getElementById('R009000.5')        
    ];

    let highlySatisfiedsPartTwo = [
        document.getElementById('R073000.5'),
        document.getElementById('R006000.5'),
        document.getElementById('R005000.5'),
        document.getElementById('R074000.5'),
        document.getElementById('R015000.5')
    ];

    let likelihoods = [
        document.getElementById('R018000.5'),
        document.getElementById('R019000.5')
    ];

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

    if (highlySatisfieds[0] != null) {
        highlySatisfieds.forEach(function(highlySasisfied) {
            highlySasisfied.click();
        });
        setTimeout(() => {
            nextButton.click();
        }, 1750);
    }

    if (highlySatisfiedsPartTwo[0] != null) {
        highlySatisfiedsPartTwo.forEach(function(highlySasisfied) {
            highlySasisfied.click();
        });
        setTimeout(() => {
            nextButton.click();
        }, 1750);
    }

    if(didYouExperienceAProblem != null) {
        didYouExperienceAProblem.checked = true;
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (likelihoods[0] != null) {
        likelihoods.forEach(function(lh) {
            lh.click();
        });
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (commentBox != null) {
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (didYouCustomizeYourSandwichOrWrap != null) {
        didYouCustomizeYourSandwichOrWrap.click();
        setTimeout(() => {
            nextButton.click();
        }, 1250);
    }
});