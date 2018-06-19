import { createStore, compose  } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index.js';
import comments from './data/comments.js';
import posts from './data/posts.js';

const defaultStore = {
    posts,
    comments
}

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultStore, enhancers);

if(module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer)
    });
}

export const history = syncHistoryWithStore(browserHistory,store);

export default store;