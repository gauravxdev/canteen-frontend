export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
}

export const formatPrice = (mealId: string): string => {
  const seed = Number(mealId.slice(-3)) || 0;
  const price = 20 + (seed % 15);
  return `${price.toFixed(2)} INR`;
};
