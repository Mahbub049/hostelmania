import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import "./Menu.css";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Menu = () => {
  const categories = ["breakfast", "lunch", "dinner"];
  // const { category } = useParams();
  // const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState("breakfast");
  const [menu] = useMenu();
  console.log(menu)

  const breakfast = menu.filter((item) => item.category === "breakfast");
  const lunch = menu.filter((item) => item.category === "lunch");
  const dinner = menu.filter((item) => item.category === "dinner");
  console.log(breakfast);

  return (
    <div>
      <Tabs>
        <TabList className="flex justify-center mb-8">
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
          <Tab>All Items</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3">
          {breakfast.map((item) => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3">
          {lunch.map((item) => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3">
          {dinner.map((item) => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3">
          {menu.map((item) => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Menu;
