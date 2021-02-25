import About from '../Components/About'
import Contact from '../Components/Contact'
import LandingPage from '../Components/LandingPage'
import ArticleCard from '../Components/ArticleCard'
import Tutorial from '../Components/Tutorial'
import SearchResults from '../Components/SearchResults'
import SavedArticles from '../Components/SavedArticles'

const links =[
    {
        link:'/',
        title: 'Home',
        component: LandingPage,
        isExact: true,
        isLink: true
    },
    {
        link: '/Tutorial',
        title:'How It Works?',
        component: Tutorial,
        isExact: true,
        isLink: true
    },
    {
        link: '/Editing',
        title: 'Articles',
        component: ArticleCard,
        isExact: true,
        isLink: false
    },
    {
        link: '/About',
        title: 'About',
        component: About,
        isExact: true,
        isLink: true
    },
    {
        link: '/Contact',
        title: 'Contact',
        component: Contact,
        isExact: true,
        isLink: true
    },
    {
        link: '/Results',
        title: 'Results',
        component: SearchResults,
        isExact: true,
        isLink: false
    },
    {
        link: '/Saved',
        title:'Saved Articles',
        component: SavedArticles,
        isExact: true,
        isLink: true
    }
];

export default links;