let htmlform=document.createElement('form')
htmlform.setAttribute('id','form')
let des=document.createElement('p')
des.setAttribute('id','description')
des.innerHTML='this Page is about the DOM manipulation of HTML form'
let containers=document.createElement('div')
containers.className='container'
let rows=document.createElement('div')
rows.className='row'
let cols=document.createElement('div')
cols.className='col-md-4'
let col2=document.createElement('div')
col2.className='col-md-4'

let div1=divi('div')
let divt1=divi('h1')
divt1.setAttribute('id','title')
divt1.innerHTML='Form Submission'
div1.append(divt1)

let div2=divi('div')
div2.className='form-group'
let lab1=labels('first-name','FirstName')
let br1=br()
let inp1=inp('text','first-name')
inp1.setAttribute('required','')
inp1.setAttribute('placeholder', 'Enter the firstname')
div2.append(lab1,br1,inp1)

let div3=divi('div')
div3.className='form-group'
let lab3=labels('last-name','LastName')
let br3=br()
let inp3=inp('text','last-name')
inp3.setAttribute('placeholder','Enter the last name')
inp3.setAttribute('required','')
div3.append(lab3,br3,inp3)

let div4=divi('div')
div4.className='form-group'
let lab4=labels('address','Address')
let br4=br()
let inp4=document.createElement('textarea')
inp4.setAttribute('placeholder','Enter the full Address')
inp4.setAttribute('id','address')
inp4.setAttribute('row','5')
inp4.setAttribute('col','10')
div4.append(lab4,br4,inp4)

let div99=divi('div')
div99.className='form-group'
let lab99=labels('pincode','Pincode')
let br99=br()
let inp99=inp('text','pincode')
inp99.setAttribute('required','')
inp99.setAttribute('placeholder','Enter the pincode')
div99.append(lab99,br99,inp99)

let div5=divi('div')
div5.className='form-group'
let div501=divi('div')
div501.innerHTML='Gender:'
let br5=br()
let inp501=inp('radio','male')
inp501.setAttribute('name','gender')
inp501.setAttribute('value','Male')
let lab501=labels('male','Male')
let inp502=inp('radio','female')
inp502.setAttribute('name','gender')
inp502.setAttribute('value','Female')
let lab502=labels('female','Female')
div5.append(div501,br5,inp501,lab501,inp502,lab502)

let div6=divi('div')
div6.className='form-group'
let div601=divi('div')
div601.innerHTML='Choice of Food <h6>(must choose 2 out of 5)</h6>'
let div602=divi('div')
let lab601=labels('north-indian','North-Indian')
let inp601=inp('checkbox','north-indian')
inp601.setAttribute('value','north-indian')
inp601.className='ckbx'
let br601=br()
let lab602=labels('south-indian','South-Indian')
let inp602=inp('checkbox','south-indian')
inp602.setAttribute('value','south-indian')
inp602.className='ckbx'
let br602=br()
let lab603=labels('chinese','Chinese')
let inp603=inp('checkbox','chinese')
inp603.setAttribute('value','chinese')
inp603.className='ckbx'
let br603=br()
let lab604=labels('japnese','Japnese')
let inp604=inp('checkbox','japnese')
inp604.setAttribute('value','japnese')
inp604.className='ckbx'
let br604=br()
let lab605=labels('sea-food','Sea-Food')
let inp605=inp('checkbox','sea-food')
inp605.setAttribute('value','sea-food')
inp605.className='ckbx'
let br605=br()
div602.append(lab601,inp601,br601,lab602,inp602,br602,lab603,inp603,br603,lab604,inp604,br604,lab605,inp605,br605)
div6.append(div601,div602)

let div7=divi('div')
div7.className='form-group'
let lab7=labels('state','State')
let br7=br()
let inp7=inp('text','state')
inp7.setAttribute('placeholder','Enter the state name')
div7.append(lab7,br7,inp7)

let div8=divi('div')
div8.className='form-group'
let lab8=labels('country','Country')
let br8=br()
let inp8=inp('text','country')
inp8.setAttribute('placeholder','Enter the country name')
div8.append(lab8,br8,inp8)

let div9=divi('div')
let button=document.createElement('button')
button.setAttribute('id','submit')
button.className='btn btn-primary'
button.setAttribute('onclick','return false')
button.addEventListener('click',pulldata)
button.innerHTML='Submit'
div9.append(button)

let div91=divi('div')
let inpreset=document.createElement('input')
inpreset.setAttribute('type','reset')
inpreset.className='reset'
inpreset.setAttribute('value','Clear')
div91.append(inpreset)

cols.append(div1,div2,div3,div4,div99,div5,div6,div7,div8,div9,div91)

let div10=divi('div')
let div1001=divi('div')
let div1010=divi('h1')
div1010.setAttribute('id','title')
div1010.innerHTML='Temporary Database'
div10.append(div1001,div1010)

let div11=divi('div')
let tabel=document.createElement('table')
tabel.className='table'
let thd=document.createElement('thead')
thd.className='thead-dark'
let tr=document.createElement('tr')
let th1102=th('First Name')
let th1103=th('Last Name')
let th1104=th('Address')
let th1199=th('Pincode')
let th1105=th('Gender')
let th1106=th('Food')
let th1107=th('State')
let th1108=th('Country')
let tbd=document.createElement('tbody')
tr.append(th1102,th1103,th1104,th1199,th1105,th1106,th1107,th1108)
thd.append(tr)
tabel.append(thd,tbd)
div11.append(tabel)

col2.append(div10,div11)

function th(value){
    let res=document.createElement('th')
    res.innerHTML=value
    return res
}

function divi(tn){
    let res=document.createElement(tn)
    return res
}

function labels(fv,value){
    let res=document.createElement('label')
    res.setAttribute('for',fv)
    res.innerHTML=value
    return res
}

function inp(ty,idf){
    let res= document.createElement('input')
    res.setAttribute('type',ty)
    res.setAttribute('id',idf)
    return res
}

function br(){
    let res=document.createElement('br')
    return res
}


rows.append(cols,col2)
containers.append(rows)
htmlform.append(des,containers)
document.body.append(htmlform)

function pulldata(){
    
    let fn=document.getElementById('first-name').value
    let ln=document.getElementById('last-name').value
    let addr=document.getElementById('address').value
    let pnc=document.getElementById('pincode').value
    let st=document.getElementById('state').value
    let ct=document.querySelector('#country').value    

    let gn
    let gen=document.getElementsByName('gender')
    for ( var i=0;i<gen.length;i++){
        if (gen[i].checked){
             gn=gen[i].value
             break
        }
        else{
            gn='not-disclosed'
        }
    }

    let checkedbox=document.getElementsByClassName('ckbx')
    let fd=[]
    for ( var i in checkedbox)
    {
        if (checkedbox[i].checked==true)
        {
            fd.push(checkedbox[i].value)
        }
    }

    let templet=`
                <tr>
                <td>${fn}</td>
                <td>${ln}</td>
                <td>${addr}</td>
                <td>${pnc}</td>
                <td>${gn}</td>
                <td>${fd}</td>
                <td>${st}</td>
                <td>${ct}</td>
                </tr>
                `;

    tbd.innerHTML+= templet
}



