import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GiChefToque } from "react-icons/gi";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllReviews = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/review/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleServe = () => {};
  console.log(reviews);
  return (
    <div>
      <SectionTitle
        heading="All Reviews"
        subheading="Watch All the reviews by the users to the meals"
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
                {reviews.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.foodname}</td>
                    <td>{item.likes}</td>
                    <td>{item.review_count}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt className="text-blue-600 text-sm"></FaTrashAlt>
                      </button>
                    </td>
                    <td>
                      <Link to={`/meal/${item.id}`}
                        onClick={() => handleServe(item._id)}
                        className="btn btn-ghost btn-lg"
                      >
                        <GiChefToque className="text-blue-600 text-sm"></GiChefToque>
                      </Link>
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

export default AllReviews;