let dicomBufferMap = {};
let imageIds = [];

/**
 * add
 * 向dicomBufferMap下标为“imageId”的元素赋值
 * @param {Object} imageId
 * @param {Object} dicomBuffer
 */
function add(imageId, dicomBuffer) {
  dicomBufferMap[`${imageId}`] = dicomBuffer;
  // return `dicombuffer:${fileIndex - 1}`;
}

/**
 * pushIndex
 * 向imageIds与dicomBufferMap追加元素
 * @param {Object} index
 */
function pushIndex(index) {
  let imageId = `dicombuffer:${index}`;
  const imageIdIndex = imageIds.push(imageId)
  dicomBufferMap[`${imageId}`] = undefined
  return imageIdIndex;
}

/**
 * get
 * 查找dicomBufferMap的元素
 * @param {Object} index
 */
function get(index) {
  return dicomBufferMap[`dicombuffer:${index}`];
}

function remove(index) {
  dicomBufferMap[`dicombuffer:${index}`] = undefined;
}

function purge() {
  dicomBufferMap = {};
}

function getImagesIds() {
  return imageIds;
}

function getDicomBufferMap() {
  return dicomBufferMap;
}

export default {
  add,
  pushIndex,
  get,
  remove,
  purge,
  getImagesIds,
  getDicomBufferMap,
};
