const express = require ('express');
const exphbs = require ('express-handlebars');
const mongoose = require ('mongoose');

const app = express();

//Map global promise - get rid of warning
// mongoose.Promise = global.Promise;

//connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev',{
  // useMongoClient: true
  useNewUrlParser: true
})
.then(()=>console.log('MongoDB connected...'))
.catch(err => console.log('error'));

//Load Idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');

//Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




//Index Route
app.get('/', (req, res)=>{
  const title ='Welcome';
res.render('index',{
  title:title
});
});

//About Route

app.get('/about',(req,res)=>{
  res.render('about');
});

//Add Idea Form
app.get('/ideas/add',(req,res)=>{
  res.render('ideas/add');
});

const port = 5000;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});