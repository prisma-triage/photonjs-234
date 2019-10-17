# Introduction

To reproduce

1. Run `ts-node-dev src/index.ts` in one terminal.
2. Run a heavy `prisma2 generate` (by un-commenting schema.prisma models) in `schema.prisma`

It restarts gracefully but never fails with a missing Photon error.
