
export function user_count(count) {
    return {
        type: 'count',
        value: count
    }
}

function sendSavedUser(user1){
    return {
        type:"SAVE_USER",
        user:user1
    }
}
export default sendSavedUser;