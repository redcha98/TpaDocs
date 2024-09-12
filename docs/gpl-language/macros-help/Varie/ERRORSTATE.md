---
sidebar_position: 11
---

# ERRORSTATE

## Sintassi

  ```
ERRORSTATE messaggio [, categoria [, log [, arg1, ..., arg5]]]
  ```

## Parametri
|Parametro            | Descrizione                                                                                                                   |                
|---------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **messaggio**       | 	Costante integer o DEFMSG o param integer o messaggio implicito                                                             |
| **categoria**       | 	costante o variabile integer, char o byte. Assegna una categoria numerica all’allarme.                                      |
| **log**             | 	costante numerica predefinita o variabile integer. <br/> Può assumere i seguenti valori: <br/>-**STORE** allarme salvato su file <br/>-**NOSTORE** allarme non salvato su file                                                                                                                           |
| **arg1, ..., arg5** | 	Costante, dispositivo, stringa, variabile, vettore, matrice, DEFMSG                                                         |

## Descrizione
Genera un errore di ciclo. L'errore è identificato dal parametro **messaggio**. Il parametro **messaggio** può identificare un errore di ciclo di modulo (quindi un valore numerico intero) o di gruppo (in questo caso si usa una [DEFMSG](DEFMSG.md)).

In alternativa all’identificatore numerico, si tratta di messaggio implicito quando il testo che si deve inviare viene inserito direttamente come primo argomento, tra doppi apici e il carattere ‘$’ davanti. In questo caso eventuali argomenti non vanno scritti separatamente ma all’interno del testo, ognuno racchiuso tra i caratteri ‘\{‘ e ‘\}’.

L'errore di ciclo viene inviato al PC supervisore e visualizzato sulla barra degli errori di Albatros. 

Il parametro **categoria** viene utilizzato per raggruppare errori della stessa categoria e poterli smistare in caselle differenti in interfaccia grafica. Albatros utilizza questo identificativo per gestire gli errori di ciclo in code separate. Per ogni categoria viene creata una coda. Se non è specificato **categoria**, o se si utilizza la costante predefinita **NOPLACE**, l'errore di ciclo va nella coda di default (**categoria**=0). Il range di valori impostabili è compreso tra 0 (**NOPLACE**) e 1023.  

L'impostazione del parametro **log** a **STORE** comporta la registrazione dell'errore di ciclo nel file di report errori del mese corrente. 

I parametri opzionali **arg1, ..., arg5** permettono di definire dei messaggi di errore parametrici. Nella stringa di definizione del messaggio di errore andranno inseriti dei marcatori che verranno sostituiti, quando viene generato l'errore, con il valore o il nome del dispositivo o della variabile passata come parametro. I marcatori da inserire nella stringa sono:
·	$1, ... $5	sostituiti con il **nome** del dispositivo o della variabile ($1 corrisponde ad arg1 etc.) 
·	$(1), ..., $(5)	sostituiti con il **valore** del dispositivo o della variabile

I tipi di dati ammessi per i parametri **arg1, ..., arg5** sono:
·	CHAR
·	BYTE
·	INTEGER
·	DOUBLE
·	TIMER
·	BOOLEAN
·	numero di messaggio (o etichetta di [DEFMSG](DEFMSG.md))
·	dispositivo
·	variabile GPL
·	parametro di funzione. È possibile utilizzare come parametro di funzione anche l'etichetta definita con una istruzione [DEFMSG](DEFMSG.md)

Per le variabili locali è possibile decodificare solamente il valore e non il nome.

Per cancellare un errore di ciclo si utilizza l'istruzione [DELERRORSTATE](DELERRORSTATE.md) con gli stessi parametri arg1, ...arg5 o solo alcuni parametri iniziali, omettendo i successivi.

Questa istruzione serve per **allarmi gestiti come stati**: l'errore viene considerato attivo o non attivo. Se attivo ogni ulteriore invio dello stesso errore di ciclo (tramite istruzione ERRORSTATE) viene ignorato.

Vedere anche le istruzioni [CLEARERRORS](CLEARERRORS.md) e [DELERRORSTATE](DELERRORSTATE.md).
