---
sidebar_position: 10
---

# SETPOSITION

## Sintassi

  ```
SETPOSITION asse_enc, quota
  ```

## Parametri
|Parametro         | Descrizione                                              |                
|------------------|----------------------------------------------------------|
| **asse_enc**     | nome del dispositivo tipo asse o encoder                 |         
| **quota**        | costante o variabile. Posizione da applicare all'asse    |         

## Descrizione
Questa istruzione forza, contestualmente, la quota teorica e la quota reale di un asse al valore specificato da **quota**. 

Se l'asse è in movimento questo provoca il brusco arresto dell'asse dato che, per il controllo, l'asse si trova improvvisamente in quota (quota reale coincide con quota target). 

È pertanto sconsigliato l'utilizzo di questa istruzione su un asse in movimento se non a velocità molto bassa. 

Rispetto al valore di **quota** impostato vengono calcolati i limiti di posizione per l’asse (si vedano le macro [SETLIMPOS](SETLIMPOS.md) e [SETLIMNEG](SETLIMNEG.md)) e i correttori di linearità.

