# TinyPy IDE
<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Python-3.6%2B-brightgreen" alt="Python">
</p>

<p align="center">
  An ultra-lightweight Python IDE with Notepad-fast startup speed, equipped with error checking and code completion.
</p>

<p align="center">
  <a href="README.md">中文</a> | <b>English</b>
</p>

## 📖 About
**TinyPy IDE** is an ultra-lightweight Python code editor that combines the flexibility of web frontend and the power of Python backend. Built with `pywebview` for the desktop UI and `jedi` for code analysis, it delivers **instant startup** while providing essential coding features such as code completion and basic error checking.

## ✨ Key Features
- ⚡ **Ultra-lightweight**: Launches as fast as Notepad with minimal resource usage
- 🔍 **IntelliSense**: Real-time code completion powered by `jedi` to boost productivity
- ⚠️ **Error checking**: Real-time syntax error underlining
- 🎨 **Syntax highlighting**: Clean code highlighting powered by `highlight.js` (Atom One Dark theme)
- 🧩 **Clean UI**: Menu bar, editor (line numbers + code area), context menu, with clear layout
- 🛠️ **Core operations**: New/Open/Save, Undo/Redo, Run and basic debugging

## 📁 Project Structure
TinyPyIDE/
├── tinyPy/
│   ├── main.py           # Backend core logic (API)
│   ├── mainEdit.js       # Frontend interaction logic
│   ├── mainPage.html     # Main UI structure
│   ├── highlight-min.js  # Syntax highlighting library
│   └── atom-one-dark.css # Highlight theme styles
├── README.md             # Chinese documentation
├── README_EN.md          # English documentation
└── LICENSE               # MIT license

### Core Modules
- **main.py**: Backend `Api` class providing file operations, code completion, error checking, code execution and more
- **mainEdit.js**: Frontend JavaScript logic handling editor interactions, auto-completion, error display
- **mainPage.html**: HTML5-based interface with toolbar, code area, context menu
- **highlight-min.js**: Core syntax highlighting library
- **atom-one-dark.css**: Atom One Dark theme styles

## 🚀 Quick Start
### Requirements
- Python 3.6 – 3.12
- OS: Windows / macOS / Linux

### Install & Run
# Clone repo
git clone https://gitee.com/Akalui/TinyPyIDE-A-Ultimate-lightweight-Python-IDE.git

# Enter directory
cd TinyPyIDE-A-Ultimate-lightweight-Python-IDE/tinyPy

# Install dependencies
pip install pywebview jedi

# Run TinyPy
python main.py

## 🖥️ Interface & Usage
### 1. Layout
┌─────────────────────────────────────────────────────────┐
│  File  Edit  Run  Help                                  │  ← Menu bar
├─────────────────────────────────────────────────────────┤
│  1   │ Code editor (syntax highlighting + error lines)   │  ← Line numbers + editor
│  2   │                                                  │
│  ... │                                                  │
│     │                                                  │
├─────────────────────────────────────────────────────────┤
│  Status bar                                             │
└─────────────────────────────────────────────────────────┘

### 2. Menu Functions
- **File**
  - New
  - Open
  - Save (auto appends .py extension)

- **Edit**
  - Undo
  - Redo

- **Run**
  - Run Code
  - Run as Debug

- **Help**
  - Library Management (install third-party packages)
  - About

### 3. Common Actions
| Action | Method |
|--------|--------|
| Save file | File → Save, enter name (auto .py) |
| Run code | Run → Run Code |
| Debug run | Run → Run as Debug |
| Code completion | Auto-popup; ↑↓ to select, Tab to confirm |
| Install library | Help → Library Management, enter package name |

## 🛠️ Tech Stack
- **Frontend**
  - HTML5 + CSS3
  - JavaScript (ES6+)
  - highlight.js – syntax highlighting
  - Atom One Dark theme

- **Backend**
  - Python 3
  - pywebview – lightweight desktop GUI
  - jedi – Python code analysis & completion engine

- **Core Mechanism**
  - pywebview bridges Python backend and web frontend
  - jedi provides real-time code analysis
  - RESTful-style API communication

## 🔌 API Interface
Backend `Api` class provides these core methods:
| Method | Description |
|--------|-------------|
| `view_file(data)` | View file info |
| `read_file(data)` | Read file content |
| `complete(data)` | Code auto-completion |
| `get_errors(data)` | Get syntax errors |
| `run_code(filename)` | Run Python code |
| `run_code_as_db(filename)` | Run in debug mode |
| `save_file(name, data)` | Save file |
| `save_file_basic(name, data)` | Basic save function |
| `download_lib(name)` | Install third-party library |

## 🤝 Contributing
TinyPy is young and welcomes contributions! You can help by:
1. **Creating Issues**: Report bugs or suggest features
2. **Submitting PRs**: Improve code, fix bugs, refine docs or UI
3. **Sharing**: Spread the word and share your experience

### Dev Setup
# 1. Fork and clone
git clone https://gitee.com/your-username/TinyPyIDE-A-Ultimate-lightweight-Python-IDE.git

# 2. Enter directory
cd TinyPyIDE-A-Ultimate-lightweight-Python-IDE/tinyPy

# 3. Install dependencies
pip install pywebview jedi

# 4. Run
python main.py

# 5. Keep code clean and comment when necessary before committing

## 📄 License
This project is open source under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- [pywebview](https://github.com/r0x0r/pywebview) – lightweight desktop solution
- [jedi](https://github.com/davidhalter/jedi) – simple yet powerful Python completion
- [highlight.js](https://highlightjs.org/) – beautiful code highlighting
- [Atom Editor](https://atom.io/) – inspiration for One Dark theme

---
> TinyPy is still young, but ready to code with you. Give it a try and enjoy lightweight development!
