namespace API.Entities
{
    public class Soldiers
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string fatherName { get; set; }
        public string rank { get; set; }
        public string nationalCode { get; set; }
        public string personnelCode { get; set; }
        public string healthType { get; set; }
        public string entryDate { get; set; }
        public string serviceStartDate { get; set; }
        public string serviceEndDate { get; set; }
        public string departmentName { get; set; }
        public bool isActive { get; set; }
    }
}