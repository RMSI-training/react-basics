function reducers(state = {
    token: '',
    users: []
}, action) {
    console.log(state);
    if (action.type == "SAVE_USER")
        return Object.assign({}, Object.assign(state, { users: [...state.users, action.user] }));
    else if (action.type == "DELETE_USER") {
        state.users.splice(action.value, 1)
        return Object.assign({}, Object.assign(state, { users: state.users }));
    }
    else if (action.type === "SAVE_TOKEN") {
        return Object.assign(state, { token: action.value });
    }
    else
        return state;
}

export default reducers;