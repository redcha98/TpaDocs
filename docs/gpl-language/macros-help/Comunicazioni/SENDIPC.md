---
sidebar_position: 9
---

# SENDIPC

## Sintassi

  ```
  SENDIPC	nomeIPC [, nomevar1 [, … nomevar20]]
  ```

## Parametri
|Parametro                     | Descrizione                                                                                            |                
|------------------------------|--------------------------------------------------------------------------------------------------------|
| **nomeIPC**                  | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                     |         
| **nomevar1 [...nomeVar20]**  | costante o variabile numerica, boolean, string, vettore, matrice, riga di matrice o defmsg. Nomi variabili 1÷20  |         

## Descrizione
Invia un comando IPC alla memoria condivisa **"nomeIPC"**.

La prima volta che viene eseguita un'istruzione di SENDIPC, viene allocata la memoria condivisa, la cui dimensione viene calcolata in base alla dimensione dei dati che vengono inviati. La dimensione massima della memoria condivisa è di 64 Kb. Possono essere definite al massimo 48 memorie condivise, identificate da 48 nomi univoci.

Alla memoria condivisa è associato un semaforo, che permette di sincronizzare l'esecuzione dei task che vi accedono. Il task che scrive i dati attiva il semaforo al termine della scrittura, il task che legge i dati lo disattiva al termine della lettura.

Se come parametro attesa è stato indicato WAIT, il task che ha scritto i dati attenderà che questi vengano letti (semaforo disattivato), prima di proseguire l'esecuzione.
Una SENDIPC senza dati si riduce ad un sincronismo tra task. In questo caso non viene allocata la memoria condivisa.

Vedere anche [WAITIPC](WAITIPC.md) e [TESTIPC](../Gestione-di-flusso/TESTIPC.md).
