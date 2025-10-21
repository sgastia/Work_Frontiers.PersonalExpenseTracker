export interface Expense {
  id: string;
  amount: number;
  date: string;
  description?: string;
  categoryId?: string | null;
  category?: string | null;
}

export interface ExpenseInput {
  amount: number;
  date: string;
  description?: string;
  categoryId?: string;
}

export interface PagedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
