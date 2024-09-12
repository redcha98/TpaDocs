---
sidebar_position: 6
---

# DELERROR

## Sintassi

  ```
DELERROR messaggio [, categoria [, log [, arg1, ..., arg5]]]
  ```

## Parametri
|Parametro            | Descrizione                                                                                                                   |                
|---------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **messaggio**       | 	Costante integer o DEFMSG o param integer o messaggio implicito                                                             |
| **categoria**       | 	costante o variabile integer, char o byte. Assegna una categoria numerica all’allarme.                                      |
| **log**             | 	costante numerica predefinita o variabile integer. <br/> Può assumere i seguenti valori: <br/>-**STORE** allarme salvato su file <br/>-**NOSTORE** allarme non salvato su file                                                                                                                           |
| **arg1, ..., arg5** | 	Costante, dispositivo, stringa, variabile, vettore, matrice, DEFMSG                                                         |

## Descrizione
Fa eseguire al PC supervisore la cancellazione di un errore di ciclo inviato precedentemente con l'istruzione [ERROR](ERROR.md).

Affinché la cancellazione abbia effetto, tutti i valori impostati nei parametri devono coincidere con quelli utilizzati per generare l'errore. L'impostazione del parametro **log** a **STORE** comporta la registrazione dell'errore di ciclo nel file di report errori del mese corrente.  

Un errore registrato sui file report non viene infatti eliminato dal file, ma solo dalla finestra degli errori. Sul file viene aggiunta una nuova registrazione della cancellazione dell'errore. 

Il parametro **categoria** viene utilizzato per raggruppare errori della stessa categoria e poterli smistare in caselle differenti in interfaccia grafica. Se non serve indicare una casella specifica va assegnata la costante predefinita NOPLACE. Il range di valori impostabili è compreso tra 0 (NOPLACE) e 1023. 
Questa istruzione rimuove errori di ciclo gestiti come segnalazioni, quindi vengono sempre inviate tutte le richieste di cancellazione. 

Vedere anche le istruzioni [ERROR](ERROR.md) e [CLEARERRORS](CLEARERRORS.md).
