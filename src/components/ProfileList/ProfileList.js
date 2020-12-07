import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/user.service'
import ProfileThumbnail from '../ProfileThumbnail/ProfileThumbnail'

export default function ProfileList(props) {
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getUsers() {
            try {
                const result = await fetchUsers()
                setProfiles(result.data)
                setLoading(false)
            } catch (error) {}
        }
        getUsers()
    }, [])
    return (
        <div>
            {!loading && (
                <div>
                    {profiles.map((profile) => (
                        <ProfileThumbnail profile={profile} />
                    ))}{' '}
                </div>
            )}
        </div>
    )
}
