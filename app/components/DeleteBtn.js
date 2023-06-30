"use client";

import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

function DeleteBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure ? you want to delete this post");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button
      onClick={removeTopic}
      type="button"
      className=" duration-150 ease-in-out hover:text-red-500"
    >
      <MdDeleteForever size={25} />
    </button>
  );
}

export default DeleteBtn;
