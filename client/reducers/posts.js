function posts (state = [],action) {
    switch(action.type) {
        case 'INCREMENT_LIKES': {
            console.log("INCREMENT LIKES");
            const i = action.index;
            return [
                ...state.slice(0, i),
                Object.assign({},state[i],{likes: state[i].likes + 1}),
                ...state.slice(i + 1),
            ]
        }
        default :
            return state;
    }
}

export default posts;