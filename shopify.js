
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------- All this part of the designer should not be touched except if knowing what you're doing ------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

var variants;
var orig_variants = [];

var load_designer = function(orig_variants, show_style_panel, document_id){
  // Convert each variant to a list of objects with clear keys instead of "optionN"
  variants = jQuery.map(orig_variants, function(variant){
    var new_sku = variant.sku.replace(/\s+/g, ''); // Remove whitespace from sku strings
    return { id: variant.id, price: variant.price, sku: new_sku, fabric: variant.option3, doc_id: variant.option2 }
  });
  
  // Check for the 
  if (document_id == null || document_id == "") document_id = ub_default_document_id;
  
  // Create DFLauncher instance        
  var df_launcher = new DFLauncher({
    cx_core: ub_cx_core,
    cx_canvas: ub_cx_canvas,
    cx_server: ub_cx_server,
    cx_config: ub_cx_config,
    cx_sid: ub_cx_sid,
    host_element_id: "dx-designer-container",
    designer_file: "/designer.html",
    designer_server: ub_designer_server,
    document_id: document_id,
    default_cut: "",
    default_style: ub_default_style, 
    default_fabric: ub_default_fabric,
    background_image: ub_background,
    model_path: ub_models_path,
    cliparts_path: ub_cliparts_path,
    fonts_path: ub_fonts_path,
    colors_path: ub_colors_path,
    show_style_panel: show_style_panel,
    accept_document_id_by_url: true,
    customer_id: ub_customer_id,
    variants: variants,
    enable_roster: ub_enable_roster,
    on_saved: function(document_id, variant_id, qty, has_roster, details){
      save_shopify_product(details.doc_id, variant_id, qty, has_roster, details);
    },
    on_init: function(){ },
    font_sizes: ub_font_sizes,
    fabric_list: ub_fabric_list
  });
  df_launcher.initialize();
};

// Take each product from the collection and return his variants
var get_collection = function(page) {
  $.getJSON('/collections/' + ub_collection_name + '/products.json?limit=250&page='+page, function(collection) {
    // Take each product from the collection and return his variants
    if(collection.products.length == 0) {
      $.getJSON(ub_product_url + '.json')
        .done(function( json ) {
          var products_tags = json.product.tags.split(',');
          var product_doc_id = "";
          $.each(products_tags, function( index, tag ) {
            if (tag.trim().startsWith("fg-ub-")) product_doc_id = tag.trim().substring(6);
          });
          if (product_doc_id != "" && product_doc_id != null) {
            load_designer(orig_variants, false, product_doc_id);
          } else {
            load_designer(orig_variants);
          }
        })
        .fail(function( jqxhr, textStatus, error ) {
          load_designer(orig_variants);
      });
    } else {
      orig_variants = orig_variants.concat(jQuery.map(collection.products, function(product){ return product.variants}));
      get_collection(page+1);
    }
  });          
};

// Get collection from shopify on load
$jq(function() {
  var orig_variants = [];
  
  // Make theme work better in mobile
  viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');
  
  get_collection(1);
});

// Function to add to cart, it uses the first two fields of sku and the last one
// to compare combination of fabric/size/cut with variants list and return the id provided
// by shopify
var Queue = [];
function add_to_queue(document_id, fabric, size, cut, qty, details) {
  var current_variant = _.find(variants, function(v) {
    var sku_attrs = v.sku.split("-");
    return sku_attrs[0].toUpperCase() === fabric.toUpperCase() &&
    sku_attrs[1].toUpperCase() === cut.toUpperCase() &&
    sku_attrs.slice(-1)[0] === size.toUpperCase();
  } );
  
  if(current_variant) {
    var quantity = qty || 1;
    var data = {
      quantity: qty,
      id: current_variant.id,
      properties: {
        'document_id': document_id,
        'details': details
      }
    };
    
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function(line_item) { 
        add_queue_to_cart();
      },
      error: function(XMLHttpRequest, textStatus) {
        console.log('Error adding');
      }
    };
    Queue.push(params);
  }
}

// Use a Queue to wait "success" from shopify cart/add.js to avoid bug were some lines are lost
// Each item is added sequentially
function add_queue_to_cart() {
  if(Queue.length) {
    jQuery.ajax(Queue.shift());
  }
}

function save_shopify_product(document_id, variant_id, qty, has_roster, details){   
  var fabric = details.fabric;
  var cut = details.cut;
  
  if(has_roster) {
    _.forEach(details.roster, function(line) {
      var one_line_details = {};
      one_line_details.cut = details.cut;
      one_line_details.thumbnail_url = details.thumbnail_url;
      one_line_details.fabric = details.fabric;
      one_line_details.style = details.style;
      one_line_details.roster = [line];
      
      add_to_queue(document_id, fabric, line.cx_size, cut, 1, one_line_details);
    });                  
  }
  else {
    add_to_queue(document_id, fabric, details.size, cut, qty, details);
  }
  
  add_queue_to_cart();
};