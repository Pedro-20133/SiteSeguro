document.getElementById("btn").addEventListener("click", function() {
    var user = document.getElementById("user").value;
    var psw = document.getElementById("psw").value;

    var data = "";

    if (data == null || data == undefined || data == {}) {
        alert("Fill in the fields correctly!");
    } else {
        document.getElementById("containerLogin").style.display = "none";
        document.getElementById("containerData").style.display = "block";
        alert("Login successful!");
    }
});

document.getElementById("btnLevel").addEventListener("click", function() {
    window.location.href = "../index.html";
});