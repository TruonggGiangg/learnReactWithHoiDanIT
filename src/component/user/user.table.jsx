import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
    ];



    const [dataUser, setDataUser] = useState([]);

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUser(res.data)
        console.log('2')
    }
    //amount
    //update ()
    useEffect(() => { loadUser(); console.log('1') }, [])




    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={'_id'} />
    )
}

export default UserTable