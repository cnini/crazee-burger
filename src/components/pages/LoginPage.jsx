import { useState } from 'react';

export default function LoginPage() {
  const [name, setName] = useState("");

  const handleChange = (inputName) => { 
    setName(inputName);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert(`Bonjour ${name}`);
    setName("");
  }

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Entrez votre prénom"
          value={name}
          onChange={(event) => handleChange(event.target.value)}
          required />

        <button>Accédez à votre espace</button>
      </form>
    </>
  )
}
