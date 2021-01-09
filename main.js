
function validateForm() {
    let name = document.forms["contact"]["name"].value;
    let email = document.forms["contact"]["email"].value;
    let mobile = document.forms["contact"]["mobile"].value;
    let subject = document.forms["contact"]["subject"].value;
    let message = document.forms["contact"]["message"].value;
    if(name.length < 2 || name != name.toUpperCase()) {
        alert("The name must be in uppercase!");
        return false;
    }
    if(!/^[a-zA-Z0-9\.\-]{6,}@[a-zA-Z]{4,}\.[a-zA-Z0-9]{2,}$/.test(email)) {
        alert("Please enter a valid email");
        return false;
    }
    if(mobile.length < 8 || isNaN(mobile)) {
        alert("Please enter a valid phone number!");
        return false;
    }
    if(!/^([a-zA-Z0-9 \.]{8,})$/.test(subject)) {
        alert("Invalid subject!");
        return false;
    }
    if(message.length < 8) {
        alert("The message must contain more than 8 characters!");
        return false;
    }

    return true;
}


