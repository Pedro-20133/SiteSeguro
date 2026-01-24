function decryptSenha() {
    var encrypted = "d2V1YmllaHdubWpkISpeJSMmJEAmXlkkOXFyNDk4Nyk3dCYoZXNpZXdmYmpzcGVtaWZic2VpdWZtYXdk";
    return atob(encrypted);
}

document.getElementById("btn").addEventListener("click", function() {
    var user = document.getElementById("user").value;
    var psw = document.getElementById("psw").value;

    var data = "";

    console.log(decryptSenha(decryptSenha()));

    if (user != "admin" || psw != decryptSenha()) {
        alert("Fill in the fields correctly!");
    } else {
        document.getElementById("containerLogin").style.display = "none";
        document.getElementById("containerData").style.display = "block";
        alert("Login successful!");
    }
});

document.getElementById("btnLevel").addEventListener("click", function() {
    window.location.href = "../n3/index.html";
});
