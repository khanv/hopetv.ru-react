import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    Home,
    WatchUs,
    Contacts,
    About,
    NotFound
} from 'containers';

export default () => {
    return (
        <Route path="/" component={ App }>
            <IndexRoute component={ Home }/>
            <Route path="/watch-us" component={ WatchUs }/>
            <Route path="/contacts" component={ Contacts }/>
            <Route path="/about" component={ About }/>
            <Route path="*" component={ NotFound } status={ 404 }/>
        </Route>
    );
};
