

const role = "Admins";         
const password = "TheMasterh"; 


if (role === "Admin") {

  if (password === "TheMaster") {
    console.log("Welcome!");
  } else if (password === "" || password === null) {
    console.log("Canceled.");
  } else {
    console.log("Wrong password");
  }

} else if (role === "" || role === null) {
  console.log("Canceled.");

} else {
  console.log("I don't know you");
}