import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";

const UsersPage = () => {
    return (
        <div style={{ marginTop: '45px', padding: '20px' }}>
            <UserForm />
            <UserTable />
        </div>
    )
}

export default UsersPage;