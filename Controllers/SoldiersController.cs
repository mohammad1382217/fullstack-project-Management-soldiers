using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.DTOs;
using API.Entities;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SoldiersController : ControllerBase
    {
        private readonly StoreContext _context;
        public SoldiersController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Soldiers>>> GetSoldiers()
        {
            return await _context.Soldiers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Soldiers>> GetSoldier(int id)
        {
            var soldier = await _context.Soldiers.FindAsync(id);
            if (soldier == null)
            {
                return NotFound(0);
            }
            return soldier;
        }

        [HttpPost]
        public async Task<ActionResult<Soldiers>> CreateSoldiers([FromBody] CreateSoldierDto soldierDto)
        {
            var soldier = new Soldiers
            {
                firstName = soldierDto.firstName,
                lastName = soldierDto.lastName,
                fatherName = soldierDto.fatherName,
                rank = soldierDto.rank,
                nationalCode = soldierDto.nationalCode,
                personnelCode = soldierDto.personnelCode,
                healthType = soldierDto.healthType,
                entryDate = soldierDto.entryDate,
                serviceStartDate = soldierDto.serviceStartDate,
                serviceEndDate = soldierDto.serviceEndDate,
                departmentName = soldierDto.departmentName,
                isActive = soldierDto.isActive,
            };

            _context.Soldiers.Add(soldier);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSoldier), new { Id = soldier.id }, soldier);
        }

        // PUT: api/Soldiers/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Soldiers>> UpdateSoldier(int id, Soldiers soldier)
        {
            if (id != soldier.id)
            {
                return BadRequest();
            }
            _context.Entry(soldier).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SoldierExists(id))
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

        // DELETE: api/Soldiers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSoldier(int id)
        {
            var soldier = await _context.Soldiers.FindAsync(id);

            if (soldier == null)
            {
                return NotFound();
            }
            _context.Soldiers.Remove(soldier);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool SoldierExists(int id)
        {
            return _context.Soldiers.Any(e => e.id == id);
        }

    }
}