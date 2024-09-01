---
sidebar_position: 37
---

# ONERRSYS

## Sintassi

  ```
ONERRSYS nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |
|-----------------------------|----------------------------|
| **nomefunzione**            | nome funzione              |         

## Descrizione
Abilita la gestione degli errori di sistema. All’insorgere di un errore di sistema tutti i task vengono messe in HOLD e vengono lanciate in task tutte le funzioni **nomefunzione** registrate tramite la macro ONERRSYS. 
Compito di queste funzioni è di analizzare l'errore di sistema e intraprendere le opportune azioni per mettere la macchina in sicurezza.
Al termine dell’esecuzione di tutti i task di ONERRSYS si riprende l’esecuzione dei task messe precedentemente in Hold.

La funzione **nomefunzione** deve accettare i seguenti parametri:
- il numero dell'errore di sistema, come Integer
- il task che in cui si è verificato l'errore, come Function
- il dispositivo che ha generato errore, come device

In caso di Errori di Sistema multipli la funzione viene lanciata in task una volta per ogni errore generato, in maniera sequenziale. Se la funzione stessa genera un Errore di Sistema vengono terminati tutti i task.

Al termine di tutte i task di ONERRSYS, se non già terminato, verrà terminato il task che aveva generato l’errore di sistema. 

### Esempio
[Ciclo di Main con gestione Errori](MainErrSys.Md)
