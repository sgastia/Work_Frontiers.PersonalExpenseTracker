using Frontiers.PersonalExpenseTracker.Core.Entities;
using Frontiers.PersonalExpenseTracker.Core.Interfaces.RepositoriesInterfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Frontiers.PersonalExpenseTracker.UI.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseController : ControllerBase
    {
        private readonly IExpensesRepository expensesRepository;

        public ExpenseController(IExpensesRepository expensesRepository)
        {
            this.expensesRepository = expensesRepository;
        }

        // GET: api/<ExpenseController>
        [HttpGet]
        public ActionResult<IEnumerable<Expense>> Get()
        {
            var expenses = expensesRepository.GetAll();
            return Ok(expenses);
        }

        // GET api/<ExpenseController>/5
        [HttpGet("{id}")]
        public ActionResult<Expense> Get(Guid id)
        {
            var expense = expensesRepository.GetById(id);
            return Ok(expense);
        }

        // POST api/<ExpenseController>
        [HttpPost]
        public void Post([FromBody] Expense expense)
        {
            expensesRepository.Add(expense);
        }

        // PUT api/<ExpenseController>/5
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody] Expense expense)
        {
            this.expensesRepository.Update(expense);
        }

        // DELETE api/<ExpenseController>/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            this.expensesRepository.Delete(id);
        }
    }
}
