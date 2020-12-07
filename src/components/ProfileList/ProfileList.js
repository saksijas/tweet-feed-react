import React, { useEffect, useState } from "react";
import {fetchUsers} from '../../services/user.service';

export default function ProfileList(props) {
    const [profiles, setProfiles] = useState([]);
  
    useEffect(() => {
        async function getUsers() {
            try {
                const result = await fetchUsers();
                setProfiles(result.data);
            } catch (error) {

            }
        }
          getUsers();
    }, []);
    return (
      <div>{profiles.length}</div>
    );
  }