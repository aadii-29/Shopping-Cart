import { useState } from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({
  items,
  deleteItem,
  setEditingItem,
}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPrice = filteredItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h2 className="text-2xl font-semibold">
          Cart Items ({filteredItems.length})
        </h2>

        <input
          type="text"
          placeholder="Search Item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-full md:w-64"
        />

      </div>

      <div className="mb-4">
        <span className="font-bold text-green-600">
          Total: ₹{totalPrice}
        </span>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-gray-500">
          No matching items found.
        </p>
      ) : (
        filteredItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            setEditingItem={setEditingItem}
          />
        ))
      )}

    </div>
  );
};

export default ShoppingCart;