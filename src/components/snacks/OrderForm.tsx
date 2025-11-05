import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const orderFormSchema = z.object({
  studentId: z.string().min(1, "Please select a student"),
  quantity: z
    .coerce
    .number()
    .min(1, "Quantity must be at least 1")
    .max(5, "Maximum 5 items per order"),
})

export type OrderFormValues = z.infer<typeof orderFormSchema>

interface StudentOption {
  id: string
  name: string
}

interface OrderFormProps {
  isOpen?: boolean
  students: StudentOption[]
  onSubmit: (values: OrderFormValues) => Promise<void> | void
  onCancel: () => void
}

export const OrderForm = ({
  isOpen,
  students,
  onSubmit,
  onCancel,
}: OrderFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      studentId: "",
      quantity: 1,
    },
  })

  const submitForm = async (values: OrderFormValues) => {
    await onSubmit(values)
    reset()
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen, reset])

  const handleCancel = () => {
    reset()
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="student">Student</Label>
        <Controller
          name="studentId"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              value={field.value}
              disabled={isSubmitting}
            >
              <SelectTrigger
                id="student"
                aria-invalid={errors.studentId ? "true" : "false"}
              >
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
          )}
        />
        {errors.studentId && (
          <p className="text-sm text-red-500">{errors.studentId.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity (1-5)</Label>
        <Input
          id="quantity"
          type="number"
          min={1}
          max={5}
          {...register("quantity")}
          disabled={isSubmitting}
          aria-invalid={errors.quantity ? "true" : "false"}
        />
        {errors.quantity && (
          <p className="text-sm text-red-500">{errors.quantity.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={handleCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Ordering..." : "Place Order"}
        </Button>
      </div>
    </form>
  )
}
