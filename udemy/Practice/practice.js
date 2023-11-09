let http=require("http");

const port=8082;

const hostname="121.0.0.1"

const cars = [
    {
        make: 'Audi',
        model: 'A3',
        year: '2015',
        price: 10000,
        transmission: 'Automatic',
        url: `https://images.pexels.com/photos/2394/lights-clouds-dark-car.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Mercedes',
        model: 'B Class',
        year: '2018',
        price: 20000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: '2018',
        price: 13000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    }
];

const respond=(request,response)=>{
    console.log(request.url);
    const query=url.parse(request.url,true).query;
    const pathname=url.parse(request.url,true).pathname;
    response.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Node</title>
</head>
<body>`);
        response.write('<p>Node is fun!</p>');
        const check=cars=>a;
}
const server=http.createServer(respond);

server.listen(port,hostname,()=>{console.log("connection established !")});

