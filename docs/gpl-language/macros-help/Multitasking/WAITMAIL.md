---
sidebar_position: 9
---

# WAITMAIL

## Sintassi

  ```
WAITMAIL mail [, nomevar1 [,..nomevar20]]
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **mail**                    | costante o variabile integer (1÷256). Numero del mailbox                                              |       
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice o riga di matrice. Nomi variabili 1÷20          |  

## Descrizione
Riceve un messaggio dalla casella postale **mail**. Al messaggio possono essere associati dei dati.

I dati ricevuti insieme al messaggio vengono memorizzati nelle variabili **nomevar (1÷20)** indicate.

Se nel momento in cui viene eseguita l'istruzione WAITMAIL non sono già presenti dei messaggi in attesa di lettura, il task viene messo in stato di HOLD, da cui esce solo quando un altro task invia un messaggio alla casella con l'istruzione [SENDMAIL](SENDMAIL.md). La congruenza tra i dati passati e quelli attesi dall'istruzione, viene controllata durante l'esecuzione dell'istruzione.

Una WAITMAIL senza parametri opzionali si riduce ad un semplice meccanismo di sincronizzazione tra task.

Vedere anche [SENDMAIL](SENDMAIL.md), [ENDMAIL](ENDMAIL.md) e [TESTMAIL](../Gestione-di-flusso/TESTMAIL.md).