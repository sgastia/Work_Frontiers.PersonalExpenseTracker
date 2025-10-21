import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Expense, ExpenseInput } from './expense-models';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private readonly baseUrl = '/api/expense';

  constructor(private readonly http: HttpClient) {}

  /**
   * Get a paginated list of expenses.
   * Params may include: page, pageSize, search, startDate, endDate, categoryId
   */
  /*
  listExpenses(params?: {
    page?: number;
    pageSize?: number;
    search?: string;
    startDate?: string;
    endDate?: string;
    categoryId?: string;
  }): Observable<PagedResult<Expense>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page != null) httpParams = httpParams.set('page', String(params.page));
      if (params.pageSize != null) httpParams = httpParams.set('pageSize', String(params.pageSize));
      if (params.search) httpParams = httpParams.set('search', params.search);
      if (params.startDate) httpParams = httpParams.set('startDate', params.startDate);
      if (params.endDate) httpParams = httpParams.set('endDate', params.endDate);
      if (params.categoryId) httpParams = httpParams.set('categoryId', params.categoryId);
    }

    return this.http
      .get<PagedResult<Expense>>(this.baseUrl, { params: httpParams })
      .pipe(catchError(this.handleError));
  }
  */
  listExpenses(): Observable<Expense[]> {
    return this.http
      .get<Expense[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  getExpense(id: string): Observable<Expense> {
    return this.http
      .get<Expense>(`${this.baseUrl}/${encodeURIComponent(id)}`)
      .pipe(catchError(this.handleError));
  }

  createExpense(input: ExpenseInput): Observable<Expense> {
    return this.http
      .post<Expense>(this.baseUrl, input)
      .pipe(catchError(this.handleError));
  }

  updateExpense(id: string, input: Partial<ExpenseInput>): Observable<Expense> {
    return this.http
      .put<Expense>(`${this.baseUrl}/${encodeURIComponent(id)}`, input)
      .pipe(catchError(this.handleError));
  }

  deleteExpense(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/${encodeURIComponent(id)}`)
      .pipe(catchError(this.handleError));
  }

  // Lightweight client-side aggregation helper.
  sumExpenses(expenses: Expense[]): number {
    return expenses.reduce((acc, e) => acc + (e?.amount ?? 0), 0);
  }

  private handleError = (error: any): Observable<never> => {
    // Centralized place to log or transform errors.
    // Preserve original error for callers; expand as needed (notification, telemetry, etc).
    // eslint-disable-next-line no-console
    console.error('ExpenseService error', error);
    return throwError(() => error);
  };
}
