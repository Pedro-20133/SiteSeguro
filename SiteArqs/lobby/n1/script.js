document.getElementById("btn").addEventListener("click", function() {
    var user = document.getElementById("user").value;
    var psw = document.getElementById("psw").value;

    if (user == null || user == undefined || user == "" || psw == null || psw == undefined || psw == "") {
        alert("Fill in the fields correctly!");
    } if (user == "admin" && psw == "ndewhj78398Y#*(##)U(Hunhji") {
        document.getElementById("containerLogin").style.display = "none";
        document.getElementById("containerData").style.display = "block";
        alert("Login successful!");
    } else {
        alert("Fill in the fields correctly!");
    }
});

document.getElementById("btnLevel").addEventListener("click", function() {
    window.location.href = "../n2/index.html";
});