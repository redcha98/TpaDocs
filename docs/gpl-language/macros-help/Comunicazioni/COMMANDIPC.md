---
sidebar_position: 11
---

# COMMANDIPC

## Sintassi

  ```
  risult1 [… risult20] = COMMANDIPC nomeIPC nomevar1 [, nomevar20, ...]
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **nomeIPC**                 | costante stringa. Nome della IPC, senza spazi, al massimo 50 byte (codifica UTF-8)                    |         
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice, riga di matrice o defmsg. Nomi variabili 1÷20  |         
| **risult1 [...risult20]**   |	variabile numerica, boolean, string, vettore, matrice, riga di matrice o defmsg. Nomi variabili 1÷20  |

## Descrizione
Richiede ad un programma esterno l’esecuzione di un comando tramite una IPC di nome **"nomeIPC"**.

Le variabili **nomevar (1÷20)** contengono i dati parametri del comando e vengono inviati al programma esterno alla prima esecuzione della macro che rimane in attesa durante l’esecuzione del comando per poi ricevere nelle variabili **risult (1÷20)** il risultato del comando eseguito dal programma esterno.

La macro attende sempre l’esecuzione del comando a meno che sia stata eseguita precedentemente una macro di [SETTIMEOUTIPC](SETTIMEOUTIPC.md) che imposta il timeout oltre il quale la COMMANDIPC esce generando un errore di sistema.

Vedere anche [WAITCOMMANDIPC](WAITCOMMANDIPC.md) e [REPLYIPC](REPLYIPC.md).