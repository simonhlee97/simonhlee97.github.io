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
            tags: [
                {
                    skill: 'HTML5',
                },
                {
                    skill: 'CSS3',
                },
                {
                    skill: 'Flexbox',
                },
                {
                    skill: 'CSS Grid',
                },
                {
                    skill: 'applied visual design',
                },
                {
                    skill: 'algorithms',
                },
                {
                    skill: 'applied accessibility',
                },
                {
                    skill: 'responsive web design principles',
                },
            ],
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1598671811/free_code_camp/fcc-cert2_qlqzxi.jpg',
        },
        {
            id: 2,
            title: 'JavaScript Algorithms and Data Structures',
            tags: [
                {
                    skill: 'JavaScript',
                },
                {
                    skill: 'ES6',
                },
                {
                    skill: 'Regular Expressions',
                },
                {
                    skill: 'Debugging',
                },
                {
                    skill: 'data structures',
                },
                {
                    skill: 'algorithms',
                },
                {
                    skill: 'object oriented programming',
                },
                {
                    skill: 'functional programming',
                },
            ],
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1598671811/free_code_camp/fcc-cert1_iom5sr.jpg',
        },
        {
            id: 3,
            title: 'VueJS, by Udemy',
            tags: [
                {
                    skill: 'VueJS',
                },
                {
                    skill: 'Vuex',
                },
                {
                    skill: 'Vue-Router',
                },
                {
                    skill: 'components',
                },
                {
                    skill: 'data flow and communication between components',
                },
                {
                    skill: 'transitions and animations',
                },
                {
                    skill: 'directives',
                },
                {
                    skill: 'filters and mixins',
                },
                {
                    skill: 'HTTP requests',
                },
            ],
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1601355983/dev-portfolio/vuejs-certificate_sf7nmt.jpg',
        },
        {
            id: 4,
            title: 'The Complete NodeJS Developer Course (Udemy)',
            tags: [
                {
                    skill: 'NodeJS',
                },
                {
                    skill: 'Express',
                },
                {
                    skill: 'Mongoose.js',
                },
                {
                    skill: 'data and schema modeling',
                },
                {
                    skill: 'socket.io',
                },
                {
                    skill: 'json-web-tokens',
                },
                {
                    skill: 'server-side authentication',
                },
                {
                    skill: 'Postman (API testing)',
                },
                {
                    skill: 'environment variables',
                },
            ],
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1601868088/dev-portfolio/udemy-node-mongo-small_iug94s.jpg',
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
        {
            id: 2,
            title: 'Socket.io real-time chat app',
            description: 'I learned web sockets and how to build a real-time chat app using the socket.io library',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1601870335/dev-portfolio/chatapp_q2xxjv.jpg',
            icon: 'far fa-clipboard',
            link: 'https://simonsocketapp.herokuapp.com/',
        },
        {
            id: 3,
            title: 'Single Page App with VueJS',
            description: 'I built a small Vue SPA to show my love of cameras and photography.',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1598683424/dev-portfolio/leicashop_mea2uz.jpg',
            icon: 'far fa-clipboard',
            link: 'https://simonleicashop.surge.sh/',
        },
        {
            id: 4,
            title: 'React/Redux eCommerce store',
            description: "I built a full-stack e-commerce app using React, Redux, Firestore (database), and integrated the Stripe payment API. I also used Google Firebase's Auth SDK",
            imageurl: './crown.jpg',
            icon: 'far fa-clipboard',
            link: 'https://simon-crown-shop-project.herokuapp.com/',
        },
        {
            id: 5,
            title: 'RyuCave.com',
            description: 'My personal blog, ryucave.com, was built with Eleventy, a static site generator.',
            imageurl: './ryucave.jpg',
            icon: 'far fa-clipboard',
            link: 'https://ryucave.com',
        },
        {
            id: 6,
            title: 'Light and Dark Modes',
            description: 'A static web page with a theme switcher',
            imageurl: 'https://res.cloudinary.com/ryucave/image/upload/v1602472538/dev-portfolio/simon-theme-switcher_qyomtq.jpg',
            icon: 'far fa-clipboard',
            link: 'https://simonhlee97.github.io/simon-light-dark-mode',
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
