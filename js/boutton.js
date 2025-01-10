  document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    // Fonction pour vérifier si les éléments sont visibles dans la fenêtre
    function checkVisibility() {
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxTop < windowHeight - 100) {
          box.classList.add('visible');
        }
      });
    }

    // Vérifier la visibilité lors du chargement et du défilement
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Appel initial
  });

/* Application des animations au chargement */
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.box');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});