

      /*
Approach: 
      *Finding text and email fields by their associated label text, instead of relying on fixed IDs or positions. It looks for a <label> containing the right text and then finds the linked input.
        
      *  Finding the "Male" radio button by its value being "male" or if the text next to it includes "Male", rather than its specific position in the radio button list.

code explanation
     We are using addEventListener it takes a event and callback function and whole code wrap up inside the try catch block to handle the error.

      1. we create a function declaration  using function name:getInputByLabel which takes "labelText" as parameter
          a.define a variable "labels" that stores a Array of label tags inside info.
          b.Using "for of" loop to iterate through each "label" one by one , 
              i. Take the text inside the current `label`, remove extra spaces from the beginning and end, and convert it to lowercase.
              ii. Check if this lowercase label text contains the lowercase version of the `labelText` you provided.
              iii. If it does, it means this is the label we're interested in. Now try to find the associated input field:
              iv define a id variable it stores reference of attribute "for".
                - Check if the `label` has a `for` attribute. 
                - If it does, get the value of the `for` attribute. This value is the `id` of the input field. Find the HTML element with that `id` and return  it.
                
                -Look for the first `input`, `textarea`, or `select` element that is either directly inside the `label` or is the very next HTML element after the `label`.
                -Return this found input element.
      
      2. Test the "First Name" field:
           a. Use the `getInputByLabel` function to try and find the input field with the label "First Name". If it's not found, try again with the label   "Name".
           b. Store the found input field in a variable called `firstNameInput`.
           c. Check if `firstNameInput` is actually found (not `null`).
           d. If it's not found, stop the test and show an error message: "First Name field not found".
           e. If it is found, set the value of this input field to "Shivam".
           f. Print "First Name filled successfully" to the console.
     
     3. Test the "Email" field:**
           a. Use the `getInputByLabel` function to find the input field with the label "Email".
           b. Store the found input field in a variable called `emailInput`.
           c. Check if `emailInput` is found.
           d. If not found, stop the test and show an error message: "Email field not found".
           e. If found, set the value of this input field to "shivam@example.com".
           f. Print "Email filled successfully" to the console.
      
     4.est the "Gender" (Male radio button):**
           a. Find all HTML elements that are radio buttons (`<input type="radio">`).
           b. Go through each radio button:
              i. Convert the `value` of the current radio button to lowercase and check if it is equal to "male".
              ii. OR, check if the next HTML element after the radio button exists, and if its text content includes the word "Male".
              iii. If either of these conditions is true, this is the "Male" radio button. Store it in a variable called `maleRadio` and stop looking.
           c. Check if `maleRadio` was found.
           d. If not found, stop the test and show an error message: "Gender (Male) radio button not found".
           e. If found, set the `checked` property of this radio button to `true` (select it).
           f. Print "Gender (Male) selected successfully" to the console.      
*/

window.addEventListener('DOMContentLoaded', () => {
  try {
  

    function getInputByLabel(labelText) {
      const labels = Array.from(document.querySelectorAll('label'));
      
      for (const label of labels) {
      
        if (label.textContent.toLowerCase().includes(labelText.toLowerCase())) {
      
          const id = label.getAttribute('for');
      
          if (id) return document.getElementById(id);
      
          const siblingInput = label.querySelector('input') || label.nextElementSibling;
      
          return siblingInput;
        }
      }
      return null;
    }

    const firstName = getInputByLabel('First Name') || getInputByLabel('Name');
    
    if (!firstName) throw new Error("First Name input not found");
    
    firstName.value = 'Shivam';


    const email = getInputByLabel('Email');
    
    if (!email) throw new Error("Email input not found");
    
    email.value = 'shivam@example.com';
    

    const genderRadios = document.querySelectorAll('input[type="radio"]');

    const maleRadio = Array.from(genderRadios).find(e => e.value.toLowerCase() === 'male');
    
    if (!maleRadio) throw new Error("Gender radio (male) not found");
    
    maleRadio.checked = true;
  
    
  } catch (err) {
    console.error(" Error:", err.message);
  }
});

      

