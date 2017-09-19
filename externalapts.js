google.charts.load('current', {'packages':['corechart','table']});
google.charts.setOnLoadCallback(pullSheet);

function pullSheet(){
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1NvaCUrTF6gqXIoQU6WTzH9107hieeMFZcHOo5kwAxDo/gviz/tq?gid=0');
  query.send(pullData)
}

function pullData(response){
  gData = response.getDataTable();
  initTable(gData)
}

function initTable(data){
  var userData = new RegExp('[A-Z][a-z]');
  var clientView = new google.visualization.DataView(data);
    clientView.setRows(data.getFilteredRows([{column:4, value:sessionStorage.key}]));
  drawTable(clientView,"table_div");
}

function drawTable(data,table_divname){
  var chartData = data;
  var table = new google.visualization.Table(document.getElementById(table_divname));
  table.draw(data)
}
