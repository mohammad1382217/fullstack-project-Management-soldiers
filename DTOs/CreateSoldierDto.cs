using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class CreateSoldierDto
    {
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string fatherName { get; set; }
        [Required]
        public string rank { get; set; }
        [Required]
        public string nationalCode { get; set; }
        [Required]
        public string personnelCode { get; set; }
        [Required]
        public string healthType { get; set; }
        [Required]
        public string entryDate { get; set; }
        [Required]
        public string serviceStartDate { get; set; }
        [Required]
        public string serviceEndDate { get; set; }
        [Required]
        public string departmentName { get; set; }
        [Required]
        public bool isActive { get; set; }
    }
}