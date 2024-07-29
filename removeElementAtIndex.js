import { userArray } from "./appendData.js"; 
import { createTable } from "./createTableView.js";

export function removeElementAtIndex(){
    let index = prompt("Enter index number whose record you want to delete");
    userArray.splice(index, 1);
    createTable(userArray);
}