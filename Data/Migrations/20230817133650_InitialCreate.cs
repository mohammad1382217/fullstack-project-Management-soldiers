using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Logins",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nameAndfamily = table.Column<string>(type: "TEXT", nullable: true),
                    username = table.Column<string>(type: "TEXT", nullable: true),
                    password = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logins", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "LohePostis",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<string>(type: "TEXT", nullable: true),
                    PostHoursPass1 = table.Column<string>(type: "TEXT", nullable: true),
                    SpringPass1 = table.Column<string>(type: "TEXT", nullable: true),
                    CastlePass1 = table.Column<string>(type: "TEXT", nullable: true),
                    WorkshopPass1 = table.Column<string>(type: "TEXT", nullable: true),
                    MechanizedGuardPass1 = table.Column<string>(type: "TEXT", nullable: true),
                    AmadGuardPass1 = table.Column<string>(type: "TEXT", nullable: true),
                    ArmedGuardPass1 = table.Column<string>(type: "TEXT", nullable: true),
                    GuardPass1 = table.Column<string>(type: "TEXT", nullable: true),
                    MedicalGuardPass1 = table.Column<string>(type: "TEXT", nullable: true),
                    PostHoursPass2 = table.Column<string>(type: "TEXT", nullable: true),
                    SpringPass2 = table.Column<string>(type: "TEXT", nullable: true),
                    CastlePass2 = table.Column<string>(type: "TEXT", nullable: true),
                    WorkshopPass2 = table.Column<string>(type: "TEXT", nullable: true),
                    MechanizedGuardPass2 = table.Column<string>(type: "TEXT", nullable: true),
                    AmadGuardPass2 = table.Column<string>(type: "TEXT", nullable: true),
                    ArmedGuardPass2 = table.Column<string>(type: "TEXT", nullable: true),
                    GuardPass2 = table.Column<string>(type: "TEXT", nullable: true),
                    MedicalGuardPass2 = table.Column<string>(type: "TEXT", nullable: true),
                    PostHoursPass3 = table.Column<string>(type: "TEXT", nullable: true),
                    SpringPass3 = table.Column<string>(type: "TEXT", nullable: true),
                    CastlePass3 = table.Column<string>(type: "TEXT", nullable: true),
                    WorkshopPass3 = table.Column<string>(type: "TEXT", nullable: true),
                    MechanizedGuardPass3 = table.Column<string>(type: "TEXT", nullable: true),
                    AmadGuardPass3 = table.Column<string>(type: "TEXT", nullable: true),
                    ArmedGuardPass3 = table.Column<string>(type: "TEXT", nullable: true),
                    GuardPass3 = table.Column<string>(type: "TEXT", nullable: true),
                    MedicalGuardPass3 = table.Column<string>(type: "TEXT", nullable: true),
                    ArmedForceMorning1 = table.Column<string>(type: "TEXT", nullable: true),
                    ArmedForceMorning2 = table.Column<string>(type: "TEXT", nullable: true),
                    ArmedForceMorning3 = table.Column<string>(type: "TEXT", nullable: true),
                    Kitchen1 = table.Column<string>(type: "TEXT", nullable: true),
                    Kitchen2 = table.Column<string>(type: "TEXT", nullable: true),
                    Kitchen3 = table.Column<string>(type: "TEXT", nullable: true),
                    Watchman = table.Column<string>(type: "TEXT", nullable: true),
                    Armament = table.Column<string>(type: "TEXT", nullable: true),
                    Refuge = table.Column<string>(type: "TEXT", nullable: true),
                    ShelterManager = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LohePostis", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Soldiers",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    firstName = table.Column<string>(type: "TEXT", nullable: true),
                    lastName = table.Column<string>(type: "TEXT", nullable: true),
                    fatherName = table.Column<string>(type: "TEXT", nullable: true),
                    rank = table.Column<string>(type: "TEXT", nullable: true),
                    nationalCode = table.Column<string>(type: "TEXT", nullable: true),
                    personnelCode = table.Column<string>(type: "TEXT", nullable: true),
                    healthType = table.Column<string>(type: "TEXT", nullable: true),
                    entryDate = table.Column<string>(type: "TEXT", nullable: true),
                    serviceStartDate = table.Column<string>(type: "TEXT", nullable: true),
                    serviceEndDate = table.Column<string>(type: "TEXT", nullable: true),
                    departmentName = table.Column<string>(type: "TEXT", nullable: true),
                    isActive = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Soldiers", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Logins");

            migrationBuilder.DropTable(
                name: "LohePostis");

            migrationBuilder.DropTable(
                name: "Soldiers");
        }
    }
}
