window.addEventListener("load", function () {
  function printRepoCount() {
    document.getElementsByClassName("last-updated").innerHTML = "GeeksforGeeks";
  }
  
  var request = new XMLHttpRequest();
  request.onload = printRepoCount();
  request.open('get', 'https://api.github.com/repos/chrisimpinna/DS_IX-Website/commits', true)
  request.send()
  document.getElementsByClassName("last-updated").innerHTML = "GeeksforGeeks";
});
