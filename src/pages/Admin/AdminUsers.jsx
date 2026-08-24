import { Link } from "react-router";

import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import TableContainer from "../../components/ui/TableContainer";
import TableHeader from "../../components/ui/TableHeader";
import TableRow from "../../components/ui/TableRow";
import TableData from "../../components/ui/TableData";

// Dummy data
const users = [
  {
    id: 1,
    name: "Nirob Hasan",
    phone: "01712345678",
    role: "User",
    totalParcels: 12,
    lastActivity: "22 Aug, 2026",
    joined: "12 Jul, 2026",
  },
  {
    id: 2,
    name: "Ayesha Khatun",
    phone: "01898765432",
    role: "User",
    totalParcels: 8,
    lastActivity: "21 Aug, 2026",
    joined: "18 Jul, 2026",
  },
  {
    id: 3,
    name: "Rahim Uddin",
    phone: "01911223344",
    role: "User",
    totalParcels: 5,
    lastActivity: "20 Aug, 2026",
    joined: "02 Aug, 2026",
  },
  {
    id: 4,
    name: "Karim Sheikh",
    phone: "01655667788",
    role: "User",
    totalParcels: 15,
    lastActivity: "19 Aug, 2026",
    joined: "05 Jun, 2026",
  },
  {
    id: 5,
    name: "Admin Account",
    phone: "01512345678",
    role: "Admin",
    totalParcels: 48,
    lastActivity: "24 Aug, 2026",
    joined: "01 Jan, 2026",
  },
];

const AdminUsers = () => {
  return (
    <div>
      {/* Heading */}
      <div className="mb-6">
        <Heading as={3}>Users</Heading>
        <Paragraph>
          Manage registered users and view their parcel history.
        </Paragraph>
      </div>

      {/* Users Table */}
      <TableContainer>
        <TableHeader gridCols="md:grid-cols-[1.3fr_1.2fr_0.8fr_0.8fr_1fr_1fr_0.7fr]">
          <div>Name</div>
          <div>Phone</div>
          <div>Role</div>
          <div>Parcels</div>
          <div>Last Activity</div>
          <div>Joined</div>
          <div></div>
        </TableHeader>

        {users.map((user) => {
          const roleBadge =
            user.role === "Admin"
              ? "bg-accent/10 text-accent"
              : "bg-secondary/10 text-secondary";

          return (
            <TableRow
              key={user.id}
              gridCols="md:grid-cols-[1.3fr_1.2fr_0.8fr_0.8fr_1fr_1fr_0.7fr]"
            >
              <TableData label="Name">
                <span className="font-medium text-primary">{user.name}</span>
              </TableData>

              <TableData label="Phone">
                <span className="text-secondary">{user.phone}</span>
              </TableData>

              <TableData label="Role">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${roleBadge}`}
                >
                  {user.role}
                </span>
              </TableData>

              <TableData label="Parcels">
                <span className="text-secondary">{user.totalParcels}</span>
              </TableData>

              <TableData label="Last Activity">
                <span className="text-secondary">{user.lastActivity}</span>
              </TableData>

              <TableData label="Joined">
                <span className="text-secondary">{user.joined}</span>
              </TableData>

              <TableData label="History" align="right">
                <Link
                  to={`/admin/users/${user.id}`}
                  className="font-medium text-accent hover:underline"
                >
                  History
                </Link>
              </TableData>
            </TableRow>
          );
        })}
      </TableContainer>
    </div>
  );
};

export default AdminUsers;
