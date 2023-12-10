const { FaReact } = require('react-icons/fa');
const {
  SiRedux, SiRubyonrails, SiRuby, SiTailwindcss, SiFirebase, SiJavascript, SiHtml5, SiCss3, SiWebpack, SiJest,
} = require('react-icons/si');

const data = [
  {
    id: 1,
    title: 'Rent a Car',
    description: 'This is a Car rental app that allows users to search a list of cars available and rent them, choosing a starting and a returning date. Admins can add and remove cars.',
    icons: <>
      <FaReact />
      <SiRedux />
      <SiRubyonrails className="railsIcon text-gray-950" />
    </>,
    image: '/renprev.png',
    link: 'https://github.com/sebalp100/rent-a-car-backend',
    demo: 'https://rent-a-car-frontend-sebalp100.vercel.app/',
  },
  {
    id: 2,
    title: 'Hotel Bookings',
    description: 'This is a Hotel bookings app that allows users to search a list of rooms availables and make reservations for 24hs. It also allows user to add new rooms or remove them.',
    icons: <>
      <FaReact />
      <SiRedux />
      <SiRubyonrails className="railsIcon text-gray-950" />
    </>,
    image: '/hotelb.png',
    link: 'https://github.com/sebalp100/hotel-bookings-frontend',
    demo: 'https://hotel-bookings-frontend.vercel.app',
  },
  {
    id: 3,
    title: 'BudgetMate',
    description: 'Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    icons: <>
      <SiRuby />
      <SiRubyonrails className="railsIcon text-gray-950" />
    </>,
    image: '/budget.png',
    link: 'https://github.com/sebalp100/budget-mate',
    demo: 'https://budgetmate.onrender.com/',
  },
  {
    id: 4,
    title: 'Bookstore',
    description: 'Bookstore: Simple app made with React that allows users to create and remove books, and displays a list of them. The app uses Redux to create a global state and store the data.',
    icons: <>
      <FaReact />
      <SiRedux />
    </>,
    image: '/bookstore.png',
    link: 'https://github.com/sebalp100/Bookstore',
    demo: 'https://simple-bookstore.onrender.com/',
  },
  {
    id: 5,
    title: 'Rails Blog App',
    description: 'This is a simple blog app made in Rails that will show the list of posts and empower readers to interact with them by adding comments and liking posts. It also has active storage.',
    icons: <>
      <SiRuby />
      <SiRubyonrails className="railsIcon text-gray-950" />
    </>,
    image: '/post2.png',
    link: 'https://github.com/sebalp100/blog-app-ror',
    demo: 'https://rails-production-245a.up.railway.app/',
  },
  {
    id: 6,
    title: 'Space Travelers',
    description: 'This is a website that allows users to reserve and book their favorite rockets, missions and dragons spaceships. The app displays real live data from the SpaceX API using a Redux store.',
    icons: <>
      <FaReact />
      <SiRedux />
      <SiTailwindcss />
    </>,
    image: '/spacetra.png',
    link: 'https://github.com/sebalp100/space-travelers',
    demo: 'https://space-travelers-iyfi.onrender.com/',
  },
  {
    id: 7,
    title: 'Moons of the Solar system',
    description: 'This is a simple mobile website that allows users to search for all the moons in the solar system for each planet. It uses real data from The Solar System OpenData API and a Redux store.',
    icons: <>
      <FaReact />
      <SiRedux />
    </>,
    image: '/moons.png',
    link: 'https://github.com/sebalp100/Metrics-webapp',
    demo: 'https://moons-of-the-solar-system.onrender.com/',
  },
  {
    id: 8,
    title: 'Simple Chat',
    description: 'This is a website that allows users to chat with one another using real-time Firebase data and React hooks. The app allows users to look up their previous conversations with other people.',
    icons: <>
      <FaReact />
      <SiFirebase />
    </>,
    image: '/chat.png',
    link: 'https://github.com/sebalp100/Chat-app',
    demo: 'https://simple-chat-app-puqe.onrender.com/',
  },
  {
    id: 9,
    title: 'New Movies',
    description: 'Website that has a desktop and mobile version and allows users to interact by giving a like to their favorite movies and checking for other users comments, as well as adding their own.',
    icons: <>
      <SiJavascript />
      <SiJest />
      {' '}
      <SiWebpack />
      {' '}
    </>,
    image: '/newmovies.png',
    link: 'https://github.com/YKerroum/New-movies',
    demo: 'https://ykerroum.github.io/New-movies/dist/',
  },
  {
    id: 10,
    title: 'Contactology Without Borders',
    description: 'Conference page created with the mobile-first approach for the Home and About sections. Using JavaScript, I generated an "Speakers" section by accesing the data stored in an JS Object.',
    icons: <>
      <SiJavascript />
      <SiHtml5 />
      {' '}
      <SiCss3 />
      {' '}
    </>,
    image: '/contacto.png',
    link: 'https://github.com/sebalp100/Module-1-capstone-project',
    demo: 'https://sebalp100.github.io/Module-1-capstone-project/html/main.html',
  },
];

export default data;
