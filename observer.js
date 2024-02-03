// Remove the transition class
const section = document.querySelectorAll('.section')
section.forEach((sect) => {
  sect.classList.remove('section-transition')
})

// Create the observer, same as before:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      section.classList.add('section-transition')
      return
    }

    sections.classList.remove('section-transition')
  })
})

observer.observe(document.querySelectorAll('.section-wrapper'))
