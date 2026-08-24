import { useState } from "react";
import { Link } from "react-router";

import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";

import TableContainer from "../../components/ui/TableContainer";
import TableHeader from "../../components/ui/TableHeader";
import TableRow from "../../components/ui/TableRow";
import TableData from "../../components/ui/TableData";

// Dummy data
const parcels = [
  {
    trackingId: "BD10293",
    senderName: "Nirob Hasan",
    receiverName: "Ayesha Khatun",
    itemType: "Other",
    type: "Sent",
    status: "On the Way",
    date: "22 Aug, 2026",
  },
  {
    trackingId: "BD10287",
    senderName: "Ayesha Khatun",
    receiverName: "Nirob Hasan",
    itemType: "Poly Bag",
    type: "Received",
    status: "Delivered",
    date: "20 Aug, 2026",
  },
  {
    trackingId: "BD10251",
    senderName: "Nirob Hasan",
    receiverName: "Karim Sheikh",
    itemType: "Document",
    type: "Sent",
    status: "Arrived",
    date: "18 Aug, 2026",
  },
  {
    trackingId: "BD10244",
    senderName: "Sakib Ahmed",
    receiverName: "Nirob Hasan",
    itemType: "Other",
    type: "Received",
    status: "At Point",
    date: "17 Aug, 2026",
  },
];

const filterOptions = ["All", "Sent", "Received"];

const UserDashboard = () => {
  const [filter, setFilter] = useState("All");

  const filteredParcels =
    filter === "All"
      ? parcels
      : parcels.filter((parcel) => parcel.type === filter);

  return (
    <div>
      {/* Heading */}
      <div className="mb-6">
        <Heading as={3}>My Parcels</Heading>

        <Paragraph>
          Track and manage all your sent and received parcels.
        </Paragraph>
      </div>

      {/* Filter Tabs */}
      <div className="mb-5 flex gap-2">
        {filterOptions.map((option) => {
          const isActive = filter === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={
                isActive
                  ? "cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
                  : "cursor-pointer rounded-md border border-secondary/20 px-4 py-2 text-sm font-medium text-secondary hover:bg-secondary/5"
              }
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Parcel History */}
      <TableContainer>
        <TableHeader
          gridCols="md:grid-cols-[1fr_1.2fr_1.2fr_0.9fr_0.8fr_1fr_1fr_0.6fr]"
        >
          <div>Tracking ID</div>
          <div>Sender</div>
          <div>Receiver</div>
          <div>Item</div>
          <div>Type</div>
          <div>Status</div>
          <div>Date</div>
          <div></div>
        </TableHeader>

        {filteredParcels.map((parcel) => (
          <ParcelRow
            key={parcel.trackingId}
            parcel={parcel}
          />
        ))}
      </TableContainer>
    </div>
  );
};

const ParcelRow = ({ parcel }) => {
  const statusBadge =
    parcel.status === "Delivered"
      ? "bg-green-100 text-green-600"
      : parcel.status === "Arrived"
        ? "bg-blue-100 text-blue-600"
        : parcel.status === "On the Way"
          ? "bg-amber-100 text-amber-600"
          : "bg-secondary/10 text-secondary";

  const typeBadge =
    parcel.type === "Sent"
      ? "bg-blue-100 text-blue-600"
      : "bg-purple-100 text-purple-600";

  return (
    <TableRow
      gridCols="md:grid-cols-[1fr_1.2fr_1.2fr_0.9fr_0.8fr_1fr_1fr_0.6fr]"
    >
      {/* Tracking ID */}
      <TableData label="Tracking ID">
        <span className="font-medium text-primary">
          {parcel.trackingId}
        </span>
      </TableData>

      {/* Sender */}
      <TableData label="Sender">
        <span className="text-secondary">
          {parcel.senderName}
        </span>
      </TableData>

      {/* Receiver */}
      <TableData label="Receiver">
        <span className="text-secondary">
          {parcel.receiverName}
        </span>
      </TableData>

      {/* Item */}
      <TableData label="Item">
        <span className="text-secondary">
          {parcel.itemType}
        </span>
      </TableData>

      {/* Type */}
      <TableData label="Type">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${typeBadge}`}
        >
          {parcel.type}
        </span>
      </TableData>

      {/* Status */}
      <TableData label="Status">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusBadge}`}
        >
          {parcel.status}
        </span>
      </TableData>

      {/* Date */}
      <TableData label="Date">
        <span className="text-secondary">
          {parcel.date}
        </span>
      </TableData>

      {/* Action */}
      <TableData label="Action" align="right">
        <Link
          to={`/dashboard/parcel/${parcel.trackingId}`}
          className="font-medium text-accent hover:underline"
        >
          View
        </Link>
      </TableData>
    </TableRow>
  );
};

export default UserDashboard;