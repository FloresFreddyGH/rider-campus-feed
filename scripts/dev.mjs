import './build.mjs';
import {createServer} from 'node:http';
const {default:worker}=await import('../dist/server/index.js');
createServer(async(req,res)=>{try {const response=await worker.fetch(new Request('http://localhost:4173'+req.url,{method:req.method}));res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));}catch(e){res.writeHead(500);res.end('Server error');console.error(e);}}).listen(4173,'127.0.0.1',()=>console.log('Local URL: http://127.0.0.1:4173'));
