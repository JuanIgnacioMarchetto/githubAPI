import React, { useState, useEffect } from 'react';

const GitHubSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const searchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data.items);
                } else {
                    console.error('Error al buscar usuarios');
                }
            } catch (error) {
                console.error('Error de red:', error);
            } finally {
                setLoading(false);
            }
        };

        if (searchQuery.trim() !== '') {
            searchUsers();
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <h1>Buscar Usuarios de GitHub</h1>
            <input
                type="text"
                placeholder="Buscar usuarios..."
                value={searchQuery}
                onChange={handleInputChange}
                style={{ marginBottom: '10px' }}
            />
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ul>
                    {searchResults.map(user => (
                        <li key={user.id}>
                            <img src={user.avatar_url} alt="Avatar" style={{ width: '50px', borderRadius: '50%' }} />
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GitHubSearch;




