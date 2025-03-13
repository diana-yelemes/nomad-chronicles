import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backend_url } from "../config/config";

const AddFigure = ({ token }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [deathYear, setDeathYear] = useState("");
  const [notableWorks, setNotableWorks] = useState("");
  const [category, setCategory] = useState("Politicians"); // Default to Politician
  const [popular, setPopular] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const figureData = {
        name,
        description,
        category, // Ensure this reflects the selected category
        birthYear,
        deathYear,
        notableWorks,
        popular,
        imageUrl,
      };

      console.log("Submitting Data:", figureData); // Debugging log

      const response = await axios.post(`${backend_url}/api/figure/create`, figureData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form
        setName("");
        setDescription("");
        setBirthYear("");
        setDeathYear("");
        setNotableWorks("");
        setCategory("Politicians"); // Reset to default
        setImageUrl("");
        setPopular(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting figure:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="px-2 sm:px-8 mt-4 sm:mt-14 pb-16">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-3 medium-14 lg:w-[777px]">
        <div className="w-full">
          <h5 className="h5">Figure Name</h5>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Write here.."
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <h5 className="h5">Description</h5>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={5}
            placeholder="Write here.."
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>
        <div className="flex items-end gap-x-6">
          <div>
            <h5 className="h5">Category</h5>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
                console.log("Selected Category:", e.target.value); // Debugging log
              }}
              value={category}
              className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 sm:w-full text-gray-30"
            >
              <option value="Artists">Artists</option>
              <option value="Batyrs">Batyrs</option>
              <option value="Politicians">Politicians</option>
              <option value="Rulers">Rulers</option>
              <option value="Scientists">Scientists</option>
            </select>
          </div>
        </div>
        <div>
          <h5 className="h5">Birth Year</h5>
          <input
            onChange={(e) => setBirthYear(e.target.value)}
            value={birthYear}
            type="number"
            placeholder="e.g., 1845"
            min={0}
            className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white w-20"
          />
        </div>
        <div>
          <h5 className="h5">Death Year (optional)</h5>
          <input
            onChange={(e) => setDeathYear(e.target.value)}
            value={deathYear}
            type="number"
            placeholder="e.g., 1904"
            min={0}
            className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white w-20"
          />
        </div>
        <div className="w-full">
          <h5 className="h5">Notable Works</h5>
          <textarea
            onChange={(e) => setNotableWorks(e.target.value)}
            value={notableWorks}
            rows={2}
            placeholder="Comma-separated, e.g., Book of Words, Poems"
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <h5 className="h5">Image URL</h5>
          <input
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            type="text"
            placeholder="Paste the image URL here.."
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>
        <div className="flexStart gap-2 my-2">
  <input
    onChange={(e) => setPopular(e.target.checked)} // Update state directly based on checkbox status
    type="checkbox"
    checked={popular}
    id="popular"
  />
  <label htmlFor="popular" className="cursor-pointer">
    Mark as popular
  </label>
</div>

        <button type="submit" className="btn-dark !rounded mt-3 max-w-44 sm:w-full">
          Add Figure
        </button>
      </form>
    </div>
  );
};

export default AddFigure;
