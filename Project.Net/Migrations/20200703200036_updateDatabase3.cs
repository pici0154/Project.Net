using Microsoft.EntityFrameworkCore.Migrations;

namespace Project.Net.Migrations
{
    public partial class updateDatabase3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "Id_Santier",
                table: "Angajati",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id_Santier",
                table: "Angajati");
        }
    }
}
