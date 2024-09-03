---
sidebar_position: 7
---

# FOR-NEXT

## Sintassi

  ```
FOR indice, inizio, fine [, step] 
    istruzione
    istruzione
    ...	
NEXT
  ```

## Parametri
|Parametro     | Descrizione                                                              |                
|--------------|--------------------------------------------------------------------------|
| **indice**   | variabile numerica o timer                                               | 
| **inizio**   | costante o variabile numerica o timer. Valore iniziale                   |
| **fine**     | costante o variabile numerica o timer. Valore finale                     |    
| **step**     | costante o variabile numerica o timer. Passo di incremento o decremento  |    

## Descrizione
Ripete ciclicamente l'esecuzione delle istruzioni racchiuse tra l'istruzione FOR e l'istruzione NEXT.

Durante il primo ciclo la variabile **indice** viene inizializzata al valore della variabile **inizio**. Al secondo ciclo la variabile **indice** avrà valore uguale a (**inizio+step**), e così via finché la variabile **indice** non diventa maggiore, (o minore nel caso di valore negativo della variabile **step**), della variabile **fine**. Se la variabile **step** è omessa, viene assunto un valore di default pari a +1.

Le istruzioni racchiuse tra FOR e NEXT possono modificare il numero delle ripetizioni modificando indice.

Quando le ripetizioni sono terminate viene eseguita l'istruzione successiva a NEXT.

### Esempio

```c {5,7,14,16} showLineNumbers
Function Loop
local i As integer
local vettore[10] as integer

    For i,1,10
        Setval	i, vettore[i]	;// riempie gli elementi del vettore con i numeri 1,2, .... 10
    Next
Fret

Function loop2
local j As integer
local vettore[10] as integer

    For	j,1,10,2
	    vettore[j] = 27	;// inserisce il valore 27 nei seguenti elementi del vettore: 1,3,5,7,9
    Next
Fret
```
