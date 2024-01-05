let form = document.getElementById("form")
console.log(form);

form.onsubmit = function(e){
    e.preventDefault()
    // console.log("hello");
    let email = document.getElementById("email").value
    console.log(email);
    let pass = document.getElementById("password").value
    console.log(pass);

    let warn = document.getElementsByClassName("warn")
    console.log(warn);
    if(email ===  ""){
        warn[0].style.visibility = "visible"
    }
    else if(pass === ""){
        warn[1].style.visibility = "visible"
    }


}