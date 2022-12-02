
# MCVE to reproduce `url()` with sourced asset being prefixed with paths

Scenario:

- A loader emits the source of an asset (i.e. svg)
- The sass-loader takes the source of the .svg and prefix the souce with a relative path

```
background-image: url(..//%3Csvg%3E%3C/svg%3E);
```


# Run reproducer

```
$ npm install
$ npm run build
```
