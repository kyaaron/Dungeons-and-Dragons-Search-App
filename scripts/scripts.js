const searchButton = document.querySelector("button");

const getSpell = () => {
    const queryAnswerSection = document.querySelector(".query-answer");
    const queryInput = document.querySelector("input");

    const spell = queryInput.value;

    fetch(`https://www.dnd5eapi.co/api/2014/spells/${kabobUserInput(spell)}`)
        .then(res => res.json())
        .then(data => {
            const spell = data;

            // Getting list of classes for spell
            let classList = "";
            spell.classes.forEach((element, index) => {
                if (index === spell.classes.length - 1) {
                    classList += element.name;
                } else {
                    classList += element.name + ", ";
                }
            });

            queryAnswerSection.innerHTML = `
                <h2>${spell.name}</h2>
                <p class="spell-paragraph">Level: ${spell.level}</p>
                <p class="spell-paragraph">Casting time: ${spell.casting_time}</p>
                <p class="spell-paragraph">Range: ${spell.range}</p>
                <p class="spell-paragraph">Duration: ${spell.duration}</p>
                <p class="spell-paragraph">School: ${spell.school.name}</p>
                <p class="spell-paragraph">Classes: ${classList}</p>
                <p class="spell-paragraph">Discription: ${spell.desc}</p>
            `
        })
        .catch(err => {
            console.log(`Error is: ${err}`);
        })
}

// Helper function to clean up user input
const kabobUserInput = (input) => {
    return input.toLowerCase().split(" ").join("-");
}

searchButton.addEventListener("click", getSpell);