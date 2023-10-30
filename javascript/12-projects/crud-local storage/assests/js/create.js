let userForm = document.getElementById("userForm");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userProfile = document.getElementById("profile");
let userGender = document.getElementById("gender");
let selGender ="";

//  local storage config
let users = localStorage.getItem("userinfo") ? 
new Array(localStorage.getItem("userinfo"))
: [];


// to generate random id - arrow function
const genRanId = () => {
    let ranId = Math.floor(Math.random()*1000);
    // console.log(ranId);
    return ranId;
};

// form submit handler
userForm.addEventListener("submit", function(e) {
    e.preventDefault(); // to avoid page refers

    for (let index = 0; index < userGender.length; index++) {
        if (userGender[index].checked) {
            selGender = userGender[index].value;
          //console.log(selGender)  ;
        }
    }
    // object
    let data = {
        id: genRanId(),
        name: userName.value,
        email:userEmail.value,
        profile: userProfile.value,
        gender:selGender,
    };
    console.log("new user =", data);

    createUser(data);
});

// to create new user
function createUser(user) {
    // console.log(user);

    console.log(users);
    if (user.email === users.email) {
        alert("user email already registered.");
    }else {
   
localStorage.setItem("userInfo", JSON.stringify(user));
alert("new user created sucessfully");
window.location.href = "/12-projects/crud-local storage/index.html";
}
}