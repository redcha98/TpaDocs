---
sidebar_position: 20
---

# OPENINTERP

## Sintassi

  ```
OPENINTERP asse1, [...asse6]
  ```

## Parametri
|Parametro                     | Descrizione                                           |                
|------------------------------|-------------------------------------------------------|
| **asse1, ... asse6**         | nomi di dispositivo tipo asse                         |         

## Descrizione
Crea un nuovo canale di interpolazione formato da **asse1, ... asse6**. Gli assi devono essere in stato normal e non devono essere né slave né inseriti in un altro canale di interpolazione. La cinematica implicitamente adottata è quella di una macchina utensile cartesiana a 3 assi. Il canale di interpolazione creato è legato univocamente al task in cui viene eseguita questa istruzione. Tutti i movimenti, pertanto, devono essere comandati da istruzioni GPL eseguite nello stesso task.