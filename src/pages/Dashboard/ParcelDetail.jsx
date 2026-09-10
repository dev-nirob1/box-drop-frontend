import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";

import { FiArrowLeft } from "react-icons/fi";

import Heading from "../../components/ui/Heading";
import Label from "../../components/ui/Label";
import Span from "../../components/ui/Span";
import Paragraph from "../../components/ui/Paragraph";
import StatusTimeline from "../../components/widget/StatusTimeline";

import { statusOptions } from "../../utils/data";

const ParcelDetail = () => {
  const { id } = useParams();

  const [parcel, setParcel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getParcelDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/user/parcels/${id}`,
          {
            withCredentials: true,
          },
        );

        setParcel(res?.data?.result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getParcelDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!parcel) {
    return <div>Parcel not found.</div>;
  }

  // --------------------------------
  // Item type
  // --------------------------------
  const itemType =
    parcel.selectedItem === "polybag"
      ? "Poly Bag"
      : parcel.selectedItem === "document"
        ? "Document"
        : "Other";

  // --------------------------------
  // Payment type
  // --------------------------------
  const paymentType =
    parcel.paymentType === "cod" ? "Cash on Delivery" : "Prepaid";

  // --------------------------------
  // Payment status
  // --------------------------------
  const paymentStatus =
    parcel.paymentType === "prepaid"
      ? "Paid"
      : parcel.status === "Delivered"
        ? "Paid"
        : "Unpaid";

  // --------------------------------
  // Parcel type
  // --------------------------------
  const type =
    parcel.senderPhone === parcel.receiverPhone
      ? "Sent"
      : parcel.senderPhone
        ? "Sent"
        : "Received";

  // --------------------------------
  // Timeline
  // --------------------------------
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

  // --------------------------------
  // Date formatting
  // --------------------------------
  const bookingDate = new Date(parcel.bookingDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      {/* Back */}
      <Link
        to="/dashboard"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
      >
        <FiArrowLeft />
        Back to My Parcels
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* =================================
            LEFT COLUMN
        ================================= */}
        <div>
          <div className="rounded-md border border-secondary/10 bg-white p-6">
            {/* Header */}
            <div className="mb-6">
              <Span>Tracking ID</Span>

              <Heading as={4} className="mb-1">
                {parcel.trackingId}
              </Heading>

              <Paragraph className="text-sm">
                Parcel created on {bookingDate}
              </Paragraph>
            </div>

            {/* =================================
                DELIVERY INFORMATION
            ================================= */}
            <div className="border-t border-secondary/10 pt-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <Heading as={5} className="mb-0">
                  Delivery Information
                </Heading>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {type}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* From */}
                <div>
                  <Span>From</Span>

                  <div className="mt-3 space-y-3">
                    <div>
                      <Span>Name</Span>

                      <Label className="text-primary">
                        {parcel.senderName}
                      </Label>
                    </div>

                    <div>
                      <Span>Phone</Span>

                      <Label className="text-primary">
                        {parcel.senderPhone}
                      </Label>
                    </div>

                    <div>
                      <Span>Address</Span>

                      <Label className="text-primary">{parcel.from}</Label>
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <Span>Delivery Address</Span>

                  <div className="mt-3 space-y-3">
                    <div>
                      <Span>Name</Span>

                      <Label className="text-primary">
                        {parcel.receiverName}
                      </Label>
                    </div>

                    <div>
                      <Span>Phone</Span>

                      <Label className="text-primary">
                        {parcel.receiverPhone}
                      </Label>
                    </div>

                    <div>
                      <Span>Address</Span>

                      <Label className="text-primary">
                        {parcel.deliveryAddress}
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================
                PARCEL INFORMATION
            ================================= */}
            <div className="mt-6 border-t border-secondary/10 pt-5">
              <Heading as={5} className="mb-4">
                Parcel Information
              </Heading>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Span>Item Type</Span>

                  <Label className="text-primary">{itemType}</Label>
                </div>

                <div>
                  <Span>Weight</Span>

                  <Label className="text-primary">{parcel.weight} kg</Label>
                </div>

                <div className="sm:col-span-2">
                  <Span>Description</Span>

                  <Label className="text-primary">
                    {parcel.description || "No description provided"}
                  </Label>
                </div>
              </div>
            </div>

            {/* =================================
                PAYMENT INFORMATION
            ================================= */}
            <div className="mt-6 border-t border-secondary/10 pt-5">
              <Heading as={5} className="mb-4">
                Payment Information
              </Heading>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <Span>Delivery Charge</Span>

                  <Label className="text-primary">
                    ৳{parcel.deliveryCharge}
                  </Label>
                </div>

                <div>
                  <Span>Payment Type</Span>

                  <Label className="text-primary">{paymentType}</Label>
                </div>

                <div>
                  <Span>Payment Status</Span>

                  <Label className="text-primary">{paymentStatus}</Label>
                </div>

                {parcel.paymentType === "cod" && (
                  <div>
                    <Span>COD Amount</Span>

                    <Label className="text-primary">৳{parcel.codAmount}</Label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =================================
            RIGHT COLUMN — TRACKING
        ================================= */}
        <div>
          <div className="rounded-md border border-secondary/10 bg-white p-6 lg:sticky lg:top-6">
            <div className="mb-6">
              <Heading as={5} className="mb-1">
                Tracking Timeline
              </Heading>

              <Paragraph className="text-sm">
                Follow your parcel delivery progress.
              </Paragraph>
            </div>

            <StatusTimeline steps={timeline} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
