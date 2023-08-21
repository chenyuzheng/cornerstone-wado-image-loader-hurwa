import {
  getImagePixelModule,
  getLUTs,
  getModalityLUTOutputPixelRepresentation,
  getNumberValues,
  metaDataProvider,
} from './metaData/index.js';

import dataSetCacheManager from './dataSetCacheManager.js';
import fileManager from './fileManager.js';
import dicomBufferManager from './dicomBufferManager.js';
import getEncapsulatedImageFrame from './getEncapsulatedImageFrame.js';
import getUncompressedImageFrame from './getUncompressedImageFrame.js';
import loadFileRequest from './loadFileRequest.js';
import loadBufferRequest from './loadBufferRequest';
import {
  loadImageFromPromise,
  getLoaderForScheme,
  loadImage,
} from './loadImage.js';
import parseImageId from './parseImageId.js';
import unpackBinaryFrame from './unpackBinaryFrame.js';
import register from './register.js';

const metaData = {
  getImagePixelModule,
  getLUTs,
  getModalityLUTOutputPixelRepresentation,
  getNumberValues,
  metaDataProvider,
};

export default {
  metaData,
  dataSetCacheManager,
  fileManager,
  dicomBufferManager,
  getEncapsulatedImageFrame,
  getUncompressedImageFrame,
  loadFileRequest,
  loadBufferRequest,
  loadImageFromPromise,
  getLoaderForScheme,
  loadImage,
  parseImageId,
  unpackBinaryFrame,
  register,
};
