---
sidebar_position: 17
---

# WAITSTATE 

## Sintassi

  ```
  WAITSTATE nomebool, stato [, timeout [, GOTO etichetta]]
  WAITSTATE	nomebool, stato [, timeout [, CALL sottoprogramma]]
  WAITSTATE	nomebool, stato [, timeout [, nomefunzione]]
  ```

## Parametri
|Parametro                | Descrizione                                                                           |                 
|-------------------------|---------------------------------------------------------------------------------------|     
| **nomebool**            | nome variabile booleana                                                            |
| **stato**               | costante predefinita. I valori ammessi sono: <br/>- **ON** stato input attivo <br/>- **OFF** stato input disattivo |
| **timeout**             | costante o variabile. È il tempo limite di attesa                                     |
| **etichetta**           | etichetta di salto (GOTO)                                                             | 
| **nomesottoprogramma**  | etichetta di sottoprogramma (CALL)                                                    |
| **nomefunzione**        | nome della funzione                                                                   |              

## Descrizione
Attende finché la variabile booleana **nomebool** non assume lo stato indicato dal parametro **stato** (ON/OFF).

Se degli argomenti opzionali è presente solo **timeout**, l'errore di ciclo "Variabil **nomebool** in attesa di **stato**" viene generato allo scadere del timeout.

Se la condizione si verifica dopo che il timeout è scaduto, viene automaticamente cancellato l'errore di ciclo inviato in precedenza per quel task.

Quando è presente **etichetta** o **sottoprogramma** o **nomefunzione**, allo scadere del timeout il programma salta a **etichetta** o chiama **sottoprogramma** o **nomefunzione** senza generare nessuna visualizzazione automatica.

### Nota
Al fine di evitare una situazione di attesa di una variabile booleana durante un ciclo di lavoro, si consiglia di impostare un timeout.