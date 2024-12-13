---
sidebar_position: 5
---

# LOCAL

## Sintassi

  ```
LOCAL nomevar AS tipo_singolo  [ = init_single_val]
LOCAL vettore[n_elementi] AS tipo [ = init_val1, …]
LOCAL matrice[n_righe] AS tipo, tipo, tipo, ... [ = init_val1, …]
LOCAL matrice[n_righe] AS tipo:nomecol1, tipo:nomecol2, tipo:nomecol3, ... [ = init_val1, …]
LOCAL matrice[n_righe][n_colonne] AS tipo [ = init_val1, …]
LOCAL mat3D[n_piani][n_righe] AS tipo:nomecol1, tipo:nomecol2, ... [ = init_val1, …]
LOCAL mat3D[n_piani][n_righe][n_colonne] AS tipo [ = init_val1, …]
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
Dichiarazione di una variabile locale. Prima di questa istruzione, all’interno della definizione di una funzione, può comparire solo l'istruzione PARAM che definisce i parametri della funzione.

In caso di **matrice**, se tutte le colonne sono dello stesso tipo, la matrice è detta omogenea. In questo caso la definizione della matrice si semplifica, indicando solo il **tipo** comune e il numero di **colonne** presenti.

Le matrici possono essere tridimensionali, ovvero avere anche un **indice di piano**, che deve precedere l’**indice di riga**.

È possibile inizializzare ogni elemento a un valore specifico aggiungendo in coda alla definizione il carattere ‘=’ e l’elenco dei valori. Se non sono presenti valori di inizializzazione, la variabile è posta a 0 (o “” in caso di string). Nel caso di variabile semplice è possibile inserire una espressione che verrà valutata a runtime (quindi può contenere riferimenti ad altre variabili e chiamate a funzione) mentre nel caso di vettori e matrici ogni valore di inizializzazione può essere un’espressione ma deve essere racchiusa tra una coppia di parentesi tonde e l’espressione deve essere calcolabile da compilatore (quindi, contenere solo operazioni tra valori e costanti).

Per informazioni basilari sulle variabili locali vedere [Le variabili locali](/docs/ToDo.md).
