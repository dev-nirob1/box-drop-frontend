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
        const res = await axios.get("https://box-drop-backend.onrender.com/api/users", {
          withCredentials: true,
        });
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
        <Paragraph>Manage all registered users on the platform.</Paragraph>
      </div>

      {/* Users Table */}
      <TableContainer>
        <TableHeader gridCols="md:grid-cols-[1.5fr_1.3fr_1fr_1fr]">
          <div>Name</div>
          <div>Phone</div>
          <div>Role</div>
          <div>Joined</div>
        </TableHeader>

        {allUsers?.map((user) => (
          <TableRow
            key={user._id}
            gridCols="md:grid-cols-[1.5fr_1.3fr_1fr_1fr]"
          >
            <TableData label="Name">
              <span className="font-medium text-primary">{user.name}</span>
            </TableData>

            <TableData label="Phone">
              <span className="text-secondary">{user.phone}</span>
            </TableData>

            <TableData label="Role">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {user.role}
              </span>
            </TableData>

            <TableData label="Joined">
              <span className="text-secondary">
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </TableData>
          </TableRow>
        ))}
      </TableContainer>
    </div>
  );
};

export default AdminUsers;
