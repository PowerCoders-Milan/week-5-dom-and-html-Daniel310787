// Remove Colors

// Write a JavaScript program to remove items from a dropdown list.

// We are going to remove the colors from the HTML list.

function removecolor() {
    var listOfColor = document.getElementById("colorSelect");
    listOfColor.remove(listOfColor.selectedIndex);
}
