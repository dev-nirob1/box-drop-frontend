import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";

import Heading from "../../components/ui/Heading";
import Label from "../../components/ui/Label";
import Span from "../../components/ui/Span";
import Button from "../../components/ui/Button";
import StatusTimeline from "../../components/widget/StatusTimeline";
import { statusOptions } from "../../utils/data";
import Swal from "sweetalert2";

const AdminParcelEdit = () => {
  const { id } = useParams();

  const [parcel, setParcel] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getParcelDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/parcels/${id}`, {
          withCredentials: true,
        });

        const data = res?.data?.result;

        setParcel(data);
        setStatus(data.status);
      } catch (error) {
        console.error(error);
      }
    };

    getParcelDetails();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/api/parcels/${id}`,
        {
          status,
        },
        {
          withCredentials: true,
        },
      );

      if (res?.data?.result?.modifiedCount > 0) {
        const updatedRes = await axios.get(
          `http://localhost:3000/api/parcels/${id}`,
          {
            withCredentials: true,
          },
        );

        const updatedParcel = updatedRes?.data?.result;

        setParcel(updatedParcel);
        setStatus(updatedParcel.status);
        Swal.fire({
          title: "Updated!",
          text: "Parcel status updated successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!parcel) return null;

  const timeline = statusOptions.map((status) => {
    const history = parcel.statusHistory?.find(
      (item) => item.status === status,
    );

    return {
      label: status,
      date: history?.updatedAt || history?.date || null,
      completed: !!history,
    };
  });

  return (
    <div>
      {/* Back */}
      <Link
        to="/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
      >
        <FiArrowLeft />
        Back to All Parcels
      </Link>

      {/* Heading */}
      <div className="mb-6">
        <Heading as={3}>Parcel Details</Heading>

        <p className="mt-1 text-sm text-secondary">
          View parcel information, delivery details and tracking status.
        </p>
      </div>

      {/* 3 Columns */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* COLUMN 1 — SENDER + RECEIVER */}
        <div>
          <div className="rounded-md border border-secondary/10 bg-white p-5">
            <Heading as={5} className="mb-5">
              Customer Information
            </Heading>

            {/* Sender */}
            <div>
              <div className="mb-4">
                <Span>Sender</Span>
                <Label>{parcel.senderName}</Label>
              </div>

              <div className="space-y-3">
                <div>
                  <Span>Phone</Span>
                  <Label className="text-primary">{parcel.senderPhone}</Label>
                </div>

                <div>
                  <Span>From</Span>
                  <Label className="text-primary">{parcel.from}</Label>
                </div>
              </div>
            </div>

            <div className="my-6 border-t border-secondary/10" />

            {/* Receiver */}
            <div>
              <div className="mb-4">
                <Span>Receiver</Span>
                <Label>{parcel.receiverName}</Label>
              </div>

              <div className="space-y-3">
                <div>
                  <Span>Phone</Span>
                  <Label className="text-primary">{parcel.receiverPhone}</Label>
                </div>

                <div>
                  <Span>Delivery Address</Span>
                  <Label className="text-primary">
                    {parcel.deliveryAddress}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2 — DELIVERY INFORMATION */}
        <div>
          <div className="rounded-md border border-secondary/10 bg-white p-5">
            <div className="mb-5">
              <Span>Tracking ID</Span>

              <Heading as={5} className="mb-0 mt-1">
                {parcel.trackingId}
              </Heading>
            </div>

            <div className="border-t border-secondary/10 pt-5">
              <Heading as={5} className="mb-5">
                Delivery Information
              </Heading>

              <div className="space-y-4">
                <div>
                  <Span>Item Type</Span>
                  <Label className="text-primary">{parcel.selectedItem}</Label>
                </div>

                <div>
                  <Span>Description</Span>
                  <Label className="text-primary">{parcel.description}</Label>
                </div>

                {/* Weight only for Other */}
                {parcel.selectedItem === "other" && parcel.weight && (
                  <div>
                    <Span>Weight</Span>
                    <Label className="text-primary">{parcel.weight} kg</Label>
                  </div>
                )}

                <div>
                  <Span>Delivery Charge</Span>
                  <Label className="text-primary">
                    ৳{parcel.deliveryCharge}
                  </Label>
                </div>

                <div>
                  <Span>Payment Type</Span>
                  <Label className="text-primary">{parcel.paymentType}</Label>
                </div>

                <div>
                  <Span>Payment Status</Span>
                  <Label className="text-primary">
                    {parcel.paymentType === "cod" ? "Unpaid" : "Paid"}
                  </Label>
                </div>

                {parcel.paymentType === "cod" && (
                  <div>
                    <Span>COD Amount</Span>
                    <Label className="text-primary">৳{parcel.codAmount}</Label>
                  </div>
                )}

                <div>
                  <Span>Total Cost</Span>
                  <Label className="text-primary">৳{parcel.totalCost}</Label>
                </div>

                <div>
                  <Span>Current Status</Span>

                  <div className="mt-1">
                    <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-600">
                      {parcel.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3 — TIMELINE + ACTION */}
        <div className="space-y-6">
          {/* Tracking Timeline */}
          <div className="rounded-md border border-secondary/10 bg-white p-5">
            <Heading as={5} className="mb-6">
              Tracking Timeline
            </Heading>

            <StatusTimeline steps={timeline} />
          </div>

          {/* Action */}
          <div className="rounded-md border border-secondary/10 bg-white p-5">
            <Heading as={5} className="mb-4">
              Update Parcel
            </Heading>

            <div className="space-y-4">
              <div>
                <Label htmlFor="status">Status</Label>

                <select
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-md border border-secondary/30 px-4 py-3 text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                type="button"
                variant="primary"
                className="w-full"
                onClick={handleUpdate}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminParcelEdit;
