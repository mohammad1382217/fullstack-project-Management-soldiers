using API.Entities;

namespace API.Data
{
    public class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Logins.Any()) return;

            var logins = new List<Login>
            {
                new Login
                {
                    nameAndfamily = "حسن تلخابی",
                    username = "admin",
                    password = "12345678",
                },
            };

            foreach (var login in logins)
            {
                context.Logins.Add(login);
            }

            context.SaveChanges();
        } 
    }
}