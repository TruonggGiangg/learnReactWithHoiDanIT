import Input from "antd/es/input/Input";
import { Button, notification } from 'antd';
import { useState } from "react";

import { createUser } from "../../services/api.services";

const UserForm = () => {
    const [fullName, setFullName] = useState("11");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = async () => {


        const res = await createUser(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Done!!!"
            })
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

    }

    return (
        <div className="user-form" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <div>
                    <span>Full name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                        placeholder="Enter your full name"
                        maxLength={50}
                        allowClear
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                        placeholder="Enter your email"
                        type="email"
                        allowClear
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                        placeholder="Enter your password"
                        maxLength={20}
                    />
                </div>
                <div>
                    <span>Phone </span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                        placeholder="Enter your phone "
                        type="tel"
                        maxLength={15}
                        allowClear
                    />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={() => { handleClick() }}>
                        Primary Button</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;