const osPrefix = 'os_';

// computed properties
var support = {
  [osPrefix + 'Windows']: isSupported('Windows'),
  [osPrefix + 'iOS']: isSupported('iOS'),
  [osPrefix + 'Android']: isSupported('Android'),
}

function isSupported(os) {
  return Math.random() >= 0.5;
}