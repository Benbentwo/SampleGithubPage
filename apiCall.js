function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", "https://api.github.com/repos/Benbentwo/SampleGithubPage/issues", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    var title = document.getElementById('title')
    var desc = document.getElementById('desc')
    xhttp.send('{"title": title, "body": desc}');
}
