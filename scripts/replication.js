const options = document.querySelectorAll('.selectable-option');
const selectedOptions = document.querySelector('.finalized-list')
const clickedOptions = document.querySelector('.clicked-options');


// Something below has to be the reason that I am not able to get the Finalized list in the HTML to show the font family and weight properly. Will follow up on. 
options.forEach(option => option.addEventListener('click', (event) => {
    let selectedOption = document.createElement('li');
    selectedOption.classList.add('selectable-option');
    let optionContent = document.createTextNode(option.textContent);
    selectedOption.appendChild(optionContent);
    clickedOptions.insertBefore(selectedOption, selectedOptions);
    option.remove();
}));

// Coudn't quite figure out how to get the code to move the options back to the intial list, in the event that somebody makes a mistake. 

// const optionsTwo = document.querySelectorAll('.selectable-option-two');
// const selectedOptionsTwo = document.querySelector('.beginning-list')
// const clickedOptionsTwo = document.querySelector('.beginning-options');

// optionsTwo.forEach(optionTwo => optionTwo.addEventListener('click', (event) => {
//     let selectedOptionTwo = document.createElement('li');
//     selectedOptionTwo.classList.add('selectable-option-two');
//     let optionContentTwo = document.createTextNode(optionTwo.textContent);
//     selectedOptionTwo.appendChild(optionContentTwo);
//     clickedOptionsTwo.insertBefore(selectedOptionTwo, selectedOptionsTwo);
//     optionTwo.remove();
// }));