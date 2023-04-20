const PRESSURE_UNITS = 0.750062;

export const capitalizeFirstLetter = string => {
  if (!string) return "";

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getPressureMm = hPa => {
  return Math.round(hPa * PRESSURE_UNITS);
};

export const getTimes = seconds => {
  return new Date(seconds * 1000).toLocaleTimeString("ru-RU", {
    timeZone: "Atlantic/Reykjavik",
  });
};
