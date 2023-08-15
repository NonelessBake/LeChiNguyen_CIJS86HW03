import { Link, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <h2>This is Auth Page</h2>
      <p>
        <Link to="/auth/login">Login</Link>
      </p>
      <p>
        <Link to="/auth/signup">Singup</Link>
      </p>
      <Outlet />
    </div>
  );
};

export default Auth;
