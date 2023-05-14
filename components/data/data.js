const { FaReact } = require("react-icons/fa");
const { SiRedux, SiRubyonrails, SiRuby } = require("react-icons/si");

const data = [
  {
    id: 1,
    title: 'Hotel Bookings',
    description: 'This is a Hotel bookings app that allows users to search a list of rooms availables and make reservations for 24hs. It also allows user to add new rooms or remove them.',
    icons: <><FaReact /><SiRedux /><SiRubyonrails className="railsIcon text-gray-950" /></>,
    image: "/hotelb.png",
    link: 'https://github.com/sebalp100/hotel-bookings-frontend'
  },
  {
    id: 2,
    title: 'BudgetMate',
    description: 'Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    icons: <><SiRuby /><SiRubyonrails className="railsIcon text-gray-950" /></>,
    image: '/budget.png',
    link: 'https://github.com/sebalp100/budget-mate'
  },
  {
    id: 3,
    title: 'Bookstore',
    description: 'Bookstore: Simple app made with React that allows users to create and remove books, and displays a list of them. The app uses Redux to create a global state and store the data.',
    icons: <><FaReact /><SiRedux /></>,
    image: '/bookstore.png',
    link: 'https://github.com/sebalp100/Bookstore'
  },
  {
    id: 4,
    title: 'Hotel Bookings',
    description: 'This is a Hotel bookings app that allows users to search a list of rooms availables and make reservations for 24hs. It also allows user to add and remove rooms.',
    icons: <><FaReact /><SiRedux /><SiRubyonrails /></>,
    image: '/hotelb.png',
    link: 'https://github.com/sebalp100/hotel-bookings-frontend'
  },
  {
    id: 5,
    title: 'Hotel Bookings',
    description: 'This is a Hotel bookings app that allows users to search a list of rooms availables and make reservations for 24hs. It also allows user to add and remove rooms.',
    icons: <><FaReact /><SiRedux /><SiRubyonrails /></>,
    image: '/hotelb.png',
    link: 'https://github.com/sebalp100/hotel-bookings-frontend'
  }
]

export default data;
