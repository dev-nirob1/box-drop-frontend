import { Link } from "react-router";

import {
  FiPackage,
  FiClock,
  FiTruck,
  FiCheckCircle,
  FiPlus,
  FiDownload,
  FiTrash2,
  FiEye,
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
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const [parcels, setParcels] = useState([]);
  const [overview, setOverview] = useState({
    total: 0,
    booked: 0,
    onTheWay: 0,
    delivered: 0,
  });

  const getDashboardData = async () => {
    try {
      const [parcelsRes, overviewRes] = await Promise.all([
        axios.get("http://localhost:3000/api/parcels", {
          withCredentials: true,
        }),
        axios.get("http://localhost:3000/api/parcels/overview", {
          withCredentials: true,
        }),
      ]);

      setParcels(parcelsRes.data.result || []);
      setOverview(overviewRes.data.result || {});
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  const handleDelete = async (trackingId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This parcel will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axios.delete(
        `http://localhost:3000/api/parcels/${trackingId}`,
        {
          withCredentials: true,
        },
      );

      if (res?.data?.result?.deletedCount > 0) {
        await getDashboardData();

        Swal.fire({
          title: "Deleted!",
          text: "Parcel has been deleted successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: "Failed to delete the parcel.",
        icon: "error",
      });
    }
  };

  const stats = [
    {
      label: "Total Parcels",
      value: overview.total,
      icon: FiPackage,
    },
    {
      label: "Booked",
      value: overview.booked,
      icon: FiClock,
    },
    {
      label: "On the Way",
      value: overview.onTheWay,
      icon: FiTruck,
    },
    {
      label: "Delivered",
      value: overview.delivered,
      icon: FiCheckCircle,
    },
  ];

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

      {/* Stats Card */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <StatCard key={i} item={item} />
        ))}
      </div>

      {/* Parcel Table */}
      <div className="rounded-md border border-secondary/10 bg-white">
        <div className="border-b border-secondary/10 px-5 py-4">
          <Heading as={5} className="mb-0">
            Parcels
          </Heading>
        </div>

        <TableContainer>
          <TableHeader gridCols="md:grid-cols-[2fr_1.2fr_1.2fr_1fr_1fr_0.8fr_1.1fr_1fr_1.2fr]">
            <div>Tracking ID</div>
            <div>Sender</div>
            <div>Receiver</div>
            <div>Item</div>
            <div>Payment</div>
            <div>Cost</div>
            <div>Status</div>
            <div>Date</div>
            <div className="text-right">Action</div>
          </TableHeader>

          {parcels.map((parcel) => (
            <TableRow
              gridCols="md:grid-cols-[2fr_1.2fr_1.2fr_1fr_1fr_0.8fr_1.1fr_1fr_1.2fr]"
              key={parcel.trackingId}
            >
              <TableData label="Tracking ID" className="min-w-0">
                <span className="block truncate" title={parcel.trackingId}>
                  {parcel.trackingId}
                </span>
              </TableData>

              <TableData label="Sender">
                <span>{parcel.senderName}</span>
              </TableData>

              <TableData label="Receiver">
                <span>{parcel.receiverName}</span>
              </TableData>

              <TableData label="Item">
                <span>{parcel.selectedItem}</span>
              </TableData>

              <TableData label="Payment">
                <span>{parcel.paymentType}</span>
              </TableData>

              <TableData label="Cost">
                <span>৳{parcel.totalCost}</span>
              </TableData>

              <TableData label="Status">
                <select
                  value={parcel.status}
                  className="rounded-md border border-secondary/20 bg-white px-2 py-1.5 text-xs font-medium text-primary focus:border-accent focus:outline-none"
                  disabled
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </TableData>

              <TableData label="Date">
                <span>
                  {new Date(parcel.bookingDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </TableData>

              <TableData label="Action">
                <div className="flex items-center justify-end gap-2">
                  {/* View */}
                  <Link
                    to={`/admin/parcels/${parcel.trackingId}`}
                    title="View"
                    className="rounded-md bg-accent/10 p-1.5 text-accent hover:bg-accent/20"
                  >
                    <FiEye size={16} />
                  </Link>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(parcel.trackingId)}
                    title="Delete"
                    className="cursor-pointer rounded-md bg-accent/10 p-1.5 text-accent hover:bg-accent/20"
                  >
                    <FiTrash2 size={16} />
                  </button>

                  {/* Download */}
                  <button
                    title="Download"
                    className="cursor-pointer rounded-md bg-accent/10 p-1.5 text-accent hover:bg-accent/20"
                  >
                    <FiDownload size={16} />
                  </button>
                </div>
              </TableData>
            </TableRow>
          ))}
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
