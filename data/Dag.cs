using System.ComponentModel.DataAnnotations;
public class Dag
{
    [Required(ErrorMessage = "Id must be given!")]
    public string Id {get;set;} = null!;

    [Required(ErrorMessage = "guest amount must be given!")]
    [Range(0,10, ErrorMessage ="Can't have more than 10 guests on a day!")]
    public int guests {get;set;}
    [Required(ErrorMessage = "Email must be specified")]
    public string email {get;set;} = null!;
}
