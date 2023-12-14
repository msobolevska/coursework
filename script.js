function auth_validate() {
    var email = document.forms["auth_form"]["email"].value;
    var password = document.forms["auth_form"]["password"].value;
    var remember_me = document.forms["auth_form"]["rememebr_me"].value;

    alert("Email" + email + " " + password + " " + remember_me);
    return false;
}