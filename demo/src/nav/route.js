import React from 'react';
import { Route, Link } from 'react-router-dom';

import router from '../config/route'

const Links = (Elem) => {
    return router.map((item) => {
        if(item.hide || !item.path || !item.caption) return null;
        if(Elem) return <Elem><Link to={item.path}>{item.caption}</Link></Elem>
        return <Link to={item.path}>{item.caption}</Link>;
    })
}

const Routes = () => {
    return router.map((item) => {
        if(!item.path || !item.component) return null;
        return <Route path={item.path} exact={item.exact || false}>
            <item.component params={item.params}/>
        </Route>;
    })
}

export { Link, Links, Routes };