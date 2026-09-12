import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Label from "../../components/ui/Label";
import ErrorText from "../../components/ui/ErrorText";
import { useAuth } from "../../hooks/useAuth";
import Swal from "sweetalert2";

const PHONE_REGEX = /^01[3-9]\d{8}$/;
const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!name || !phone || !password || !confirmPassword) {
      return setError("All fields are required");
    }

    if (!PHONE_REGEX.test(phone)) {
      return setError("Enter a valid Bangladeshi phone number");
    }

    if (!PASSWORD_REGEX.test(password)) {
      return setError(
        "Password must be at least 6 characters and include 1 capital letter, 1 number and 1 special character",
      );
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    const userData = { name, phone, password };

    try {
      const data = await register(userData);
      if (data?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: data?.message || "You can now log in with your credentials.",
          confirmButtonColor: "#FA4318",
        }).then(() => {
          navigate("/login");
        });
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
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

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              className="pr-11"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary cursor-pointer"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

        {error && <ErrorText>{error}</ErrorText>}

        {/* Register Button */}
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>

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
