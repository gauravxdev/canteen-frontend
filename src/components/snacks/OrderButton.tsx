import { Button } from "../ui/button"

interface OrderButtonProps {
  isOrdering: boolean
  onClick: () => void
}

export const OrderButton = ({ isOrdering, onClick }: OrderButtonProps) => (
  <Button 
    onClick={onClick}
    className="w-full bg-black text-white hover:bg-gray-800"
    disabled={isOrdering}
  >
    {isOrdering ? 'Ordering...' : 'Order Now'}
  </Button>
)
