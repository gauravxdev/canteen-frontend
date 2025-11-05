import { useState, useEffect } from 'react';
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"

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
  const [studentId, setStudentId] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal is closed
      setStudentId("")
      setQuantity("1")
      setIsSubmitting(false)
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!studentId) return
    
    setIsSubmitting(true)
    onOrder(studentId, parseInt(quantity, 10))
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Order {snackName}</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="student">Student</Label>
              <Select value={studentId} onValueChange={setStudentId} required>
                <SelectTrigger id="student">
                  <SelectValue placeholder="Select a student" />
                </SelectTrigger>
                <SelectContent>
                  {students.map((student) => (
                    <SelectItem key={student.id} value={student.id}>
                      {student.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (1-5)</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                max="5"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || !studentId}>
              {isSubmitting ? 'Ordering...' : 'Place Order'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
