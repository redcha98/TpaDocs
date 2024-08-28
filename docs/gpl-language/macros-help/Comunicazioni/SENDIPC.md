---
sidebar_position: 9
---

# SENDIPC

## Sintassi

  ```
  SENDIPC	nomeIPC nomevar1 [, … nomevar20]
  ```

## Parametri
|Parametro                     | Descrizione                                                                                               |                
|------------------------------|-----------------------------------------------------------------------------------------------------------|
| **nomeIPC**                  | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                        |         
| **nomevar1 [...nomeVar20]**  | costante o variabile numerica, boolean, string, vettore, matrice o riga di matrice. Nomi variabili 1÷20   |         

## Descrizione
Invia dati ad un programma esterno tramite una IPC di nome **"nomeIPC"**.

La prima volta che viene eseguita un'istruzione di SENDIPC, viene allocata la memoria per i dati, la cui dimensione viene calcolata in base alla dimensione complessiva delle variabili **nomevar (1÷20)**. La dimensione massima della memoria è di 4.000.000 Byte. Non vi è limite al numero dei canali IPC.

_La macro non attende mail l’avvenuta ricezione dei dati da parte del programma esterno, se necessario utilizzare la macro [COMMANDIPC](COMMANDIPC.md)_

Vedere anche [WAITIPC](WAITIPC.md) e [TESTIPC](../Gestione-di-flusso/TESTIPC.md).
