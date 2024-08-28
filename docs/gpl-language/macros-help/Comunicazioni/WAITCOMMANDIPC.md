---
sidebar_position: 14
---

# WAITCOMMANDIPC

## Sintassi

  ```
  WAITCOMMANDIPC nomeIPC nomevar1 [, … nomevar20]
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **nomeIPC**                 | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                    |         
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice, riga di matrice o defmsg. Nomi variabili 1÷20  |  

## Descrizione
Attende da un programma esterno, tramite una IPC di nome **"nomeIPC"**, un nuovo comando in ingresso da eseguire. 

Quando arriva la richiesta del comando dal programma esterno i dati in ingresso vengono copiati nelle variabili **nomevar (1÷20)** e l’esecuzione GPL procede con le istruzioni successive.

Una volta eseguito il comando il GPL deve eseguire una [REPLYIPC](REPLYIPC.md) per inviare il risultato al programma esterno. 

Vedere anche [COMMANDIPC](COMMANDIPC.md) e [SETTIMEOUTIPC](SETTIMEOUTIPC.md).