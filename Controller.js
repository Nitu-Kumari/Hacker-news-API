const registrations=[
    {

     "username":" Hacker News",

     "email":"nituk650@gmail.com",
     
     "password":"india"
     
    
    },

    
       

       {

        "username":" Hacker News",
   
        "email":"nituk650@gmail.com",
        
        "password":"india"
        
       
       }

    

];

class Controller{
static addLogin(req,res){
    const login=req.body;
    login._id=Date.now();
    logins.push(login);
     res.json(login);
 }

 static addRegistration(req,res){
    const registration=req.body;
    registration._id=Date.now();
    registrations.push(registration);
     res.json(registration);
 }



}
module.exports= Controller;








  