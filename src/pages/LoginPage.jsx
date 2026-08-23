import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import Divider from "../components/ui/Divider";

const LoginPage = () => {
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
      <form className="space-y-5">
        {/* Email */}
        <div>
          <Label htmlFor="email">Email Address</Label>

          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
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

      {/* Divider */}
      <Divider />

      {/* Google Login */}
      <Button
        variant="secondary"
        className="w-full border border-secondary/30 hover:border-secondary/30 hover:bg-secondary/3 text-secondary hover:text-primary"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </Button>

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
