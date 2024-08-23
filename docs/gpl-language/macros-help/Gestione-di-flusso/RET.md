---
sidebar_position: 40
---

# RET

## Sintassi

  ```
RET	
  ```

## Parametri
nessun argomento

## Descrizione
Termina l'esecuzione del sottoprogramma con ritorno all'istruzione immediatamente successiva alla CALL di chiamata.
Vedere anche l'istruzione [CALL](CALL.md)

### Nota
Questa istruzione, assieme alla CALL, è una tipica fonte di errori di programmazione. Si consiglia di prestare attenzione al suo utilizzo, in particolare si consiglia di posizionare i sottoprogrammi al termine del corpo di una funzione (dopo l'istruzione FRET) in modo da evitare l'esecuzione accidentale del codice del sottoprogramma come se fosse parte integrante del codice principale. Il risultato di questa situazione è nella migliore delle ipotesi un errore di sistema, in altri casi si ottengono comportamenti anomali della macchina la cui causa è di difficile individuazione.

