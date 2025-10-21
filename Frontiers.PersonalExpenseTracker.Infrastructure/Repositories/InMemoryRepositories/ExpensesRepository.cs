using Frontiers.PersonalExpenseTracker.Core.Entities;
using Frontiers.PersonalExpenseTracker.Core.Interfaces.RepositoriesInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Frontiers.PersonalExpenseTracker.Infrastructure.Repositories.InMemoryRepositories
{
    public class ExpensesRepository : GenericRepository<Expense>, IExpensesRepository
    {
    }
}
