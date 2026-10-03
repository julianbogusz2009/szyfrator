import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Loguję z danymi:", { login, password });
    // tu później podłączysz backend
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
      <h2>Logowanie</h2>

      <label>
        Email
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
        
      <label>
        Hasło
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit">Zaloguj</button>
    </form>
  );
}
