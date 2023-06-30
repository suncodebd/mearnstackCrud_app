"use client";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

function EditTopicForm({ id, title, description }) {
  const [editFromData, setEditFromData] = useState({
    newTitle: title,
    newDescription: description,
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editFromData),
      });

      if (!res.ok) {
        toast.error("Failed to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setEditFromData({
      ...editFromData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className=" bg-slate-200 h-screen flex items-center justify-center">
      <div className="w-4/5 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 p-4 w-96 border border-blue-400 rounded drop-shadow-xl "
        >
          <h2 className="font-bold text-xl text-center">Edit Topic</h2>
          <input
            onChange={handleChange}
            value={editFromData.newTitle}
            type="text"
            name="newTitle"
            placeholder="Topic Title"
            className="input input-bordered input-info w-full "
          />
          <textarea
            onChange={handleChange}
            className="textarea textarea-accent"
            placeholder="Description"
            name="newDescription"
            value={editFromData.newDescription}
          />
          <button className="btn btn-outline btn-info" type="submit">
            Update Topic
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditTopicForm;
