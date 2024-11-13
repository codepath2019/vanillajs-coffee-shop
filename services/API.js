const API = {
  url: "/data/menu.json",
  // Question: when defined with arrow function instead of function keyword,
  // "this" is undefined. Why?
  fetchMenu: async function () {
    const result = await fetch(this.url);
    return result.json();
  },
};

export default API;
