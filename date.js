// utils/date.js

export const formatTimestamp = (timestamp) => {
  if (!timestamp) return 'Sin fecha';
  return timestamp.seconds
    ? new Date(timestamp.seconds * 1000).toLocaleDateString()
    : timestamp;
};

export const formatFullDateTime = (timestamp) => {
  if (!timestamp) return 'Sin fecha';
  return timestamp.seconds
    ? new Date(timestamp.seconds * 1000).toLocaleString()
    : timestamp;
};
