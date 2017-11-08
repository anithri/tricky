export default function (user, payload) {
  return Object.assign({}, user, {name: 'Guest'});
}
