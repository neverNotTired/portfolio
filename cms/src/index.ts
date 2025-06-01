import path from 'path';
import serve from 'koa-static';
import type { Strapi } from '@strapi/types/dist/core';

export default async ({ strapi }: { strapi: Strapi }) => {
  // Serve the admin panel manually from dist/build
  const buildPath = path.join(strapi.dirs.dist.root, 'build');

  strapi.server.use(serve(buildPath));
};
