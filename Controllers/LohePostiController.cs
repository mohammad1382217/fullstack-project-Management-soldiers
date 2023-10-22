using API.Data;
using API.Entities;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LohePostiController : ControllerBase
    {
        private readonly StoreContext _context;
        public LohePostiController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<LohePosti>>> GetLohePosti()
        {
            return await _context.LohePostis.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LohePosti>> GetLohePosti(int id)
        {
            var LohePosti = await _context.LohePostis.FindAsync(id);
            if (LohePosti == null)
            {
                return NotFound(0);
            }
            return LohePosti;
        }

        [HttpPost]
        public async Task<ActionResult<LohePosti>> CreateLohePosti([FromBody] CreateLohePostiDto LohePostiDto)
        {
            var LohePosti = new LohePosti
            {
                Date = LohePostiDto.Date,
                PostHoursPass1 = LohePostiDto.PostHoursPass1,
                SpringPass1 = LohePostiDto.SpringPass1,
                CastlePass1 = LohePostiDto.CastlePass1,
                WorkshopPass1 = LohePostiDto.WorkshopPass1,
                MechanizedGuardPass1 = LohePostiDto.MechanizedGuardPass1,
                AmadGuardPass1 = LohePostiDto.AmadGuardPass1,
                ArmedGuardPass1 = LohePostiDto.ArmedGuardPass1,
                GuardPass1 = LohePostiDto.GuardPass1,
                MedicalGuardPass1 = LohePostiDto.MedicalGuardPass1,
                PostHoursPass2 = LohePostiDto.PostHoursPass2,
                SpringPass2 = LohePostiDto.SpringPass2,
                CastlePass2 = LohePostiDto.CastlePass2,
                WorkshopPass2 = LohePostiDto.WorkshopPass2,
                MechanizedGuardPass2 = LohePostiDto.MechanizedGuardPass2,
                AmadGuardPass2 = LohePostiDto.AmadGuardPass2,
                ArmedGuardPass2 = LohePostiDto.ArmedGuardPass2,
                GuardPass2 = LohePostiDto.GuardPass2,
                MedicalGuardPass2 = LohePostiDto.MedicalGuardPass2,
                PostHoursPass3 = LohePostiDto.PostHoursPass3,
                SpringPass3 = LohePostiDto.SpringPass3,
                CastlePass3 = LohePostiDto.CastlePass3,
                WorkshopPass3 = LohePostiDto.WorkshopPass3,
                MechanizedGuardPass3 = LohePostiDto.MechanizedGuardPass3,
                AmadGuardPass3 = LohePostiDto.AmadGuardPass3,
                ArmedGuardPass3 = LohePostiDto.ArmedGuardPass3,
                GuardPass3 = LohePostiDto.GuardPass3,
                MedicalGuardPass3 = LohePostiDto.MedicalGuardPass3,
                ArmedForceMorning1 = LohePostiDto.ArmedForceMorning1,
                ArmedForceMorning2 = LohePostiDto.ArmedForceMorning2,
                ArmedForceMorning3 = LohePostiDto.ArmedForceMorning3,
                Kitchen1 = LohePostiDto.Kitchen1,
                Kitchen2 = LohePostiDto.Kitchen2,
                Kitchen3 = LohePostiDto.Kitchen3,
                Watchman = LohePostiDto.Watchman,
                Armament = LohePostiDto.Armament,
                Refuge = LohePostiDto.Refuge,
                ShelterManager = LohePostiDto.ShelterManager,
            };

            _context.LohePostis.Add(LohePosti);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLohePosti), new { Id = LohePosti.id }, LohePosti);
        }

        // PUT: api/LohePosti/5
        [HttpPut("{id}")]
        public async Task<ActionResult<LohePosti>> UpdateLohe(int id, LohePosti lohePosti)
        {
            if (id != lohePosti.id)
            {
                return BadRequest();
            }
            _context.Entry(lohePosti).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LohePostiExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLohePosti(int id)
        {
            var LohePosti = await _context.LohePostis.FindAsync(id);

            if (LohePosti == null)
            {
                return NotFound();
            }
            _context.LohePostis.Remove(LohePosti);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool LohePostiExists(int id)
        {
            return _context.LohePostis.Any(e => e.id == id);
        }

    }
}