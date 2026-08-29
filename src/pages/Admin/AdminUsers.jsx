import { Link } from "react-router";

import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import TableContainer from "../../components/ui/TableContainer";
import TableHeader from "../../components/ui/TableHeader";
import TableRow from "../../components/ui/TableRow";
import TableData from "../../components/ui/TableData";
import axios from "axios";
import { useEffect, useState } from "react";

const AdminUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/users", {
          withCredentials: true,
        });
        // console.log(res?.data)
        setAllUsers(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
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

        {allUsers?.map((user) => {
          const roleBadge =
            user.role === "admin"
              ? "bg-accent/10 text-accent"
              : "bg-secondary/10 text-secondary";

          return (
            <TableRow
              key={user._id}
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
                <span className="text-secondary">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </TableData>

              <TableData label="History" align="right">
                <Link
                  to={`/admin/users/${user.phone}`}
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
