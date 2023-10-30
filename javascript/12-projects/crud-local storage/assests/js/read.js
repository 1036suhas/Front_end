
//  local storage config
let users = localStorage.getItem("userinfo") ? 
new Array(localStorage.getItem("userinfo"))
: [];

console.log(users);

let result = document.getElementById("result");

function printUser() {
result.innerHTML += `
<img src=${users.profile} alt="">

<p><b>USER ID :</b> <span>${users.id}</span></p>
<p><b>NAME :</b> <span>${users.name}</span></p>
<p><b>EMAIL :</b> <span>${users.email}</span></p>
<p><a href="#" class="btn">EDIT</a> <a href="#" class="btn" onclick='deleteUser(${user.id})'>DELETE</a></p>
`;
}
printUser();

function deleteUser(id) {
    if (confirm(`Are you sure to delete an user id = ${id}?`)) {
        if (id === users.id) {
          localStorage.removeItem("userinfo");
          alert("user sucessfully deleted");
          result.style.display ="none";
        }
    } else {
        alert("delete operation cancelled");
    }
}