// src/components/forms/city-autosuggest.tsx
'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface City {
  id: string
  name: string
}

interface CityAutosuggestProps {
  placeholder: string
  onSelect: (city: City) => void
  className?: string
  error?: string
}

export function CityAutosuggest({
  placeholder,
  onSelect,
  className,
  error
}: CityAutosuggestProps) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<City[]>([])

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-md border border-gray-200 bg-white px-4 py-2",
          "focus:border-royalblue-100 focus:outline-none focus:ring-1 focus:ring-royalblue-100",
          error && "border-red-500",
          className
        )}
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg">
          {suggestions.map((city) => (
            <li
              key={city.id}
              onClick={() => onSelect(city)}
              className="cursor-pointer px-4 py-2 hover:bg-royalblue-100/10"
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
      {error && (
        <span className="mt-1 text-sm text-red-500">{error}</span>
      )}
    </div>
  )
}