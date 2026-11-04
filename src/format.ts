import { localize } from "./localize";

/**
 * Minutes from now until `timestamp`, rounded down the way a station clock
 * counts: 0 while the departure is less than a minute away, negative once it
 * has passed.
 *
 * The sensor's own minute counts are computed when the coordinator polls and
 * then stand still, while this card re-renders every ten seconds — so counting
 * from the timestamp keeps the countdown moving between polls (issue #17).
 * Without a usable timestamp (an older integration) the fallback is returned.
 */
export function minutesUntil(timestamp: string | null | undefined, fallback: number): number {
  if (timestamp) {
    const at = Date.parse(timestamp);
    if (!Number.isNaN(at)) {
      return Math.floor((at - Date.now()) / 60000);
    }
  }
  return fallback;
}

/**
 * A countdown in words: "now", "in 1 min", "in 24 min", and from an hour on
 * "in 2 h 46 min" or "in 3 h" — a bare "in 166 min" has to be divided by 60
 * before it means anything (issue #22).
 */
export function formatCountdown(lang: string, mins: number): string {
  if (mins <= 0) return localize(lang, "now");
  if (mins === 1) return localize(lang, "in_1_min");
  if (mins < 60) return localize(lang, "in_min", { min: mins });
  const h = Math.floor(mins / 60);
  const min = mins % 60;
  return min ? localize(lang, "in_h_min", { h, min }) : localize(lang, "in_h", { h });
}

/** The compact chips' short form: 24', and from an hour on 2h 46' or 3h. */
export function formatCountdownShort(lang: string, mins: number): string {
  if (mins <= 0) return localize(lang, "now");
  if (mins < 60) return `${mins}'`;
  const h = Math.floor(mins / 60);
  const min = mins % 60;
  return min ? `${h}h ${min}'` : `${h}h`;
}

/**
 * How long ago `timestamp` was, in the viewer's language and with its plurals:
 * "20 seconds ago", "vor 8 Minuten". Seconds below a minute, minutes below an
 * hour, hours after that. Returns null when there is no usable timestamp, so a
 * caller shows nothing rather than an age it does not know (issue #18).
 */
export function formatAge(lang: string, timestamp: string | null | undefined): string | null {
  if (!timestamp) return null;
  const at = Date.parse(timestamp);
  if (Number.isNaN(at)) return null;

  // A clock a little ahead of the server's must not read as "in 3 seconds".
  const seconds = Math.max(0, Math.round((Date.now() - at) / 1000));
  const [value, unit]: [number, Intl.RelativeTimeFormatUnit] =
    seconds < 60
      ? [seconds, "second"]
      : seconds < 3600
        ? [Math.floor(seconds / 60), "minute"]
        : [Math.floor(seconds / 3600), "hour"];

  try {
    return new Intl.RelativeTimeFormat(lang || "en", { numeric: "always" }).format(-value, unit);
  } catch {
    const short = unit === "second" ? "s" : unit === "minute" ? "min" : "h";
    return `${value} ${short}`;
  }
}
