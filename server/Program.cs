var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddControllers();

var MyAllowOrigins = "_myAllowOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:4200/");
        }
    );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowOrigins);

app.MapControllers();

app.Run();