import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import type { Meal } from "../../types"
import { formatPrice } from "../../types/index"

interface SnackCardProps {
  meal: Meal
  onOrder: (mealId: string) => void
}

const SnackCard = ({ meal, onOrder }: SnackCardProps) => {
  const price = formatPrice(meal.idMeal)
  
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col">
        <div className="relative pt-[56.25%] overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg font-semibold line-clamp-2" title={meal.strMeal}>
              {meal.strMeal}
            </CardTitle>
            <span className="font-bold text-lg whitespace-nowrap ml-2">{price}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {meal.strCategory} • {meal.strArea}
          </p>
          <p className="mt-3 text-sm text-gray-700 line-clamp-3 flex-1">
            {meal.strInstructions}
          </p>
          <div className="mt-4">
            <Button 
              onClick={() => onOrder(meal.idMeal)}
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              Order Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SnackCard
