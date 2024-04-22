let signUpForm = document.querySelector("#signupForm")
let loginInForm = document.querySelector("#loginForm")

// const usersDB = JSON.parse(localStorage.getItem("usersDB")) || [];
// console.log(usersDB);
// let user = {}

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = e.target[0].value
    let email = e.target[1].value   
    let password = e.target[2].value
    
    user = {name:name, email: email, password:password};

    const isUserExist = usersDB.find(u => u.email === email);
    if (!isUserExist) {
        // Successful 
        usersDB.push(user);
        localStorage.setItem("usersDB", JSON.stringify(usersDB));
        alert(`Hi 👋 ${user.name} Registration Successful,  Kindly Sign In`);
        document.getElementById("container").classList.remove("right-panel-active");
        

    } else {
        alert("User already exists");
    }
    signUpForm.reset();
})


//login functionality
loginInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = e.target[0].value
    let password = e.target[1].value
    
    const isUserValid = usersDB.find(u => u.email === email && u.password === password);
    if (isUserValid) {
        // redirectToHomePage();
        location.href = "/index.html"
    } else {
        alert("Invalid username or password");
    }
      
}
)
                                                                          


