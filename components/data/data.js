const { FaReact, FaStripeS } = require('react-icons/fa');
const {
  SiRedux, SiRubyonrails, SiRuby, SiTailwindcss, SiNodedotjs, SiMui, SiMongodb, SiExpress, SiFirebase, SiJavascript, SiWebpack, SiJest, SiNextdotjs,
} = require('react-icons/si');

const data = [
  {
    id: 1,
    title: 'ECOCHART',
    description: `This is a MERN stack admin dashboard that provides a comprehensive overview of product data, client information, and sales statistics through intuitive graphics and data tables. \n\n Users can navigate through detailed visual representations of key metrics, enabling quick insights into product performance, client demographics, and sales trends. `,
    icons: <>
      <SiMongodb />
      <SiExpress />
      <FaReact />
      <SiRedux />
      <SiNodedotjs />
    </>,
    image: '/dashbmern.png',
    link: 'https://github.com/sebalp100/react-dashboard',
    demo: 'https://react-dashboard-eosin-three.vercel.app/',
  },
  {
    id: 2,
    title: 'SnapShift',
    description: 'Software-as-a-Service app with AI features, payments, and credits system. It uses Clerk for authorization and Stripe for payments. \n\n User can perform actions like restore image, remove background, recolor image, generative fill, among others.',
    icons: <>
      <SiNextdotjs />
      <FaStripeS />
      <SiMongodb />
      <SiTailwindcss />
    </>,
    image: '/sna1.png',
    link: 'https://github.com/sebalp100/imagenify',
    demo: 'https://imaginify-two-orpin.vercel.app/',
  },
  {
    id: 3,
    title: 'Rent a Car',
    description: 'This is a Car rental app that allows users to search a list of cars available and rent them, choosing a starting and a returning date. \n\n Admins can add and remove brands or cars, and cancel reservations.',
    icons: <>
      <FaReact />
      <SiRedux />
      <SiRubyonrails className="railsIcon text-gray-950" />
      <SiMui />
      <SiTailwindcss />
    </>,
    image: '/rentfront.png',
    link: 'https://github.com/sebalp100/rent-a-car-backend',
    demo: 'https://rent-a-car-frontend-sebalp100.vercel.app/',
  },
  {
    id: 4,
    title: 'Hotel Bookings',
    description: 'This is a Hotel bookings app that allows users to search a list of rooms availables and make reservations for 24hs. It also allows users to add new rooms or remove them.',
    icons: <>
      <FaReact />
      <SiRedux />
      <SiRubyonrails className="railsIcon text-gray-950" />
    </>,
    image: '/bookingf.png',
    link: 'https://github.com/sebalp100/hotel-bookings-frontend',
    demo: 'https://hotel-bookings-frontend.vercel.app',
  },
  {
    id: 5,
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
    id: 7,
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
    id: 8,
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
    id: 10,
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
    id: 11,
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
];

export default data;
