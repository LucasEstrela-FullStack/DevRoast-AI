import { relations } from "drizzle-orm/relations";
import { roasts, analysisItems } from "./schema";

export const analysisItemsRelations = relations(analysisItems, ({one}) => ({
	roast: one(roasts, {
		fields: [analysisItems.roastId],
		references: [roasts.id]
	}),
}));

export const roastsRelations = relations(roasts, ({many}) => ({
	analysisItems: many(analysisItems),
}));