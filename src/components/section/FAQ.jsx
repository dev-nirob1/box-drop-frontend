import { useState } from "react";
import Container from "../ui/Container";
import SectionHeader from "../widget/SectionHeader";
import FaqItem from "../widget/FaqItem";

const faqs = [
  {
    id: 1,
    question: "How do I track my parcel?",
    answer:
      "Enter your tracking ID on the homepage or the track page, and you'll see the live status and location of your parcel instantly.",
  },
  {
    id: 2,
    question: "How long does delivery take?",
    answer:
      "Standard delivery takes 3–5 business days. Express delivery is completed within 24–48 hours, and same-day delivery is available within city limits.",
  },
  {
    id: 3,
    question: "Do I need an account to track a parcel?",
    answer:
      "No, anyone can track a parcel using just the tracking ID. An account is only needed to view your full parcel history and manage shipments.",
  },
  {
    id: 4,
    question: "What happens if my parcel is delayed?",
    answer:
      "You'll get a status update explaining the delay, and our support team is available 24/7 if you need further assistance.",
  },
  {
    id: 5,
    question: "Is my parcel insured during delivery?",
    answer:
      "Yes, all parcels are covered under our standard insurance policy against loss or damage during transit.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-secondary/5">
      <Container className="max-w-3xl!">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
        />

        <div>
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
