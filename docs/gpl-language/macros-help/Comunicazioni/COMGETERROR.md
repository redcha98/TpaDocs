---
sidebar_position: 2
---

# COMGETERROR

## Sintassi

  ```
  COMGETERROR	numeroCOM, variabile
  ```

## Parametri
|Parametro         | Descrizione                                                                                                                |                
|------------------|----------------------------------------------------------------------------------------------------------------------------|
| **numeroCOM**    | costante o variabile numerica. Numero della porta seriale. I valori che possono essere assegnati sono **COM1** o **COM2**. |         
| **variabile**    | variabile integer. Risultato dell'ultima operazione eseguita sulla seriale                                                 |

## Descrizione
L'istruzione legge il codice di ritorno dell'ultima istruzione di comunicazione seriale chiamata sulla porta **numeroCOM** e lo scrive in **variabile**. Con questa istruzione si può sapere se un'operazione di lettura o di scrittura ha avuto successo e, in caso negativo, anche il codice di errore ritornato. 
Di seguito sono elencati i codici di errore:

- Ritorno normale	0
- Buffer di trasmissione pieno	2
- Dispositivo già aperto	3
- Porta non valida o non configurata 	6
- Abilitazione porta I/0 fallita	7
- Impossibile connettersi all'interrupt	8
- Porta seriale (com) non ancora aperta	9
- Il dispositivo seriale (com) è occupato	12
- Non è possibile la connessione a RTX	14
