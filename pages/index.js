export default function Login({ handleLogin, handleLoginChange }) {
  
  return (
    <>
      <h1>Chat</h1>

      <form onSubmit={handleLogin}>
        <p>Enter your name to start:</p>
        <input type="text" onChange={handleLoginChange} placeholder="Jony Hawk" />
        <button type="submit">Sign in to get started</button>
      </form>
    </>
  )
}
