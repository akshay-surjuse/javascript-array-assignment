import { userArray } from "./appendData.js";
import { createTable } from "./createTableView.js";

export function addElementToTop(){
    let name = prompt("Enter name");
    let mobileNo = prompt("Enter mobile no");
    let email = prompt("Enter email");

    let userObj = {
        name: name,
        email: email,
        mobileNo: mobileNo
    }
    
    console.log(userArray);
    userArray.unshift(userObj);
    console.log(userArray);
    createTable(userArray);
}