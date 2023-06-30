"use client";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import DeleteBtn from "./DeleteBtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fethch topics");
    }

    return res.json();
  } catch (error) {
    console.log(`Error loading topics: `, error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          className="flex gap-1 justify-between border border-emerald-950 p-3 my-2 rounded"
          key={t._id}
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <p className="text-xl italic">{t.description}</p>
          </div>

          <div className="flex gap-2 justify-between items-center">
            <Link
              href={`/editTopic/${t._id}`}
              className="duration-100 hover:text-blue-500"
            >
              <BiEdit size={25} />
            </Link>

            <DeleteBtn id={t._id} />
          </div>
        </div>
      ))}
    </>
  );
}
