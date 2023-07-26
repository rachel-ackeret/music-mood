export function encodeQueryParams(params) {
    const encodedParams = Object.keys(params).map((key) => {
      const value = params[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    });
  
    return encodedParams.join('&');
}
