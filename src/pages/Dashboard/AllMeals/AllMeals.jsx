import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic.";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

const AllMeals = () => {
  const axiosPublic = useAxiosPublic();
  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        heading="All Meals"
        subheading="Manage all the foods, see details, update and delete the foods"
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
                  <th>Likes</th>
                  <th>Reviews</th>
                  <th>Distributor Name</th>
                  <th>Update</th>
                  <th>Delete</th>
                  <th>View Meal</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.foodname}</td>
                    <td>{item.like}</td>
                    <td>{item.reviews}</td>
                    <td>{item.name}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="btn btn-ghost btn-lg"
                      >
                        <GrUpdate className="text-blue-600 text-sm"></GrUpdate>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt className="text-blue-600 text-sm"></FaTrashAlt>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaEye className="text-blue-600 text-sm"></FaEye>
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

export default AllMeals;
