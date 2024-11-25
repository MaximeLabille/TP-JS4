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
    console.log(result);
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
    let table = document.getElementById("table");
    let tablecontrols = document.getElementById("tablecontrols");
    let container = document.getElementById("container");
    let refresh = document.getElementById("refresh");

    const tc_name = document.getElementById("tc_name");
    const tc_lastname = document.getElementById("tc_lastname");

    if (tablecontrols.hidden == true) {
        name_ = prompt("Entrez un nom");
        lastname_ = prompt("Entrez un prenom");
        // create the table base
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        td.innerHTML = "Nom";
        td.classList.add("tablehead");
        td2.innerHTML = "Prénom";
        td2.classList.add("tablehead");
        tr.appendChild(td);
        tr.appendChild(td2);
        table.appendChild(tr);
        // add the base input
        let tr_ = document.createElement("tr");
        let td_ = document.createElement("td");
        let td2_ = document.createElement("td");
        td_.innerText = name_;
        td2_.innerText = lastname_;
        tr_.appendChild(td_);
        tr_.appendChild(td2_);
        table.appendChild(tr_);

        container.style.display = "none";
        table.hidden = false;
        tablecontrols.hidden = false;
        tablecontrols.style.display = "flex";
        refresh.hidden = false;
    } else {
        name_ = tc_name.value;
        lastname_ = tc_lastname.value;
        let tr_ = document.createElement("tr");
        let td_ = document.createElement("td");
        let td2_ = document.createElement("td");
        td_.innerText = name_;
        td2_.innerText = lastname_;
        tr_.appendChild(td_);
        tr_.appendChild(td2_);
        table.appendChild(tr_);
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

    // put the articles in the table using a for loop
    var totalprice = 0

    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td.innerHTML = "Nom";
    td.classList.add("tablehead");
    td2.innerHTML = "Prix";
    td2.classList.add("tablehead");
    td3.innerHTML = "Quantité";
    td3.classList.add("tablehead");
    td4.innerHTML = "Total";
    td4.classList.add("tablehead");
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    for (let article in articles) {
        let tr_ = document.createElement("tr");
        let td_ = document.createElement("td");
        let td2_ = document.createElement("td");
        let td3_ = document.createElement("td");
        let td4_ = document.createElement("td");
        td_.innerText = article;
        td2_.innerText = articles[article]["price"];
        td3_.innerText = articles[article]["amount"];
        td4_.innerText = articles[article]["amount"]*articles[article]["price"];
        totalprice = totalprice + articles[article]["amount"]*articles[article]["price"];
        tr_.appendChild(td_);
        tr_.appendChild(td2_);
        tr_.appendChild(td3_);
        tr_.appendChild(td4_);
        table.appendChild(tr_);
    }

    let tr_ = document.createElement("tr");
    let td_ = document.createElement("td");
    let td2_ = document.createElement("td");
    let td3_ = document.createElement("td");
    let td4_ = document.createElement("td");
    td_.innerText = "";
    td2_.innerText = "";
    td3_.innerText = "";
    td4_.innerText = totalprice;
    tr_.appendChild(td_);
    tr_.appendChild(td2_);
    tr_.appendChild(td3_);
    tr_.appendChild(td4_);
    table.appendChild(tr_);
    container.style.display = "none";
    table.hidden = false;
    refresh.hidden = false;
    console.log(articles)
}

function refresh() {
    location.reload();
}