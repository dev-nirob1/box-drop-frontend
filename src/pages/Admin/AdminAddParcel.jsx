import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";
import PageHeader from "../../components/widget/PageHeader";
import SenderForm from "../../components/widget/SenderForm";
import ReceiverForm from "../../components/widget/ReceiverForm";
import Button from "../../components/ui/Button";
import Heading from "../../components/ui/Heading";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import ParcelDetailsForm from "../../components/widget/ParcelDetailsForm";

const AdminAddParcel = () => {
  // add form function
  const handleAddParcel = (e) => {
    e.preventDefault();
    const form = e.target;

    const senderName = form.senderName.value;
    const senderPhone = form.senderPhone.value;
    const from = form.from.value;

    const receiverName = form.receiverName.value;
    const receiverPhone = form.receiverPhone.value;
    const deliveryAddress = form.deliveryAddress.value;

    console.log("Form submitted", {
      senderName,
      senderPhone,
      from,
      receiverName,
      receiverPhone,
      deliveryAddress,
    });

    // Handle form submission logic here
  };
  return (
    <div>
      {/* Back link */}
      <Link
        to="/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
      >
        <FiArrowLeft />
        Back to All Parcels
      </Link>

      <PageHeader
        className="mb-6"
        title="Add New Parcel"
        description="Fill in the details to add a new parcel to the system."
      />

      {/* form here  */}
      <form onSubmit={handleAddParcel}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sender & Receiver */}
          <div className="border border-secondary/10 rounded p-4 h-fit">
            <SenderForm />
            <ReceiverForm />
          </div>

          {/* Parcel + Payment */}
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-4">
            {/* Parcel Details */}
            <ParcelDetailsForm />

            {/* Payment & Cost */}
            <div className="border border-secondary/10 rounded p-4 h-fit">
              <div className="space-y-4">
                <Heading as={5}>Payment and Cost</Heading>

                <div>
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    defaultValue=""
                    className="border border-secondary/10 py-3 px-3 focus:outline-none focus:ring-2 focus:ring-accent w-full rounded"
                  >
                    <option value="" disabled>
                      Select Payment Method
                    </option>
                    <option value="cod">Cash on Delivery</option>
                    <option value="prepaid">PrePaid</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="codAmount">COD Amount (৳)</Label>
                  <Input
                    id="codAmount"
                    name="codAmount"
                    type="number"
                    placeholder="Enter COD amount"
                  />
                </div>

                {/* Cart Summary */}
                <div className="rounded-lg border border-secondary/10 p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Delivery Charge</span>
                      <span className="font-medium">৳150</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-secondary">COD Amount</span>
                      <span className="font-medium">৳1,500</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Payment Method</span>
                      <span className="font-medium">Cash on Delivery</span>
                    </div>

                    <div className="border-t border-secondary/10 pt-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Total Collection</span>
                        <span className="text-lg font-bold text-accent">
                          ৳1,650
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button type="submit" variant="primary" className="mt-4 w-full">
                Add Parcel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminAddParcel;
