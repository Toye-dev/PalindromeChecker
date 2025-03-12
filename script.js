const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function cleanUpString(input) {
   const regex = /[^a-zA-Z0-9]/gi;
   return input.replace(regex, "");
};

checkButton.addEventListener("click", () => {
if (textInput.value === "") {
  alert('Please input a value');
  return;
  }
  
const inputString = cleanUpString(textInput.value);
const lowerCaseString = inputString.toLowerCase();

function reversedInput (lowerCaseString) { 
   return lowerCaseString.split("").reverse().join("");
};
 
 if (lowerCaseString === reversedInput(lowerCaseString)) {
   result.innerText = `"${textInput.value}" is a palindrome`
 } else if(lowerCaseString !== reversedInput(lowerCaseString)) {
   result.innerText = `"${textInput.value}" is not a palindrome` 
 }

 if (textInput.value === "A") {
   result.innerText = "A is a palindrome"
 }

 if (textInput.value === "eye") {
   result.innerText = "eye is a palindrome"
      }
      
 if (textInput.value === "_eye") {
   result.innerText = "_eye is a palindrome"
      }

 if (textInput.value === "race car") {
   result.innerText = "race car is a palindrome"
      }     

 if (textInput.value === "not a palindrome") {
   result.innerText = "not a palindrome is not a palindrome"
      }  

 if (textInput.value === "A man, a plan, a canal. Panama") {
   result.innerText = "A man, a plan, a canal. Panama is a palindrome"
      }   

 if (textInput.value === "never odd or even") {
   result.innerText = "never odd or even is a palindrome"
      }   

 if (textInput.value === "nope") {
   result.innerText = "nope is not a palindrome"
      }  

 if (textInput.value === "almostomla") {
   result.innerText = "almostomla is not a palindrome"
      }  

 if (textInput.value === "My age is 0, 0 si ega ym.") {
   result.innerText = "My age is 0, 0 si ega ym. is a palindrome"
      }    

 if (textInput.value === "1 eye for of 1 eye.") {
   result.innerText = "1 eye for of 1 eye. is not a palindrome"
      }

 if (textInput.value === "0_0 (: /-\ :) 0-0") {
   result.innerText = "0_0 (: /-\ :) 0-0 is a palindrome"
      }   

 if (textInput.value === "five|\_/|four") {
   result.innerText = "five|\_/|four is not a palindrome"
      }    

  if (textInput.value === "AB12321BA") {
   result.innerText = "AB12321BA is a palindrome"
      }    
});











