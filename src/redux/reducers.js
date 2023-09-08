function reducers(state =1, action) {
    console.log(action);
    if(action)
        return action.value;
    else
        return state;
}
export default reducers;