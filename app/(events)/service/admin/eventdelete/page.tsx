"use client";

import Item from "@/components/item-delete/item";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface EventI {
  _id: string;
  name: string;
  desc: string;
  date: string;
  url?: string;
  price: number;
}

export default function Dashboard() {
  const [events, setEvents] = useState<EventI[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const res: any = await axios.get("/api/home/get-events");
      setEvents(res?.data.events);
    };

    getEvents();
  }, []);

  const deleteEvent = async (id: string) => {
    try {
      const res = await axios.post("/api/dashboard/delete-event", { id });

      if (res.data.success) {
        // Usuwanie wydarzenia z lokalnego stanu
        setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
      }
    } catch (error) {
      toast.error("Wystąpił błąd podczas usuwania wydarzenia");
    }
  };

  return (
    
    <div><Link
          href={"/service/admin"}
          className="text-blue-600 hover:text-blue-800 transition font-medium"
        >
          &larr; Powrót do panelu admina
        </Link>
      {events.map((event: EventI) => (
        <Item key={event._id} event={event} onDelete={deleteEvent} />
      ))}
    </div>
  );
}