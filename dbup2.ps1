if($null -eq $args[0]){
    throw "Please enter a migration name or use the -d parameter for default naming"
}


try{
    #Check if the default parameter is used
    if( -not($args.Contains(("-u")))){
        if($args[0] -eq "-d"){
            dotnet ef migrations add
        }
        else {
            $migration_name=$args[0]
            dotnet ef migrations add $migration_name
        }
    }
    dotnet ef database update
}
finally{}