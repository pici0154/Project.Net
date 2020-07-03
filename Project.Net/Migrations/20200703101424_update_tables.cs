using Microsoft.EntityFrameworkCore.Migrations;

namespace Project.Net.Migrations
{
    public partial class update_tables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Santiere_Angajati_AngajatId_Angajat",
                table: "Santiere");

            migrationBuilder.DropIndex(
                name: "IX_Santiere_AngajatId_Angajat",
                table: "Santiere");

            migrationBuilder.DropColumn(
                name: "AngajatId_Angajat",
                table: "Santiere");

            migrationBuilder.AddColumn<long>(
                name: "Ore_Lucrate",
                table: "Angajati",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<long>(
                name: "SantierId_Santier",
                table: "Angajati",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Angajati_SantierId_Santier",
                table: "Angajati",
                column: "SantierId_Santier");

            migrationBuilder.AddForeignKey(
                name: "FK_Angajati_Santiere_SantierId_Santier",
                table: "Angajati",
                column: "SantierId_Santier",
                principalTable: "Santiere",
                principalColumn: "Id_Santier",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Angajati_Santiere_SantierId_Santier",
                table: "Angajati");

            migrationBuilder.DropIndex(
                name: "IX_Angajati_SantierId_Santier",
                table: "Angajati");

            migrationBuilder.DropColumn(
                name: "Ore_Lucrate",
                table: "Angajati");

            migrationBuilder.DropColumn(
                name: "SantierId_Santier",
                table: "Angajati");

            migrationBuilder.AddColumn<long>(
                name: "AngajatId_Angajat",
                table: "Santiere",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Santiere_AngajatId_Angajat",
                table: "Santiere",
                column: "AngajatId_Angajat");

            migrationBuilder.AddForeignKey(
                name: "FK_Santiere_Angajati_AngajatId_Angajat",
                table: "Santiere",
                column: "AngajatId_Angajat",
                principalTable: "Angajati",
                principalColumn: "Id_Angajat",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
