import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import AddEditItemForm from "./components/AddEditItemForm";

function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mouse",
      price: 500
    }
  ]);

  const [editingItem, setEditingItem] = useState(null);

  // Add Item
  const addItem = (item) => {
    setItems([
      ...items,
      {
        id: Date.now(),
        ...item
      }
    ]);
  };

  // Delete Item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Edit Item
  const updateItem = (updatedItem) => {
    setItems(
      items.map(item =>
        item.id === updatedItem.id
          ? updatedItem
          : item
      )
    );

    setEditingItem(null);
  };

  return (
    <div className="min-h-screen p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Shopping Cart
        </h1>

        <AddEditItemForm
          addItem={addItem}
          editingItem={editingItem}
          updateItem={updateItem}
        />

        <ShoppingCart
          items={items}
          deleteItem={deleteItem}
          setEditingItem={setEditingItem}
        />

      </div>

    </div>
  );
}

export default App;