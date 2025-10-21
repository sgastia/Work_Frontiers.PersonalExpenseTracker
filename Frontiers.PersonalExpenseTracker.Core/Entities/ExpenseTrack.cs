using Frontiers.PersonalExpenseTracker.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Frontiers.PersonalExpenseTracker.Core.Entities
{
    public class ExpenseTrack : IEntity
    {
        public Guid Id { get; set; }
        public required string UserName { get; set; }

        public List<Expense> Expenses { get; set; } = new List<Expense>();
        public List<Category> Categories { get; set; } = new List<Category>();
    }
}
