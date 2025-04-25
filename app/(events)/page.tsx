"use client";

import Item from "@/components/event/item";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CityFilter from "@/components/city-filter/page";
import EventFilter from "@/components/eventype-filter/form";

interface EventI {
  _id: string;
  name: string;
  desc: string;
  date: string;
  url?: string;
  price: number;
  city: string;
  slug: string;
  eventType: string;
}

export default function Home() {
  const [events, setEvents] = useState<EventI[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get("/api/home/get-events");
        setEvents(res.data.events);
      } catch (error) {
        console.error("Błąd podczas pobierania eventów:", error);
      }
    };

    getEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    return (
      (selectedCity ? event.city === selectedCity : true) &&
      (selectedEvent ? event.eventType === selectedEvent : true)
    );
  });

  const scrollToLowerSection = () => {
    filterRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div className="w-full h-screen relative overflow-hidden">
        <div className="relative z-20 w-full max-w-7xl mx-auto  py-20 flex flex-col items-center justify-center text-center">
          <p className="text-black font-bold text-4xl lg:text-5xl max-w-3xl leading-[1.7] text-balance">
            Odkryj, zaplanuj i doświadcz niezapomnianych wydarzeń – koncerty,
            festiwale, spotkania i imprezy blisko Ciebie!
          </p>

          <button
            onClick={scrollToLowerSection}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300"
          >
            Zobacz wydarzenia
          </button>
        </div>
      </div>
      <div ref={filterRef} className="flex justify-center items-center mt-10">
        <div className="shadow-lg rounded-full p-4 flex items-center gap-4">
          <div className="w-40">
            <CityFilter setSelectedCity={setSelectedCity} />
          </div>
          <div className="w-40">
            <EventFilter setSelectedEvent={setSelectedEvent} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-30 px-4">
        {filteredEvents.map((event) => (
          <Item key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}
