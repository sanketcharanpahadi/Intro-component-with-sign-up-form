const firstNameEl = document.querySelector(".firstname");
const lastNameEl = document.querySelector(".lastname");
const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");
const errorMsg = document.querySelector(".err");
const inputEls = document.querySelectorAll("input");
const claimBtn = document.querySelector(".claim");
const form = document.querySelector(".trial");
const errEmail = document.querySelector(".err-email");
const regexExp = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;

function regexCheck(exp) {
  return regexExp.test(exp);
}

claimBtn.addEventListener("click", function (e) {
  e.preventDefault();

  inputEls.forEach((ele) => {
    if (ele.value === "") {
      let classEL = ele.className;
      let El = document.getElementsByClassName(classEL)[0];
      let attributeEl = El.name;
      let b = document.getElementsByClassName(`err-${attributeEl}`);
      b[0].textContent = `${El.placeholder} cannot be empty`;
      b[0].style.visibility = "visible";
    } else {
      let classEL = ele.className;
      let El = document.getElementsByClassName(classEL)[0];
      let attributeEl = El.name;
      let b = document.getElementsByClassName(`err-${attributeEl}`);
      if (ele !== emailEl) {
        b[0].style.visibility = "hidden";
      }
    }
  });

  if (emailEl.value !== null && emailEl.value !== "") {
    if (!regexCheck(emailEl.value)) {
      errEmail.textContent = "Looks like this is not an email";
      console.log(errEmail.textContent);
    } else {
      form.submit();
    }
  }
});
