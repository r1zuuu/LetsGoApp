"use client";

import { useState } from "react";

interface EventI {
  _id: string;
  name: string;
  desc: string;
  date: string;
  url?: string;
  price: number;
  slug: string;
  eventType: string;
  city: string;
}

interface PropsI {
  event: EventI;
  onDelete: (id: string) => void; 
}

export default function Item(props: PropsI) {
  const [collapse, setCollapse] = useState(false);
  const { event, onDelete } = props;
  
  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-103 duration-200 mb-4 cursor-pointer p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-blue-700">{event.name}</h2>
          <h3 className="text-sm text-blue-400">{event.date}</h3>
          <h3 className="text-sm text-blue-400">{event.city}</h3>
          <h3 className="text-sm text-blue-400">{event.eventType}</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
          <button
            onClick={() => onDelete(event._id)}
            className="px-4 py-2 text-sm rounded-xl border border-red-300 text-red-600 hover:bg-red-100 transition"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}