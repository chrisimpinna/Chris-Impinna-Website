window.addEventListener("load", function () {
  function printRepoCount() {
    document.getElementsByClassName("last-updated").innerHTML = "GeeksforGeeks";
  }
  
  var request = new XMLHttpRequest();
  request.onload = printRepoCount();
  request.open('get', 'https://api.github.com/repos/USER/REPOSITORY/commits', true)
  request.send()
});
