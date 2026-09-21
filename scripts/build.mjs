import {readFileSync,writeFileSync,mkdirSync,copyFileSync,existsSync} from 'node:fs';
mkdirSync('dist/server',{recursive:true}); mkdirSync('dist/.openai',{recursive:true});
const html=readFileSync('src/index.html','utf8');
const data=readFileSync('lib/knowledge.mjs','utf8').replaceAll('export ','');
const worker=readFileSync('src/worker.mjs','utf8');
writeFileSync('dist/server/index.js',`const HTML=${JSON.stringify(html)};\n${data}\n${worker}`);
if(existsSync('.openai/hosting.json')) copyFileSync('.openai/hosting.json','dist/.openai/hosting.json');
console.log('Built Worker with bundled HTML and knowledge records.');
