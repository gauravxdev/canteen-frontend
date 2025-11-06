import { useState } from 'react';
import { Card, CardContent, CardTitle } from "../ui/card"
import type { Meal } from "../../types"
import { formatPrice } from "../../types/index"
import { OrderModal } from './OrderModal';
import { OrderButton } from './OrderButton';
import { useOrderCount } from '../../hooks/useOrderCount';
import { useStudentContext } from '../../contexts/StudentContext';

interface SnackCardProps {
  meal: Meal
  onOrder: (mealId: string, studentId: string, quantity: number) => Promise<void>
}

export const SnackCard = ({ meal, onOrder }: SnackCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const { students } = useStudentContext();
  const orderCount = useOrderCount(meal.idMeal);
  const price = formatPrice(meal.idMeal);
  
  const handleOrderClick = () => setIsModalOpen(true);

  const handleOrderSubmit = async (studentId: string, quantity: number) => {
    try {
      setIsOrdering(true);
      await onOrder(meal.idMeal, studentId, quantity);
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="h-full">
      <Card className="h-full flex flex-col">
        <div className="relative pt-[56.25%] overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg font-semibold line-clamp-2" title={meal.strMeal}>
              {meal.strMeal}
            </CardTitle>
            <span className="font-bold text-lg whitespace-nowrap ml-2">{price}</span>
          </div>
          
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm text-gray-500">
              {meal.strCategory} • {meal.strArea}
            </p>
            <p className="text-sm font-medium">
              <span className="text-gray-600">Orders:</span>{' '}
              <span className="text-black">{orderCount}</span>
            </p>
          </div>
          
          <p className="mt-3 text-sm text-gray-700 line-clamp-3 flex-1">
            {meal.strInstructions}
          </p>
          
          <div className="mt-4">
            <OrderButton 
              isOrdering={isOrdering}
              onClick={handleOrderClick}
            />
          </div>
        </CardContent>
      </Card>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOrder={handleOrderSubmit}
        snackName={meal.strMeal}
        students={students}
      />
    </div>
  )
}

export default SnackCard
