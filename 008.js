var newElement = document.createElement("h2");
var textNode = document.createTextNode("This is a created node for h2 tag");
newElement.appendChild(textNode);

var position = document.getElementById("xyz");
position.appendChild(newElement);

// createElement , createTextNode , appendChild

