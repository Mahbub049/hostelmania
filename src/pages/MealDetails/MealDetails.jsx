import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { StickyNavbar } from "./../../components/Navbar/Navbar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "@material-tailwind/react";
import { BiSolidLike } from "react-icons/bi";
import useAuth from "./../../hooks/useAuth";
import { GiMeal } from "react-icons/gi";
import { FcAlarmClock, FcRating } from "react-icons/fc";
import Swal from "sweetalert2";
const MealDetails = () => {
  // const meal = useLoaderData();
  // const {foodname, name, description, ingredients, time, rating, like, reviews} = meal;
  // console.log(meal)
  const { id } = useParams();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: menu = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["menu", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/menu/${id}`);
      return data;
    },
  });

  const {
    _id,
    foodname,
    image,
    name,
    description,
    ingredients,
    time,
    rating,
    like,
    reviews,
  } = menu;

  const incrementLike = async (id) => {
    console.log(id);
    const likeCount = axiosPublic.patch(`/like/${id}`, menu).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
      }
    });
  };


  return (
    <div className="container mx-auto">
      <StickyNavbar></StickyNavbar>
      <div className="my-12">
        <figure className="relative h-96 w-full">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={image}
            alt="nature image"
          />
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography
                variant="h5"
                className="text-2xl font-bold"
                color="blue-gray"
              >
                {foodname}
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                Distributor: {name}
              </Typography>
            </div>
          </figcaption>
        </figure>
        <div className="mt-12 flex justify-between">
          <div className="flex-1">
            <p className="text-lg font-bold mb-2">
              Description: <span className="font-normal">{description}</span>
            </p>
            <p className="text-lg font-bold">
              Ingredients: <span className="font-normal">{ingredients}</span>
            </p>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="text-lg font-bold flex items-center gap-2">
                <FcAlarmClock></FcAlarmClock>Post Time: {time}
              </p>
              <p className="text-lg font-bold flex items-center gap-2  text-blue-400">
                <BiSolidLike></BiSolidLike> Likes: {like}
              </p>
              <p className="text-lg flex items-center gap-2 font-bold text-blue-400">
                <FcRating></FcRating> Ratings: {rating}
              </p>
            </div>
            {user ? (
              <div className="mt-3 flex gap-2">
                  <button
                    id="likeBtn"
                    onClick={() => {
                      incrementLike(_id);
                    }}
                    className="btn flex-1 bg-blue-600 text-white"
                  >
                    <BiSolidLike></BiSolidLike>Like
                  </button>
                <button className="btn flex-1 bg-green-600 text-white">
                  <GiMeal></GiMeal>Meal Request
                </button>
              </div>
            ) : (
              <div className="mt-3 flex gap-2">
                <Link
                  to={"/login"}
                  className="btn flex-1 bg-blue-600 text-white"
                >
                  <BiSolidLike></BiSolidLike>Like
                </Link>
                <Link
                  to={"/login"}
                  className="btn flex-1 bg-green-600 text-white"
                >
                  <GiMeal></GiMeal>Meal Request
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MealDetails;
