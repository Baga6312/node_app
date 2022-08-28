const express = require ('express') ;

const app = express() ;

// connect  to database 
const mysql = require('mysql') ;
const connection = mysql.createConnection({
    host : 'localhost' ,
    port : 3306 ,
    database : 'testing' ,
    user : 'root' ,
    password : ''
});

var database_connection_status = '' ; 

connection.connect(function(error){
    if (error){
        database_connection_status = '<h3  class="danger">MySQL Database Connection Error </h3><br>' ; 
    }else {
        database_connection_status = '<h3  class="success">Welcome enter your CIN number </h3><br>' ; 
    }
}); 


app.use(express.urlencoded()) ;
app.use(express.static('public'));

app.get('/' , function(request,response , next){
    response.send(`
    <!DOCTYPE html>
<br lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap" rel="stylesheet">
    <link type="text/css" href="css/stylesheet.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/0bc02dfaeb.js" crossorigin="anonymous"></script>
    <script src="script/script.js"></script>
    <title>To_Do_List</title>
</head>
<br>
<body>
    <form action="http://localhost:3000/sample_data" method="GET"> 
   <header><h1>  </h1><br></header>
   <img class="bll" src="image/5087579.png">
   `+ database_connection_status + `
   <main>
    <section class="id"><br>

        <label class="CIN" for="CIN">CIN :</label><br>
        <textarea class="CINarea" id ="myText3" name="cin"></textarea><br><br>
        <p class="dothis2" id="dothan2"></p>

        <div>
        <button href="#"  onclick="verify()" type="submit" id ="myButton "class="button"> Sauvegarder </button>
        <button href="#"  type="reset" id ="myButton1" class="button1">Annuler </button>
        </div>

    </section>
    </main>
    <footer>

        <p class="par2"><i class="fa-solid fa-copyright"></i>Copyright 2022 all rights reserved designed by Oussema Ben Ayech </p>
    </footer>
    </form>
</body>

</html>
    `); 
});
app.post('/' , function(request , response , next ){

    response.send(request.body) ;
});

app.listen(2000) ;