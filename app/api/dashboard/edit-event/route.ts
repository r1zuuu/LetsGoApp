import { NextRequest, NextResponse } from "next/server";
import connect from "@/db";
import Event from "@/models/Event";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, updatedEvent } = data;

    if (!id || !updatedEvent) {
      return NextResponse.json({ success: false});
    }

    await connect();

    const event = await Event.findByIdAndUpdate(id, updatedEvent, { new: true });

    if (!event) {
      return NextResponse.json({ success: false});
    }

    return NextResponse.json({ success: true});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false});
  }
}