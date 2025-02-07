export const dropdown = function (menu, btn) {
  //   const btn = document.createElement("div");
  //   const menu1 = document.createElement("div");
  let isMenuOpen;
  let mouseLeaveNavBtn;
  let mouseEnterNav;
  const header = btn.parentNode;

  btn.addEventListener("mouseenter", (event) => {
    const menuItems = menu.querySelectorAll("li");
    const menuUl = menu.querySelector("ul");

    mouseEnterNav = setTimeout(() => {
      menu.classList.remove("close");
      menu.classList.add("open");
      menuUl.classList.add("move-down");
      menuUl.classList.remove("fade-out");
      menuUl.classList.remove("hidden");
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("fade-in");
          item.classList.remove("fade-out");
        }, index * 50);
      });
    }, 200);
  });

  btn.addEventListener("mouseleave", (event) => {
    const menuUl = menu.querySelector("ul");
    menuUl.classList.add("hidden");
  });
  header.addEventListener("mouseleave", (event) => {
    console.log("mouseleave");
    const menuUl = menu.querySelector("ul");
    const menuItems = menu.querySelectorAll("li");

    mouseLeaveNavBtn = setTimeout(() => {
      isMenuOpen = false;
      menu.classList.add("close");
      menu.classList.remove("open");
      menuUl.classList.remove("move-down");
      menuItems.forEach((item, index) => {
        item.classList.remove("fade-in");
      });
    }, 300);
    isMenuOpen = false;
  });

  //   menu.addEventListener("mouseenter", () => {
  //     clearTimeout(mouseLeaveNavBtn);
  //   });
  //   window.addEventListener("mousemove", (event) => {
  //     console.log(event.target);
  //   });
  //   menu.addEventListener("mouseleave", () => {
  //     const menuUl = menu.querySelector("ul");
  //     const menuItems = menu.querySelectorAll("li");

  //     mouseLeaveDropdown = setTimeout(() => {
  //       menu.classList.add("close");
  //       menu.classList.remove("open");
  //       menuUl.classList.remove("move-down");
  //       menuItems.forEach((item, index) => {
  //         setTimeout(() => {
  //           item.classList.remove("fade-in");
  //         }, index * 50);
  //       });
  //     }, 100);
  //   });
};
