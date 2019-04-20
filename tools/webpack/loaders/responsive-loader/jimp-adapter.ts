import * as jimp from "jimp";

export default (imagePath: string) => {
  const readImage = jimp.read(imagePath);

  return {
    metadata: () =>
      readImage.then(image => ({ width: image.bitmap.width, height: image.bitmap.height })),
    resize: ({
      width,
      mime,
      options,
    }: {
      width: number;
      mime: string;
      options: { background?: number; rotate?: string; quality: number };
    }): Promise<{ width: number; height: number; data: Buffer }> =>
      new Promise((resolve, reject) => {
        readImage.then(image => {
          const newImage = image
            .clone()
            .resize(width, jimp.AUTO)
            .quality(options.quality);

          if (options.background) {
            newImage.background(parseInt(options.background, 16));
          }

          newImage.rotate(parseInt(options.rotate || "0")).getBuffer(mime, function(err, data) {
            // eslint-disable-line func-names
            if (err) {
              reject(err);
            } else {
              resolve({
                data,
                width,
                height: this.bitmap.height,
              });
            }
          });
        });
      }),
  };
};
