"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value.toUpperCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/stock/${searchInput}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">search</label>
      <input
        type="text"
        name="search"
        value={searchInput}
        onChange={handleChange}
      ></input>
    </form>
  );
};
