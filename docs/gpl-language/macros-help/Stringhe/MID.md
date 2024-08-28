---
sidebar_position: 6
---

# MID

## Sintassi

  ```
  MID nomestringasorg, primocar [, numcaratteri], nomestringadest
  ```

## Parametri
|Parametro                 | Descrizione                                                        |                
|--------------------------|--------------------------------------------------------------------|
| **nomestringasorg**      | costante stringa o variabile stringa. Stringa sorgente             |         
| **primocar**             | costante o variabile integer. Numero di caratteri da copiare       |         
| **numcaratteri**         | variabile stringa. Stringa destinazione                            |         
| **nomestringadest**      | costante o variabile integer. Posizione carattere partenza copia   |         

## Descrizione
Estrae dalla stringa identificata da **nomestringasorg** un numero di caratteri identificati da **numcaratteri**, a partire dalla posizione **primocar**.

La sottostringa estratta è posta nella stringa identificata da **nomestringadest**.

Se **numcaratteri** è omesso, viene copiata **nomestringasorg**, a partire dalla posizione **primocar** fino alla fine della stessa. In pratica viene prelevata la parte centrale della stringa sorgente. 

Vedere anche le istruzioni [LEFT](LEFT.md) e [RIGHT](RIGHT.md).
