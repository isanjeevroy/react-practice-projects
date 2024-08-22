import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
        <div>
            <h1>Total Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="git picture" width={400} height={400} />
        </div>
    )
}

export default Github

export const gitInfo = async () => {
    const response = await fetch('https://api.github.com/users/isanjeevroy')
    return response.json()
}