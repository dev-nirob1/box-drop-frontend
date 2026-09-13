import Heading from "../ui/Heading";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Paragraph from "../ui/Paragraph";

const ParcelDetailsForm = () => {
  return (
    <div className="border border-secondary/10 rounded p-4 h-fit">
      <div className="space-y-4">
        <Heading as={5}>Parcel Details</Heading>

        {/* Item Type */}
        <div>
          <Label htmlFor="itemType">Item Type</Label>

          <select
            id="itemType"
            name="itemType"
            defaultValue=""
            className="border border-secondary/10 bg-background py-3 px-3 focus:outline-none focus:ring-2 focus:ring-accent w-full rounded"
          >
            <option value="" disabled>
              Select Item Type
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

          <Paragraph className="mt-1 text-xs">
            Up to 20 kg: ৳150 | Above 20 kg: ৳8/kg
          </Paragraph>
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
          />
        </div>
      </div>
    </div>
  );
};

export default ParcelDetailsForm;
