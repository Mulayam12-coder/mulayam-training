let Books=require('./book');

let {BookManager, showBooks} = require('./bookmanager');
const { contains } = require('./utils');

let manager=new BookManager();

let b1=new Books('tim','Fault in your star', 'Tim Wood','500rupe','4.0');

let b2=new Books('travis','Nothing to worry','Travis Hold' ,'800rupe','4.5');

let b3=new Books('michel','Moon and star', 'Michel Broad','1000rupe','5.0');

manager.addbook(b1);
manager.addbook(b2);
manager.addbook(b3);

let titlebooks = manager.search( b=> contains(b.title,'star'));
showBooks(titlebooks,'book with title star');

let pricerange='1000rs';
let pricebooks = manager.search( b=> b.price<=pricerange);
showBooks(pricebooks,`Books with pricerange ${pricerange} price`);

let ratingrange='4.5';
let ratingbooks = manager.search( b=> b.rating<=ratingrange);
showBooks(ratingbooks,`Books with ratingrange ${ratingrange} rating`);



