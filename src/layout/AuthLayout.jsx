import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
    <h1> auth side bar</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
