---
sidebar_position: 16
---

# FROMPOSITIONTOPULSES

## Sintassi

  ```
FROMPOSITIONTOPULSES asse_enc, quota, variable
  ```

## Parametri
|Parametro         | Descrizione                                                         |                
|------------------|---------------------------------------------------------------------|
| **asse_enc**     | 	nomi di dispositivi tipo asse o encoder                            |                
| **quota**        | 	costante o variabile di tipo double.                               |                
| **variable**     | 	variabile di tipo integer. Contiene il risultato dell’operazione   |


## Descrizione
Trasforma la **quota** indica nell’equivalente conteggio impulsi del dispositivo **asse_enc** indicato e lo scrive in **variabile**. 

La quota si considera priva di correttori di linearità (si vedano le istruzioni [ENABLECORRECTION](./ENABLECORRECTION.md) e [ENABLEJOINTCORRECTION](./ENABLEJOINTCORRECTION.md)) e correzioni di giochi meccanici (si veda [SETBACKLASH](/docs/ToDo.md)).