---
sidebar_position: 4
---

# DEFMSG

## Sintassi

  ```
DEFMSG etichetta [, prefissolingua1], "stringamessaggio1" , ... [, prefissolinguaN, "stringamessaggioN"]

  ```

## Parametri
|Parametro             | Descrizione                                                                                       |                
|----------------------|---------------------------------------------------------------------------------------------------|
| **etichetta**        | 	Nome mnemonico del messaggio da visualizzare                                                     |
| **prefissolingua**   | 	costante predefinita. Lingua in cui è scritto il messaggio.                                      |
| **stringamessaggio** | 	messaggio da visualizzare. Deve essere scritto tra doppi apici ("")                              |

## Descrizione
Assegna una **etichetta** ad un messaggio. L'istruzione DEFMSG deve essere dichiarata prima della implementazione delle funzioni. La definizione del messaggio può essere utilizzata solo all'interno del gruppo in cui è dichiarata. È possibile inserire messaggi in lingue diverse utilizzando la costante predefinita **prefissolingua** (per l’elenco dei prefissi di lingua vedi capitolo "[Importazione messaggi](Importazione-messaggi.md)"]). In questo caso una istruzione MESSAGE visualizza il messaggio nella lingua corrispondente a quella correntemente in uso per Albatros. Un messaggio a cui non è associato un prefisso viene utilizzato quando la lingua correntemente in uso non corrisponde ad alcuno dei prefissi esistenti.
Le etichette delle varie lingue vanno scritte o tutte sulla stessa riga oppure su più righe andando a capo utilizzando il carattere "_" preceduto da uno spazio. 

L'istruzione DEFMSG può essere passata come parametro ad una funzione. In questo modo la funzione che la riceve può utilizzarla come uno dei tre argomenti di ERROR e MESSAGE. (Vedi esempio 2).

Il testo tra doppi apici (**stringamessaggioN**) può anche contenere riferimenti a valori da inserire al suo interno all’esecuzione delle istruzioni che usano etichette definite con DEFMSG.

Vedere anche le istruzioni [MESSAGE](MESSAGE.md), [DELMESSAGE](DELMESSAGE.md), [ERROR](ERROR.md) e [DELERROR](DELERROR.md).

### Esempio 1
  ```c {3,10,11} showLineNumbers
;// assegnazione ad una etichetta di una stringa di messaggio
;// senza selezione lingua
DEFMSG	MSG_GRU_1	"Messaggio gruppo 1"

;// utilizzo della definizione
MESSAGE	MSG_GRU_1	;// visualizza: "Messaggio gruppo 1"

;// assegnamento ad una etichetta di una stringa di messaggio 
;//  con selezione lingua
DEFMSG	MSG_GRU_1	ITA	"Messaggio gruppo 1"
		              ENG	"Message group 1"

;// utilizzo della definizione quando la lingua 
;// di Albatros È ENG
MESSAGE	MSG_GRU_1	;// visualizza: "Message group 1"
 ```

### Esempio 2
  ```c {2,9} showLineNumbers
;// In un gruppo: 
DEFMSG MSG_TEST "Errore di esecuzione"

FUNCTION ChiamaTest
    Test MSG_TEST 
FRET

;//  In una libreria: 
DEFMSG MSG_BASE  "Segnalazione di errore: $1"
  ...
FUNCTION Test Public
    PARAM codice AS integer
    ERROR MSG_BASE NOPLACE NOSTORE codice
FRET
;//  L'errore di ciclo visualizzato è: Segnalazione di errore: Errore di esecuzione 
 ```
 
