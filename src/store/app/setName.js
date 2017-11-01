export default function (app, payload) {
  return Object.assign({}, app, {name: payload.name});
}