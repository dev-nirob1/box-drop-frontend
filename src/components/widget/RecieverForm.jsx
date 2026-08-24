import Label from "../ui/Label";
import Input from "../ui/Input";

const RecieverForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="receiverName">Receiver Name</Label>

        <Input
          id="receiverName"
          name="receiverName"
          placeholder="Enter receiver name"
        />
      </div>

      <div>
        <Label htmlFor="receiverPhone">Receiver Phone</Label>

        <Input
          id="receiverPhone"
          name="receiverPhone"
          type="tel"
          placeholder="Enter phone number"
        />
      </div>

      <div>
        <Label htmlFor="deliveryAddress">Delivery Address</Label>

        <Input
          id="deliveryAddress"
          name="deliveryAddress"
          placeholder="Enter delivery address"
        />
      </div>
    </div>
  );
};

export default RecieverForm;
