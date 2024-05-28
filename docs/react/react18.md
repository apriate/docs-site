```
React 18 使用了新的 `@react/preset-react-18` 预设，它可以帮助你快速配置你的项目以使用 React 18。运行以下命令来创建一个新的 React 18 项目：
```

npx create-react-app my-app --preset react-18

```
这将创建一个名为 `my-app` 的新目录，并使用 React 18 预设进行配置。继续进入项目目录：
```

cd my-app

```

## 项目结构

项目结构如下：
```

my-app
├── public
│ ├── index.html
│ └── logo.png (可选的图标文件)
├── src
│ ├── App.js
│ ├── index.js
│ ├── assets
│ │ └── logo.png (与 public/logo.png 相同文件)
│ └── components
│ └── HelloWorld.js
├── tests
│ └── index.js
├── .gitignore
├── package.json
└── README.md

````

## 编写组件

在 `src/components` 目录下创建一个名为 `MyComponent.js` 的文件。在这个文件中，我们将编写一个简单的自定义组件：

```jsx
// src/components/MyComponent.js
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h2>我的自定义组件</h2>
      <p>Hello, World!</p>
    </div>
  );
};

export default MyComponent;
````

## 引入组件

在 `src/App.js` 文件中，引入并使用我们刚刚创建的 `MyComponent` 组件：

```jsx
// src/App.js
import React from 'react'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div>
      <h1>Hello React 18</h1>
      <MyComponent />
    </div>
  )
}

export default App
```

现在，你应该可以在浏览器中看到 `MyComponent` 组件。

## 添加 CSS

在 `src` 目录下创建一个名为 `App.css` 的文件，并添加一些基本的 CSS 样式：

```css
/* src/App.css */
.App {
  font-family: Arial, sans-serif;
}
```

然后，在 `App.js` 文件中引入并使用这个 CSS 文件：

```jsx
// src/App.js
import React from 'react'
import MyComponent from './components/MyComponent'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Hello React 18</h1>
      <MyComponent />
    </div>
  )
}

export default App
```

## 运行项目

在命令行中运行以下命令来启动开发服务器：

```
npm start
```

这将启动一个热重载服务器，你可以在浏览器中访问 `http://localhost:3000` 来查看你的 React 18 项目。

## 更新说明

以上就是在 React 18 中创建一个简单项目的方法。当然，还有许多其他特性和改进，但它们涉及到的技术可能需要更多的上下文。要了解更多关于 React 18 的信息，请参阅官方文档和 release notes。
