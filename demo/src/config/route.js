import Search from '../search';
import Contact from '../contact';
import Howto from '../howto';
import MainPage from '../main/main';
import Ranking from '../ranking';

import StaticPage from '../md/index';
import Privacy from '../md/privacy.md';

export default [
    {
        path: "/",
        component: MainPage,
        exact: true,
        hide: true,
        caption: "홈"
    },
    {
        path: "/how-to",
        caption: "슬기로운 분리수거",
        component: Howto
    },
    {
        path: "/ranking",
        caption: "편리한 에코 분야별 순위",
        component: Ranking
    },
    {
        path: "/contact",
        caption: "문의하기",
        component: Contact
    },
    {
        path: "/privacy",
        caption: "개인정보보호정책",
        component: StaticPage,
        params: {
            md: Privacy
        }
    }
];