---
sidebar_position: 12
---

# ENABLEJOINTCORRECTION

## Sintassi

  ```
  ENABLEJOINTCORRECTION asse_enc
  ```

## Parametri
|Parametro                         | Descrizione                                    |                
|----------------------------------|------------------------------------------------|
| **asse_enc**                    | nome del dispositivo tipo asse o encoder        |      


## Descrizione
Attiva la correzione congiunta sulla posizione di **asse_enc**. 

Il valore di correzione è calcolato a partire dalle posizioni di altri due dispositivi (assi o encoder) secondo la tabella di correzione indicata in configurazione. 

Vedere anche [DISABLEJOINTCORRECTION](DISABLEJOINTCORRECTION.md).

NOTA: Affinché l'istruzione abbia effetto la correzione deve essere abilitata anche in configurazione
