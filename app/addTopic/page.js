"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTopic() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check input feld is ematy
    if (!formData.title || !formData.description) {
      toast.error("Emty From data please fell data");

      return;
    }
    // Perform form submission logic here

    try {
      const response = await fetch("http://localhost:3000/api/topics", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission
        toast.success("From submit sucessfuly", { autoClose: 1000 });
        router.push("/");
      } else {
        // Handle form submission error
        toast.error("Hey! something Wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className=" bg-slate-200 h-screen flex items-center justify-center">
      <div className="w-4/5 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 p-4 w-96 border border-blue-400 rounded drop-shadow-xl "
        >
          <h2 className="font-bold text-xl text-center">Add Topic</h2>
          <input
            value={formData.title}
            onChange={handleInputChange}
            type="text"
            name="title"
            placeholder="Topic Title"
            className="input input-bordered input-info w-full "
            required
          />
          <textarea
            className="textarea textarea-accent"
            onChange={handleInputChange}
            placeholder="Description"
            name="description"
            value={formData.description}
            required
          />
          <button className="btn btn-outline btn-info" type="submit">
            Add topic
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default AddTopic;
