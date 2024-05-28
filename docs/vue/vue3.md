# Vue 3 的新特性

Vue 3 相对于 Vue 2 来说有如下新特性：

1. 更简洁的 API：Vue 3 移除了一些过时的 API，并且对其他 API 进行了重构，使其更加简洁和易用。

2. 更优的性能：Vue 3 使用了新的虚拟节点（vNode）和组件代理（composition-api）技术，这使得组件的创建和更新更加高效。

3. 更灵活的响应式：Vue 3 使用了新的响应式引擎（reactive API）和 `setup` 函数，使得响应式系统的使用更加灵活和可扩展。

4. 更透明的组件通信：Vue 3 引入了 `provide` 和 `inject` 函数，使得在组件之间的通信变得更加透明和简单。

5. 更易于测试：Vue 3 引入了 `createTestContext` 和 `createTestBrowserEnv` 函数，为单元测试提供了更好的支持。

6. 以及其他一些新特性，如事件处理和生命周期钩子等。

# Vue 3 的安装和使用

要使用 Vue 3，首先需要确保已经安装了 Vue 3 的相关依赖。可以使用以下命令安装：

```bash
npm install -g @vue/cli
vue create my-project
cd my-project
```

接下来，可以使用 `createApp` 函数来创建 Vue 应用程序。例如：

```javascript
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 挂载组件
app.component('HelloWorld', HelloWorld)

// 创建并运行应用程序
app.mount('#app')
```

在 Vue 3 中，组件的编写方式发生了变化。可以使用 `setup` 函数来组织组件的逻辑，使代码更加清晰。例如：

```javascript
// 导出组件的属性，用于模板
export default {
  props: {
    msg: String
  },

// 使用 setup 函数组织组件逻辑
export default {
  setup() {
    const msg = $props.msg
    const count = $ref(0)

    // 定义一个方法，用于增加计数
    function increment() {
      count.$value++
    }

    // 返回组件所需的数据和方法
    return {
      msg,
      count,
      increment
    }
  }
}
```

最后，确保在 `main.js` 文件中导出 Vue 应用程序实例，并在 HTML 文件中进行挂载。例如：

```javascript
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')

export default app
```

这样，你就成功使用 Vue 3 创建了一个简单的应用程序。
