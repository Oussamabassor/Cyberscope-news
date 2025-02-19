"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { categories } from "./Navbar"

export default function TechFilter({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("All")

  const handleFilterClick = (category) => {
    setActiveFilter(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <Button variant={activeFilter === "All" ? "default" : "outline"} onClick={() => handleFilterClick("All")}>
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category.name}
          variant={activeFilter === category.name ? "default" : "outline"}
          onClick={() => handleFilterClick(category.name)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}

