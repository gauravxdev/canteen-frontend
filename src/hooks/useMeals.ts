import { useState, useEffect, useCallback } from 'react';
import type { Meal } from '../types';

export const useMeals = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching meals:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredMeals = meals.filter(
    meal =>
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meal.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch meals on component mount
  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return {
    loading,
    error,
    meals: filteredMeals,
    searchTerm,
    setSearchTerm,
    refetch: fetchMeals,
  };
};

export default useMeals;
