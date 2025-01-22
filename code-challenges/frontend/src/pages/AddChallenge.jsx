import React from "react";
import Button from "../elements/Button";

const AddChallenge = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl">Add Challenge</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-96 flex flex-col gap-4"
      >
        <Button type="submit">Add Challenge</Button>
      </form>
    </div>
  );
};

export default AddChallenge;
