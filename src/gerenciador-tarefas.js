/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter';
import AtualizarTarefa from './atualizar/atualizar-tarefas';
import CadastrarTarefa from './../src/atualizar/cadastrar/cadastrar-tarefa';
import ListarTarefas from './listar/listar-tarefas';


const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  ' /atualizar/:id': ({ id }) => <AtualizarTarefa id={id} />
};


function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
