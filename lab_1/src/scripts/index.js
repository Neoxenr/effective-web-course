const navigation = document.querySelector(".header__navigation");

function handleNavigationClick() {
  const headerMenu = document.createElement("div");

  headerMenu.classList.add("header__menu");

  for (let child of Array.from(navigation.children)) {
    headerMenu.appendChild(child.cloneNode(true));
  }

  const navigationCoord = navigation.getBoundingClientRect();

  headerMenu.style.top = navigationCoord.top + 10 + "px";
  headerMenu.style.left = navigationCoord.left + 10 + "px";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Закрыть";

  closeButton.classList.add("header__menu-btn");

  closeButton.addEventListener("click", () => {
    headerMenu.remove();
  });

  headerMenu.appendChild(closeButton);

  document.body.appendChild(headerMenu);
}

function handleResizeWindow() {
  if (eventListenerIsExist && window.innerWidth >= 750) {
    navigation.removeEventListener("click", handleNavigationClick);

    eventListenerIsExist = false;

    return;
  }
  if (!eventListenerIsExist && window.innerWidth < 750) {
    navigation.addEventListener("click", handleNavigationClick);

    eventListenerIsExist = true;
  }
}

let eventListenerIsExist = false;

window.addEventListener("resize", handleResizeWindow);

handleResizeWindow();
