//封装微信打开新窗口
export function openWin(url){
    wx.navigateTo({url:url})
}
//关闭当前页面，跳转到应用内的某个页面
export function redirectTo(url){
    wx.redirectTo({url:url})
}
//返回上一级窗口
//delta  返回页面数， 如果delta大于现有页面数，则返回至最上层即首页
export function backBeforeWin(){
    wx.navigateBack({delta:1})
}