using System.ComponentModel.DataAnnotations;
namespace API.DTOs
{
    public class CreateLoginDto
    {
        [Required]
        public string nameAndfamily { get; set; }
        
        [Required]
        public string username { get; set; }
        [Required]
        public string password { get; set; }
    }
}