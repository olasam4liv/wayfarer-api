import express from 'express';
const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).send({'message': 'Welcome to WayFarer App'});       
  });


  


const server  = process.env.PORT || 3000;
app.listen(server, ()=> console.log(`My app is listening to port  ${server}`));

module.exports = server;