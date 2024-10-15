---
sidebar_position: 2
---

# Proprietà Asse
E' possibile ottenere informazioni relative agli assi semplicemente nella forma

```code
nomeAsse.proprietà 
```

inserendo quindi questo costrutto direttamente in espressioni o istruzioni di flusso (IF su tutte)
 
## Esempio

```c {} showLineNumbers
;// verifico la velocità corrente dell'asse
If Ax.VC > 200 Then
    Variable = Ax.EA + Ax.FF   ;// sommo l'errore d'anello con la componente di FeedForward
EndIf
```

## Lista di tutte le proprietà

| Nome Proprietà     |  Descrizione                                                                                     | Tipo  | Valore restituito                                                                                        
|--------------------|--------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------------------
| CFGTYPE            | tipo asse                                                                                        | i     | ~1=analogico, 3=passo-passo,~ 4=digitale, 5=di conteggio ~, 6=non utilizzato, 7=virtuale~                
| CFGUM              | unità di misura                                                                                  | b     | 0=millimetri, 1=pollici, 2=gradi, 3=giri                                                                
| CFGRIS             | risoluzione                                                                                      | d     | impulsi per unità di misura                                                                             
| CFGVMAX            | velocità massima                                                                                 | d     | unità di misura: [m/min], [inch/s], [°/s], [rev/s]                                                       
| CFGVMAXI           | velocità massima di interpolazione                                                               | d     | unità di misura: [m/min], [inch/s], [°/s], [rev/s]                                                       
| CFGPHINV           | inversione fasi encoder                                                                          | b     | 0=no inversione, 1=inversione                                                                           
| CFGRFINV           | inversione riferimento                                                                           | b     | 0=no inversione, 1=inversione                                                                           
| CFGENCRIS          | risoluzione encoder                                                                              | d     | [imp/uom]                                                                                                
| CFGACC             | tempo di accelerazione da 0 a _CFGVMAX                                                           | i     | msec                                                                                                    
| CFGDEC             | tempo di decelerazione da _CFGVMAX a 0                                                           | i     | msec                                                                                                    
| CFGACCI            | tempo di accelerazione da 0 a _CFGVMAXI                                                          | i     | msec                                                                                                    
| CFGDECI            | tempo di decelerazione da _CFGVMAXI a 0                                                          | i     | msec                                                                                                    
| CFGQLP             | limite asse in positivo                                                                          | d     | quota                                                                                                   
| CFGQLN             | limite asse in negativo                                                                          | d     | quota                                                                                                   
| CFGKP              | coefficiente proporzionale                                                                       | f     |                                                                                                          
| CFGKI              | coefficiente integrativo                                                                         | f     |                                                                                                          
| CFGKD              | coefficiente derivativo                                                                          | f     |                                                                                                          
| CFGKFF             | feed forward                                                                                     | f     | percentuale                                                                                              
| CFGMECHRATIO       | rapporto di riduzione meccanico [_CFGUM / giri motore]                                           | d     |                                                                                                          
| CFGOVERCTRL        | override funzioni di controllo asse in plancia di movimentazione manuale                         | b     | TRUE = override attivo <br/> FALSE = movimentazione standard                                              
| CFGOVERCALIB       | override funzioni di controllo asse in plancia di calibrazione                                   | b     | TRUE = override attivo <br/> FALSE = movimentazione standard                                              
| CFGQEA             | limite errore d'anello (servoerror)                                                              | d     | quota                                                                                                   
| CFGKPI             | coefficiente proporzionale d'interpolazione                                                      | f     |                                                                                                          
| CFGKII             | coefficiente integrativo d'interpolazione                                                        | f     |                                                                                                          
| CFGKDI             | coefficiente derivativo d'interpolazione                                                         | f     |                                                                                                          
| CFGDSE             | abilitazione servoerro dinamico                                                                  | b     | 0=disabilitato, 1=abilitato                                                                              
| CFGDSEQEA          | errore d'anello di riferimento per il calcolo del servoerror dinamico                            | d     |                                                                                                          
| CFGDSEVEL          | velocità di riferimento per il calcolo del servoerror dinamico                                   | d     |                                                                                                          
| CFGQA              | finestra arrivo in quota                                                                         | d     |                                                                                                          
| CFGRAMPSHAPEI      | percentuale di smoothing per movimenti interpolati                                               | i     | 0% - 100%                                                                                                
| CFGKFFI            | feed forward interpolazione                                                                      | f     | percentuale                                                                                              
| OWNERTASK          | Identificatore del task che muove l'asse                                                         | i     | Se il task non esiste viene restituito 0xFFFF                                                            
| RESOLUT            | risoluzione equivalente a quella in Albatros                                                     | d     |                                                                                                          
| MECHRATIO          | rapporto meccanico                                                                               | d     |                                                                                                          
| ACC                | tempo di accelerazione da 0 a ~_VMAX~ _CFGVMAX                                                   | i     | msec                                                                                                    
| DEC                | tempo di decelerazione da a ~_VMAX~ _CFGVMAX a 0                                                 | i     | msec                                                                                                    
| ACCI               | tempo di accelerazione da 0 a _VMAXI                                                             | i     | msec                                                                                                    
| DECI               | tempo di decelerazione da a ~_VMAXI~ a 0                                                         | i     | msec           
| QLP                | Limite asse in positivo                                                                          | d     | Quota                                                      
| QLN                | Limite asse in negativo                                                                          | d     | Quota                                                      
| QEA                | Limite errore d'anello (servoerror)                                                              | d     | Quota                                                      
| VEL                | Velocità punto-punto                                                                             | f     | m/1', inch/1", gradi/1", giri/1'                           
| VELI               | Velocità di interpolazione                                                                       | f     | m/1', inch/1", gradi/1", giri/1'                           
| MODE               | Modo di funzionamento asse                                                                       | b     | 1=normal, 2=free, 3=error ~, 8=interpol., 10=coord. ~      
| MODEI              | Modo di funzionamento gruppo di interpolazione                                                   | b     | 0=non in interpolazione, 1=normal, 3=error                 
| DSE                | Abilitazione servoerro dinamico corrente                                                         | b     | 0=disabilitato, 1=abilitato                                
| DSEQEA             | Errore d'anello di riferimento                                                                   | d     |                                                            
| DSEVEL             | Velocità di riferimento                                                                          | d     |                                                            
| QA                 | Finestra arrivo in quota                                                                         | d     |                                                            
| OFSCOORD           | Quota offset movimento coordinato                                                                | d     |                                                            
| MS                 | Tipo asse master o slave                                                                         | b     | 0=non in chain, 4=master, 5=slave                         
| QENC               | Quota encoder                                                                                    | d     | Quota                                                      
| QR                 | Quota reale                                                                                      | d     | Quota                                                      
| ST                 | Stato asse                                                                                       | b     | 1=accel., 2=regime, 3=decel., 4=quota, 5=attesa finestra...
| QT                 | Quota teorica                                                                                    | d     | Quota                                                      
| EA                 | Errore d'anello                                                                                  | d     | Quota                                                      
| FF                 | Feed forward                                                                                     | i     |                                                            
| VC                 | Velocità corrente                                                                                | f     |                                                            
| P                  | Correttore proporzionale                                                                         | i     |                                                            
| I                  | Correttore integrativo                                                                           | i     |                                                            
| D                  | Correttore derivativo                                                                            | i     |                                                            
| FLGS               | Flags assi direzione                                                                             | b     | false=direzione positiva, true=direzione negativa          
| VCR                | Velocità corrente reale                                                                          | f     |                                                            
| QR_WRAPUP          | Conteggio wrap up lettura encoder                                                                | i     |                                                            
| ACCINST            | Valore di accelerazione istantanea                                                               | f     |                                                            
| GONETIME           | Tempo trascorso dall'inizio del movimento                                                        | f     | sec (0 per assi slave e assi passo-passo)                  
| GONESPACE          | Spazio percorso dall'inizio del movimento                                                        | f     | Percentuale (100 per assi slave, assi coordinati, passo...)
| RESSPACE           | Spazio residuo alla fine del movimento                                                           | f     | Percentuale                                               
| AXESJERK           | Abilitazione controllo jerk                                                                      | b     | 1=controllo abilitato, 0=controllo non abilitato           
| MOVEJERK           | Abilitazione controllo jerk sul movimento                                                        | b     | 1=controllo abilitato, 0=controllo non abilitato           
| MOVETYPE           | Tipo di movimento in cui è impegnato l'asse                                                      | i     | 0=nessun movimento, 1=interpolato classico, 4=punto-punto...
| AXINRIFLOC         | Asse in presa in sistema di riferimento locale                                                   | i     | 1=sì, 0=no                                                
| QTARGETTOOL        | Quota target asse (utensile)                                                                     | d     |                                                           
| QREALTOOL          | Quota reale asse (utensile)                                                                      | d     |                                                           
| BACKLASH           | Valore del gioco meccanico definito per l'asse                                                   | d     |                                                           
| DISABLED           | Disabilitazione di un asse                                                                       | b     | 1=asse disabilitato, 0=asse abilitato                     
| DYNLIMIT           | Abilitazione controllo dinamico limiti asse                                                      | b     | 1=controllo abilitato, 0=controllo non abilitato          
| AXESFEED           | Valore di feedrate override                                                                      | f     |                                                           
| CORRLIN            | Tipo correttore di linearità in uso                                                              | i     | Maschera di bit: 0=nessun correttore in uso               
| VELISO             | Velocità punta utensile 5 assi                                                                   | f     |                                                           
| QR_ENCODER_PULSE   | lettura encoder                                                                                  | i     |
| CURRATIO           | valore del rapporto di concatenamento correntemente in uso                                       | d     |       
| DYNRATIO           | ritorna, se è in atto un cambio dinamico di rapporto di concatenamento                           | i     | 0=no, 1 = sì 
| SWITCHENC          | monitora se è in atto lo scambio encoder                                                         | i     | -1=l'asse non usa l'istruzione SWITCHENC, 0=è stata eseguita una istruzione SWITCHENC, ma l'asse sta utilizzando il suo encoder, 1= è stata eseguita una istruzione SWITCHENC  e l'asse sta utilizzando l'encoder dell'asse di conteggio 
| QOFSENC            | valore dell'offset encoder                                                                       | d     |    
| RAMPSHAPE          | restituisce la percentuale di smoothing in uso per i movimenti punto-punto                       | i     | 0% - 100% 
| RAMPSHAPEI         | restituisce la percentuale di smoothing in uso per i movimenti interpolati                       | i     |  0% - 100% 
| ISOMOVETYPE        | Tipo di movimento ISO in esecuzione                                                              | i     | 0=movimento ISO rapido, 1 = movimento ISO interpolato, -1 = altro 
| QMAINENC           | Quota reale dell’encoder principale quando è in uso l’encoder secondario                         | d     |
| INDEXINTERP        | Indice del tratto di interpolazione in esecuzione                                                | i     | 0 = inizio di una nuova sequenza  di tratti di interpolazione, -1 = l'asse non sta eseguendo un movimento interpolato 
| LABELINTERP        | Etichetta (_label_) del tratto di interpolazione in esecuzione                                   | i     | -1 = se l'etichetta non è stata assegnata o l'asse non sta eseguendo un movimento interpolato 