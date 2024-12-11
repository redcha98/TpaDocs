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

| Costante GETAXIS    | Nome Proprietà              |  Descrizione                                                                                     | Tipo  | Valore restituito                                                                                        
|---------------------|-----------------------------|--------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------------------
| _CFGTYPE            | Type                        | tipo asse                                                                                        | i     | ~1=analogico, 3=passo-passo,~ 4=digitale, 5=di conteggio ~, 6=non utilizzato, 7=virtuale~                
| _CFGUM              | UoM                         | unità di misura                                                                                  | b     | 0=millimetri, 1=pollici, 2=gradi, 3=giri                                                                
| _CFGRIS             | PulsesPerUoMConf            | risoluzione                                                                                      | d     | impulsi per unità di misura                                                                             
| _CFGVMAX            | MaxSpeedConf                | velocità massima                                                                                 | d     | unità di misura: [m/min], [inch/s], [°/s], [rev/s]                                                       
| _CFGVMAXD           | ManualMaxSpeed              | velocita' massima in manuale                                                                     | d     | unità di misura: [m/min], [inch/s], [°/s], [rev/s]                                                       
| _CFGVMAXI           | InterpMaxSpeedConf          | velocità massima di interpolazione                                                               | d     | unità di misura: [m/min], [inch/s], [°/s], [rev/s]                                                       
| _CFGPHINV           | PhaseInversionEnable        | inversione fasi encoder                                                                          | b     | 0=no inversione, 1=inversione                                                                           
| _CFGRFINV           | RefInversionEnable          | inversione riferimento                                                                           | b     | 0=no inversione, 1=inversione                                                                           
|                     | EncoderResolutionConf       | risoluzione encoder                                                                              | d     | [imp/uom]                                                                                                
| _CFGACC             | AccelerationTimeConf        | tempo di accelerazione da 0 a _CFGVMAX                                                           | i     | msec                                                                                                    
| _CFGDEC             | DecelerationTimeConf        | tempo di decelerazione da _CFGVMAX a 0                                                           | i     | msec                                                                                                    
| _CFGACCI            | InterpAccelerationTimeConf  | tempo di accelerazione da 0 a _CFGVMAXI                                                          | i     | msec                                                                                                    
| _CFGDECI            | InterpDecelerationTimeConf  | tempo di decelerazione da _CFGVMAXI a 0                                                          | i     | msec                                                                                                    
| _CFGQLP             | UpperPositionLimitConf      | limite asse in positivo                                                                          | d     | quota                                                                                                   
| _CFGQLN             | LowerPositionLimitConf      | limite asse in negativo                                                                          | d     | quota                                                                                                   
| _CFGKP              | KP                          | coefficiente proporzionale                                                                       | f     |                                                                                                          
| _CFGKI              | KI                          | coefficiente integrativo                                                                         | f     |                                                                                                          
| _CFGKD              | KD                          | coefficiente derivativo                                                                          | f     |                                                                                                          
| _CFGKFF             | KFF                         | feed forward                                                                                     | f     | percentuale                                                                                              
|                     | MechRatioConf               | rapporto di riduzione meccanico [_CFGUM / giri motore]                                           | d     |                                                                                                          
|                     | OverloadFunctionMove        | override funzioni di controllo asse in plancia di movimentazione manuale                         | b     | TRUE = override attivo <br/> FALSE = movimentazione standard                                              
|                     | OverloadFunctionTuning      | override funzioni di controllo asse in plancia di calibrazione                                   | b     | TRUE = override attivo <br/> FALSE = movimentazione standard                                              
| _CFGQEA             | StaticServoErrorLimitConf   | limite errore d'anello (servoerror)                                                              | d     | quota                                                                                                   
| _CFGKPI             | KPI                         | coefficiente proporzionale d'interpolazione                                                      | f     |                                                                                                          
| _CFGKII             | KII                         | coefficiente integrativo d'interpolazione                                                        | f     |                                                                                                          
| _CFGKDI             | KDI                         | coefficiente derivativo d'interpolazione                                                         | f     |                                                                                                          
| _CFGDSE             | DynamicServoErrorEnableConf | abilitazione servoerro dinamico                                                                  | b     | 0=disabilitato, 1=abilitato                                                                              
|                     | DynamicServoErrorLimitConf  | errore d'anello di riferimento per il calcolo del servoerror dinamico                            | d     |                                                                                                          
|                     | DynamicServoErrorSpeedConf  | velocità di riferimento per il calcolo del servoerror dinamico                                   | d     |                                                                                                          
| _CFGQA              | TargetWindowToleranceConf   | finestra arrivo in quota                                                                         | d     |                                                                                                          
| _CFGRAMPSHAPE       | RampShapeConf               | tipo di rampa di accelerazione punto-punto (percentuale)                                         | i     | 0% - 100%                                                                                                
| _CFGRAMPSHAPEI      | InterpRampShapeConf         | tipo di rampa interpolazione (percentuale)                                                       | i     | 0% - 100%                                                                                                
| _CFGKFFI            | KFFI                        | feed forward interpolazione                                                                      | f     | percentuale                                                                                              
|                     | OwnerTask                   | Identificatore del task che muove l'asse                                                         | i     | Se il task non esiste viene restituito 0xFFFF                                                            
| _RIS                | PulsesPerUoM                | risoluzione equivalente a quella in Albatros                                                     | d     |                                                                                                          
|                     | MechRatio                   | rapporto meccanico                                                                               | d     |                                                                                                          
| _ACC                | AccelerationTime            | tempo di accelerazione da 0 a ~_VMAX~ _CFGVMAX                                                   | i     | msec                                                                                                    
| _DEC                | DecelerationTime            | tempo di decelerazione da a ~_VMAX~ _CFGVMAX a 0                                                 | i     | msec                                                                                                    
| _ACCI               | InterpAccelerationTime      | tempo di accelerazione da 0 a _VMAXI                                                             | i     | msec                                                                                                    
| _DECI               | InterpDecelerationTime      | tempo di decelerazione da a ~_VMAXI~ a 0                                                         | i     | msec           
| _QLP                | UpperPositionLimit          | Limite asse in positivo                                                                          | d     | Quota                                                      
| _QLN                | LowerPositionLimit          | Limite asse in negativo                                                                          | d     | Quota                                                      
| _QEA                | StaticServoErrorLimit       | Limite errore d'anello (servoerror)                                                              | d     | Quota                                                      
| _VEL                | MaxSpeed                    | Velocità punto-punto                                                                             | f     | m/1', inch/1", gradi/1", giri/1'                           
| _VELI               | InterpMaxSpeed              | Velocità di interpolazione                                                                       | f     | m/1', inch/1", gradi/1", giri/1'                           
| _MODE               | AxisMode                    | Modo di funzionamento asse                                                                       | b     | 1=normal, 2=free, 3=error ~, 8=interpol., 10=coord. ~      
| _MODEI              | ModeInterp                  | Modo di funzionamento gruppo di interpolazione                                                   | b     | 0=non in interpolazione, 1=normal, 3=error                 
|                     | DynamicServoErrorType       | Abilitazione servoerro dinamico corrente                                                         | b     | 0=disabilitato, 1=abilitato                                
|                     | DynamicServoErrorLimit      | Errore d'anello di riferimento                                                                   | d     |                                                            
|                     | DynamicServoErrorSpeed      | Velocità di riferimento                                                                          | d     |                                                            
| _QA                 | TargetWindowTolerance       | Finestra arrivo in quota                                                                         | d     |                                                            
| _MS                 | ChainMode                   | Tipo asse master o slave                                                                         | b     | 0=non in chain, 4=master, 5=slave                         
| _QENC               | EncoderPosition             | Quota encoder                                                                                    | d     | Quota                                                      
| _QR                 | RealPosition                | Quota reale                                                                                      | d     | Quota                                                      
| _ST                 | MoveState                   | Stato asse                                                                                       | b     | 1=accel., 2=regime, 3=decel., 4=quota, 5=attesa finestra...
| _QT                 | TargetPosition              | Quota teorica                                                                                    | d     | Quota                                                      
| _EA                 | FollowingError              | Errore d'anello                                                                                  | d     | Quota                                                      
| _FF                 | FeedForward                 | Feed forward                                                                                     | i     |                                                            
| _VC                 | TargetSpeed                 | Velocità corrente                                                                                | f     |                                                            
| _P                  | P                           | Correttore proporzionale                                                                         | i     |                                                            
| _I                  | I                           | Correttore integrativo                                                                           | i     |                                                            
| _D                  | D                           | Correttore derivativo                                                                            | i     |                                                            
|                     | Direction                   | direzione del movimento                                                                          | b     | false=direzione positiva, true=direzione negativa          
| _VCR                | RealSpeed                   | Velocità corrente reale                                                                          | f     |                                                            
|                     | RealPosWrapUp               | Conteggio wrap up lettura encoder                                                                | i     |                                                            
| _ACCINST            | Acceleration                | Valore di accelerazione istantanea                                                               | f     |                                                            
| _GONETIME           | GONETIME    ???             | Tempo trascorso dall'inizio del movimento                                                        | f     | sec (0 per assi slave e assi passo-passo)                  
| _GONESPACE          | GONESPACE    ???            | Spazio percorso dall'inizio del movimento                                                        | f     | Percentuale (100 per assi slave, assi coordinati, passo...)
| _RESSPACE           | RESSPACE    ???             | Spazio residuo alla fine del movimento                                                           | f     | Percentuale                                               
| _AXESJERK           | JerkEnable                  | Abilitazione controllo jerk                                                                      | b     | 1=controllo abilitato, 0=controllo non abilitato           
| _MOVETYPE           | MoveType                    | Tipo di movimento in cui è impegnato l'asse                                                      | i     | 0=nessun movimento, 1=interpolato classico, 4=punto-punto...
| _AXINRIFLOC         | CoordSystem                 | Asse in presa in sistema di riferimento locale                                                   | i     | 1=sì, 0=no                                                
| _QTARGETTOOL        | ToolTargetPosition          | Quota target asse (utensile)                                                                     | d     |                                                           
| _QREALTOOL          | ToolRealPosition            | Quota reale asse (utensile)                                                                      | d     |                                                           
| _BACKLASH           | Backlash                    | Valore del gioco meccanico definito per l'asse                                                   | d     |                                                           
| _DISABLED           | Disabled                    | Disabilitazione di un asse                                                                       | b     | 1=asse disabilitato, 0=asse abilitato                     
| _DYNLIMIT           | DynamicPositionLimitEnabled | Abilitazione controllo dinamico limiti asse                                                      | b     | 1=controllo abilitato, 0=controllo non abilitato          
| _AXESFEED           | Feedrate                    | Valore di feedrate override                                                                      | f     |                                                           
| _CORRLIN            | CorrectorsType              | Tipo correttore di linearità in uso                                                              | i     | Maschera di bit: 0=nessun correttore in uso               
| _VELISO             | IsoToolMaxSpeed             | Velocità punta utensile 5 assi                                                                   | f     |                                                           
|                     | EncoderPulses               | lettura encoder                                                                                  | i     |
| _CURRATIO           | ChainRatio                  | valore del rapporto di concatenamento correntemente in uso                                       | d     |       
| _DYNRATIO           | ChangingRatio               | ritorna, se è in atto un cambio dinamico di rapporto di concatenamento                           | i     | 0=no, 1 = sì 
| _SWITCHENC          | SwitchEncMode               | monitora se è in atto lo scambio encoder                                                         | i     | -1=l'asse non usa l'istruzione SWITCHENC, 0=è stata eseguita una istruzione SWITCHENC, ma l'asse sta utilizzando il suo encoder, 1= è stata eseguita una istruzione SWITCHENC  e l'asse sta utilizzando l'encoder dell'asse di conteggio 
| _QOFSENC            | OffsetEncoder               | valore dell'offset encoder                                                                       | d     |    
| _RAMPSHAPE          | RampShape                   | restituisce la percentuale di smoothing in uso per i movimenti punto-punto                       | i     | 0% - 100% 
| _RAMPSHAPEI         | InterpRampShape             | restituisce la percentuale di smoothing in uso per i movimenti interpolati                       | i     |  0% - 100% 
| _ISOMOVETYPE        | IsoMoveType                 | Tipo di movimento ISO in esecuzione                                                              | i     | 0=movimento ISO rapido, 1 = movimento ISO interpolato, -1 = altro 
| _QMAINENC           | MotorEncoder                | Quota reale dell’encoder principale quando è in uso l’encoder secondario                         | d     |
|                     | InterpBlockIndex            | Indice del tratto di interpolazione in esecuzione                                                | i     | 0 = inizio di una nuova sequenza  di tratti di interpolazione, -1 = l'asse non sta eseguendo un movimento interpolato 
|                     | InterpBlockLabel            | Etichetta (_label_) del tratto di interpolazione in esecuzione                                   | i     | -1 = se l'etichetta non è stata assegnata o l'asse non sta eseguendo un movimento interpolato 