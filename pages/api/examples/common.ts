import { pipe } from 'fp-ts/lib/pipeable'
import * as A from 'fp-ts/lib/Array'
import * as NA from 'fp-ts/lib/NonEmptyArray'

import { execQuery } from '../utils'
import { DownStep } from '../../../components/pure/utils/common/common'
import { Particle } from '../../../components/pure/accentWord/container'
import { cons } from 'fp-ts/lib/ReadonlyArray'

export type Example = {
    audioFile: string
    downStep: DownStep
    particle: Particle
    katakana: string
    sentence: string
}

export const chunks: Example[][] = pipe(
    execQuery('./queries/examples.sql'),
    NA.groupBy((r) => r.katakana),
    (x) => Object.values(x),
    A.flatten,
    A.chunksOf(5),
)

// TODO cant just add a particle for the example sentences willy nilly, sometimes the next thing is another word e.g lookup 琴瑟相和す
