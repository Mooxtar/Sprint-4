function register(){
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let fullnameInput = document.getElementById('fullname');
    let countryInput = document.getElementById('country');
    let dateInput = document.getElementById('date');

    let usersList = loadUser();
    usersList.push(
        {
            "email" : emailInput.value,
            "password" : passwordInput.value,
            "fullname" : fullnameInput.value,
            "country" : countryInput.value,
            "date" : dateInput.value
        }
    );

    localStorage.setItem("user", JSON.stringify(usersList));

    emailInput.value = "";
    passwordInput.value = "";
    fullnameInput.value = "";
    countryInput.value = "";
    dateInput.value = "";
}

function loadUser(){
    let user = localStorage.getItem('user');
    if(user != null){
        let list = JSON.parse(user);
        return list;
    }
    return [];
}

function toLogin(){
    let usersList = loadUser();
    let loginInput = document.getElementById('login');
    let parolInput = document.getElementById('parol');  
    for(let i = 0; i < usersList.length; i++){
        if(usersList[i].email == loginInput.value && usersList[i].password == parolInput.value){
            localStorage.setItem("id", i);
            window.open("welcome.html");
            break;
        }
        else{
            loginInput.style = "border-color: red";
            parolInput.style = "border-color: red";
        }
    }
}

function welcome(){
    let id = localStorage.getItem('id');
    let usersList = loadUser();
    document.getElementById('welcome-user').innerHTML = usersList[id].fullname;
    document.getElementById('user-name').innerHTML = usersList[id].fullname;
    document.getElementById('log-out').innerHTML = "<p>Logout</p>"

    document.getElementById('welcome-email').innerHTML = usersList[id].email;
    document.getElementById('welcome-password').innerHTML = usersList[id].password;
    document.getElementById('welcome-fullname').innerHTML = usersList[id].fullname;
    document.getElementById('welcome-country').innerHTML = usersList[id].country;
    document.getElementById('welcome-date').innerHTML = usersList[id].date;

}

