import { useEffect, useState } from "react";

const Home = () => {
  const [currentDate, setCurrentDate] = useState("")


  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);



   // handle submit


  return (
    <div className="bg-color   px-12 py-20">
      <h1 className="text-3xl text-white text-center uppercase  py-10">
        Task <span className="text-primary"> Management</span>
      </h1>
      <div className="card   mx-auto  shadow-2xl text-white border border-indigo-800">
        <div className="card-body grid md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white ">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered rounded bg-color"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Status</span>
            </label>
            <select
              name="status"
              className=" rounded  input input-bordered bg-color"
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
              className="rounded  p-4 bg-color"
              placeholder="Type here"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Date</span>
            </label>
            <input
              type="date"
              value={currentDate}
              className="rounded input input-bordered bg-color"
              readOnly
            />
          </div>
        </div>
        <div className=" mt-6 mx-8">
          <button className="btn btn-primary w-full mb-10">Add New Task</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
