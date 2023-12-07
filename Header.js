document.addEventListener("DOMContentLoaded", function () {
    var labels = document.querySelectorAll(".main-menu label");
  
    labels.forEach(function (label) {
      var menuItems = label.nextElementSibling;
  
      label.addEventListener("mouseenter", function () {
        menuItems.style.display = "block";
        var rect = label.getBoundingClientRect();
        menuItems.style.left = rect.left + "px";
        menuItems.style.top = rect.bottom + "px";
      });
  
      label.addEventListener("mouseleave", function () {
        menuItems.style.display = "none";
      });
  
      menuItems.addEventListener("mouseenter", function () {
        menuItems.style.display = "block";
      });
  
      menuItems.addEventListener("mouseleave", function () {
        menuItems.style.display = "none";
      });
  
      menuItems.querySelectorAll("li").forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", function () {
          menuItem.click();
        });
      });
    });
  });