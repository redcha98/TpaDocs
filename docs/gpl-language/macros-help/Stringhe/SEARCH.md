---
sidebar_position: 8
---

# SEARCH

## Sintassi

  ```
  SEARCH nomestringa, carattere, variabile
  ```

## Parametri
|Parametro             | Descrizione                                                                 |                
|----------------------|-----------------------------------------------------------------------------|
| **nomestringa**      | costante o variabile stringa                                                |         
| **carattere**        | costante o variabile char o stringa. Carattere o stringa da ricercare       |         
| **variabile**        | variabile integer                                                           |         

## Descrizione
Ricerca la posizione del carattere identificato da **carattere** (che può essere anche una stringa) all'interno della stringa **nomestringa** e pone l'indice del risultato nella **variabile**.

Se **carattere** non è stato trovato, variabile conterrà il valore -1.
