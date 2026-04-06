import { useTransactions } from "../../context/TransactionsContext";
import { useState } from "react";
export default function EditTransactionModal({ transaction, onClose }) {
  const [form, setForm] = useState(transaction);

  const { editTransactions } = useTransactions();

  const handleSave = () => {
    editTransactions(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40"
        onClick={(e) => {
            if (e.target === e.currentTarget) {
            onClose();
            }
  }}
    >

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-80">

        <h2 className="text-lg font-semibold mb-4">Edit Transaction</h2>

        <input
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave} className="bg-primary text-white px-3 py-1 rounded">
            Save
          </button>
        </div>

      </div>
    </div>
  );
}