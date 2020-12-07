import React, { useEffect, useState } from "react";
import {
  fetchUser,
} from "./../../services/user.service";
export default function Profile(props) {
    const [user,setUser] = useState({});
    const [friends, setFriends] = useState({});
    useEffect(() => {
        async function getUser() {
            try {
                const { username }= props.match.params;
                const result = await fetchUser(username);
                setUser(result.data.user);
                setFriends(result.data.friends);
            } catch (error) {
            }
        }
          getUser();
        }, []);
        
    return (
        <div>
        Hello {user.username}
        </div>
    );
}