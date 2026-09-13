import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";
import PageHeader from "../../components/widget/PageHeader";
import SenderForm from "../../components/widget/SenderForm";
import ReceiverForm from "../../components/widget/ReceiverForm";
import ParcelDetailsForm from "../../components/widget/ParcelDetailsForm";
import PaymentCost from "../../components/widget/PaymentCost";
import { useState } from "react";

const AdminAddParcel = () => {
  const [parcelType, setParcelType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [codAmount, setCodAmount] = useState(0);

  const totalCollection =
    (Number(deliveryCharge) || 0) + (Number(codAmount) || 0);

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

    const weight = form.weight.value || 0;
    const description = form.description.value;

    console.log("Form submitted", {
      senderName,
      senderPhone,
      from,
      receiverName,
      receiverPhone,
      deliveryAddress,
      weight,
      description,
      deliveryCharge,
      parcelType,
      codAmount,
      paymentMethod,
      totalCollection,
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
            <ParcelDetailsForm
              parcelType={parcelType}
              setParcelType={setParcelType}
              deliveryCharge={deliveryCharge}
              setDeliveryCharge={setDeliveryCharge}
            />

            {/* Payment & Cost */}
            <PaymentCost
              deliveryCharge={deliveryCharge}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              codAmount={codAmount}
              setCodAmount={setCodAmount}
              totalCollection={totalCollection}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminAddParcel;
