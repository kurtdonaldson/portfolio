window.addEventListener("load", () => {
  const dropMenu = document.querySelector("#slide-ul");
  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector("#menu");
  const menuBtns = document.querySelectorAll(".menuBtns");
  dropMenu.style.marginTop = "-360px";
  dropMenu.style.transition = "0.3s";

  function openMenu() {
    dropMenu.style.marginTop = "20px";
  }

  function closeMenu() {
    dropMenu.style.marginTop = "-360px";
  }

  menuButton.addEventListener("click", () => {
    if (dropMenu.style.marginTop == "-360px") {
      openMenu();
    } else {
      closeMenu();
    }
  });

  menuBtns.forEach((navBtn) => {
    navBtn.addEventListener("click", () => {
      closeMenu();
    });
  });

  const scriptURL = "https://getform.io/f/eca318f0-9de0-46d2-933a-1f70fb5eb1ca";
  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        form.reset();
        alert("Form sent!");
      })
      .catch((error) => console.error("Error!", error.message));
  });
});
