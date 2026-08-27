import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import Divider from "../components/ui/Divider";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const userData = { name, phone, password };

    try {
      const data = await register(userData);
      if (data?.insertedId) {
        alert(data?.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full rounded border border-secondary/30 p-3 md:p-8">
      {/* Heading */}
      <div className="mb-8">
        <Heading as={3} className="mb-1">
          Create an Account
        </Heading>

        <Paragraph>Register to start sending parcels with BoxDrop.</Paragraph>
      </div>

      {/* Register Form */}
      <form onSubmit={handleRegister} className="space-y-5">
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
          <Label htmlFor="phone">Phone Number</Label>

          <Input
            id="phone"
            type="number"
            name="phone"
            placeholder="Enter your phone number"
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
        <Link to="/login" className="font-medium text-accent hover:underline">
          Login
        </Link>
      </Paragraph>
    </div>
  );
};

export default RegisterPage;
