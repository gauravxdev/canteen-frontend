import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

import { OrderForm, type OrderFormValues } from "./OrderForm"

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  onOrder: (studentId: string, quantity: number) => void
  snackName: string
  students: Array<{ id: string; name: string }>
}

export const OrderModal = ({
  isOpen,
  onClose,
  onOrder,
  snackName,
  students
}: OrderModalProps) => {
  const handleSubmit = async (values: OrderFormValues) => {
    await onOrder(values.studentId, values.quantity)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order {snackName}</DialogTitle>
        </DialogHeader>

        <OrderForm
          isOpen={isOpen}
          students={students}
          onSubmit={handleSubmit}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  )
}
