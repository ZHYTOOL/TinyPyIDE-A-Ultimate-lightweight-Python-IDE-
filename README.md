

# TinyPy IDE

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="版本">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="许可证">
  <img src="https://img.shields.io/badge/Python-3.6%2B-brightgreen" alt="Python">
</p>

<p align="center">
  极致轻量的 Python IDE，如记事本般的打开速度，却拥有错误检查与代码补全功能。
</p>

<p align="center">
  <b>中文</b> | <a href="README_EN.md">English</a>
</p>

## 📖 项目简介

**TinyPy IDE** 是一款极致轻量的 Python 代码编辑器，它结合了 Web 前端的灵活性和 Python 后端的强大能力。使用 `pywebview` 构建桌面应用界面，`jedi` 提供代码分析功能，致力于为你带来**秒开**的编辑体验，同时满足日常编码所需的代码补全和基础错误检查。

## ✨ 核心特性

- ⚡ **极致轻量**：启动速度媲美记事本，资源占用极低
- 🔍 **智能补全**：基于 `jedi` 的实时代码补全，提升编码效率
- ⚠️ **错误检查**：语法错误实时显示红色波浪线
- 🎨 **语法高亮**：借助 `highlight.js`，支持清晰的代码高亮（Atom One Dark 主题）
- 🧩 **简洁界面**：包含菜单栏、编辑区（行号+代码区）、弹出菜单，布局清晰
- 🛠 **核心操作**：支持文件的新建/打开/保存、代码的撤销/重做、运行与调试基础功能

## 📁 项目结构

```
TinyPyIDE/
├── tinyPy/
│   ├── main.py           # 后端核心逻辑（API接口）
│   ├── mainEdit.js       # 前端交互逻辑
│   ├── mainPage.html     # 主界面结构
│   ├── highlight-min.js  # 代码高亮库
│   └── atom-one-dark.css # 语法高亮主题样式
├── README.md             # 中文文档
├── README_EN.md          # 英文文档
└── LICENSE               # MIT 许可证
```

### 核心模块说明

- **main.py**：后端 API 接口类 `Api`，提供文件操作、代码补全、错误检查、代码运行等核心功能
- **mainEdit.js**：前端 JavaScript 逻辑，处理编辑器交互、自动补全、错误显示等
- **mainPage.html**：基于 HTML5 的界面结构，包含工具栏、代码编辑区、弹出菜单等组件
- **highlight-min.js**：代码语法高亮核心库
- **atom-one-dark.css**：Atom 编辑器的 One Dark 主题样式

## 🚀 快速开始

### 环境要求

- Python 3.6 - 3.12
- 操作系统：Windows / macOS / Linux

### 安装与运行

```bash
# 克隆仓库
git clone https://gitee.com/Akalui/TinyPyIDE-A-Ultimate-lightweight-Python-IDE.git

# 进入项目目录
cd TinyPyIDE-A-Ultimate-lightweight-Python-IDE/tinyPy

# 安装依赖
pip install pywebview jedi

# 运行 TinyPy
python main.py
```

## 🖥️ 界面与操作指南

### 1. 界面布局

```
┌─────────────────────────────────────────────────────────┐
│  File  Edit  Run  Help                                  │  ← 菜单栏
├─────────────────────────────────────────────────────────┤
│  1   │ 代码编辑区（支持语法高亮和错误波浪线）             │  ← 行号+编辑区
│  2   │                                                  │
│  ... │                                                  │
│     │                                                  │
├─────────────────────────────────────────────────────────┤
│  状态栏                                                │
└─────────────────────────────────────────────────────────┘
```

### 2. 菜单功能

- **File**（文件操作）
  - 新建文件
  - 打开文件
  - 保存文件（自动添加 .py 后缀）
  
- **Edit**（编辑操作）
  - 撤销
  - 重做
  
- **Run**（运行调试）
  - 运行代码
  - 调试运行
  
- **Help**（帮助）
  - 库管理（安装第三方库）
  - 关于

### 3. 常用操作

| 操作 | 方法 |
|------|------|
| 保存文件 | File → Save，输入文件名（自动添加 .py 后缀） |
| 运行代码 | Run → Run Code |
| 调试运行 | Run → Run as Debug |
| 代码补全 | 输入时自动弹出，使用 ↑↓ 选择，Tab 确认 |
| 安装库 | Help → Library Management，输入库名下载 |

## 🛠️ 技术栈

- **前端技术**
  - HTML5 + CSS3
  - JavaScript (ES6+)
  - highlight.js - 代码语法高亮
  - Atom One Dark 主题
  
- **后端技术**
  - Python 3
  - pywebview - 轻量级桌面应用框架
  - jedi - Python 代码分析与补全引擎

- **核心机制**
  - pywebview 实现 Python 后端与 Web 前端的无缝桥接
  - jedi 在后端提供实时代码分析能力
  - RESTful API 风格的前后端通信

## 🔌 API 接口

后端 `Api` 类提供以下核心接口：

| 方法 | 功能描述 |
|------|----------|
| `view_file(data)` | 查看文件信息 |
| `read_file(data)` | 读取文件内容 |
| `complete(data)` | 代码自动补全 |
| `get_errors(data)` | 获取语法错误 |
| `run_code(filename)` | 运行 Python 代码 |
| `run_code_as_db(filename)` | 调试模式运行代码 |
| `save_file(name, data)` | 保存文件 |
| `save_file_basic(name, data)` | 基础保存功能 |
| `download_lib(name)` | 下载安装第三方库 |

## 🤝 贡献指南

TinyPy 还很年轻，非常欢迎你的参与！你可以通过以下方式贡献：

1. **提交 Issue**：报告你发现的 bug，或提出新功能建议
2. **提交 Pull Request**：改进代码、修复 bug、完善文档或优化界面
3. **分享体验**：在社区或社交平台分享你的使用体验，帮助项目推广

### 开发环境搭建

```bash
# 1. Fork 本仓库并克隆到本地
git clone https://gitee.com/你的用户名/TinyPyIDE-A-Ultimate-lightweight-Python-IDE.git

# 2. 进入项目目录
cd TinyPyIDE-A-Ultimate-lightweight-Python-IDE/tinyPy

# 3. 安装依赖
pip install pywebview jedi

# 4. 运行项目
python main.py

# 5. 提交前请确保代码风格简洁，必要时添加注释
```

## 📄 开源协议

本项目基于 MIT 协议开源，详情请参见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [pywebview](https://github.com/r0x0r/pywebview) - 提供了轻量级桌面应用解决方案
- [jedi](https://github.com/davidhalter/jedi) - 让 Python 代码补全变得简单而强大
- [highlight.js](https://highlightjs.org/) - 实现了美观的代码高亮
- [Atom Editor](https://atom.io/) - One Dark 主题设计灵感来源

---

> TinyPy 还很年轻，但它已经准备好陪你一起写代码了。试试看，享受轻量开发的乐趣吧！
