# Introduction

To reproduce

1. Run `ts-node-dev src/index.ts` in one terminal.
2. Run a heavy `prisma2 generate` (by un-commenting schema.prisma models) in `schema.prisma`

Observation: It restarts gracefully but never fails with a missing Photon error.

https://divyendu.s3-eu-west-1.amazonaws.com/photonjs-234.gif
