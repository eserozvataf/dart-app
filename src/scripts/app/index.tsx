/// <reference path="../../scripts.typings/browser/index.d.ts" />
import * as $ from 'jQuery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { App } from './components/App.tsx';
import { Home } from './components/App/Home.tsx';
import { EntriesByProperty } from './components/App/EntriesByProperty.tsx';
import { EntriesByTag } from './components/App/EntriesByTag.tsx';
import { Pages } from './components/App/Pages.tsx';
import { PageByName } from './components/App/PageByName.tsx';

// render app node
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="properties/:property/:value" component={EntriesByProperty} />
            <Route path="tags/:tag" component={EntriesByTag} />
            <Route path="pages" component={Pages} />
            <Route path="pages/:name" component={PageByName} />
        </Route>
    </Router>,
    document.getElementsByTagName('app')[0]
);

// events
$(document.body).on('click', '.md a', (ev) => {
    const linkUrl = $(ev.target).attr('href');

    if (linkUrl.substring(0, 8) == '#/pages/') {
        const url = `/pages/${linkUrl.substring(8)}`;

        hashHistory.push(url);

        return false;
    }
});

// exports
global.$ = $;
