using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace JobInterview.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly ILogger<EmployeesController> _logger;

        public EmployeesController(ILogger<EmployeesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
        {
            return "EmployeeController";
        }
    }
}
