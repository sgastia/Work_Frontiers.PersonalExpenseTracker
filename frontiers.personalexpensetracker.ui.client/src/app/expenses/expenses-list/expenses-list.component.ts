import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Expense } from '../expense-models';
import { inject } from '@angular/core';
import { ExpenseService } from '../expense-service';

const TEST_DATA: Expense[] = [
  { id: '1', date: '20251001', amount: 10, category: null, description: 'comida' },
  { id: '2', date: '20251002', amount: 20, category: null, description: 'regalo' },
];

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.css',
  imports: [MatTableModule]
})
export class ExpensesListComponent implements OnInit {
  private expensesService = inject(ExpenseService);

  tableColumns: string[] = ['date', 'amount', 'category', 'description'];
  tableData: Expense[] = [];
  //tableData: Expense[] = TEST_DATA;
  ngOnInit(): void {
    this.expensesService.listExpenses().subscribe(data => { this.tableData = data; });
  };

}
