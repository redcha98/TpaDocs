---
sidebar_position: 11
---

# ENABLECORRECTION

## Sintassi

  ```
  ENABLECORRECTION asse_enc1 [, asse_enc2, ..., asse_enc7]
  ```

## Parametri
|Parametro                         | Descrizione                                    |                
|----------------------------------|------------------------------------------------|
| **asse_enc1**                    | nome del dispositivo tipo asse o encoder       |      
| **asse_enc2, ..., asse_enc7**    | nome di dispositivo tipo asse o encoder        |         


## Descrizione
Abilita le correzioni lineari aventi come sorgente l'**asse_enc1** e come destinatari i dispositivi asse_**enc2, ..., asse_enc7**. 

Se viene indicato solo il primo parametro, vengono attivate tutte le correzioni configurate aventi il dispositivo **asse_enc1** come sorgente. 

Se uno dei dispositivi **asse_enc2, ..., asse_enc7** coincide con **asse_enc1** viene attivata l’autocorrezione per **asse_enc1**. 

Per ogni dispositivo è possibile definire un autocorrettore e un massimo di cinque correttori incrociati.

Vedere anche  [DISABLECORRECTION](DISABLECORRECTION.md).


### Esempio
  ```c {2,5,8} showLineNumbers
;// abilita tutte le correzioni previste in configurazione per l'asse X
ENABLECORRECTION	X

;// abilita la sola autocorrezione per l'asse X
ENABLECORRECTION	X, X

;// abilita l'autocorrezione e la correzione incrociata (verso X e Y) per l'asse Z 
ENABLECORRECTION	Z, X, Y, Z
 ```
