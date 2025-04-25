"use client";

import { useState } from "react";

interface Props {
  setSelectedEvent: (city: string) => void;
}
const selectStyle =
  "mb-0 p-3 pr-10 border border-gray-300 rounded-xl shadow-md bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full cursor-pointer appearance-none relative";

const techEvents = [
  "Spotkanie branżowe IT",
  "Warsztaty programistyczne",
  "Hackathon",
  "Konferencja technologiczna",
  "Webinar o sztucznej inteligencji",
  "Meetup JavaScript",
  "Spotkanie startupowe",
  "Koncert",
  "Szkolenie z chmurowych usług",
  "Sympozjum na temat bezpieczeństwa IT",
  "Targi IT i nowych technologii",
  "Prezentacja nowego oprogramowania",
  "Panel dyskusyjny o blockchainie",
  "Spotkanie z ekspertami UX/UI",
  "Spotkanie networkingowe w branży tech",
  "Konkurs programistyczny",
  "Demo day startupów",
  "Spotkanie z inwestorami",
  "Warsztaty z analizy danych",
  "Live stream z konferencji technologicznej",
  "Inne",
];

export default function EventFilter({ setSelectedEvent }: Props) {
  const [event, setEvent] = useState("");

  const handleEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setEvent(selected);
    setSelectedEvent(selected);
  };

  return (
    <div>
      <select
        value={event}
        onChange={handleEventChange}
        className={selectStyle}
      >
        <option value="">Event</option>
        {techEvents.map((event, index) => (
          <option key={index} value={event}>
            {event}
          </option>
        ))}
      </select>
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
