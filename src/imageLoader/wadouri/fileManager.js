let files = [];

function add(file, prefix = 'dicomfile') {
  const fileIndex = files.push(file);

  return `${prefix}:${fileIndex - 1}`;
}

function get(index) {
  return files[index];
}

function remove(index) {
  files[index] = undefined;
}

function purge() {
  files = [];
}

export default {
  add,
  get,
  remove,
  purge,
};
