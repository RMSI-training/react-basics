function reducers(state = [], action) {
    console.log(state);
    if (action.type == "SAVE_USER")
        return [...state, action.user];
    else
        return state;
}

export default reducers;