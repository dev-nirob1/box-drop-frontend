import { Link, useNavigate } from "react-router";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const password = e.target.password.value;

    const loginInfo = { phone, password };
    // console.log(loginInfo);
    try {
      const data = await login(loginInfo);
      if (data?.user?.userId) {
        alert(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full border border-secondary/30 rounded p-3 md:p-8">
      {/* Heading */}
      <div className="mb-8">
        <Heading as={3} className="mb-1">
          Welcome Back
        </Heading>

        <Paragraph>Login to your account to continue.</Paragraph>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-5">
        {/* Email */}
        <div>
          <Label htmlFor="email">Phone Number</Label>

          <Input
            id="phone"
            type="number"
            name="phone"
            placeholder="Enter your Phone number"
          />
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>

      {/* Register */}
      <Paragraph className="mt-6 text-center text-sm">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-accent hover:underline"
        >
          Register
        </Link>
      </Paragraph>
    </div>
  );
};

export default LoginPage;
