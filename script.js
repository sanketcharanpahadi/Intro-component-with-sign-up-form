const firstNameEl = document.querySelector(".firstname");
const lastNameEl = document.querySelector(".lastname");
const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");
const errorMsg = document.querySelector(".err");
const inputEls = document.querySelectorAll("input");
const claimBtn = document.querySelector(".claim")
const regexExp = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;

// inputEls.forEach((ele) => {
//   if (ele.value === "") {
//     // console.log(ele.className)
//     let classEL = ele.className;
//     let El = document.getElementsByClassName(classEL)[0];
//     let attributeEl = El.name;
//     let b = document.getElementsByClassName(`err-${attributeEl}`);
//     b[0].textContent = `${El.placeholder} cannot be empty`;
//   }
// });

function regexCheck(exp) {
    return regexCheck.test(exp);
}



claimBtn.addEventListener("click", function(e) {
    inputEls.forEach((ele) => {
        if (ele.value === "") {
          // console.log(ele.className)
          let classEL = ele.className;
          let El = document.getElementsByClassName(classEL)[0];
          let attributeEl = El.name;
          let b = document.getElementsByClassName(`err-${attributeEl}`);
          b[0].textContent = `${El.placeholder} cannot be empty`;
        }
      });

      if(ele.value !== null || ele.value !== "") {
          if(! regexCheck(ele.value)) {
              document.querySelector('.err-email').textContent = "Looks like this is not an email";
          }
      }
})