function cssVar(parts, priority) {
  if (priority) return priority;
  if (parts.length === 1) return `var(--${parts[0]})`;
  return `var(--${parts[0]}, ${cssVar(parts.slice(1))})`;
}

function mkSkin(main, type = 'theme', {bg, fg, border} = {}) {
  switch (type) {
    case 'theme':
      return {
        color: cssVar([`${main}-inverse`], fg),
        backgroundColor: cssVar([`${main}-color`], bg),
        borderColor: cssVar([`${main}-border`, `${main}`], border)
      };
    case 'clear':
      return {
        color: cssVar([`${main}-color`], fg),
        backgroundColor: cssVar(['transparent'], bg),
        borderColor: cssVar([`${main}-color`], border)
      };
    case 'dark':
      return {
        color: cssVar([`${main}-dark`, 'dark-color'], fg),
        backgroundColor: cssVar([`${main}-color`], bg),
        borderColor: cssVar([`${main}-dark`, 'dark-color'], border)
      };
    case 'light':
      return {
        color: cssVar([`${main}-light`, 'light-color'], fg),
        backgroundColor: cssVar([[`${main}-color`]], bg),
        borderColor: cssVar([`${main}-light`, 'light-color'], border)
      };
  }
}

export default mkSkin;
