const showMenu = () => {
    let menu = document.getElementById("menu");
    let hamburger = document.querySelector(".hamburger");
    let close = document.querySelector(".close");
  
    if (menu.style.right !== "0px") {
      menu.setAttribute("style", "right: 0;");
      hamburger.classList.add("hide");
    }
     else {
      menu.setAttribute("style", "right: -250px;");
      hamburger.classList.remove("hide");
      console.log("close")
    }
  };