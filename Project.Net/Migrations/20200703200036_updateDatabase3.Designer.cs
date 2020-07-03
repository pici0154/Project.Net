﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Project.Net.Models;

namespace Project.Net.Migrations
{
    [DbContext(typeof(AngajatDBContext))]
    [Migration("20200703200036_updateDatabase3")]
    partial class updateDatabase3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Project.Net.Models.Angajat", b =>
                {
                    b.Property<long>("Id_Angajat")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long?>("AdaugatDeId")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("Data")
                        .HasColumnType("datetime2");

                    b.Property<long>("Id_Santier")
                        .HasColumnType("bigint");

                    b.Property<string>("Nume")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Ora_Start")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Ora_Stop")
                        .HasColumnType("datetime2");

                    b.Property<long>("Ore_Lucrate")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("Pauza")
                        .HasColumnType("datetime2");

                    b.Property<long?>("SantierId_Santier")
                        .HasColumnType("bigint");

                    b.HasKey("Id_Angajat");

                    b.HasIndex("AdaugatDeId");

                    b.HasIndex("SantierId_Santier");

                    b.ToTable("Angajati");
                });

            modelBuilder.Entity("Project.Net.Models.Santier", b =>
                {
                    b.Property<long>("Id_Santier")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Locatie")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nume_Santier")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("UserId")
                        .HasColumnType("bigint");

                    b.HasKey("Id_Santier");

                    b.HasIndex("UserId");

                    b.ToTable("Santiere");
                });

            modelBuilder.Entity("Project.Net.Models.Utilizator", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nume")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Parola")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prenume")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("User")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Utilizatori");
                });

            modelBuilder.Entity("Project.Net.Models.Angajat", b =>
                {
                    b.HasOne("Project.Net.Models.Utilizator", "AdaugatDe")
                        .WithMany()
                        .HasForeignKey("AdaugatDeId");

                    b.HasOne("Project.Net.Models.Santier", null)
                        .WithMany("Angajati")
                        .HasForeignKey("SantierId_Santier");
                });

            modelBuilder.Entity("Project.Net.Models.Santier", b =>
                {
                    b.HasOne("Project.Net.Models.Utilizator", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}