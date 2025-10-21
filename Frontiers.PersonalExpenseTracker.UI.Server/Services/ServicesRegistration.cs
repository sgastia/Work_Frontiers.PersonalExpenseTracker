using Frontiers.PersonalExpenseTracker.Core.Interfaces.RepositoriesInterfaces;
using Microsoft.Extensions.DependencyInjection;
using InMemoryRepositories = Frontiers.PersonalExpenseTracker.Infrastructure.Repositories.InMemoryRepositories;

namespace Frontiers.PersonalExpenseTracker.UI.Server.Services
{
    public static class ServicesRegistration
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            // Here you can register your services, for example:
            // services.AddScoped<IYourService, YourServiceImplementation>();
            services.AddScoped<IExpensesRepository, InMemoryRepositories.ExpensesRepository>();
            services.AddScoped<ICategoriesRepository, InMemoryRepositories.CategoriesRepository>();
        }
    }
}
