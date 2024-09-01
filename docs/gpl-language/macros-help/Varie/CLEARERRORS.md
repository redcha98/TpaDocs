---
sidebar_position: 1
---

# CLEARERRORS

## Sintassi

  ```
CLEARERRORS [IDposiz] 
  ```

## Parametri
|Parametro                 | Descrizione                                                                   |                
|--------------------------|-------------------------------------------------------------------------------|
| **IDposiz**              | costante o variabile integer. Categoria numerica comune a tutti gli allarmi.  |

## Descrizione
Fa eseguire al PC supervisore la cancellazione di tutti gli errori di ciclo, relativi al modulo che esegue l'istruzione, inviati precedentemente con l'istruzione ERROR. 

Il parametro **IDposiz** è un parametro opzionale che specifica una categoria numerica comune a tutti gli allarmi da cancellare. 

Il range di valori impostabili è compreso tra 0 (NOPLACE) e 1023. Se il parametro **IDposiz** non è specificato si esegue la cancellazione di tutti gli errori di ciclo sia nella coda di default che nelle eventuali altre code. 

Vedere anche le istruzioni [ERROR](ERROR.md) e [DELERROR](DELERROR.md).
