const config = {
        projectName: 'miniapp',
        assetSizeLimit: 2000000,
        date: '2022-5-7',
        designWidth: 375,
        deviceRatio: {
          640: 2.34 / 2,
          750: 1,
          828: 1.81 / 2
        },
        sourceRoot: 'src',
        outputRoot: 'dist',
        plugins: ['@tarojs/plugin-html'],
        alias: {
          '@tarojs/components$': '@tarojs/components/dist-h5/react',
          '@tarojs/taro': '@tarojs/taro-h5'
        },
        sass: {
          data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`,
        },
        defineConstants: {},
        copy: {
          patterns: [],
          options: {}
        },
        framework: 'react',
        mini: {
          webpackChain(chain, webpack) {
            chain.optimization.splitChunks({
              chunks: "all",
              maxInitialRequests: Infinity,
              minSize: 0,
              cacheGroups: {
                common: {
                  name: "common",
                  minChunks: 2,
                  priority: 1,
                },
                vendors: {
                  name: "vendors",
                  minChunks: 2,
                  test: (module) => {
                    return /[\/]node_modules[\/]/.test(module.resource);
                  },
                  priority: 10,
                },
                // taro: {
                //   name: 'taro',
                //   test: (module) => {
                //     if (/@tarojs[\/][a-z]+/.test(module.context)) {
                //       console.log(module.context)
                //     }
                //     return /@tarojs[\/][a-z]+/.test(module.context)
                //   },
                //   priority: 100,
                // },
              },
            });
          },
          postcss: {
            pxtransform: {
              enable: true,
              // 包含 nut- 的类名选择器中的 px 单位不会被解析
              config: { selectorBlackList: ["nut-"] },
            },
            url: {
              enable: true,
              config: {
                limit: 1024 // 设定转换尺寸上限
              }
            },
            cssModules: {
              enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
              config: {
                namingPattern: 'module', // 转换模式，取值为 global/module
                generateScopedName: '[name]__[local]___[hash:base64:5]'
              }
            }
          }
        },
        h5: {
          publicPath: '/',
          staticDirectory: 'static',
          postcss: {
            pxtransform: {
              enable: true,
              // 包含 nut- 的类名选择器中的 px 单位不会被解析
              config: { selectorBlackList: ['nut-'] },
            },
            autoprefixer: {
              enable: true,
              config: {},
            },
            cssModules: {
              enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
              config: {
                namingPattern: 'module', // 转换模式，取值为 global/module
                generateScopedName: '[name]__[local]___[hash:base64:5]',
              },
            },
            // 自定义 Webpack 配置
            devServer: {},
          }
        }
      }
      
      module.exports = function (merge) {
        if (process.env.NODE_ENV === 'development') {
          return merge({}, config, require('./dev'))
        }
        return merge({}, config, require('./prod'))
      }
      
    