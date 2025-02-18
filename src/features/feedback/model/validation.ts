import { z } from "zod";

export const schemaFeedback = z.object({
  subject: z.string(),
  text: z.string(),
  photo: z.string(),
});

export type SchemaFeedback = z.output<typeof schemaFeedback>;
