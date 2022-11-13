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
    document.getElementById("update").innerHTML = newString + " (UTC)"; 
  };    
};

//UPDATED TABLE WITH ARCHIVE FILES
function getArchiveFiles() {
  var responseReceived = this.responseText;
  let fileName = "";
  
  let e = 0;
  
  let lastIndex = 0;
  let superStop = 0;
  for (let i = 0; i<=100; i++){
    let stop = 0;
    
    if (responseReceived.indexOf("path\":", lastIndex) != -1 && superStop == 0) {
      for (let x = responseReceived.indexOf("path\":", lastIndex-2)+8; x<=responseReceived.length; x++) {
        if (responseReceived[x] != "," && stop==0) {
          fileName = fileName + responseReceived[x];
          lastIndex = x
        } else {
          stop = 1;
        };
      };
    } else {
      superStop = 1;
    };
  };
  
  fileName = fileName.replace(/"/g, ",");
  let totalArchive = 0;
  for (let i = 0; i<=fileName.length; i++) {
    if (fileName[i] == ",") {
      totalArchive++;
    };
  };
  
  lastIndex = -2;
  
  for (let i = 0; i<=totalArchive-1; i++){
    if (document.getElementById("archive-table") != null) {
      let TR = document.createElement("TR");
      let TR_Title = document.createElement("TH");
      let TR_FileType = document.createElement("TH");
      TR_FileType.innerHTML = "File Type";
      let TR_Date = document.createElement("TH");
      TR_Date.innerHTML = "1/1/1";
      
      let newString = "";
      let stop = 0;

      for (let x = lastIndex+2; x<=fileName.length; x++) {
        if (fileName[x] != "," && stop == 0) {
          newString = newString + fileName[x]
          lastIndex = x;
        } else {
          stop = 1;
        };
      };
        
      TR_Title.innerHTML = newString;
      
      // Append the element to the parent element
      document.querySelector('#archive-table tbody').append(TR);
      TR.append(TR_Title);
      TR.append(TR_FileType);
      TR.append(TR_Date);
    };   
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
