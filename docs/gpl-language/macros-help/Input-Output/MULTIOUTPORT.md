---
sidebar_position: 4
---

# MULTIOUTPORT 

## Sintassi

  ```
 	MULTIOUTPORT 	valore, output8_1[,...,output8_4]
  ```

## Parametri
|Parametro                | Descrizione                                                 |                
|-------------------------|-------------------------------------------------------------|     
| **valore**              | numero o variabile integer da scrivere nei output8          |
| **output8_1**           | riceve i bit da 0 a 7                                       |               
| **output8_2**           | riceve i bit da 8 a 15                                      |               
| **output8_3**           | riceve i bit da 16 a 23                                     |               
| **output8_4**           | riceve i bit da 24 a 31                                     |          

## Descrizione
Scrive **valore** in quattro output8 contemporaneamente. La scrittura dei output8 indicati avviene in maniera atomica, questo garantisce che la scrittura sia eseguita all’interno dello stesso real-time. 

Se **output8_2**, **output8_3**, **output8_4** non sono specificati, il relativo byte ha valore 0.


