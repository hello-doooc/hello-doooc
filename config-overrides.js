const path = require('path')
const {
    override,
    fixBabelImports,
    addWebpackResolve,
    addWebpackAlias
}=require('customize-cra')

module.exports=override(
    //按需加载
    fixBabelImports('import',{
        libraryName:'antd',
        style:'css'
    }),
    addWebpackResolve({
        extensions:['.js','.json','.jsx']
    }),
    // 给文件夹起别名
    addWebpackAlias({
        "@":path.resolve(__dirname,'src/'),
        "@a":path.resolve(__dirname,'src/assets'),
        "@c":path.resolve(__dirname,'src/components'),
        "@s":path.resolve(__dirname,'src/self')
    })
)