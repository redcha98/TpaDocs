---
sidebar_position: 2
---

# CALL

## Sintassi

  ```
CALL sottoprogramma
  ```

## Parametri
|Parametro                    | Descrizione                                     |                
|-----------------------------|-------------------------------------------------|
| **sottoprogramma**          | nome sottoprogramma, etichetta                  |         

## Descrizione
Esegue il sottoprogramma definito dall'etichetta **sottoprogramma**.
Ogni sottoprogramma, per poter tornare all'istruzione successiva alla CALL, deve terminare, nel punto di uscita, con l'istruzione [RET](RET.md).

### Nota
Questa istruzione, assieme alla RET, è una tipica fonte di errori di programmazione. Si consiglia di prestare attenzione al suo utilizzo, in particolare si consiglia di posizionare i sottoprogrammi al termine del corpo di una funzione (dopo l'istruzione FRET) in modo da evitare l'esecuzione accidentale del codice del sottoprogramma come se fosse parte integrante del codice principale. Il risultato di questa situazione è nella migliore delle ipotesi un errore di sistema, in altri casi si ottengono comportamenti anomali della macchina la cui causa è di difficile individuazione.