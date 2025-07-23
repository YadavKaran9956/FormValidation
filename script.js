function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePhone(phoneNumber) {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
}

function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
}

function showHidePass() {
    var inp = document.getElementById("pass");
    if (inp.type === "password") {
        inp.type = "text";
    } else {
        inp.type = "password";
    }
}

$("#submitButton").click(() => {
    var email = $("#mail").val();
    var phone = $("#phone").val();
    var pass = $("#pass").val();
    var isEmail = validateEmail(email);
    var isPhone = validatePhone(phone);
    var isPass = validatePassword(pass);

    if (!email) {
        document.getElementById("errMsgEmail").innerHTML = `<i class="material-icons">warning</i> Email is empty.`;
    } else if (!isEmail) {
        document.getElementById("errMsgEmail").innerHTML = `<i class="material-icons">warning</i> Invalid email.`;
    } else {
         document.getElementById("errMsgEmail").innerHTML = "";
    }

    if (!phone) {
        document.getElementById("errMsgPhone").innerHTML = `<i class="material-icons">warning</i> Phone number is empty.`;
    } else if (!isPhone) {
        document.getElementById("errMsgPhone").innerHTML = `<i class="material-icons">warning</i> The phone number must be only 10 digits long.`;
    } else {
         document.getElementById("errMsgPhone").innerHTML = "";
    }

    if (!pass) {
        document.getElementById("errMsgPass").innerHTML = `<i class="material-icons">warning</i> Password is empty.`;
    } else if (!isPass) {
        document.getElementById("errMsgPass").innerHTML = `<i class="material-icons">warning</i> The password must be atleast 8 characters long and contains an uppercase, a lowecase & numbers.`;
    } else {
         document.getElementById("errMsgPass").innerHTML = "";
    }

    if(email && isEmail && phone && isPhone && pass && isPass){
        document.querySelector(".validated").style.display = "flex";
        console.log("hrllo");
        setTimeout(() => {
            document.querySelector(".successMsg").innerHTML = `<i class="material-icons">success</i> Hurray! The form has been validated successfully.`;
        }, 1500);
    } else {
         console.log("hello")
        document.querySelector(".validated").style.display = "none";
    }
});