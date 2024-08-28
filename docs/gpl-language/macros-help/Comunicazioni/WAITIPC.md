---
sidebar_position: 10
---

# WAITIPC

## Sintassi

  ```
  WAITIPC	nomeIPC nomevar1 [, … nomevar20]
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **nomeIPC**                 | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                    |         
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice o riga di matrice. Nomi variabili 1÷20          |         

## Descrizione
Riceve dati da un programma esterno tramite una IPC di nome **"nomeIPC"**.

La prima volta che viene eseguita un'istruzione di WAITIPC, viene allocata la memoria per i dati, la cui dimensione viene calcolata in base alla dimensione complessiva delle variabili **nomevar (1÷20)**. La dimensione massima della memoria è di 4.000.000 Byte. Non vi è limite al numero dei canali.

Vedere anche [SENDIPC](SENDIPC.md) e [TESTIPC](../Gestione-di-flusso/TESTIPC.md).
