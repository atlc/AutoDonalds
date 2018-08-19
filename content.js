$('document').ready(function() {
    let nextButton = document.getElementById('NextButton');
    let orderLocation = document.getElementById('R000150.1'); // At the restaurant
    let orderType = document.getElementById('R004000.3'); // Carry-out
    let overallSatisfaction = document.getElementById('R001000.5'); // Highly satisfied
    let didYouExperienceAProblem = document.getElementById('R016000.2');
    let commentBox = document.getElementById('S081000'); // Textarea asking for highly satisfied reasoning
    let didYouCustomizeYourSandwichOrWrap = document.getElementById('R000103.2'); // No
    let mainItemOrdered = document.getElementById('R000225.99'); // "Other"
    let breakfastItemOrdered = document.getElementById('R000166'); // "Other", follows `mainItemOrdered`
    let didYouOrderFromDollarMenu = document.getElementById('R000329.2'); // No
    let howWouldYouRateThisMcDonalds = document.getElementById('R000034.5'); // Much better than competitors in area
    let whichDoYouConsiderYourFavorite = document.getElementById('R059000.7'); // McDonalds

    let competitorsVisitedInPastThirtyDays = [
        document.getElementById('R058010'), // Arbys 
        document.getElementById('R000037'), // Dunkin Doughnuts
        document.getElementById('R058130'), // Taco Bell
        document.getElementById('R058120'), // Subway
        document.getElementById('R000039'), // Chik-fil-a
        document.getElementById('R058140'), // Wendys
        document.getElementById('R000038'), // Starbucks       
        document.getElementById('R058060'), // KFC
        document.getElementById('R058020'), // Burger King
        document.getElementById('R058160')  // "Other"       
    ];

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

    let visitDetails = [
        document.getElementById('R060000.1'), // In a party just by yourself
        document.getElementById('R020000.4')
    ];

    if (orderLocation != null) {
        orderLocation.click();
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (orderType != null) {
        orderType.click();
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (overallSatisfaction != null) {
        overallSatisfaction.click();
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
        didYouExperienceAProblem.click();
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

    if (mainItemOrdered != null) {
        mainItemOrdered.click();
        setTimeout(() => {
            nextButton.click();
        }, 1250);
    }

    if (breakfastItemOrdered != null) {
        breakfastItemOrdered.click();
        setTimeout(() => {
            nextButton.click();
        }, 1250);
    }

    if (didYouOrderFromDollarMenu != null) {
        didYouOrderFromDollarMenu.click();
        setTimeout(() => {
            nextButton.click();
        }, 1250);
    }

    if (visitDetails[0] != null) {
        visitDetails.forEach(function(detail) {
            detail.click();
        });
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (howWouldYouRateThisMcDonalds != null) {
        howWouldYouRateThisMcDonalds.click();
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    // Randomly "eat" at between 1 and 5 competitors in past month
    if (competitorsVisitedInPastThirtyDays[0] != null) {
        let numberOfRestaurantsVisited = Math.floor(Math.random() * 5) + 1;
        for (i = 0; i <= numberOfRestaurantsVisited; i++) {
            let rand = (Math.floor(Math.random() * competitorsVisitedInPastThirtyDays.length) + 1);
            competitorsVisitedInPastThirtyDays[rand].click();
            delete competitorsVisitedInPastThirtyDays[rand];
        }
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }

    if (whichDoYouConsiderYourFavorite != null) {
        whichDoYouConsiderYourFavorite.click();
        setTimeout(() => {
            nextButton.click();
        }, 1000);
    }
});