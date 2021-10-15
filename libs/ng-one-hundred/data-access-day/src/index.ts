import type { ScullyRoute } from '@scullyio/ng-lib';

export interface Day extends ScullyRoute {
  title: string;
  description: string;
  authors: string[];
  updatedAt: string;
  publishedAt: string;
}
