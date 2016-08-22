/// <reference path="../../scripts.typings/browser/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { App } from './components/App.tsx';
import { Home } from './components/App/Home.tsx';
import { EntriesByCategory } from './components/App/EntriesByCategory.tsx';
import { EntriesByTag } from './components/App/EntriesByTag.tsx';
import { Pages } from './components/App/Pages.tsx';
import { PageByName } from './components/App/PageByName.tsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="categories/:key/:value" component={EntriesByCategory} />
            <Route path="tags/:tag" component={EntriesByTag} />
            <Route path="pages" component={Pages} />
            <Route path="pages/:name" component={PageByName} />
        </Route>
    </Router>,
    document.getElementsByTagName('app')[0]
);
