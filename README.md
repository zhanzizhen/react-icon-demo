# react-icon-demo



svg icon的总体思路:
1. 就是不写死fill/stroke这些属性的值，把值交给currentColor去控制
2. 通过svg-sprite-loader来加载svg
3. 通过require.context来某个目录下的所有svg
4. 在dev条件下新建一个iconMarket的路由，这个路由展示了所有的icon，目的是为了方便对icon进行预览


问题list:

1. 在dev tools上修改shadow dom的fill/stroke属性，不会实时更新？  答：是的，需要刷新网页
2. svg fill和stroke有啥区别？  答：stroke是形容轮廓的颜色，fill是形容填充的颜色


