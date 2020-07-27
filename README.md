# locationtracker.space

## What

An online serivce/android app to keep track of your location.

## Why

Because all other solutions are trash [1], but mainly for the heck of it. Here
are things that suck with the stock google maps/location history:

- Not open source
- Time resolution not configurable - does not accurately track bike rides/walks.

# How

## Android app

Minimal(ish) GUI. Background service pushes current location to
firebase backend (firestore).

### Tech

- Flutter
- ?

## Firebase backend

- Display location data from firestore using osm
- Some form of auto updating map for current location. Preferably
  embeddable in a blog / readthedocs / etc.
- Geofencing to fill a calendar view. Like in "When did I leave
  work last monday?".
- Custom triggers to enable iftt / zapier / etc. integration.

### Tech

- Firebase
- Svelte
- Run sapper as firebase function

# License

EUPL v. 1.2

see [LICENSE](./LICENSE)

[1] Not sure about this one, actually. Didn't do any research.
