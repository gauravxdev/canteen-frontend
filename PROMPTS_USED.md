# AI Prompts Used

This file lists prompts used with AI assistance during the development of this project, as required by the screening task. The prompts are grouped by the feature area they helped build.

---

### 1. Mock Data Generation

Prompts used to create the mock data structure for students and orders.

**File:** `src/data/mockOrders.ts`
**Prompt:** "I need to create a mock data file for orders (`src/data/mockOrders.ts`).
1.  First, define an `Order` type: `{ id: string, studentId: string, snackId: string, snackName: string, price: number, quantity: number, totalAmount: number, orderDate: string }`.
2.  Create a small array of 5 sample `SNACKS` (e.g., Veg Sandwich, Burger, Samosa) with different prices.
3.  Create a function `generateMockOrders()` that imports `studentData` (from `./studentData`) and loops through each student, creating 3-7 random orders for them.
4.  The orders should use random snacks from the `SNACKS` list, random quantities (1-3), and random dates within the last 30 days. `totalAmount` should be `price * quantity`.
5.  Export the generated orders as `MOCK_ORDERS` (sorted by newest date first).
6.  Also export a helper function `getStudentOrders(studentId: string)` that filters `MOCK_ORDERS` by student ID."

**File:** `src/data/students.mock.ts`
**Prompt:** "I have `studentData` (id, name, referralCode) in one file and `MOCK_ORDERS` in another. Create a new `students.mock.ts` file that imports both. It should:
1.  Define a `Student` type that includes `id`, `name`, `referralCode`, and `totalSpent: number`.
2.  Create a helper function `calculateTotalSpent(studentId: string)` that filters `MOCK_ORDERS` and uses `.reduce()` to sum the `totalAmount` for that student.
3.  Map over the `studentData` array, call `calculateTotalSpent` for each student, and export a new `students` array that includes the calculated `totalSpent` for each."

---

### 2. Custom Hooks

Prompts used to create data-fetching and logic hooks for the application.

**File:** `src/hooks/useMeals.ts`
**Prompt:** "Create a custom React Query hook `useMeals` in TypeScript.
1.  It should use `useQuery` with the query key `['meals']`.
2.  The query function `fetchMeals` needs to fetch `'https://www.themealdb.com/api/json/v1/1/search.php?s='`.
3.  Set a `staleTime` of 5 minutes and `retry: 1`.
4.  The hook should also manage a local `searchTerm` state with `useState`.
5.  It must return `{ loading: isLoading, error: error?.message, meals: filteredMeals, searchTerm, setSearchTerm, refetch }`, where `filteredMeals` is the `meals` data filtered by `searchTerm` (checking `strMeal` and `strCategory`)."

**File:** `src/hooks/useStudentOrders.ts`
**Prompt:** "Create a custom hook `useStudentOrders` that takes a `studentId` string.
1.  It should *not* use React Query. Instead, it should use `useState` and `useEffect` to manage `orders`, `loading`, and `error` states.
2.  Inside the `useEffect`, simulate a 500ms network delay using `setTimeout` and an async function.
3.  Inside the timeout, call a function `getStudentOrders(studentId)` (which I've already defined in `../data/mockOrders`) to get the mock data.
4.  Handle setting loading to `false` and setting the `orders` data or `error` state in a `try/catch/finally` block.
5.  Return `{ orders, loading, error }`."

---

### 3. Order Modal & Form

Prompts used to build the "Place Order" modal and its validated form.

**File:** `src/components/snacks/OrderForm.tsx`
**Prompt:** "I need a React component `OrderForm.tsx` for my order modal.
1.  It must use `react-hook-form` and `zod` for validation.
2.  Create a `zod` schema `orderFormSchema` with two fields:
    * `studentId`: a required string (use `.min(1, "Please select a student")`).
    * `quantity`: a number that must be at least 1 and at most 5 (use `z.coerce.number().min(1, "Quantity must be at least 1").max(5, "Maximum 5 items per order")`).
3.  The form should use shadcn/ui components: `Select` for `studentId` and `Input type="number"` for `quantity`.
4.  Use the `Controller` component from RHF for the `Select` field to map its `onValueChange` to `field.onChange`.
5.  It should accept a `students` array, an `onSubmit` function, and an `onCancel` function as props.
6.  Show error messages from `formState.errors` below each field."

**File:** `src/components/snacks/OrderModal.tsx`
**Prompt:** "Create a React component `OrderModal.tsx`.
1.  It should use the `Dialog`, `DialogContent`, `DialogHeader`, and `DialogTitle` components from shadcn/ui.
2.  It needs to receive `isOpen`, `onClose`, `onOrder`, `snackName`, and `students` as props.
3.  The `DialogTitle` should dynamically show `Order {snackName}`.
4.  Render the `OrderForm` component inside the `DialogContent`.
5.  Pass the `students` prop to `OrderForm`, and wire up the `OrderForm`'s `onSubmit` and `onCancel` props to call the `onOrder` and `onClose` functions it received."