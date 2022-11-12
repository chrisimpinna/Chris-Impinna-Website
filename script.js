document.onload = function(){};

//UPDATING FOOTER TEXT TO UPDATE DATE
function getUpdateDate() {
  let newString = "Last updated: ";
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

//UPDATED TABLE WITH ARCHIVE FILES
function getArchiveFiles() {
  var responseReceived = this.responseText;
  let fileName = "";
  
  let e = 0;
  for (let i = "path\":"; i<=responseReceived.length; i++){
    let stop = 0;
    for (let x = i; x<=responseReceived.length; x++) {
      if (responseReceived[x] != "," && stop==0) {
        fileName = fileName + responseReceived[x];
      } else {
        stop = 1;
      };
    };
  };
  
  if (document.getElementById("archive-title") != null) {
    document.getElementById("archive-title").innerHTML = responseReceived; 
  };    
};
 
//API REQUEST FOR GETTING UPDATE DATE
var request_updateDate = new XMLHttpRequest();
request_updateDate.onload = getUpdateDate;
request_updateDate.open('get', 'https://api.github.com/repos/chrisimpinna/DS_IX-Website/commits', true);
request_updateDate.send();

//API REQUEST FOR GETTING ALL ARCHIVE FILES
var request_archiveData = new XMLHttpRequest();
request_archiveData.onload = getArchiveFiles;
request_archiveData.open('get', 'https://api.github.com/repos/chrisimpinna/DS_IX-Website/git/trees/adb8bff6c171a3feb685205cf808d304b74e4f50', true);
request_archiveData.send();
