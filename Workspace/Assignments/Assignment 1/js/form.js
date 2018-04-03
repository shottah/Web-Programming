function validateForm () {
    
    let r = confirm("Are you sure to submit?");
    
    if (!r) {
        return;
    }
    
    var success = true;
    let form = document.getElementById("register");
    let fname = form["fname"].value;
    let lname = form["lname"].value;
    let email = form["email"].value;
    let dob = form["dob"].value;
    let country = form["country"].value;
    let frequency = form["frequency"].value;
    let check = form["robot"].value;
    check = check.toLowerCase();
    
    let str = "";
    
    if (email == null || !validateEmail(email))
        str += "Email ";
    if (dob == null)
        str += "Date of Birth ";
    if (country == null)
        str += "Country";
    
    if (str === "") {
        success = true;
    } else {
        success = false;
    }
    
    if (success) {
        alert("Welcome to the mailing list!\nYou have successfully subscribed.")
    } else {
        alertError(str);
    }
}

function alertError(str) {
    let base = "The following information is missing or invalid:\n"
    alert(base + "" + str);
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function findPage () {
    let input = document.getElementById("search")["search"].value;
    
    let arr = ["carmina", "statistics", "register", "catullus"];
    
    let href = "";
    
    if (input == arr[0] || input == arr[1])
        href = "/professional.html";
    if (input == arr[2])
        href = "/register.html";
    if (input == arr[3])
        href = "/personal.html";
    
    window.location.href = href;
}