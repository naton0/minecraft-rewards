using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace minecraft_rewards.Utils
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        #region Required
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Item>()
                .Property(b => b.Id)
                .ValueGeneratedOnAdd();
        }
        #endregion
    }

    public class Item
    {
        
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; init; }
    }
}