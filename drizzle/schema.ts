import { pgTable, index, uuid, text, varchar, integer, boolean, real, timestamp, foreignKey, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const severity = pgEnum("severity", ['critical', 'warning', 'good'])
export const verdict = pgEnum("verdict", ['needs_serious_help', 'rough_around_edges', 'decent_code', 'solid_work', 'exceptional'])


export const roasts = pgTable("roasts", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	code: text().notNull(),
	language: varchar({ length: 50 }).notNull(),
	lineCount: integer("line_count").notNull(),
	roastMode: boolean("roast_mode").default(false).notNull(),
	score: real().notNull(),
	verdict: verdict().notNull(),
	roastQuote: text("roast_quote"),
	suggestedFix: text("suggested_fix"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("roasts_score_idx").using("btree", table.score.asc().nullsLast().op("float4_ops")),
]);

export const analysisItems = pgTable("analysis_items", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	roastId: uuid("roast_id").notNull(),
	severity: severity().notNull(),
	title: varchar({ length: 200 }).notNull(),
	description: text().notNull(),
	order: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.roastId],
			foreignColumns: [roasts.id],
			name: "analysis_items_roast_id_roasts_id_fk"
		}).onDelete("cascade"),
]);
