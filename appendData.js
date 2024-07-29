import { createTable } from "./createTableView.js";

export let userArray = [];

 export function saveFormData(){
    console.log("inside saveFormData");
    let name = document.getElementById("name").value;
    console.log(name);
    let email = document.getElementById("email").value;
    console.log(email);
    let mobileNo = document.getElementById("mob").value;
    console.log(mobileNo);

    let userObj = {
        name: name,
        email: email,
        mobileNo: mobileNo
    }

    userArray.push(userObj);
    console.log(userArray);

    createTable(userArray);
}