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

const stats = [
  { label: "Total Parcels", value: 48, icon: FiPackage },
  { label: "Pending", value: 6, icon: FiClock },
  { label: "In Transit", value: 15, icon: FiTruck },
  { label: "Delivered", value: 27, icon: FiCheckCircle },
];

// dummy data,
const parcels = [
  {
    trackingId: "BD10293",
    senderName: "Nirob Hasan",
    receiverName: "Ayesha Khatun",
    itemDescription: "Laptop charger",
    paymentType: "Cash on Delivery",
    price: "৳450",
    status: "In Transit",
    deliveredDate: null,
    date: "22 Aug, 2026",
  },
  {
    trackingId: "BD10287",
    senderName: "Rahim Uddin",
    receiverName: "Nirob Hasan",
    itemDescription: "Documents",
    paymentType: "Prepaid",
    price: "৳320",
    status: "Delivered",
    deliveredDate: "2026-08-10",
    date: "20 Aug, 2026",
  },
  {
    trackingId: "BD10251",
    senderName: "Nirob Hasan",
    receiverName: "Karim Sheikh",
    itemDescription: "Poly bag parcel",
    paymentType: "Cash on Delivery",
    price: "৳280",
    status: "Pending",
    deliveredDate: null,
    date: "18 Aug, 2026",
  },
  {
    trackingId: "BD10244",
    senderName: "Karim Sheikh",
    receiverName: "Fatema Akter",
    itemDescription: "Clothing",
    paymentType: "Prepaid",
    price: "৳550",
    status: "Delivered",
    deliveredDate: "2026-08-17",
    date: "17 Aug, 2026",
  },
];

const AdminDashboard = () => {

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
        {stats.map((item) => (
          <StatCard item={item} />
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
            <div>Price</div>
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
                <span>{parcel.itemDescription}</span>
              </TableData>
              <TableData label="Payment">
                {/* nextgen it ltd */}
                <span>{parcel.paymentType}</span>
              </TableData>
              <TableData label="Price">
                {/* nextgen it ltd */}
                <span>${parcel.price}</span>
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
                <span>{parcel.date}</span>
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
