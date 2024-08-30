---
sidebar_position: 2
---

# FIND

## Sintassi

  ```
FIND matrice, colonna, limite_min, limite_max, valore, variabile
FIND vettore, limite_min, limite_max, valore, variabile
  ```

## Parametri
|Parametro                | Descrizione                                                                                           |                
|-------------------------|-------------------------------------------------------------------------------------------------------|
| **matrice**             | nome della matrice. Matrice in cui eseguire la ricerca                                                |               
| **vettore**             | nome del vettore. Vettore in cui eseguire la ricerca                                                  |               
| **colonna**             | costante o variabile integer. Numero di colonna della matrice in cui eseguire la ricerca              |               
| **limite_min**          | costante o variabile integer. Indice minimo del vettore o della matrice da cui iniziare la ricerca    |               
| **limite_max**          | costante o variabile integer. Indice massimo del vettore o della matrice do-ve terminare la ricerca   |               
| **valore**              | costante o variabile numerica, boolean o timer. Valore da ricercare                                   |               
| **variabile**           | variabile integer. Risultato della ricerca                                                            |               

## Descrizione
Esegue una ricerca sequenziale di un **valore** all'interno di un **vettore** o di una **colonna** della **matrice** e pone l'indice dell'elemento in **variabile**.

Se il **valore** non è stato trovato, **variabile** conterrà il valore -1.
