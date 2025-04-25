"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

interface PropsI {
  user: any;
}

export default function Header(props: PropsI) {
  const { user } = props;

  return (
    <header className="bg-white shadow-md mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-xl sm:text-3xl font-bold  text-blue-700 hover:text-blue-800 transition">
            LetsGoApp
          </h1>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            className="text-blue-600 sm:text-xl text-sm hover:text-blue-800 transition font-medium"
            href={"/service/admin"}
          >
            Admin
          </Link>

          {user?.name && (
            <div className="flex items-center space-x-2 ml-4">
              <span className="text-black font-bold text-sm sm:text-xl text-black-600 font-semibold">
                {user.name}
              </span>
              <button
                onClick={() => signOut()}
                className="ml-1 px-3 py-1 rounded-xl hover:bg-blue-100 text-sm transition"
                aria-label="Sign out"
              >
                <img
                  src="/logout.svg"
                  alt="Logout icon"
                  className="w-5 h-5 inline"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
