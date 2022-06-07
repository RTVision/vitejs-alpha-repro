import LocalForage from "./LocalForage";

self.onmessage = async (e) => {
  try {
    const data = JSON.parse(e.data);
    await LocalForage.setItem(data.key, data.payload);
    self.postMessage(true);
  } catch (e) {
    self.postMessage(e);
  }
};
