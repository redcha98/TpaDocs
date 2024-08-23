---
sidebar_position: 7
---

# COMWRITESTRING

## Sintassi

  ```
  COMWRITESTRING	numeroCOM, buffer
  ```

## Parametri
|Parametro              | Descrizione                                                                                                                |                
|-----------------------|----------------------------------------------------------------------------------------------------------------------------|
| **numeroCOM**         | costante o variabile numerica. Numero della porta seriale. I valori che possono essere assegnati sono **COM1** o **COM2**. |         
| **buffer**            | variabile string. Contiene i dati da scrivere                                                                              |         

## Descrizione
L'istruzione scrive i caratteri presenti nella variabile **buffer** sulla linea seriale **numeroCOM**. Si differenzia dalla [COMWRITE](COMWRITE.md), perché scrive sulla seriale, fino al terminatore della stringa. Il parametro terminatore è opzionale. Se non è specificato, l'istruzione trasmetterà, fino a che non incontrerà un carattere di zero. Lo zero non andrà trasmesso, mentre un eventuale carattere di controllo specificato sì.