var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var MyAllowOrigins = "_myAllowOrigins";

// Want JSON serialization to not modify case
// (otherwise would do PascalCase -> CamelCase)

builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options =>
{
    options.SerializerOptions.PropertyNamingPolicy = null;
});
builder.Services.Configure<Microsoft.AspNetCore.Mvc.JsonOptions>(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowOrigins,
        policy =>
        {
            policy
                .AllowAnyMethod()
                .WithOrigins("http://localhost:4200")
                .AllowAnyHeader();
        }
    );
});

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

if (!app.Environment.IsDevelopment()) app.UseHttpsRedirection();

app.UseRouting();

app.UseCors(MyAllowOrigins);

app.MapControllers();

app.Run();