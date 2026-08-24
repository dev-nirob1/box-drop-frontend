import Input from "../ui/Input";
import Label from "../ui/Label";

const SenderForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="senderName">Sender Name</Label>

        <Input
          id="senderName"
          name="senderName"
          placeholder="Enter sender name"
        />
      </div>

      <div>
        <Label htmlFor="senderPhone">Sender Phone</Label>

        <Input
          id="senderPhone"
          name="senderPhone"
          type="tel"
          placeholder="Enter phone number"
        />
      </div>

      <div>
        <Label htmlFor="from">From</Label>

        <Input id="from" name="from" placeholder="Enter sender's location" />
      </div>
    </div>
  );
};

export default SenderForm;
