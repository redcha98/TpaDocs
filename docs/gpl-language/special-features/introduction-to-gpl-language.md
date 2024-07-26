---
sidebar_position: 1
---

# Axis movement customization

Albatros system graphical interface allows to perform manual axis movements and provides a graphical tool for axis calibration.

Manual axis movement is performed by the manual movement control board, calibration may be performed by the calibration control board. Both can be accessed by the Diagnostic window and synoptic views.

In both cases axis movement is controlled by a set of GPL functions whose execution is hidden to the user.

The system has a predefined set of these functions which are adequate in most cases. However, it may be necessary to customize the functions, for instance, to define axis movement restrictions, depending on the machine status, or to manage auxiliary devices, like drive brakes.

Customisation is performed by creation of two GPL function for each axis: one for the manual movements and one for the calibration. These functions are optional, if the system finds them uses them, otherwise standard ones are used. Furthermore a partial customization of the movement functions is possible.

## Manual axis movement

The customized manual movement functions must respect the following rules:

- The function should be in the same sub-group which belongs to the reference axis

- Function name must be MoveAx#axis_name, where axis_name will be changed to the axis name as defined in Configuration. For instance X axis function name will be: MoveAx#X.

- The function must provide the following parameters:

  **1. Required action.** May be an absolute position movement, an incremental movement, a stop etc. Actions are identified by an integer number, the GPL compiler provides a predefined constant for each action:

  |              	|                                                                	|
|--------------	|----------------------------------------------------------------	|
| _MOVAXABS    	| absolute position movement                                     	|
| _MOVAXINC    	| incremental movement                                           	|
| _MOVAXSET    	| position setting                                               	|
| _MOVAXFREE   	| free status setting                                            	|
| _MOVAXNORMAL 	| normal status setting                                          	|
| _MOVAXEND    	| axis status reset after a movement (not used to stop the axis) 	|

  **2. Result.** Needed by the system to know whether the required action may be performed by the customized function. If the required action is not supported, the corresponding standard function is used. So this is a return value that the customized function has to set, therefore it is defined as a "by reference" parameter (one element array).

  **3.Speed.** Meaningful only when the required action is a movement, it is the required movement speed.

  **4.Position.** Meaningful only for movement and position setting actions.


*Custom axis movement function example:*

```code
Function MoveAx#X

 param        action as integer
 param        result[1] as integer
 param        speed as float
 param        position as double

 setval        1,result[1]

 select action

 case _MOVAXEND
         fcall        EndMovement
 case _MOVAXABS
         fcall        AbsMovement X, speed, position
 case _MOVAXINC
         fcall        IncMovement X, speed, position
 case _MOVAXSET
         fcall        PositionSet X, position
 case _MOVAXFREE
         fcall        FreeAxis
 case _MOVAXNORMAL
         fcall        NormalAxis
 case else
         call        Unknown
 endselect
 fret

Unknown:

 setval        0, result[1]
 ret
```
 

The EndMovement, AbsMovement, etc. functions (the names are not compulsory) should implement the customized management of the required actions. To ease the programmer's job standard movement functions are provided as a guide to develop customized ones.

 

## Calibration

The customized calibration functions must respect the following rules:

- The function must belong to the same subgroup of the referred axis.

- Function name must be CalibAx#axis_name, where axis_name will be changed to the axis name as defined in Configuration. For instance X axis function name will be: CalibAx#X

- The function must provide the following parameters:

  **1. Required action.** May be a point-to-point movement or an interpolated movement.

  **2. Result.** Needed by the system to know whether the required action may be performed by the customized function. If the required action is not supported, the corresponding standard function is used.

  **3. Speed.** Calibration movement speed

  **4. Positive position.** Positive calibration movement position.

  **5. Negative position.** Negative calibration movement position.

  **6. Wait time.** Wait time between subsequent movements.

:::caution Note
Please keep in mind that in some cases actions performed on the calibration control board cause the execution of the axis movement function. For instance at the end of a calibration movement (when the stop button is pressed) an axis status reset is performed calling the customized axis movement function with the "required action" parameter set to _MOVAXEND. The same way when the axis position is modified in the calibration control board the axis movement function is called with the "required action" parameter set to _MOVAXSET.
:::
 
*Custom axis calibration function example:*

 
```code
Function CalibAx#X
 param        action as integer
 param        result[1] as integer
 param        speed as float
 param        PosPosition as double
 param        NegPosition as double
 param        WaitTime as float

 setval        1,result[1]

 select action
 case _CALAXPP
    fcall        PPCalibration X, speed, PosPosition, NegPosition, _
        WaitTime

 case _CALAXINT
    fcall        IntCalibration X, speed, PosPosition, NegPosition, _
        WaitTime
 case else
    call        Unknown
 endselect

 fret

Unknown:
 setval        0, result[1]
 ret
```

The PPCalibration, IntCalibration etc. functions (the names are not compulsory) should implement the customized management of the required actions. To ease the programmer's job calibration standard functions are provided as a guide to develop customized ones.

 

## Interaction with the window of Manual axis movement

Functions for interaction with the window of manual axis movement should comply with the following specifications:

- The function must belong to the same subgroup of the referred axis.

- The function name should be MoveAx#axis_name#Action, where name_axis should be replaced with the axis name defined in the configuration and Action can assume one of the following definitions:

|          	|                                                                              	|
|----------	|------------------------------------------------------------------------------	|
| OPEN     	| indicates that the user has just opened the movement axis window             	|
| CLOSE    	| indicates that the user is going to close the movement axis window           	|
| ACTIVE   	| shows that the movement axis window is active                                	|
| INACTIVE 	| shows that the movement axis window is not active                            	|
| JOG      	| indicates that a shifting movement managed in runtime by the operator is set 	|
| STEP     	| indicates that a shifting movement with an predefined pitch is set           	|
| ABSOLUTE 	| indicates that a shifting movement with a determined position is set.        	|

For instance, if the axis handling window for X-axes has been opened, the function named  MoveAx#X#Open will be called.


## Modifying the Window of Manual axis movement

It is possible to add up to 4 buttons to the axis movement window. Some GPL functions with fixed name MoveAx#AxisName#BUTTONtext should be defined in the same sub-group where the concerned axis is defined. NameAxis represents the concerned axis name and test represents the test, that will be displayed on the button. The test can contain the character '&' to introduce a keyboard accelerator. If the test begins with a number between 1 and 4, this number is considered as the position where the button will be inserted in the axis movement window. The button test can be translated, if a DEFMSG with MOVEAX#BUTTONtest as identificator is introduced into the group where the axis is. Pressing the customized button includes the execution of the associated GPL function. Any exiting function delay or any check of function's run start are not executed.
