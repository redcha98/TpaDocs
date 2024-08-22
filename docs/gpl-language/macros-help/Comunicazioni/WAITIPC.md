---
sidebar_position: 10
---

# WAITIPC

## Sintassi

  ```
  WAITIPC	nomeIPC [, nomevar1 [, … nomevar20]]
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **nomeIPC**                 | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                    |         
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice, riga di matrice o defmsg. Nomi variabili 1÷20  |         

## Descrizione
Riceve un comando IPC dalla memoria condivisa **"nomeIPC"**.

La prima volta che viene eseguita un'istruzione di WAITIPC viene allocata la memoria condivisa, la cui dimensione viene calcolata in base alla dimensione dei dati che vengono inviati. La dimensione massima della memoria condivisa è di 64 Kb. Possono essere definite al massimo 48 memorie condivise, identificate da 48 nomi univoci.

Alla memoria condivisa è associato un semaforo che permette di sincronizzare l'esecuzione dei task che vi accedono. Il task che legge i dati attende che il semaforo venga attivato dal task che scrive i dati, legge i dati e disattiva il semaforo.

Una WAITIPC senza dati si riduce ad un sincronismo tra task. In questo caso non viene allocata la memoria condivisa.

Vedere anche [SENDIPC](SENDIPC.md) e [TESTIPC](../Gestione-di-flusso/TESTIPC.md).
