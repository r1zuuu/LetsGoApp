"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import CityInput from "@/components/cities-input/form";
import InputEventType from "@/components/eventype-input/form";

export default function Form() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const input_form =
    "p-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white text-gray-900";

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const currentDate = new Date();
    const eventDate = new Date(
      (form.elements.namedItem("date") as HTMLInputElement).value
    );

    if (eventDate <= currentDate) {
      toast.error("Niepoprawna data. Nie można dodawać wydarzeń z przeszłości");
      return;
    }

    if (!selectedCity) {
      toast.error("Wybierz miasto!");
      return;
    }

    if (!selectedEvent) {
      toast.error("Wybierz typ wydarzenia!");
      return;
    }

    const event = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      desc: (form.elements.namedItem("desc") as HTMLTextAreaElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      url: (form.elements.namedItem("url") as HTMLInputElement).value,
      price: (form.elements.namedItem("price") as HTMLInputElement).value,
        
      city: selectedCity,
      eventType: selectedEvent,
    };

    if (event.desc.length > 2000) {
      toast.error("Opis nie może mieć więcej niż 2000 znaków");
      return;
    }

    try {
      const res = await axios.post("/api/dashboard/add-event", { event });

      if (res.status === 200 || res.status === 201) {
        window.location.href = "http://localhost:3000/";
      } else {
        toast.error("Błąd przy dodawaniu wydarzenia");
      }
    } catch (err) {
      toast.error("Błąd połączenia z serwerem");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col max-w-[400px] space-y-4 mx-auto"
        onSubmit={submit}
      >
        <input
          type="text"
          name="name"
          placeholder="Nazwa wydarzenia"
          className={input_form}
          required
        />
        <CityInput
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
        <InputEventType
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
        />
        <textarea
          name="desc"
          placeholder="Opis"
          className={input_form}
          required
        />
        <input type="date" name="date" className={input_form} required />
        <input
          type="text"
          name="url"
          className={input_form}
          placeholder="Link do obrazka"
          required
        />
        <input
          type="text"
          name="price"
          className={input_form}
          placeholder="Cena"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Dodaj
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}
