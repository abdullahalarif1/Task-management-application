import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTask = () => {
  const loader = useLoaderData();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  console.log(loader);

   
  
  const handleUpdate = (data) => {
     const updateTask = {
       title: data.title,
       description: data.description,
       status: data.status,
      
     };
     console.log(updateTask);

     // update task
     axios.put(`http://localhost:5000/tasks/${loader._id}`, updateTask)
     .then(res => {
      if(res.data.modifiedCount > 0){
        toast('Task Updated Successfully!!!')
      }
     })
  }


  return (
    <div className="bg-color min-h-screen pt-20 px-5 md:p-24">
      <h1 className="text-3xl text-white text-center uppercase  pb-10">
        Task <span className="text-primary"> Update</span>
      </h1>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="card  max-w-md mx-auto  shadow-2xl text-white border border-indigo-800">
          <div className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white ">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input border border-indigo-800 input-bordered rounded bg-color"
                name="title"
                defaultValue={loader?.title}
                {...register("title")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Status</span>
              </label>
              <select
                {...register("status")}
                className=" rounded border-indigo-800  input input-bordered bg-color"
                defaultValue={loader?.status}
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
                className="rounded  p-4 bg-color border border-indigo-800 "
                placeholder="Type here"
                cols="30"
                rows="5"
                defaultValue={loader?.description}
              ></textarea>
            </div>
          </div>

          <div className="  mx-8">
            <button type="submit" className="btn btn-primary w-full mb-10">
              Update Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
