'use client'

import { useState } from 'react'
import { CityAutosuggest } from './city-autosuggest'
import { DateSelector } from './date-selector'
import { Button } from '../ui/button'

interface SearchFormProps {
  onSearch: (data: SearchData) => void
}

interface SearchData {
  departureCity: string
  destinationCity: string
  date: Date
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [formData, setFormData] = useState<SearchData>({
    departureCity: '',
    destinationCity: '',
    date: new Date(),
  })

  return (
    <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="space-y-4">
        <CityAutosuggest
          placeholder="Departure City"
          onSelect={(city) => 
            setFormData(prev => ({ ...prev, departureCity: city.name }))
          }
        />
        <CityAutosuggest
          placeholder="Destination City"
          onSelect={(city) => 
            setFormData(prev => ({ ...prev, destinationCity: city.name }))
          }
        />
        <DateSelector
          selected={formData.date}
          onSelect={(date) => 
            setFormData(prev => ({ ...prev, date }))
          }
        />
        <Button 
          onClick={() => onSearch(formData)}
          className="w-full"
        >
          Search Buses
        </Button>
      </div>
    </div>
  )
}