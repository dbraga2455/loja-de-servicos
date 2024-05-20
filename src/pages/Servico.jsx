import React, { useEffect, useState } from 'react'
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import { getItem, setItem } from '../services/localStorageFuncs'; 
//import {FaGithub } from 'react-icons/fa'

export const Servico = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('carrinho-de-servico') || []) //-> Guarda Serviços adicionados ao carrinho
    const [list, setList] = useState([]);
    //const [Git, setGit] = useState([]); //-> guarda os itens 

    // Função para carregar a lista do localStorage
    const loadListFromLocalStorage = () => {
        const storedList = localStorage.getItem('myProgrammingLanguages');
        if (storedList) {
          setList(JSON.parse(storedList));
        } else {
          // Defina a lista padrão se não houver nada no localStorage
          const defaultList = [
            { id: 1, nome: "Python" },
            { id: 2, nome: "JavaScript" },
            { id: 3, nome: "Java" },
            { id: 4, nome: "C#" },
            { id: 5, nome: "C++" },
            { id: 6, nome: "Ruby" },
            { id: 7, nome: "Swift" },
            { id: 8, nome: "Go" },
            { id: 9, nome: "Kotlin" },
            { id: 10, nome: "PHP" },
            { id: 11, nome: "TypeScript" },
            { id: 12, nome: "Rust" },
            { id: 13, nome: "Scala" },
            { id: 14, nome: "Perl" },
            { id: 15, nome: "Haskell" },
            { id: 16, nome: "Lua" },
            { id: 17, nome: "Elixir" },
            { id: 18, nome: "Objective-C" },
            { id: 19, nome: "Dart" },
            { id: 20, nome: "R" },
            { id: 21, nome: "MATLAB" },
            { id: 22, nome: "Groovy" },
            { id: 23, nome: "Clojure" },
            { id: 24, nome: "Erlang" },
            { id: 25, nome: "F#" },
            { id: 26, nome: "Visual Basic" },
            { id: 27, nome: "Shell" },
            { id: 28, nome: "Assembly" },
            { id: 29, nome: "SQL" },
            { id: 30, nome: "SAS" },
            { id: 31, nome: "Julia" },
            { id: 32, nome: "COBOL" },
            { id: 33, nome: "Fortran" },
            { id: 34, nome: "Ada" },
            { id: 35, nome: "Lisp" },
            { id: 36, nome: "Prolog" },
            { id: 37, nome: "Scheme" },
            { id: 38, nome: "VBScript" },
            { id: 39, nome: "Scratch" },
            { id: 40, nome: "Tcl" },
            { id: 41, nome: "ABAP" },
            { id: 42, nome: "PL/SQL" },
            { id: 43, nome: "RPG" },
            { id: 44, nome: "Delphi" },
            { id: 45, nome: "Smalltalk" },
            { id: 46, nome: "VB.NET" },
            { id: 47, nome: "ActionScript" },
            { id: 48, nome: "ML" },
            { id: 49, nome: "Pascal" },
            { id: 50, nome: "D" }
          ];
          setList(defaultList);
          localStorage.setItem('myProgrammingLanguages', JSON.stringify(defaultList));
        }
      };
      const saveListToLocalStorage = (newList) => {
        setList(newList);
        localStorage.setItem('myProgrammingLanguages', JSON.stringify(newList));
      };
    
      // Carregar a lista do localStorage quando o componente monta
      useEffect(() => {
        loadListFromLocalStorage();
      }, []);
    
      // Adicionar um novo item à lista
      const addItem = (id, nome) => {
        const newList = [...list, { id, nome }];
        saveListToLocalStorage(newList);
      };

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {
                    list.map((e) => (
                        <div key ={e.id}>
                            <h4>{e.nome}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
