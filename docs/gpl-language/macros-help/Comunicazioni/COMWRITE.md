---
sidebar_position: 6
---

# COMWRITE

## Sintassi

  ```
  COMWRITE numeroCOM, buffer, dascrivere
  ```

## Parametri
|Parametro              | Descrizione                                                                                                                |                
|-----------------------|----------------------------------------------------------------------------------------------------------------------------|
| **numeroCOM**         | costante o variabile numerica. Numero della porta seriale. I valori che possono essere assegnati sono **COM1** o **COM2**. |         
| **buffer**            | vettore di char o di byte. È il vettore contenente i dati da scrivere                                                      |         
| **dascrivere**        | numero di caratteri da scrivere                                                                                            |         

## Descrizione
L'istruzione scrive i caratteri presenti nella variabile **buffer** sulla linea seriale **numeroCOM**. Nel parametro **dascrivere** sarà specificato il numero di caratteri effettivamente da scrivere.