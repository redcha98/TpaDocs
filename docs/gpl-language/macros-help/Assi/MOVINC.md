---
sidebar_position: 25
---

# MOVINC

## Sintassi

  ```
MOVINC asse1, valore1 [, asse2, valore2 [, ..., asse6, valore6]]
  ```

## Parametri
|Parametro                     | Descrizione                                                 |                
|------------------------------|-------------------------------------------------------------|
| **asse1...[...asse6]**       | nomi di dispositivi tipo asse                               |
| **valore1...[...valore6]**   | costante o variabile. Valore di spostamento incrementale    |         

## Descrizione
Fa eseguire agli assi **asse1...[...asse6]** un movimento punto-punto a quote relative specificate da **valore1 [,...valore6]**. L'asse non deve essere in errore e non deve essere inserito in un canale di interpolazione. Il movimento dell'asse ha inizio non appena viene eseguita l'istruzione. Se vengono eseguite più istruzioni di movimento in punto-punto (MOVABS o MOVINC) in un medesimo task, queste vengono concatenate raccordando i profili di velocità senza punti di arresto intermedi (ove possibile). Se un secondo task cerca di eseguire delle istruzioni punto-punto (MOVABS o MOVINC) su uno degli assi **asse1...[...asse6]**, questo task rimarrà in attesa che il movimento comandato dal primo task termini.

Per ogni movimento punto-punto, i limiti di velocità, accelerazione e decelerazione sono dati dai valori definiti, rispettivamente, da [SETVEL](SETVEL.md), [SETACC](SETACC.md) e [SETDEC](SETDEC.md) (oppure dai valori di configurazione se queste istruzioni non sono usate).

Un movimento punto-punto può essere interrotto con l'istruzione [STOPMOV](STOPMOV.md) e successivamente ripreso con l'istruzione [STARTMOV](STARTMOV.md). Se, invece, viene usata una istruzione [ENDMOV](ENDMOV.md), il movimento programmato viene cancellato e non può essere più ripreso. In tutti questi casi l’arresto avviene rispettando la decelerazione massima imposta per ciascun tratto. Se viene usata una [NORMAL](NORMAL.md), invece, la decelerazione è l’ultima impostata con [SETDEC](SETDEC.md). Anche in questo caso il movimento viene cancellato. 

Da ultimo, se viene usata un’istruzione [FREE](FREE.md) e [SETPOSITION](SETPOSITION.md), l’arresto è immediato e il movimento programmato non è ripristinabile.


## Esempio

```c {5,6,8} showLineNumbers
;// movimenti punto-punto concatenati su assi X e Y con cambio velocità
Function Main
  setvel	X, 20
  setvel	X, 20
  movinc	X, 100, Y, 200
  movinc	X, 150, Y, 180
  setvel	X, 5
  movinc	X, 80, Y, 100
  waitstill	X, Y
fret
```