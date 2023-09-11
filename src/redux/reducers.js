function reducers(state = [], action) {
    console.log(state);
    if (action.type == "SAVE_USER")
        return [...state, action.user];
    else if (action.type == "DELETE_USER") {
        state.splice(action.value, 1)
        return [...state];
    }
    else
        return state;
}

export default reducers;