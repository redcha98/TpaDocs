---
sidebar_position: 7
---

# FRET

## Sintassi

  ```
FRET	[risultati]		
  ```

## Parametri
|Parametro               | Descrizione                                         |                
|------------------------|-----------------------------------------------------|
| **risultati**          | eventuali valori restituiti dalla funzione          |    

## Descrizione
Ritorno da una funzione. Causa la terminazione dell'esecuzione della funzione ed il rilascio della memoria allocata per le variabili locali. Se la funzione era stata mandata in esecuzione con una FCALL l'esecuzione della funzione chiamante riprende dall'istruzione successiva.
Se in precedenza erano state eseguite delle WAITTASK con la funzione corrente (quella in cui viene eseguita la FRET) come argomento, i task in attesa vengono sbloccati.