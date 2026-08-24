import { useParams, Link } from "react-router";

import { FiArrowLeft } from "react-icons/fi";

import Heading from "../../components/ui/Heading";
import Label from "../../components/ui/Label";
import Span from "../../components/ui/Span";
import Paragraph from "../../components/ui/Paragraph";

import StatusTimeline from "../../components/widget/StatusTimeline";

// Dummy data
const parcel = {
  trackingId: "BD10293",

  type: "Sent",
  status: "On the Way",

  date: "22 Aug, 2026",
  estimatedDelivery: "24 Aug, 2026",
  destination: "Chattogram",

  senderName: "Nirob Hasan",
  senderPhone: "01712345678",
  senderAddress: "House 22, Road 8, Dhaka",

  receiverName: "Ayesha Khatun",
  receiverPhone: "01898765432",
  receiverAddress: "House 12, Road 5, Chattogram",

  itemType: "Other",
  itemDescription: "Laptop charger",
  weight: "2.5 kg",

  price: "৳450",
  paymentType: "Cash on Delivery",
  paymentStatus: "Pending",

  timeline: [
    {
      label: "Received at Point",
      date: "22 Aug, 2026",
      completed: true,
    },
    {
      label: "On the Way",
      date: "22 Aug, 2026",
      completed: true,
    },
    {
      label: "Arrived",
      date: null,
      completed: false,
    },
    {
      label: "Delivered",
      date: null,
      completed: false,
    },
  ],
};

const ParcelDetail = () => {
  const { id } = useParams();

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
                {id}
              </Heading>

              <Paragraph className="text-sm">
                Parcel created on {parcel.date}
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
                  {parcel.type}
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
                      <Label className="text-primary">
                        {parcel.senderAddress}
                      </Label>
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
                        {parcel.receiverAddress}
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Destination + Estimated Delivery */}
              <div className="mt-5 grid gap-4 border-t border-secondary/10 pt-4 sm:grid-cols-2">
                <div>
                  <Span>Destination</Span>
                  <Label className="text-primary">
                    {parcel.destination}
                  </Label>
                </div>

                <div>
                  <Span>Estimated Delivery</Span>
                  <Label className="text-primary">
                    {parcel.estimatedDelivery}
                  </Label>
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
                  <Label className="text-primary">
                    {parcel.itemType}
                  </Label>
                </div>

                <div>
                  <Span>Weight</Span>
                  <Label className="text-primary">
                    {parcel.weight}
                  </Label>
                </div>

                <div className="sm:col-span-2">
                  <Span>Description</Span>
                  <Label className="text-primary">
                    {parcel.itemDescription}
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
                    {parcel.price}
                  </Label>
                </div>

                <div>
                  <Span>Payment Type</Span>
                  <Label className="text-primary">
                    {parcel.paymentType}
                  </Label>
                </div>

                <div>
                  <Span>Payment Status</Span>
                  <Label className="text-primary">
                    {parcel.paymentStatus}
                  </Label>
                </div>
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

            <StatusTimeline steps={parcel.timeline} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
