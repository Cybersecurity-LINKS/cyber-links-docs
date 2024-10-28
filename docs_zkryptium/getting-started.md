---
sidebar_position: 3
---
# Getting Started

## Requirements

- [Rust](https://www.rust-lang.org/) (>= 1.65)
- [Cargo](https://doc.rust-lang.org/cargo/) (>= 1.65)
- The ZKryptium **CL03** implementation also depends on the [Rug crate](https://crates.io/crates/rug) which depends on GMP, MPFR and MPC libraries through the low-level FFI bindings in the [gmp-mpfr-sys crate](https://crates.io/crates/gmp-mpfr-sys), which needs some setup to build; the [gmp-mpfr-sys documentation](https://docs.rs/gmp-mpfr-sys/1.6.1/gmp_mpfr_sys/index.html) has some details on usage under [GNU/Linux](https://docs.rs/gmp-mpfr-sys/1.6.1/gmp_mpfr_sys/index.html#building-on-gnulinux), [macOS](https://docs.rs/gmp-mpfr-sys/1.6.1/gmp_mpfr_sys/index.html#building-on-macos) and [Windows](https://docs.rs/gmp-mpfr-sys/1.6.1/gmp_mpfr_sys/index.html#building-on-windows).



## Usage

#### BBS+:

```toml
[dependencies]
zkryptium = { version = "0.3.0", default-features = false, features = ["bbsplus"] }
```

#### CL2003:
- see the **requirements** above

```toml
[dependencies]
zkryptium = { version = "0.3.0", default-features = false, features = ["cl03"] }
```

## Examples

Take a look at the [examples](https://github.com/Cybersecurity-LINKS/ZKryptium/tree/main/examples).

You can run the example based on the [BBS+](https://identity.foundation/bbs-signature/draft-irtf-cfrg-bbs-signatures.html) Signature Scheme with:

```
cargo run --example bbsplus <ciphersuite>
```

#### Available Ciphersuites:
- BLS12-381-SHA-256
- BLS12-381-SHAKE-256

You can run the example based on the [CL2003](https://link.springer.com/chapter/10.1007/3-540-36413-7_20) Signature Scheme with:
```
cargo run --example cl03 <ciphersuite>
```
#### Available Ciphersuites:
- CL1024-SHA-256


## Test

To test the library you can launch the test vectors with:

```
cargo test
```