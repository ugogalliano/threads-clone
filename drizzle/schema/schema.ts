import { relations } from 'drizzle-orm';
import {
  varchar,
  pgTable,
  serial,
  boolean,
  integer,
  primaryKey,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: varchar('id').primaryKey().unique(),
  username: varchar('username', { length: 256 }).unique(),
  name: varchar('name', { length: 256 }),
  bio: varchar('bio', { length: 1000 }),
  onboarded: boolean('onboarded').default(false),
});

export const threads = pgTable('threads', {
  id: serial('id').primaryKey().notNull(),
  createdAt: varchar('createdAt', { length: 256 }).unique().notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  image: varchar('image'),
  bio: varchar('bio', { length: 256 }),
  author: varchar('author')
    .notNull()
    .references(() => users.id),
  community: integer('community').references(() => communities.id),
});

export const communities = pgTable('communities', {
  id: integer('id').primaryKey().notNull(),
  username: varchar('username', { length: 256 }).unique().notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  image: varchar('image'),
  bio: varchar('bio', { length: 256 }),
  createdBy: integer('createdBy').notNull(),
});

export const usersCommunities = pgTable(
  'usersCommunities',
  {
    userId: varchar('userId')
      .notNull()
      .references(() => users.id),
    community: integer('community')
      .notNull()
      .references(() => communities.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.community] }),
  }),
);

export const usersRelations = relations(users, ({ many }) => ({
  threads: many(threads),
  usersCommunities: many(usersCommunities),
}));

export const communitiesRelations = relations(communities, ({ many }) => ({
  threads: many(threads),
  usersCommunities: many(usersCommunities),
}));

export const usersCommunitiesRelations = relations(
  usersCommunities,
  ({ one }) => ({
    community: one(communities, {
      fields: [usersCommunities.community],
      references: [communities.id],
    }),
    user: one(users, {
      fields: [usersCommunities.userId],
      references: [users.id],
    }),
  }),
);

export const threadsRelations = relations(threads, ({ one }) => ({
  author: one(users, {
    fields: [threads.author],
    references: [users.id],
  }),
  community: one(communities, {
    fields: [threads.community],
    references: [communities.id],
  }),
}));
