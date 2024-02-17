import { useRouter } from "next/router";
import { FaRegTrashAlt } from "react-icons/fa";

const RemoveBtn = ({ id }) => {
  const deleteTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        window.location.reload();
      }
    }
  };

  return (
    <button onClick={deleteTopic} className="text-rose-600">
      <FaRegTrashAlt size={24} />
    </button>
  );
};

export default RemoveBtn;
