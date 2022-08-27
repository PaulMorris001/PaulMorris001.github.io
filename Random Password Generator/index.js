const btnEl = document.querySelector(".button");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const passwordAlertContainer = document.querySelector(".alert");


btnEl.addEventListener("click", generatePassword);


copyIconEl.addEventListener("click", () => {
  copyPassword();
  if(inputEl.value){
    passwordAlertContainer.classList.remove("active");
    setTimeout(() =>{
      passwordAlertContainer.classList.add("active");
    }, 2000)
  }
});

function generatePassword(){
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz><?&*%${}()_^#@!ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  passwordAlertContainer.innerText = password + " copied!";
}



function copyPassword(){
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}

