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
        database_connection_status = '<h3  class="success">Node JS Application Successfully connect to MySQL Database</h3><br>' ; 
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
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap" rel="stylesheet">
    <link type="text/css" href="css/stylesheet.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/0bc02dfaeb.js" crossorigin="anonymous"></script>
    <script src="script/script.js"></script>
    <title>To_Do_List</title>
</head>
<br>
<body>
    <form action="/" method="POST">
   <header><h1>  </h1><br></header>
   <img class="bll" src="image/5087579.png">
   `+ database_connection_status + `
   <main>
    <section class="id"><br>

        <label class="name"for="Name">Name :</label>  <br>
        <textarea class="namearea" id="myText" name="namearea" ></textarea><br><br>
        <p class="dothis" id="dothan" ></p>

        <label class="lastname"for="lastname">Last Name :</label><br>
        <textarea class="lastnamearea"id ="myText1" name="lastnamearea"></textarea></br><br>
        <p class="dothis1" id="dothan1"></p>

        <label class="CIN" for="CIN">CIN :</label><br>
        <textarea class="CINarea" id ="myText3" name="CINarea"></textarea><br><br>
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