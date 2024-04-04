import React, { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
      // eslint-disable-next-line
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        // проверка имени пользователя и пароля
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            alert('Неправильное имя пользователя или пароль');
        }
    }

    return (
        <main>
            <h1>Please log in</h1>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={handleUsernameChange} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={handlePasswordChange} 
            />
            <button onClick={handleLogin}>Login</button>
        </main>
    );
}

export default LoginPage;
