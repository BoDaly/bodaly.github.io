google.charts.load('current', {'packages':['corechart','table']});
google.charts.setOnLoadCallback(googleSheet);
google.charts.setOnLoadCallback(setForm);
google.charts.setOnLoadCallback(startDate);
google.charts.setOnLoadCallback(endDate);

function googleSheet(){
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/18zmHVLDOiXAZoUNUnocj44VbVNwNmQ9TVmi7nyNMhE0/gviz/tq?gid=1676619464');
  query.send(collector)
}
function setForm(){
  document.getElementById("month1").selectedIndex = 1;
  document.getElementById("month2").selectedIndex = 12;
  document.getElementById("year1").selectedIndex = 1;
  document.getElementById("year2").selectedIndex = 2;
  document.getElementById("month1").onchange = googleSheet;
  document.getElementById("month2").onchange = googleSheet;
  document.getElementById("year1").onchange = googleSheet;
  document.getElementById("year2").onchange = googleSheet;
}
function startDate(){
  var month1Value = document.getElementById("month1").value;
  var year1Value = document.getElementById("year1").value;
  var date1 = new Date(year1Value,month1Value,1);
  return date1
}
function endDate(){
  var monthDays = new google.visualization.DataTable();
    monthDays.addColumn('number','January')
    monthDays.addColumn('number','February')
    monthDays.addColumn('number','March')
    monthDays.addColumn('number','April')
    monthDays.addColumn('number','May')
    monthDays.addColumn('number','June')
    monthDays.addColumn('number','July')
    monthDays.addColumn('number','August')
    monthDays.addColumn('number','September')
    monthDays.addColumn('number','October')
    monthDays.addColumn('number','November')
    monthDays.addColumn('number','December')
    monthDays.addRow([31,28,31,30,31,30,31,31,30,31,30,31]);
  var month2Value = document.getElementById("month2").value;
  var year2Value = document.getElementById("year2").value;
  var date2 = new Date(year2Value,month2Value,monthDays.getValue(0,parseInt(month2Value)));
  return date2
}
function collector(response){
  var gData = response.getDataTable();
  initTable(gData,startDate(),endDate());
}
function getDate(data,x){
  var date = data.getValue(x,7);
  return date
}
function countOrder(data,colIndex,checkSt){
  var countRows = data.getNumberOfRows();
  var countIs = 0;
  var x = 0;
  while (x<countRows){
    if (data.getValue(x, colIndex) === checkSt){
      countIs++;
      x++;
    }
    else {
      x++
    }
  }
  return countIs;
}
function countBtwnNum(data,colIndex,checkStrt,checkEnd){
  var countRows = data.getNumberOfRows();
  var x = 0;
  var countIs = 0;
  while (x<countRows){
    if (data.getValue(x, colIndex) > checkStrt & data.getValue(x, colIndex) <= checkEnd){
      countIs++;
      x++;
    }
    else {
      x++
    }
  }
  return countIs;
}
function countTotal(data,colIndex,colToSum,checkSt){
  var countRows = data.getNumberOfRows();
  var countIs = 0;
  var x = 0;
  while (x<countRows){
    if (data.getValue(x, colIndex) == checkSt){
      countIs = countIs + data.getValue(x,colToSum);
      x++;
    }
    else {
      x++
    }
  }
  return countIs;
}
function dateChart(data){
  var result = google.visualization.data.group(
  data,
  [7],
  [{'column': 9, 'aggregation': google.visualization.data.sum, 'type': 'number'}]
  );
  drawColumnChart(result,"datebarchart_div")
}
function diffChart(data){
  var diffData = new google.visualization.DataTable();
  diffData.addColumn('string','Category');
  diffData.addColumn('number','Value');
  diffData.addRow(['Easy',countBtwnNum(data,4,0,3)])
  diffData.addRow(['Medium',countBtwnNum(data,4,4,7)])
  diffData.addRow(['Hard',countBtwnNum(data,4,8,10)])
  drawPieChart(diffData,"diffchart_div")
}
function custCatChart(data){
  var dateData = data;
  var countCust = countOrder(dateData,0,"Custom")
  var countStk = countOrder(dateData,0,"Stock")
  var countFill = countOrder(dateData,0,"Fill")
  var custCatData = new google.visualization.DataTable();
    custCatData.addColumn('string','Category');
    custCatData.addColumn('number','Value');
    custCatData.addRow(['Custom',countCust]);
    custCatData.addRow(['Stock',countStk]);
    custCatData.addRow(['Fill',countFill]);
  drawPieChart(custCatData,"custcatchart_div")
}
function typeChart(data){
  var dateData = data;
  var typeData = new google.visualization.DataTable();
    typeData.addColumn('string','Category');
    typeData.addColumn('number','Value');
    typeData.addRow(['Sublimation',countOrder(dateData,1,"SUBL")]);
    typeData.addRow(['Screen Print',countOrder(dateData,1,"SCPR")]);
  drawPieChart(typeData,"typechart_div")
}
function revChart(data){
  var dateData = data;
  var revData = new google.visualization.DataTable();
    revData.addColumn('string','Category');
    revData.addColumn('number','Value');
    revData.addRow(['New Mockup',countTotal(dateData,6,9,"No")]);
    revData.addRow(['Revision',countTotal(dateData,6,9,"Yes")]);
  drawPieChart(revData,"revchart_div")
}
function initTable(data,startDate,endDate){
  var countRows = data.getNumberOfRows();
  var countCol = data.getNumberOfColumns();
  var dateData = new google.visualization.DataTable();
  dateData.addColumn('string','Category')
  dateData.addColumn('string','Type')
  dateData.addColumn('string','Order Number')
  dateData.addColumn('string','Order Entry')
  dateData.addColumn('number','Difficulty')
  dateData.addColumn('string','On Time?')
  dateData.addColumn('string','Revision?')
  dateData.addColumn('date','Timestamp')
  dateData.addColumn('string','Additional Comments')
  dateData.addColumn('number','Mockups')
  dateData.addColumn('string','Artist')
  var y = 0; // Line Counter
  var z = 0; // Column
  var b = 0; // Row
  var addData = [];
  while (y < countRows){
    if (getDate(data,y) >= startDate & getDate(data,y) <= endDate){
      while (addData.length < countCol){
        addData.push(data.getValue(y,z));
        z++
      }
    }
    else {
      y++
    }
    if(addData.length > 0){
      dateData.insertRows(b,[addData]);
      addData = [];
      z = 0;
      b++;
      y++
    }
  };
  controller(dateData);
  drawTable(dateData,"table_div");
} // Initial Data Table
function controller(data){
  var dateData = data;
  dateChart(dateData);
  typeChart(dateData);
  diffChart(dateData);
  custCatChart(dateData);
  revChart(dateData);

}
function drawTable(data,table_divname){
  var chartData = data;
  var table = new google.visualization.Table(document.getElementById(table_divname));
  table.draw(data)
}
function drawPieChart(data,table_divname){
  var chartData = data;
  var pieChart = new google.visualization.PieChart(document.getElementById(table_divname));
  pieChart.draw(data)
}
function drawColumnChart(data,table_divname){
  var chartData = data;
  var columnChart = new google.visualization.ColumnChart(document.getElementById(table_divname));
  var option = {
    bar: { groupWidth: '95%' }
  }
  columnChart.draw(chartData,option)
}
