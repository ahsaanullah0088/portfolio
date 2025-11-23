const CATEGORIES = [
  'DEVELOPMENT',
  'WEB DESIGN',
  'APPLICATION',
  'DESIGN',
  'FRONTEND',
  'COLLABORATION',
];

const data = [
  {
    id: 1,
    year: '2024',
    date: '12/01/2025',
    category: 'APPLICATION',
    title: 'Prescripto – Doctor Appointment App',
    image: 'prep1.png',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Auth',
      'Stripe',
      'Razorpay',
      'Tailwind',
      'Axios',
      'Vercel',
      'REST API',
    ],
    desc: `Prescripto is a full-stack doctor appointment web application built using the MERN stack. 
It supports three roles — Patient, Doctor, and Admin — each with a personalized dashboard. 
Patients can book appointments, make online payments, and manage their profiles. 
Doctors can manage schedules, view bookings, and update availability. 
Admins can manage doctors, appointments, and see complete analytics.

The app includes secure JWT authentication, an intuitive UI, appointment scheduling, 
profile management, and full payment integration via Stripe and Razorpay. 
It is fully responsive and scalable for real-world medical booking needs.`,
    links: {
      code: 'https://github.com/yourusername/prescripto',
      page: 'https://yourdeploymentlink.com',
    },
  },
  //   {
  //     id: 101,
  //     year: '2023',
  //     date: '06/03/2023',
  //     category: 'COLLABORATION',
  //     title: 'DustBusters',
  //     image: 'dustBusters.webp',
  //     technologies: ['ReactJs', 'Typescript', 'Tailwind', 'Java', 'Spring Boot'],
  //     desc: `A collaborative project developed during No Country's cohort 8 over 5 weeks, with a team of 8.
  // I worked as a frontend developer and gained valuable experience in teamwork and soft skills.

  // The project is a cleaning service platform allowing clients to schedule and request cleaning services
  // for homes or workplaces.`,
  //     links: {
  //       code: 'https://github.com/No-Country/c9-32-t-javareact',
  //       page: 'https://dust-busters.netlify.app',
  //     },
  //   },
  {
    id: 3,
    year: '2024',
    date: '23/11/2024',
    category: 'APPLICATION',
    title: 'Eshop – Multi-Vendor Platform',
    image: 'eshop.png',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux',
      'Tailwind CSS',
      'Axios',
      'Stripe',
      'JWT Auth',
      'Vercel',
      'WebSockets',
      'Cloudinary',
    ],
    desc: `Eshop is a complete multi-vendor e-commerce platform connecting buyers, sellers, and admins. 
It features multi-role dashboards, product management, real-time messaging, notifications, and analytics.

Buyers can browse products, filter/search items, add to cart, and checkout securely.
Sellers manage products, track sales, handle orders, and access insights.
Admins manage users, products, and monitor platform activity.

Built with React.js, Node.js, Express.js, MongoDB, Redux, and Tailwind CSS, 
it includes JWT authentication, Stripe payments, Cloudinary for image uploads, and WebSockets for messaging. 
Deployed on Vercel.`,
    links: {
      code: 'https://github.com/ahsaanullah0088/Multivendor-MERN',
      page: 'https://client-eight-coral.vercel.app/',
    },
  },
  {
    id: 2,
    year: '2024',
    date: '23/09/2024',
    category: 'APPLICATION',
    title: 'Video Conferencing App',
    image: 'zoom1.png',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Clerk Auth',
      'Tailwind',
      'MUI',
      'Axios',
      'Vercel',
      'Netlify',
      'REST API',
    ],
    desc: `A full-featured video conferencing web application (Zoom Clone) built with the MERN stack. 
Key features include user authentication via Clerk, creating and joining meetings, personal meeting rooms, 
recording sessions, scheduling future meetings, viewing past meetings, and live video calls.

It includes a sidebar, navbar, reusable modal system, and fully responsive UI. 
Deployment allows seamless real-time communication for multiple users.`,
    links: {
      code: 'https://github.com/ahsaanullah0088/zoom-clone',
      page: 'https://zoom-clone-nu-two.vercel.app/',
    },
  },
  {
    id: 4,
    year: '2025',
    date: '23/11/2025',
    category: 'FRONTEND',
    title: 'Admin Dashboard',
    image: 'dash5.png',
    technologies: [
      'ReactJs',
      'Tailwind CSS',
      'Material UI',
      'Responsive Design',
      'Frontend',
    ],
    desc: `A frontend Admin Dashboard built using React, Tailwind CSS, and Material UI. 
It allows viewing and managing website data efficiently. 
Includes four main pages: Home, Users, Products, and Settings. 
Fully responsive and user-friendly.`,
    links: {
      code: 'https://github.com/ahsaanullah0088/react-admin-dashboard-',
      page: 'https://dashboard-react11.netlify.app/',
    },
  },
  {
    id: 5,
    year: '2025',
    date: '23/11/2025',
    category: 'APPLICATION',
    title: 'The Beach Resort App',
    image: 'Resort-p1.jpg',
    technologies: [
      'ReactJs',
      'Material UI',
      'Responsive Design',
      'Frontend',
      'Netlify',
    ],
    desc: `A web app focused on seamless booking for beachside resorts. 
Users can reserve rooms, check availability, and access resort information for a smooth stay.`,
    links: {
      code: 'https://github.com/ahsaanullah0088/React-resorts',
      page: 'https://resortsbyahsaan-550a33.netlify.app/',
    },
  },
  {
    id: 7,
    year: '2025',
    date: '23/11/2025',
    category: 'WEB DESIGN',
    title: 'Tours Website',
    image: 'p4-1.png',
    technologies: [
      'ReactJs',
      'Frontend',
      'Responsive Design',
      'Web Design',
      'Netlify',
    ],
    desc: `A travel website built with ReactJs showcasing popular destinations, packages, and tours. 
Fully responsive and visually appealing for smooth user navigation.`,
    links: {
      code: 'https://github.com/ahsaanullah0088/Tours',
      page: 'https://deluxe-lebkuchen-85e4ef.netlify.app/?#',
    },
  },
  {
    id: 8,
    year: '2025',
    date: '23/11/2025',
    category: 'WEB DESIGN',
    title: 'StartUps Website',
    image: 's1.png',
    technologies: [
      'ReactJs',
      'NodeJs',
      'Frontend',
      'Backend',
      'Responsive Design',
      'Animations',
      'Netlify',
    ],
    desc: `A responsive and user-friendly website for startups. 
It has four pages: Home, About, Services, and Contact. 
Animations and transitions enhance user engagement.`,
    links: {
      code: 'https://github.com/ahsaanullah0088/startup',
      page: 'https://monumental-pegasus-1080a3.netlify.app/',
    },
  },
  //   {
  //     id: 102,
  //     year: '2023',
  //     date: '30/04/2023',
  //     category: 'COLLABORATION',
  //     title: 'CompraListo',
  //     image: 'compraListo.webp',
  //     technologies: ['ReactJs', 'JS', 'Tailwind', 'Java', 'Spring Boot'],
  //     desc: `A collaborative project built over 5 weeks with a team of 9 developers.
  // I worked as a frontend developer.

  // The project is a web app for creating, saving, and sharing shopping lists.
  // Users can access it from any device, share lists with family, generate PDFs, share via WhatsApp, and calculate expenses.`,
  //     links: {
  //       code: 'https://github.com/No-Country/s7-11-t-javareact',
  //       page: 'https://compralisto0.vercel.app/',
  //     },
  //   },
  //   {
  //     id: 103,
  //     year: '2023',
  //     date: '10/06/2023',
  //     category: 'COLLABORATION',
  //     title: 'Pigmeo',
  //     image: 'pigmeo.jpg',
  //     technologies: ['ReactJs', 'Typescript', 'JS', 'Tailwind'],
  //     desc: `A collaborative project completed over 5 weeks with a team of 12 developers.
  // I worked as a frontend developer.

  // The app is a mobile-responsive finance management platform, allowing users to manage finances and transactions safely and quickly.`,
  //     links: {
  //       code: 'https://github.com/No-Country/s8-14-t-mern',
  //       page: 'https://pigmeo-app.netlify.app/',
  //     },
  //   },
];

export default data;
