import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ServeMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { data: mealrequest = [], refetch } = useQuery({
    queryKey: ["mealrequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/mealrequest");
      return res.data;
    },
  });
  const handleServe = id =>{
    
  }
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
                <tr className="">
                  <th></th>
                  <th>Title</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Delete</th>
                  <th>View Meal</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {mealrequest.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.foodname}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        onClick={() => handleServe(item._id)}
                        className="btn btn-ghost btn-lg"
                      >
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
