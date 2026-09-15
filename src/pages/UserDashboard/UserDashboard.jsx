import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Loader from "../../components/ui/Loader";

import TableContainer from "../../components/ui/TableContainer";
import TableHeader from "../../components/ui/TableHeader";
import TableRow from "../../components/ui/TableRow";
import TableData from "../../components/ui/TableData";
import EmptyState from "../../components/widget/EmptyState";

const UserDashboard = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserParcels = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://box-drop-backend.onrender.com/api/user/parcels",
          { withCredentials: true },
        );

        setParcels(res?.data?.result || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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

      {/* Loading */}
      {loading && <Loader />}

      {/* Empty state */}
      {!loading && parcels.length === 0 && (
        <EmptyState
          title="No Parcels Yet"
          message="You haven't sent or received any parcels yet."
        />
      )}

      {/* Parcel History */}
      {!loading && parcels.length > 0 && (
        <TableContainer>
          <TableHeader gridCols="md:grid-cols-[1fr_1.2fr_1.2fr_0.9fr_0.9fr_1fr_0.6fr]">
            <div>Tracking ID</div>
            <div>Sender</div>
            <div>Receiver</div>
            <div>Item</div>
            <div>Status</div>
            <div>Date</div>
            <div className="text-right">Action</div>
          </TableHeader>

          {parcels.map((parcel) => {
            const formattedDate = new Date(
              parcel.bookingDate,
            ).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });

            return (
              <TableRow
                key={parcel.trackingId}
                gridCols="md:grid-cols-[1fr_1.2fr_1.2fr_0.9fr_0.9fr_1fr_0.6fr]"
              >
                {/* Tracking ID */}
                <TableData label="Tracking ID" className="min-w-0">
                  <span className="font-medium text-primary block truncate">
                    {parcel.trackingId}
                  </span>
                </TableData>

                {/* Sender */}
                <TableData label="Sender">
                  <span className="text-secondary">{parcel.senderName}</span>
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
                    {parcel.parcelType}
                  </span>
                </TableData>

                {/* Status */}
                <TableData label="Status">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {parcel.status}
                  </span>
                </TableData>

                {/* Date */}
                <TableData label="Date">
                  <span className="text-secondary">{formattedDate}</span>
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
          })}
        </TableContainer>
      )}
    </div>
  );
};

export default UserDashboard;