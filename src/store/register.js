const instanceMap = new Map();

export function register(instance, mapStateToData, originData) {
  const $id = instance.$id;
  if (instanceMap.has($id)) {
    return;
  }
  instanceMap.set($id, { instance, mapStateToData, originData });
}

export function unregister(id) {
  instanceMap.delete(id);
}

export function getInstanceMap() {
  return instanceMap;
}
