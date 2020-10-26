// set the correct username and password combination below
let correctUsername = "Sans";
let correctPassword = "Undertale";


$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    if (correctUsername === $(".username").val() && correctPassword === $(".password").val()) {
        $(".result").text("Welcome to Code Nation Social Club!");
        $(".Username").css("color", "#3f3b39");
        $(".Password").css("color", "#3f3b39");
    } else if (correctUsername !== username && correctPassword === password) {
        $(".result").text("Invalid username.");
        $(".Username").css("color", "red");

    } else if (correctPassword !== password && correctUsername === username) {
        $(".result").text("Invalid password.");
        $(".Password").css("color", "red");
    } else if (username === "" && password === "") {
        $(".result").text("Please fill out both fields");
        $(".Username").append(` * `);
        $(".Password").append(` * `);
        $(".Username").css("color", "red");
        $(".Password").css("color", "red");
    } else if (correctUsername !== username && correctPassword !== password) {
        $(".result").text("Invalid username and password.");
        $(".Password").css("color", "red");
        $(".Username").css("color", "red");
    }
});