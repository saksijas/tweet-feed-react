import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/user.service'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import ProfileThumbnail from '../ProfileThumbnail/ProfileThumbnail'

export default function ProfileList(props) {
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)
    useEffect(() => {
        async function getUsers() {
            try {
                const result = await fetchUsers()
                setProfiles(result.data)
                setLoading(false)
                setError(undefined)
            } catch (error) {
                setError(error)
                setLoading(true)
            }
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
            {error && <ErrorBoundary error={error}></ErrorBoundary>}
        </div>
    )
}
