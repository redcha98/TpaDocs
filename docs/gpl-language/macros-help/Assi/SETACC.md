---
sidebar_position: 1
---

# SETACC

## Sintassi

  ```
 SETACC asse, [valore] 
  ```

## Parametri
|Parametro         | Descrizione                                                       |                
|------------------|-------------------------------------------------------------------|
| **asse**         | nome di dispositivo tipo asse                                     |         
| **valore**       | costante o variabile integer o double. Tempo di accelerazione     |         

## Descrizione
Assegna all'**asse** il tempo di accelerazione identificato da **valore**. Il tempo di accelerazione viene espresso in millisecondi.

Se **valore** è omesso, viene assunto il parametro di configurazione. Se l'istruzione viene posta tra due istruzioni MOVABS o MOVINC viene eseguita la prima istruzione di movimento utilizzando il parametro precedentemente impostato di accelerazione. La seconda istruzione, invece, viene eseguita applicando il nuovo parametro di accelerazione. L'istruzione SETACC ha effetto solo per i movimenti successivi alla sua esecuzione.

Se il **valore** specificato è più piccolo di quello di configurazione viene preso quest'ultimo. 

Vedere anche [SETDEC](SETDEC.md), [SETACCI](SETACCI.md) e [SETDECI](SETDECI.md).

