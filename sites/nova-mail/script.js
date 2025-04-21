document.getElementById("sendEmail").addEventListener("click", function() {
    let emailText = document.getElementById("emailContent").value;
    if (emailText.trim() !== "") {
        alert("Email inviata: " + emailText);
        document.getElementById("emailContent").value = "";
    } else {
        alert("Scrivi un messaggio prima di inviare!");
    }
});

document.getElementById("inbox").addEventListener("click", function() {
    alert("Caricamento della posta in arrivo... (Collegare al backend)");
});

document.getElementById("compose").addEventListener("click", function() {
    document.getElementById("emailContent").focus();
});
