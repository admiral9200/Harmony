/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */

import { IMutation, IQuery } from "./schemas";

export * from "./schemas";

export type IQueryFilter<T extends keyof IQuery> = Pick<IQuery, T>;
export type IMutationFilter<T extends keyof IMutation> = Pick<IMutation, T>;
