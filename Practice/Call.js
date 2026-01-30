function setUsername(username) {
  this.username = username;
  console.log("called");
}

function CreateUser(username, email, password) {
  setUsername(this, username);
  this.email = email;
  this.password = password;
}

const chai = new CreateUser("Chai", "email@abc.com", "123");
console.log(chai);
