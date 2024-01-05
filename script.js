alert("Welcome to Arslaan's Webserver!");
let promptWebsite = () => {
  let IFrameWebsite = prompt("What website would you like to open?");
  IFrameElement = document.createElement("iframe");
  IFrameElement.src = IFrameWebsite;
  document.body.appendChild(IFrameElement);
  void 0;
};
