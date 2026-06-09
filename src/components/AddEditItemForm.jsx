import { useEffect, useState } from "react";

const AddEditItemForm = ({
  addItem,
  editingItem,
  updateItem
}) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {

    if (editingItem) {
      setName(editingItem.name);
      setPrice(editingItem.price);
    }

  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert("Please fill all fields");
      return;
    }

    const itemData = {
      name,
      price: Number(price)
    };

    if (editingItem) {
      updateItem({
        ...itemData,
        id: editingItem.id
      });
    } else {
      addItem(itemData);
    }

    setName("");
    setPrice("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">

      <h2 className="text-2xl font-semibold mb-4">
        {editingItem ? "Edit Item" : "Add Item"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="border p-3 rounded-lg"
          />

        </div>

        <button
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          {editingItem ? "Update Item" : "Add Item"}
        </button>

      </form>

    </div>
  );
};

export default AddEditItemForm;