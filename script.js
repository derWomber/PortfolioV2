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
    
    const toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  });

  


  