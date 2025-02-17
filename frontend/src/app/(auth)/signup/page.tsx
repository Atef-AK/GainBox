export default function SignupPage() {
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }