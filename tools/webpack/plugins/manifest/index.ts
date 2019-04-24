import { Compiler } from "webpack";
import favicons from "favicons";

export interface ManifestPluginOptions {
  logo: string;
  path?: string;
  appName: string;
  appShortName?: string;
  appDescription?: string;
  developerName?: string;
  developerURL?: string;
  dir?: string;
  lang?: string;
  background?: string;
  theme_color?: string;
  appleStatusBarStyle?: string;
  display?: string;
  orientation?: string;
  scope?: string;
  start_url?: string;
  version?: string;
  logging?: boolean;
  pixel_art?: boolean;
  loadManifestWithCredentials?: boolean;
  icons?: {
    android?: boolean;
    appleIcon?: boolean;
    appleStartup?: boolean;
    coast?: boolean;
    favicons?: boolean;
    firefox?: boolean;
    windows?: boolean;
    yandex?: boolean;
  };
  extraParameters?: {
    [param: string]: string | number;
  };
}

interface FaviconsAsset {
  name: string;
  contents: string | Buffer;
}

function createHTMLHandler(response) {
  return function handler(htmlData, callback) {
    htmlData.html = htmlData.html.replace(/(<\/head>)/i, response.html.join("\n") + '$&');
    callback(null, htmlData);
  };
}

export class ManifestPlugin {
  private pluginOptions: ManifestPluginOptions;

  public constructor(options: ManifestPluginOptions) {
    this.pluginOptions = options;
  }

  public apply(compiler: Compiler) {
    const { logo, extraParameters, ...configuration } = this.pluginOptions;

    compiler.hooks.make.tapAsync("CustomManifestPlugin", (compilation, callback) => {
      favicons(logo, configuration, (error, response) => {
        if (error) {
          return callback(error);
        }

        const assets = [].concat(response.files, response.images);

        assets.forEach((asset: FaviconsAsset) => {
          if (asset.name.endsWith("manifest.json")) {
            const properties = JSON.parse(asset.contents.toString());
            Object.assign(properties, extraParameters);
            asset.contents = JSON.stringify(properties);
          }

          compilation.assets[asset.name] = {
            source() {
              return asset.contents instanceof Buffer
                ? asset.contents
                : Buffer.from(asset.contents);
            },
            size() {
              return Buffer.byteLength(asset.contents);
            },
          };
        });

        (compilation.hooks as any).htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
          "CustomManifestPlugin",
          createHTMLHandler(response),
        );
        callback();
      });
    });
  }
}
