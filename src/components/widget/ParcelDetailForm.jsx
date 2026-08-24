import Input from "../ui/Input";
import Label from "../ui/Label";
import Paragraph from "../ui/Paragraph";

const ParcelDetailForm = ({itemType, setItemType, setWeight, itemTypes,isOther, weight}) => {
  return (
    <div className="space-y-4">
      {/* Item Type */}
      <div>
        <Label htmlFor="itemType">Item Type</Label>

        <select
          id="itemType"
          name="itemType"
          value={itemType}
          onChange={(e) => {
            setItemType(e.target.value);
            setWeight("");
          }}
          className="w-full rounded-md border border-secondary/30 px-4 py-3 text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          {itemTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Weight — Only for Other */}
      {isOther && (
        <div>
          <Label htmlFor="weight">Weight (kg)</Label>

          <Input
            id="weight"
            name="weight"
            type="number"
            min="0.1"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 2.5"
          />

          <Paragraph className="mt-1 text-xs">
            Up to 20 kg: ৳150 | Above 20 kg: ৳7/kg
          </Paragraph>
        </div>
      )}

      {/* Description */}
      <div>
        <Label htmlFor="itemDescription">Description</Label>

        <Input
          id="itemDescription"
          name="itemDescription"
          placeholder="e.g. Laptop charger, documents"
        />
      </div>
    </div>
  );
};

export default ParcelDetailForm;
