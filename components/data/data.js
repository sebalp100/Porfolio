const { FaReact, FaStripeS } = require('react-icons/fa');
const {
  SiRedux, SiRubyonrails, SiRuby, SiTailwindcss, SiNodedotjs, SiMui, SiMongodb, SiExpress, SiFirebase, SiJavascript, SiWebpack, SiJest, SiNextdotjs,
  SiAppwrite,
} = require('react-icons/si');
const { TbBrandReactNative } = require("react-icons/tb");


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
    title: 'FlickFusion',
    description: 'Mobile app built with React Native for smooth user experiences, Animatable for appealing animations, and coupled with the solid backend systems of Appwrite. It allows user to share and upload videos made with AI, and save their favourites to bookmarks.',
    icons: <>
      <SiAppwrite />
      <TbBrandReactNative />
      <SiTailwindcss />
    </>,
    image: '/ao.png',
    link: 'https://github.com/sebalp100/react-native-ai-videos',
    demo: 'https://github.com/sebalp100/react-native-ai-videos',
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    title: 'Simple Modern Design',
    description: 'This is a simple website made with React and TailwindCSS that follows the latest trends in UI design. Made completely responsive.',
    icons: <>
      <FaReact />
      <SiTailwindcss />
    </>,
    image: '/modern.png',
    link: 'https://github.com/sebalp100/modern-layout',
    demo: 'https://modern-layout-theta.vercel.app/',
  },
  {
    id: 7,
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
];

export default data;
