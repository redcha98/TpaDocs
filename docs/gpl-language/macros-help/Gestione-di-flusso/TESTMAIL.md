---
sidebar_position: 43
---

# TESTMAIL

## Sintassi

  ```
TESTMAIL mail [, nomevar1 [, … nomevar20]], GOTO etichetta
TESTMAIL mail [, nomevar1 [, … nomevar20]], CALL sottoprogramma
TESTMAIL mail [, nomevar1 [, … nomevar20]], nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **mail**                    | costante o variabile integer (1÷256). Numero del mailbox                                              |         
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice o riga di matrice. Nomi variabili 1÷20          |     
| **etichetta**               | etichetta di salto (GOTO)                                                                             | 
| **nomesottoprogramma**      | etichetta di sottoprogramma (CALL)                                                                    |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Test e ricezione di un messaggio.

La prima TESTMAIL sul mailbox **mail** crea il mailbox. 

Se il messaggio è presente nella casella postale mail, i dati inviati insieme al messaggio vengono memorizzati nelle variabili **nomevar (1÷20)**, solo se queste sono indicate, o nella riga della matrice indicata da matrice[riga]; viene inoltre effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.

Durante l'esecuzione viene controllata la congruenza tra i dati passati e quelli attesi dall'istruzione.

Vedere anche [SENDMAIL](../Multitasking/SENDMAIL.md), [WAITMAIL](../Multitasking/WAITMAIL.md) e [ENDMAIL](../Multitasking/ENDMAIL.md).
