---
sidebar_position: 16
---

# IFDEF-ELSEDEF-ENDDEF

## Sintassi

  ```
IFDEF costante
    istruzione
    ... 
ENDDEF

IFDEF espressione_booleana
    istruzione
    ... 
ENDDEF

IFDEF espressione_booleana
    istruzione
    ... 
ELSEDEF
    istruzione
    ... 
ENDDEF

  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **costante**                | costante di qualsiasi tipo                                                                            |     
| **valore**                  | costante numerica                                                                                     |     
| **espressione_booleana**    | Espressione composta da operatori e operandi e il cui risultato viene valutato come true o false. L’espressione booleana più intuitiva è: **valore operatore_di_confronto valore**                                                                                              |         
| **operatore_di_confronto**  | i simboli che possono essere utilizzati per eseguire il confronto sono: **\<** (minore) **=** (uguale) **>** (maggiore) **=\<** (minore uguale) **>=** (maggiore uguale) **\<>** (diverso) **!=** (diverso)                                                                   |        

## Descrizione
La compilazione condizionale consente di controllare quali parti di un file di funzioni GPL devono essere compilate. Il compilatore verifica che la condizione richiesta come argomento dell'istruzione IFDEF sia verificata. In questo caso il codice compreso tra l'istruzione IFDEF e l'istruzione ENDDEF o ELSEDEF viene compilato. Se è presente l'istruzione ELSEDEF e la condizione non è verificata verrà compilato il codice compreso tra l'istruzione ELSEDEF e l'istruzione ENDDEF.

La condizione di compilazione può essere espressa in diversi modi:
·	Dopo l'istruzione IFDEF viene specificato il nome di una costante. In questo caso la condizione è verificata se esiste una costante di gruppo con il nome specificato.
·	Dopo l'istruzione IFDEF viene specificata un’espressione, tipicamente una relazione tra due operatori e un operando. In questo caso la condizione è verificata se l’espressione è verificata, cioè se il risultato è diverso da 0 (ad es. MAX_TOOLS = 100). Gli operatori ammessi sono gli stessi utilizzati nell'istruzione [EXPR](..\Matematica\EXPR.md). 

Si possono usare tutti gli operatori ma l’espressione deve essere risolta dal compilatore, quindi non è possibile usare nomi di variabili o dispositivi per leggerne il valore, né chiamare funzioni. Inoltre, gli operatori LINKED o UNLINKED verificano che un dispositivo sia collegato in virtuale-fisico durante la fase di compilazione (e non in esecuzione, come per EXPR).

È possibile innestare più istruzioni IFDEF, tenendo presente che ad ogni istruzione IFDEF deve corrispondere una istruzione ENDDEF.

### Esempio 1
  ```c {4,7,10} showLineNumbers
;// l'esecuzione del codice GPL cambia a seconda 
;// della presenza in macchina del gruppo FRESA
Const GruppoFresa = "Fresa"
IFDEF Exists GruppoFresa
	  istruzione
	  istruzione
ELSEDEF
	  istruzione 
	  istruzione
ENDDEF
  ```
  
### Esempio 2
  ```c {3,6,9,12,13,14,17,18,19,23,25,29,31,35,37} showLineNumbers
;// l'esecuzione del codice GPL cambia 
;// a seconda del modulo
IFDEF _ID_MODULE = 1   ;// compila le istruzioni per il modulo 1
	  istruzione
	  istruzione
ELSEDEF		 ;// compila le istruzioni per gli altri moduli
	  istruzione 
	  istruzione
ENDDEF

; // compila il codice per la versione 3.2.0 di Albatros
IFDEF _VER_MAJOR = 3
	  IFDEF _VER_MINOR = 2
		    IFDEF _VER_REVISION = 0 
			      istruzione 
			      istruzione
		    ENDDEF
	  ENDDEF
ENDDEF

; // compila il codice per la versione 
; // di service pack 10 Albatros
IFDEF _VER_SP = "Service Pack 10"
	  istruzione
ENDDEF

; // compila il codice solo se il sistema
; //  è configurato per un modulo remoto 
IFDEF _REMOTE_MODULE = 1  ; // 1 = modulo remoto, altrimenti 0 = mo-dulo locale
	  istruzione
ENDDEF

; // compila il codice per la versione 
; // 2.4 service pack 10 Albatros
IFDEF _VER_FULL = $0002040AH
	  istruzione
ENDDEF
  ```

### Esempio 3
  ```c {3,7} showLineNumbers
;// l'esecuzione del codice GPL cambia 
;// a seconda che il dispositivo sia collegato in virtuale fisico
IFDEF LINKED  out1   ;// se Out1 è collegato il codice viene ese-guito
	  istruzione
	  istruzione
	  istruzione
ENDDEF
  ```
