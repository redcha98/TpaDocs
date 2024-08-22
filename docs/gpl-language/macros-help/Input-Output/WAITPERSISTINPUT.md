---
sidebar_position: 19
---

# WAITPERSISTINPUT 

## Sintassi

  ```
  WAITPERSISTINPUT nomeinput, stato, timepersist [, timeout [, GOTO etichetta]]
  WAITPERSISTINPUT nomeinput, stato, timepersist [, timeout [, CALL sottoprogramma]]
  WAITPERSISTINPUT nomeinput, stato, timepersist [, timeout [, nomefunzione]]
  ```

## Parametri
|Parametro                | Descrizione                                                                           |                 
|-------------------------|---------------------------------------------------------------------------------------|     
| **nomeinput**           | nome di dispositivo tipo ingresso digitale                                            | 
| **stato**               | costante predefinita. I valori ammessi sono: <br/>- **ON** stato input attivo <br/>- **OFF** stato input disattivo |
| **timeout**             | costante o variabile. È il tempo limite di attesa                                     |
| **etichetta**           | etichetta di salto (GOTO)                                                             | 
| **nomesottoprogramma**  | etichetta di sottoprogramma (CALL)                                                    |
| **nomefunzione**        | nome della funzione                                                                   |              

## Descrizione
Attende che l'ingresso **nomeinput** si trovi nello stato indicato dal parametro **stato** (ON/OFF) e rimanga in quello stato per il tempo specificato in **timepersist**.

Se non sono specificati argomenti opzionali, passati 20 secondi dall'inizio dell'esecuzione dell'istruzione, viene automaticamente generato l'errore di ciclo: "Input digitale **nomeinput** in attesa di **stato**".

Se degli argomenti opzionali è presente solo **timeout**, la visualizzazione sopracitata viene generata allo scadere dello stesso.

Se la condizione si verifica dopo che il **timeout** è scaduto, viene automaticamente cancellato l'errore di ciclo inviato in precedenza per quel task.

Quando è presente **etichetta** o **sottoprogramma** o **nomefunzione**, allo scadere del timeout il programma salta a **etichetta** o chiama **sottoprogramma** o **nomefunzione** senza generare nessuna visualizzazione automatica.

### Nota
Al fine di evitare una situazione di attesa di un segnale d'ingresso, durante un ciclo di lavoro, si consiglia di impostare un timeout inferiore al tempo di default (20 secondi).