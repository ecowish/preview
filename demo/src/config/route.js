import Search from '../search';
import Contact from '../contact';

import StaticPage from '../md/index';
import Privacy from '../md/privacy.md';

export default [
    {
        path: "/",
        component: Search,
        exact: true,
        hide: true,
        caption: "Home"
    },
    {
        path: "/mediacast",
        caption: "Media Cast"
    },
    {
        path: "/how-to",
        caption: "How-To Recycle by Products"
    },
    {
        path: "/ranking",
        caption: "Eco-Efficiency Ranking"
    },
    {
        path: "/contact",
        caption: "Contact Us",
        component: Contact
    },
    {
        path: "/privacy",
        caption: "Privacy Policy",
        component: StaticPage,
        params: {
            md: Privacy
        }
    }
];