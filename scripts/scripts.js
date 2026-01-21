const searchButton = document.querySelector("button");


const getResult = () => {
    const queryAnswerSection = document.querySelector(".query-answer");
    const queryInput = document.querySelector("input").value;
    const queryTypeValue = document.querySelector("select").value;
    
    fetch(`https://www.dnd5eapi.co/api/2014/${queryTypeValue}/${kabobUserInput(queryInput)}`)
        .then(res => {
            if (!res.ok) {
                queryAnswerSection.innerHTML = `
                    <h2>${queryInput} not found</h2>
                    <p>We could not find what you were looking for. Consider checking your spelling or try another search.</p>
                `
            }
            return res.json()
        })
        .then(data => {

            // SPELL RESOURCE
            if (queryTypeValue === "spells") {
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
            }

            // MONSTER RESOURCE
            if (queryTypeValue === "monsters") {
                const monster = data;

                queryAnswerSection.innerHTML = `
                    <h2>${monster.name}</h2>
                    <p class="monster-paragraph">Type: ${monster.type}</p>
                    <p class="monster-paragraph">Size: ${monster.size}</p>
                    <p class="monster-paragraph">HP: ${monster.hit_points}</p>
                    <p class="monster-paragraph">Armor Class: ${monster.armor_class[0].value}</p>
                    <p class="monster-paragraph">Strength: ${monster.strength}</p>
                    <p class="monster-paragraph">Dexterity: ${monster.dexterity}</p>
                    <p class="monster-paragraph">Constitution: ${monster.constitution}</p>
                    <p class="monster-paragraph">Intelligence: ${monster.intelligence}</p>
                    <p class="monster-paragraph">Wisdom: ${monster.wisdom}</p>
                    <p class="monster-paragraph">Charisma: ${monster.charisma}</p>
                `
            }
        })

        .catch(err => {
            console.log(`Error is: ${err}`);
        })
}

// Helper function to clean up user input
const kabobUserInput = (input) => {
    return input.toLowerCase().split(" ").join("-");
}

searchButton.addEventListener("click", () => {
    getResult();
});