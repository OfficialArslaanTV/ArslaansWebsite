user = prompt("Welcome to Philip's Section! What is your name?");
welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.innerText = "Welcome, " + user + "!";

if (user == "Philip") {
  welcomeMessage.innerText = "Welcome, Master Philip! You are now an admin.";
}
if (user == "Memer") {
  welcomeMessage.innerText = "memer be meming";
  memer_div = document.getElementById("memer");
  memer_div.innerHTML = '<iframe src="https://www.youtube.com/embed/IBkscgruZsM?vq=hd1080&autoplay=1&loop=1&fs=0&color=white&controls=0&disablekb=1&playlist=IBkscgruZsM" width="560" height="315" title="Ali A intro (ear rape)(Bass Boosted)" frameborder="0"></iframe>';
}
