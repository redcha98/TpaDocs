---
sidebar_position: 8
---

# DISABLECORRECTION

## Sintassi

  ```
  DISABLECORRECTION asse_enc1 [, asse_enc2, ..., asse_enc7]
  ```

## Parametri
|Parametro                         | Descrizione                                    |                
|----------------------------------|------------------------------------------------|
| **asse_enc1, ..., asse_enc7**    | nome di dispositivo tipo asse o encoder        |         


## Descrizione
Disabilita le correzioni lineare aventi come sorgente il dispositivo **asse_enc1** e come destinatari i dispositivi **asse_enc2, ..., asse_enc7**.

Se viene indicato solo il primo parametro (**asse_enc1**) verranno disattivate sia l’autocorrezione di **asse_enc1** sia tutte le correzioni incociate aventi **asse_enc1** come sorgente. 
 
Se uno tra i dispositivi **asse_enc2, ..., asse_enc7** coincide con **asse_enc1** verrà disattivata l'autocorrezione per il dispositivo **asse_enc1**.

Per una descrizione più dettagliata vedere [ENABLECORRECTION](DISABLECOENABLECORRECTIONRRECTION.md).


### Esempio
  ```c {2,5} showLineNumbers
;// disabilita la sola autocorrezione per l'asse X
DISABLECORRECTION	X, X

;// disabilita la correzione incrociata (verso X e Y) per l'asse Z, ma non l'autocorrezione
DISABLECORRECTION	Z, X, Y
 ```
