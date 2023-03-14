import { useSelector } from "react-redux"

function Users() {
    const users = useSelector((state) => state.form.value)

    return(
        <div>
            {users.map((user, index) => (
                <h1 key={index}>{user.nom + ' ' + user.prénom + ' ' + user.age} ans</h1>
            ))}
        </div>
    )
}

export default Users