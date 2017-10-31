export function before(app, action) {
  console.log('app@before',app, action)
}

export default function app(app = {name:"woot"}, action) {
  return app;
}

export function after(app, action) {
  console.log('app@after',app, action)
}
