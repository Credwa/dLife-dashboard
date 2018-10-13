const toggleDrawer = (state, val) => {
  state.isDrawer = val;
};

const toggleActiveGraph = (state, { newKey, prevKey }) => {
  state.homeGraphs[prevKey].active = false;
  state.homeGraphs[newKey].active = true;
};

const toggleActiveAlertTable = (state, { newKey, prevKey }) => {
  state.alertPageData[prevKey].active = false;
  state.alertPageData[newKey].active = true;
};

module.exports = {
  toggleDrawer,
  toggleActiveGraph,
  toggleActiveAlertTable
};
