import Form from "@/components/event/form";
import Link from "next/link";

export default function Events() {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <div>
        <Link
          href={"/service/admin"}
          className="text-blue-600 hover:text-blue-800 transition font-medium"
        >
          &larr; Powrót do panelu admina
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 pb-10 pt-10 text-center">
        Dodaj nowe wydarzenie
      </h2>

      <Form />
    </div>
  );
}
