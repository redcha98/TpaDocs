---
sidebar_position: 13
---

# STARTTASK

## Sintassi

  ```
STARTTASK nometask [, parametri]
  ```

## Parametri
|Parametro      | Descrizione                                                   |                
|---------------|---------------------------------------------------------------|
| **nometask**  | nome task                                                     |       
| **parametri** | eventuali parametri necessari durante l'esecuzione del task   |       

## Descrizione
Attiva l'esecuzione del task definito nella variabile **nometask**.
Al task possono essere passati eventuali parametri utilizzati durante l'esecuzione. Il numero ed il tipo dei parametri passati deve corrispondere a quelli dichiarati dalla funzione che implementa il task. Se il task è già in esecuzione l'istruzione non ha alcun effetto.
