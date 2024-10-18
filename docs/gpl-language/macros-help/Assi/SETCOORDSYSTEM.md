---
sidebar_position: 36
---

# SETCOORDSYSTEM

## Sintassi

  ```
SETCOORDSYSTEM quota1_ax1, quota2_ax1, quota3_ax1,
                 quota1_ax2, quota2_ax2, quota3_ax2, 
                 quota1_ax3, quota2_ax3, quota3_ax3, 
                 asse1, asse2, asse3,
                 [orig_ax1, orig_ax2, orig_ax3]

SETCOORDSYSTEM quota1_ax1, quota2_ax1,
                 quota1_ax2, quota2_ax2, 
                 asse1, asse2, 
                 [orig_ax1, orig_ax2]

SETCOORDSYSTEM asse1, orig_ax1

  ```

## Parametri
|Parametro                            | Descrizione                                           |                
|-------------------------------------|-------------------------------------------------------|
| **quota1_ax1...quota3_ax3**         | coseni direttori degli assi                           |  
| **asse1...asse3**                   | nomi di dispositivi. Tipo asse                        |  
| **orig_ax1...orig_ax3**             | posizione origine degli assi                          |  

## Descrizione
Consente di attivare un nuovo sistema di riferimento roto-traslato o traslato-deformato rispetto al sistema di riferimento corrente, indicando i nove coefficienti **quota1_ax1...quota3_ax3** che lo definiscono.

L'origine del nuovo sistema di riferimento viene collocata nel punto indicato da **orig_ax1...**orig_ax3.

Dopo l’esecuzione di questa istruzione tutti i comandi di movimento per il canale di interpolazione degli assi **asse1, assse2, …**  sono relativi a questo nuovo sistema di riferimento. Il nuovo sistema di riferimento viene disattivato con l’istruzione [RESCOORDSYSTEM](RESCOORDSYSTEM.md) oppure quando termina il task a cui appartiene il canale di interpolazione. Nel caso in cui i parametri **quota1_ax1...quota3_ax3** descrivano un sistema traslato-deformato, non possono essere aggiunti ulteriori sistemi di riferimento.
