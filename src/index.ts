import { Photon } from '@generated/photon'
import uuid from 'uuid/v4'

const photon = new Photon()

async function main() {
  while (1) {
    const id = uuid()
    const data = await photon.users.create({
      data: {
        name: `alice${id}`,
        email: `alice${id}@prisma.io`,
      },
    })
    console.log({ data })
  }
}

main().finally(() => photon.disconnect())
