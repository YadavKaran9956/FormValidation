// const validateEmail = (email) => {
//   return email.search(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };

$("#submitButton").click(() => {
    var email = $("#mail").val();
    var isEmail = validateEmail(email);
    console.log(isEmail);
});