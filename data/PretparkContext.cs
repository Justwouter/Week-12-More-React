using Microsoft.EntityFrameworkCore;

public class PretparkContext : DbContext{
    // (= null!;) Tell the compiler/intelisense to shut up about nullables when not initializing a value 
    public DbSet<Dag> Days {get;set;} = null!;
    public PretparkContext (DbContextOptions<PretparkContext> options): base(options){}

    

    protected override void OnModelCreating(ModelBuilder builder){
        var Daysconfig = builder.Entity<Dag>();
            Daysconfig.ToTable("Dagen");
        
    }

    
}