"use client";

import { FormEvent } from "react";
import UserI from "@/types/user";
import axios from "axios";

export default function Form() {
  const input_form =
    "p-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white text-gray-900";

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const password = (form[2] as HTMLInputElement).value;

    const user: UserI = { name, email, password };

    const response = await axios.post("/api/admin/add-user", { user });

    if (response.data.success) window.location.reload();
  };

  return (
    <div className="bg-blue-50 rounded-xl p-4 shadow-inner">
      <form className="flex flex-col gap-4" onSubmit={submit}>
        <input
          type="text"
          placeholder="Nazwa użytkownika"
          className={input_form}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className={input_form}
          required
        />
        <input
          type="text"
          placeholder="Hasło"
          className={input_form}
          required
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Dodaj użytkownika
        </button>
      </form>
    </div>
  );
}
