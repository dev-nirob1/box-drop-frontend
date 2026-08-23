import { FiArrowLeft } from "react-icons/fi";
import { Link, Outlet } from "react-router";
import Container from "../components/ui/Container";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <Container>
        {/* Header */}
        <header className="py-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-medium text-secondary transition-colors hover:text-primary border border-secondary/10 px-3 py-2 rounded"
          >
            <FiArrowLeft />
            Back to Home
          </Link>
        </header>

        {/* Auth Content */}
        <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
          <div className="w-full max-w-lg">
            <Outlet />
          </div>
        </main>
      </Container>
    </div>
  );
};

export default AuthLayout;
