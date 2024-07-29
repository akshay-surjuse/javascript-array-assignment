import { userArray } from "./appendData.js";
import {createTable} from "./createTableView.js"; 

export function addElementAtIndex(){
    let index = prompt("Enter a index to add element at that index");
    let name = prompt("Enter a name");
    let email = prompt("Enter a email");
    let mobileNo = prompt("Enter a mobileNo");

    let userObj = {
        name: name,
        email: email,
        mobileNo: mobileNo
    };
    console.log(userArray);
    userArray.splice(index, 0, userObj);
    console.log(userArray);
    createTable(userArray);
}