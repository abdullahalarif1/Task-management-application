import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  // Handle Delete
  const handleDelete = (_id) => {
    axios.delete(`http://localhost:5000/tasks/${_id}`)
    .then((res) => {
      if (res.data.deletedCount > 0) {
        toast('Deleted Successfully')
        const remaining = tasks.filter((t) => t._id !== _id);
        setTasks(remaining);
      }
    });
  };


  return (
    <div className="bg-color min-h-screen  pt-32 md:p-24">
      <div className="overflow-x-auto px-10 ">
        <Link to={"/"}>
          <h1 className="btn btn-outline btn-primary px-5">
            Add <AiOutlinePlus />
          </h1>
        </Link>

        <table className="table mt-7">
          {/* head */}
          <thead>
            <tr className="text-white uppercase">
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date</th>
              <th>Delete & Update</th>
            </tr>
          </thead>
          <tbody className="text-white ">
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <th>{index + 1}</th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td className=" ">{task.status}</td>
                <td>{task.date}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="border p-2 rounded-full btn-error btn-outline"
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <Link to={`/updateTask/${task._id}`}>
                    <button className="border p-2 rounded-full btn-warning btn-outline ">
                      <GrUpdate />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTasks;
