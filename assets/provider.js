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

function addGitHubCodeSearch() {
  addProvider("github-code.xml");
}

function addGitHubUsersSearch() {
  addProvider("github-users.xml");
}

function addSoundCloudSearch() {
  addProvider("soundcloud.xml");
}

function addWeblioEJJESearch() {
  addProvider("weblio-ejje.xml");
}

function addGoogleENSearch() {
  addProvider("google-en.xml");
}

function addYoutubeSearch() {
  addProvider("youtube.xml");
}

