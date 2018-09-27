if(process.env.NODE_ENV==='production'){
  module.exports ={mongoURI:'mongodb://Igor:igor12@ds215633.mlab.com:15633/vidjot-app'}
}else{
  module.exports = {mongoURI:'mongodb://localhost/vidjot-dev'}
}