let endCounter = 21;
endString = "";
for (let i = 0; i <= endCounter; i++) {
  for (let j = 0; j <= endCounter; j++) {
    if (i < Math.ceil(endCounter / 2)) {
      if (i == j) {
        endString += "*";
      } else {
        endString += "\t";
      }
    } else {
    }
  }
  for (let k = 0; k < endCounter; k++) {
    if (i > Math.ceil(endCounter / 2)) {
      if (endCounter - i == k) {
        endString += "*";
      } else {
        endString += "\t";
      }
    }
  }
  if (i != Math.ceil(endCounter / 2)) {
    endString += "\n";
  }
}
console.log(endString);
