import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { RoutesPath } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [MatButtonModule, MatMenuModule]
})
export class HeaderComponent {
  private router = inject(Router);

  navigateToHome() {
    this.router.navigate([RoutesPath.Home]);
  }

  navigateToExpenses() {
    this.router.navigate([RoutesPath.ExpensesList]);
  }

  navigateToCategories() {
    this.router.navigate([RoutesPath.CategoriesList]);
  }

  navigateToExpensesByCategoryReport() {
    this.router.navigate([RoutesPath.ExpensesByCategoryReport]);
  }
}
