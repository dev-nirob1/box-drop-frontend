// import { useState } from "react";
import { Link } from "react-router";
import {
  FiPackage,
  FiClock,
  FiTruck,
  FiCheckCircle,
  FiPlus,
} from "react-icons/fi";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Button from "../../components/ui/Button";
import { statusOptions } from "../../utils/data";
import StatCard from "../../components/widget/StatCard";
import TableContainer from "../../components/ui/TableContainer";
import TableHeader from "../../components/ui/TableHeader";
import TableRow from "../../components/ui/TableRow";
import TableData from "../../components/ui/TableData";
import { useEffect, useState } from "react";
import axios from "axios";

const stats = [
  { label: "Total Parcels", value: 48, icon: FiPackage },
  { label: "Pending", value: 6, icon: FiClock },
  { label: "In Transit", value: 15, icon: FiTruck },
  { label: "Delivered", value: 27, icon: FiCheckCircle },
];

const AdminDashboard = () => {
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    const getParcelsData = async () => {
      const res = await axios.get("http://localhost:3000/api/parcels", {
        withCredentials: true,
      });
      setParcels(res?.data?.result);
    };
    getParcelsData();
  }, []);
  return (
    <div>
      {/* Heading + Add Parcel */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <Heading as={3}>All Parcels</Heading>
          <Paragraph>
            Manage and update parcel status across the platform.
          </Paragraph>
        </div>

        <Link to="/admin/new">
          <Button variant="primary">
            <FiPlus />
            Add Parcel
          </Button>
        </Link>
      </div>

      {/* Stats card */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <StatCard key={i} item={item} />
        ))}
      </div>

      {/* Parcel table */}
      <div className="rounded-md border border-secondary/10 bg-white">
        <div className="border-b border-secondary/10 px-5 py-4">
          <Heading as={5} className="mb-0">
            Parcels
          </Heading>
        </div>

        <TableContainer>
          <TableHeader>
            <div>Tracking ID</div>
            <div>Sender</div>
            <div>Reciever</div>
            <div>Item</div>
            <div>Payment</div>
            <div>Cost</div>
            <div>Status</div>
            <div>Date</div>
            <div className="text-right">Action</div>
          </TableHeader>
          {parcels.map((parcel) => (
            <TableRow key={parcel.trackingId}>
              <TableData label="Tracking ID">
                {/* nextgen it ltd */}
                <span>{parcel.trackingId}</span>
              </TableData>
              <TableData label="Sender">
                {/* nextgen it ltd */}
                <span>{parcel.senderName}</span>
              </TableData>
              <TableData label="Receiver">
                {/* nextgen it ltd */}
                <span>{parcel.receiverName}</span>
              </TableData>
              <TableData label="Item">
                {/* nextgen it ltd */}
                <span>{parcel.selectedItem}</span>
              </TableData>
              <TableData label="Payment">
                {/* nextgen it ltd */}
                <span>{parcel.paymentType}</span>
              </TableData>
              <TableData label="Cost">
                {/* nextgen it ltd */}
                <span>${parcel.totalCost}</span>
              </TableData>
              <TableData label="Status">
                {/* nextgen it ltd */}
                <span>
                  <select
                    value={parcel.status}
                    className="rounded-md border border-secondary/20 bg-white px-2 py-1.5 text-xs font-medium text-primary focus:border-accent focus:outline-none"
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </span>
              </TableData>
              <TableData label="Date">
                {/* nextgen it ltd */}
                <span>
                  {new Date(parcel.bookingDate).toLocaleDateString("en-GB")}
                </span>
              </TableData>
              <TableData label="Status">
                {/* nextgen it ltd */}
                <span className="text-right">
                  {" "}
                  <Link
                    to={`/admin/parcels/${parcel.trackingId}`}
                    className="font-medium text-accent hover:underline inline-block text-right"
                  >
                    Manage
                  </Link>
                </span>
              </TableData>
            </TableRow>
          ))}
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
