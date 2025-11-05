import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Meal } from '../types';

const fetchMeals = async (): Promise<Meal[]> => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  if (!response.ok) throw new Error('Failed to fetch meals');
  const data = await response.json();
  return data.meals || [];
};

export const useMeals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: meals = [], isLoading, error, refetch } = useQuery<Meal[]>({
    queryKey: ['meals'],
    queryFn: fetchMeals,
    staleTime: 300000, // 5 minutes
    retry: 1,
  });

  const filteredMeals = meals.filter(meal => 
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (meal.strCategory?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
  );

  return {
    loading: isLoading,
    error: error?.message || null,
    meals: filteredMeals,
    searchTerm,
    setSearchTerm,
    refetch,
  };
};

export default useMeals;
