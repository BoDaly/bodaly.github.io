# INTEGRATIONS
## Woo Commerce Non-Custom Product Setup

<b>1) Create Product Attributes</b>
  - Sizes (If your shop does not have already)
    - (e.g. `XS`,`SM`,`MD`,`LG`,`XL`,`2X`,`3X`,`4X`,`5X`,`6X`)
  - Manufacturer
    - `Full Gear`

<image src = "image (1).png"></image> <br>   
<b>2) Create Product</b>
  - Sku
    - `[FABRIC]-[STYLE]-SUB-[Design Name]` (e.g. `PT-802S-SUB-REDCLUB`)
    - Fabric, Style and SUB must be Uppercase and must not vary from product catalog.
    - Design names can be lowercase or uppercase but may only have A-Z 0-9 Spaces and underscores(_) are ok.
  - Apply Size && Manufacturer Attributes
    - Sizes should be set to select and visible
    - Manufacturer should be set to  select and not-visible

<image src = "Pasted image at 2018_05_07 03_38 PM.png"></image><br>
<b>3) Enable REST API and Generate Keys</b>
   - Follow instructions at this link
     - <a href = "https://docs.woocommerce.com/document/woocommerce-rest-api/">https://docs.woocommerce.com/document/woocommerce-rest-api/</a>
   - Send Consumer Key and Secret Key to:
     - bryan.odaly@fullgear.com
