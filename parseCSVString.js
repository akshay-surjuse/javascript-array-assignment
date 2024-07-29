import {createTable} from "./createTableView.js";

export function parseCSVString(){
    let usersString = "Akshay Surjuse,akshaysurjuse@gmail.com,9988776655,\nOnkar Londhe,onkarlondhe@gmail.com,8899776655,\nKrishna Lavhare,krishnalavhare@gmail.com,7788996655";
    let newLineArray = usersString.split("\n");
    console.log(newLineArray);
    for(let i=0; i<newLineArray.length; i++){
        newLineArray[i] =  newLineArray[i].split(",");
    }
    console.log(newLineArray);
    let objArray = [];
    for(let i=0; i<newLineArray.length; i++){
       //console.log(newLineArray[i]);
       let obj = new Object();
        for(let j=0; j<newLineArray[i].length; j++){
          // console.log(newLineArray[i][j]);
           obj.name = newLineArray[i][j];
          // console.log(obj.name);
           obj.email = newLineArray[i][j+1];
          // console.log(obj.email);
           obj.mobileNo = newLineArray[i][j+2];
          // console.log(obj.mobileNo);
           objArray.push(obj);
           break;
        }
     }
   //console.log(objArray);
   createTable(objArray);
}