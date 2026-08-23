import { useParams, Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import Heading from "../../components/ui/Heading";
import Label from "../../components/ui/Label";
import Span from "../../components/ui/Span";
import StatusTimeline from "../../components/widget/StatusTimeline";

// dummy data
const parcel = {
  id: "BD10293",
  items: 2,
  status: "In Transit",
  sender: "Nirob Hasan",
  receiver: "Ayesha Khatun",
  destination: "House 12, Road 5, Chattogram",
  estimatedDelivery: "24 Aug, 2026",
  timeline: [
    { label: "Order Placed", date: "20 Aug, 2026", completed: true },
    { label: "Picked Up", date: "21 Aug, 2026", completed: true },
    { label: "In Transit", date: "22 Aug, 2026", completed: true },
    { label: "Out for Delivery", date: null, completed: false },
    { label: "Delivered", date: null, completed: false },
  ],
};

const ParcelDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <Link
        to="/dashboard"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
      >
        <FiArrowLeft />
        Back to My Parcels
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left: parcel info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-md border border-secondary/10 bg-white p-5">
            <Span>Tracking ID</Span>
            <Heading as={4} className="mb-3">
              {id}
            </Heading>

            <div className="space-y-3 border-t border-secondary/10 pt-4">
              <div>
                <Span>Sender</Span>
                <Label className="text-primary">{parcel.sender}</Label>
              </div>
              <div>
                <Span>Receiver</Span>
                <Label className="text-primary">{parcel.receiver}</Label>
              </div>
              <div>
                <Span>Destination</Span>
                <Label className="text-primary">{parcel.destination}</Label>
              </div>
              <div>
                <Span>Items</Span>
                <Label className="text-primary">{parcel.items} parcel(s)</Label>
              </div>
              <div>
                <Span>Estimated Delivery</Span>
                <Label className="text-primary">
                  {parcel.estimatedDelivery}
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Right: timeline */}
        <div className="lg:col-span-2">
          <div className="rounded-md border border-secondary/10 bg-white p-6">
            <Heading as={5} className="mb-6">
              Tracking Timeline
            </Heading>
            <StatusTimeline steps={parcel.timeline} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
