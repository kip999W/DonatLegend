document.addEventListener("DOMContentLoaded", function () {
  const accordionTitles = document.querySelectorAll('.js-accordionTrigger');

  accordionTitles.forEach(title => {
    title.addEventListener('click', function (e) {
      e.preventDefault();

      const content = document.getElementById(title.getAttribute('aria-controls'));
      const isCollapsed = title.classList.contains('is-collapsed');

      title.setAttribute('aria-expanded', isCollapsed);
      content.setAttribute('aria-hidden', !isCollapsed);
      
      title.classList.toggle('is-collapsed', !isCollapsed);
      title.classList.toggle('is-expanded', isCollapsed);
      content.classList.toggle('is-collapsed', !isCollapsed);
      content.classList.toggle('is-expanded', isCollapsed);
    });
  });
});