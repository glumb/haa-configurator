export const configurations = [
  {
    title: 'Empty Accessory',
    description: '',
    config: {
      c: {  },
      a: [
      ]
    }
  },
  {
    title: 'Shelly2.5',
    description: 'Shelly2.5 Switch with external toggles and status LED',
    config: {
      c: { l: 0, i: 1 },
      a: [
        {
          '0': { r: [{ g: 4 }] },
          '1': { r: [{ g: 4, v: 1 }] },
          b: [{ g: 13, p: 0 }, { g: 13, t: 0 }]
        },
        {
          '0': { r: [{ g: 15 }] },
          '1': { r: [{ g: 15, v: 1 }] },
          b: [{ g: 5, p: 0 }, { g: 5, t: 0 }]
        }
      ]
    }
  },
  {
    title: 'Sonoff Mini',
    description:
      'Sonoff Mini with external toggle and built-in button configure to enter in setup mode when hold it',
    config: {
      c: { l: 13, i: 1, b: [{ g: 0, t: 5 }] },
      a: [
        {
          '0': { r: [{ g: 12 }] },
          '1': { r: [{ g: 12, v: 1 }] },
          b: [{ g: 0 }, { g: 4 }, { g: 4, t: 0 }]
        }
      ]
    }
  }
]
