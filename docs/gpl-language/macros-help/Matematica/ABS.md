---
sidebar_position: 1
---

# ABS

## Sintassi

  ```
 ABS operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Ricava il valore assoluto di **operando** e lo pone in **risultato**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](Conversione-dati.md).

### Esempio

```c {2} showLineNumbers
SetVal	-10,op	;// assegna -10 alla variabile op
Abs     op,var	;// Il valore posto nella variabile var sarà 10
```