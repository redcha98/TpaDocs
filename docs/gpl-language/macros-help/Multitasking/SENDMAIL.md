---
sidebar_position: 9
---

# SENDMAIL

## Sintassi

  ```
SENDMAIL mail, attesa [, nomevar1 [,..nomevar20]]
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **mail**                    | costante o variabile integer (1÷256). Numero del mailbox                                              |       
| **attesa**                  | costante predefinita. Modo di attesa di lettura o di esecuzione del comando.<br/>I valori che possono essere assegnate alla costante attesa sono: <br/>- **WAIT** attende la lettura del comando <br/>- **NOWAIT** non attende la lettura del comando <br/>- **WAITACK** attende l'esecuzione del comando |       
| **nomevar1 [...nomeVar20]** | variabile numerica, boolean, string, vettore, matrice o riga di matrice. Nomi variabili 1÷20          |  

## Descrizione
Invia un messaggio (o comando) alla casella **mail**. I messaggi possono essere utilizzati per sincronizzare e scambiare informazioni tra due o più task.

Se la casella mail non esiste, ovvero non è stata ancora eseguita un'istruzione [WAITMAIL](WAITMAIL.md) o [TESTMAIL](..\Gestione-di-flusso\TESTMAIL.md), l'istruzione viene ignorata.

Se il task ricevente non è in attesa di un messaggio (istruzione WAITMAIL) oppure è impegnato, i dati **nomevar (1÷20)** passati dall'istruzione vengono memorizzati in una coda. In questo caso:
1.	se l'argomento di attesa è **NOWAIT** l'esecuzione continua con l'istruzione successiva;
2.	se l'argomento di attesa è **WAIT** l'esecuzione attende che il messaggio venga letto dal task ricevente;
3.	se l'argomento di attesa è **WAITACK** l'esecuzione attende che il messaggio venga letto e che venga confermata l'esecuzione del comando dal task ricevente (attraverso l'istruzione [ENDMAIL](ENDMAIL.md) o una nuova [WAITMAIL](WAITMAIL.md)).

È molto importante che il numero delle variabili passate ed i loro tipi coincidano con quelli utilizzati per creare la casella postale con l'istruzione [WAITMAIL](WAITMAIL.md). Il controllo non consente l'utilizzo di tipi diversi e non effettua conversioni di tipo automatici (cast) come avviene di solito.

Una SENDMAIL senza i parametri opzionali (dati) si riduce ad un semplice meccanismo di sincronizzazione tra task. 