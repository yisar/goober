export const addProxiedStyledProps = styledIn =>
  new Proxy(styledIn, {
    get: (styled, propName) => styled[propName] || styled(propName)
  });
