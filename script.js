var body = document.body; // Create body to access the property of the document object.
console.log(body);
for (var i = 0; i < 63; i++) {
  var div = document.createElement("div");
  div.style.float = "left";
  div.style.width = "11%";
  div.style.paddingBottom = "11%";
  if (i % 2 === 0) {
    div.style.backgroundColor = "red";
  } else {
    div.style.backgroundColor = "black";
  }
  body.appendChild(div);
}
