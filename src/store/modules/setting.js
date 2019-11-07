

const setting = {
  state: {
    // 主题
    theme: localStorage.getItem('theme') || '#373737',
    // 是否折叠侧边菜单
    sideCollapse: localStorage.getItem('sideCollapse') ? !!+localStorage.getItem('sideCollapse') : false, // Boolean(Number('1'))
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
      localStorage.setItem('theme', theme);
    },
    SET_SIDE_COLLAPSE(state, collapse) {
      state.sideCollapse = collapse;
      localStorage.setItem('sideCollapse', collapse ? 1 : 0);
    },
  }
}
export default setting;