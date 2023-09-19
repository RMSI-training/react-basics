
export function user_count(count) {
    return {
        type: 'count',
        value: count
    }
}
export function saveToken(token) {
    return {
        type: "SAVE_TOKEN",
        value: token
    }
}
export function deleteUser_action(index) {
    return {
        type: "DELETE_USER",
        value: index
    }
}
function sendSavedUser(user1) {
    return {
        type: "SAVE_USER",
        user: user1
    }
}
export default sendSavedUser;