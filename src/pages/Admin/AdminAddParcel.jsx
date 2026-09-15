import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import PageHeader from "../../components/widget/PageHeader";
import SenderForm from "../../components/widget/SenderForm";
import ReceiverForm from "../../components/widget/ReceiverForm";
import ParcelDetailsForm from "../../components/widget/ParcelDetailsForm";
import PaymentCost from "../../components/widget/PaymentCost";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AdminAddParcel = () => {
  const [parcelType, setParcelType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [codAmount, setCodAmount] = useState(0);
  const [submitting, setSubmitting] = useState(false); //loading state handle

  const navigate = useNavigate();

  const totalCollection =
    (Number(deliveryCharge) || 0) + (Number(codAmount) || 0);

  // add form function
  const handleAddParcel = async (e) => {
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

  const parcelDetails = {
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
  };

  try {
    const res = await axios.post(
      "https://box-drop-backend.onrender.com/api/parcels",
      parcelDetails,
      { withCredentials: true }
    );
    setSubmitting(true)
    if (res?.data?.trackingId) {
      Swal.fire({
        icon: "success",
        title: "Parcel Created!",
        text: `Tracking ID: ${res.data.trackingId}`,
        confirmButtonColor: "#FA4318",
      }).then(() => navigate("/admin"));
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Failed to create parcel",
      text: error?.response?.data?.message || "Something went wrong",
      confirmButtonColor: "#FA4318",
    })
  }finally{
    setSubmitting(false)
  }
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
              submitting={submitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminAddParcel;
