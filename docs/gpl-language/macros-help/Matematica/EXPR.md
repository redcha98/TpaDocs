---
sidebar_position: 10
---

# EXPR

## Sintassi

  ```
[EXPR] variabile = espressione
[EXPR] var1 var2 … = nomefunzione ( parametri )
  ```

## Parametri
|Parametro                   | Descrizione                                                 |                
|----------------------------|-------------------------------------------------------------|
| **variabile, var1, var2**  | nome di dispositivo o variabile numerica, boolean o timer   |   
| **espressione**            | insieme di operatori e operandi                             |         
| **nomefunzione**           | nome funzione che restituisce una tupla                     |   
| **parametri**              | parametri della funzione                                    |         

## Descrizione
Questa istruzione permette di calcolare delle espressioni matematiche. Gli operatori possono essere costanti, nomi di dispositivi o variabili. La sintassi dell'istruzione impone che tra ogni operatore e ogni operando vi debba essere una spaziatura.
Se gli operandi dell'espressione non sono tutti dello stesso tipo, viene effettuata una conversione automatica e il tipo del risultato dell'operazione è lo stesso di quello maggiore tra i due in base alla seguente regola:
·	char < integer
·	char o integer < double. 

Risolta l'**espressione** il risultato viene convertito al tipo **variabile**. 

Gli operatori ammessi, raggruppati per livelli di precedenza, sono i seguenti:

|Operatore        | Descrizione                                                 |                          
|-----------------|-------------------------------------------------------------| 
| ( )	   	   	    | Parentesi                                                   |
| -	   	   	      | Operatore di cambio segno                                   |
| ABS	   	   	    | Valore assoluto dell'operando                               |
| ROUND	   	      | Arrotondamento sull'unità                                   |
| TRUNC	   	      | Troncamento ad intero il valore                             |
| LOG	   	   	    | Logaritmo naturale                                          |
| LOGDEC	   	   	| Logaritmo in base 10                                        |
| EXP	   	   	    | Esponenziale                                                |
| SRQ	   	   	    | Operazione di radice quadrata                               |
| SIN	   	   	    | Operazione di seno. L'operando è espresso in gradi con eventuale parte frazionaria centesimale (es.: 30° 15" = 30,25.)        |
| COS	   	   	    | Operazione di coseno. L'operando è espresso in gradi con eventuale parte frazionaria centesimale (es.: 30° 15" = 30,25.)      |
| TAN	  	   	    | Operazione di tangente. L'argomento è espresso in gradi                                                                       |
| ARCSIN	   	   	| Operazione di arcoseno. Il risultato è espresso in gradi e il suo valore è dato nell'intervallo -90°÷+90°                     |
| ARCCOS	   	   	| Operazione di arcocoseno. Il risultato è espresso in gradi e il suo valore è dato nell'intervallo 0°÷180°                     |
| ARCTAN	   	   	| Esegue una operazione di arcotangente a un argomento. Vedere ARCTAN                                                           |
| ARCTAN2   	   	| Esegue una operazione di arcotangente a due argomenti. Gli argomenti devono essere tra parentesi. Vedere ARCTAN               |
| RANDOM   	   		| Genera un numero pseudo casuale                                                                                               |
| MIN	   	   	  	| Restituisce il valore minore tra gli argomenti, almeno due, racchiusi tra parentesi.       |
| MAX		   	  	  | Restituisce il valore maggiore tra gli argomenti, almeno due, racchiusi tra parentesi.     |
| ~	   	   	  	  | Operatore NOT bit a bit (o complemento a 1)                                                |
| !		   	  	    | Operatore NOT logico (il risultato sarà di tipo BOOLEAN)                                   |
| LINKED	   	  	| Restituisce 1 se l’argomento è un dispositivo collegato in virtuale-fisico                 |
| UNLINKED	   	  | Restituisce 0 se l’argomento è un dispositivo collegato in virtuale-fisico                 |
| EXISTS	   	  	| Restituisce 1 se l’argomento, di tipo STRING, è il nome di un gruppo esistente             |
| EXISTSMACHINE	  | Restituisce 1 se l’argomento, di tipo STRING, è il nome di una macchina dell’impianto      |
| ˆ	   	   	  	  | Operatore di elevamento a potenza                                                          |
| *	   	   	  	  | Moltiplicazione                                                                            |
| /	   	   	  	  | Divisione                                                                                  |
| %	   	   	  	  | Resto della divisione (modulo)                                                             |
| +	   	   	    	| Somma                                                                                      |
| -	   	   	    	| Sottrazione                                                                                |
| \<\<	   	    	| Scorrimento a sinistra dei bit                                                             |
| \>\>	   	    	| Scorrimento a destra dei bit                                                               |
| &	   	   	  	  | Operatore AND bit a bit (gli operandi sono convertiti in INTGEER)                          |
| |	   	   	  	  | Operatore OR bit a bit                                                                     |
| XOR	   	   	  	| Operatore XOR bit a bit                                                                    |
| \<,\>,=,\<=,\>=,\<\>,!=	   | Operatori relazionali                                                           |
| &&	 	   	  	  | Operatore AND logico (gli operandi sono convertiti in BOOLEAN)                             |
| \|\|  	   	  	| Operatore OR logico (gli operandi sono convertiti in BOOLEAN)                              |

### Esempio

```c {2,12} showLineNumbers
;// calcolo della distanza tra due punti
EXPR dist = SQR ( ( Xb - Xa ) ^ 2 + ( Yb - Ya ) ^ 2 ) 

;// conversione di dati in una EXPR
local op1 as double
local op2 as integer
local op3 as double
local risultato as integer
setval 900,op1
setval 100,op2
setval 500.0,op3 
risultato = ( op1 + op2 ) / op3
;// prima viene risolta l'espressione in double 
;// poi viene eseguita una conversione in integer
;// come il tipo di dato risultato
```