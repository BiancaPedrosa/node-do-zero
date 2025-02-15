import { sql } from './db.js'

sql `
create table videos(
   id TEXT primary key,
   title TEXT,
   description TEXT,
   duration INTEGER
);`
.then(()=>{
   console.log("tabela criada")
})