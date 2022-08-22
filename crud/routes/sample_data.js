var express  = require ('express') ; 

var router = express.Router() ; 

var database = require ('../database') ; 

router.get("/",function(request,response,next){
	let lim = 123456

	var query = "SELECT * FROM tasks where cin = 'lim' " ;

	database.query(query,function(error,data){
		if (error){
			console.log("error") ; 
		}else 
		{
			response.render('tasks',{title:'Node.js MySQL CRUD Application' , action:'list' ,tasks:data});
		}
	}); 
});
module.exports = router ; 