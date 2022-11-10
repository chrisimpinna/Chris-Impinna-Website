function printRepoCount() {
  var responseObj = JSON.parse(this.commit.committer.date);
  document.getElementById("last-updated").innerHTML = "NEW COMMIT" + responseObj;
}
var request = new XMLHttpRequest();
request.onload = printRepoCount();
request.open('get', 'https://api.github.com/repos/USER/REPOSITORY/commits', true)
request.send()
