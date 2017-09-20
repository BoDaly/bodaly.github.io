google.charts.load('current', {'packages':['corechart','table']});
google.charts.setOnLoadCallback(pullSheet);
google.charts.setOnLoadCallback(clientTitle);

function pullSheet(){
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1NvaCUrTF6gqXIoQU6WTzH9107hieeMFZcHOo5kwAxDo/gviz/tq?gid=0');
  query.send(pullData)
}

function pullData(response){
  gData = response.getDataTable();
  initTable(gData)
}

function initTable(data){
  var userData = sessionStorage.getItem('key');
  var initData = data;
  var clientView = new google.visualization.DataView(initData);
    clientView.setRows(initData.getFilteredRows([{column:4, test:checkClient}]));
    clientView.hideColumns([4]);
  drawTable(clientView,"table_div");
}

function drawTable(data,table_divname){
  var chartData = data;
  var table = new google.visualization.Table(document.getElementById(table_divname));
  table.draw(data,{allowHtml: true})
}

function checkClient(cellValue,rowIndex,colIndex,data){
  var userData = sessionStorage.getItem('key')
  var check = userData;
  if (cellValue.match(check) == userData && cellValue.match(check) != null && cellValue.match(check) != "" ){
    return true
  }
  else{
    return false
  }
}

function clientTitle(){
  document.getElementById("client_div").innerHTML = sessionStorage.getItem('key')
}

function signOut(){
  sessionStorage.removeItem('key');
  window.location.replace("aptportal.html")
}
