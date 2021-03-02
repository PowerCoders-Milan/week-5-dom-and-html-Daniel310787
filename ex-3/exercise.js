// With JS you can add anything.. for example Rows and cells.

// Write a JavaScript function to add one row with two cells inside to a table.

// Insert text in these two cells like this:

// "New Cell1" and "New Cell2"



function insert_Row() {
    var table = document.getElementById("sampleTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "NewCell2";
}

