---
sidebar_position: 19
---

# HELICINC

## Sintassi

  ```
HELICINC [etichetta], asse1, quota1, asse2, quota2, asse3, quota3, senso, ±raggio[,angolo [, numgiri [, asse4, quota4 [, ..., asse6, quota6]]]] 
  ```

## Parametri
|Parametro                        | Descrizione                                                                                                                                      |                
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **etichetta**                   | costante o variabile integer. Etichetta che identifica un blocco di spostamento                                                                  |
| **asse1...asse3[...asse6]**     | nomi di dispositivi tipo asse                                                                                                                    |
| **quota1...quota3[...quota6]**  | costante o variabile double. Rappresenta la quota di spostamento incrementale                                                                    |     
| **senso**                       | costante o variabile integer. Specifica il tipo di rotazione. <br/> Sono ammessi i valori:  <br/> -**CW** oraria  <br/> -**CCW** antioraria      | 
| **raggio**                 	    | costante o variabile double. Rappresenta il valore del raggio del cerchio                                                                        |     
| **angolo**                 	    | costante o variabile double. Rappresenta l'angolo di partenza                                                                                    |      
| **numgiri**                     | costante o variabile double. Numero di giri   


## Descrizione
Esegue un movimento elicoidale per il canale di interpolazione degli assi **asse1, asse2, …** Il movimento si estende dal punto finale dell’ultimo comando di spostamento al punto ottenuto incrementando tali quote con valori **quota1, quota2, …**. In particolare, gli assi **asse1 e asse2** eseguono un movimento ad arco di cerchio (con le stesse regole adottate da [CIRCABS](CIRCABS.md)/[CIRCINC](CIRCINC.md) per gli argomenti **senso, ±raggio e angolo**) mentre l'**asse3** (ed eventualmente **asse4, asse5 e asse6**) eseguono un movimento lineare alle posizioni finali indicate da **quota3, quota4, …**.

Il movimento elicoidale può essere sviluppato su più giri indicati dall'argomento **numgiri**. Il parametro opzionale **etichetta** è utilizzato per identificare ciascun movimento inserito in traiettoria.

È possibile leggere l’**etichetta** assegnata al movimento in esecuzione con la proprietà asse _LabelInterp_.

Per poter utilizzare la macro è necessario prima aver aperto un canale di interpolazione con la macro [OPENINTERP](OPENINTERP.md).  