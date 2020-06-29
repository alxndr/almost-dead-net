const defaultStyleObj = {
  'background-color': '#222',
  color: 'white',
  padding: '0.1em 0.4em',
  'border-radius': '0.4em',
}

function transformStyleObject(styleObj) {
  return Object.entries(styleObj)
    .map(([prop, val]) => `${prop}:${val}`)
    .join(';')
}

export default class Logger {
  constructor(label, styleObj = {}) {
    this.label = label
    this.styleString = transformStyleObject({
      ...defaultStyleObj,
      ...styleObj,
    })
  }

  log(...messages) {
    console.log(`%c${this.label}`, this.styleString, ...messages)
  }
}
