hljs.highlightAll();
let codes=[],codesIndex=0;
const code = document.getElementById("code");
const warn = document.getElementById("warn");
let warns=[];
const infoGet = document.getElementById("infoGet");
const codeContainer = document.getElementById('code-container');
const linenumbers = document.getElementById('linenumbers');
let isFileSave=false,fileName=""
let choose=0,chooseIt=false,needTabs=-1;

function fitTextarea() {
    // 自动增高，防止溢出
    infoGet.style.height = "auto";
    code.style.height = "auto";
    warn.style.height="auto";
    let h = Math.max(infoGet.scrollHeight, codeContainer.clientHeight);
    infoGet.style.height = h + "px";
    code.style.height = h + "px";
    warn.style.height =h + "px"
    linenumbers.style.height = h + "px";
}
// 初始化
fitTextarea();

// 同步输入和高亮
function fitInfo(){
    delete code.dataset.highlighted;
    code.textContent = infoGet.value;
    warn.value=""
    warnNeedCodes=infoGet.value.split('\n')
    if(warns!=[]){
        for(let i in warnNeedCodes) {
            for(let j in warnNeedCodes[i]){
                let nowLine=Number(i)+1,nowColumn=Number(j)+1;
                if(nowLine>=warns[0]&&nowLine<=warns[2]&&nowColumn>=warns[1]&&nowColumn<=warns[3]){
                    warn.value+='﹏'
                }
                else{
                    warn.value+=' '
                }
            }
            warn.value+='\n'
        }
    }
    let info = infoGet.value;
    let codeList = info.split('\n');
    let lineShow = "";
    for(let i = 0; i < codeList.length; i++){
        lineShow += (i + 1) + "<br>";
    }
    linenumbers.innerHTML = lineShow;
    hljs.highlightElement(code);
    fitTextarea();
}
infoGet.addEventListener("input", () => {
    fitInfo()
    codes.push(infoGet.value)
    isFileSave=false
});

// 滚动时，子元素scroll跟随外层
codeContainer.addEventListener("scroll", function() {
    const scrollTop = codeContainer.scrollTop;
    code.scrollTop = scrollTop;
    infoGet.scrollTop = scrollTop;
    warn.scrollTop=scrollTop;
    linenumbers.scrollTop = scrollTop;
});

// 初始化行号
(function(){
    let info = infoGet.value;
    let codeList = info.split('\n');
    let lineShow = "";
    for(let i = 0; i < codeList.length; i++){
        lineShow += (Number(i) + 1).toString() + "<br>";
    }
    linenumbers.innerHTML = lineShow;
    hljs.highlightElement(code);
    fitTextarea();
})();

// === 弹窗逻辑，最小改动 ===
// 菜单的子功能项（可以自定义为你想要的功能名）
const menuOptions = {
    File: ["View File",  "Save", "Save As..."],
    Edit: ["Undo / Ctrl+Z", "Redo / Ctrl+Shift+Z"],
    Run: ["Run Code", "Run With Debugger"],
    Help: ["Download Library", "About"]
};

const popupMask = document.getElementById('popupMask');
const popupBox = document.getElementById('popupBox');

// 点击菜单弹出子功能弹窗
document.querySelectorAll('.menu').forEach(menu => {
    menu.addEventListener('click', function(e){
        e.stopPropagation();
        const key = this.getAttribute('data-key');
        // 填充内容
        let html = `<div class="popup-title">${key}</div>`;
        (menuOptions[key] || []).forEach(opt =>
            html += `<button class="popup-option" onclick="Do('${opt}')">${opt}</button>`
        );
        html += `<button class="popup-close">Close</button>`;
        popupBox.innerHTML = html;
        popupMask.style.display = "block";
    });
});

// 关闭弹窗（点击遮罩或关闭按钮）
popupMask.addEventListener('click', function(e){
    popupMask.style.display = "none";
});
// 阻止点击弹窗本体关闭遮罩
popupBox.addEventListener('click', function(e){
    e.stopPropagation();
});
// 关闭按钮
popupBox.addEventListener('click', function(e){
    if(e.target.classList.contains('popup-close')) {
        popupMask.style.display = "none";
    }
});
function Do(task){
    // window.pywebview.api.send_data("hello").then(function (response){
    //     popupMask.style.display = "none";
    //     alert(response)
    // })
    if(task=="View File"){
        popupMask.style.display = "none";
        let html = `<div class="popup-title">View File</div>`;
        window.pywebview.api.view_file('View Files').then((response)=>{
            console.log(typeof response,response)
            for(let i of response[0]){
                html += `<button class="popup-option" onclick="Do('OpenFile>${i}')">${i}</button>`
            }
            html += `<button class="popup-close">Close</button>`;
            popupBox.innerHTML = html;
            popupMask.style.display = "block";
        })
        isFileSave=false
    }
    if(task.includes('OpenFile')){
        file=task.split('>')[1];
        window.pywebview.api.read_file(file).then((response)=>{
            console.log(typeof response,response)
            popupMask.style.display = "none";
            infoGet.value=response;
            fitInfo()
        })
    }
    if(task=="Run Code"){
        //console.log(isFileSave)
        if(isFileSave) {
            window.pywebview.api.run_code(fileName)
        }
        else{
            Do("Save")
            window.pywebview.api.run_code(fileName)
        }
    }
    if(task=="Run With Debugger"){
        //console.log(isFileSave)
        if(isFileSave) {
            window.pywebview.api.run_code_as_db(fileName)
        }
        else{
            Do("Save")
            window.pywebview.api.run_code_as_db(fileName)
        }
    }
    if(task=="Save"){
        let html = `<div class="popup-title">File Name</div>`;
        html += `<input class="popup-option" style="background-color:#ccc" id="fileNameBasic"></input>`
        html += `<button class="popup-close" onclick="SaveFileBasic()">OK</button>`;
        popupBox.innerHTML = html;
        popupMask.style.display = "block";
    }
    if(task=="Save As"){
        let html = `<div class="popup-title">File Name with full path</div>`;
        html += `<input class="popup-option" style="background-color:#ccc" id="fileName"></input>`
        html += `<button class="popup-close" onclick="SaveFile()">OK</button>`;
        popupBox.innerHTML = html;
        popupMask.style.display = "block";
    }
    if(task=="Download Library"){
        let html = `<div class="popup-title">Library Name</div>`;
        html += `<input class="popup-option" style="background-color:#ccc" id="libName"></input>`
        html += `<button class="popup-close" onclick="downloadLib()">OK</button>`;
        popupBox.innerHTML = html;
        popupMask.style.display = "block";
    }
    if(task=="About"){
        let html = `<div class="popup-title">About</div>`;
        html += `<button class="popup-option">Born for improvisation</button>`
        html += `<button class="popup-close">OK</button>`;
        popupBox.innerHTML = html;
        popupMask.style.display = "block";
    }
}
function SaveFileBasic(){
    fileName=document.getElementById("fileNameBasic").value
    window.pywebview.api.save_file_basic(fileName,infoGet.value).then((response)=>{
        console.log(response)
    })
    isFileSave=true
}
function SaveFile(){
    fileName=document.getElementById("fileName").value
    window.pywebview.api.save_file(fileName,infoGet.value)
    isFileSave=true
}
function downloadLib(){
    let libName=document.getElementById("libName").value
    window.pywebview.api.download_lib(libName)
}
/**
 * 获取 textarea 当前光标前后的字符
 * @param {HTMLTextAreaElement} textarea - 目标 textarea 元素
 * @returns {{before: string, after: string}} - 光标前后单个字符
 */
function getCursorSurroundingChars(textarea) {
    const { selectionStart, selectionEnd, value } = textarea;
    // 通常插入点，selectionStart === selectionEnd
    let before = '', after = '';
    if (selectionStart > 0) {
        before = value[selectionStart - 1];
    }
    if (selectionEnd < value.length) {
        after = value[selectionEnd];
    }
    return { before, after };
}
/**
 * 获取光标实际像素坐标（相对于页面）
 * @param {HTMLTextAreaElement} textarea
 * @returns {left:number, top:number}
 */
function getCaretPosition(textarea) {
    const div = document.createElement('div');
    const style = getComputedStyle(textarea);

    // 复制所有重要样式
    for (let prop of [
        'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'letterSpacing', 'textTransform',
        'textAlign', 'direction', 'wordSpacing', 'lineHeight', 'paddingTop', 'paddingRight',
        'paddingBottom', 'paddingLeft', 'borderTopWidth', 'borderRightWidth',
        'borderBottomWidth', 'borderLeftWidth', 'boxSizing', 'width', 'height', 'overflow'
    ]) {
        div.style[prop] = style[prop];
    }

    // 复制内容与换行
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.whiteSpace = 'pre-wrap';
    div.style.wordWrap = 'break-word';
    div.style.left = textarea.offsetLeft + 'px';
    div.style.top = textarea.offsetTop + 'px';
    div.style.zIndex = '-1';

    let text = textarea.value.substring(0, textarea.selectionStart);
    text = text.replace(/\n$/, '\n '); // chrome兼容补丁
    div.textContent = text;

    // 插入 span 标识光标位置
    const span = document.createElement('span');
    span.textContent = '|'; // 占位，不现实，测算宽度
    div.appendChild(span);

    document.body.appendChild(div);
    const rect = span.getBoundingClientRect();
    const containerRect = textarea.getBoundingClientRect();
    const left = rect.left, top = rect.top;

    document.body.removeChild(div);
    return {
        left: left,
        top: top
    };
}

function complete(){
    let {left,top}=getCaretPosition(infoGet)
    //console.log(left,top)
    if(window.pywebview) {
        setTimeout(() => {
            let {before,after}= getCursorSurroundingChars(infoGet)
            //console.log(after)
            //console.log(after,before)
            if(before!='\n'&&before!=''){
                window.pywebview.api.complete(infoGet.value).then((response) => {
                    let html=`<div style="position:absolute;top:${top}px;left:${left}px;text-align:left;flex:wrap;">`
                    for(let i in response){
                        if(chooseIt==true){
                            //console.log(response[i][1])
                            infoGet.value += response[i][1];
                            chooseIt = false
                            fitInfo()
                        }
                        if(i==choose) {
                            html += `<button class="popup-option" style="color:brown" onclick="Do('Complete>${response[i][1]}')">${response[i][0]} => ${response[i][0]}</button><br>`
                        }
                        else{
                            html += `<button class="popup-option" onclick="Do('Complete>${response[i][1]}')">${response[i][1]} => ${response[i][0]}</button><br>`
                        }
                    }
                    html+="</div>"
                    document.getElementById('choice').innerHTML=html;
                })
            }
            else{
                document.getElementById('choice').innerHTML=''
                if(chooseIt==true){
                    infoGet.value+='    '
                    fitInfo()
                    chooseIt=false
                }
                //console.log(before,needTabs)
            }
        },0)
    }
}
function showErrors(){
    if(window.pywebview) {
        window.pywebview.api.get_errors(infoGet.value).then((response)=>{
            if(response!==null){
                warns=response;
            }
        })
    }
}
setInterval(()=>{
    complete();
    showErrors();
},100)
infoGet.addEventListener('keydown', function (event) {
    // ---------- 撤销/重做 ----------
    if (event.ctrlKey && event.key.toLowerCase() === 'z') {
        event.preventDefault();
        if (event.shiftKey) {
            // 重做 Ctrl+Shift+Z
            if (codesIndex > 0) {
                codesIndex--;
                infoGet.value = codes[codes.length - 1 - codesIndex];
                fitInfo();
            }
        } else {
            // 撤销 Ctrl+Z
            if (codes.length > 0 && codesIndex < codes.length - 1) {
                codesIndex++;
                infoGet.value = codes[codes.length - 1 - codesIndex];
                fitInfo();
            }
        }
        return;
    }

    const choiceDiv = document.getElementById('choice');
    const hasChoices = choiceDiv && choiceDiv.children.length > 0;

    // ---------- 方向键：选择补全项（仅当有列表时）----------
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        if (hasChoices) {
            event.preventDefault(); // 阻止页面滚动
            const total = choiceDiv.children.length;
            if (event.key === 'ArrowDown') {
                choose = (choose + 1) % total;
            } else {
                choose = (choose - 1 + total) % total;
            }
            // 重新渲染高亮（complete 函数会自动根据 choose 刷新样式）
        }
        // 无列表时保持默认光标移动
        return;
    }

    // ---------- Tab 键：智能处理 ----------
    if (event.key === 'Tab') {
        event.preventDefault();
        if (hasChoices) {
            // 有补全列表：插入当前高亮项
            if (choose >= 0 && choose < choiceDiv.children.length) {
                const button = choiceDiv.children[choose];
                if (button && button.onclick) {
                    button.onclick(); // 触发补全插入
                }
            }
            // 清空列表
            choiceDiv.innerHTML = '';
            choose = 0;
        } else {
            // 无列表：插入 4 个空格（缩进）
            const start = infoGet.selectionStart;
            const end = infoGet.selectionEnd;
            infoGet.value = infoGet.value.substring(0, start) + '    ' + infoGet.value.substring(end);
            infoGet.setSelectionRange(start + 4, start + 4);
            fitInfo();
            codes.push(infoGet.value);
            isFileSave = false;
        }
        return;
    }

    // ---------- Enter 键：只负责自动缩进，不参与补全 ----------
    if (event.key === 'Enter') {
        event.preventDefault(); // 阻止默认换行

        // 如果存在补全列表，仅关闭它（不执行补全）
        if (hasChoices) {
            choiceDiv.innerHTML = '';
            choose = 0;
            // 继续执行下面的自动缩进
        }

        const value = infoGet.value;
        const start = infoGet.selectionStart;
        const end = infoGet.selectionEnd;
        const textBeforeCursor = value.substring(0, start);
        const lines = textBeforeCursor.split('\n');
        const currentLine = lines[lines.length - 1];

        // 计算当前行的前导缩进（空格或制表符）
        const indentMatch = currentLine.match(/^[ \t]*/);
        const baseIndent = indentMatch ? indentMatch[0] : '';

        // 判断是否需要额外缩进（例如上一行以冒号结尾）
        let extraIndent = '';
        if (lines.length > 1) {
            const prevLine = lines[lines.length - 1];
            if (prevLine.trimEnd().endsWith(':')) {
                //console.log('end with :')
                extraIndent = '    '; // 4 个空格
            }
        }

        const insertText = '\n' + baseIndent + extraIndent;
        infoGet.value = value.substring(0, start) + insertText + value.substring(end);
        const newPos = start + insertText.length;
        infoGet.setSelectionRange(newPos, newPos);

        fitInfo();
        codes.push(infoGet.value);
        isFileSave = false;
        return;
    }

    // ---------- ESC 关闭补全列表 ----------
    if (event.key === 'Escape') {
        if (hasChoices) {
            choiceDiv.innerHTML = '';
            choose = 0;
        }
    }
});