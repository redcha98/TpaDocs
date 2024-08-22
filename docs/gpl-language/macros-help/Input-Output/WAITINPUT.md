---
sidebar_position: 18
---

# WAITINPUT 

## Sintassi

  ```
  WAITINPUT	nomeinput, stato [, timeout [, GOTO etichetta]]
  WAITINPUT	nomeinput, stato [, timeout [, CALL sottoprogramma]]
  WAITINPUT	nomeinput, stato [, timeout [, nomefunzione]]
  ```

## Parametri
|Parametro                | Descrizione                                                                           |                 
|-------------------------|---------------------------------------------------------------------------------------|     
| **nomeinput**           | nome ingresso                                                                         | 
| **stato**               | costante predefinita. I valori ammessi sono: <br/>- **ON** stato input attivo <br/>- **OFF** stato input disattivo |
| **timeout**             | costante o variabile. È il tempo limite di attesa                                     |
| **etichetta**           | etichetta di salto (GOTO)                                                             | 
| **nomesottoprogramma**  | etichetta di sottoprogramma (CALL)                                                    |
| **nomefunzione**        | nome della funzione                                                                   |              

## Descrizione
Attende finché l'ingresso **nomeinput** non assume lo stato indicato dal parametro **stato** (ON/OFF).

Se non sono specificati argomenti opzionali, passati 20 secondi dall'inizio dell'esecuzione dell'istruzione, viene automaticamente generato l'errore di ciclo: "Input digitale **nomeinput** in attesa di **stato**".

Se degli argomenti opzionali è presente solo **timeout**, la visualizzazione sopracitata viene generata allo scadere dello stesso.

Se la condizione si verifica dopo che il **timeout** è scaduto, viene automaticamente cancellato l'errore di ciclo inviato in precedenza per quel task.

Quando è presente **etichetta** o **sottoprogramma** o **nomefunzione**, allo scadere del timeout il programma salta a **etichetta** o chiama **sottoprogramma** o **nomefunzione** senza generare nessuna visualizzazione automatica.

### Nota
Al fine di evitare una situazione di attesa di un segnale d'ingresso, durante un ciclo di lavoro, si consiglia di impostare un timeout inferiore al tempo di default (20 secondi).