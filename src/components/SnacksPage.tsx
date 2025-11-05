import { useMeals } from "../hooks/useMeals";
import SnackCard from "./snacks/SnackCard";
import { LoadingSpinner } from "./ui/loading-spinner";

interface SnacksPageProps {
  onOrder: (id: string) => void;
}

const SnacksPage = ({ onOrder }: SnacksPageProps) => {
  const { loading, error, meals } = useMeals();

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (meals.length === 0) {
    return <div className="text-gray-500 p-4">No meals available</div>;
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="h-full">
            <SnackCard 
              meal={meal} 
              onOrder={onOrder} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnacksPage;