import connectDB from "@/libs/mongodb";
import TopicModal from "@/models/topicModal";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();

  await connectDB();
  console.log("create post");

  await TopicModal.create({ title, description });

  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  console.log("get post ");

  const topics = await TopicModal.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  console.log("delete post");
  await TopicModal.findByIdAndDelete(id);
  return NextResponse.json({ message: "topic Deleted" }, { status: 200 });
}
