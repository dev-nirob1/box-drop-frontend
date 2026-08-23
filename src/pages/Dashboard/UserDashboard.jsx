import { Link } from "react-router";
import { FiPackage, FiTruck, FiCheckCircle } from "react-icons/fi";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import { cn } from "../../utils/cn";

const stats = [
  { label: "Total Parcels", value: 12, icon: FiPackage },
  { label: "In Transit", value: 3, icon: FiTruck },
  { label: "Delivered", value: 8, icon: FiCheckCircle },
];

const statusStyles = {
  Pending: "bg-secondary/10 text-secondary",
  "In Transit": "bg-amber-100 text-amber-600",
  Delivered: "bg-green-100 text-green-600",
};

const parcels = [
  {
    id: "BD10293",
    items: 2,
    status: "In Transit",
    location: "Chattogram Hub",
    date: "22 Aug, 2026",
  },
  {
    id: "BD10287",
    items: 1,
    status: "Delivered",
    location: "Dhaka",
    date: "20 Aug, 2026",
  },
  {
    id: "BD10251",
    items: 4,
    status: "Pending",
    location: "Sylhet Warehouse",
    date: "18 Aug, 2026",
  },
];

const UserDashboard = () => {
  return (
    <div>
      {/* Greeting */}
      <div className="mb-6">
        <Heading as={3}>Welcome back, Nirob</Heading>
        <Paragraph>Here's an overview of your parcels.</Paragraph>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-md border border-secondary/10 bg-white p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded bg-accent/10">
              <item.icon className="text-2xl text-accent" />
            </div>
            <div>
              <Heading as={3} className="mb-0">
                {item.value}
              </Heading>
              <Paragraph className="text-sm">{item.label}</Paragraph>
            </div>
          </div>
        ))}
      </div>

      {/* Parcel table */}
      <div className="rounded-md border border-secondary/10 bg-white">
        <div className="border-b border-secondary/10 px-5 py-4">
          <Heading as={5} className="mb-0">
            My Parcels
          </Heading>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-secondary/10 text-secondary">
                <th className="px-5 py-3 font-medium">Tracking ID</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel) => (
                <tr
                  key={parcel.id}
                  className="border-b border-secondary/10 last:border-0"
                >
                  <td className="px-5 py-4 font-medium text-primary">
                    {parcel.id}
                  </td>
                  <td className="px-5 py-4 text-secondary">{parcel.items}</td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-medium",
                        statusStyles[parcel.status],
                      )}
                    >
                      {parcel.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-secondary">
                    {parcel.location}
                  </td>
                  <td className="px-5 py-4 text-secondary">{parcel.date}</td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      to={`/dashboard/parcel/${parcel.id}`}
                      className="font-medium text-accent hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
