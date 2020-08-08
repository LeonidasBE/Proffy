import express from 'express';
import routes from './routes';
import cors from 'cors'

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar iuma informação existente

// Corpo (Request Body): Geralmente vem os dados para criação ou atualização de registros
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333);
