---
sidebar_position: 42
---

# TESTIPC

## Sintassi

  ```
TESTIPC	nomeIPC [, nomevar1 [, … nomevar20]], GOTO etichetta
TESTIPC	nomeIPC [, nomevar1 [, … nomevar20]], CALL sottoprogramma
TESTIPC	nomeIPC [, nomevar1 [, … nomevar20]], nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **nomeIPC**                 | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                    |         
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice, riga di matrice o defmsg. Nomi variabili 1÷20  |     
| **etichetta**               | etichetta di salto (GOTO)                                                                             | 
| **nomesottoprogramma**      | etichetta di sottoprogramma (CALL)                                                                    |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Test e ricezione di una IPC dalla memoria condivisa **"nomeIPC"**.

La prima volta che viene eseguita un'istruzione di TESTIPC viene allocata la memoria condivisa, la cui dimensione viene calcolata in base alla dimensione dei dati che vengono inviati. La dimensione massima della memoria condivisa è di 64 Kb.

Alla memoria condivisa è associato un semaforo che permette di sincronizzare l'esecuzione dei task che vi accedono. Il task che vi accede verifica la presenza di un semaforo attivo, legge i dati dalla memoria condivisa e disattiva il semaforo. Di seguito viene eseguita l'istruzione di salto ad **etichetta**, o chiamato il **nomesottoprogramma** o **nomefunzione** descritti come ultimo parametro dell'istruzione TESTIPC.

Vedere anche [SENDIPC](../Comunicazioni/SENDIPC.md) e [WAITIPC](../Comunicazioni/WAITIPC.md).