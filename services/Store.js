const Store = {
  menu: null,
  cart: [],
};

const StoreProxy = new Proxy(Store, {
  set(target, prop, value) {
    target[prop] = value;
    // emit a menu data change event when store menu data is changed
    if (prop === "menu") {
      const appMenuDataChangeEvent = new Event("appmenuchange");
      window.dispatchEvent(appMenuDataChangeEvent);
    }
    return true;
  },
});

export default StoreProxy;
