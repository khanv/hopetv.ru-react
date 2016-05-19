import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    Home,
    WatchUs,
    NotFound
} from 'containers';

export default () => {
    return (
        <Route path="/" component={ App }>
            <IndexRoute component={ Home }/>
            <Route path="/watch-us*" component={ WatchUs }/>
            <Route path="*" component={ NotFound } status={ 404 }/>
        </Route>
    );
};
