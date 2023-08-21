import parseImageId from './parseImageId.js';
import dicomBufferManager from './dicomBufferManager.js';

function loadBufferRequest(uri) {
  // console.log("loadBufferRequest")
  const parsedImageId = parseImageId(uri);
  const fileIndex = parseInt(parsedImageId.url, 10);
  const dicomBuffer = dicomBufferManager.get(fileIndex);

  return new Promise((resolve, reject) => {
    // console.log(dicomBuffer)
    if (typeof dicomBuffer == 'undefined') {
      // console.log("undefined")
      reject('dicomBuffer undefined');
    }
    resolve(dicomBuffer);
  });
}

export default loadBufferRequest;
