/**
 * Shared detection logic for OpenPublicTransport sensors.
 *
 * Single source of truth used by getStubConfig, getEntitySuggestion and the
 * config editor so all three agree on what counts as an OPT sensor and which
 * layout suits it.
 */
import { CardConfig, HomeAssistant } from "./types";

const OPT_PLATFORM = "openpublictransport";

/**
 * True if the entity is an OpenPublicTransport sensor.
 *
 * Prefers the entity registry platform (robust: still matches a trip sensor
 * that currently has no connection and therefore exposes no attributes), and
 * falls back to attribute detection when the registry is unavailable (older HA)
 * or the entity is not registered.
 */
export function isOptSensor(hass: HomeAssistant, entityId: string): boolean {
  if (!entityId.startsWith("sensor.")) return false;
  if (hass.entities?.[entityId]?.platform === OPT_PLATFORM) return true;
  const attrs = hass.states[entityId]?.attributes;
  if (!attrs) return false;
  return (
    Array.isArray(attrs["departures"]) ||
    Array.isArray(attrs["legs"]) ||
    attrs["departure"] !== undefined
  );
}

/** Filter a list of entity ids (or every state) down to OPT sensors. */
export function getOptEntities(hass: HomeAssistant, ids?: string[]): string[] {
  return (ids ?? Object.keys(hass.states)).filter((id) => isOptSensor(hass, id));
}

export type OptModel = "departures" | "trip" | "unknown";

/**
 * Classify an OPT sensor by the shape of its data.
 *
 * When the trip sensor currently has no connection it exposes no attributes,
 * so we fall back to entity_id / icon heuristics.
 */
export function detectModel(hass: HomeAssistant, entityId: string): OptModel {
  const attrs = hass.states[entityId]?.attributes ?? {};
  if (Array.isArray(attrs["departures"])) return "departures";
  if (
    Array.isArray(attrs["legs"]) ||
    attrs["departure"] !== undefined ||
    attrs["arrival"] !== undefined
  ) {
    return "trip";
  }
  if (/(^|[._-])trip([._-]|$)|_to_|journey|connection/i.test(entityId)) return "trip";
  if (attrs["icon"] === "mdi:routes") return "trip";
  return "unknown";
}

/** Best default layout for a detected model. */
export function layoutForModel(model: OptModel): CardConfig["layout"] {
  return model === "trip" ? "trip" : "table";
}
