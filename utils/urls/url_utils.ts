export const buildURLS = (base_domain: string, params?: string): string => {
  if (!params) {
    return base_domain;
  }
  return `${base_domain}/${params}`;
};
