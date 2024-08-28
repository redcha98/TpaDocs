---
sidebar_position: 2
---

# CONTROLCHAR

## Sintassi

  ```
  CONTROLCHAR valore, nomestringa
  ```

## Parametri
|Parametro                 | Descrizione                                                      |                
|--------------------------|------------------------------------------------------------------|
| **valore**               | costante o variabile char, byte o integer. Valore da convertire  |         
| **nomestringa**          | variabile stringa. Stringa risultato                             |         

## Descrizione
Converte in carattere il valore identificato da **valore** e pone il risultato nella stringa **nomestringa** (in pratica nel primo byte).

Il precedente contenuto della stringa è perso. Questa istruzione è utile, se si devono inserire in una stringa dei caratteri di controllo o non stampabili (ad esempio il carattere NULL = 0x00)

Accetta stringhe di almeno 2 caratteri: 1 carattere + il terminatore.
