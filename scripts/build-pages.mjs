import {existsSync,readFileSync} from 'node:fs';
for(const file of ['docs/index.html','docs/profile.css','docs/profile.js','docs/nabil-khairi.png','docs/favicon.svg']) {if(!existsSync(file)) throw new Error('Missing publication file: '+file);}
const html=readFileSync('docs/index.html','utf8');if(!html.includes('nabilhasan100@gmail.com'))throw new Error('Contact email missing');
console.log('Static GitHub Pages files are ready in docs/. No compilation required.');
