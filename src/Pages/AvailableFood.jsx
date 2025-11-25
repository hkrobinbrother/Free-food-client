
import FoodCard from "../Components/FoodCard";
import { useEffect, useState } from "react";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/food?sort=${sort}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [sort]);

  const normalizeDate = (date) => {
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  };

  const sortedFoods = [...foods].sort((a, b) => {
    if (sort === "asc") {
      return normalizeDate(a.date) - normalizeDate(b.date);
    }
    if (sort === "dec") {
      return normalizeDate(b.date) - normalizeDate(a.date);
    }
    return 0;
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl flex gap-2 font-bold items-center  mt-4 text-green-400">
          Available Foods
          <span className="px-6  bg-blue-300 rounded-full text-blue-600">
            {foods.length}
          </span>
        </h1>

        <div className="p-2 border-2 border-blue-500 rounded-lg">
          <select name="" id="" onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By Deadline</option>
            <option value="dec">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {sortedFoods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
