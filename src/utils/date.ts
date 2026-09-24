export function formatBlogDate(
  dateValue?: string | Date | null,
  options?: {
    monthFormat?: 'long' | 'short';
    includeDay?: boolean;
  }
): string | null {
  if (!dateValue) return null;

  const monthNamesLong = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthNamesShort = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const monthFormat = options?.monthFormat ?? 'long';
  const monthNames = monthFormat === 'short' ? monthNamesShort : monthNamesLong;

  if (typeof dateValue === 'string') {
    const trimmed = dateValue.trim();

    // 1. Year and Month only: e.g. "2026-09" or "2026/09"
    const ymMatch = trimmed.match(/^(\d{4})[-/](\d{1,2})$/);
    if (ymMatch) {
      const year = ymMatch[1];
      const monthIdx = parseInt(ymMatch[2], 10) - 1;
      const monthName = monthNames[monthIdx] || '';
      return `${monthName}, ${year}`;
    }

    // 2. Year, Month, Day: e.g. "2026-09-24" or "2026/09/24"
    const ymdMatch = trimmed.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
    if (ymdMatch) {
      const year = ymdMatch[1];
      const monthIdx = parseInt(ymdMatch[2], 10) - 1;
      const day = parseInt(ymdMatch[3], 10);
      const monthName = monthNames[monthIdx] || '';
      if (options?.includeDay === false) {
        return `${monthName}, ${year}`;
      }
      return `${monthName} ${day}, ${year}`;
    }

    // 3. Year only: e.g. "2026"
    if (/^\d{4}$/.test(trimmed)) {
      return trimmed;
    }
  }

  // Fallback for Date instances:
  const d = dateValue instanceof Date ? dateValue : new Date(dateValue);
  if (isNaN(d.getTime())) return null;

  const year = d.getUTCFullYear();
  const monthName = monthNames[d.getUTCMonth()];
  const day = d.getUTCDate();

  return `${monthName} ${day}, ${year}`;
}
