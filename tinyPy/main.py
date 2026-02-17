import jedi
import webview as wv
import random as rd
import os
import sys
mypath=''
for _p,_,i in (os.walk(os.getcwd())):
    print(i)
    mypath=_p
mypath=mypath+"\\"
#print(sys.argv[0])
class Api():
    def view_file(self,data):
        fileList=[]
        for _,_,i in (os.walk(os.getcwd())):
            fileList.append(i)
        return fileList
    def read_file(self,data):
        with open(data,mode='r') as f:
            return f.read()
    def complete(self,data):
        codelist=data.split('\n')
        result=jedi.Script(data)
        final_result=result.complete(len(codelist),len(codelist[-1]))
        able_comp=[]
        for i in final_result:
            able_comp.append([i.name,i.complete])
        return able_comp
    def get_errors(self,data):
        codelist=data.split('\n')
        result=jedi.Script(data)
        final_result=result.get_syntax_errors()
        for i in final_result:
            #print(dir(i))
            #print([i.line,i.column,i.until_line,i.until_column])
            return [i.line,i.column,i.until_line,i.until_column]
    def run_code(self,filename):
        os.system(f"python {mypath+filename}")
    def run_code_as_db(self,filename):
        os.system(f"python -m pdb {mypath+filename}")
    def save_file_basic(self,name,data):
        path=mypath+name
        with open(name,'w') as f:
            f.write(data)
        return 'ok'
    def save_file(self,name,data):
        with open(name,'w') as f:
            f.write(data)
        return 'ok'
    def download_lib(self,name):
        os.system(f'pip install {name}')

api=Api()

wd=wv.create_window("New*","./mainPage.html",js_api=api)
#wd=wv.create_window("New*",html="<h1>ok</h1>",js_api=api)
wv.start(debug=False)


