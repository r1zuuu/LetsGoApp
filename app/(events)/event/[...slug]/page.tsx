import connect from "@/db";
import Event from "@/models/Event";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
  searchParams: object;
};

export default async function SingleEvent(props: Props) {
  const { params } = props;
  const { slug } = params;

  let event;

  try {
    await connect();

    event = await Event.findOne({ slug });

    console.log(event);
  } catch (error) {}

  const priceDisplay = event.price === 0 ? "Za Darmo" : `${event.price} PLN`;

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start gap-8">
      <div className="w-full md:w-2/3 h-[80vh]">
        <img
          src={event.url}
          alt={event.name}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-blue-700 leading-tight">
          {event.name}
        </h1>
        <p className="text-3xl text-gray-600">
          Data: <span className="text-black font-semibold">{event.date}</span>
        </p>
        <p className="text-3xl text-gray-600">
          Cena: <span className="text-black font-semibold">{priceDisplay}</span>
        </p>
        <p className="text-lg text-black leading-relaxed">{event.desc}</p>
      </div>
    </div>
  );
}
