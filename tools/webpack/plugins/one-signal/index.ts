import { Compiler } from "webpack";
import { basename } from "path";
import { readFileSync } from "fs";

function createWebpackAsset(contents: string | Buffer) {
  const buffer = contents instanceof Buffer ? contents : Buffer.from(contents);

  return {
    source() {
      return buffer;
    },
    size() {
      return Buffer.byteLength(buffer);
    },
  };
}

function createOneSignalHTML(appId: string, injectManifest: boolean) {
  return `
${injectManifest ? '<link rel="manifest" href="/manifest.json" />' : ""}
<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
<script>
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "${appId}",
    });
  });
</script>
  `;
}

export interface OneSignalPluginOptions {
  appId: string;
  sdkFilePaths: string[];
  inject?: boolean;
  injectManifest?: boolean;
}

export class OneSignalPlugin {
  private options: OneSignalPluginOptions;

  public constructor(options: OneSignalPluginOptions) {
    this.options = Object.assign({ inject: true, injectManifest: true }, options);
  }

  public apply(compiler: Compiler) {
    compiler.hooks.make.tap("OneSignalPlugin", compilation => {
      this.options.sdkFilePaths.forEach(filePath => {
        compilation.assets[basename(filePath)] = createWebpackAsset(readFileSync(filePath));
      });

      const htmlHook = (compilation.hooks as any).htmlWebpackPluginBeforeHtmlProcessing;
      if (this.options.inject && htmlHook) {
        htmlHook.tapAsync("OneSignalPlugin", (htmlData, callback) => {
          htmlData.html = htmlData.html.replace(
            /(<\/head>)/i,
            createOneSignalHTML(this.options.appId, this.options.injectManifest) + "$&",
          );
          callback(null, htmlData);
        });
      }
    });
  }
}
