
let form=document.getElementById("form");

form.addEventListener("submit",
(e)=> {
  e.preventDefault();
    let x = document.getElementById("email").value;
    if (x == "") {
     document.getElementById("email_error").innerText="Your Email must be filled out";
      return false;
    }
  })