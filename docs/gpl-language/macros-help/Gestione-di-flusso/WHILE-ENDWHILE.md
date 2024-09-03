---
sidebar_position: 8
---

# WHILE-ENDWHILE

## Sintassi

  ```
WHILE	espressione_booleana
  istruzione
  istruzione
  ...	
ENDWHILE
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **espressione_booleana**    | Espressione composta da operatori e operandi e il cui risultato viene valutato come true o false. L’espressione booleana più intuitiva è: **valore operatore_di_confronto valore**                                                                                              |         
| **operatore_di_confronto**  | i simboli che possono essere utilizzati per eseguire il confronto sono: **\<** (minore) **=** (uguale) **>** (maggiore) **=\<** (minore uguale) **>=** (maggiore uguale) **\<>** (diverso) **!=** (diverso)                                                                   |        
| **valore**                  | costante o variabile numerica o boolean o timer o nomedevice o proprietà asse                         |     

## Descrizione
Il ciclo WHILE serve per eseguire ripetutamente una sequenza di istruzioni GPL ma, a differenza del FOR, il ciclo viene ripetuto finché l’espressione di controllo è vera, cioè finché il suo risultato convertito a BOOLEAN dà TRUE.

Nell’eseguire un ciclo WHILE l’interprete esegue i seguenti passi:
1.	controlla che se l’espressione di controllo sia verificata, ovvero se il risultato dell’espressione è diverso da 0. Se vale 0, l’esecuzione continua dopo ENDWHILE;
2.	esegue le istruzioni che si trovano all’interno del ciclo;
3.	ripete i due passi precedenti.

La sintassi dell'**espressione_booleana** è la stessa descritta nell'istruzione EXPR. Questo include la chiamata a funzioni che restituiscono un valore e l’uso di espressioni che contengono un unico termine.

Per uscire da un ciclo senza la necessità di dichiarare esplicitamente l’etichetta di uscita va usata un’istruzione [BREAK o BREAKALL](BREAK-BREAKALL.md). BREAK esce dal ciclo corrente, mentre BREAKALL esce dal ciclo più esterno nella funzione corrente. Queste due parole chiave possono essere usate anche nelle istruzioni di test (ad esempio, IF e SELECT) per uscire da uno o più cicli in maniera condizionata. 

L’istruzione [CONTINUE](CONTINUE.md) serve invece per uscire dall’iterazione in corso e passare alla successiva iterazione del ciclo. Questa istruzione si riferisce sempre al ciclo corrente.

