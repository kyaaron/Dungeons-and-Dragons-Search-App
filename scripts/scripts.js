const searchButton = document.querySelector("button");

const getSpell = () => {
    const queryAnswerSection = document.querySelector(".query-answer");
    const queryInput = document.querySelector("input");

    const spell = queryInput.value;

    fetch(`https://www.dnd5eapi.co/api/2014/spells/${spell}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(`Error is: ${err}`);
        })
}

searchButton.addEventListener("click", getSpell);