using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly StoreContext _context;
        public LoginController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Login>>> GetLogin()
        {
            return await _context.Logins.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Login>> GetLogin(int id)
        {
            var Login = await _context.Logins.FindAsync(id);
            if (Login == null)
            {
                return NotFound(0);
            }
            return Login;
        }

        [HttpPost]
        public async Task<ActionResult<Login>> CreateLogin([FromBody] CreateLoginDto LoginDto)
        {
            var Login = new Login
            {
                username= LoginDto.username,
                password= LoginDto.password,
            };

            _context.Logins.Add(Login);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLogin), new { Id = Login.id }, Login);
        }

        // PUT: api/login/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Login>> UpdateSoldier(int id,[FromBody] CreateLoginDto LoginDto)
        {
             var Login = new Login
            {
                id = id,
                nameAndfamily = LoginDto.nameAndfamily,
                username= LoginDto.username,
                password= LoginDto.password,
            };
            if (id != Login.id)
            {
                return BadRequest();
            }
            _context.Entry(Login).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        private bool LoginExists(int id)
        {
            return _context.Logins.Any(e => e.id == id);
        }
    }
}