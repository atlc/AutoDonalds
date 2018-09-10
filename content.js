$('document').ready(function () {
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
    let mcPickMenu = document.getElementById('R000279.2');
    let validationCodeFrame = document.getElementById('finishIncentiveHolder');

    let $didYouReceiveWhatYouOrdered = $('#R000224.1'); // I think that this breaks the survey code validation

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
        document.getElementById('R013000.9'), // Restroom Cleanliness NA
        document.getElementById('R074000.5'), // Exterior cleanliness
        document.getElementById('R009000.5'), // Friendliness of crew
        document.getElementById('R028000.5'), // Quality of food
        document.getElementById('R005000.5'), // Taste of food
        document.getElementById('R008000.5'), // Speed of service
        document.getElementById('R011000.5'), // Ease of placing order
        document.getElementById('R000285.5'), // French fries
        document.getElementById('R073000.5')  // Interior cleanliness
    ];

    let highlySatisfiedsPartTwo = [
        document.getElementById('R007000.5'),
        document.getElementById('R073000.5'),
        document.getElementById('R000285.5'),
        document.getElementById('R011000.5'),
        document.getElementById('R006000.5'),
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

    if ($didYouReceiveWhatYouOrdered != null) {
        $didYouReceiveWhatYouOrdered.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (orderLocation != null) {
        orderLocation.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (orderType != null) {
        orderType.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (overallSatisfaction != null) {
        overallSatisfaction.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (highlySatisfieds[0] != null) {
        highlySatisfieds.forEach(function (highlySatisfied) {
            try {
                highlySatisfied.click();
            }
            catch (error) {
                console.error(error);
            }
        });
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (highlySatisfiedsPartTwo[0] != null) {
        highlySatisfiedsPartTwo.forEach(function (highlySasisfied) {
            try {
                highlySasisfied.click();
            }
            catch (error) {
                console.error(error);
            }
        });
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (didYouExperienceAProblem != null) {
        didYouExperienceAProblem.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (likelihoods[0] != null) {
        likelihoods.forEach(function (lh) {
            lh.click();
        });
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (commentBox != null) {
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (didYouCustomizeYourSandwichOrWrap != null) {
        didYouCustomizeYourSandwichOrWrap.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (mainItemOrdered != null) {
        mainItemOrdered.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (breakfastItemOrdered != null) {
        breakfastItemOrdered.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (didYouOrderFromDollarMenu != null) {
        didYouOrderFromDollarMenu.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (visitDetails[0] != null) {
        visitDetails.forEach(function (detail) {
            detail.click();
        });
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (howWouldYouRateThisMcDonalds != null) {
        howWouldYouRateThisMcDonalds.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    // Randomly "eat" at between 1 and 5 competitors in past month
    if (competitorsVisitedInPastThirtyDays[0] != null) {
        let numberOfRestaurantsVisited = Math.floor(Math.random() * 5) + 1;
        for (i = 0; i < numberOfRestaurantsVisited; i++) {
            let rand = (Math.floor(Math.random() * competitorsVisitedInPastThirtyDays.length) + 1);
            competitorsVisitedInPastThirtyDays[rand].click();
            delete competitorsVisitedInPastThirtyDays[rand];
        }
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (whichDoYouConsiderYourFavorite != null) {
        whichDoYouConsiderYourFavorite.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (mcPickMenu != null) {
        mcPickMenu.click();
        setTimeout(() => {
            nextButton.click();
        }, 250);
    }

    if (validationCodeFrame != null) {
        let codeText = document.getElementsByClassName('ValCode')[0].innerText.replace('Validation Code: ', '');

        chrome.storage.local.set({'code': codeText}, () => {
            console.log(`Added ${codeText} to codes.`)
        });

        chrome.storage.onChanged.addListener(function(changes) {
            for (code in changes) {
                console.log(code);
            }
        });
    }
});