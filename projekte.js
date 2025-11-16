    window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      const content = document.getElementById("content");
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
      }, 500);
    });