---
sidebar_position: 6
---

# ARCTAN

## Sintassi

  ```
 ARCTAN operando1 [, operando2], risultato
  ```

## Parametri
|Parametro                             | Descrizione                                        |                
|--------------------------------------|----------------------------------------------------|
| **operando1...[operando2]**          | costante o variabile o nome di dispositivo         |   
| **risultato**                        | variabile o nome di dispositivo                    |       

## Descrizione
Se **operando2** è omesso, esegue una operazione di arcotangente su **operando1** e pone il valore in **risultato**, in gradi. Se **operando2** è presente, l'angolo considerato sarà quello il cui seno è dato da **operando1** e il cui coseno è dato da **operando2**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](Conversione-dati.md).
