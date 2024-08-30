---
sidebar_position: 9
---

# MULTIWAITSTATE 

## Sintassi

  ```
  MULTIWAITSTATE maschera, bool1[, ..., bool32], stato [, timeout [, GOTO etichetta]]
  MULTIWAITSTATE maschera, bool1[, ..., bool32], stato [, timeout [, CALL sottoprogramma]]
  MULTIWAITSTATE maschera, bool1[, ..., bool32], stato [, timeout [, nomefunzione]]
  ```

## Parametri
|Parametro                | Descrizione                                                                           |                 
|-------------------------|---------------------------------------------------------------------------------------|     
| **maschera**            | maschera dei boolean interessati - costante o variabile char, byte o integer          |      
| **bool1[,...bool32]**   | nome variabile booleana                                                               |
| **stato**               | costante predefinita. I valori ammessi sono: <br/>- **ON** stato input attivo <br/>- **OFF** stato input disattivo |
| **timeout**             | costante o variabile. È il tempo limite di attesa                                     |
| **etichetta**           | etichetta di salto (GOTO)                                                             | 
| **nomesottoprogramma**  | etichetta di sottoprogramma (CALL)                                                    |
| **nomefunzione**        | nome della funzione                                                                   |              

## Descrizione
Attende finché le variabili booleane specificate da **bool1...bool32** si trovino nello stato indicato dal parametro **stato** (ON/OFF).

Di tutte le variabili booleane verifica quelle il cui bit nell'argomento **maschera** è abilitato (ON). Il bit 0 dell'argomento **maschera** (quello di peso più basso) corrisponde al bit definito da **bool1**, il bit 1 corrisponde al bit definito da **bool2** e così fino al bit definito dal **bool32**. 

Il parametro **timeout** permette di impostare un timeout diverso da quello di default che è di un secondo. 

Quando è presente **etichetta** o **sottoprogramma** o **nomefunzione**, allo scadere del timeout il programma salta a **etichetta** o chiama **sottoprogramma** o **nomefunzione**.




