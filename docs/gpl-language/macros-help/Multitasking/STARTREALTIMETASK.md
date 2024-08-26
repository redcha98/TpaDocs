---
sidebar_position: 11
---

# STARTREALTIMETASK

## Sintassi

  ```
 STARTREALTIMETASK nomefunzione [, parametri]
  ```

## Parametri
|Parametro              | Descrizione                                                       |                
|-----------------------|-------------------------------------------------------------------|
| **nomefunzione**      | nome funzione                                                     |  
| **parametri**         | eventuali parametri necessari durante l'esecuzione del task       |  


## Descrizione
Attiva l'esecuzione di un task real-time. Tale task viene eseguito con la stessa frequenza del real-time di controllo degli assi. A differenza dei normali task GPL viene eseguito interamente ogni real-time, dalla prima istruzione della function fino alla prima istruzione FRET. 

Vedere anche [ENDREALTIMETASK](ENDREALTIMETASK.md).

### Nota
Le variabili locali dichiarate nel task real-time vengono inizializzate <u>solo</u> in avvio del task e in seguito mantengono il valore dell'ultima esecuzione.