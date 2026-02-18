# TinyPy IDE

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="版本">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="许可证">
  <img src="https://img.shields.io/badge/Python-3.6%2B-brightgreen" alt="Python">
  <img src="https://img.shields.io/github/stars/ZHYTOOL/TinyPyIDE-A-Ultimate-lightweight-Python-IDE-" alt="Stars">
</p>

<p align="center">
  极致轻量的 Python IDE，如记事本般的打开速度，却拥有错误检查与代码补全功能。
</p>

<p align="center">
  <b>中文</b> | <a href="README_EN.md">English</a>
</p>

## 📖 项目简介

**TinyPy IDE** 是一款极致轻量的 Python 代码编辑器，它结合了 Web 前端的灵活性和 Python 后端的强大能力。使用 `pywebview` 构建界面，`jedi` 提供代码分析，致力于为你带来**秒开**的编辑体验，同时满足日常编码所需的代码补全和基础错误检查。

## ✨ 核心特性

- ⚡ **极致轻量**：启动速度媲美记事本，资源占用极低。
- 🔍 **智能补全**：基于 `jedi` 的实时代码补全，提升编码效率。
- ⚠️ **错误检查**：语法错误实时显示红色波浪线（鼠标悬停查看详情功能计划中）。
- 🎨 **语法高亮**：借助 `highlight.js`，支持清晰的代码高亮。
- 🧩 **简洁界面**：包含菜单栏、编辑区（行号+代码区）、弹出菜单，布局清晰。
- 🛠 **核心操作**：支持文件的新建/打开/保存、代码的撤销/重做、运行与调试基础功能。

## 🚀 快速开始

### 方法一：直接运行（推荐体验）

确保你已安装 Python 3.6 及以上版本，然后执行以下命令：

```bash
# 克隆仓库
git clone https://github.com/ZHYTOOL/TinyPyIDE-A-Ultimate-lightweight-Python-IDE-.git

# 进入项目目录
cd TinyPyIDE-A-Ultimate-lightweight-Python-IDE-/tinyPy

# 安装依赖
pip install pywebview jedi

# 运行 TinyPy
python main.py
```
请$不要$使用3.12

## 🖥️ 界面与操作指南

### 1. 界面布局
- **顶部菜单栏**：`File`（文件操作）、`Edit`（撤销/重做）、`Run`（运行/调试）、`Help`（库管理/关于）。
- **编辑区**：
  - 左侧：**行号显示**。
  - 右侧：**代码编辑区**（支持语法高亮和错误波浪线）。
- **弹出菜单**：点击菜单项后，会在合适位置弹出对应功能的子界面（如保存文件对话框、文件列表、库安装窗口等）。

### 2. 常用操作
- **保存文件**：点击 `File` → `Save`，输入文件名（无需输入 `.py` 后缀，系统将自动添加）。
- **运行代码**：点击 `Run` → `Run Code`（快捷键支持正在计划中，欢迎贡献）。
- **代码补全**：输入代码时，系统会自动弹出补全列表。使用 **上下箭头键** 选择，按 **Tab 键** 确认。
- **错误提示**：语法错误位置会显示**红色波浪线**。未来版本将支持鼠标悬停查看具体错误信息。

## 🛠️ 技术栈

- **前端**：HTML5, CSS3, JavaScript (ES6+), highlight.js
- **后端**：Python 3, pywebview, jedi
- **核心机制**：通过 `pywebview` 实现 Python 后端与 Web 前端的无缝桥接，`jedi` 在后端提供实时代码分析能力。

## 🤝 贡献指南

TinyPy 还很年轻，非常欢迎你的参与！你可以通过以下方式贡献：

1. **提交 Issue**：报告你发现的 bug，或提出新功能建议。
2. **提交 Pull Request**：改进代码、修复 bug、完善文档或优化界面。
3. **分享体验**：在社区或社交平台分享你的使用体验，帮助项目推广。

### 开发环境搭建
1. Fork 本仓库并克隆到本地。
2. 安装依赖：`pip install pywebview jedi`
3. 运行项目：`python main.py`
4. 提交前请确保代码风格简洁，必要时添加注释。

## 📄 开源协议

本项目基于 MIT 协议开源，详情请参见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [pywebview](https://github.com/r0x0r/pywebview) - 提供了轻量级桌面应用解决方案。
- [jedi](https://github.com/davidhalter/jedi) - 让 Python 代码补全变得简单而强大。
- [highlight.js](https://highlightjs.org/) - 实现了美观的代码高亮。

---

> TinyPy 还很年轻，但它已经准备好陪你一起写代码了。试试看，享受轻量开发的乐趣吧！
```
