---
sidebar_position: 42
---

# TESTIPC

## Sintassi

  ```
TESTIPC nomeIPC [, nomevar1 [, … nomevar20]], GOTO etichetta
TESTIPC nomeIPC [, nomevar1 [, … nomevar20]], CALL sottoprogramma
TESTIPC nomeIPC [, nomevar1 [, … nomevar20]], nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **nomeIPC**                 | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                    |         
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice o riga di matrice. Nomi variabili 1÷20          |     
| **etichetta**               | etichetta di salto (GOTO)                                                                             | 
| **nomesottoprogramma**      | etichetta di sottoprogramma (CALL)                                                                    |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Test e ricezione dati tramite una IPC di nome **"nomeIPC"**.

La prima volta che viene eseguita un'istruzione di TESTIPC viene allocata la memoria per i dati da ricevere, la cui dimensione viene calcolata in base alla dimensione complessiva delle variabili **nomevar (1÷20)**. La dimensione massima della memoria è di 4.000.000 Byte.

Se all'esecuzione della macro TESTIPC vi sono dei dati ricevuti, vengono copiati nelle variabili **nomevar (1÷20)** e di seguito viene eseguita l'istruzione di salto ad **etichetta**, o chiamato il **nomesottoprogramma** o **nomefunzione** descritti come ultimo parametro dell'istruzione TESTIPC.

Vedere anche [SENDIPC](../Comunicazioni/SENDIPC.md) e [WAITIPC](../Comunicazioni/WAITIPC.md).
