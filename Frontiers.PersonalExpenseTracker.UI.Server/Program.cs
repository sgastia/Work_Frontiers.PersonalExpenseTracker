using Frontiers.PersonalExpenseTracker.UI.Server.Services;

namespace Frontiers.PersonalExpenseTracker.UI.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            //https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/aspnetcore-openapi
            builder.Services.AddOpenApi();

            //https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-9.0
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowFrontend",
                    policy => policy.WithOrigins("https://localhost:62471")//TODO: Get this from config
                                    .AllowAnyHeader()
                                    .AllowAnyMethod());
            });

            builder.Services.AddControllers();

            builder.Services.RegisterServices();

            var app = builder.Build();

            //https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-9.0
            app.UseCors("AllowFrontend");

            app.UseDefaultFiles();
            app.MapStaticAssets();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();
            

            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
                //https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/using-openapi-documents?view=aspnetcore-9.0
                //To see it: https://localhost:7129/swagger/index.html
                app.UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint("/openapi/v1.json", "v1");
                });
            }

            app.Run();
        }
    }
}
