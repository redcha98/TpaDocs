---
sidebar_position: 2
---

# CLEARALERTS

## Sintassi

  ```
CLEARALERTS [IDposiz] 
  ```

## Parametri
|Parametro                 | Descrizione                                                                   |                
|--------------------------|-------------------------------------------------------------------------------|
| **IDposiz**              | costante o variabile integer. Categoria numerica comune a tutti gli allarmi.  |

## Descrizione
Fa eseguire al PC supervisore la cancellazione di tutti gli allarmi, relativi al modulo che esegue l'istruzione, inviati precedentemente con l'istruzione ALERT. 

Il parametro **IDposiz** è un parametro opzionale che specifica una categoria numerica comune a tutti gli allarmi da cancellare. 

Il range di valori impostabili è compreso tra 0 (NOPLACE) e 1023. Se il parametro **IDposiz** non è specificato si esegue la cancellazione di tutti gli allarmi inviati con ALERT  sia nella coda di default che nelle eventuali altre code. 

Vedere anche le istruzioni [ALERT](ALERT.md) e [DELALERT](DELALERT.md).
