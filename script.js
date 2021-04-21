const form = document.getElementById('form')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const messageConatiner = document.querySelector('.message-container')
const message = document.querySelector('#message')

let valid = false
let pasMatch = false

function validateForm(){
    // USing Contraint API
    valid = form.checkValidity()
    if(!valid){
        // it will work when form have (novalidate) attribute
        messageConatiner.style.borderColor = `red`
        message.style.color = `red`
        message.textContent = `Please fill out all fields.`
        return
    }

    // Check to see pass match
    if(password1.value === password2.value){
        pasMatch = true
        password1.style.borderColor = `green`
        password2.style.borderColor = `green`
    }else{
        pasMatch = false
        message.textContent = `Make sure passwords match`
        messageConatiner.style.borderColor = `red`
        message.style.color = `red`
        password1.style.borderColor = `red`
        password2.style.borderColor = `red`
        return
    }
    if(valid && pasMatch){
        message.textContent = `Successfully Registered`
        message.style.color = `green`
        messageConatiner.style.borderColor = `green`
    }
}
function storeformData(){
    const user = {
        name: form.fullName.value,
        phoneNumber: form.phoneNumber.value,
        email: form.email.value,
        websiteUrl: form.websiteUrl.value,
        password: form.password.value,
    }
    // Do something with user data
    console.log(user)
}

const formValid = (e)=>{
    e.preventDefault()
    // vALIDDATE fORM
    validateForm()
    // User data
    if(valid && pasMatch){
        storeformData()
    }
}


// Event Listener
form.addEventListener('submit', formValid)