---
sidebar_position: 14
---

# ALERT

## Sintassi

  ```
ALERT messaggio [, categoria [, log [, arg1, ..., arg5]]]
  ```

## Parametri
|Parametro            | Descrizione                                                                                                                   |                
|---------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **messaggio**       | 	Costante integer o DEFMSG o param integer o messaggio implicito                                                             |
| **categoria**       | 	costante o variabile integer, char o byte. Assegna una categoria numerica all’allarme.                                      |
| **arg1, ..., arg5** | 	Costante, dispositivo, stringa, variabile, vettore, matrice, DEFMSG                                                         |

## Descrizione
Genera un allarme di tipo avviso. L'avviso è identificato dal parametro **messaggio**. Il parametro **messaggio** può identificare un avviso di modulo (quindi un valore numerico intero) o di gruppo (in questo caso si usa una DEFMSG).

In alternativa all’identificatore numerico, si tratta di messaggio implicito quando il testo che si vuole inviare viene inserito direttamente come primo argomento, tra doppi apici e il carattere ‘$’ davanti. In questo caso eventuali argomenti non vanno scritti separatamente ma all’interno del testo, ognuno racchiuso tra i caratteri ‘\{‘ e ‘\}’.

L’avviso viene inviato al PC supervisore e visualizzato sulla barra dei messaggi di Albatros. 

Il parametro **categoria** viene utilizzato per raggruppare errori della stessa categoria e poterli smistare in caselle differenti in interfaccia grafica. Albatros utilizza questo identificativo per gestire i messaggi in code separate. Per ogni **categoria** viene creata una coda. Se non è specificato **categoria**, o se si utilizza la costante predefinita NOPLACE, il messaggio va nella coda di default (**categoria**=0). Il range di valori impostabili è compreso tra 0 (NOPLACE) e 1023.  

I parametri opzionali **arg1, ..., arg5** permettono di definire dei messaggi parametrici. Nella stringa di definizione del messaggio andranno inseriti dei marcatori che verranno sostituiti, quando viene generato il testo, con il valore o il nome del dispositivo o della variabile passata come parametro. I marcatori da inserire nella stringa sono:
·	$1, ... $5	sostituiti con il **nome** del dispositivo o della variabile ($1 corrisponde ad arg1 etc.) 
·	$(1), ..., $(5)	sostituiti con il **valore** del dispositivo o della variabile

I tipi di dati ammessi per i parametri arg1, ..., arg5 sono:
·	CHAR
·	BYTE
·	INTEGER
·	DOUBLE
·	TIMER
·	BOOLEAN
·	numero di messaggio (o etichetta di DEFMSG)
·	dispositivo
·	variabile GPL
·	parametro di funzione. È possibile utilizzare come parametro di funzione anche l'etichetta definita con una istruzione [DEFMSG](DEFMSG.md)
Per le variabili locali è possibile decodificare solamente il valore e non il nome.

Non possono essere utilizzati come parametri **valore** le matrici ed i vettori (i singoli elementi di vettore o matrice sono ammessi). Per le variabili locali è possibile decodificare solamente il **valore** e non il **nome**.

Vedere anche le istruzioni [DELALERT](DELALERT.md) e [CLEARALERTS](CLEARALERTS.md).
