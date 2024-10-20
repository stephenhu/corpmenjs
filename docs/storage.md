# storage

i don't want corpmen to require the registration of an account or access
some blob store on the web.  the game should work entirely in an
offline environment.  corpmen will also have a very simple web
server deploying static files only so no api's.

html5 localstorage can be used, but this is limited to 5M and also this
looks similar to a key value store.

since only player information needs to be persisted, this should periodically
be stored to localstorage which should persist even after the browser closes.

essentially a json structure should be overwritten each time.

* https://blog.openreplay.com/localstorage-vs-sessionstorage--a-comprehensive-comparison/
