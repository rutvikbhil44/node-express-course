// const http = require("http");

// const { readFileSync } = require("fs");

// //get ll files

// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyles = readFileSync("./navbar-app/styles.css");

// const homeImage = readFileSync("./navbar-app/logo.svg");

// const homeLogic = readFileSync("./navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {
//   // console.log(req.method);
//   // console.log(req.url);


//   //Home page
//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();

//     //about page
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>About page </h1>");
//     res.end("");

//     //styles
//   } else if (req.url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyles);
//     res.end("");
//   }

//   //logo
//   else if (req.url === "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg+xml" });
//     res.write(homeImage);
//     res.end("");
//   }

//   //javascript
//   else if (req.url === "/browser-app-js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end("");
//   } 

//   //404
//   else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>Page not found </h1>");
//     res.end("");
//   }
// });

// server.listen(5000);





// const express = require('express');
// const app = express(); 

// app.get('/', (req,res) =>{
//     res.status(200).send("Home page")
// })

// app.get('/about', (req,res) => {
//     res.status(200).send("About page")
// })

// app.all('*', (req,res) => {
//     res.status(404).send("<h1>Resource not found</h1>")
// })

// app.listen(5000, ()=> {
//     console.log('Server is listening on port 5000...');
    
// })




// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static('./public'));

// // app.get('/', (req,res) => {
// //     res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// // })

// app.all('*', (req,res) => {
//     res.status(404).send("<h1>Resource not found</h1>")
// })
// app.listen(5000, ()=>{
//     console.log('Server is listening on port 5000...');
    
// })



// const express = require('express');
// const app = express();
// const {products} = require('./data')

// app.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
// })

// app.get('/api/products', (req , res)=>{
//     const newProducts = products.map((product) => {
//         const { id, name, image } = product
//         return { id, name, image }
//     })
//     res.json(newProducts)
// })

// app.get('/api/products/:productID', (req, res) => {
    
//     console.log(req.params);
//     const { productID } = req.params;
    
//     const singleProduct = products.find((product) => product.id === Number(productID))
//     res.json(singleProduct)
// })


// app.get('/api/v1/query', (req, res) => {
//     console.log(req.query);
//     const {search , limit} = req.query;
//     let sortedProducts = [...products];
//     if(search){
//         sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search))
//     }
//     if(limit){
//         sortedProducts = sortedProducts.slice(0, Number(limit));
//     }
//     if(sortedProducts.length < 1){
//         return res.status(200).json({success: true, data: []})
//     }
//     res.status(200).json(sortedProducts)
// })


// app.all('*', (req,res) => {
//     res.status(404).send("<h1>Resource not found</h1>")
// })

// app.listen(5000, ()=>{
//     console.log("Server is running on port 5000....");
    
// })




// const express = require('express');
// const app = express();
// const logger = require('./logger');


// //  req => middleware => res



// app.get('/', logger, (req, res) => {
  
//     res.send('Home')
// })

// app.get('/about',logger, (req, res)=>{
//     res.send('About')
// })



// app.listen(5000, ()=>{
//     console.log("Server is running on port 5000....");
    
// })




const express = require('express');
const app = express();

let { people } = require('./data');

// static asset

app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res)=>{
    
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})


app.listen(5000, ()=>{
    console.log("Server is running on port 5000....");
    
})