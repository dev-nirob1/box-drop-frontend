import { useEffect, useState } from "react";

import { Link } from "react-router";

import axios from "axios";

import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";

import TableContainer from "../../components/ui/TableContainer";
import TableHeader from "../../components/ui/TableHeader";
import TableRow from "../../components/ui/TableRow";
import TableData from "../../components/ui/TableData";

const UserDashboard = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const getUserParcels = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/user/parcels",
          {
            withCredentials: true,
          },
        );

        setParcels(res?.data?.result || []);
      } catch (error) {
        console.error(error);
      }
    };

    getUserParcels();
  }, []);

  return (
    <div>
      {/* Heading */}
      <div className="mb-6">
        <Heading as={3}>My Parcels</Heading>

        <Paragraph>
          Track and manage all your sent and received parcels.
        </Paragraph>
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
         <div className="text-right">Action</div>
        </TableHeader>

        {parcels.map((parcel) => (
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
  const type =
    parcel.senderPhone === parcel.receiverPhone
      ? ""
      : "Sent";

  const statusBadge =
    parcel.status === "Delivered"
      ? "bg-green-100 text-green-600"
      : parcel.status === "Ready to Deliver"
        ? "bg-blue-100 text-blue-600"
        : parcel.status === "On the Way"
          ? "bg-amber-100 text-amber-600"
          : "bg-secondary/10 text-secondary";

  const typeBadge =
    type === "Sent"
      ? "bg-blue-100 text-blue-600"
      : "bg-purple-100 text-purple-600";

  const formattedDate = new Date(parcel.bookingDate).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );

  return (
    <TableRow
      gridCols="md:grid-cols-[1fr_1.2fr_1.2fr_0.9fr_0.8fr_1fr_1fr_0.6fr]"
    >
      {/* Tracking ID */}
      <TableData label="Tracking ID" className="min-w-0">
        <span className="font-medium text-primary block truncate">
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
        <span className="capitalize text-secondary">
          {parcel.selectedItem}
        </span>
      </TableData>

      {/* Type */}
      <TableData label="Type">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${typeBadge}`}
        >
          {type}
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
          {formattedDate}
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
