import React, {useEffect, useState} from 'react';
import axios from "../../utils/axiosInstance";
import {User} from "../../models/UserModel";


interface FollowListDialogProps{
    id: number
    path: 'followed' | 'followers';
}

const FollowListDialog: React.FC<FollowListDialogProps> = ({id, path}) => {

    const [users, setUsers] = useState<null | User[]>(null);

    async function fetchData() {
        await axios.get(`./users/${id}/${path}`, {
            headers: {
            Accept: "application/json",
        }}).then((response) => {
            const users = response.data as User[];
            setUsers(users);
            }
        ).catch(error => console.log(error));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            {users && users.map(user => (
                <article>
                    <p>{user.name}</p>
                    <button>Follow</button>
                </article>
            ))}
        </section>
    );
};

export default FollowListDialog;
