let express = require('express')//returns a function
const app = express() //return object
const fs = require('fs')
const path = require('path')

//routes
//route = http method + url
// app.get('/',(request, response)=>{
//     //response.status(200).send("Hello World!.....") //sending text response
//     //response.send("<h1>Hello World</h1>") //sending html response
//     response.status(200).json({message:"hello kmit",college:"kmit"})
// })
// app.post('/',(request,response)=>{
//     response.send("POST method")
// })
// app.put('/',(request,response)=>{
//     response.send("PUT method")
// })
// app.delete('/',(request,response)=>{
//     response.send("DELELTE method")
// })




/* Basic pages */
// app.get('/',(request,response)=>{
//     response.send("Home Page")
// })

// app.get('/home',(request,response)=>{
//     response.send("Home Page")
// })

// app.get('/about',(request,response)=>{
//     response.send("About Page")
// })

// app.get('/contact',(request,response)=>{
//     response.send("Contact Us Page")
// })

app.use(express.json());

// Use an absolute path to the JSON file
const DATA_FILE = path.join(__dirname, 'data', 'products.json');

// Load products once (mutable) with error handling
let products;
try {
    const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
    if (!fileContent || fileContent.trim() === '') {
        console.warn('Products file is empty, initializing with empty array');
        products = [];
    } else {
        products = JSON.parse(fileContent);
    }
} catch (err) {
    console.error('Error reading products file:', err.message);
    console.warn('Initializing with empty products array');
    products = [];
}

/* GET: entire catalog */
app.get('/products', (request, response)=>{
    response.json(products)
});

/* GET: single product by id */
app.get('/products/:id',(request,response)=>{
    const productId = parseInt(request.params.id)
    const resProduct = products.find((product)=>product.id == productId)

    if(resProduct)
        response.status(200).json(resProduct)
    else
        response.status(400).send(`Product with ${productId} is NOT found`)
})

/* POST: create a new product (server assigns next id) */
app.post('/products', (request, response) => {
   // console.log(request.body)
    let newProduct = request.body
    const nextId = products.length ? Math.max(...products.map(p => Number(p.id) || 0)) + 1 : 1;

    newProduct = { id: nextId, ...request.body };
    products.push(newProduct);

    fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return response.status(500).send('Error in writing file');
        }
        return response.status(201).json(newProduct);
    });
});

// PUT: replace the entire product (except id stays the same)
app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).send(`Product ${id} not found`);

  products[idx] = { id, ...req.body }; // full replacement

  console.log(products);
  fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error updating file');
    }
    res.status(200).json(products[idx]);
  });
});


// PATCH: partial update (merge only provided fields)
app.patch('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).send(`Product ${id} not found`);

  products[idx] = { ...products[idx], ...req.body, id }; // keep id unchanged
  fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error updating file');
    }
    res.status(200).json(products[idx]);
  });
});

// DELETE: deleting the product based on id
app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).send(`Product with id ${id} not found`);
  }

  // Remove the product from array
  const deletedProduct = products.splice(index, 1)[0];

  // Write updated data back to JSON file
  fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Error deleting product');
    }
    return res.status(200).json({
      message: `Product with id ${id} deleted successfully`,
      deletedProduct
    });
  });
});

app.listen(4000,() => {
  console.log('Serving is up on http://127.0.0.1:4000');
});