// UI elements
const $projects = document.querySelector('#projects__container')
const $modals = document.querySelector('#modal__container')
const $coursemodals = document.querySelector('#courseinfo__container')

// Mustache Templates
const projectsTemplate = document.querySelector('#projects__template').innerHTML
const modalTemplate = document.querySelector('#modal__template').innerHTML
const coursesTemplate = document.querySelector('#courses__template').innerHTML

// Data
const courses = {
    mycourses: [
        {
            id: 1,
            title: 'Responsive Web Design',
            description: 'HTML5, CSS3, Flexbox, CSS Grid, applied visual design, applied accessibility, responsive web design principles',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1598671811/free_code_camp/fcc-cert2_qlqzxi.jpg',
        },
        {
            id: 2,
            title: 'JavaScript Algorithms and Data Structures',
            description: 'JavaScript, ES6, Regular Expressions, Debugging, data structures, algorithm scripting, object oriented programming, functional programming',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1598671811/free_code_camp/fcc-cert1_iom5sr.jpg',
        },
        {
            id: 3,
            title: 'VueJS, by Udemy',
            description: 'VueJS, Vuex, Vue-Router, components, data flow and communication between components, transitions and animations, directives, filters, mixins, HTTP requests',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1601355983/dev-portfolio/vuejs-certificate_sf7nmt.jpg',
        },
        {
            id: 4,
            title: 'Node and MongoDB, by Udemy',
            description: 'NodeJS, Express, MongoDB, Mongoose.js, socket.io, data and schema modeling, json-web-tokens, server-side authentication, PostMan, environment variables',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1601345213/dev-portfolio/drenglish_sne99e.jpg',
        },
    ],
}

const projects = {
    myprojects: [
        {
            id: 1,
            title: 'Dr English Academy',
            description: 'I collaborated with a team of freelancers to help a small company re-design their website.',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1601345213/dev-portfolio/drenglish_sne99e.jpg',
            icon: 'fas fa-business-time',
            link: 'http://dr-english.com/UserMember/LoginPage.asp',
        },
        // below, are MY PERSONAL PROJECTS
        // below, are MY PERSONAL PROJECTS

        {
            id: 2,
            title: 'Single Page App with VueJS',
            description: 'I built a small Vue SPA to show my love of cameras and photography.',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1598683424/dev-portfolio/leicashop_mea2uz.jpg',
            icon: 'far fa-clipboard',
            link: 'https://dr-english.com',
        },
        {
            id: 3,
            title: 'React/Redux eCommerce store',
            description: "I built a full-stack e-commerce app using React, Redux, Firestore (database), and integrated the Stripe payment API. I also used Google Firebase's Auth SDK",
            imageurl: './crown.jpg',
            icon: 'far fa-clipboard',
            link: 'https://simon-crown-shop-project.herokuapp.com/',
        },
        {
            id: 4,
            title: 'RyuCave.com',
            description: 'My personal blog, ryucave.com, was built with Eleventy, a static site generator.',
            imageurl: './ryucave.jpg',
            icon: 'far fa-clipboard',
            link: 'https://dr-english.com',
        },
    ],
}

// RENDER
const projectsHtml = Mustache.render(projectsTemplate, projects)
$projects.insertAdjacentHTML('beforeend', projectsHtml)

const modalHtml = Mustache.render(modalTemplate, projects)
$modals.insertAdjacentHTML('beforeend', modalHtml)

const coursesHtml = Mustache.render(coursesTemplate, courses)
$coursemodals.insertAdjacentHTML('beforeend', coursesHtml)
