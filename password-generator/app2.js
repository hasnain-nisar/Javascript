let result = document.getElementById('result');
let lengthEl = document.getElementById('length');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let generate = document.getElementById('generate');
let clipboard = document.getElementById('clipboard');

clipboard.addEventListener('click',()=>{
    if (result.value != "" || result.value.length >= 1){
            
            navigator.clipboard.writeText(result.value);
            clipboard.title = "Copy Password";
            alert("password copied to clipboard")
        }
    })



generate.addEventListener('click', ()=>{
    result.value = generatePassword();
})


let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*()<>?{}[]";

//Function to generate password

function generatePassword(){
    let genPassword = "";
    let allChars = "";


    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";



    let i = 1;
    while (i<=lengthEl.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
return genPassword;
}

