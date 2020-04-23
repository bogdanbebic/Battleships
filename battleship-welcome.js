$(document).ready(
    $("#loginForm").submit(function (event) {
        let regex = /^[a-zA-Z0-9_]{3,15}$/
        let username1 = $("#username1").val();
        let username2 = $("#username2").val();

        if (!regex.test(username2)) {
            $("#username2").addClass("border border-danger").focus();

        }
        else {
            $("#username2").removeClass("border border-danger");
        }

        if (!regex.test(username1)) {
            $("#username1").addClass("border border-danger").focus();
        }
        else {
            $("#username1").removeClass("border border-danger");
        }

        if (!regex.test(username1) || !regex.test(username2)) {
            event.preventDefault();
        }
        else {
            localStorage.setItem("username1", username1);
            localStorage.setItem("username2", username2);
        }
    })
);
