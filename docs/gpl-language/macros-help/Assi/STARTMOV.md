---
sidebar_position: 8
---

# STARTMOV

## Sintassi

  ```
STARTMOV asse
  ```

## Parametri
|Parametro       | Descrizione                     |                
|----------------|---------------------------------|
| **asse**       | nome di dispositivo tipo asse   |         

## Descrizione
Riprende il movimento dell'**asse** (o del canale di interpolazione identificato da **asse**) precedentemente interrotto da una [STOPMOV](STOPMOV.md).

Se il parametro **asse** indica un dispositivo encoder viene generato l’errore di sistema 4359.
