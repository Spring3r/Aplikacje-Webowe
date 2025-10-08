let http = require('http');
const url=require("url");
const fs=require('node:fs');
const mime = require('mime-types')
http.createServer(function (req, res) {


    switch (req.url.split('?')[0]) {
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

            const data= fs.readFileSync('C:\\Users\\student\\Desktop\\pliczek.html','utf8');
            res.end(data);
            break;
        case '/get_params':
            res.writeHead(200, {'Content-Type': 'text/JSON'});
            const ParsedUrl=url.parse(req.url,true);
            console.log(ParsedUrl);
            const query=ParsedUrl.query;
            const message={ok:"ok"};
            const paramsArray=JSON.stringify(query);
            const timestamp=Date.now();
            const name=`params_${timestamp}.json`;
            fs.writeFileSync(name,paramsArray,"utf8");
            console.log(paramsArray);
            res.end(JSON.stringify(message));
            break;
        default:
            var filepath=`assets/${req.url}`;
            var adress=req.url;
            if(!mime.lookup(adress)){
                res.statusCode = 404;
                res.end("nie znaleziono");
                console.log("blad");
                return;
            }
            else {
                if (!fs.existsSync(filepath)) {
                    res.statusCode = 404;
                    res.end("Plik nie istnieje");
                    return;
                }
                console.log("dziala");
                res.writeHead(200, {'Content-Type': mime.lookup(adress)});
                res.end(fs.readFileSync(filepath,'utf8'));
                break;
            }
    }


}).listen(8080);
