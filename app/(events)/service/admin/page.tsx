import Link from "next/link";

export default function Admin() {
  const btn_styles =
    "px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition border border-blue-600";

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
        Panel admina
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-4 text-center align-middle">
        <Link href={"/service/admin/users"} className={btn_styles}>
          Panel Użytkowników
        </Link>
        <Link href={"/service/admin/eventadd"} className={btn_styles}>
          Dodaj wydarzenie
        </Link>
        <Link href={"/service/admin/eventdelete"} className={btn_styles}>
          Usuń wydarzenie
        </Link>
        <Link href={"/service/admin/eventedit"} className={btn_styles}>
          Edytuj wydarzenie
        </Link>

      </div>
    </div>
  );
}