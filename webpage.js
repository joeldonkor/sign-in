document.addEventListener("DOMContentLoaded", () => {
    const loginTab = document.getElementById("login-tab");
    const createAccountTab = document.getElementById("create-account-tab");
    const loginForm = document.getElementById("login-form");
    const createAccountForm = document.getElementById("create-account-form");
    const googleButton = document.querySelector(".google-button");
    const separator = document.querySelector(".separator");
  
    loginTab.addEventListener("click", () => {
      loginForm.classList.remove("hidden");
      createAccountForm.classList.add("hidden");
      googleButton.classList.add("hidden");
      separator.classList.add("hidden");
      loginTab.classList.add("font-bold", "border-b-2", "border-black");
      createAccountTab.classList.remove("font-bold", "border-b-2", "border-black");
    });
  
    createAccountTab.addEventListener("click", () => {
      createAccountForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
      googleButton.classList.remove("hidden");
      separator.classList.remove("hidden");
      createAccountTab.classList.add("font-bold", "border-b-2", "border-black");
      loginTab.classList.remove("font-bold", "border-b-2", "border-black");
    });
  });
  