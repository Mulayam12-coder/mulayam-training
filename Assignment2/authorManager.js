let author1=new Object();
 
author1.id = "101";
author1.Name = "Tim";
author1.Biography = "Tim is a poet,writer,author of novel";
author1.Birthdate = "10/04/1995";
author1.Email = "tim976@gmail.com";
author1.PhotographUrl = "http://photographUrl.com";
author1.listofbooks = "Rich dad, invester, Time is money";
 
let author2=new Object();
 
author2.id = "102";
author2.Name = "Travis";
author2.Biography = "Travis is family man first, attempt to be writer second";
author2.Birthdate = "12/05/1995";
author2.Email = "travis997@gmail.com";
author2.PhotographUrl = "http://authorsphotography.com";
author2.listofbooks = "Time to kill, Eden, Villy body";
 
let author3=new Object();

 
function addAuthor(name){
    
    author3.name=name;
    console.log(` A new author  is added with name ${author3.name}`);
}
 
addAuthor('Michel');
 
function getAllAuthors(){
    console.log(` All authors present are : ${author1.Name} ,  ${author2.Name} ,${author3.name}`);
} 
 
getAllAuthors();
 
function getAuthorById(id) {
 
    if(id==="101"){
        console.log(`Author is:  ${author1.Name} `);
    }
 
    console.log(`Author is:  ${author2.Name} `);
 
}
 
getAuthorById("102");
 
function SearchByName(name)
{
  if(name ==="Tim"){
    console.log(`The Author is Author1 `);
  }
 
  if(name ==="Travis"){
    console.log(`The Author is Author2 `);
  }
 
  if(name ==="Michel"){
    console.log(`The Author is Author3 `);
  }
 
} 
SearchByName("Travis");
 
function SearchByBookwritten (bookname){
    if(bookname==="Time to kill")
    {
        console.log(`The Author is: ${author2.Name} `);
    }
    if(bookname==="Eden")
    {
        console.log(`The Author is: ${author2.Name} `);
    }
}
SearchByBookwritten("Time to kill");
 
function Searchbybiography(biography){
    if(biography==="Tim is a poet,writer,author of novel")
    {
        console.log(`The Biography belongs to author: ${author1.Name} `);
    }
    if(biography==="Travis is family man first, attempt to be writer second"){
        console.log(`The Biography belongs to author : ${author2.Name} `);
    }
 
}
Searchbybiography("Tim is a poet,writer,author of novel")
 
function Deleteauthor(authorname){
    if(authorname==="Tim")
    {
        console.log(`The Author deleted is author1 `);
    }
 
    if(authorname==="Travis")
    {
        console.log(`The Author deleted is author2 `);
    }
 
    if(authorname==="Michel")
    {
        console.log(`The Author deleted is author3 `);
    }
} 
Deleteauthor("Michel");
 
function Updateauthordetails (id,name,biography,birthdate,email,photographyurl,listofbooks){
    author2.id = id ;
    author2.name=name;
    author2.biography = biography;
    author2.birthdate = birthdate;
    author2.email = email;
    author2.photographyurl = photographyurl;
    author2.listofbooks = listofbooks;
 
    console.log(` A author2  is updated with details:  ${author2.id} ,${author2.name} ,${author2.biography} ,${author2.birthdate} ,${author2.email}  , ${author2.photographyurl} , ${author2.listofbooks}`);
}
Updateauthordetails('103','Peter' ,'A well known novel winning author','01/2/1995','peter997@gmail.com','http://authorsphotography.com','Scanner,Number the star, Brave')