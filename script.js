window.addEventListener("load", function () {
  function printRepoCount() {
    var Element = document.getElementsByClassName("last-updated");
    Element[0].innerHTML = "GeeksforGeeks";
  }
  
  var request = new XMLHttpRequest();
  request.onload = printRepoCount();
  request.open('get', 'https://api.github.com/repos/USER/REPOSITORY/commits', true)
  request.send()
});
