import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  const onSubmit = (data) => {
    // Create a new class object with the form data
    const newClass = {
      title: data.title,
      description: data.description,
      status: data.status,
      date: data.date,
    };
    console.log(newClass);
    reset();

    // post mongo server
    axios
      .post("https://task-management-server-woad.vercel.app/tasks", newClass)
      .then((res) => {
        console.log("successfully posted:", res);
        if (res.data.insertedId) {
          toast("Successfully added Task");
        }
      })
      .catch((error) => {
        console.log("Error posting to the server:", error);
      });
  };

  return (
    <div className="bg-color   px-12 py-20">
      <h1 className="text-3xl text-white text-center uppercase  py-10">
        Task <span className="text-primary"> Management</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card   mx-auto  shadow-2xl text-white border-2 border-indigo-800">
          <div className="card-body grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white ">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input border border-indigo-400 input-bordered rounded bg-color"
                name="title"
                required
                {...register("title")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Status</span>
              </label>
              <select
                {...register("status")}
                className=" rounded border-indigo-400  input input-bordered bg-color"
                required
              >
                <option className="bg-indigo-900" value="todo">
                  To Do
                </option>
                <option className="bg-indigo-900" value="inProgress">
                  In Progress
                </option>
                <option className="bg-indigo-900" value="completed">
                  Completed
                </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <textarea
                {...register("description")}
                className="rounded  p-4 bg-color border border-indigo-400 "
                placeholder="Type here"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Date</span>
              </label>
              <input
                {...register("date")}
                type="date"
                value={currentDate}
                className="rounded border-indigo-400  input input-bordered bg-color"
                readOnly
              />
            </div>
          </div>

          <div className=" mt-6 mx-8">
            <button type="submit" className="btn btn-primary w-full mb-10">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
