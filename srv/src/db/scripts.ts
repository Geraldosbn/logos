import { sql } from './db'

sql`
select * from post
`.then(() => {
  console.log('Tabela criada!')
})
