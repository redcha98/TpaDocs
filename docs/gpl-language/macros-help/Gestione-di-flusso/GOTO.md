---
sidebar_position: 10
---

# GOTO

## Sintassi

  ```
GOTO etichetta	
  ```

## Parametri
|Parametro               | Descrizione                                       |                
|------------------------|---------------------------------------------------|
| **etichetta**          | etichetta definita nel corpo della funzione       |    

## Descrizione
Effettua un salto incondizionato all'etichetta specificata dal parametro **etichetta**.
Un' etichetta viene definita da una parola chiave seguita immediatamente dal carattere ":".
L'etichetta deve trovarsi all'interno del corpo della funzione in cui viene eseguita l'istruzione GOTO.

### Nota
Il corpo di una funzione è compreso tra l'istruzione FUNCTION che dichiara il nome della funzione e l'analoga istruzione che definisce la funzione successiva (oppure dalla fine del file). Da questo si deduce la possibilità di eseguire salti dal corpo principale della funzione ad eventuali sottoprogrammi (vedere istruzioni [CALL](CALL.md) e [RET](RET.md)). Si <u>sconsiglia vivamente</u> questo stile di programmazione essendo fonte di numerosi errori di difficile individuazione.

### Esempio

  ```c {9} showLineNumbers
;// Function che fa lampeggiare un’uscita
;// (ad es. una spia di allarme in macchina)
Function LoopTest
loop:
    SetOut allarme	;// attiva l’uscita
    Delay 1
    ResetOut allarme	;// disattiva l’uscita
    Delay 1
    Goto loop
Fret
 ```
