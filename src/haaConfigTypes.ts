export interface generalConfig {
  /**
   * [0-default,1] UART output log
   */
  o?: 0 | 1;

  /**
   * status LED pin
   */
  l?: number;

  /**
   * [0-default,1] status LED inverted
   */
  i?: 0 | 1;

  /**
   * filter
   * Set filter parameter from 10 (soft) to 210 (hard) to avoid interferences. This is applied to all buttons.
   */
  f?: number;

  /**
   * Time in seconds to allow to enter into Setup Mode
   */
  m?: number;

  /**
   * [0,1-default] Enable Homekit
   */
  h?: 0 | 1;
}

export interface digitalOutputConfig {
  /**
   * GPIO output number
   */
  g: number;

  /**
   * [0-default,1] 0 - active hight, 1 - active low
   */
  v?: 1 | 0;

  /**
   *  value in seconds to reset output
   */
  i?: number;
}

export interface actionConfig {
  /**
   * relays to control
   */
  r: digitalOutputConfig[];
}

export interface digitalInputConfig {
  /**
   * GPIO input number
   */
  g: number;

  /**
   * [0,default-1] enable internal pullup resistor
   */
  p?: 1 | 0;

  /**
   * [0-default,1] button inverted
   */
  i?: 0 | 1;

  /**
   *  button type
   *
   * 0: Single press, opposite to 1.
   * 1: Default. Single press.
   * 2: Double press.
   * 3: Long press.
   * 4: Very long press.
   * 5: Hold press.
   */
  t: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface baseAccessoryConfig {
  /**
   * Acessory type
   *
   * 1: Switch
   * 2: Outlet
   */
  t:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 20
    | 21
    | 22
    | 23
    | 24
    | 30
    | 40;

  b: Array<digitalInputConfig>;

  i?: number;

  w?: 0 | 1 | 2 | 3;

  d?: number;
}

export interface baseTwoStateAccessoryConfig extends baseAccessoryConfig {
  /**
   * "0": Default - OFF.
   * "1": ON.
   * "4": Defined by fixed inputs.
   * "5": Last state.
   * "6": Opposite to last state.
   */
  s?: 0 | 1 | 4 | 5 | 6;

  0?: actionConfig;
  1?: actionConfig;

  /**
   * Buttons to set state 0
   */
  f0?: Array<digitalInputConfig>;

  /**
   * Buttons to set state 1
   */
  f1?: Array<digitalInputConfig>;
}
export interface switchAccessoryConfig extends baseTwoStateAccessoryConfig {
  /**
   * Acessory type
   *
   * SWITCH
   */
  t: 1;
}

export interface outletAccessoryConfig extends baseTwoStateAccessoryConfig {
  /**
   * Acessory type
   *
   * OUTLET
   */
  t: 2;
}

export interface lockAccessoryConfig extends baseTwoStateAccessoryConfig {
  /**
   * Acessory type
   *
   * LOCK
   */
  t: 4;
}

export interface haaConfig {
  c: generalConfig;
  a: Array<switchAccessoryConfig>;
}
