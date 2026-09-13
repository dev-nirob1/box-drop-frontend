import Heading from "../ui/Heading";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Span from "../ui/Span";

const ParcelDetailsForm = ({parcelType, setParcelType, deliveryCharge, setDeliveryCharge}) => {
  return (
    <div className="border border-secondary/10 rounded p-4 h-fit">
      <div className="space-y-4">
        <Heading as={5}>Parcel Details</Heading>

        {/* Item Type */}
        <div>
          <Label htmlFor="parcelType">Parcel Type</Label>

          <select
            id="parcelType"
            name="parcelType"
            value={parcelType}
            onChange={(e) => setParcelType(e.target.value)}
            className="border border-secondary/10 bg-background py-3 px-3 focus:outline-none focus:ring-2 focus:ring-accent w-full rounded"
          >
            <option value="" disabled>
              Select Parcel Type
            </option>

            <option value="document">Document</option>
            <option value="polybag">Poly Bag</option>
            <option value="parcel">Parcel / Box</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Weight */}
        <div>
          <Label htmlFor="weight">Weight (kg)</Label>

          <Input
            id="weight"
            name="weight"
            type="number"
            placeholder="Enter parcel weight"
            step="0.01"
          />

          <Span className="mt-1">
            Up to 20 kg: ৳150 | Above 20 kg: ৳8/kg
          </Span>
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Description</Label>

          <Input
            id="description"
            name="description"
            placeholder="Enter parcel description"
          />
        </div>

        {/* Delivery Charge */}
        <div>
          <Label htmlFor="deliveryCharge">Delivery Charge (৳)</Label>

          <Input
            id="deliveryCharge"
            name="deliveryCharge"
            type="number"
            placeholder="Enter delivery charge"
            value={deliveryCharge}
            onChange={(e) => setDeliveryCharge(e.target.value)} 
          />
        </div>
      </div>
    </div>
  );
};

export default ParcelDetailsForm;
