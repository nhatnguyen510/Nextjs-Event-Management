import ListOfEvents from "@/../fake-events.json";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const events = ListOfEvents.events;
const agencies = ListOfEvents.agencies;

export type Event = ArrayElement<typeof events>;
export type Agency = ArrayElement<typeof agencies>;
