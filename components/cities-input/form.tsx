import React from "react";

interface Props {
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
}
const selectStyle =
  "p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 appearance-none w-full cursor-pointer";

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

export default function InputCities({ selectedCity, setSelectedCity }: Props) {
  console.log(setSelectedCity);
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm mx-auto">
      <label htmlFor="city" className="text-lg font-medium text-gray-700 ">
        Wybierz miasto:
      </label>
      <select
        id="city"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className={selectStyle}
      >
        <option value="" className="text-gray-500">
          --Wybierz--
        </option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
