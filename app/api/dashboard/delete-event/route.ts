import { NextRequest, NextResponse } from "next/server";
import connect from "@/db";
import Event from "@/models/Event";

type ResponseData = {
  success: boolean;
  message?: string;
};

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { id } = data; // id jako identyfikator

  if (!id) {
    return NextResponse.json<ResponseData>({
      success: false,
    });
  }

  try {
    await connect();

    const deletedEvent = await Event.findByIdAndDelete(id); // Funkcja oparta na mongoDb

    return NextResponse.json<ResponseData>({
      success: true,
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json<ResponseData>({
      success: false,
    });
  }
}
