let http = require('http');
http.createServer(function (req, res) {


    switch (req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Strona glowna');
            break;
        case '/2':
            res.writeHead(200, {'Content-Type': 'text/JSON'});
            const obj={name:"Maciej",surname:"Musial",age:36};
            const myJSON=JSON.stringify(obj);
            res.end(myJSON);
            break;
        case '/3':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1 style="color: darkgreen">Dzien dobry</h1>');
            break;
        case '/4':
            res.writeHead(200, {'Content-Type': 'text/html'});
            const fs=require('node:fs');
            const data= fs.readFileSync('C:\\Users\\student\\Desktop\\pliczek.html','utf8');
            res.end(data);
            break;
        default:
            res.end("Zly adres");
            break;
    }

    res.end();
}).listen(8080);
