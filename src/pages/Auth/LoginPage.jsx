import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Paragraph from "../../components/ui/Paragraph";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Label from "../../components/ui/Label";
import ErrorText from "../../components/ui/ErrorText";
import { useAuth } from "../../hooks/useAuth";
import PageHeader from "../../components/widget/PageHeader";

const LoginPage = () => {
  const { login, setUser } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // login form handle
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const phone = e.target.phone.value.trim();
    const password = e.target.password.value;

    if (!phone || !password) {
      return setError("Phone number and password are required");
    }

    const loginInfo = { phone, password };

    setSubmitting(true);
    try {
      const data = await login(loginInfo);
      if (data?.user?.userId) {
        setUser(data.user);
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          text: data?.message,
          confirmButtonColor: "#FA4318",
        }).then(() => {
          navigate("/");
        });
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full border border-secondary/30 rounded p-3 md:p-8">
      {/* page Heading */}

      <PageHeader
        title="Welcome Back"
        description="Login to your account to continue."
        className="mb-8"
      />
      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-5">
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
              placeholder="Enter your password"
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

        {error && <ErrorText>{error}</ErrorText>}

        {/* Login Button */}
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Logging in..." : "Login"}
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
