# Dungeons and Dragons Search App
This is an application to search monsters and spells from Dungeons and Dragons, specifically the 5th edition. You can select either a spell or monster selection from a dropdown, then add input to search. The application will return the correct result if it exists in the API's records, otherwise it will inform the user that their search did not return any results.

**Link to project:** https://kyaaron.github.io/Dungeons-and-Dragons-Search-App/

## How it's made
The front end is made wth HTML5 and CSS3. To get the result, there is a `getResult()` function that saves the monster/spell selection and the input from the user and uses that data to update the API that is fetched by the Fetch API. The function then splits off based on the monster/spell selection to update the DOM with various information based on what the returned JSON object provides (the returned JSON object returns different data for spells vs monsters). There is also a function called `kabobUserInput()` which ensures the user's input follows the required input for the Dungeons and Dragons API. The `getResult()` is triggered with an event listener on the submit button.

**DnD 5e API link**: https://www.dnd5eapi.co/

## Optmizations
- Add images of monsters to the returned result
- Add more useful data to make app more useful in an actual DnD run
- Add more selections to the dropdown to search for more stuff from DnD

## Lessons learned
I learned how to work with returned JSON objects from an API, and I also learned how to get the value from a `<select>` HTML element. Combining this with updating the Fetch API URL based off user input, this allowed me to search multiple URLs without having to hardcode each URL. I also learned to update multiple elements on the DOM using the ES6 backtick string in JavaScript.
