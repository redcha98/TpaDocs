---
sidebar_position: 1
---

# ENDMAIL

## Sintassi

  ```
ENDMAIL mail
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **mail**                    | costante o variabile di tipo integer. Numero del mailbox (1÷256)                                      |         

## Descrizione
Segnala la fine dell'esecuzione di un comando associato ad un messaggio prelevato dalla casella postale **mail**.

Il task che aveva inviato il messaggio (con l'istruzione SENDMAIL) ed era rimasto in attesa dell'esecuzione del comando (argomento di attesa WAITACK) può così proseguire la propria esecuzione. Questa istruzione _ha effetto solo se eseguita dal task_ che ha precedentemente ricevuto il messaggio (con l'istruzione WAITMAIL o TESTMAIL).

Vedere anche [SENDMAIL](./SENDMAIL.md), [WAITMAIL](./WAITMAIL.md) e [TESTMAIL](../Gestione-di-flusso/TESTMAIL.md).
