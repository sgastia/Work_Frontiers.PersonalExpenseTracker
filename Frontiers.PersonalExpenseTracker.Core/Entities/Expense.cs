using Frontiers.PersonalExpenseTracker.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Frontiers.PersonalExpenseTracker.Core.Entities
{
    public class Expense:IEntity
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; } = string.Empty;
        public Guid? CategoryId { get; set; }
        public Category? Category { get; set; }
    }
}
