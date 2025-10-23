// CORE MODULES
const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

// Read the HTML and product template files from the "public" folder
const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');
let products = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'Data', 'products.json'), 'utf-8'));
let productListHtml = fs.readFileSync(path.join(__dirname, 'public', 'Template', 'product-list.html'), 'utf-8');

// Replace placeholders in the template for each product
let productHtmlArray = products.map((product) => {
    let output = productListHtml.replace('{{%IMAGE%}}', `public/Images/${product.productImage}`);
    output = output.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%MODELNAME%}}', product.modeName);
    output = output.replace('{{%MODELNO%}}', product.modelNumber);
    output = output.replace('{{%SIZE%}}', product.size);
    output = output.replace('{{%CAMERA%}}', product.camera);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%COLOR%}}', product.color);
    output = output.replace('{{%ID%}}', product.id);
    output = output.replace('{{%ROM%}}', product.ROM);
    output = output.replace('{{%DESC%}}', product.Description);

    return output;
});

// Function to serve static files only from "public" folder
const serveStaticFile = (filePath, response) => {
    const publicFolderPath = path.join(__dirname, 'public');
    const resolvedPath = path.resolve(filePath);

    // Ensure the requested file is inside the "public" folder
    if (resolvedPath.startsWith(publicFolderPath)) {
        fs.readFile(resolvedPath, (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end('<h1>404: File Not Found</h1>');
            } else {
                const ext = path.extname(filePath).toLowerCase();
                let contentType = 'text/plain'; // Default content type
                switch (ext) {
                    case '.js':
                        contentType = 'application/javascript';
                        break;
                    case '.css':
                        contentType = 'text/css';
                        break;
                    case '.png':
                        contentType = 'image/png';
                        break;
                    case '.jpg':
                    case '.jpeg':
                        contentType = 'image/jpeg';
                        break;
                    case '.gif':
                        contentType = 'image/gif';
                        break;
                    default:
                        contentType = 'text/plain';
                }
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(data);
            }
        });
    } else {
        // File is outside the "public" folder
        response.writeHead(403, { 'Content-Type': 'text/html' });
        response.end('<h1>403: Forbidden</h1>');
    }
};

// Create the server
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;

    // Serve static files from "public" folder
    if (pathname.startsWith('/public')) {
        const filePath = path.join(__dirname, pathname);
        serveStaticFile(filePath, response);
    } 
    // Handle different routes
    else if (pathname === '/' || pathname.toLowerCase() === '/home') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
    } else if (pathname.toLowerCase() === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
    } else if (pathname.toLowerCase() === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
    } else if (pathname.toLowerCase() === '/products') {
        const productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(''));
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(productResponseHtml);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
    }
});

// Start the server
server.listen(8000, () => {
    console.log('Server has started on port 8000!');
});
