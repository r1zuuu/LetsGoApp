import Form from "@/components/user/form";
import Link from "next/link";
import List from "@/components/users/list";

export default function Users() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-4 sm:p-6 mt-6 sm:mt-10">
      <div className="mb-4 sm:mb-6">
        <Link
          href={"/service/admin"}
          className="text-blue-600 hover:text-blue-800 transition font-medium text-sm sm:text-base"
        >
          &larr; Powrót do panelu admina
        </Link>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 sm:mb-6 text-center">
        Zarządzanie użytkownikami
      </h2>

      <div className="mb-6 sm:mb-8">
        <Form />
      </div>

      <div className="overflow-x-auto">
        <List />
      </div>
    </div>
  );
}