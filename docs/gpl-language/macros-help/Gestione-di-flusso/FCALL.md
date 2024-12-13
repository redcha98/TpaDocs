---
sidebar_position: 6
---

# FCALL

## Sintassi

  ```
[FCALL] nomefunzione [parametri]
risultato1 [, … risultatoN] = nomefunzione ( [parametri] )

  ```

## Parametri
|Parametro                       | Descrizione                                         |                
|--------------------------------|-----------------------------------------------------|
| **nomefunzione**               | nome della funzione da richiamare                   |    
| **parametri**                  | eventuali parametri passati alla funzione           |    
| **risultato1 … risultatoN**    | risultati restituiti dalla funzione                 |    

## Descrizione
Effettua una chiamata a funzione, ovvero viene eseguita la funzione **nomefunzione**.

Alla funzione possono essere passati eventuali **parametri**. Questi devono corrispondere per numero e tipo a quelli dichiarati come PARAM nella funzione chiamata.
Una volta conclusa l’esecuzione della funzione **nomefunzione**, ovvero appena si incontra l’istruzione FRET, l'esecuzione riprende dall’istruzione successiva a FCALL nella funzione chiamante.
Se nella definizione della funzione sono indicati uno o più valori di ritorno, questi verranno restituiti all’esecuzione di FRET e inseriti nella o nelle variabili **risultato1… risultatoN**. 

Notare la differenza con l'istruzione  [STARTTASK](../Multitasking/STARTTASK.md) che manda in esecuzione un'altra funzione in parallelo a quella chiamante (utilizzata per avere più task in esecuzione contemporanea). 
