# TinyPy-ide-a-Ultra-lightweight-Python-code-editor
A featherweight Python IDE built with pywebview and jedi, focusing on simplicity and speed.
📖 使用指南
界面布局
顶部菜单栏：File（文件操作）、Edit（撤销/重做）、Run（运行/调试）、Help（库管理/关于）。

编辑区：左侧行号，右侧代码编辑区（带语法高亮和错误波浪线）。

弹出菜单：点击菜单项会显示对应的子功能，如保存文件、查看文件列表、安装库等。

常用操作
保存文件：点击 File → Save，输入文件名

运行代码：点击 Run → Run Code，或使用快捷键（暂未实现，欢迎贡献）。

代码补全：输入时自动弹出补全列表，按 Tab 确认，上下键选择。

错误提示：语法错误位置会显示红色波浪线，鼠标悬停可查看错误信息（计划中）。

🛠 技术栈
前端：HTML5, CSS3, JavaScript, highlight.js

后端：Python 3, pywebview, jedi

核心机制：通过 pywebview 桥接 Python 后端与 Web 前端，jedi 提供代码分析能力。

🤝 贡献指南
PyLite 还在早期阶段，非常欢迎你的参与！你可以：

提交 Issue 报告 bug 或提出新功能建议。

提交 Pull Request 改进代码、修复 bug、完善文档。

分享你的使用体验，帮助推广。

开发环境
Fork 本仓库并克隆到本地。

安装依赖：pip install pywebview jedi

修改代码后测试运行。

提交前请确保代码风格简洁，必要时添加注释。

🙏 致谢
pywebview 提供了轻量级桌面应用方案。

jedi 让 Python 补全变得简单。

highlight.js 实现代码高亮。

PyLite 还很年轻，但它已经准备好陪你一起写代码了。试试看，享受轻量开发的乐趣吧！


