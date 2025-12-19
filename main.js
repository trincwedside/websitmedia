// Xử lý menu mobile + dropdown trên mobile
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const dropdownToggles = document.querySelectorAll(
    ".nav-item .dropdown-toggle"
  );

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Trên mobile: bấm vào tiêu đề sẽ mở/đóng dropdown
  dropdownToggles.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const isMobile = window.matchMedia("(max-width: 799px)").matches;
      if (!isMobile) return;

      e.preventDefault();
      const menu = btn.parentElement.querySelector(".dropdown-menu");
      if (!menu) return;

      menu.classList.toggle("open");
    });
  });
});


