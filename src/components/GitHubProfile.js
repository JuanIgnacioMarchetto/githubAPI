import React, { useState, useEffect } from 'react';

const GitHubProfile = ({ username }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Error al obtener datos del usuario');
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        };

        fetchUserData();
    }, [username]);

    return (
        <div>
            <h1 className=''>Perfil de GitHub</h1>
            {userData ? (
                <div>
                    <div className='profile'> 
                        <img src={userData.avatar_url} alt="Avatar" style={{ width: '100px', borderRadius: '50%' }} />
                    <h2>{userData.name}</h2>
                    <p>{userData.bio}</p>
                    </div>
                   
                    <p>Seguidores: {userData.followers}</p>
                    <p>Repositorios públicos: {userData.public_repos}</p>
                    <p>Linkedin:  <a href={userData.blog}>{userData.blog} linkedin.com/in/juan-ignacio-marchetto-336a2a57/</a></p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};


export default GitHubProfile;



