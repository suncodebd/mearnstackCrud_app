import connectDB from "@/libs/mongodb";
import TopicModal from "@/models/topicModal";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectDB();
  console.log("update requist");
  await TopicModal.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();
  console.log("update get rq");

  const topic = await TopicModal.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
