import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";

import Heading from "../../components/ui/Heading";
import Label from "../../components/ui/Label";
import Span from "../../components/ui/Span";
import Paragraph from "../../components/ui/Paragraph";
import StatusTimeline from "../../components/widget/StatusTimeline";
import Loader from "../../components/ui/Loader";

const ParcelDetail = () => {
  const { id } = useParams();

  const [parcel, setParcel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getParcelDetails = async () => {
      try {
        const res = await axios.get(
          `https://box-drop-backend.onrender.com/api/user/parcels/${id}`,
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
    return <Loader />;
  }

  return (
    <div>
      {/* Back */}
      <Link
        to="/dashboard"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium"
      >
        <FiArrowLeft />
        Back to My Parcels
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Parcel Details */}
        <div className="rounded-md border border-secondary/10 bg-white p-6">
          <div className="mb-6">
            <Span>Tracking ID</Span>
            <Heading as={5}>{parcel.trackingId}</Heading>

            <Paragraph>
              {new Date(parcel.bookingDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Paragraph>
          </div>

          {/* Delivery Information */}
          <div className="border-t border-secondary/10 pt-5">
            <Heading as={5}>Delivery Information</Heading>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Span>Sender</Span>
                <Label>{parcel.senderName}</Label>
                <Label>{parcel.senderPhone}</Label>
                <Label>{parcel.from}</Label>
              </div>

              <div>
                <Span>Receiver</Span>
                <Label>{parcel.receiverName}</Label>
                <Label>{parcel.receiverPhone}</Label>
                <Label>{parcel.deliveryAddress}</Label>
              </div>
            </div>
          </div>

          {/* Parcel Information */}
          <div className="mt-6 border-t border-secondary/10 pt-5">
            <Heading as={5}>Parcel Information</Heading>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Span>Item Type</Span>
                <Label>{parcel.parcelType}</Label>
              </div>

              <div>
                <Span>Weight</Span>
                <Label>{parcel.weight} kg</Label>
              </div>

              <div className="sm:col-span-2">
                <Span>Description</Span>
                <Label>{parcel.description}</Label>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mt-6 border-t border-secondary/10 pt-5">
            <Heading as={5}>Payment Information</Heading>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Span>Delivery Charge</Span>
                <Label>৳{parcel.deliveryCharge}</Label>
              </div>

              <div>
                <Span>Payment Method</Span>
                <Label>{parcel.paymentMethod}</Label>
              </div>

              <div>
                <Span>COD Amount</Span>
                <Label>৳{parcel.codAmount}</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="rounded-md border border-secondary/10 bg-white p-6">
          <Heading as={5}>Tracking Timeline</Heading>

          <StatusTimeline steps={parcel.statusHistory || []} />
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
