export const configurations = [
  {
    title: 'Empty Accessory',
    description: '',
    config: {
      c: {},
      a: []
    }
  },

  {
    title: 'Sonoff Standard Switch',
    description: 'Sonoff Basic/SV/Mini/TH/POW Standard Switch',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }]
        }
      ]
    }
  },

  {
    title: 'Sonoff - external toggle',
    description:
      'Sonoff Basic Switch with external toggle connected to GPIO 14',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }, { g: 14 }, { g: 14, t: 0 }]
        }
      ]
    }
  },

  {
    title: 'Sonoff Mini - setup mode',
    description:
      'Sonoff Mini with external toggle and built-in button configure to enter in setup mode when hold it',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }, { g: 4 }, { g: 4, t: 0 }]
        }
      ]
    }
  },

  {
    title: 'Shelly1 Switch - external toggle',
    description:
      'Shelly1 Switch with external toggle. Note that "t":1 is not present because is the default option',

    config: {
      a: [
        {
          '0': { r: [{ g: 4 }] },
          '1': { r: [{ g: 4, v: 1 }] },
          b: [{ g: 5, p: 0 }, { g: 5, t: 0 }]
        }
      ]
    }
  },

  {
    title: 'Shelly2.5 Switch - status LED',
    description: 'Shelly2.5 Switch with external toggles and status LED',

    config: {
      c: { l: 0, b: [{ g: 2, p: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 15 }] },
          '1': { r: [{ g: 15, v: 1 }] },
          b: [{ g: 5, p: 0 }, { g: 5, t: 0 }]
        },
        {
          '0': { r: [{ g: 4 }] },
          '1': { r: [{ g: 4, v: 1 }] },
          b: [{ g: 13, p: 0 }, { g: 13, t: 0 }]
        }
      ]
    }
  },

  {
    title: 'Sonoff S20/S26 - without UART',
    description:
      'Sonoff S20/S26 without UART output, with status LED and working button',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          t: 2,
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }]
        }
      ]
    }
  },

  {
    title: 'Tuya SWA1 - esp8266 plug',
    description: 'Tuya SWA1 with esp8266 Smart plug',

    config: {
      c: { l: 4, b: [{ g: 13, t: 5 }] },
      a: [
        {
          t: 2,
          '0': { r: [{ g: 5 }] },
          '1': { r: [{ g: 5, v: 1 }] },
          b: [{ g: 13 }]
        }
      ]
    }
  },

  {
    title: 'Stateless Button',
    description: 'A standard Stateless Button using GPIO0',

    config: {
      c: { b: [{ g: 0, t: 5 }] },
      a: [
        {
          t: 3,
          f0: [{ g: 0 }],
          f1: [{ g: 0, t: 2 }],
          f2: [{ g: 0, t: 3 }]
        }
      ]
    }
  },

  {
    title: 'Two Stateless Buttons',
    description:
      'Two Stateless Buttons using GPIO0 and GPIO2, and a dummy switch, ideal for ESP01',

    config: {
      c: { b: [{ g: 0, t: 5 }] },
      a: [
        {
          t: 3,
          f0: [{ g: 0 }],
          f1: [{ g: 0, t: 2 }],
          f2: [{ g: 0, t: 3 }]
        },
        {
          t: 3,
          f0: [{ g: 2 }],
          f1: [{ g: 2, t: 2 }],
          f2: [{ g: 2, t: 3 }]
        },
        { t: 1 }
      ]
    }
  },
  {
    title: 'Sonoff 4CH',
    description:
      'Sonoff 4CH. It creates 4 HomeKit switches, and GPIO 0 button can be used to enter in setup mode when you press it and hold more that 10 seconds (for the first 30 seconds since boot)',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 15 }] },
          '1': { r: [{ g: 15, v: 1 }] },
          b: [{ g: 14 }]
        },
        {
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }]
        },
        {
          '0': { r: [{ g: 5 }] },
          '1': { r: [{ g: 5, v: 1 }] },
          b: [{ g: 9 }]
        },
        {
          '0': { r: [{ g: 4 }] },
          '1': { r: [{ g: 4, v: 1 }] },
          b: [{ g: 10 }]
        }
      ]
    }
  },
  {
    title: 'Sonoff - Motion Sensor - status LED',
    description:
      'Sonoff Basic with Switch and Motion Sensor connected to GPIO 14, with status LED, and button to enter "setup mode"',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }, { g: 14 }, { g: 14, t: 0 }]
        }
      ]
    }
  },
  {
    title: 'Sonoff T2 EU 3 gangs',
    description: 'Sonoff T2 EU 3 gangs',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }]
        },
        {
          '0': { r: [{ g: 5 }] },
          '1': { r: [{ g: 5, v: 1 }] },
          b: [{ g: 9 }]
        },
        {
          '0': { r: [{ g: 4 }] },
          '1': { r: [{ g: 4, v: 1 }] },
          b: [{ g: 10 }]
        }
      ]
    }
  },

  {
    title: 'Sonoff - Heater Thermostat DHT22',
    description:
      'Sonoff Basic/SV/TH10/TH16 Heater Thermostat with DHT22 sensor at GPIO 14',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          t: 21,
          s: 5,
          g: 14,
          '0': { r: [{ g: 12 }] },
          '1': { a: 0 },
          '3': { r: [{ g: 12, v: 1 }] },
          '5': { a: 0 }
        }
      ]
    }
  },

  {
    title: 'Sonoff - Switch & Temperature DS18B20',
    description:
      'Sonoff Basic/SV/TH10/TH16 HomeKit Switch and Temperature with DS18B20 sensor at GPIO 14',

    config: {
      c: { l: 13, b: [{ g: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }]
        },
        { t: 22, g: 14, n: 3 }
      ]
    }
  },

  {
    title: 'Shelly RGBW2',
    description: 'Shelly RGBW2 with external switch',

    config: {
      a: [
        {
          t: 30,
          r: 15,
          g: 12,
          v: 14,
          w: 4,
          b: [{ g: 5, p: 0 }, { g: 5, t: 0 }]
        }
      ]
    }
  },

  {
    title: 'Bawoo Lightbulb',
    description: 'Bawoo Lightbulb',

    config: {
      c: { b: [{ g: 0 }] },
      a: [{ t: 30, r: 14, g: 12, v: 13, w: 4, fr: 4, fg: 4, fv: 4 }]
    }
  },

  {
    title: 'MagicHome RGBW LED Strip',
    description:
      'MagicHome RGBW LED Strip Controller (R pin 15, G pin 13, B pin 12, W pin 14)',

    config: {
      c: { b: [{ g: 0, t: 5 }] },
      a: [{ t: 30, r: 15, g: 13, v: 12, w: 14, b: [{ g: 0 }] }]
    }
  },

  {
    title: 'MagicHome RGB LED Strip',
    description:
      'MagicHome RGB LED Strip Controller (R pin 15, G pin 13, B pin 12)',
    config: {
      c: { b: [{ g: 0, t: 5 }] },
      a: [{ t: 30, r: 15, g: 13, v: 12, b: [{ g: 0 }] }]
    }
  }
]
