import { userArray } from "./appendData.js";
import { createTable } from "./createTableView.js";

console.log(userArray);

// let arr = [];
// for(let u of userArray){
//     console.log(u);
// }
// console.log(arr);

export function removeLastElement(){
    console.log("inside removeLastElement");
    console.log(userArray);
    userArray.pop();
    createTable(userArray);
}
