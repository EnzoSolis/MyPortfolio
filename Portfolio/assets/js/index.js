let menu_is_hide = true;
setThemeDefault();

window.onresize = (e) => {
  const menuitems = document.getElementById("nav_menu_items");

  if (window.innerWidth < 480) {
    menuitems.style.display = (menu_is_hide) ? "none" : "flex";
    return;
  }

  menuitems.style.display = "flex";
  if (menu_is_hide) {
    const hamburger = document.getElementById("nav_hamburger");
    hamburger.children[0].className = "nav_hamburger_bar";
    hamburger.children[1].className = "nav_hamburger_bar";
    hamburger.children[2].className = "nav_hamburger_bar";
  }
};

function setThemeDefault() {
  if (!window.matchMedia) return;

  const is_dark_theme = window.matchMedia('(prefers-color-scheme:dark)').matches;  
  const html = document.documentElement;
  const theme = (is_dark_theme) ? "dark" : "light";

  html.setAttribute("theme", theme);
}

function changeTheme() {
  const html = document.documentElement;
  const btn_theme = document.getElementById("btn_theme");
  const btn_circle = document.getElementById("btn_circle");
  const old_theme = html.getAttribute("theme");
  let new_theme;

  if (old_theme == "light") {
    new_theme = "dark";
    btn_circle.classList.remove("nav_theme_btn--to-dark");
    void btn_theme.offsetWidth;
    btn_circle.classList.add("nav_theme_btn--to-light");
  }
  else {
    new_theme = "light";
    btn_circle.classList.remove("nav_theme_btn--to-light");
    void btn_theme.offsetWidth;
    btn_circle.classList.add("nav_theme_btn--to-dark");
  }

  html.setAttribute("theme", new_theme);
}

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
  menuitems.classList.add("nav_menu_hide");
}

function showMenu() {
  const hamburger = document.getElementById("nav_hamburger");
  const menuitems = document.getElementById("nav_menu_items");

  if (menu_is_hide)
  {
    menuitems.style.display = "flex";
    unhideMenu(menuitems, hamburger);
    console.log("Unhide Menu");
  }
  else {
    hideMenu(menuitems, hamburger);
    console.log("Hide Menu");
  }

}

function sendEmail(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const body = document.getElementById("textarea_body").value;

  console.log(body);

  window.open(`mailto:${email}?subject=${subject}&body=${body}`);
}

addEventListener('submit', sendEmail);