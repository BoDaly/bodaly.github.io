var database = firebase.database();
function loadDashboard(){
  /*var navDiv = document.createElement('div');
    navDiv.className = 'row'
    var navCol = document.createElement('nav')
      navCol.className = 'col'
      navDiv.appendChild(navCol)
    var navBar = document.createElement('nav');
      navBar.className = 'navbar navbar-dark bg-primary'
      navCol.appendChild(navBar)
    document.body.appendChild(navDiv)*/
  var container = document.createElement('div')
    container.className = 'container-fluid main-container noflow'
  var mainDiv = document.createElement('div');
    mainDiv.className = 'row'
    mainDiv.setAttribute('style','background-color:lightgrey')
    var spacer1 = document.createElement('div');
      spacer1.className = 'col-md-1'
      mainDiv.appendChild(spacer1)
    var bodyDiv = document.createElement('div');
      bodyDiv.className = 'col-md-10';
      bodyDiv.setAttribute('style','background-color:white')
      var dashHeaderContainer = document.createElement('div');
        dashHeaderContainer.className = 'row'
        var dashHeader = document.createElement('nav');
          dashHeader.className = 'navbar navbar-dark bg-primary'
          dashHeader.innerHTML = 'Jobs <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.71 12.71" height="15px" onmouseover="changeColor(this,`on`,`black`)" onmouseout="changeColor(this,`off`,`white`)" onclick="jobModal()"><path fill="white" d="M3.94-2.4A6.36,6.36,0,1,0,10.3,4,6.36,6.36,0,0,0,3.94-2.4ZM7.94,5h-3V8h-2V5h-3V3h3V0h2V3h3Z" transform="translate(2.42 2.4)"/></svg>'
          dashHeader.setAttribute('style','width:100%;color:white')
          dashHeaderContainer.appendChild(dashHeader)
        bodyDiv.appendChild(dashHeaderContainer)
      var dashContentContainer = document.createElement('div');
        dashContentContainer.className = 'row'
        var dashContent = document.createElement('div');
          dashContent.className = 'col'
            var dashTable = document.createElement('table')
            dashTable.id = 'dash-table'
            dashTable.className = 'table table-hover'
              var dashTableHead = document.createElement('thead')
              dashTableHead.innerHTML = '<tr id="table_hrow"><th>#</th><th>Style</th><th>Date</th><th>Status</th><th>Notes</th></tr>'
              dashTable.appendChild(dashTableHead)
            dashContent.appendChild(dashTable)
          dashContentContainer.appendChild(dashContent)
        bodyDiv.appendChild(dashContentContainer)
      mainDiv.appendChild(bodyDiv)
    var spacer2 = document.createElement('div');
      spacer2.className = 'col-md-1'
      mainDiv.appendChild(spacer2)
    container.appendChild(mainDiv)
    document.body.appendChild(container)
    var footer = document.createElement('div')
    footer.setAttribute('style','background-color:lightgrey;height:100%;margin-left:-15px;margin-right:-15px')
    container.appendChild(footer)
    populateDashboard();
}
function changeColor(a,state,color){
  if(state==='on'){
    a.firstChild.setAttribute('fill',color)
  }
  else{
    a.firstChild.setAttribute('fill',color)
  }
}
function jobModal(){
  var modal = document.createElement('div');
  modal.id = 'job-modal'
  modal.className = 'modal fade'
  modal.setAttribute('role','dialog')
    var modalDialog = document.createElement('div')
    modalDialog.className = 'modal-dialog'
    modal.appendChild(modalDialog)
      var modalContent = document.createElement('div')
      modalContent.className = 'modal-content'
      modalDialog.appendChild(modalContent)
        var modalHeader = document.createElement('div')
        modalHeader.className = 'modal-header'
          var headerButton = document.createElement('button');
          headerButton.type = 'button'
          headerButton.setAttribute('data-dismiss','modal')
          headerButton.className = 'close'
          headerButton.innerHTML = '&times;'
          modalHeader.appendChild(headerButton)
          var headerH4 = document.createElement('h4')
          headerH4.className = 'modal-title'
          headerH4.innerHTML = 'New Job'
          modalHeader.appendChild(headerH4)
        modalContent.appendChild(modalHeader)
        var modalBody = document.createElement('div')
        modalBody.className = 'modal-body'
        modalBody.id = 'jobmodal-body'
    // Modal Content
          var formGroup = document.createElement('div')
          formGroup.className = 'form-group'
          var input = document.createElement('input')
          input.id = 'job-input'
          input.className = 'form-control'
          input.type = 'text'
          input.placeholder = 'PS-120J'
          var inputLabel = document.createElement('label')
          inputLabel.innerHTML = 'Style'
          formGroup.appendChild(inputLabel)
          formGroup.appendChild(input)
          modalBody.appendChild(formGroup)
    // Modal Content End
        modalContent.appendChild(modalBody)
        var modalFooter = document.createElement('div')
        modalFooter.className = 'modal-footer'
        modalFooter.id = 'jobmodal-footer'
          var modalSave = document.createElement('button')
          modalSave.id = 'modal-save'
          modalSave.type = 'button'
          modalSave.className = 'btn btn-primary'
          modalSave.setAttribute('onclick','saveJob()')
          modalSave.setAttribute('data-dismiss','modal')
          modalSave.innerHTML = 'Save'
          modalFooter.appendChild(modalSave)
          var modalCancel = document.createElement('button')
          modalCancel.type = 'button'
          modalCancel.className = 'btn btn-danger'
          modalCancel.setAttribute('data-dismiss','modal')
          modalCancel.innerHTML = 'Cancel'
          modalFooter.appendChild(modalCancel)
        modalContent.appendChild(modalFooter)
  document.body.appendChild(modal)
  $('#job-modal').modal({
    show: true,
    keyboard: false,
    backdrop: 'static'
  });
}
function saveJob(){
  var ref = firebase.database().ref();
  var style = document.getElementById('job-input').value
  var update = {};
  update[style] = {
    'date': Date.now(),
    'status':'open',
  }
  ref.update(update)
  document.getElementById('job-modal').parentNode.removeChild(document.getElementById('job-modal'))
  document.getElementById('table-body').parentNode.removeChild(document.getElementById('table-body'))
  populateDashboard()
}
function populateDashboard(){
  var ref = firebase.database().ref();
  ref.orderByChild('date').once('value').then(function(snapshot){
    var dashTableBody = document.createElement('tbody')
    dashTableBody.id = 'table-body'
    document.getElementById('dash-table').appendChild(dashTableBody)
    var styles = [];
    var data = snapshot.val()
    snapshot.forEach(function(child){
    styles.push(child.key)})
    var tableHeaders = ['number','style','date','status','notes'];
    for(i=0;i<styles.length;i++){
      var trow = document.createElement('tr')
      for(ii=0;ii<tableHeaders.length;ii++){
        if(ii===0){
          var td = document.createElement('td')
          td.innerHTML = i+1
        }
        if(ii===1){
          var td = document.createElement('td')
          td.innerHTML = styles[i]
        }
        if(ii===2){
          var td = document.createElement('td')
          td.innerHTML = moment(data[styles[i]].date).format('MM/DD/YYYY | hh:mm a')
        }
        if(ii===3){
          var td = document.createElement('td')
          var statusSelect = document.createElement('select')
          statusSelect.setAttribute('onchange','updateStatus(this)')
          statusSelect.setAttribute('onfocusout','updateStatus(this)')
          td.setAttribute('ondblclick','enableStatus(this)')
          var options = ['open','sent','rejected','approved']
          for(iii=0;iii<options.length;iii++){
            var opt = document.createElement('option')
            opt.innerHTML = options[iii]
            statusSelect.appendChild(opt)
          }
          statusSelect.value = data[styles[i]].status
          if(statusSelect.value==='approved'){
            statusSelect.disabled = true
          }

          td.appendChild(statusSelect)
        }
        if(ii===4){
          var td = document.createElement('td')
          td.innerHTML = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" onmouseover="changeColor(this,`on`,`black`)" onmouseout="changeColor(this,`off`,`#007bff`)" onclick="showComments(this,`show`)" viewBox="0 0 8 8" height="15px"><path fill="#007bff" d="M.09,0A.08.08,0,0,0,0,.09V5.9A.09.09,0,0,0,.09,6H6L8,8V.08A.08.08,0,0,0,7.91,0H.09Z" transform="translate(0 0.01)"/></svg>'
        }
        trow.appendChild(td)

      }
      document.getElementById('table-body').appendChild(trow)
      var commentContainer = document.createElement('td')
      commentContainer.setAttribute('colspan',5)
      commentContainer.innerHTML = '<div class="input-group"><textarea style="width:100%" placeholder="add comment"></textarea><button class="btn btn-primary" onclick="saveComment(this)">Save</button></div>'
      var comments = document.createElement('div')
      comments.style.padding = '10px'
      if(data[styles[i]].notes){
        for(ii=0;ii<data[styles[i]].notes.length;ii++){
          var commentItem = document.createElement('div');
          commentItem.className = 'row small'
          commentItem.innerHTML = '<div style="color:#007bff;display:inline-block;padding:2px">'+moment(data[styles[i]].notes[ii].timestamp).format('MM/DD/YYYY | hh:mm a') + ':</div><div class="col-9" style="display:inline-block;padding:2px">' + data[styles[i]].notes[ii].note+'</div>'
          comments.appendChild(commentItem)
        }
      }
      commentContainer.appendChild(comments)
      commentContainer.style.display = 'none'
      document.getElementById('table-body').appendChild(commentContainer)
    }

  })
}
function updateStatus(a){
  var ref = firebase.database().ref(a.parentNode.previousSibling.previousSibling.innerHTML)
  update = {'status':a.value}
  ref.update(update)
  if(a.value==='approved'){
    a.disabled = true
  }
}
function enableStatus(a){
  a.firstChild.disabled = false
}
function showComments(a,status){
  if(status === 'hide'){
    a.parentNode.parentNode.nextSibling.setAttribute('style','display:none')
    a.setAttribute('onclick','showComments(this,"show")')
  }
  if(status === 'show'){
    a.parentNode.parentNode.nextSibling.setAttribute('style','')
    a.setAttribute('onclick','showComments(this,"hide")')
  }
}
function saveComment(a){
  var ref = firebase.database().ref(a.parentNode.parentNode.previousSibling.firstChild.nextSibling.innerHTML+'/notes')
  ref.once('value').then(function(snapshot){
    var comment = a.previousSibling.value
    var data = snapshot.val()
    if(data['notes']){
      var packet = data['notes'];
      packet.push({'timestamp':Date.now(),'note':comment})
      ref = firebase.database().ref(a.parentNode.parentNode.previousSibling.firstChild.nextSibling.innerHTML+'/notes')
      ref.update(packet)
    }
    else{
      var packet = {}
      packet['notes'] = [];
      packet['notes'].push({'timestamp':Date.now(),'note':comment})
      ref.update(packet)
    }
    updateComments(a)
    a.previousSibling.value = ""
  })
}
function updateComments(a){
  var ref = firebase.database().ref(a.parentNode.parentNode.previousSibling.firstChild.nextSibling.innerHTML+'/notes');
  ref.orderByChild('timestamp').once('value').then(function(snapshot){
    var data = snapshot.val()
    var comments = document.createElement('div')
    comments.style.padding = '10px'
    var data = snapshot.val()
    for(i=0;i<data.length;i++){
      var commentItem = document.createElement('div');
      commentItem.className = 'row small'
      commentItem.innerHTML = '<div style="color:#007bff;display:inline-block;padding:2px">'+moment(data[i].timestamp).format('MM/DD/YYYY | hh:mm a') + ':</div><div class="col-9" style="display:inline-block;padding:2px">' + data[i].note+'</div>'
      comments.appendChild(commentItem)
    }
    a.parentNode.parentNode.removeChild(a.parentNode.nextSibling)
    a.parentNode.parentNode.appendChild(comments)
  })

}
