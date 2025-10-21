import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { ExpenseService } from '../expense-service';
import { Expense, ExpenseInput } from '../expense-models';

@Component({
  selector: 'app-expense-detail',
  standalone: true,
  templateUrl: './expense-detail.component.html',
  styleUrl: './expense-detail.component.css',
  imports: [FormsModule]
})
export class ExpenseDetailComponent implements OnInit {
  expenseSerice = inject(ExpenseService);
  model: Expense = {
    id: '',
    amount: 0,
    date: new Date().toISOString(),
    description: '',
    categoryId: null,
    category: null,
  };
  ngOnInit(): void {
    
  }

  saveExpense() {
    let expenseInput: ExpenseInput = {
      amount: this.model.amount,
      description: this.model.description,
      date: new Date().toISOString(),
    };
    this.expenseSerice.createExpense(expenseInput);
  }

  
}
