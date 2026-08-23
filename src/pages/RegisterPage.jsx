import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import Divider from "../components/ui/Divider";

const RegisterPage = () => {
  return (
    <div className="w-full rounded border border-secondary/30 p-3 md:p-8">
      {/* Heading */}
      <div className="mb-8">
        <Heading as={3} className="mb-1">
          Create an Account
        </Heading>

        <Paragraph>
          Register to start sending parcels with BoxDrop.
        </Paragraph>
      </div>

      {/* Register Form */}
      <form className="space-y-5">
        {/* Name */}
        <div>
          <Label htmlFor="name">Full Name</Label>

          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>

          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

        {/* Register Button */}
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>

      {/* Divider */}
      <Divider />

      {/* Google Register */}
      <Button
        type="button"
        variant="secondary"
        className="w-full border border-secondary/30 text-secondary hover:border-secondary/30 hover:bg-secondary/5 hover:text-primary"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </Button>

      {/* Login */}
      <Paragraph className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-accent hover:underline"
        >
          Login
        </Link>
      </Paragraph>
    </div>
  );
};

export default RegisterPage;