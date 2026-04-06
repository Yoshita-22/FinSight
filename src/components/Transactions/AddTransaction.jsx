import { useState } from "react";
import { useTransactions } from "../../context/TransactionsContext";

function AddTransactionModal({ onClose }) {
  const { addTransactions } = useTransactions();

  const [form, setForm] = useState({
    category: "",
    amount: "",
    date: "",
    type: "expense",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.category || !form.amount || !form.date) return;

    const newTransaction = {
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    };

    addTransactions(newTransaction);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-scale-in"
        onClick={(e) => {
        if (e.target === e.currentTarget) {
        onClose();
        }
  }}
    >

      <div className="
        w-[90%] max-w-md
        bg-white dark:bg-gray-900
        rounded-2xl p-6 shadow-lg
        border border-border-light dark:border-border-dark
      ">

        {/* TITLE */}
        <h2 className="
          text-lg font-semibold mb-4
          text-text-primaryLight dark:text-text-primaryDark
        ">
          Add Transaction
        </h2>

        {/* FORM */}
        <div className="flex flex-col gap-3">

          {/* CATEGORY */}
          <input
            type="text"
            name="category"
            placeholder="Category (e.g. Food)"
            value={form.category}
            onChange={handleChange}
            className="input-style"
          />

          {/* AMOUNT */}
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="input-style"
          />

          {/* DATE */}
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="input-style"
          />

          {/* TYPE */}
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input-style"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="
              px-4 py-2 rounded-xl
              text-sm
              bg-gray-200 dark:bg-gray-700
              text-gray-700 dark:text-gray-200
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              px-4 py-2 rounded-xl
              text-sm font-medium
              bg-primary text-white
              hover:opacity-90 transition
            "
          >
            Add
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddTransactionModal;