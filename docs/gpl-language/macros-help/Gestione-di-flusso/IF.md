---
sidebar_position: 11
---

# IF/IF-THEN-ELSE

## Sintassi

  ```
IF espressione_booleana, GOTO etichetta
IF espressione_booleana, CALL sottoprogramma
IF espressione_booleana, nomefunzione

IF espressione_booleana THEN
    istruzione
    istruzione
    ...
ENDIF

IF espressione_booleana THEN
    istruzione
    istruzione
    ...
ELSEIF espressione_booleana THEN
    istruzione
    istruzione
    ...
ELSE
    istruzione
    istruzione
    ...
ENDIF
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **espressione_booleana**    | Espressione composta da operatori e operandi e il cui risultato viene valutato come true o false. L’espressione booleana più intuitiva è: **valore operatore_di_confronto valore**                                                                                              |         
| **operatore_di_confronto**  | i simboli che possono essere utilizzati per eseguire il confronto sono: **\<** (minore) **=** (uguale) **>** (maggiore) **=\<** (minore uguale) **>=** (maggiore uguale) **\<>** (diverso) **!=** (diverso)                                                                   |        
| **valore**                  | costante o variabile numerica o boolean o timer o nomedevice o proprietà asse                         |     
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
L'istruzione permette di effettuare un'azione piuttosto che un’altra in base al risultato di **espressione_booleana**.

Nelle prime tre forme se il confronto è positivo viene effettuato un salto ad **etichetta** (GOTO) oppure viene effettuata una chiamata a **sottoprogramma** (CALL) o una chiamata a funzione (**nomefunzione**). Al termine dell'esecuzione della funzione o del sottoprogramma chiamato l'esecuzione riprende dalla riga successiva. Se invece il confronto è negativo l'esecuzione del programma prosegue. 

Il costrutto IF...THEN permette di eseguire una o più istruzioni in maniera condizionata. Le istruzioni comprese tra le parole chiave THEN e ENDIF vengono eseguite se l’**espressione_booleana** ha valore true.

Il costrutto IF...THEN...ELSE permette di definire due blocchi di istruzioni, uno solo dei quali verrà eseguito. Se l’**espressione_booleana** ha valore true, vengono eseguite le istruzioni comprese tra le parole chiave THEN ed ELSE, se è false vengono eseguite le istruzioni comprese tra le parole chiave ELSE e ENDIF. In entrambi i casi l'esecuzione prosegue poi con l'istruzione successiva ad ENDIF.