import { loadImage } from './loadImage.js';
import { metaDataProvider } from './metaData/index.js';

export default function (cornerstone) {
  // register dicomweb and wadouri image loader prefixes
  cornerstone.registerImageLoader('dicomweb', loadImage);
  cornerstone.registerImageLoader('wadouri', loadImage);
  cornerstone.registerImageLoader('dicomfile', loadImage);
  cornerstone.registerImageLoader('dicombuffer', loadImage);

  // add wadouri metadata provider
  cornerstone.metaData.addProvider(metaDataProvider);
}
