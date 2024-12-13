---
sidebar_position: 17
---

# FROMPULSESTOPOSITION

## Sintassi

  ```
FROMPULSESTOPOSITION asse_enc, impulsi, variabile
  ```

## Parametri
|Parametro         | Descrizione                                                         |                
|------------------|---------------------------------------------------------------------|
| **asse_enc**     | 	nomi di dispositivi tipo asse o encoder                            |                
| **impulsi**      | 	costante o variabile di tipo double.                               |                
| **variable**     | 	variabile di tipo integer. Contiene il risultato dell’operazione   |


## Descrizione
Trasforma il conteggio **impulsi** nella posizione equivalente del dispositivo **asse_enc** indicato e lo scrive in **variabile**. 

La posizione calcolata non contiene né correttori di linearità (si vedano le istruzioni [ENABLECORRECTION](./ENABLECORRECTION.md) e [ENABLEJOINTCORRECTION](./ENABLEJOINTCORRECTION.md)) né correzioni per recupero giochi (si veda [SETBACKLASH](/docs/ToDo.md)).