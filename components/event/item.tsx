"use client";

import Link from "next/link";
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
}

interface PropsI {
  event: EventI;
}

export default function Item(props: PropsI) {
  const [collapse, setCollapse] = useState(false);
  const { event } = props;

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setCollapse(!collapse);
  };

  return (
    <Link href={event.slug ? `/event/${event.slug}` : "/"}>
      <div className="bg-white border border-blue-100 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-103 duration-200 mb-4 cursor-pointer">
        <img
          src={event.url}
          alt={event.name}
          className="w-full h-64 rounded-t-2xl object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold text-blue-700">{event.name}</h2>
            <h3 className="text-lg text-blue-400 font-semibold">
              {event.date}
            </h3>
          </div>
          <h3 className="text-lg bg-blue-600 rounded-xl text-white px-3 py-1 inline-block mb-4">
            {event.eventType}
          </h3>
          <h3 className="text-lg text-gray-600 font-medium">{event.city}</h3>
          <button
            onClick={toggle}
            className="mt-4 px-4 py-2 text-lg rounded-xl border border-blue-300 text-blue-600 hover:bg-blue-100 transition"
          >
            {collapse ? "Ukryj opis" : "Opis"}
          </button>
          {collapse && (
            <div className="mt-4 text-gray-700 leading-relaxed">
              {event.desc}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
