import { useDispatch, useSelector } from "react-redux";
import { deleteUser_action } from "./redux/actions";

export default function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((reduxStoreState)=> reduxStoreState).users;
    return (<table className="table table-striped">
        <thead><th>firstname</th>
            <th>Last Name</th>
            <th>Gender</th></thead>
        <tbody>
            {users.map((user, index) => {
                console.log(user);
                return (<tr key={user.id}><td> {user.firstname}</td>
                    <td>{user.lastname} </td>
                    <td>{user.gender}</td>
                    <td><button className="btn btn-danger" onClick={() => deleteUser(user.id, index)}>X</button></td>
                </tr>)
            })}
        </tbody>
    </table>)

    async function deleteUser(id, index) {
        try {
            const response = await fetch(process.env.REACT_APP_URL + 'customer/' + id, {
                method: 'DELETE'
            });
            dispatch(deleteUser_action(index));
            // getUsers();
        } catch (error) {

        }

    }
}