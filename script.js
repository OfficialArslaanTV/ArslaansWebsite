alert("Welcome to Arslaan's Webserver!");
let promptWebsite = () => {
  let IFrameWebsite = prompt("What website would you like to open?");
  IFrameElement = document.createElement("iframe");
  IFrameElement.src = IFrameWebsite;
  document.body.appendChild(IFrameElement);
  void 0;
};
aboutButton = document.querySelector("#about-button");
aboutButton.onclick = function () {
  win = window.open();
  win.document.write("<p>About Arslaan's Website.</p><br/><p>Arslaan's Website was created for Arslaan to host a simple page with some of his creations, such as bookmark scripts and more! Stay tuned as the site is being updated very frequently.</p>");
};
