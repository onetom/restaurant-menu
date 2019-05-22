### Stable channel
# curl -sI https://nixos.org/channels/nixpkgs-19.03-darwin/nixexprs.tar.xz | awk '/Location:/ {print $2}'
# with import (builtins.fetchTarball "https://releases.nixos.org/nixpkgs/19.03-darwin/nixpkgs-darwin-19.03pre172679.a45bc208034/nixexprs.tar.xz") {};

### Unstable channel
# curl -sI https://nixos.org/channels/nixpkgs-unstable/nixexprs.tar.xz | awk '/Location:/ {print $2}'
with import (builtins.fetchTarball "https://releases.nixos.org/nixpkgs/nixpkgs-19.09pre180301.650a295621b/nixexprs.tar.xz") {};

### System channel
# with import <nixpkgs> {};

mkShell rec {
    buildInputs = [
        hugo
        nodejs-slim-12_x
    ];
}
