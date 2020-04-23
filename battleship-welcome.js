$(document).ready(
    $("#loginForm").submit(function (event) {
        let regex = /^[a-zA-Z0-9_]{3,15}$/
        let username1 = $("#username1").val();
        let username2 = $("#username2").val();
        if (!regex.test(username1) || !regex.test(username2)) {
            event.preventDefault();
        }
    })
);
