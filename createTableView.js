export function createTable(givenArray){
	
	// to add content inside table we are defining empty varible. This variable is going to have content in the future. 
	
	let tableContent = "";

	// here we have defined variable for table head part.
	// here we are concating table headings

	let tableHead = "<thead>";
	tableHead += "<th>Name</th>" + "<th>Email</th>" + "<th>Mobile</th>";
	tableHead += "</thead>"; 

	// we are adding thead inside table content variable.

	tableContent += tableHead;

	// here we are defining empty variable for table body

	let tableBody = "";

	// here we are looping over an arrayOfObjects and simultaneously we are adding array data inside table body

	for(let i=0; i<givenArray.length; i++){
		tableBody += "<tr>" + `<td>${givenArray[i].name}</td>` + `<td>${givenArray[i].email}</td>` + `<td>${givenArray[i].mobileNo}</td>` +    "</tr>";
	}

	tableBody += "</tbody>";

	// here we have assign table body data to table content

	tableContent += tableBody;

	// here we are accessing html table element using its id and passing table content to it.

	let tableElement = document.getElementById("table");

	tableElement.innerHTML = tableContent;

	//here we are adding border to table, trying to increase the width of columns and aligning table data to center of respective cells.

	tableElement.style.border = "1px solid";
	tableElement.rows[0].cells[0].width = "150px";
	tableElement.rows[0].cells[1].width = "200px";
	tableElement.rows[0].cells[2].width = "150px";
	tableElement.style.textAlign = "center";
}