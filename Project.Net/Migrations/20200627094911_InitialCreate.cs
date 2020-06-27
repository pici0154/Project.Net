using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Project.Net.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Utilizatori",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nume = table.Column<string>(nullable: true),
                    Prenume = table.Column<string>(nullable: true),
                    User = table.Column<string>(nullable: true),
                    Parola = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Utilizatori", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Angajati",
                columns: table => new
                {
                    Id_Angajat = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nume = table.Column<string>(nullable: true),
                    Data = table.Column<DateTime>(nullable: false),
                    Ora_Start = table.Column<TimeSpan>(nullable: false),
                    Ora_Stop = table.Column<TimeSpan>(nullable: false),
                    Pauza = table.Column<TimeSpan>(nullable: false),
                    AdaugatDeId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Angajati", x => x.Id_Angajat);
                    table.ForeignKey(
                        name: "FK_Angajati_Utilizatori_AdaugatDeId",
                        column: x => x.AdaugatDeId,
                        principalTable: "Utilizatori",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Santiere",
                columns: table => new
                {
                    Id_Santier = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Locatie = table.Column<string>(nullable: true),
                    Nume_Santier = table.Column<string>(nullable: true),
                    AngajatId_Angajat = table.Column<long>(nullable: true),
                    UserId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Santiere", x => x.Id_Santier);
                    table.ForeignKey(
                        name: "FK_Santiere_Angajati_AngajatId_Angajat",
                        column: x => x.AngajatId_Angajat,
                        principalTable: "Angajati",
                        principalColumn: "Id_Angajat",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Santiere_Utilizatori_UserId",
                        column: x => x.UserId,
                        principalTable: "Utilizatori",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Angajati_AdaugatDeId",
                table: "Angajati",
                column: "AdaugatDeId");

            migrationBuilder.CreateIndex(
                name: "IX_Santiere_AngajatId_Angajat",
                table: "Santiere",
                column: "AngajatId_Angajat");

            migrationBuilder.CreateIndex(
                name: "IX_Santiere_UserId",
                table: "Santiere",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Santiere");

            migrationBuilder.DropTable(
                name: "Angajati");

            migrationBuilder.DropTable(
                name: "Utilizatori");
        }
    }
}
