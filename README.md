# Restaurant Menu

Explore restaurant menu generation in HTML format.

## Setup

On macOS install the [Nix package manager](https://nixos.org/nix/) using:

```
curl https://nixos.org/nix/install | sh
```

Install `nox` for convenient package search:
 
```
nix-env -i nox
```

Run the [`hugo`](https://gohugo.io/commands/hugo_server/) webserver,
which supports auto-reload on file change and open a browser looking at it:

```
nix-shell -p hugo
hugo server --bind 0.0.0.0 --contentDir .
open http://localhost:1313/
```

## Structure

### `index.html`

Loads the menu data and renders it as HTML.

### `db/*.js`

Defines a global `menu` constant, containing the menu details for a
specific restaurant.

### `main.js`

This script contains the startup logic for the page.

### `menu.css`

This contains common styles for the menus.

### `config.yaml`

Config file for the `hugo server`. It can be just empty.

### `lib/`

Contains the development version of JavaScript libraries downloaded
from CDNs. They can be updated via:

```
cd lib
curl -LO https://unpkg.com/react@16/umd/react.development.js
curl -LO https://unpkg.com/react-dom@16/umd/react-dom.development.js
curl -LO https://unpkg.com/babel-standalone@6.15.0/babel.min.js
```
