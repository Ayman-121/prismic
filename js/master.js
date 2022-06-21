let nav_hider = document.querySelector("#nav-hider");

nav_hider.onclick = function my() {
  let popup = document.createElement("div");
  popup.style.cssText =
    "background-color:white;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;text-align:center;width:75%;height:fit-content;position:absolute;top:12%;left:12%; diplay:grid;align-items:center;padding:50px;box-sizing:border-box;font-size:20px;font-weight:bold";
  document.body.appendChild(popup);

  let a1 = document.createElement("a");
  a1.href = "#features";
  a1.innerHTML = "Features";
  a1.style.cssText =
    "text-decoration:none;padding-left:10px;margin-bottom:10px;display:inline-block;";
  popup.appendChild(a1);

  // -=-=-=-=-=--=

  let a5 = document.createElement("a");
  a5.href = "#startup";
  a5.innerHTML = "Startup";
  a5.style.cssText =
    "text-decoration:none;padding-left:10px;margin-bottom:10px;display:inline-block;";
  popup.appendChild(a5);

  let a2 = document.createElement("a");
  a2.href = "#use-cases";
  a2.innerHTML = "Use Cases";
  a2.style.cssText =
    "text-decoration:none;padding-left:10px;margin-bottom:10px;display:inline-block;";
  popup.appendChild(a2);

  let a3 = document.createElement("a");
  a3.href = "#pricing";
  a3.innerHTML = "pricing";
  a3.style.cssText =
    "text-decoration:none;padding-left:10px;margin-bottom:10px;display:inline-block;";
  popup.appendChild(a3);

  let a9 = document.createElement("a");
  a9.innerHTML = "Create a Project";
  a9.classList.add("btn", "btn-outline-secondary", "text-uppercase");
  a9.style.cssText =
    "text-decoration:none;padding-left:10px;margin-bottom:10px;display:block;";
  popup.appendChild(a9);

  a1.onclick = function () {
    a1.parentElement.remove();
  };
  a2.onclick = function () {
    a2.parentElement.remove();
  };
  a3.onclick = function () {
    a3.parentElement.remove();
  };
  a9.onclick = function () {
    a9.parentElement.remove();
  };

  let exit = document.createElement("button");
  exit.innerHTML = "Delete";
  exit.style.cssText =
    "width:75px;position:absolute;background-color:red;border:none;color:white;top:-20px;right:-20px";
  popup.appendChild(exit);

  exit.onclick = function () {
    a9.parentElement.remove();
  };
};
