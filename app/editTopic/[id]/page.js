import EditTopicForm from "@/app/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  console.log("id", id);

  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}

export default EditTopic;
