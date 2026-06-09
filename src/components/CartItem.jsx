const CartItem = ({
  item,
  deleteItem,
  setEditingItem
}) => {

  return (
    <div className="border rounded-lg p-4 mb-3 flex justify-between items-center">

      <div>
        <h3 className="font-semibold text-lg">
          {item.name}
        </h3>

        <p className="text-gray-600">
          ₹{item.price}
        </p>
      </div>

      <div className="flex gap-2">

        <button
          onClick={() => setEditingItem(item)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => deleteItem(item.id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Remove
        </button>

      </div>

    </div>
  );
};

export default CartItem;