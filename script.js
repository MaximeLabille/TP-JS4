// tableaddline : take an indefinite number of column and create a line with it
function tableaddline(isheader, ...col) {
    let table = document.getElementById("table");
    let container = document.getElementById("container");
    let refresh = document.getElementById("refresh");
    table.hidden = false;
    container.style.display = "none";
    let tr = document.createElement("tr");
    for (let i = 0; i < col.length; i++) {
        let td = document.createElement("td");
        if (isheader == true) {
            td.classList.add("tablehead");
        }
        td.innerHTML = col[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    refresh.hidden = false;
}

function table(row, col) {
    let table = document.getElementById("table");
    let container = document.getElementById("container");
    let refresh = document.getElementById("refresh");
    table.hidden = false;
    container.style.display = "none";
    for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < col; j++) {
            let td = document.createElement("td");
            td.innerHTML = "*";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    refresh.hidden = false;
}

function showchar(text) {
    let container = document.getElementById("container");
    let refresh = document.getElementById("refresh");
    let textele = document.getElementById("text");
    table.hidden = false;
    container.style.display = "none";
    result = (text.toUpperCase() + "<br />" + text.toLowerCase() + "<br /> il y a " + text.length + " caractères dans le texte<br />le texte commence par la lettre " + text.charAt(0));
    textele.innerHTML = result;
    refresh.hidden = false;
}

function login() {
    let container = document.getElementById("container");
    let refresh = document.getElementById("refresh");
    let textele = document.getElementById("text");
    let username = prompt("Entrez votre pseudo");
    let password = prompt("Entrez votre mot de passe");
    if (username == "admin" && password == "admin") {
        container.style.display = "none";
        textele.innerHTML = "Bienvenue " + username;
        refresh.hidden = false;
    } else {
        alert("Acces Refusé");
    }
}

function loginthree() {
    let container = document.getElementById("container");
    let refresh = document.getElementById("refresh");
    let textele = document.getElementById("text");
    let username = prompt("Entrez votre pseudo");
    let password = prompt("Entrez votre mot de passe");
    let attempts = 2;
    while (attempts > 0) {
        if (username == "admin" && password == "admin") {
            container.style.display = "none";
            textele.innerHTML = "Bienvenue " + username;
            refresh.hidden = false;
            break;
        } else {
            attempts--;
            alert("Acces Refusé");
            username = prompt("Entrez votre pseudo");
            password = prompt("Entrez votre mot de passe");
        }
    }
    if (attempts == 0) {
        alert("Delai depassé");
    }
}

function addline() {
    let tablecontrols = document.getElementById("tablecontrols");

    const tc_name = document.getElementById("tc_name");
    const tc_lastname = document.getElementById("tc_lastname");

    if (tablecontrols.hidden == true) {
        name_ = prompt("Entrez un nom");
        lastname_ = prompt("Entrez un prenom");
        // create the table base
        tableaddline(true, "Nom", "Prenom");
        // add the base input
        tableaddline(false, name_, lastname_);
        tablecontrols.hidden = false;
        tablecontrols.style.display = "flex";
    } else {
        name_ = tc_name.value;
        lastname_ = tc_lastname.value;
        tableaddline(false, name_, lastname_);
    }
}

function bonus() {
    let container = document.getElementById("container");
    let refresh = document.getElementById("refresh");
    let textele = document.getElementById("text");
    articles = {};
    while (true) {
        name_ = prompt("Entrez le nom de votre article");
        if (articles[name_]) {
            if (confirm("Article déja existant, Voulez-vous le modifier ?") == true) {
                price_ = prompt("Entrez le prix de votre article");
                amount_ = prompt("Entrez la quantité de votre article");
                articles[name_] = { "price": price_, "amount": amount_ };
            }

            if (confirm("Voulez-vous ajouter un autre article ?") == false) {
                break;
            } else {
                continue;
            }
        }
        price_ = prompt("Entrez le prix de votre article");
        amount_ = prompt("Entrez la quantité de votre article");
        articles[name_] = { "price": price_, "amount": amount_ };
        if (confirm("Voulez-vous ajouter un autre article ?") == false) {
            break;
        }
    }
    var totalprice = 0
    tableaddline(true, "Nom", "Prix", "Quantité", "Total");
    for (let article in articles) {
        price = articles[article]["price"];
        amount = articles[article]["amount"];
        tableaddline(false, article, price, amount, price*amount);
        totalprice = totalprice + price*amount;
    }
    tableaddline(false, "", "", "", totalprice);
}

function refresh() {
    location.reload();
}