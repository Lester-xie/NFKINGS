export function callObserver(container) {
  const animateElements = Array.from(document.querySelectorAll(`${container} .animate__animated`))
  const observer = new IntersectionObserver(
    function(changes) {
      changes.forEach(function(change) {
        const container = change.target
        container.style.opacity = 0
        if (change.intersectionRatio > 0) {
          change.target.style.opacity = 1
          const animateName = container.getAttribute("data-animate")
          container.setAttribute('class', `animate__animated ${animateName}`)
          observer.unobserve(container);
        }
      });
    }
  );
  animateElements.forEach(function (item) {
    observer.observe(item);
  });
}
