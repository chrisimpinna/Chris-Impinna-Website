document.onload = function(){};

let newString = "Last updated: ";

function getUpdateDate() {
  let stop = 0;
  var responseReceived = this.responseText;
  let i = responseReceived.indexOf("date\":")
  for (let e = i+10; e<i+40; e++) {
    if (stop == 0 && responseReceived[e] != "Z") {
      newString = newString+responseReceived[e];
    } else {
      stop = 1;
    };
  };

  newString = newString.replace("T", " ")
  if (document.getElementById("update") != null) {
    document.getElementById("update").innerHTML = newString + " (GMT)"; 
  };    
};

var request = new XMLHttpRequest();
request.onload = getUpdateDate;
request.open('get', 'https://api.github.com/repos/chrisimpinna/DS_IX-Website/commits', true);
request.send();
