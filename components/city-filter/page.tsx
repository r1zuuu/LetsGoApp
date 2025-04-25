"use client";

import { useState } from "react";

interface Props {
  setSelectedCity: (city: string) => void;
}

const selectStyle =
  "mb-0 p-3 pr-10 border border-gray-300 rounded-xl shadow-md bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full cursor-pointer appearance-none relative";

const cities = [
  "Warszawa",
  "Kraków",
  "Łódź",
  "Wrocław",
  "Poznań",
  "Gdańsk",
  "Szczecin",
  "Bydgoszcz",
  "Lublin",
  "Białystok",
  "Katowice",
  "Gdynia",
  "Częstochowa",
  "Radom",
  "Sosnowiec",
  "Toruń",
  "Kielce",
  "Gliwice",
  "Zabrze",
  "Olsztyn",
  "Rzeszów",
  "Bielsko-Biała",
  "Bytom",
  "Zielona Góra",
  "Opole",
  "Gorzów Wielkopolski",
  "Elbląg",
  "Płock",
  "Wałbrzych",
  "Tarnów",
  "Chorzów",
  "Legionowo",
  "Chotomów",
  "Łajski",
  "Koszalin",
  "Sopot",
  "Przemyśl",
  "Kalisz",
  "Tczew",
  "Nowy Sącz",
  "Piotrków Trybunalski",
  "Gniezno",
  "Ostrołęka",
  "Jelenia Góra",
  "Siedlce",
  "Mielec",
  "Ełk",
  "Świdnica",
  "Puławy",
  "Zamość",
  "Tarnowskie Góry",
  "Rumia",
  "Legnica",
  "Starogard Gdański",
  "Suwałki",
  "Inowrocław",
  "Piła",
  "Lubin",
  "Ostrów Wielkopolski",
  "Skierniewice",
];

export default function EventFilter({ setSelectedCity }: Props) {
  const [city, setCity] = useState("");

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setCity(selected);
    setSelectedCity(selected);
  };

  return (
    <div className="relative">
      <select value={city} onChange={handleCityChange} className={selectStyle}>
        <option value="">Miasto</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
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