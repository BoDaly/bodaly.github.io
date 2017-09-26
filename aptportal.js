google.charts.load('current', {'packages':['corechart','table']});

function pullValidation(){
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1z7iDeHZr0NHJkXKTHU4lNMxWCgopFteoij_V_CkDzqg/gviz/tq?gid=0');
  query.send(valData)
}

function valData(response){
  vData = response.getDataTable()
  validate(vData)
}

function validate(data){
  var inputPass = document.getElementById('password').value;
  var inputUser = document.getElementById('username').value;
  var usrPass = data.getValue(findValue(data,inputUser),1);
  var usrName = data.getValue(findValue(data,inputUser),0);
  var client = data.getValue(findValue(data,inputUser),2);

  if (inputPass == usrPass){
    sessionStorage.setItem('key',client);
    console.log(sessionStorage.getItem('key'));
    window.location.assign("externalapts.html")
  }
  else{
    window.alert('Wrong Username or Password')
  }
}

function findValue(data,search){
  cntRows = data.getNumberOfRows();
  for (i=0;i<cntRows;i++){
    if(data.getValue(i,0) == search){
      return i;
    }
  }
  return window.alert('Wrong Username or Password')
}
