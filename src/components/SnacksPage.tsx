import { useMeals } from "../hooks/useMeals";
import SnackCard from "./snacks/SnackCard";
import { LoadingSpinner } from "./ui/loading-spinner";
import { toast } from "sonner";

const SnacksPage = () => {
  const { loading, error, meals, refetch } = useMeals();

  const handleOrder = async (mealId: string, studentId: string, quantity: number) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mealName = meals.find(m => m.idMeal === mealId)?.strMeal;
      toast.success(`Order placed! ${quantity}x ${mealName} for student #${studentId}`);
      await refetch();
    } catch (err) {
      toast.error('Failed to place order. Please try again.');
      throw err;
    }
  };

  if (loading && !meals.length) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!meals.length) return <div className="text-gray-500 p-4">No meals available</div>;

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="h-full">
            <SnackCard meal={meal} onOrder={handleOrder} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnacksPage;