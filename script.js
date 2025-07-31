const header = document.getElementById("mainHeader");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });