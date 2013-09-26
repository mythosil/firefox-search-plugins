/* firefox only */

function addProvider(xmlname) {
  var url = document.URL;
  var absPath = url.substring(0, url.lastIndexOf("/")) + "/provider/" + xmlname;
  window.external.AddSearchProvider(absPath);
}

function addGitHubSearch() {
  addProvider("github.xml");
}

function addGitHubRepositoriesSearch() {
  addProvider("github-repositories.xml");
}

