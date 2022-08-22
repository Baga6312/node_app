var express  = require ('express') ; 

var router = express.Router() ; 

var database = require ('../database') ; 

router.get("/",function(request,response,next){
	let lim  = request.query.cin

	var query = "SELECT * FROM tasks WHERE cin = '"+lim+"'" ;

	database.query(query,function(error,data){
		if (error){
			console.log("error") ; 
		}else 
		{
			response.render('tasks',{title:'' , action:'list' ,tasks:data});
		}
	}); 
});
module.exports = router ; 