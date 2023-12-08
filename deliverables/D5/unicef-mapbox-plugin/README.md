# unicef-mapbox-plugin

This is the A unicef-mapbox Plugin Superset Chart Plugin.

### Usage

To build the plugin, run the following commands:

```
npm ci
npm run build
```

Alternatively, to run the plugin in development mode (=rebuilding whenever changes are made), start the dev server with the following command:

```
npm run dev
```
Note that one may get errors from `npm run build`, but those errors do not affect the actual building of the plugin. `npm` is a large package manager, and thus it yields irrelevant errors when trying to build the plugin. In case of version conflict errors with other tools under `npm`, it is recommended to use the `--force` flag, again due to the nature of `npm`.

To add the package to Superset, go to the `superset-frontend` subdirectory in your Superset source folder (assuming both the `unicef-mapbox-plugin` plugin and `superset` repos are in the same root directory) and run
```
npm i -S ../../unicef-mapbox-plugin
```

If your Superset plugin exists in the `superset-frontend` directory and you wish to resolve TypeScript errors about `@superset-ui/core` not being resolved correctly, add the following to your `tsconfig.json` file:

```
"references": [
  {
    "path": "../../packages/superset-ui-chart-controls"
  },
  {
    "path": "../../packages/superset-ui-core"
  }
]
```

You may also wish to add the following to the `include` array in `tsconfig.json` to make Superset types available to your plugin:

```
"../../types/**/*"
```

Finally, if you wish to ensure your plugin `tsconfig.json` is aligned with the root Superset project, you may add the following to your `tsconfig.json` file:

```
"extends": "../../tsconfig.json",
```

After this edit the `superset-frontend/src/visualizations/presets/MainPreset.js` and make the following changes:

```js
import { unicef-mapboxPlugin } from 'unicef-mapbox-plugin';
```

to import the plugin and later add the following to the array that's passed to the `plugins` property:
```js
new unicef-mapboxPlugin().configure({ key: 'ext-newunicef-mapbox' }),
```

After that the plugin should show up when you run Superset, e.g. the development server:

```
npm run dev-server
```

Here is a video showing what you can do with the plugin once you have it running: https://www.youtube.com/watch?v=L-OZWItipP8&ab_channel=WillJarvis-Cross
