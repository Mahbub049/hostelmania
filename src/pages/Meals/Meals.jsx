import { useQuery } from "@tanstack/react-query";
import FoodCard from "../../components/FoodCard/FoodCard";
import Footer from "../../components/Footer/Footer";
import { StickyNavbar } from "../../components/Navbar/Navbar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { Option, Select } from "@material-tailwind/react";

const Meals = () => {
  const [filter, setFilter] = useState("");
    // const axiosPublic = useAxiosPublic();
    // const { data: menu = [], refetch } = useQuery({
    //   queryKey: ["menu"],
    //   queryFn: async () => {
    //     const res = await axiosPublic.get("/menu");
    //     return res.data;
    //   },
    // });

  const getArticles = async ({ pageParam = 0 }) => {
    const res = await fetch(
      `http://localhost:5000/menu?filter=${filter}&offset=${pageParam}`
    );
    const data = await res.json();

    return { ...data, prevOffset: pageParam };
  };

  const { data, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 3 > lastPage.articlesCount) {
        return false;
      }
      return lastPage.prevOffset + 3;
    },
  });

  const articles = data?.pages.reduce((acc, page) => {
    refetch();
    const result = Object.values(page).slice(0, -1);
    console.log(result);
    return [...acc, ...result];
  }, []);

  console.log(articles);
  return (
    <div className="container mx-auto">
      <StickyNavbar></StickyNavbar>
      <div>
        <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80')] bg-center bg-cover py-20 text-center my-8 rounded-xl mx-3 lg:mx-0">
          <p className="text-4xl  font-bold text-[#78c9f4] mons">Menu</p>
          <div>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              value={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
        </div>
        <InfiniteScroll
          dataLength={articles ? articles.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loading={<div>Loading...☝️</div>}
        >
          <div className="mt-4 grid grid-cols-3">
            {articles &&
              articles.map((item) => {
                return <FoodCard key={item.id} item={item}></FoodCard>;
              })}
            s
          </div>
        </InfiniteScroll>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Meals;
