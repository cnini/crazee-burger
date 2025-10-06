import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function LoginForm() {
    const [name, setName] = useState(""); 
    let navigate = useNavigate(); 

    const handleChange = (inputName) => { 
        setName(inputName);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setName("");
        navigate(`/order/${name}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>        
                <h1>Bienvenue chez nous !</h1>
                <br />
                <h2>Connectez-vous</h2>

                <input 
                    type="text" 
                    placeholder="Entrez votre prénom"
                    value={name}
                    onChange={(event) => handleChange(event.target.value)}
                    required 
                />

                <button>Accédez à votre espace</button>
            </form>
        </>
    )
}
