import { useState } from "react";

import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { parcelTypes, paymentOptions } from "../../utils/data";

import SenderForm from "../../components/widget/SenderForm";
import RecieverForm from "../../components/widget/RecieverForm";
import ParcelDetailForm from "../../components/widget/ParcelDetailForm";
import PaymentType from "../../components/widget/PaymentType";

const AdminAddParcel = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [weight, setWeight] = useState(null);
  const [paymentType, setPaymentType] = useState(null);
  const [codAmount, setCodAmount] = useState(null);

  const isOther = selectedItem === "other";

  const selectedParcel = parcelTypes.find(
    (parcel) => parcel.value === selectedItem
  );

  // Delivery Charge
  const deliveryCharge = isOther
    ? Number(weight) <= 20
      ? 150
      : 150 + (Number(weight) - 20) * 8
    : selectedParcel?.baseRate || 0;

  // Total Cost = Delivery Charge + COD Amount
  const totalCost =
    deliveryCharge + (paymentType === "cod" ? Number(codAmount) || 0 : 0);

  const handleAddParcel = (e) => {
    e.preventDefault();

    const target = e.target;

    const senderName = target.senderName.value;
    const senderPhone = target.senderPhone.value;
    const receiverName = target.receiverName.value;
    const receiverPhone = target.receiverPhone.value;
    const from = target.from.value;
    const deliveryAddress = target.deliveryAddress.value;
    const description = target.itemDescription.value;

    const parcelDetails = {
      senderName,
      senderPhone,
      receiverName,
      receiverPhone,
      from,
      deliveryAddress,
      description,
      selectedItem,
      weight: isOther ? Number(weight) : null,
      deliveryCharge,
      paymentType,
      codAmount: paymentType === "cod" ? Number(codAmount) || 0 : 0,
      totalCost,
      status: "Booked",
      bookingDate: new Date(),
    };

    console.log(parcelDetails);
  };

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

      <div className="mb-6">
        <Heading as={3}>Add New Parcel</Heading>

        <Paragraph>
          Enter parcel and customer details to create a new shipment.
        </Paragraph>
      </div>

      <form
        onSubmit={handleAddParcel}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Sender */}
        <div className="rounded-md border border-secondary/10 bg-white p-6">
          <Heading as={5} className="mb-5">
            Sender Information
          </Heading>

          <SenderForm />
        </div>

        {/* Receiver + Parcel */}
        <div className="space-y-6">
          {/* Receiver */}
          <div className="rounded-md border border-secondary/10 bg-white p-6">
            <Heading as={5} className="mb-5">
              Receiver Information
            </Heading>

            <RecieverForm />
          </div>

          {/* Parcel Details */}
          <div className="rounded-md border border-secondary/10 bg-white p-6">
            <Heading as={5} className="mb-5">
              Parcel Details
            </Heading>

            <ParcelDetailForm
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              weight={weight}
              setWeight={setWeight}
              isOther={isOther}
              parcelTypes={parcelTypes}
            />
          </div>
        </div>

        {/* Payment + Cost */}
        <div>
          <div className="rounded-md border border-secondary/10 bg-white p-6 lg:sticky lg:top-6">
            <Heading as={5} className="mb-5">
              Payment & Cost
            </Heading>

            <div className="space-y-5">
              {/* Payment Type */}
              <div>
                <Label htmlFor="paymentType">Payment Type</Label>

                <PaymentType
                  paymentType={paymentType}
                  setPaymentType={setPaymentType}
                  paymentOptions={paymentOptions}
                />
              </div>

              {/* COD Amount */}
              {paymentType === "cod" && (
                <div>
                  <Label htmlFor="codAmount">COD Amount</Label>

                  <Input
                    id="codAmount"
                    name="codAmount"
                    type="number"
                    min="0"
                    value={codAmount || ""}
                    onChange={(e) => setCodAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>
              )}

              {/* Cost Breakdown */}
              <div className="space-y-3 border-t border-secondary/10 pt-4">
                {/* Item Type */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary">Item Type</span>

                  <span className="font-medium text-primary">
                    {selectedParcel?.label || "-"}
                  </span>
                </div>

                {/* Weight */}
                {isOther && weight && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary">Weight</span>

                    <span className="font-medium text-primary">
                      {weight} kg
                    </span>
                  </div>
                )}

                {/* Delivery Charge */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary">Delivery Charge</span>

                  <span className="font-medium text-primary">
                    ৳{deliveryCharge}
                  </span>
                </div>

                {/* COD Amount */}
                {paymentType === "cod" && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary">COD Amount</span>

                    <span className="font-medium text-primary">
                      ৳{codAmount || 0}
                    </span>
                  </div>
                )}

                {/* Total */}
                <div className="flex items-center justify-between border-t border-secondary/10 pt-4">
                  <Label>Total Cost</Label>

                  <Heading as={4} className="mb-0 text-accent">
                    ৳{totalCost}
                  </Heading>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Create Parcel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminAddParcel;