import React from "react";

interface Props {
  selectedEvent: string;
  setSelectedEvent: React.Dispatch<React.SetStateAction<string>>;
}
const selectStyle =
  "p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 appearance-none w-full cursor-pointer";

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

export default function InputEventType({
  selectedEvent,
  setSelectedEvent,
}: Props) {
  console.log(setSelectedEvent);
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm mx-auto">
      <label htmlFor="city" className="text-lg font-medium text-gray-700 ">
        Wybierz typ Eventu:
      </label>
      <select
        id="city"
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
        className={selectStyle}
      >
        <option value="" className="text-gray-500">
          --Wybierz--
        </option>
        {techEvents.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
