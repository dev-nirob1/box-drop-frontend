import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

import Container from "../components/ui/Container";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";
import Span from "../components/ui/Span";
import Label from "../components/ui/Label";
import Input from "../components/ui/Input";
import Heading from "../components/ui/Heading";

import StatusTimeline from "../components/widget/StatusTimeline";

const statusOptions = ["Booked", "On the Way", "Ready to Deliver", "Delivered"];

const TrackResult = () => {
  const { trackingId } = useParams();
  const navigate = useNavigate();

  const [parcel, setParcel] = useState(null);
  const [trackingInput, setTrackingInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getTrackingData = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(
          `http://localhost:3000/api/track/${trackingId}`,
        );

        setParcel(res.data.result);
      } catch (error) {
        setParcel(null);
        setError(
          error?.response?.data?.message ||
            "Unable to retrieve parcel tracking information.",
        );
      } finally {
        setLoading(false);
      }
    };

    getTrackingData();
  }, [trackingId]);

  const handleSearch = (e) => {
    e.preventDefault();

    const value = trackingInput.trim();

    if (!value) return;

    navigate(`/track/${value}`);
    setTrackingInput("");
  };

  const getTimelineSteps = () => {
    if (!parcel) return [];

    return statusOptions.map((status) => {
      const historyItem = parcel.statusHistory?.find(
        (item) => item.status === status,
      );

      return {
        label: status,
        completed: !!historyItem,
        date: historyItem?.date || historyItem?.updatedAt || null,
      };
    });
  };

  return (
    <section className="pt-30 pb-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Heading as="h1">Track Your Parcel</Heading>

            <Paragraph className="mt-3">
              Enter your tracking ID to check the latest delivery status of your
              parcel.
            </Paragraph>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="mx-auto mt-8 flex max-w-lg gap-2 rounded bg-white p-2 shadow-sm"
          >
            <Input
              type="text"
              name="trackingId"
              value={trackingInput}
              onChange={(e) => setTrackingInput(e.target.value)}
              placeholder="Enter tracking ID"
              className="flex-1 border-0 focus:ring-0"
            />

            <Button type="submit" variant="primary" className="shrink-0">
              Track Parcel
            </Button>
          </form>

          {/* Loading */}
          {loading && (
            <div className="mt-12 text-center">
              <Paragraph>Loading tracking information...</Paragraph>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="mt-12 rounded border border-secondary/10 bg-white p-8 text-center">
              <Heading as="h3">Parcel Not Found</Heading>

              <Paragraph className="mt-2">{error}</Paragraph>

              <Button
                type="button"
                variant="primary"
                className="mt-5"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </div>
          )}

          {/* Tracking Result */}
          {!loading && parcel && (
            <div className="mt-12 rounded-lg bg-white p-6 shadow-sm md:p-8">
              <div className="border-b border-secondary/10 pb-6">
                <Label>Tracking ID</Label>

                <Span className="mt-1 block text-lg font-semibold text-primary">
                  {parcel.trackingId}
                </Span>
              </div>

              <div className="grid gap-6 border-b border-secondary/10 py-6 sm:grid-cols-2">
                <div>
                  <Label>Current Status</Label>

                  <Span className="mt-1 block font-medium text-primary">
                    {parcel.status}
                  </Span>
                </div>

                <div>
                  <Label>Booking Date</Label>

                  <Span className="mt-1 block">
                    {new Date(parcel.bookingDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </Span>
                </div>
              </div>

              <div className="pt-6">
                <Heading as="h3" className="mb-6">
                  Delivery Progress
                </Heading>

                <StatusTimeline steps={getTimelineSteps()} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TrackResult;
