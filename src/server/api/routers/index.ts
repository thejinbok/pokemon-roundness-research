import { PokemonClient } from "pokenode-ts";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const indexRouter = createTRPCRouter({
  getPokemonByNationalNumber: publicProcedure
    .input(z.object({ nationalNumber: z.number() }))
    .query(async ({ input }) => {
    const pokeApi = new PokemonClient();

    return await pokeApi.getPokemonById(input.nationalNumber);
  }),
});
