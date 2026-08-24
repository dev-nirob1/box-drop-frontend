import { useParams, Link } from "react-router";

import { FiArrowLeft } from "react-icons/fi";

import Heading from "../../components/ui/Heading";
import Label from "../../components/ui/Label";
import Span from "../../components/ui/Span";
import Button from "../../components/ui/Button";
import StatusTimeline from "../../components/widget/StatusTimeline";

import { statusOptions } from "../../utils/data";

// Dummy data
const parcel = {
  trackingId: "BD10293",

  senderName: "Nirob Hasan",
  senderPhone: "01712345678",
  senderAddress: "House 22, Road 8, Dhaka",

  receiverName: "Ayesha Khatun",
  receiverPhone: "01898765432",
  receiverAddress: "House 12, Road 5, Chattogram",

  status: "On the Way",
  location: "On the way to Chattogram",

  itemType: "Document",
  itemDescription: "Important business documents",
  weight: "0.3 kg",

  price: "৳40",
  paymentType: "Cash on Delivery",
  codAmount: "৳1,500",

  estimatedDelivery: "24 Aug, 2026",

  timeline: [
    {
      label: "Received",
      date: "22 Aug, 2026",
      completed: true,
    },
    {
      label: "On the Way",
      date: "23 Aug, 2026",
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

const AdminParcelEdit = () => {
  const { id } = useParams();

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
        {/* =====================================================
            COLUMN 1 — SENDER + RECEIVER
        ====================================================== */}

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

                  <Label className="text-primary">{parcel.senderAddress}</Label>
                </div>
              </div>
            </div>

            {/* Divider */}
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
                    {parcel.receiverAddress}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            COLUMN 2 — DELIVERY INFORMATION
        ====================================================== */}

        <div>
          <div className="rounded-md border border-secondary/10 bg-white p-5">
            <div className="mb-5">
              <Span>Tracking ID</Span>

              <Heading as={4} className="mb-0 mt-1">
                {id}
              </Heading>
            </div>

            <div className="border-t border-secondary/10 pt-5">
              <Heading as={5} className="mb-5">
                Delivery Information
              </Heading>

              <div className="space-y-4">
                {/* Item Type */}
                <div>
                  <Span>Item Type</Span>

                  <Label className="text-primary">{parcel.itemType}</Label>
                </div>

                {/* Description */}
                <div>
                  <Span>Description</Span>

                  <Label className="text-primary">
                    {parcel.itemDescription}
                  </Label>
                </div>

                {/* Weight */}
                <div>
                  <Span>Weight</Span>

                  <Label className="text-primary">{parcel.weight}</Label>
                </div>

                {/* Delivery Charge */}
                <div>
                  <Span>Delivery Charge</Span>

                  <Label className="text-primary">{parcel.price}</Label>
                </div>

                {/* Payment */}
                <div>
                  <Span>Payment Type</Span>

                  <Label className="text-primary">{parcel.paymentType}</Label>
                </div>

                {/* COD */}
                {parcel.paymentType === "Cash on Delivery" && (
                  <div>
                    <Span>COD Amount</Span>

                    <Label className="text-primary">{parcel.codAmount}</Label>
                  </div>
                )}

                {/* Current Location */}
                <div>
                  <Span>Current Location</Span>

                  <Label className="text-primary">{parcel.location}</Label>
                </div>

                {/* Estimated Delivery */}
                <div>
                  <Span>Estimated Delivery</Span>

                  <Label className="text-primary">
                    {parcel.estimatedDelivery}
                  </Label>
                </div>

                {/* Current Status */}
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

        {/* =====================================================
            COLUMN 3 — TIMELINE + ACTION
        ====================================================== */}

        <div className="space-y-6">
          {/* Tracking Timeline */}
          <div className="rounded-md border border-secondary/10 bg-white p-5">
            <Heading as={5} className="mb-6">
              Tracking Timeline
            </Heading>

            <StatusTimeline steps={parcel.timeline} />
          </div>

          {/* Action */}
          <div className="rounded-md border border-secondary/10 bg-white p-5">
            <Heading as={5} className="mb-4">
              Update Parcel
            </Heading>

            <div className="space-y-4">
              {/* Status */}
              <div>
                <Label htmlFor="status">Status</Label>

                <select
                  id="status"
                  name="status"
                  defaultValue={parcel.status}
                  className="w-full rounded-md border border-secondary/30 px-4 py-3 text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location">Current Location</Label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  defaultValue={parcel.location}
                  placeholder="Enter current location"
                  className="w-full rounded-md border border-secondary/30 px-4 py-3 text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
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
