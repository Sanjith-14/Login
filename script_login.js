let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(username, 0, "Username can't be blank");
    engine(email, 1, "Email can't be blank");
    engine(password, 2, "Password can't be blank");
  });
  
  // engine function which will do all the works
  
  let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "3.5px solid red";
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } 
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "3.5px solid green";
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  };