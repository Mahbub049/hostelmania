import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Chip } from "@material-tailwind/react";
import { GiMeal } from "react-icons/gi";
import Swal from "sweetalert2";

const ServeMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { data: mealrequest = [], refetch } = useQuery({
    queryKey: ["mealrequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/mealrequest");
      return res.data;
    },
  });
  const handleServe = (id) => {
      axiosSecure.patch(`/mealrequest/${id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
                title: "Served!",
                text: "Your food has been delivered.",
                icon: "success",
              });
          }
      })
  };
  return (
    <div>
      <SectionTitle
        heading="Serve Meals"
        subheading="Serve the requested meals by the users"
      ></SectionTitle>
      <div>
        <div className="mt-12 mx-12">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead className="text-center text-blue-400">
                <tr className="text-lg">
                  <th></th>
                  <th>Title</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Status</th>
                  <th>Serve Meal</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {mealrequest.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.foodname}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      {
                        item.status === "pending" && <Chip className="uppercase bg-red-300 w-[150px] mx-auto" value={item.status} /> || 
                        item.status === "delivered" && <Chip color="green" className="uppercase w-[150px] mx-auto" value={ item.status}/>
                      }
                      </td>
                    <td>
                      <button
                        onClick={() => handleServe(item._id)}
                        className="btn btn-ghost bg-blue-500 text-white"
                      >
                        <GiMeal></GiMeal>
                        Serve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeMeals;