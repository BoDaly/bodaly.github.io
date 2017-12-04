var styles = {};
var styleArray = [];
var designs = {};
var desArray = [];
var rosArray = [];
var sizeArray = [];
var database = firebase.database();
var orderNumber;
var jsonPacket = {}
var artCheckGrid =
    '<div class="check_row">'+
    '<div id="art_head_blank" class="check_row_head"></div>'+
    '<div id="art_head_loc" class="check_col_head">Location</div>'+
    '<div id="art_head_size" class="check_col_head">Size</div>'+
    '<div id="art_head_color" class="check_col_head">Color</div>'+
    '<div id="art_head_bart" class="check_col_head">Bad Art</div>'+
    '<div id="art_head_align" class="check_col_head">Alignment</div>'+
    '<div id="art_head_miss" class="check_col_head">Missing</div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Front Base</div>'+
    '<div id="frnt-base_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-base_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-base_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-base_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-base_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-base_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Back Base</div>'+
    '<div id="back-base_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-base_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-base_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-base_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-base_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-base_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Left Side Panel</div>'+
    '<div id="lft-panel_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-panel_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-panel_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-panel_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-panel_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-panel_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Right Side Panel</div>'+
    '<div id="rt-panel_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-panel_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-panel_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-panel_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-panel_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-panel_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Left Sleeve Base</div>'+
    '<div id="lft-slv_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Right Sleeve Base</div>'+
    '<div id="rt-slv_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Collar/Hood</div>'+
    '<div id="col-hood_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="col-hood_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="col-hood_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="col-hood_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="col-hood_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="col-hood_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Yoke/Gusset</div>'+
    '<div id="yk-gus_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="yk-gus_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="yk-gus_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="yk-gus_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="yk-gus_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="yk-gus_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Pocket</div>'+
    '<div id="pocket_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="pocket_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="pocket_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="pocket_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="pocket_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="pocket_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Liner</div>'+
    '<div id="liner_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="liner_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="liner_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="liner_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="liner_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="liner_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Waist/Cuff</div>'+
    '<div id="waist-cuff_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="waist-cuff_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="waist-cuff_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="waist-cuff_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="waist-cuff_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="waist-cuff_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Other</div>'+
    '<div id="other_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="other_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="other_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="other_bart" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="other_align" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="other_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="form-group">'+
    '<label class="comment_label">Define Issues:</label>'+
    '<textarea class="form-control" rows="5" id="define"></textarea>'+
    '</div>';
var rosCheckGrid =
    '<div class="check_row">'+
    '<div id="ros_head_blank" class="check_row_head"></div>'+
    '<div id="ros_head_loc" class="check_col_head">Location</div>'+
    '<div id="ros_head_size" class="check_col_head">Size</div>'+
    '<div id="ros_head_color" class="check_col_head">Color</div>'+
    '<div id="ros_head_treat" class="check_col_head">Treatment</div>'+
    '<div id="ros_head_case" class="check_col_head">Case</div>'+
    '<div id="ros_head_spell" class="check_col_head">Spelling</div>'+
    '<div id="ros_head_miss" class="check_col_head">Missing</div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Front Number</div>'+
    '<div id="frnt-num_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-num_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-num_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-num_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-num_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-num_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-num_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Back Number</div>'+
    '<div id="back-num_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-num_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-num_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-num_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-num_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-num_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-num_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Player Name</div>'+
    '<div id="play-name_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="play-name_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="play-name_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="play-name_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="play-name_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="play-name_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="play-name_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Team Name</div>'+
    '<div id="team-name_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="team-name_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="team-name_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="team-name_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="team-name_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="team-name_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="team-name_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Left Sleeve Number</div>'+
    '<div id="lft-slv-num_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-num_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-num_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-num_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-num_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-num_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-num_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Right Sleeve Number</div>'+
    '<div id="rt-slv-num_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-num_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-num_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-num_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-num_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-num_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-num_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Front Logo</div>'+
    '<div id="frnt-logo_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-logo_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-logo_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-logo_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-logo_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-logo_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="frnt-logo_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Back Logo</div>'+
    '<div id="back-logo_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-logo_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-logo_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-logo_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-logo_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-logo_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="back-logo_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row grid_alt">'+
    '<div class="check_row_head">Left Sleeve Logo</div>'+
    '<div id="lft-slv-logo_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-logo_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-logo_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-logo_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-logo_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-logo_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="lft-slv-logo_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="check_row">'+
    '<div class="check_row_head">Right Sleeve Logo</div>'+
    '<div id="rt-slv-logo_loc" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-logo_size" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-logo_color" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-logo_treat" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-logo_case" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-logo_spell" class="check_column"><input type = "checkbox"/></div>'+
    '<div id="rt-slv-logo_miss" class="check_column"><input type = "checkbox"/></div>'+
    '</div>'+
    '<div class="form-group">'+
    '<label class="comment_label">Define Issues:</label>'+
    '<textarea class="form-control" rows="5" id="define"></textarea>'+
    '</div>';
var artCheckPrp = '{"frnt-base":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"back-base":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"lft-panel":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"rt-panel":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"lft-slv":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"rt-slv":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"col-hood":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"yk-gus":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"pocket":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"liner":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"waist-cuff":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"other":{'+
    '"loc":false, "size":false, "color":false, "bart":false, "align":false, "miss":false},'+
  '"define":"TEXT"}';
var rosCheckPrp = '{"frnt-num":{'+
              '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"back-num":{'+
            '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"play-name":{'+
            '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"team-name":{'+
              '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"lft-slv-num":{'+
              '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"rt-slv-num":{'+
              '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"frnt-logo":{'+
              '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"back-logo":{'+
              '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"lft-slv-logo":{'+
              '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"rt-slv-logo":{'+
              '"loc":false, "size":false, "color":false, "treat":false, "case":false, "spell":false, "miss":false},'+
            '"define":"TEXT"}';
function errorField(id){
  var element = document.getElementById(id);
  var orderFieldClass = element.className;
  element.className = orderFieldClass + " border-danger text-danger";
  element.setAttribute('onmouseover','clearError("'+id+'")')
}
function clearError(id){
  var element = document.getElementById(id);
  classLook = document.getElementById(id).className.replace(/\sborder-danger text-danger/g,"");
  element.className = classLook;
  element.removeAttribute('onmouseover')
}
function submitOrderInfo() {
  var orderNum = document.getElementById('ordernum').value;
  var qaAssoc = document.getElementById('associate').value;
  var roArtist = document.getElementById('artist').value;
  var orderField = document.getElementById('ordernum');
  var orderFieldClass = document.getElementById('ordernum').className;
  var ref = firebase.database().ref("orders/"+orderNum);
  ref.once('value').then(function(snapshot){
    if(snapshot.exists() === false){
      if(qaAssoc !== '' && roArtist !== ''){
        if(confirm("You will not be able to edit anything past this point!\nARE YOU SURE?") == false){
          return;
        }
        jsonPacket = {
          "revisions":[{
            "qa_associate":qaAssoc,
            "rollout_artist":roArtist,
            "styles":Object.assign({},styles),
            "rev_date": "",
          }],
          "current_rev":0,
          "all_designs":desArray
        }
        orderNumber = orderNum
        ref.update(jsonPacket);
        document.getElementById('setup').className = "list-group-item disabled navborder";
        var doneBtn = document.getElementById('done_btn');
        doneBtn.setAttribute('onClick','submitCheckInfo(0,1,0)');
        nextStyle(0,0,0);
      }
      else{
        if(qaAssoc === ''){
          errorField('associate')
        }
        if(roArtist === ''){
          errorField('artist')
        }
      }
    }
    else{
      var badge;
      var orderGroup = document.getElementById('ordernum_group');
      if(document.getElementById('error_badge') !== null){
        badge = document.getElementById('error_badge');
        orderGroup.removeChild(badge);
      }
      badge = document.createElement('span');
      badge.id = "error_badge";
      badge.className = "badge badge-danger";
      if(document.getElementById('ordernum').value === ""){
        badge.innerHTML = "Order Number left blank";
      }
      else{
        badge.innerHTML = "Order Number already exists";
      }
      orderGroup.appendChild(badge);
      errorField('ordernum')
    }
  })
}
function addStyles(type){
  var styleList = document.getElementById('styleList');
  if(type === undefined || type === 'edit'){
    var sku = document.getElementById('styleSku');
    var styleSkuVal = document.getElementById('styleSku').value.toString();
    if(styleSkuVal !== "" && type !== 'edit'){
      var styleNav = document.getElementById('accordian');
      var navStyle = document.createElement('div');
      navStyle.id = styleSkuVal+'-group';
      navStyle.className = 'list-group col-no-margin';
      styleNav.appendChild(navStyle);

      var styleItem = document.createElement('div')
      styleItem.id = styleSkuVal+'-item';
      styleItem.className = 'list-group-item navborder';
      styleItem.style = 'border-radius:0%';
      styleItem.innerHTML = styleSkuVal;
      navStyle.appendChild(styleItem);

      var newStyle = document.createElement('div');
      newStyle.id = styleSkuVal;
      newStyle.className = 'input-group';
      newStyle.innerHTML =
      '<input class="form-control" type="text" placeholder="'+styleSkuVal+'" readonly>'+
      '<button type="button" class="input-group-addon btn btn-secondary" onclick="styleAttr(`'+styleSkuVal+'`,`edit`)"><img src="pencil-2x.png"></button>'+
      '<button type="button" class="input-group-addon btn btn-danger" onclick="removeStyle(`'+styleSkuVal+'`)"><img src="trash-2x.png"></button>';
      styleList.appendChild(newStyle);

      var designLib = Object.keys(designs);
      var desNav = document.createElement('div');
      desNav.id = styleSkuVal+'_desnav';
      desNav.className = 'list-group'
      var styDes = Object.keys(styles[styleSkuVal].designs);
      for (i=0;i<desArray.length;i++){
        domId = 'checkbox_'+desArray[i];
        checkBox = document.getElementById(domId);
        if(checkBox.checked == true){
          desNav.innerHTML = desNav.innerHTML + '<div id="'+styleSkuVal+'_'+desArray[i]+'_nav" class="list-group-item nav-disabled navborder">'+desArray[i]+'</div>'
        }
      }

      navStyle.appendChild(desNav);
      console.log(styles);
      sku.value = ""

    }
  }
  else{
    var appDes = Object.keys(jsonPacket.revisions[jsonPacket['current_rev']].styles[type].designs);
    var styleNav = document.getElementById('accordian');
    var navStyle = document.createElement('div');
    navStyle.id = type+'-group';
    navStyle.className = 'list-group col-no-margin';
    styleNav.appendChild(navStyle);

    var styleItem = document.createElement('div')
    styleItem.id = type+'-item';
    styleItem.className = 'list-group-item navborder';
    styleItem.style = 'border-radius:0%';
    styleItem.innerHTML = type;
    navStyle.appendChild(styleItem);

    var newStyle = document.createElement('div');
    newStyle.id = type;
    newStyle.className = 'input-group';
    newStyle.innerHTML =
    '<input class="form-control" type="text" placeholder="'+type+'" readonly>';
    /*'<button type="button" class="input-group-addon btn btn-secondary" onclick="styleAttr(`'+s+'`,`edit`)"><img src="pencil-2x.png"></button>'+
    '<button type="button" class="input-group-addon btn btn-danger" onclick="removeStyle(`'+s+'`)"><img src="trash-2x.png"></button>';*/
    styleList.appendChild(newStyle);

    var desNav = document.createElement('div');
    desNav.id = type+'_desnav';
    desNav.className = 'list-group'
    for (i=0;i<appDes.length;i++){
      desNav.innerHTML = desNav.innerHTML + '<div id="'+type+'_'+appDes[i]+'_nav" class="list-group-item nav-disabled navborder">'+appDes[i]+'</div>'
    }

    navStyle.appendChild(desNav);
  }
}
function removeStyle(id){
  var style = document.getElementById(id);
  style.parentNode.removeChild(style);
  style = document.getElementById(id+'-group');
  style.parentNode.removeChild(style);
  var styDex = styleArray.indexOf(id);
  styleArray.splice(1,styDex);
  console.log(styleArray);
  delete styles[id];
  console.log(styles);
}
function addDesigns(d){
  var styleBtn = document.getElementById('styles_btn')
  var name = document.getElementById('designName');
  var designList = document.getElementById('designList');
  if(d === undefined){
    var desNameVal = document.getElementById('designName').value;
    if(desNameVal !== ""){
      if(styleBtn.className == 'input-group-addon btn btn-secondary disabled'){
        styleBtn.className = 'input-group-addon btn btn-success';
        styleBtn.setAttribute('onclick','styleAttr()')
        document.getElementById('styleSku').readOnly = false;
      }
      var newDesign = document.createElement('div');
      newDesign.id = desNameVal;
      newDesign.className = 'input-group';
      newDesign.innerHTML =
      '<input class="form-control" type="text" placeholder="'+desNameVal+'" readonly>'+
      '<button type="button" class="input-group-addon btn btn-danger" onclick="removeDesign(`'+desNameVal+'`)"><img src="trash-2x.png"></button>';
      designList.appendChild(newDesign);
      var applicables = document.getElementById('applicables');
      var selector = document.createElement('div')
      selector.className = 'form-check'
      selector.id = desNameVal+'selector'
      selector.innerHTML =
      '<label class="form-check-label">'+
      '<input id="checkbox_'+desNameVal+'" class="form-check-input" type="checkbox" value="'+desNameVal+'" /> '+desNameVal+
      '</label>';
      applicables.appendChild(selector);
      desArray.push(desNameVal);
      designs[desNameVal] = {};
      console.log(desArray);
      console.log(designs);
      name.value = ""
    }
  }
  else{
    var newDesign = document.createElement('div');
    newDesign.id = d;
    newDesign.className = 'input-group';
    newDesign.innerHTML =
    '<input class="form-control" type="text" placeholder="'+d+'" readonly>';
    designList.appendChild(newDesign);
  }
}
function removeDesign(id){
  var nav;
  var design = document.getElementById(id);
  design.parentNode.removeChild(design);
  var selector = document.getElementById(id+'selector');
  selector.parentNode.removeChild(selector);
  var styleLib = Object.keys(styles);
  for(i=0;i<styleLib.length;i++){
    nav = document.getElementById(styleLib[i]+'_'+id+'_nav');
    if (nav !== null){
      nav.parentNode.removeChild(nav);
      delete styles[styleLib[i]].designs[id];
    }
  }
  var desIndex = desArray.indexOf(id);
  desArray.splice(1,desIndex)
  delete designs[id];
  console.log(desArray);
  console.log(designs);
}
function styleAttr(id,type){
  var designLib = Object.keys(designs);

  if (styles[id]!== undefined){
    var styDes = Object.keys(styles[id].designs);
    for (i=0;i<desArray.length;i++){
      domId = 'checkbox_'+desArray[i];
      checkBox = document.getElementById(domId);
      if (styDes[styDes.indexOf(desArray[i])] !== undefined){
        checkBox.checked = true;
      }
      else {
        checkBox.checked = false;
      }
    }
  }
  else{
    for (i=0;i<desArray.length;i++){
      domId = 'checkbox_'+desArray[i];
      checkBox = document.getElementById(domId);
      checkBox.checked = false;
    }
  }

  saveBtn = document.getElementById('modal_save');
  if (type == 'edit'){
    saveBtn.setAttribute('onclick', 'saveAttr("'+id+'","'+type+'")');
  }
  else{
    saveBtn.setAttribute('onclick', 'saveAttr("'+id+'")');
  }
  $('#myModal').modal({
    show: true
  });
}
function saveAttr(sid,type){
  var checkBox, domId, designName, dDex;
  var collectDes = {};

  for (i=0;i<desArray.length;i++){
    domId = 'checkbox_'+desArray[i];
    checkBox = document.getElementById(domId);
    console.log(checkBox.checked);
    if(checkBox.checked === true){
      designName = checkBox.value;
      collectDes[designName] = {
        'issues':{
          "gen-art":JSON.parse(artCheckPrp),
          "gen-ros":JSON.parse(rosCheckPrp)
        }
      }
    }
  }
  console.log(collectDes);
  styles[sid] = {"designs":collectDes};
  console.log(styles);
  console.log(type);
  if (type !== 'edit'){
    styleArray.push(sid);
    addStyles();
  }
  else{
    var desNav = document.getElementById(sid+'_desnav');
    desNav.innerHTML = ""
    for (i=0;i<desArray.length;i++){
      domId = 'checkbox_'+desArray[i];
      checkBox = document.getElementById(domId);
      if(checkBox.checked == true){
        desNav.innerHTML = desNav.innerHTML + '<div id="'+sid+'_'+desArray[i]+'_nav" class="list-group-item nav-disabled navborder">'+desArray[i]+'</div>'
      }
    }
    console.log(styles);
  }
}
function styleUpdate(){
  var styInput = document.getElementById('styleSku').value;
  var addBtn = document.getElementById('styles_btn');
  addBtn.setAttribute("onclick","styleAttr('"+styInput+"')");
}
function nextStyle(sDex,dDex,init){
  var doneBtn = document.getElementById('done_btn');
  if(sDex === styleArray.length){
    var currentDate = new Date();
    var currentRev = jsonPacket.current_rev
    var ref = firebase.database().ref("orders/"+orderNumber+"/revisions/"+currentRev+"/");
    var update = {"rev_date":currentDate}
    ref.update(update);
    var header = document.getElementById('header');
    header.innerHTML = '<h1>FINISHED</h1>';
    var body = document.getElementById('body');
    body.innerHTML=
    'Keep it up!';
    doneBtn.setAttribute('onClick','reLoad()');
    var oldKey = styleArray[(sDex-1)];
    document.getElementById(oldKey+'-item').className = "list-group-item disabled navborder";
    return;
  }
  var styleKey = styleArray[sDex];
  var desKey = desArray[dDex];
  var designLib = Object.keys(styles[styleKey].designs);
  var desVerify = designLib.indexOf(desKey);
  var oldDDex = dDex-1;
  $('html,body').scrollTop(0);
  if(oldDDex !== -1){
    if(document.getElementById(styleArray[sDex]+'_'+desArray[oldDDex]+'_nav')){
      document.getElementById(styleArray[sDex]+'_'+desArray[oldDDex]+'_nav').className = "list-group-item nav-disabled navborder"
    }
  }
  if(desVerify !== -1){
    if(init === 1){
      var oldKey = styleArray[(sDex-1)];
      document.getElementById(oldKey+'-item').className = "list-group-item disabled navborder";
    }
    doneBtn.setAttribute('onClick','submitCheckInfo('+sDex+','+dDex+',0)');
    console.log(styleKey);
    var artGenGrid = artCheckGrid.replace(/id="/g, 'id="'+styleArray[sDex]+'_'+desArray[dDex]+'_gen-art_');
    var rosGenGrid= rosCheckGrid.replace(/id="/g, 'id="'+styleArray[sDex]+'_'+desArray[dDex]+'_gen-ros_');
    var navItem = document.getElementById(styleKey+'-item');
    navItem.className = 'list-group-item active navborder';
    var navDes = document.getElementById(styleKey+'_'+desKey+'_nav')
    navDes.className = "nav-active navborder";
    var header = document.getElementById('header');
    header.innerHTML = '<h1>'+styleKey+' : '+desKey+'</h1>';
    var body = document.getElementById('body');
    body.innerHTML=
    '<div class="iss_header top_hdr">General Artwork Issues</div>'+
    '<div class="check_container" id="general_art">'+
    artGenGrid+
    '</div>'+
    '<div class="iss_header">General Roster Issues</div>'+
    '<div class="check_container" id="general_ros">'+
    rosGenGrid+
    '</div>'+
    '<div id="iss_btn_div">'+
    '<button id="add_iss_btn" class="btn btn-success" onclick="addIssModal('+sDex+','+dDex+')">Add Specific Issue</button>'
    '</div>';
  }
  else{
    if(dDex !== (desArray.length)){
      nextStyle(sDex,(dDex+1),init);
      return;
    }
    else{
      nextStyle((sDex+1),0,1);
      return;
    }
  };
  if(dDex === (desArray.length)){
    doneBtn.setAttribute('onClick','submitCheckInfo('+(sDex+1)+',0,1)');
  }
}
function addIssModal(sDex,dDex){
  var myModal = document.getElementById('myModal');
  var modalContent =
    '<div class="modal-dialog">'+
    '<div class="modal-content">'+
    '<div class="modal-header">'+
    '<button type="button" class="close" data-dismiss="modal" onclick="canIssModal()">&times;</button>'+
    '<h4 class="modal-title">Specific Issues</h4>'+
    '</div>'+
    '<div id="iss_setup" class="modal-body">'+
    '<div class="form-group">'+
    'Issue Effects a Specific:<br/>'+
    '<label class="custom-control custom-radio">'+
      '<input id="size_spec" name="iss_spec" type="radio" class="custom-control-input" onchange="issType()">'+
      '<span class="custom-control-indicator"></span>'+
      '<span class="custom-control-description">Size</span>'+
    '</label>'+
    '<label class="custom-control custom-radio">'+
      '<input id="ros_spec" name="iss_spec" type="radio" class="custom-control-input" onchange="issType()">'+
      '<span class="custom-control-indicator"></span>'+
      '<span class="custom-control-description">Roster Item</span>'+
    '</label>'+
    '</div>'+
    '<div id="iss_form" class="form-group">'+
    '</div>'+
    '<div class="form-group">'+
    'Type of Issue:<br/>'+
    '<label class="custom-control custom-radio">'+
      '<input id="art_iss" name="iss_type" type="radio" class="custom-control-input">'+
      '<span class="custom-control-indicator"></span>'+
      '<span class="custom-control-description">Art Issue</span>'+
    '</label>'+
    '<label class="custom-control custom-radio">'+
      '<input id="ros_iss" name="iss_type" type="radio" class="custom-control-input">'+
      '<span class="custom-control-indicator"></span>'+
      '<span class="custom-control-description">Roster Issue</span>'+
    '</label>'+
    '</div>'+
    '<div class="modal-footer">'+
      '<button id="modal_save" type="button" class="btn btn-primary" onclick="addIssue('+sDex+','+dDex+')" data-dismiss="modal">Save</button>'+
      '<button type="button" class="btn btn-danger" data-dismiss="modal" onclick="canIssModal()">Cancel</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
  var issModal = document.createElement('div');
  issModal.id = 'iss_modal';
  issModal.className = 'modal fade';
  issModal.role = 'dialog';
  issModal.innerHTML = modalContent;
  myModal.parentNode.insertBefore(issModal,myModal);
  $('#iss_modal').modal({
    show: true,
    keyboard: false,
    backdrop: 'static'
  });
}
function canIssModal(){
  var issModal = document.getElementById('iss_modal');
  issModal.parentNode.removeChild(issModal)
}
function addIssue(sDex,dDex){
  var rosSpec = document.getElementById('ros_spec');
  var sizeSpec = document.getElementById('size_spec');
  var rosIss = document.getElementById('ros_iss');
  var artIss = document.getElementById('art_iss');
  var addIssBtn = document.querySelector('#iss_btn_div');
  var rosItem, sizeItem, rosId;
  var rosSpecGrid = rosCheckGrid;
  var artSpecGrid = artCheckGrid;
  if(rosIss.checked === true){
    var rosIssue = document.createElement('div');
    rosIssue.className = "check_container";
    if(rosSpec.checked === true){
      rosItem = document.getElementById('ros_itm_name').value;
      rosId = rosItem.replace(/\ /g,'-');
      rosSpecGrid = rosSpecGrid.replace(/id="/g,'id="'+styleArray[sDex]+'_'+desArray[dDex]+'_'+rosId+'-ros_')
      rosIssue.id = rosItem + '_ros_iss';
      rosIssue.innerHTML = '<div class="iss_header">' + rosItem + ': Roster Issue</div>' + rosSpecGrid;
      jsonPacket.revisions[jsonPacket.current_rev].styles[styleArray[sDex]].designs[desArray[dDex]]['issues'][rosId+'-ros'] = JSON.parse(rosCheckPrp);
      rosArray.push(rosItem);
    };
    if(sizeSpec.checked === true){
      sizeItem = document.getElementById('size_name').value;
      rosSpecGrid = rosSpecGrid.replace(/id="/g,'id="'+styleArray[sDex]+'_'+desArray[dDex]+'_'+sizeItem+'-ros_')
      rosIssue.id = sizeItem + '_ros_iss';
      rosIssue.innerHTML = '<div class="iss_header">' + sizeItem + ': Roster Issue</div>' + rosSpecGrid;
      jsonPacket.styles[styleArray[sDex]].designs[desArray[dDex]]['issues'][sizeItem+'-ros'] = JSON.parse(rosCheckPrp);
      sizeArray.push(sizeItem);
    };
    addIssBtn.parentNode.insertBefore(rosIssue,addIssBtn);
  };
  if(artIss.checked === true){
    var artIssue = document.createElement('div');
    artIssue.className = "check_container";
    if(rosSpec.checked === true){
      rosItem = document.getElementById('ros_itm_name').value;
      rosId = rosItem.replace(/\ /g,'-');
      artSpecGrid = artSpecGrid.replace(/id="/g,'id="'+styleArray[sDex]+'_'+desArray[dDex]+'_'+rosId+'-art_')
      artIssue.id = rosItem + '_issue';
      artIssue.innerHTML = '<div class="iss_header">' + rosItem + ': Art Issue</div>' + artSpecGrid;
      jsonPacket.revisions[jsonPacket.current_rev].styles[styleArray[sDex]].designs[desArray[dDex]]['issues'][rosId+'-art'] = JSON.parse(artCheckPrp);
      rosArray.push(rosItem);
    }
    if(sizeSpec.checked === true){
      sizeItem = document.getElementById('size_name').value;
      artSpecGrid = artSpecGrid.replace(/id="/g,'id="'+styleArray[sDex]+'_'+desArray[dDex]+'_'+sizeItem+'-art_')
      artIssue.id = sizeItem + '_issue';
      artIssue.innerHTML = '<div class="iss_header">' + sizeItem + ': Art Issue</div>' + artSpecGrid;
      jsonPacket.revisions[jsonPacket.current_rev].styles[styleArray[sDex]].designs[desArray[dDex]]['issues'][sizeItem+'-art'] = JSON.parse(artCheckPrp);
      sizeArray.push(sizeItem);
    }
    addIssBtn.parentNode.insertBefore(artIssue,addIssBtn);
  };
  canIssModal();
}
function issType(){
  var rosSpec = document.getElementById('ros_spec');
  var sizeSpec = document.getElementById('size_spec');
  var issForm = document.getElementById('iss_form');
  if(rosSpec.checked === true){
    issForm.innerHTML =
    '<label for="ros_itm_name">Name and/or Number:</label>'+
    '<input type="text" class="form-control" id="ros_itm_name" placeholder="e.g.JOHNSON 35">';
  }
  if(sizeSpec.checked === true){
    issForm.innerHTML =
    '<label for="size_name">Applicable Size:</label>'+
    '<select id="size_name" class="form-control">'+
    '<option value="">Choose Size</option>'+
    '<option value="YXS">YXS</option>'+
    '<option value="YS">YS</option>'+
    '<option value="YM">YM</option>'+
    '<option value="YL">YL</option>'+
    '<option value="YXL">YXL</option>'+
    '<option value="Y2X">Y2X</option>'+
    '<option value="XS">XS</option>'+
    '<option value="SM">SM</option>'+
    '<option value="MD">MD</option>'+
    '<option value="LG">LG</option>'+
    '<option value="XL">XL</option>'+
    '<option value="2X">2X</option>'+
    '<option value="3X">3X</option>'+
    '<option value="4X">4X</option>'+
    '<option value="5X">5X</option>'+
    '<option value="6X">6X</option>'+
    '<option value="OS">OS</option>'+
    '<option value="OTHER">OTHER</option>'+
    '</select>';
  }
}
function submitCheckInfo(sDex,dDex,init){
  var results = document.querySelectorAll('.check_column')
  var define = document.querySelectorAll('textarea')
  var style = styleArray[sDex];
  var design = desArray[dDex];
  var id, issSpec, checkBox, textArea;
  var re = /([^_]+)_([^_]+)_([^_]+)_([^_]+)_([^_]+)/;
  var reDef = /([^_]+)_([^_]+)_([^_]+)_([^_]+)/;
  for(i=0;i<results.length;i++){
    id = re.exec(results[i].id);
    checkBox = document.getElementById(id[0]);
    jsonPacket.revisions[jsonPacket.current_rev].styles[style].designs[design]['issues'][id[3]][id[4]][id[5]] = checkBox.firstChild.checked;
  }
  for(i=0;i<define.length;i++){
    id = reDef.exec(define[i].id);
    textArea = document.getElementById(id[0]);
    jsonPacket.revisions[jsonPacket.current_rev].styles[id[1]].designs[id[2]]['issues'][id[3]][id[4]] = textArea.value;
  }
  var ref = firebase.database().ref("orders/"+orderNumber);
  ref.update(jsonPacket);
  console.log(jsonPacket);
  nextStyle(sDex,dDex+1,init);
}
function reLoad(){
  location.reload();
}
//----Navigation-----
function activeLink(active,wait1,wait2){
  var previousLink = document.getElementsByClassName("nav-link active");
  var activeLink = document.getElementById(active);
  if(activeLink.className === "nav-link active"||activeLink.className === "nav-link disabled"){
    return;
  }
  else{
    if(confirm("YOU WILL LOSE ALL YOUR WORK!\nAre you SURE you want to navigate away from this screen?!") == false){
      return;
    }
    activeLink.className = "nav-link active";
  }
  var wait1Link = document.getElementById(wait1);
  if(wait1Link.className == "nav-link disabled"){
  }
  else{
    wait1Link.className = "nav-link a_waiting"
  }
  var wait2Link = document.getElementById(wait2);
  if(wait2Link.className == "nav-link disabled"){
  }
  else{
    wait2Link.className = "nav-link a_waiting"
  }
  if(activeLink.id === "neworder_link"){
    return loadNewOrder();
  };
  if(activeLink.id === "newrev_link"){
      return loadNewRev();
  };

}
function loadNewOrder(){
  clearGlobals();
  currentRev = 0;
  var content = document.getElementById('content');
  content.innerHTML =
    '<div id="navbar" class="col-md-2 col-shadows" style="background-color:white">'+
    '<div id="accordian" role="tablist">'+
    '<div class="list-group col-no-margin">'+
    '<div id="setup" class="list-group-item active navborder" style="border-radius:0%" role="tab">Setup</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="col-md-10">'+
    '<div class="row py-4">'+
    '<div class="col-md-1">'+
    '</div>'+
    '<div id="form_card" class="col-md-10 col-shadows" style="background-color:white">'+
    '<div class="row dark">'+
    '<div id="header" class="col-md-12"><h1>NEW ORDER INFO</h1>'+
    '</div>'+
    '</div>'+
    '<div class="row py-2">'+
    '<div id="body" class="col">'+
    '<form>'+
    '<div id="ordernum_group" class="form-group">'+
    '<label for="ordernum">Order Number</label>'+
    '<input type="text" class="form-control" id="ordernum" placeholder="e.g.FG123456">'+
    '</div>'+
    '<div class="form-row">'+
    '<div class="form-group col-md">'+
    '<label for="associate">QA Associate</label>'+
    '<select id="associate" class="form-control">'+
    '<option value = "">Choose Associate</option>'+
    '<option value = "Nicole Kendrick">Nicole Kendrick</option>'+
    '<option value = "Jynette Tigner">Jynette Tigner</option>'+
    '</select>'+
    '</div>'+
    '<div class="form-group col-md">'+
    '<label for="artist">Roll-Out Artist</label>'+
    '<select id="artist" class="form-control">'+
    '<option value = "">Choose Artist</option>'+
    '<option value = "Simon Avila">Simon Avila</option>'+
    '<option value = "Brandon Durfey">Brandon Durfey</option>'+
    '<option value = "Dane Jensen">Dane Jensen</option>'+
    '<option value = "Kelsy Rice">Kelsy Rice</option>'+
    '<option value = "Jynette Tigner">Jynette Tigner</option>'+
    '<option value = "Kaitlund Zupanic">Kaitlund Zupanic</option>'+
    '<option value = "VLead">VLead</option>'+
    '<option value = "InScribe">InScribe</option>'+
    '</select>'+
    '</div>'+
    '</div>'+
    '<div class="form-group">'+
    '<label for="designs">Add Designs</label>'+
    '<div class="input-group" id="designs">'+
    '<button type="button" class="input-group-addon btn btn-success" onclick="addDesigns()">+</button>'+
    '<input type="text" id="designName" class="form-control" placeholder="e.g. Black/Gold">'+
    '</div>'+
    '<div id="designList" class="form-group">'+
    '</div>'+
    '</div>'+
    '<div class="form-group">'+
    '<label for="styles">Add Styles</label>'+
    '<div class="input-group" id="styles">'+
    '<button id="styles_btn" type="button" class="input-group-addon btn btn-secondary disabled">+</button>'+
    '<input id="styleSku" type="text" class="form-control" placeholder="e.g. ST-120J-SUB" onchange="styleUpdate()" readonly>'+
    '</div>'+
    '<div id="styleList" class="form-group">'+
    '</div>'+
    '</div>'+
    '</form>'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<button id="done_btn" type="button" class="btn btn-primary btn-block" style="border-radius:0%" onclick="submitOrderInfo()">Done</button>'+
    '</div>'+
    '</div>'+
    '<div id="myModal" class="modal fade" role="dialog">'+
    '<div class="modal-dialog">'+
    '<div class="modal-content">'+
    '<div class="modal-header">'+
    '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
    '<h4 class="modal-title">Applicable Designs</h4>'+
    '</div>'+
    '<div id="design_modal" class="modal-body">'+
    '<div id="applicables"></div>'+
    '</div>'+
    '<div class="modal-footer">'+
    '<button id="modal_save" type="button" class="btn btn-primary" onclick="saveAttr()" data-dismiss="modal">Save</button>'+
    '<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="col-md-1">'+
    '</div>'+
    '</div>'+
    '</div>';
  var footer = document.getElementById('footer');
  footer.innerHTML =
    '<div class="col-md-2 col-shadows" style="position:relative;background-color:white"></div>'+
    '<div class="col-md-10" style="position:relative"></div>';

}
function loadNewRev(){
  clearGlobals();
  var content = document.getElementById('content');
  content.innerHTML =
    '<div id="navbar" class="col-md-2 col-shadows" style="background-color:white">'+
    '<div id="accordian" role="tablist">'+
    '<div class="list-group col-no-margin">'+
    '<div id="setup" class="list-group-item active navborder" style="border-radius:0%" role="tab">Setup</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="col-md-10">'+
    '<div class="row py-4">'+
    '<div class="col-md-1">'+
    '</div>'+
    '<div id="form_card" class="col-md-10 col-shadows" style="background-color:white">'+
    '<div class="row dark">'+
    '<div id="header" class="col-md-12"><h1>NEW REVISION</h1>'+
    '</div>'+
    '</div>'+
    '<div class="row py-2">'+
    '<div id="body" class="col">'+
    '<form>'+
    '<div id="ordernum_group" class="form-group">'+
    '<label for="ordernum">Order Number</label>'+
    '<div class="input-group">'+
    '<button id="order_confirm" type="button" class="input-group-addon btn btn-primary" onclick="checkOrderNum(true)">&#10003;</button>'+
    '<input type="text" class="form-control" id="ordernum" placeholder="e.g.FG123456"></input>'+
    '</div>'+
    '</div>'+
    '<div class="form-row">'+
    '<div class="form-group col-md">'+
    '<label for="associate">QA Associate</label>'+
    '<select id="associate" class="form-control">'+
    '<option value = "">Choose Associate</option>'+
    '<option value = "Nicole Kendrick">Nicole Kendrick</option>'+
    '<option value = "Jynette Tigner">Jynette Tigner</option>'+
    '</select>'+
    '</div>'+
    '<div class="form-group col-md">'+
    '<label for="artist">Roll-Out Artist</label>'+
    '<select id="artist" class="form-control">'+
    '<option value = "">Choose Artist</option>'+
    '<option value = "Simon Avila">Simon Avila</option>'+
    '<option value = "Brandon Durfey">Brandon Durfey</option>'+
    '<option value = "Dane Jensen">Dane Jensen</option>'+
    '<option value = "Kelsy Rice">Kelsy Rice</option>'+
    '<option value = "Jynette Tigner">Jynette Tigner</option>'+
    '<option value = "Kaitlund Zupanic">Kaitlund Zupanic</option>'+
    '<option value = "VLead">VLead</option>'+
    '<option value = "InScribe">InScribe</option>'+
    '</select>'+
    '</div>'+
    '</div>'+
    '<div class="form-group">'+
    '<label for="designs">Designs</label>'+
    '<div class="input-group" id="designs">'+
    '<button type="button" class="input-group-addon btn btn-secondary disabled " disabled="true"'+/*onclick="addDesigns()"*/'>+</button>'+
    '<input type="text" id="designName" class="form-control" placeholder="e.g. Black/Gold" disabled="true" readonly>'+
    '</div>'+
    '<div id="designList" class="form-group">'+
    '</div>'+
    '</div>'+
    '<div class="form-group">'+
    '<label for="styles">Styles</label>'+
    '<div class="input-group" id="styles">'+
    '<button id="styles_btn" type="button" class="input-group-addon btn btn-secondary disabled" disabled="true">+</button>'+
    '<input id="styleSku" type="text" class="form-control" placeholder="e.g. ST-120J-SUB" onchange="styleUpdate()" disabled="true" readonly>'+
    '</div>'+
    '<div id="styleList" class="form-group">'+
    '</div>'+
    '</div>'+
    '</form>'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<button id="done_btn" type="button" class="btn btn-primary btn-block" style="border-radius:0%" onclick="submitNewRev()">Done</button>'+
    '</div>'+
    '</div>'+
    '<div id="myModal" class="modal fade" role="dialog">'+
    '<div class="modal-dialog">'+
    '<div class="modal-content">'+
    '<div class="modal-header">'+
    '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
    '<h4 class="modal-title">Applicable Designs</h4>'+
    '</div>'+
    '<div id="design_modal" class="modal-body">'+
    '<div id="applicables"></div>'+
    '</div>'+
    '<div class="modal-footer">'+
    '<button id="modal_save" type="button" class="btn btn-primary" onclick="saveAttr()" data-dismiss="modal">Save</button>'+
    '<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="col-md-1">'+
    '</div>'+
    '</div>'+
    '</div>';
  var footer = document.getElementById('footer');
  footer.innerHTML =
    '<div class="col-md-2 col-shadows" style="position:relative;background-color:white"></div>'+
    '<div class="col-md-10" style="position:relative"></div>';

}
function clearGlobals(){
  styles = {};
  styleArray = [];
  designs = {};
  desArray = [];
  rosArray = [];
  sizeArray = [];
  orderNumber;
  jsonPacket = {}
}
function checkOrderNum(first){
  orderNumber = document.getElementById('ordernum').value
  if(document.getElementById('ordernum').value !== ""){
    if(first === true){
      document.getElementById('order_confirm')
      .setAttribute('onclick','checkOrderNum(false)');
      loadNewRev();
      document.getElementById('ordernum').value = orderNumber
    }
    var ref = firebase.database().ref("orders/"+orderNumber);
    ref.once('value').then(function(snapshot){
      if(snapshot.exists() === true){
        jsonPacket = snapshot.val();
        desArray = jsonPacket.all_designs
        styleArray = Object.keys(jsonPacket.revisions[jsonPacket.current_rev].styles)
        document.getElementById('artist').value = jsonPacket.revisions[jsonPacket.current_rev].rollout_artist;
        document.getElementById('associate').value = jsonPacket.revisions[jsonPacket.current_rev].qa_associate;
        var orderGroup = document.getElementById('ordernum_group');
        var badge = document.createElement('span');
        badge.className = "badge badge-primary";
        badge.innerHTML = 'Revisions: '+jsonPacket.current_rev;
        orderGroup.appendChild(badge)
        for(i=0;i<desArray.length;i++){
          addDesigns(desArray[i]);
        }
        for(ii=0;ii<styleArray.length;ii++){
          addStyles(styleArray[ii]);
        }
      }
      else{
        var orderGroup = document.getElementById('ordernum_group');
        var badge = document.createElement('span');
        badge.className = "badge badge-danger";
        badge.innerHTML = "Order Number does not exist";
        orderGroup.appendChild(badge)
      }
    })
  }
  else{
    loadNewRev();
    var orderGroup = document.getElementById('ordernum_group');
    var badge = document.createElement('span');
    badge.className = "badge badge-danger";
    badge.innerHTML = "Order Number left blank";
    errorField('ordernum');
    orderGroup.appendChild(badge)
  }
}
function submitNewRev(){
  if(orderNumber === document.getElementById('ordernum').value){
    styles = jsonPacket.revisions[jsonPacket.current_rev].styles;
    var oldRev = jsonPacket.current_rev;
    jsonPacket.current_rev = jsonPacket.current_rev + 1;
    var revObject = JSON.parse(JSON.stringify(jsonPacket.revisions[currentRev]));
    revObject.qa_associate = document.getElementById('associate').value;
    revObject.rollout_artist = document.getElementById('artist').value;
    /*for(i=0;i<styleArray.length;i++){
      for(ii=0;ii<Object.keys(revObject.styles[styleArray[i]].designs).length;ii++){
        revObject.styles[styleArray[i]].designs[desArray[ii]] =
        {'issues':{
          "gen-art":JSON.parse(artCheckPrp),
          "gen-ros":JSON.parse(rosCheckPrp)
        }}
      }
    }*/
    jsonPacket.revisions.push(revObject);
    var ref = firebase.database().ref("orders/"+orderNumber+"/");
    ref.update(jsonPacket);
    nextStyle(0,0,0);
  }
}
