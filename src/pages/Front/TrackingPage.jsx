import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Span from "../../components/ui/Span";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import Heading from "../../components/ui/Heading";
import Loader from "../../components/ui/Loader";

import StatusTimeline from "../../components/widget/StatusTimeline";
import PageHeader from "../../components/widget/PageHeader";
import EmptyState from "../../components/widget/EmptyState";
import { statusOptions } from "../../utils/data";
import axios from "axios";

const TrackResult = () => {
  const { trackingId } = useParams();
  const navigate = useNavigate();

  const [parcel, setParcel] = useState(null);
  const [trackingInput, setTrackingInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTrackingInput(trackingId || "");
  }, [trackingId]);

useEffect(() => {
  const getTrackingData = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(`http://localhost:3000/api/track/${trackingId}`);

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
          <PageHeader
            className="text-center"
            title="Track Your Parcel"
            description="Check the latest delivery status of your package at any time."
          />

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
          {loading && <Loader />}

          {/* Error */}
          {!loading && error && (
            <EmptyState
              title="Parcel Not Found"
              message={error}
              buttonText="Back to Home"
              onButtonClick={() => navigate("/")}
            />
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
                <Heading as={3} className="mb-6">
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