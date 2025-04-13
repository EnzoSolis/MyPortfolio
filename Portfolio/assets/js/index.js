let menu_is_hide = true;

window.onresize = (e) => {
  if (window.innerWidth >= 480)
    return;

  menu_is_hide = true;
};

function unhideMenu(menuitems, burger) {
  menu_is_hide = false;
  burger.children[0].classList.remove("burger_upper_bar--animate-reverse");
  burger.children[1].classList.remove("burger_center_bar--animate-reverse");
  burger.children[2].classList.remove("burger_lower_bar--animate-reverse");
  menuitems.classList.remove("nav_menu_hide");
  void burger.offsetWidth;
  burger.children[0].classList.add("burger_upper_bar--animate");
  burger.children[1].classList.add("burger_center_bar--animate");
  burger.children[2].classList.add("burger_lower_bar--animate");
  //menuitems.style.display = "flex";
  menuitems.classList.add("nav_menu_unhide");
}
  

function hideMenu(menuitems, burger) {
  menu_is_hide = true;
  burger.children[0].classList.remove("burger_upper_bar--animate");
  burger.children[1].classList.remove("burger_center_bar--animate");
  burger.children[2].classList.remove("burger_lower_bar--animate");
  menuitems.classList.remove("nav_menu_unhide");
  void burger.offsetWidth;
  burger.children[0].classList.add("burger_upper_bar--animate-reverse");
  burger.children[1].classList.add("burger_center_bar--animate-reverse");
  burger.children[2].classList.add("burger_lower_bar--animate-reverse");
  //menuitems.style.display = "none";
  menuitems.classList.add("nav_menu_hide");
}

function showMenu() {
  const hamburger = document.getElementById("nav_hamburger");
  const menuitems = document.getElementById("nav_menu_items");

  if (menu_is_hide)
  {
    unhideMenu(menuitems, hamburger);
    console.log("Unhide Menu");
  }
  else {
    hideMenu(menuitems, hamburger);
    console.log("Hide Menu");
  }

}