function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.transform = 'translateX(0%)'
    document.body.classList.add('no-scroll');
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.transform = 'translateX(100%)'
    document.body.classList.remove('no-scroll');
}

window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transition = 'transform 0.5s ease';
    
  });

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 500);
  });


  