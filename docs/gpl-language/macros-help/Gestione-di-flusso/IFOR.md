---
sidebar_position: 22
---

# IFOR

## Sintassi

  ```
IFOR operando1, operando2, valoreverifica, GOTO etichetta
IFOR operando1, operando2, valoreverifica, CALL sottoprogramma
IFOR operando1, operando2, valoreverifica, nomefunzione

IFOR operando1, operando2, valoreverifica THEN
    istruzione
    istruzione
    ... 
ENDIF

IFOR operando1, operando2, valoreverifica THEN
    istruzione
    istruzione
    ... 
ELSE
    istruzione
    istruzione
    ... 
ENDIF
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **operando1**               | costante o variabile char, byte, integer o boolean o nomedevice                                                               |         
| **operando2**               | costante o variabile char, byte, integer o boolean o nomedevice                                 |        
| **valoreverifica**          | costante integer. Valore utilizzato per la verifica del risultato dell'operazione. <br/>Può assumere i seguenti valori: <br/>-**TRUE 1** <br/>-**FALSE 0**                                                                    |     
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Vengono effettuati due confronti, il primo tra **operando1** e **operando2**, il secondo tra il risultato del primo confronto e **  valoreverifica**.

Il primo confronto consiste in un OR binario tra **operando1** e **operando2**. I due operandi vengono considerati come maschere di bit. Se il risultato dell'OR binario ha almeno un bit diverso da 0, il risultato del primo confronto è TRUE. Questo viene quindi confrontato con **valoreverifica**. Se i due valori coincidono viene effettuato il salto ad etichetta o la chiamata a funzione o sottoprogramma.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).
