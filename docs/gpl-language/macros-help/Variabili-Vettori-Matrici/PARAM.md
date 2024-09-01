---
sidebar_position: 7
---

# PARAM

## Sintassi

  ```
PARAM [BYREF] nomevar [RANGE:[min]..[max]] AS tipo_singolo [ = default_val]
PARAM vettore[n_elementi] AS tipo
PARAM matrice[n_righe] AS tipo, tipo, tipo, ... 
PARAM matrice[n_righe] AS tipo:alias, tipo:alias, tipo:alias, ...
PARAM matrice[n_righe][n_colonne] AS tipo
PARAM mat3D[n_piani][n_righe] AS tipo:alias, tipo:alias, ...
PARAM mat3D[n_piani][n_righe][n_colonne] AS tipo
  ```

## Parametri
|Parametro                | Descrizione                                                                              |                
|-------------------------|------------------------------------------------------------------------------------------|
| **nomevar**             | nome variabile semplice                                                                  |
| **vettore**             | nome variabile di tipo vettore                                                           |
| **matrice**             | nome variabile di tipo matrice                                                           |
| **mat3D**               | nome variabile di tipo matrice tridimensionale                                           |
| **[n_elementi]**        |	costante integer (argomento obbligatorio). Numero di elementi del vettore                |                
| **[n_piani]**           |	costante integer (argomento obbligatorio). Numero di piani della matrice tridimensionale |                
| **[n_righe]**           |	costante integer (argomento obbligatorio). Numero di righe della matrice                 |                
| **[n_colonne]**         |	costante integer (argomento obbligatorio). Numero di colonne della matrice omogenea      |                
| **tipo_singolo**        |	boolean, char, byte, integer, double, string, string[max_len], timer                     |                
| **tipo**                |	boolean, char, byte, integer, double, string, string[max_len]                            |                
| **nomecol1...nomecolN** |	nome assegnato alla colonna                                                              |                
| **init_val1, …**        |	valori di inizializzazione del vettore o della matrice.                                  |                

## Descrizione
I parametri si utilizzano come le variabili locali ma vengono inizializzati da chi chiama la funzione. 

La sintassi per la dichiarazione dei parametri è molto simile a quella usata per le variabili locali (vedi [LOCAL](LOCAL.md)). 

I parametri vengono passati per valore o per riferimento in funzione del loro tipo, in alcuni casi è possibile passare per riferimento una variabile che normalmente sarebbe passata per copia, aggiungendo l'istruzione **BYREF** prima del nome del parametro. Vedere “Funzioni parametriche”.

Vanno dichiarati prima di ogni altra istruzione.

Per ulteriori informazioni vedere [Parametri con RANGE](Parametri-con-RANGE.md) e [Parametri con valore di default](Parametri-con-valore-di-default.md).
