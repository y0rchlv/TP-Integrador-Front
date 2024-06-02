const contact = document.getElementById("contacto");
const msgSent = document.getElementById("msg-sent"); 
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let ask = document.getElementById("text-comment").value;
    let notifications = document.getElementById("check-recive").checked;

    let feedName = document.getElementById("name-feedback");
    let feedLastName = document.getElementById("lastName-feedback");
    let feedEmail = document.getElementById("email-feedback");
    let feedCountry = document.getElementById("country-feedback");
    let feedComment = document.getElementById("text-comment-feedback");

    let pass = true;

    if(name == ""){
        feedName.classList.remove("hidden");
        feedName.classList.add("show");
        pass = false;
    }
    if(lastName == ""){
        feedLastName.classList.remove("hidden");
        feedLastName.classList.add("show");
        pass = false;
    }
    if(email == ""){
        feedEmail.classList.remove("hidden");
        feedEmail.classList.add("show");
        pass = false;
    }
    if(country == ""){
        feedCountry.classList.remove("hidden");
        feedCountry.classList.add("show");
        pass = false;
    }
    if(ask == ""){
        feedComment.classList.remove("hidden");
        feedComment.classList.add("show");
        pass = false;
    }

    if(pass == true){
        let data = {
            'name': name,
            'lastName': lastName,
            'email': email,
            'country': country,
            'comment': ask, 
            'notification': notifications
        }
        console.log(data);

        contact.classList.add("hiddenFrame");
        msgSent.classList.add("showFrame");
    }
})