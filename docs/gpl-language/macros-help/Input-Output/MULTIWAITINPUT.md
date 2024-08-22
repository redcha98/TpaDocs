---
sidebar_position: 10
---

# MULTIWAITINPUT

## Sintassi

  ```
  MULTIWAITINPUT maschera, input1[, ..., input32], stato [, timeout [, GOTO etichetta]] 
  MULTIWAITINPUT maschera, input1[, ..., input32], stato [, timeout [, CALL nomesottoprogramma]] 
  MULTIWAITINPUT maschera, input1[, ..., input32], stato [, timeout [, nomefunzione]] 
  ```

## Parametri
|Parametro                | Descrizione                                                                                  |                
|-------------------------|----------------------------------------------------------------------------------------------|
| **maschera**            | costante o variabile. Maschera degli input interessati                                       |               
| **input1[,...input32]** | nome ingresso                                                                                |
| **stato**               | costante predefinita. I valori ammessi sono: <br/>- **ON** stato input attivo <br/>- **OFF** stato input disattivo |
| **timeout**             | costante o variabile. È il tempo limite di attesa                                            |
| **etichetta**           | etichetta di salto (GOTO)                                                                    | 
| **nomesottoprogramma**  | etichetta di sottoprogramma (CALL)                                                           |
| **nomefunzione**        | nome della funzione                                                                          |

## Descrizione
Attende finché gli ingressi specificati da **input1...input32** si trovino nello stato indicato dal parametro **stato** (ON/OFF).

Di tutti gli ingressi verifica quelli il cui bit nell'argomento **maschera** è abilitato (ON). Il bit 0 dell'argomento **maschera** (quello di peso più basso) corrisponde al bit definito da **input1**, il bit 1 corrisponde al bit definito da **input2** e così fino al bit definito da **input32**. 

Se non sono specificati argomenti opzionali, passato un secondo dall'inizio dell'esecuzione dell'istruzione (timeout di default), viene automaticamente generato il seguente messaggio parametrizzato: "Wait input ON/OFF". Il nome dell'ingresso segnalato è quello del primo ingresso abilitato che non ha ancora soddisfatto lo stato. Se è presente il parametro **timeout** la visualizzazione descritta sopra viene generata allo scadere del timeout richiesto. Se, una volta scaduto il timeout, si verifica la condizione richiesta, viene automaticamente generato un messaggio parametrizzato per cancellare quello inviato precedentemente.

Quando è presente **etichetta** o **nomesottoprogramma** o **nomefunzione**, allo scadere del timeout il programma salta a **etichetta** o chiama **nomesottoprogramma** o **nomefunzione**.