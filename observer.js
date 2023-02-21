// const allSections = document.querySelectorAll('.section')

// const revealSection = function (entries, observer) {
//     const [entry] = entries

//     if (!entry.isIntersecting) return
//     entry.target.classList.remove('section--hidden')
//     observer.unobserve(entry.target)
// }

// const sectionObserver = new IntersectionObserver(revealSection, {
//     root: null,
//     threshold: [0, 0.1]
// })

// allSections.forEach(function (section) {
//     sectionObserver.observe(section)
//     section.classList.add('section--hidden')
// })

// square animate tutorial
// square animate tutorial
// square animate tutorial
// square animate tutorial
// square animate tutorial

// Remove the transition class
const section = document.querySelectorAll('.section');
section.forEach((sect) => { 
  sect.classList.remove('section-transition');
})

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section.classList.add('section-transition');
      return;
    }

    sections.classList.remove('section-transition');
  });
});

observer.observe(document.querySelectorAll('.section-wrapper'));