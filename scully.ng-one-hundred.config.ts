import {
  NotionDom,
  NotionDomRouter,
  NotionPluginOptions,
} from '@notion-stuff/scully-plugin-notion';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

setPluginConfig(NotionDom, {
  notionBlocksHtmlParserOptions: {
    mdHighlightingOptions: 'prismjs',
  },
} as NotionPluginOptions);

export const config: ScullyConfig = {
  projectRoot: './apps/ng-one-hundred/src',
  projectName: 'ng-one-hundred',
  outDir: './dist/apps/ng-one-hundred-static',
  target: 'targets',
  routes: {
    '/day/:slug': {
      type: NotionDomRouter,
      postRenderers: [NotionDom],
      databaseId: '0bad59ebe1394e03885fdf79e235d5bc',
      basePath: '/day',
    },
  },
};
