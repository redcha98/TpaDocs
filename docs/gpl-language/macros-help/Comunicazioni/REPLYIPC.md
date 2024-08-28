---
sidebar_position: 12
---

# REPLYIPC

## Sintassi

  ```
 REPLYIPC	nomeIPC nomevar1 [, … nomevar20]
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **nomeIPC**                 | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                    |         
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice, riga di matrice o defmsg. Nomi variabili 1÷20  |  

## Descrizione
Invia ad un programma esterno, tramite una IPC di nome **"nomeIPC"**, il risultato del comando in ingresso eseguito.

Il comando in ingresso deve essere stato ricevuto precedentemente tramite una [WAITCOMMANDIPC](WAITCOMMANDIPC.md)

I dati risultati del comando vengono copiati dalle variabili **nomevar (1÷20)** ed inviati al programma esterno.

Vedere anche [COMMANDIPC](COMMANDIPC.md) e [SETTIMEOUTIPC](SETTIMEOUTIPC.md).
