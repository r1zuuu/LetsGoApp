"use client";

import { useState, useEffect } from "react";
import UserI from "@/types/user";
import axios from "axios";
import Spinner from "../spinner/spinner";

export default function List() {
  const [users, setUsers] = useState<UserI[]>([]);

  const getUsers = async () => {
    const res = await axios.get<{ success: boolean; users: UserI[] }>(
      "/api/admin/get-users"
    );
    setUsers(res.data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (!users.length) {
    return (
      <div className="mt-10">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
        Lista użytkowników
      </h3>

      <div className="overflow-x-auto rounded-xl shadow-md bg-white">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-blue-100 text-blue-700 font-semibold">
            <tr>
              <th className="text-left px-4 py-3">Nazwa</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Hasło</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t border-blue-100 hover:bg-blue-50 transition"
              >
                <td className="px-4 py-2 text-black">{user.name}</td>
                <td className="px-4 py-2 text-black">{user.email}</td>
                <td className="px-4 py-2 text-black">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
