import { useSelector } from "react-redux";

export default function UserList() {
    const users = useSelector((reduxStoreState)=> reduxStoreState);
    // const [users, setUsers] = useState([]);
    // async function getUsers() {
    //     try {
    //         const response = await axios(process.env.REACT_APP_URL + "users");
    //         const users = response.data;
    //         setUsers(users);
    //         dispatch(user_count(users.length));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
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
                    <td><button className="btn btn-danger" onClick={() => deleteUser(user.id)}>X</button></td>
                </tr>)
            })}
        </tbody>
    </table>)

    async function deleteUser(id) {
        try {
            const response = await fetch(process.env.REACT_APP_URL + 'users/' + id, {
                method: 'DELETE'
            });
            // getUsers();
        } catch (error) {

        }

    }
}