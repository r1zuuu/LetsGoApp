"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Login = () => {
  const input_form =
    "p-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white text-gray-900";

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form[0] as HTMLInputElement).value;
    const password = (form[1] as HTMLInputElement).value;

    const res: any = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.status === 401) {
      toast.error("Nie zalogowano");
      return;
    }

    window.location.reload();
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
        Zaloguj się
      </h2>

      <form className="flex flex-col gap-4" onSubmit={submit}>
        <label className="flex flex-col text-sm font-medium text-blue-600">
          Email
          <input
            name="email"
            type="email"
            className={input_form}
            required
          />
        </label>

        <label className="flex flex-col text-sm font-medium text-blue-600">
          Hasło
          <input
            name="password"
            type="password"
            className={input_form}
            required
          />
        </label>

        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Zaloguj się
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default Login;
