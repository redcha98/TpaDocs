---
sidebar_position: 9
---

# SORT

## Sintassi

  ```
SORT matrice, colonna [, ordine], limite_min, limite_max
SORT vettore [,ordine], limite_min, limite_max
  ```

## Parametri
|Parametro           | Descrizione                                                      |                
|--------------------|------------------------------------------------------------------|
| **matrice**        | nome della matrice                                               |               
| **vettore**        | nome del vettore                                                 |               
| **colonna**        | costante o variabile integer. Numero di colonna della matrice    |  
| **ordine**         | costante predefinita. Indica la modalità di ordinamento. <br/> I valori ammessi sono: <br/>-**UP** ordinamento crescente <br/>-**DOWN** ordinamento decrescente |  
| **limite_min**     | costante o variabile integer. Indice minimo del vettore o della matrice da cui iniziare l'ordinamento                                                           |  
| **limite_max**     | costante o variabile integer. Indice massimo del vettore o della matrice dove terminare l'ordinamento                                                           |  

## Descrizione
Effettua un ordinamento dei valori presenti all'interno di un **vettore** o di una **matrice**, con senso definito dalla costante **ordine**.

Nel caso di una matrice l'ordinamento delle righe è dettato dalla disposizione crescente (**UP**) o decrescente (**DOWN**) dei valori contenuti nella **colonna** selezionata.

Se l'argomento **ordine** è omesso, viene assunta automaticamente la modalità **UP**.
