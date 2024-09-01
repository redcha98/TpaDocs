---
sidebar_position: 19
---

# TYPEOF

## Sintassi

  ```
TYPEOF nome, risultato
  ```

## Parametri
|Parametro          | Descrizione                                                                          |                
|-------------------|--------------------------------------------------------------------------------------|
| **nome**          | dispositivo, costante, nomefunzione, variabile, vettore, matrice o riga di matrice.  |         
| **risultato**     | variabile integer. Tipo del primo argomento                                          |              

## Descrizione
Ritorna nella variabile **risultato** il tipo dell'argomento **nome**.

Di seguito i possibili valori:

|Tipologia                      | Valore   | 
|-------------------------------|----------|
| Input digitale                | 1        |
| Output digitale               | 2        |
| Input digitale 8 bit          | 12       |
| Output digitale 8 bit         | 13       |
| Input digitale 16 bit         | 7        |
| Output digitale 16 bit        | 8        |
| Input digitale 32 bit         | 9        |
| Output digitale 32 bit        | 10       |
| Input digitale 64 bit         | 14       |
| Output digitale 64 bit        | 15       |
| Input analogico               | 3        |
| Output analogico              | 4        |
| Asse                          | 5        |
| Encoder                       | 6        |
| Funzione                      | 11       |
| Array                         | 35       |
| Riga di Matrice               | 37       |
| Matrice                       | 38       |
| Char (8 bit con segno)        | 64       |
| Integer (64 bit con segno)    | 65       |
| Byte (8 bit senza segno)      | 66       |
| Double                        | 67       |
| String                        | 68       |
