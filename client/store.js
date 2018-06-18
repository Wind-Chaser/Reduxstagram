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

const store = createStore(rootReducer,defaultStore);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;