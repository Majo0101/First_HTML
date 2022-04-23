function fnameControl () {

    let fname = document.forms["fname"]["fname"].value;

    if (fname === ""){
       text = "This is required";
        document.getElementById("fnameAlert").innerHTML = text;
        return 1;
    }else{
       text = ""
        document.getElementById("fnameAlert").innerHTML = text;
        return 0;
    }
}

function lnameControl () {

    let lname = document.forms["lname"]["lname"].value;

    if (lname === ""){
        text = "This is required";
        document.getElementById("lnameAlert").innerHTML = text;
        return 1;
    }else{
        text = ""
        document.getElementById("lnameAlert").innerHTML = text;
        return 0;
    }
}

function emailControl(){

    let mail = document.getElementById("mailData").value;

    if (mail === ""){
        text = "This is required";
        document.getElementById("mailAlert").innerHTML = text;
        return 1;
    }else{
        text = "";
        document.getElementById("mailAlert").innerHTML = text;
        return 0;
    }
}

function numberControl(){

    let mail = document.getElementById("numberData").value;

    if (mail === ""){
        text = "This is required";
        document.getElementById("numberAlert").innerHTML = text;
        return 1;
    }else{
        text = "";
        document.getElementById("numberAlert").innerHTML = text;
        return 0;
    }
}

function radioControl(){

    if (document.getElementById("one").checked ||
        document.getElementById("two").checked ||
        document.getElementById("three").checked)
    {
        text = "";
        document.getElementById("radioAlert").innerHTML = text;
        return 0;
    }else{
        text = "This is required";
        document.getElementById("radioAlert").innerHTML = text;
        return 1;
    }
}

function descriptionControl() {
    let descrip = document.forms["descriptionWrite"]["description"].value;

    if (descrip === ""){
        text = "This is required";
        document.getElementById("descripAlert").innerHTML = text;
        return 1
    }else{
        text = "";
        document.getElementById("descripAlert").innerHTML = text;
        return 0
    }
}

function checkBoxControl (){

    if (document.getElementById("gdpr").checked){
        text = "";
        document.getElementById("checkAlert").innerHTML = text;
        return 0;
    }else{
        text = "This is required";
        document.getElementById("checkAlert").innerHTML = text;
        return 1;
    }
}

function globalCheck (){

    let x = fnameControl() +
            lnameControl() +
            emailControl() +
            numberControl() +
            radioControl() +
            checkBoxControl() +
            descriptionControl();

    if (x > 0){
        alert("Check your form again !");
    }

}