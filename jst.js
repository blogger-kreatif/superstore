this["JST"] = this["JST"] || {};

this["JST"]["assets/linker/templates/PAL/add-to-cart-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="box">\n  <a href="#" class="close">Close</a>\n\n  <p class="section-title">' +
((__t = ( result.quantity )) == null ? '' : __t) +
' item added to <a href="/cart">your shopping cart</a></p>\n\n  <div class="product-data">\n    <div class="store"><span class="store-avatar" style="background: url(\'' +
((__t = ( logothumbnail )) == null ? '' : __t) +
'/' +
((__t = ( result.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span> from \n      <a href="/shops/' +
((__t = ( result.shop.alias )) == null ? '' : __t) +
'">' +
((__t = ( result.shop.name )) == null ? '' : __t) +
'</a></div>\n    <div class="box">\n      <div class="product-image">\n        <span class="helper"></span><img src="' +
((__t = ( result.thumbnail )) == null ? '' : __t) +
'" alt="" />\n      <!--  removing for now.\n      <img src="/images/sample-cart-img1.png" />\n      --> \n      </div>\n      <div class="product-details">\n        <div class="product-name">\n          <p>' +
((__t = ( result.name )) == null ? '' : __t) +
'</p>\n          ';
if(result.color && result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.color )) == null ? '' : __t) +
', ' +
((__t = ( result.size )) == null ? '' : __t) +
'</p>\n          ';
 } else if(result.color && !result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.color )) == null ? '' : __t) +
'</p>\n          ';
 } else if(!result.color && result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.size )) == null ? '' : __t) +
'</p>\n          ';
 } ;
__p += '\n        </div>\n        <div class="quantity">\n          <p>Qty<p>\n          <p><span>' +
((__t = ( result.quantity )) == null ? '' : __t) +
'</span></p>\n        </div>\n        <div class="item-price">&#8369; ' +
((__t = ( displayPrice(result.price.sale * result.quantity) )) == null ? '' : __t) +
' </div>\n      </div>\n    </div><!-- end box -->\n  </div><!-- end product-data -->\n  <div class="button-group">        \n    <a class="btn-view-cart btn-text" href="/cart">View Cart (' +
((__t = ( cartCount )) == null ? '' : __t) +
')</a>\n    <a class="checkout button" href="/order">Checkout</a>\n  </div>\n\n  <!-- <p class="section-header">More items from the seller</p> -->\n  <div id="more-from-seller">   \n    <p class="section-title">More items from this <a href="/shops/' +
((__t = ( result.shop.alias )) == null ? '' : __t) +
'">shop</a></p>\n    <div class="list">\n      ';
 for(var x in moreFromSeller) { ;
__p += '\n        <div class="item">\n          <div>\n            <a href="/shops/' +
((__t = ( moreFromSeller[x].shop.alias )) == null ? '' : __t) +
'/' +
__e( moreFromSeller[x].seoName ) +
'/' +
__e( moreFromSeller[x].product_id ) +
'" class="pic">\n              <img src="' +
((__t = ( moreFromSeller[x].thumbnail )) == null ? '' : __t) +
'" alt="">\n            </a>\n            <div class="text">\n              <a href="/shops/' +
((__t = ( moreFromSeller[x].shop.alias )) == null ? '' : __t) +
'/' +
__e( moreFromSeller[x].seoName ) +
'/' +
__e(moreFromSeller[x].product_id ) +
'" class="product-title"><span>' +
((__t = (moreFromSeller[x].name )) == null ? '' : __t) +
'</span></a>\n              \n              <div class="price-container"> \n                <p class="price" >₱ ' +
((__t = ( displayPrice(moreFromSeller[x].price.sale) )) == null ? '' : __t) +
'</p>\n              </div>\n              ';
if( moreFromSeller[x].like ) { ;
__p += '\n                <a class="btn-like selected" data-productId=\'' +
((__t = ( moreFromSeller[x].product_id )) == null ? '' : __t) +
'\'></a>\n              ';
 } else { ;
__p += '\n                <a class="btn-like" data-productId=\'' +
((__t = ( moreFromSeller[x].product_id )) == null ? '' : __t) +
'\'></a>\n              ';
 } ;
__p += '\n            </div>\n          </div>\n        </div>\n      ';
 } ;
__p += '\n    </div><!-- end list -->\n  </div><!-- end more-from-seller -->\n\n</div><!-- end box -->';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/admin-coupon/coupon-claimants.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" data-reveal-id="claimants-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'">' +
((__t = ( coupon.claimants.length )) == null ? '' : __t) +
'</a>\n<div id="claimants-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n  <center><h2 class="sub-heading">Users who claimed coupon ' +
((__t = ( coupon.code )) == null ? '' : __t) +
'</h2></center>\n  <center>\n  ';
 if(coupon.claimants.length === 0) { ;
__p += '\n    <p class="no-result">No claimants for this coupon.</p>\n  ';
 } else { ;
__p += '\n    <table>\n      <thead>\n        <tr>\n          <th width="200">Email address</th>\n          <th width="200">Date Claimed</th>\n        </tr>\n      </thead>\n      <tbody>\n        ';
 for(var j in coupon.claimants) { ;
__p += '\n        <tr>\n          <td>' +
((__t = ( coupon.claimants[j].email )) == null ? '' : __t) +
'</td>\n          <td>' +
((__t = ( new Date(coupon.claimants[j].date_claimed).toDateString() )) == null ? '' : __t) +
'</td>\n        </tr>\n        ';
 } ;
__p += '\n      </tbody>\n    </table>\n  ';
 } ;
__p += '\n  </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/admin-coupon/coupon-details-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\n  ';
 if(coupons.length == 0) { ;
__p += '\n    <center>\n      <table class="coupons-list">\n        <thead>\n          <tr>\n            <th align="center">Code</th>\n            <th>Type</th>\n            <th>Description</th>\n            <th>Status</th>\n            <th>Start</th>\n            <th>Expiry</th>\n            <th>Discount</th>\n            <th>Minimum Amount of Purchase</th>\n            <th>Maximum Use Limit</th>\n            <th>Date Created</th>\n            <th>Allowed Users</th>\n            <th>Claimants</th>\n          </tr>\n        </thead>\n        <tbody>\n          <center><h2 class="sub-heading">No Filtered coupons found</h2></center>\n        </tbody>\n      </table>\n    </center>\n  ';
 } else { ;
__p += '\n    <center><h2 class="sub-heading">Filtered coupon codes under group code ' +
((__t = ( coupons[0].group_code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n      <table class="coupons-list">\n        <thead>\n          <tr>\n            <th align="center">Code</th>\n            <th>Type</th>\n            <th>Description</th>\n            <th>Status</th>\n            <th>Start</th>\n            <th>Expiry</th>\n            <th>Discount</th>\n            <th>Minimum Amount of Purchase</th>\n            <th>Maximum Use Limit</th>\n            <th>Date Created</th>\n            <th>Allowed Users</th>\n            <th>Claimants</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var i in coupons){ ;
__p += '\n            <tr>\n              <td scope="row" class="code">' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</td>\n\n              <td>' +
((__t = ( coupons[i].type )) == null ? '' : __t) +
'</td>\n\n              ';
 if(coupons[i].description === null || coupons[i].description === undefined) { ;
__p += '\n                <td>No description</td>\n              ';
 } else { ;
__p += '\n                <td>' +
((__t = ( coupons[i].description )) == null ? '' : __t) +
'</td>\n              ';
 } ;
__p += '\n\n              ';
 if(coupons[i].expiry === null) { ;
__p += '\n                ';
 if(coupons[i].rules.start_date_time && new Date(coupons[i].rules.start_date_time) > new Date()) { ;
__p += '\n                    <td class="inactive">NOT ACTIVE</td>\n                ';
 } else { ;
__p += '\n                    <td class="active">ACTIVE</td>\n                ';
 } ;
__p += '\n              ';
 } else { ;
__p += '\n                ';
 var now = new Date().getTime() ;
__p += '\n                ';
 var expiry = new Date(coupons[i].expiry).getTime(); ;
__p += '\n                ';
 if(now < expiry) { ;
__p += '\n                  ';
 if(coupons[i].rules.start_date_time && new Date(coupons[i].rules.start_date_time) > new Date()) { ;
__p += '\n                    <td class="inactive">NOT ACTIVE</td>\n                  ';
 } else { ;
__p += '\n                      <td class="active">ACTIVE</td>\n                  ';
 } ;
__p += '\n                ';
 } else { ;
__p += '\n                  <td class="inactive">EXPIRED</td>\n                ';
 } ;
__p += '\n              ';
 } ;
__p += '\n\n              ';
 if(coupons[i].rules.start_date_time) { ;
__p += '\n                <td>' +
((__t = ( new Date(coupons[i].rules.start_date_time) )) == null ? '' : __t) +
'</td>\n              ';
 } else { ;
__p += '\n                <td>No start time</td>\n              ';
 } ;
__p += '  \n\n              ';
 if(coupons[i].expiry) { ;
__p += '\n                <td>' +
((__t = ( new Date(coupons[i].expiry) )) == null ? '' : __t) +
'</td>\n              ';
 } else { ;
__p += '\n                <td>No expiry</td>\n              ';
 } ;
__p += '\n\n              ';
 if(!coupons[i].referral) { ;
__p += '\n                ';
 if(coupons[i].discount_type === "price") { ;
__p += '\n                  <td>&#8369; ' +
((__t = ( coupons[i].discount )) == null ? '' : __t) +
'</td>\n                ';
 } else if(coupons[i].discount_type === "percent_off"){ ;
__p += '\n                  <td>' +
((__t = ( coupons[i].discount )) == null ? '' : __t) +
'&#37;</td>\n                ';
 } ;
__p += '\n                \n                ';
 if(coupons[i].minimum_amount === null || coupons[i].minimum_amount === undefined) { ;
__p += '\n                  <td>No minimum amount required.</td>\n                ';
 } else { ;
__p += '\n                  <td>&#8369; ' +
((__t = ( coupons[i].minimum_amount )) == null ? '' : __t) +
'</td>\n                ';
 } ;
__p += '\n              ';
 } else { ;
__p += '\n                <td> Check CoreConfig </td>\n                <td> Check CoreConfig </td>\n              ';
 } ;
__p += '\n\n              \n              ';
 if(coupons[i].maximum_use === null || coupons[i].maximum_use === undefined || coupons[i].maximum_use === 0) { ;
__p += '\n                <td>NO LIMIT</td>\n              ';
 } else { ;
__p += '\n                ';
 if(coupons[i].maximum_use > coupons[i].claimants.length) { ;
__p += '\n                  <td class="active">' +
((__t = ( coupons[i].maximum_use )) == null ? '' : __t) +
'</td>\n                ';
 } else { ;
__p += '\n                  <td class="inactive">' +
((__t = ( coupons[i].maximum_use )) == null ? '' : __t) +
'</td>\n                ';
 } ;
__p += '\n              ';
 } ;
__p += '\n\n              <td>' +
((__t = ( new Date(coupons[i].createdAt) )) == null ? '' : __t) +
'</td>\n              \n              <td>\n              ';
 if(coupons[i].type == "specific") { ;
__p += '\n                <a href="#" data-reveal-id="users-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'">' +
((__t = ( coupons[i].users.length )) == null ? '' : __t) +
'</a>\n              ';
 } else { ;
__p += '\n                No User Restriction\n              ';
 } ;
__p += '\n              </td>\n\n              <td><a href="#" data-reveal-id="claimants-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'">' +
((__t = ( coupons[i].claimants.length )) == null ? '' : __t) +
'</a></td>\n            </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n  ';
 } ;
__p += '\n    </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>\n\n';
 for(var i in coupons){ ;
__p += '\n  <div id="users-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n    <center><h2 class="sub-heading">Allowed users to claim coupon ' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n    ';
 if(coupons[i].users.length === 0) { ;
__p += '\n      <p class="no-result">No users found.</p>\n    ';
 } else { ;
__p += '\n      <table>\n        <thead>\n          <tr>\n            <th width="200">Email address</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var j in coupons[i].users) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( coupons[i].users[j] )) == null ? '' : __t) +
'</td>\n          </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n    ';
 } ;
__p += '\n    </center>\n    <a class="close-reveal-modal">&#215;</a>\n  </div>\n  <div id="claimants-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n    <center><h2 class="sub-heading">Users who claimed coupon ' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n    ';
 if(coupons[i].claimants.length === 0) { ;
__p += '\n      <p class="no-result">No claimants for this coupon.</p>\n    ';
 } else { ;
__p += '\n      <table>\n        <thead>\n          <tr>\n            <th width="200">Email address</th>\n            <th width="200">Date Claimed</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var j in coupons[i].claimants) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( coupons[i].claimants[j].email )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( new Date(coupons[i].claimants[j].date_claimed).toDateString() )) == null ? '' : __t) +
'</td>\n          </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n    ';
 } ;
__p += '\n    </center>\n    <a class="close-reveal-modal">&#215;</a>\n  </div>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/admin-coupon/coupon-users.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" data-reveal-id="users-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'">' +
((__t = ( coupon.users.length )) == null ? '' : __t) +
'</a>\n<div id="users-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n  <center><h2 class="sub-heading">Allowed users to claim coupon ' +
((__t = ( coupon.code )) == null ? '' : __t) +
'</h2></center>\n  <center>\n  ';
 if(coupon.users.length === 0) { ;
__p += '\n    <p class="no-result">No users found.</p>\n  ';
 } else { ;
__p += '\n    <table>\n      <thead>\n        <tr>\n          <th width="200">Email address</th>\n        </tr>\n      </thead>\n      <tbody>\n        ';
 for(var j in coupon.users) { ;
__p += '\n        <tr>\n          <td>' +
((__t = ( coupon.users[j] )) == null ? '' : __t) +
'</td>\n        </tr>\n        ';
 } ;
__p += '\n      </tbody>\n    </table>\n  ';
 } ;
__p += '\n  </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/admin-user/user-role.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p>' +
((__t = ( user.role.toUpperCase() )) == null ? '' : __t) +
'</p>\n<div id="edit-role-' +
((__t = ( user.id )) == null ? '' : __t) +
'" class="reveal-modal update-user" data-reveal>\n  <center><h2 id="shops-title">Update ' +
((__t = ( user.email )) == null ? '' : __t) +
'</h2></center>\n  <form>\n    <div class="row">\n      <div class="large-12 columns">\n        <label>Role\n          <select id=\'' +
((__t = ( user.id )) == null ? '' : __t) +
'-role\'>\n            <option value="user" \n              ';
 if(user.role == "user") { ;
__p += ' selected ';
 } ;
__p += ' \n              >User</option>\n            <option value="admin" \n              ';
 if(user.role == "admin") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Admin</option>\n            <option value="operations" \n              ';
 if(user.role == "operations") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Operations</option>\n            <option value="finance" \n              ';
 if(user.role == "finance") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Finance</option>\n            <option value="marketing" \n              ';
 if(user.role == "marketing") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Marketing</option>\n          </select>\n        </label>\n      </div>\n    </div>\n    <center>\n      <a class="button edit-user-role" user-id="' +
((__t = ( user.id )) == null ? '' : __t) +
'" >Update user role</a>\n    </center>\n  </form>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/airspeed-waybill-form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="airspeedWaybillForm" method="post" target="_blank" action="' +
__e( airspeedPrintSettings.url ) +
'">\n  <input type="hidden" name="waybill" value="' +
((__t = ( waybill )) == null ? '' : __t) +
'" />\n  <input type="hidden" name="app_code" value="' +
__e( airspeedPrintSettings.appCode ) +
'" />\n  <input type="hidden" name="client" value="' +
__e( airspeedPrintSettings.clientId ) +
'" />\n  <input type="submit" value="' +
((__t = ( waybill )) == null ? '' : __t) +
'" name="btnSubmit" id="submit" />\n</form>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/collection-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-disabled hide"></div><div class="preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-collection-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-collection-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(results.total/results.page_offset) ;
__p += '\n  ';
 if(results.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (results.page_offset * (results.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === results.page){ ;
__p += '\n      ';
 var display_ceiling = results.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = results.page_offset * results.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( results.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-collection-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'">' +
((__t = ( results.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < results.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-collection-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var x in results.result) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(results.result[x].type == 'brand') { ;
__p += '\n          <div class="collection-brand-tag">BRAND</div>\n        ';
 } ;
__p += '\n        ';
 if(idsArr.indexOf(results.result[x].id) < 0) { ;
__p += '\n          <input class="collection-item" type="checkbox" name="collection-item" collection-id="' +
((__t = ( results.result[x].id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="collection-item" type="checkbox" name="collection-item" collection-id="' +
((__t = ( results.result[x].id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        <div class="item-image-container center">\n          <center><img class="product-image" src="/images/favicon.png"></center>\n        </div>\n        <br/>\n        <div class="row">\n          <center><h2 class="item-products-title" >' +
((__t = ( results.result[x].name )) == null ? '' : __t) +
'</h2></center>\n        </div>\n        <div class="row">\n         <h2 class="shop-title" ></h2>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button collection-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/credit-details.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="small-5 columns">\n        ' +
((__t = ( user.firstname )) == null ? '' : __t) +
' ' +
((__t = ( user.lastname )) == null ? '' : __t) +
' <br>\n        ' +
((__t = ( user.email )) == null ? '' : __t) +
'\n    </div>\n    <div class="small-5 columns">\n        CREDITS: <br>\n        &#8369; ' +
((__t = ( displayPrice(user.credits) )) == null ? '' : __t) +
'\n    </div>\n</div>\n\n<hr>\n\n<form id="form-' +
((__t = ( user.email )) == null ? '' : __t) +
'">\n<input type="hidden" name="email" value="' +
((__t = ( user.email )) == null ? '' : __t) +
'">\n<input type="hidden" name="credit-operation" value="add" >\n    <div class="row">\n        <div class="small-8 columns">\n            <div class="row collapse">\n                <div class="small-2 columns">\n                    <a class="button prefix secondary credit-operation">+</a>\n                </div>\n                <div class="small-7 columns">\n                    <input type="text" placeholder="0" name="amount">\n                </div>\n                <div class="small-3 columns">\n                    <button type="submit" class="button postfix credit-update">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/edit-config-html.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="small-5 columns">\n        Edit ' +
((__t = ( name )) == null ? '' : __t) +
'\n    </div>\n</div>\n\n<hr>\n\n<form id="form-config">\n    <input type="hidden" name="edit-config-' +
((__t = ( name )) == null ? '' : __t) +
'" value="edit" >\n    <input type="hidden" name="config-name" id="config-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n    <div class="row">\n        <div class="small-12 columns">\n            <div class="row collapse">\n                <div class="small-12 columns">\n                    <textarea name=\'config-settings\' id=\'config-settings\'>' +
((__t = ( settings )) == null ? '' : __t) +
'</textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="small-12 columns">\n            <div class="row collapse">\n                <div class="small-9 columns">\n                </div>\n                <div class="small-2 columns">\n                    <button type=\'submit\' class="button postfix edit-config">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/error.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="error-page error-page-500">\n  <div class="wrap order">\n\n      <div class="container">\n        <h2>Ooopppsss!!</h2>\n        <div class="section-title">There was an error.</div>\n        <div class="img-container"></div>\n        <p>\n          If you are encountering any problems within our site,\n        </p>\n        <p>\n          please email us at <span class="order-contacts"> inquiries@palboutique.ph </span>\n        </p>\n      </div>\n\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/merchant-email-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table width="600" cellpadding="15" style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color: #2C3F58;">\n  <tr>\n    <td align="center" colspan="3">\n      <img src="https://voyager-dev.s3-ap-southeast-1.amazonaws.com/marketplace/takatack-palboutique-email.png" alt="Takatack">\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <table cellpadding="5" width="600" class="main-table" style="border: #ccc solid 1px; padding: 20px;">\n        <tr>\n          <td colspan="3" align="center" cellpadding="10" class="heading" style="font-size: 1.8em; padding-bottom: 15px;">\n            <b>' +
__e( shop.name ) +
'</b>\n          </td>\n        </tr>\n        <tr>\n          <td width="200"></td>\n          <td width="200"></td>\n          <td width="200"></td>\n        </tr>\n        <tr>\n          <td colspan="4">\n            <table>\n              <tr>\n                <td>Good day!<br /><br /></td>\n              </tr>\n              <tr>\n                <td>We\'d like to give you a heads up on the following order/s on your store:<br /><br /></td>\n              </tr>\n              <tr>\n                <td>\n                  <table style="margin-top:35px; background:#f7f7f7; padding:15px;">\n                    <tr style="font-weight:bold; height:35px;">\n                      <td style="width:20px;">#</td>\n                      <td style="width:165px;">Customer Name</td>\n                      <td style="width:165px;">Product Name</td>\n                      <td style="width:165px;">Other Attributes</td>\n                      <td style="width:35px;">Quantity</td>\n                    </tr>\n                    ';
 var count = 1; ;
__p += '\n                    ';
 for(var i in orders){ ;
__p += '\n                      ';
 for( var j = 0; j < orders[i].count; j++ ){ ;
__p += '\n                      <tr style="height:35px;">\n                        <td style="width:20px;">' +
((__t = ( count )) == null ? '' : __t) +
'</td>\n                        <td style="width:165px;">' +
((__t = ( orders[i].firstname )) == null ? '' : __t) +
' ' +
((__t = ( orders[i].lastname )) == null ? '' : __t) +
'</td>\n                        <td style="width:165px;">' +
((__t = ( orders[i].items[j].name )) == null ? '' : __t) +
'</td>\n                        ';
 var attributes = _.keys(orders[i].items[j].userCombination);;
__p += '\n                        ';
 if( attributes.length !== 0) { ;
__p += '\n                          <td style="width:165px;">\n                          ';
 for (var k in attributes) { ;
__p += '\n                            ' +
((__t = ( attributes[k] )) == null ? '' : __t) +
' : ' +
((__t = ( orders[i].items[j].userCombination[attributes[k]] )) == null ? '' : __t) +
'\n                            <br>\n                          ';
 } ;
__p += '\n                          </td>\n                        ';
 } else { ;
__p += '\n                          <td style="width:165px;">N/A</td>\n                        ';
 } ;
__p += '\n                        <td style="width:35px;">' +
((__t = ( orders[i].items[j].quantity )) == null ? '' : __t) +
'</td>\n                      </tr>\n                      ';
 count++ ;;
__p += '\n                      ';
 } ;
__p += '\n                    ';
 } ;
__p += '\n                  </table><br><br>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <strong><u>Kindly confirm if you have available stocks by replying to this email within 24 hours.</u></strong><br><br>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Let us know if you have any questions.<br><br>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Thanks!\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n</table>\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/omd-order-table/order-courier.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status for-courier" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' \n  previousCourier=\'' +
((__t = ( order.courier || 'None' )) == null ? '' : __t) +
'\' previousWaybill=\'' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\'\n  ';
 if(ordersMenu == 'all' && role !== 'admin') { ;
__p += ' disabled=disabled ';
 } ;
__p += ' >\n  ';
 for(var x in courierList) { ;
__p += '\n    <option value="' +
((__t = ( courierList[x] )) == null ? '' : __t) +
'" ';
 if(order.courier == courierList[x] ) { ;
__p += ' selected  ';
 } ;
__p += ' > ' +
((__t = ( courierList[x] )) == null ? '' : __t) +
' </option>\n  ';
 } ;
__p += '\n</select>\n<div id="order-status-waybill-' +
((__t = ( order.id )) == null ? '' : __t) +
'" ';
 if(!order.waybill) { ;
__p += ' class="hidden" ';
 } ;
__p += '>\n\t';
 if(order.courier !== "Airspeed") { ;
__p += '\n\t  <a id="order-status-waybill-link-' +
((__t = ( order.id )) == null ? '' : __t) +
'" ';
 if (order.courierlink) { ;
__p += ' href= "' +
((__t = ( order.courierlink)) == null ? '' : __t) +
'" target="_blank"\n\t    ';
 } else { ;
__p += ' class="cursor_default" ';
 } ;
__p += '>\n\t    ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n\t  </a>\n\t';
 } else { ;
__p += '\n\t\t<form id="airspeedWaybillForm" method="post" target="_blank" action="' +
__e( airspeedPrintSettings.url ) +
'">\n      <input type="hidden" name="waybill" value="' +
((__t = ( order.waybill )) == null ? '' : __t) +
'" />\n      <input type="hidden" name="app_code" value="' +
__e( airspeedPrintSettings.appCode ) +
'" />\n      <input type="hidden" name="client" value="' +
__e( airspeedPrintSettings.clientId ) +
'" />\n      <input type="submit" value="' +
((__t = ( order.waybill )) == null ? '' : __t) +
'" name="btnSubmit" id="submit" />\n    </form>\n\t';
 } ;
__p += '\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/omd-order-table/order-notes.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'row add-note\' id=\'' +
((__t = ( id )) == null ? '' : __t) +
'-note\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\' note-value=\'' +
((__t = ( convertToHTMLEntities(notes) )) == null ? '' : __t) +
'\' >\n  <div class=\'small-10 columns\'>\n    <p class=\'preview-note\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\'>' +
((__t = ( notes ? stripHTML(notes).replace(/\n/g, '<br/>') : 'Add Note' )) == null ? '' : __t) +
'</p>\n    <textarea class=\'inline-edit-note hide\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\'></textarea>\n  </div>\n  <div class=\'small-2 columns open-notes-modal\'>\n    <i class=\'icon-edit\'></i>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/omd-order-table/order-payment-method.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(ordersMenu == "stocks") { ;
__p += '\n  ';
 if(order.paymentMethod == "bank-transfer" || order.paymentMethod == "cash-on-delivery") { ;
__p += '\n    <select class="payment-method" id="payment-' +
((__t = ( order.id )) == null ? '' : __t) +
'" orderId="' +
((__t = ( order.id )) == null ? '' : __t) +
'">\n      <option value="bank-transfer" \n        ';
 if(order.paymentMethod == "bank-transfer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >bank-transfer</option>\n      <option value="cash-on-delivery" \n        ';
 if(order.paymentMethod == "cash-on-delivery") { ;
__p += ' selected ';
 } ;
__p += ' \n        >cash-on-delivery</option>\n    </select>\n  ';
 } else { ;
__p += '\n    ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\n  ';
 } ;
__p += '\n';
 } else { ;
__p += '\n  ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n<p> &#8369; ' +
((__t = ( displayPrice(price) )) == null ? '' : __t) +
' </p>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/omd-order-table/order-payment-status.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status payment-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' cartId=\'' +
((__t = ( order.cartId )) == null ? '' : __t) +
'\'\n  previousStatus=\'' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
'\'>\n  <option value="awaiting-payment" \n    ';
 if(order.paymentStatus == "awaiting-payment") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Awaiting payment</option>\n  <option value="payment-received" \n    ';
 if(order.paymentStatus == "payment-received") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Payment received</option>\n  <option value="confirmed-paid" \n    ';
 if(order.paymentStatus == "confirmed-paid") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Confirmed paid</option>\n  <option value="refunded" \n    ';
 if(order.paymentStatus == "refunded") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Refunded</option>\n  <optgroup label="Cancelled">\n    <option status="cancelled" value="no-response-from-customer" \n      ';
 if(order.paymentStatus == "cancelled" && 
      order.paymentStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n      >No response from customer</option>\n    <option status="cancelled" value="customer-error" \n      ';
 if(order.paymentStatus == "cancelled" && 
      order.paymentStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Customer Error</option>\n  </optgroup>\n</select>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/omd-order-table/order-status.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(ordersMenu == "stocks") { ;
__p += '\n  <select class="select-status stocks-check-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'>\n    <option value="pending" \n      ';
 if(order.deliveryStatus == "pending") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Pending</option>\n    <option value="checking-stocks" \n      ';
 if(order.deliveryStatus == "checking-stocks") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Checking stocks</option>\n    <option value="stocks-available"\n      ';
 if(order.deliveryStatus == "stocks-available") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Stocks available</option>\n    <optgroup label="Cancelled">\n      <option status="cancelled" value="out-of-stock" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Stock</option>\n      <option status="cancelled" value="out-of-service-area" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-service-area") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Service Area</option>\n      <option status="cancelled" value="requested-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "requested-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Requested by customer</option>\n      <option status="cancelled" value="no-response-from-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >No response from customer</option>\n      <option status="cancelled" value="no-response-from-merchant"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "no-response-from-merchant") { ;
__p += ' selected ';
 } ;
__p += '\n        >No response from merchant</option>\n      <option status="cancelled" value="did-not-pass-verification"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "did-not-pass-verification") { ;
__p += ' selected ';
 } ;
__p += '\n        >Did not pass verification</option>\n      <option status="cancelled" value="customer-error" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Customer Error</option>\n      <option status="cancelled" value="test-order" \n        ';
 if(order.deliveryStatus == "test") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Test Order</option>\n    </optgroup>\n  </select>\n';
 } else if(ordersMenu == "delivery" || (ordersMenu == "all" && role == "admin")) { ;
__p += '\n  <select class="select-status ';
 if(ordersMenu == 'delivery') { ;
__p += ' for-delivery-status" ';
 } else { ;
__p += ' operations-all-status" ';
 } ;
__p += '\n    id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'paymentStatus=\'' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
'\'\n    paymentMethod=\'' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\'>\n    <option value="pending" \n      ';
 if(order.deliveryStatus == "pending") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Pending</option>\n    <option value="checking-stocks" \n      ';
 if(order.deliveryStatus == "checking-stocks") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Checking stocks</option>\n    <option value="stocks-available"\n      ';
 if(order.deliveryStatus == "stocks-available") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Stocks available</option>\n    <option value="for-pickup"\n      ';
 if(order.deliveryStatus == "for-pickup") { ;
__p += ' selected ';
 } ;
__p += '\n      >For pickup</option>\n    <option value="in-transit"\n      ';
 if(order.deliveryStatus == "in-transit") { ;
__p += ' selected ';
 } ;
__p += ' \n      >In transit</option>\n    <option value="delivered"\n      ';
 if(order.deliveryStatus == "delivered") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Delivered</option>\n    <optgroup label="Returned">\n      <option status="returned" value="product-defect" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product Defect</option>\n      <option status="returned" value="unsatisfied-customer" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "unsatisfied-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Unsatisfied Customer</option>\n    </optgroup>\n    <optgroup label="Cancelled">\n      <option status="cancelled" value="out-of-stock" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Stock</option>\n      <option status="cancelled" value="out-of-service-area" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-service-area") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Service Area</option>\n      <option status="cancelled" value="requested-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "requested-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Requested by customer</option>\n      <option status="cancelled" value="no-response-from-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >No response from customer</option>\n      <option status="cancelled" value="no-response-from-merchant"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "no-response-from-merchant") { ;
__p += ' selected ';
 } ;
__p += '\n        >No response from merchant</option>\n      <option status="cancelled" value="did-not-pass-verification"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "did-not-pass-verification") { ;
__p += ' selected ';
 } ;
__p += '\n        >Did not pass verification</option>\n      <option status="cancelled" value="customer-error" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Customer Error</option>\n      <option status="cancelled" value="test-order" \n        ';
 if(order.deliveryStatus == "test") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Test Order</option>\n      <option status="cancelled" value="address-not-existing" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "address-not-existing") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Address not existing</option>\n      <option status="cancelled" value="product-defect" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product defect</option>\n      <option status="cancelled" value="refused-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "refused-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Refused by customer</option>\n    </optgroup>\n  </select>\n  <div id="delivered-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="reveal-modal delivered-modal" data-reveal>\n    <div class="row">\n      <center><h2 id="shops-title" class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
'</h2></center>\n      <br/>\n      <label for="dp-delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'">Delivery Date: </label>\n      <input id="dp-delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="dp-delivery-date" type="text">\n    </div>\n    <br/>\n    <div class="row">\n      <div class="delivery-date-btn order-update modal-update selected" order-id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\'\n           previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\' id=\'delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'\'>Save</div>\n      <div id="delivery-date-cancel" class="order-update modal-cancel">Cancel</div>\n    </div>\n    <a class="close-status-modal">&#215;</a>\n  </div>\n';
 } else if(ordersMenu == "completed" || ordersMenu == "returned") { ;
__p += '\n  <select class=" select-status completed-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'>\n    <option value="delivered" \n      ';
 if(order.deliveryStatus == "delivered") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Delivered</option>\n    <optgroup label="Returned">\n      <option status="returned" value="product-defect" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product Defect</option>\n      <option status="returned" value="unsatisfied-customer" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "unsatisfied-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Unsatisfied Customer</option>\n    </optgroup>\n  </select>\n';
 } else { ;
__p += '\n  ' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n<div id="order-delivery-date" >\n  ';
 if(order.deliveryDate) { ;
__p += '\n    <a>' +
((__t = ( new Date(order.deliveryDate).toLocaleString().split(',')[0] )) == null ? '' : __t) +
'</a>\n  ';
 } ;
__p += '\n</div>\n';
 if(ordersMenu == 'delivery' || ordersMenu == 'completed' || ordersMenu == 'returned' || ordersMenu == 'all') { ;
__p += '\n  <div id="for-pickup-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="reveal-modal waybill-modal" data-reveal>\n    <center><h2 id="shops-title" class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
'</h2></center>\n    <form>\n      <div id="waybill-details1" class="row">\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Merchant: ' +
((__t = ( order.shopName )) == null ? '' : __t) +
'</label>\n        </div>\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Customer: ' +
((__t = ( order.firstname )) == null ? '' : __t) +
' ' +
((__t = ( order.lastname )) == null ? '' : __t) +
'</label>\n        </div>\n      </div>\n      <div id="waybill-details2" class="row">\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Items: ' +
((__t = ( order.count )) == null ? '' : __t) +
'</label>\n        </div>\n        <div class="large-6 columns">\n          ';
 var totalAmount = order.itemAmount + order.deliveryFee  ;
__p += '\n          <label class="order-modal-details1">Price: &#8369; ' +
((__t = ( totalAmount )) == null ? '' : __t) +
'</label>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="large-3 columns">\n          <label id="courier-no-label" class="order-modal-header2">Courier: </label>\n        </div>\n        <div class="large-9 columns">\n          <select class="select-status courier" id=\'courier-no-' +
((__t = ( order.id )) == null ? '' : __t) +
'-select\'>\n            ';
 for(var x in courierList) { ;
__p += '\n              <option value="' +
((__t = ( courierList[x] )) == null ? '' : __t) +
'" ';
 if(order.courier == courierList[x] ) { ;
__p += ' selected  ';
 } ;
__p += '> ' +
((__t = ( courierList[x]  )) == null ? '' : __t) +
' </option>\n            ';
 } ;
__p += '\n          </select>\n        </div>\n      </div>\n\n      <div class="row waybill-row-' +
((__t = ( order.id )) == null ? '' : __t) +
'">\n        ';
 if(order.courier !== "Airspeed") { ;
__p += '\n          <div class="large-3 columns">\n            <label id="waybill-no-label" class="order-modal-header2">Waybill # : </label>\n          </div>\n          <div class="large-9 columns">\n            <input id="waybill-no-' +
((__t = ( order.id )) == null ? '' : __t) +
'-text" type="text" value="' +
((__t = ( order.waybill )) == null ? '' : __t) +
'"/>\n          </div>\n        ';
 } ;
__p += '\n      </div>\n      \n      <center>\n        <div class="waybill-btn order-update modal-update selected" order-id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\'\n          previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\' id=\'waybill-' +
((__t = ( order.id )) == null ? '' : __t) +
'\'>Save</div>\n        <div id="waybill-cancel" class="order-update modal-cancel">Cancel</div>\n      </center>\n    </form>\n    <a class="close-status-modal">&#215;</a>\n  </div>\n';
 } ;


}
return __p
};

this["JST"]["assets/linker/templates/PAL/omd-order-table/order-team.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status team-assignment';
 if(ordersMenu == 'all') { ;
__p += ' team-assignment-all';
 } ;
__p += '"\n  id="' +
((__t = ( order.id )) == null ? '' : __t) +
'" previousStatus="' +
((__t = ( order.teamAssigned )) == null ? '' : __t) +
'" ';
 if((ordersMenu == 'all' && role != 'admin') || (ordersMenu != 'all' && order.teamAssigned)) { ;
__p += 'disabled="disabled"';
 } ;
__p += '\n>\n  <option value="none">-</option>\n';
 var teams = teams.split(','); ;
__p += '\n';
 for(var i = 0; i < teams.length; i++) { ;
__p += '\n<option value="' +
((__t = ( teams[i] )) == null ? '' : __t) +
'"\n';
 if(order.teamAssigned == teams[i]) { ;
__p += 'selected';
 } ;
__p += '\n>' +
((__t = ( teams[i] )) == null ? '' : __t) +
'</option>\n';
 } ;
__p += '\n</select>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/order-details-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  var pathArray = window.location.pathname.split( '/' );
  var finance = false;
  if(pathArray[2] == 'finance') {
    finance = true;
  }
  var completed = false;
  if(pathArray[3] == 'completed') {
    completed = true;
  }
;
__p += '\n<form id="order-form-' +
((__t = (order.id)) == null ? '' : __t) +
'">\n<h1 class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
' </h1>\n<div class="order-modal-details1">\n  ';

    var createdAtDate = new Date(order.createdAt);
    var updatedAtDate = new Date(order.updatedAt);
    var deliveryDate;
    if(order.deliveryDate) {
      deliveryDate = new Date(order.deliveryDate).toLocaleString().split(',')[0];
    } else {
      deliveryDate = "N/A";
    }
  ;
__p += '\n  <p>Order Date: ' +
((__t = ( createdAtDate.toLocaleString() )) == null ? '' : __t) +
' </p>\n  <p>Last Update: ' +
((__t = ( updatedAtDate.toLocaleString() )) == null ? '' : __t) +
' </p>\n  <p>Payment Method: ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
' </p>\n  <p>Payment Status: ' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
' </p>\n  <p>Delivery Status: ' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
' </p>\n  <p>Delivery Date:\n    ';
 if(finance == false && order.deliveryStatus == 'delivered') { ;
__p += '\n      <img class="edit-delivery-date" for="DeliveryDate" id="updateDeliveryDate" src="../../images/edit.png">\n      <input type="text" id="editDeliveryDate" class="hidden" name="deliveryDate"/>\n    ';
 } ;
__p += '\n    <span id="defaultDeliveryDate">' +
((__t = ( deliveryDate )) == null ? '' : __t) +
'</span>\n  </p>\n  ';
 if(showMemberType) { ;
__p += '\n    <p>Member Type: ' +
((__t = ( order.memberType )) == null ? '' : __t) +
' </p>\n  ';
 } ;
__p += '\n</div>\n<hr>\n<div id="order-merchants">\n  <p class="order-modal-header2">' +
((__t = ( order.shopName )) == null ? '' : __t) +
'</p>\n  <br>\n  <br>\n  ';
 for (var y in items) { ;
__p += '\n    <div class="row">\n      <div class="small-2 columns"><span class="product-image" style="background-image: url(\'' +
((__t = (items[y].thumbnail )) == null ? '' : __t) +
'\');"></span></div>\n      <div class="small-3 columns">\n        <div class="order-modal-details1">' +
((__t = (items[y].name )) == null ? '' : __t) +
'</div>\n        ';

          var attributes = "";
          for(var b in items[y].userCombination) {
            attributes += items[y].userCombination[b] + ", "
          }
          attributes = attributes.substring(0, attributes.length - 2);
        ;
__p += '\n        <div class="order-modal-details2">' +
((__t = ( attributes )) == null ? '' : __t) +
'</div>\n      </div>\n      <div class="small-2 columns">\n        <span class="order-modal-details2">Qty.</span>\n        <span class="order-modal-details1">' +
((__t = (items[y].quantity )) == null ? '' : __t) +
'</span>\n      </div>\n      <div class="small-3 columns order-modal-details1 end">&#8369; ' +
((__t = ( displayPrice(items[y].price.sale) )) == null ? '' : __t) +
' \n      ';
 if (items[y].price.sale < items[y].price.regular) { ;
__p += '\n        <br> <strike class="order-modal-details2"> &#8369; ' +
((__t = ( displayPrice(items[y].price.regular) )) == null ? '' : __t) +
' </strike>\n      ';
 } ;
__p += '\n        ';
 if(showMemberType) { ;
__p += '\n          <br/> <span class="order-modal-details1"> Pricing Scheme: ' +
((__t = ( items[y].pricingScheme )) == null ? '' : __t) +
'</span>\n        ';
 } ;
__p += '\n      </div>\n      <!--\n      <div class="small-2 columns">\n        ';
 if(finance == false && !completed) {;
__p += '\n          <select name="' +
((__t = ( items[y].cartId )) == null ? '' : __t) +
'">\n            <option value="ok" selected>Cancel</option>\n            <optgroup label="Cancel Reason">\n              <option value="out-of-stock"\n                ';
 if(items[y].cancelReason == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += '\n              >Out of Stock</option>\n              <option value="customer-error"\n                ';
 if(items[y].cancelReason == "customer-error") { ;
__p += ' selected ';
 } ;
__p += '\n              >Customer Error</option>\n            </optgroup>\n          </select>\n        ';
 } else  { ;
__p += '\n            ' +
((__t = ( items[y].cancelReason )) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n      </div>\n      -->\n    </div>\n    <br>\n  ';
 } ;
__p += '\n</div>\n<br>\n<br>\n<div class="row">\n  <div class="small-6 columns order-modal-details1">Coupon: ' +
((__t = ( order.couponCode )) == null ? '' : __t) +
' </div>\n  <div class="small-3 columns text-right order-modal-details1">\n    <div class="summary">Coupon Discount:</div>\n    <div class="summary">Credits Used:</div>\n    <div class="summary">Delivery Fee:</div>\n    <div class="summary">Total Amount Due:</div>\n  </div>\n  <div class="small-3 columns text-right order-modal-details1">\n    ' +
((__t = ( displayPrice(order.couponDiscount))) == null ? '' : __t) +
' &#8369; <br>\n    ' +
((__t = ( displayPrice(order.creditDiscount ? order.creditDiscount : 0.00))) == null ? '' : __t) +
' &#8369; <br>\n    ';
 if (order.freeShipping !== true) { ;
__p += '\n      ' +
((__t = ( displayPrice(order.deliveryFee))) == null ? '' : __t) +
' &#8369;\n    ';
 } else{ ;
__p += '\n      (FREE) ' +
((__t = ( displayPrice(order.originalDeliveryFee) )) == null ? '' : __t) +
' &#8369;\n    ';
 } ;
__p += '\n    <br>\n    ' +
((__t = ( displayPrice(order.totalAmount))) == null ? '' : __t) +
' &#8369; <br>\n  </div>\n</div>\n<hr>\n<div class="row">\n  <div class="small-3 columns" id="customer-name"> ' +
((__t = ( order.deliveryInfo.firstName + " " + order.deliveryInfo.lastName )) == null ? '' : __t) +
' </div>\n    <div class="small-5 columns order-modal-details1" id="customer-details">\n      <!--\n      ';
 if(finance == false && !completed && order.waybill === null) { ;
__p += '\n        <img class="edit-info" for="Address" src="../../images/edit.png">\n      ';
 } ;
__p += '\n      -->\n      <span id="defaultAddress"> ' +
__e( order.deliveryInfo.addressString ) +
' </span>\n\n        <textarea id="editAddress" class="hidden" name="addressString">' +
((__t = ( order.deliveryInfo.addressString )) == null ? '' : __t) +
'</textarea>\n\n      <br>\n\n      ';
 if(finance == false && !completed){ ;
__p += '\n        <img class="edit-info" for="Mobile" src="../../images/edit.png">\n      ';
 } ;
__p += '\n\n      <textarea id="editMobile" type="text" name="mobile" class="hidden mobile-order-details" data-prefix="' +
((__t = (mobileNumber.prefix)) == null ? '' : __t) +
'" data-digits="' +
((__t = (mobileNumber.digitLimit)) == null ? '' : __t) +
'">' +
((__t = ( order.deliveryInfo.mobile )) == null ? '' : __t) +
'</textarea>\n      <span class="error-msg"></span>\n      <span id="defaultMobile"> ' +
((__t = ( order.deliveryInfo.mobile )) == null ? '' : __t) +
' </span>\n      <p>' +
__e( order.email ) +
'</p>\n      ';
 if(order.specialInstruction) { ;
__p += '\n        <br>\n        <div id="waybill-label">Special Instructions:</div>\n        <div class="order-modal-details1">' +
((__t = ( order.specialInstruction )) == null ? '' : __t) +
'</div>\n      ';
 } ;
__p += '\n    </div>\n  <div class="small-4 columns" id="order-waybill">\n    <div id="waybill-label">Waybill:</div>\n      <div class="order-modal-details1">\n        ';
 if (order.waybill) { ;
__p += '\n          ';
 if(finance == false && order.courier !== "Airspeed") { ;
__p += '\n            <img class="edit-info" for="Waybill" src="../../images/edit.png">\n            <textarea id="editWaybill" class="hidden" name="waybill">' +
((__t = ( order.waybill )) == null ? '' : __t) +
'</textarea>\n          ';
 } ;
__p += '\n          <span id="defaultWaybill">\n            ';
 if(order.courier !== "Airspeed" && order.courierlink) { ;
__p += '\n              <a href= "' +
((__t = ( order.courierlink)) == null ? '' : __t) +
'" target="_blank">\n                ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n              </a>\n            ';
 } else { ;
__p += '\n              ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n            ';
 } ;
__p += '\n          </span>\n        ';
 } else { ;
__p += '\n          N/A\n        ';
 } ;
__p += '\n      </div>\n    ';
 if(order.paymentMethod == "paypal") { ;
__p += '\n      <div id="waybill-label">PayPal ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.PAYMENTINFO_0_TRANSACTIONID || cart.paymentDetails.PAYMENTREQUESTINFO_0_TRANSACTIONID : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n    ';
 if(order.paymentMethod == "dragonpay") { ;
__p += '\n      <div id="waybill-label">DragonPay ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.refNo : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n    ';
 if(order.paymentMethod == "paymaya") { ;
__p += '\n      <div id="waybill-label">Transaction ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.id : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n  </div>\n</div>\n<br/>\n</form>\n\n';
 if(finance == false){ ;
__p += '\n  <center>\n    <div href="#" id="order-update" order-id="' +
((__t = (order.id)) == null ? '' : __t) +
'" class="modal-update update-order-details order-update selected">Update</div>\n    <div id="order-update" class="modal-cancel order-update order-details-cancel">Cancel</div>\n  </center>\n';
 } ;
__p += '\n\n<br/>\n\n<div class="order-modal-details1">\n  <p>UTM Source: ' +
((__t = ( order.utm_source || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Medium: ' +
((__t = ( order.utm_medium || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Campaign: ' +
((__t = ( order.utm_campaign || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Content: ' +
((__t = ( order.utm_content || 'N/A' )) == null ? '' : __t) +
' </p>\n</div>\n\n<a id="btn-hide-show" class="btn-hide-show close"> <span>Show</span> order status history</a>\n<table id="order-status-history-table" class="order-status-history-content">\n  <thead>\n    <th style="width: 25%;">Date</th>\n    <th style="width: 20%;">Status</th>\n    <th style="width: 20%;">Item</th>\n    <th style="width: 35%;">Auditor</th>\n  </thead>\n  <tbody>\n    ';
 if(status.length > 0) { ;
__p += '\n      ';
 for(var x in status) { ;
__p += '\n        ';
 if(status[x].status !== 'abandoned-checkout' || (status[x].status == 'abandoned-checkout' && status.length == 1)) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( new Date(status[x].createdAt).toLocaleString() )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].status )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].itemName )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].auditor )) == null ? '' : __t) +
'</td>\n          </tr>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    ';
 } else { ;
__p += '\n      <tr>\n        <td colspan=4><center>No order status history.</center></td>\n      </tr>\n    ';
 } ;
__p += '\n  </tbody>\n</table>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/out-of-stocks-from-cart-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="box">\n    <a class="close close-out-of-stock-modal">Close</a>\n\n    ';
 if( products.length == 1 ) { ;
__p += '\n    <p class="section-title">' +
((__t = ( products.length )) == null ? '' : __t) +
' item is already out of stock.</p>\n    ';
 } else { ;
__p += '\n    <p class="section-title">' +
((__t = ( products.length )) == null ? '' : __t) +
' items are already out of stock.</p>\n    ';
 } ;
__p += '\n\n    <div class="product-data">\n        ';
 for (var i in products) { ;
__p += '\n        ';
 var product = products[i] ;
__p += '\n        <div class="box">\n            <div class="product-image">\n                <span class="helper"></span><img src="' +
((__t = ( product.thumbnail )) == null ? '' : __t) +
'" alt="" />\n            </div>\n            <div class="product-details">\n                <div class="product-name">\n                    <input type="hidden" class="out-of-stock-cart-id" value="' +
((__t = ( product.cartId )) == null ? '' : __t) +
'">\n                    <p>' +
((__t = ( product.name )) == null ? '' : __t) +
'</p>\n                    ';

                        var attributes = "";
                        for(var b in product.userCombination) {
                            attributes += product.userCombination[b] + ", "
                        }
                        attributes = attributes.substring(0, attributes.length - 2);
                    ;
__p += '\n                    <p class="specs">' +
__e( attributes ) +
'</p>\n\n                </div>\n                <div class="quantity">\n                    <p>Qty<p>\n                    <p><span>' +
((__t = ( product.quantity )) == null ? '' : __t) +
'</span></p>\n                </div>\n                <div class="item-price">&#8369; ' +
((__t = ( displayPrice(product.price.sale * product.quantity) )) == null ? '' : __t) +
' </div>\n            </div>\n        </div><!-- end box -->\n        ';
 } ;
__p += '\n    </div><!-- end product-data -->\n\n    <div class="button-group">\n        <a class="button" id="remove-to-cart">Remove from cart</a>\n        <a class="btn-text close-out-of-stock-modal">Cancel</a>\n    </div>\n\n</div><!-- end box -->';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/product-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-popup hide"></div><div class="overlay-preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-product-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-product-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(results.total/results.page_offset) ;
__p += '\n  ';
 if(results.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (results.page_offset * (results.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === results.page){ ;
__p += '\n      ';
 var display_ceiling = results.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = results.page_offset * results.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( results.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-product-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'">' +
((__t = ( results.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < results.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-product-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var x in results.results) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(idsArr.indexOf(results.results[x].product_id) < 0) { ;
__p += '\n          <input class="product-item" type="checkbox" name="product-item" product-id="' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="product-item" type="checkbox" name="product-item" product-id="' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        <div class="item-image-container">\n          <center><a href="/products/' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" target="_blank"><img class="product-image" src="' +
((__t = ( results.results[x].thumbnail || '/images/image-holder.png' )) == null ? '' : __t) +
'"></a></center>\n        </div>\n        <div style="height: 105px;">\n          <div style="height: 70px;">\n            <div class="row">\n              <center><h2 class="item-products-title" >' +
((__t = ( results.results[x].name )) == null ? '' : __t) +
'</h2></center>\n            </div>\n            <div class="row">\n              <center><h2 class="shop-title" ><em>' +
((__t = ( results.results[x].shop.name )) == null ? '' : __t) +
'</em></h2></center>\n            </div>\n          </div>\n          <div class="row">\n            <center><h2 class="item-products-title" >&#8369; ' +
((__t = ( displayPrice(results.results[x].price.sale) )) == null ? '' : __t) +
'</h2></center>\n          </div>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button product-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/product-item-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  product.id = product.product_id;
  var onSale = 0;
  var dispPrice = product.price.regular; 
  if( product.price.sale < product.price.regular ) {
    dispPrice = product.price.sale;
    onSale = 1;
  }
;
__p += '\n<div class="item item-' +
((__t = ( product.id )) == null ? '' : __t) +
'">\n  <ul class="tabs-container">\n    ';
 if( onSale == 1 ) { ;
__p += '  <li class="tab-sale">sale</li> ';
 } ;
__p += '\n    <!-- <li class="tab-new-arrival">new arrival</li> -->\n  </ul>\n\n\n  <div>\n    ';
 /*since not all have thumbnails right now, lets show images[0] by default. */ ;
__p += '\n    <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e(product.name) +
'/' +
__e(product.id) +
'?ref=' +
((__t = ( page )) == null ? '' : __t) +
'" class="pic">\n      <span class="overlay-product"></span>\n      <span class="view-item">view details</span>\n      <img src="' +
__e( product.thumbnail !='undefined' ? product.thumbnail : product.images[0] ) +
'" alt="" />\n    </a>\n    <div class="text">\n      <div class="price-container">\n        ';
 if( onSale == 1 ) { ;
__p += ' <span class="old-price">&#8369; ' +
((__t = ( displayPrice(product.price.regular) )) == null ? '' : __t) +
'  </span> ';
 } ;
__p += '\n        <p class="price" data-price="' +
((__t = ( product.price.currency )) == null ? '' : __t) +
' ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'">&#8369; ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'</p>\n      </div>\n     ';
if( product.like ) { ;
__p += '\n       <a class="btn-like selected" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n     ';
 } else { ;
__p += '\n       <a class="btn-like" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n     ';
 } ;
__p += '\n      <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e(product.name) +
'/' +
__e(product.id) +
'?ref=' +
((__t = ( page )) == null ? '' : __t) +
'" class="product-title">' +
__e(product.name) +
'</a>\n    </div>\n  </div>\n  <span class="store" storeId="' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'"><span class="store-avatar" style="background: url(\'https://s3-ap-southeast-1.amazonaws.com/voyager-dev/marketplace/logo/thumbnail/' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span> from <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'">' +
__e( product.shop.name ) +
'</a></span>\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/recently-viewed-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  var onSale = 0;
  var dispPrice = product.price.regular; 
  if( product.price.sale < product.price.regular ) {
    dispPrice = product.price.sale;
    onSale = 1;
  }
;
__p += '\n';
 if( product.shop.shopType !== undefined && product.shop.shopType == "direct" ) { ;
__p += '\n<div class="item" title="This product can be directly purchased from Takatack using Takatack Coupons &amp; Promotions.">\n';
 } else { ;
__p += '\n<div class="item">\n';
 } ;
__p += '\n  <ul class="tabs-container">\n    ';
 if( onSale == 1 ) { ;
__p += '  <li class="tab-sale">sale</li> ';
 } ;
__p += '\n    <!-- <li class="tab-new-arrival">new arrival</li> -->\n  </ul>\n  <div>\n    <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e( product.seoName ) +
'/' +
__e(product.id) +
'?ref=rvi-product:' +
((__t = ( source )) == null ? '' : __t) +
'" class="pic">\n      <img src="' +
((__t = ( product.thumbnail )) == null ? '' : __t) +
'" alt="" />\n    </a>\n    <div class="text">\n      <div class="price-container">\n        ';
 if( onSale == 1 ) { ;
__p += '  <span class="old-price">&#8369; ' +
((__t = ( displayPrice(product.price.regular) )) == null ? '' : __t) +
'  </span> ';
 } ;
__p += '\n        <p class="price" data-price="' +
((__t = ( product.price.currency )) == null ? '' : __t) +
' ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'">&#8369; ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'</p>\n      </div>\n\n      ';
if( product.like ) { ;
__p += '\n        <a class="btn-like selected" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n      ';
 } else { ;
__p += '\n        <a class="btn-like" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n      ';
 } ;
__p += '\n\n      <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e( product.seoName ) +
'/' +
__e(product.id) +
'?ref=rvi-product:' +
((__t = ( source )) == null ? '' : __t) +
'" class="product-title">' +
((__t = ( product.name )) == null ? '' : __t) +
'</a>\n\n    </div>\n      \n  </div>\n  <!-- <span class="store"><span class="store-avatar" style="background: url(\'' +
((__t = ( logothumbnail )) == null ? '' : __t) +
'/' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span>from <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'">' +
((__t = ( product.shop.name )) == null ? '' : __t) +
'</a></span> -->\n\n  ';
 if( product.shop.shopType !== undefined && product.shop.shopType == "direct" ) { ;
__p += '\n  <span class="store concierge" storeId="' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'"><span class="store-avatar"></span> Fulfilled by Takatack</a></span>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/referral-coupon-settings-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="small-5 columns">\n    Edit ' +
((__t = ( name )) == null ? '' : __t) +
'\n  </div>\n</div>\n\n<hr>\n\n<form id="form-config">\n  <input type="hidden" name="edit-config-' +
((__t = ( name )) == null ? '' : __t) +
'" value="edit" >\n  <input type="hidden" name="config-name" id="config-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n  <div class="row">\n    <div class="small-12 columns">\n      <div class="row collapse">\n        <div class="small-12 columns">\n          <select id="discount_type" name="discount_type">\n            <option name="price" \n              ';
 if(discount_type == "price") { ;
__p += ' selected ';
 } ;
__p += ' \n            value="price" >Price</option>\n            <option name="percent_off"\n              ';
 if(discount_type == "percent_off") { ;
__p += ' selected ';
 } ;
__p += ' \n            value="percent_off">Percent</option>\n          </select>\n\n          Discount: <input id="discount" type="text" name="discount" value=' +
((__t = ( discount )) == null ? '' : __t) +
'>\n          Minimum Amount: <input id="minimum_amount" type="text" name="minimum_amount" value=' +
((__t = ( minimum_amount )) == null ? '' : __t) +
'>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="small-12 columns">\n      <div class="row collapse">\n        <div class="small-9 columns">\n        </div>\n        <div class="small-2 columns">\n          <button type=\'submit\' class="button postfix edit-config">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/shop-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-disabled hide"></div><div class="preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-shop-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-shop-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(allShops.total/allShops.page_offset) ;
__p += '\n  ';
 if(allShops.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (allShops.page_offset * (allShops.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === allShops.page){ ;
__p += '\n      ';
 var display_ceiling = allShops.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = allShops.page_offset * allShops.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_floor + allShops.page_offset > allShops.total ? allShops.total : display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( allShops.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-shop-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'">' +
((__t = ( allShops.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < allShops.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-shop-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var i in allShops.result) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(idsArr.indexOf(allShops.result[i].id) < 0) { ;
__p += '\n          <input class="shop-item" type="checkbox" name="shop-item" shop-id="' +
((__t = ( allShops.result[i].id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="shop-item" type="checkbox" name="shop-item" product-id="' +
((__t = ( allShops.result[i].id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        ';
 if(allShops.result[i].stitched_images !== undefined){ ;
__p += '\n          <div class="item-image-container">\n            <img class="shop-image" src="' +
((__t = ( allShops.result[i].stitched_images )) == null ? '' : __t) +
'">\n          </div>\n        ';
 } ;
__p += '\n        <div class="row">\n          <center><h2 class="item-products-title" >' +
((__t = ( allShops.result[i].name )) == null ? '' : __t) +
'</h2></center>\n        </div>\n        <div class="row">\n         <h2 class="shop-title" ></h2>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button shop-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/PAL/waybill-number.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="large-3 columns">\n    <label id="waybill-no-label" class="order-modal-header2">Waybill # : </label>\n</div>\n<div class="large-9 columns">\n    <input id="waybill-no-' +
((__t = ( id )) == null ? '' : __t) +
'-text" type="text" value="' +
((__t = ( previousWaybill )) == null ? '' : __t) +
'" />\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PH/add-to-cart-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="box">\n  <a href="#" class="close">Close</a>\n\n  <p class="section-title">' +
((__t = ( result.quantity )) == null ? '' : __t) +
' item added to <a href="/cart">your shopping cart</a></p>\n\n  <div class="product-data">\n    <div class="store"><span class="store-avatar" style="background: url(\'' +
((__t = ( logothumbnail )) == null ? '' : __t) +
'/' +
((__t = ( result.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span> from \n      <a href="/shops/' +
((__t = ( result.shop.alias )) == null ? '' : __t) +
'">' +
((__t = ( result.shop.name )) == null ? '' : __t) +
'</a></div>\n    <div class="box">\n      <div class="product-image">\n        <span class="helper"></span><img src="' +
((__t = ( result.thumbnail )) == null ? '' : __t) +
'" alt="" />\n      <!--  removing for now.\n      <img src="/images/sample-cart-img1.png" />\n      --> \n      </div>\n      <div class="product-details">\n        <div class="product-name">\n          <p>' +
((__t = ( result.name )) == null ? '' : __t) +
'</p>\n          ';
if(result.color && result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.color )) == null ? '' : __t) +
', ' +
((__t = ( result.size )) == null ? '' : __t) +
'</p>\n          ';
 } else if(result.color && !result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.color )) == null ? '' : __t) +
'</p>\n          ';
 } else if(!result.color && result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.size )) == null ? '' : __t) +
'</p>\n          ';
 } ;
__p += '\n        </div>\n        <div class="quantity">\n          <p>Qty<p>\n          <p><span>' +
((__t = ( result.quantity )) == null ? '' : __t) +
'</span></p>\n        </div>\n        <div class="item-price">&#8369; ' +
((__t = ( displayPrice(result.price.sale * result.quantity) )) == null ? '' : __t) +
' </div>\n      </div>\n    </div><!-- end box -->\n  </div><!-- end product-data -->\n  <div class="button-group">        \n    <a class="btn-view-cart btn-text" href="/cart">View Cart (' +
((__t = ( cartCount )) == null ? '' : __t) +
')</a>\n    <a class="checkout button" href="/order">Checkout</a>\n  </div>\n\n  <!-- <p class="section-header">More items from the seller</p> -->\n  <div id="more-from-seller">   \n    <p class="section-title">More items from this <a href="/shops/' +
((__t = ( result.shop.alias )) == null ? '' : __t) +
'">shop</a></p>\n    <div class="list">\n      ';
 for(var x in moreFromSeller) { ;
__p += '\n        <div class="item">\n          <div>\n            <a href="/shops/' +
((__t = ( moreFromSeller[x].shop.alias )) == null ? '' : __t) +
'/' +
__e( moreFromSeller[x].seoName ) +
'/' +
__e( moreFromSeller[x].product_id ) +
'" class="pic">\n              <img src="' +
((__t = ( moreFromSeller[x].thumbnail )) == null ? '' : __t) +
'" alt="">\n            </a>\n            <div class="text">\n              <a href="/shops/' +
((__t = ( moreFromSeller[x].shop.alias )) == null ? '' : __t) +
'/' +
__e( moreFromSeller[x].seoName ) +
'/' +
__e(moreFromSeller[x].product_id ) +
'" class="product-title"><span>' +
((__t = (moreFromSeller[x].name )) == null ? '' : __t) +
'</span></a>\n              \n              <div class="price-container"> \n                <p class="price" >₱ ' +
((__t = ( displayPrice(moreFromSeller[x].price.sale) )) == null ? '' : __t) +
'</p>\n              </div>\n              ';
if( moreFromSeller[x].like ) { ;
__p += '\n                <a class="btn-like selected" data-productId=\'' +
((__t = ( moreFromSeller[x].product_id )) == null ? '' : __t) +
'\'></a>\n              ';
 } else { ;
__p += '\n                <a class="btn-like" data-productId=\'' +
((__t = ( moreFromSeller[x].product_id )) == null ? '' : __t) +
'\'></a>\n              ';
 } ;
__p += '\n            </div>\n          </div>\n        </div>\n      ';
 } ;
__p += '\n    </div><!-- end list -->\n  </div><!-- end more-from-seller -->\n\n</div><!-- end box -->';

}
return __p
};

this["JST"]["assets/linker/templates/PH/admin-coupon/coupon-claimants.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" data-reveal-id="claimants-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'">' +
((__t = ( coupon.claimants.length )) == null ? '' : __t) +
'</a>\n<div id="claimants-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n  <center><h2 class="sub-heading">Users who claimed coupon ' +
((__t = ( coupon.code )) == null ? '' : __t) +
'</h2></center>\n  <center>\n  ';
 if(coupon.claimants.length === 0) { ;
__p += '\n    <p class="no-result">No claimants for this coupon.</p>\n  ';
 } else { ;
__p += '\n    <table>\n      <thead>\n        <tr>\n          <th width="200">Email address</th>\n          <th width="200">Date Claimed</th>\n        </tr>\n      </thead>\n      <tbody>\n        ';
 for(var j in coupon.claimants) { ;
__p += '\n        <tr>\n          <td>' +
((__t = ( coupon.claimants[j].email )) == null ? '' : __t) +
'</td>\n          <td>' +
((__t = ( new Date(coupon.claimants[j].date_claimed).toDateString() )) == null ? '' : __t) +
'</td>\n        </tr>\n        ';
 } ;
__p += '\n      </tbody>\n    </table>\n  ';
 } ;
__p += '\n  </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/admin-coupon/coupon-details-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\n  ';
 if(coupons.length == 0) { ;
__p += '\n    <center>\n      <table class="coupons-list">\n        <thead>\n          <tr>\n            <th align="center">Code</th>\n            <th>Type</th>\n            <th>Description</th>\n            <th>Status</th>\n            <th>Start</th>\n            <th>Expiry</th>\n            <th>Discount</th>\n            <th>Minimum Amount of Purchase</th>\n            <th>Maximum Use Limit</th>\n            <th>Date Created</th>\n            <th>Allowed Users</th>\n            <th>Claimants</th>\n          </tr>\n        </thead>\n        <tbody>\n          <center><h2 class="sub-heading">No Filtered coupons found</h2></center>\n        </tbody>\n      </table>\n    </center>\n  ';
 } else { ;
__p += '\n    <center><h2 class="sub-heading">Filtered coupon codes under group code ' +
((__t = ( coupons[0].group_code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n      <table class="coupons-list">\n        <thead>\n          <tr>\n            <th align="center">Code</th>\n            <th>Type</th>\n            <th>Description</th>\n            <th>Status</th>\n            <th>Start</th>\n            <th>Expiry</th>\n            <th>Discount</th>\n            <th>Minimum Amount of Purchase</th>\n            <th>Maximum Use Limit</th>\n            <th>Date Created</th>\n            <th>Allowed Users</th>\n            <th>Claimants</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var i in coupons){ ;
__p += '\n            <tr>\n              <td scope="row" class="code">' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</td>\n\n              <td>' +
((__t = ( coupons[i].type )) == null ? '' : __t) +
'</td>\n\n              ';
 if(coupons[i].description === null || coupons[i].description === undefined) { ;
__p += '\n                <td>No description</td>\n              ';
 } else { ;
__p += '\n                <td>' +
((__t = ( coupons[i].description )) == null ? '' : __t) +
'</td>\n              ';
 } ;
__p += '\n\n              ';
 if(coupons[i].expiry === null) { ;
__p += '\n                ';
 if(coupons[i].rules.start_date_time && new Date(coupons[i].rules.start_date_time) > new Date()) { ;
__p += '\n                    <td class="inactive">NOT ACTIVE</td>\n                ';
 } else { ;
__p += '\n                    <td class="active">ACTIVE</td>\n                ';
 } ;
__p += '\n              ';
 } else { ;
__p += '\n                ';
 var now = new Date().getTime() ;
__p += '\n                ';
 var expiry = new Date(coupons[i].expiry).getTime(); ;
__p += '\n                ';
 if(now < expiry) { ;
__p += '\n                  ';
 if(coupons[i].rules.start_date_time && new Date(coupons[i].rules.start_date_time) > new Date()) { ;
__p += '\n                    <td class="inactive">NOT ACTIVE</td>\n                  ';
 } else { ;
__p += '\n                      <td class="active">ACTIVE</td>\n                  ';
 } ;
__p += '\n                ';
 } else { ;
__p += '\n                  <td class="inactive">EXPIRED</td>\n                ';
 } ;
__p += '\n              ';
 } ;
__p += '\n\n              ';
 if(coupons[i].rules.start_date_time) { ;
__p += '\n                <td>' +
((__t = ( new Date(coupons[i].rules.start_date_time) )) == null ? '' : __t) +
'</td>\n              ';
 } else { ;
__p += '\n                <td>No start time</td>\n              ';
 } ;
__p += '  \n\n              ';
 if(coupons[i].expiry) { ;
__p += '\n                <td>' +
((__t = ( new Date(coupons[i].expiry) )) == null ? '' : __t) +
'</td>\n              ';
 } else { ;
__p += '\n                <td>No expiry</td>\n              ';
 } ;
__p += '\n\n              ';
 if(!coupons[i].referral) { ;
__p += '\n                ';
 if(coupons[i].discount_type === "price") { ;
__p += '\n                  <td>&#8369; ' +
((__t = ( coupons[i].discount )) == null ? '' : __t) +
'</td>\n                ';
 } else if(coupons[i].discount_type === "percent_off"){ ;
__p += '\n                  <td>' +
((__t = ( coupons[i].discount )) == null ? '' : __t) +
'&#37;</td>\n                ';
 } ;
__p += '\n                \n                ';
 if(coupons[i].minimum_amount === null || coupons[i].minimum_amount === undefined) { ;
__p += '\n                  <td>No minimum amount required.</td>\n                ';
 } else { ;
__p += '\n                  <td>&#8369; ' +
((__t = ( coupons[i].minimum_amount )) == null ? '' : __t) +
'</td>\n                ';
 } ;
__p += '\n              ';
 } else { ;
__p += '\n                <td> Check CoreConfig </td>\n                <td> Check CoreConfig </td>\n              ';
 } ;
__p += '\n\n              \n              ';
 if(coupons[i].maximum_use === null || coupons[i].maximum_use === undefined || coupons[i].maximum_use === 0) { ;
__p += '\n                <td>NO LIMIT</td>\n              ';
 } else { ;
__p += '\n                ';
 if(coupons[i].maximum_use > coupons[i].claimants.length) { ;
__p += '\n                  <td class="active">' +
((__t = ( coupons[i].maximum_use )) == null ? '' : __t) +
'</td>\n                ';
 } else { ;
__p += '\n                  <td class="inactive">' +
((__t = ( coupons[i].maximum_use )) == null ? '' : __t) +
'</td>\n                ';
 } ;
__p += '\n              ';
 } ;
__p += '\n\n              <td>' +
((__t = ( new Date(coupons[i].createdAt) )) == null ? '' : __t) +
'</td>\n              \n              <td>\n              ';
 if(coupons[i].type == "specific") { ;
__p += '\n                <a href="#" data-reveal-id="users-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'">' +
((__t = ( coupons[i].users.length )) == null ? '' : __t) +
'</a>\n              ';
 } else { ;
__p += '\n                No User Restriction\n              ';
 } ;
__p += '\n              </td>\n\n              <td><a href="#" data-reveal-id="claimants-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'">' +
((__t = ( coupons[i].claimants.length )) == null ? '' : __t) +
'</a></td>\n            </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n  ';
 } ;
__p += '\n    </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>\n\n';
 for(var i in coupons){ ;
__p += '\n  <div id="users-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n    <center><h2 class="sub-heading">Allowed users to claim coupon ' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n    ';
 if(coupons[i].users.length === 0) { ;
__p += '\n      <p class="no-result">No users found.</p>\n    ';
 } else { ;
__p += '\n      <table>\n        <thead>\n          <tr>\n            <th width="200">Email address</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var j in coupons[i].users) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( coupons[i].users[j] )) == null ? '' : __t) +
'</td>\n          </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n    ';
 } ;
__p += '\n    </center>\n    <a class="close-reveal-modal">&#215;</a>\n  </div>\n  <div id="claimants-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n    <center><h2 class="sub-heading">Users who claimed coupon ' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n    ';
 if(coupons[i].claimants.length === 0) { ;
__p += '\n      <p class="no-result">No claimants for this coupon.</p>\n    ';
 } else { ;
__p += '\n      <table>\n        <thead>\n          <tr>\n            <th width="200">Email address</th>\n            <th width="200">Date Claimed</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var j in coupons[i].claimants) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( coupons[i].claimants[j].email )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( new Date(coupons[i].claimants[j].date_claimed).toDateString() )) == null ? '' : __t) +
'</td>\n          </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n    ';
 } ;
__p += '\n    </center>\n    <a class="close-reveal-modal">&#215;</a>\n  </div>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["assets/linker/templates/PH/admin-coupon/coupon-users.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" data-reveal-id="users-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'">' +
((__t = ( coupon.users.length )) == null ? '' : __t) +
'</a>\n<div id="users-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n  <center><h2 class="sub-heading">Allowed users to claim coupon ' +
((__t = ( coupon.code )) == null ? '' : __t) +
'</h2></center>\n  <center>\n  ';
 if(coupon.users.length === 0) { ;
__p += '\n    <p class="no-result">No users found.</p>\n  ';
 } else { ;
__p += '\n    <table>\n      <thead>\n        <tr>\n          <th width="200">Email address</th>\n        </tr>\n      </thead>\n      <tbody>\n        ';
 for(var j in coupon.users) { ;
__p += '\n        <tr>\n          <td>' +
((__t = ( coupon.users[j] )) == null ? '' : __t) +
'</td>\n        </tr>\n        ';
 } ;
__p += '\n      </tbody>\n    </table>\n  ';
 } ;
__p += '\n  </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/admin-user/user-role.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p>' +
((__t = ( user.role.toUpperCase() )) == null ? '' : __t) +
'</p>\n<div id="edit-role-' +
((__t = ( user.id )) == null ? '' : __t) +
'" class="reveal-modal update-user" data-reveal>\n  <center><h2 id="shops-title">Update ' +
((__t = ( user.email )) == null ? '' : __t) +
'</h2></center>\n  <form>\n    <div class="row">\n      <div class="large-12 columns">\n        <label>Role\n          <select id=\'' +
((__t = ( user.id )) == null ? '' : __t) +
'-role\'>\n            <option value="user" \n              ';
 if(user.role == "user") { ;
__p += ' selected ';
 } ;
__p += ' \n              >User</option>\n            <option value="admin" \n              ';
 if(user.role == "admin") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Admin</option>\n            <option value="operations" \n              ';
 if(user.role == "operations") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Operations</option>\n            <option value="finance" \n              ';
 if(user.role == "finance") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Finance</option>\n            <option value="marketing" \n              ';
 if(user.role == "marketing") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Marketing</option>\n          </select>\n        </label>\n      </div>\n    </div>\n    <center>\n      <a class="button edit-user-role" user-id="' +
((__t = ( user.id )) == null ? '' : __t) +
'" >Update user role</a>\n    </center>\n  </form>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/airspeed-waybill-form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="airspeedWaybillForm" method="post" target="_blank" action="' +
__e( airspeedPrintSettings.url ) +
'">\n  <input type="hidden" name="waybill" value="' +
((__t = ( waybill )) == null ? '' : __t) +
'" />\n  <input type="hidden" name="app_code" value="' +
__e( airspeedPrintSettings.appCode ) +
'" />\n  <input type="hidden" name="client" value="' +
__e( airspeedPrintSettings.clientId ) +
'" />\n  <input type="submit" value="' +
((__t = ( waybill )) == null ? '' : __t) +
'" name="btnSubmit" id="submit" />\n</form>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/collection-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-disabled hide"></div><div class="preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-collection-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-collection-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(results.total/results.page_offset) ;
__p += '\n  ';
 if(results.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (results.page_offset * (results.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === results.page){ ;
__p += '\n      ';
 var display_ceiling = results.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = results.page_offset * results.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( results.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-collection-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'">' +
((__t = ( results.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < results.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-collection-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var x in results.result) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(results.result[x].type == 'brand') { ;
__p += '\n          <div class="collection-brand-tag">BRAND</div>\n        ';
 } ;
__p += '\n        ';
 if(idsArr.indexOf(results.result[x].id) < 0) { ;
__p += '\n          <input class="collection-item" type="checkbox" name="collection-item" collection-id="' +
((__t = ( results.result[x].id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="collection-item" type="checkbox" name="collection-item" collection-id="' +
((__t = ( results.result[x].id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        <div class="item-image-container center">\n          <center><img class="product-image" src="/images/favicon.png"></center>\n        </div>\n        <br/>\n        <div class="row">\n          <center><h2 class="item-products-title" >' +
((__t = ( results.result[x].name )) == null ? '' : __t) +
'</h2></center>\n        </div>\n        <div class="row">\n         <h2 class="shop-title" ></h2>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button collection-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/credit-details.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="small-5 columns">\n        ' +
((__t = ( user.firstname )) == null ? '' : __t) +
' ' +
((__t = ( user.lastname )) == null ? '' : __t) +
' <br>\n        ' +
((__t = ( user.email )) == null ? '' : __t) +
'\n    </div>\n    <div class="small-5 columns">\n        CREDITS: <br>\n        &#8369; ' +
((__t = ( displayPrice(user.credits) )) == null ? '' : __t) +
'\n    </div>\n</div>\n\n<hr>\n\n<form id="form-' +
((__t = ( user.email )) == null ? '' : __t) +
'">\n<input type="hidden" name="email" value="' +
((__t = ( user.email )) == null ? '' : __t) +
'">\n<input type="hidden" name="credit-operation" value="add" >\n    <div class="row">\n        <div class="small-8 columns">\n            <div class="row collapse">\n                <div class="small-2 columns">\n                    <a class="button prefix secondary credit-operation">+</a>\n                </div>\n                <div class="small-7 columns">\n                    <input type="text" placeholder="0" name="amount">\n                </div>\n                <div class="small-3 columns">\n                    <button type="submit" class="button postfix credit-update">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/edit-config-html.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="small-5 columns">\n        Edit ' +
((__t = ( name )) == null ? '' : __t) +
'\n    </div>\n</div>\n\n<hr>\n\n<form id="form-config">\n    <input type="hidden" name="edit-config-' +
((__t = ( name )) == null ? '' : __t) +
'" value="edit" >\n    <input type="hidden" name="config-name" id="config-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n    <div class="row">\n        <div class="small-12 columns">\n            <div class="row collapse">\n                <div class="small-12 columns">\n                    <textarea name=\'config-settings\' id=\'config-settings\'>' +
((__t = ( settings )) == null ? '' : __t) +
'</textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="small-12 columns">\n            <div class="row collapse">\n                <div class="small-9 columns">\n                </div>\n                <div class="small-2 columns">\n                    <button type=\'submit\' class="button postfix edit-config">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PH/error.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="error-page error-page-500">\n  <div class="wrap order">\n\n      <div class="container">\n        <h2>Ooopppsss!!</h2>\n        <div class="section-title">There was an error.</div>\n        <div class="img-container"></div>\n        <p>\n          If you are encountering any problems within our site,\n        </p>\n        <p>\n          please email us at <span class="order-contacts"> support@takatack.com </span>\n        </p>\n      </div>\n\n  </div>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/merchant-email-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table width="600" cellpadding="15" style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color: #2C3F58;">\n  <tr>\n    <td align="center" colspan="3">\n      <img src="https://voyager-dev.s3-ap-southeast-1.amazonaws.com/marketplace/takatack-email.png" alt="Takatack">\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <table cellpadding="5" width="600" class="main-table" style="border: #ccc solid 1px; padding: 20px;">\n        <tr>\n          <td colspan="3" align="center" cellpadding="10" class="heading" style="font-size: 1.8em; padding-bottom: 15px;">\n            <b>' +
__e( shop.name ) +
'</b>\n          </td>\n        </tr>\n        <tr>\n          <td width="200"></td>\n          <td width="200"></td>\n          <td width="200"></td>\n        </tr>\n        <tr>\n          <td colspan="4">\n            <table>\n              <tr>\n                <td>Good day!<br /><br /></td>\n              </tr>\n              <tr>\n                <td>We\'d like to give you a heads up on the following order/s on your store:<br /><br /></td>\n              </tr>\n              <tr>\n                <td>\n                  <table style="margin-top:35px; background:#f7f7f7; padding:15px;">\n                    <tr style="font-weight:bold; height:35px;">\n                      <td style="width:20px;">#</td>\n                      <td style="width:165px;">Customer Name</td>\n                      <td style="width:165px;">Product Name</td>\n                      <td style="width:165px;">Other Attributes</td>\n                      <td style="width:35px;">Quantity</td>\n                    </tr>\n                    ';
 var count = 1; ;
__p += '\n                    ';
 for(var i in orders){ ;
__p += '\n                      ';
 for( var j = 0; j < orders[i].count; j++ ){ ;
__p += '\n                      <tr style="height:35px;">\n                        <td style="width:20px;">' +
((__t = ( count )) == null ? '' : __t) +
'</td>\n                        <td style="width:165px;">' +
((__t = ( orders[i].firstname )) == null ? '' : __t) +
' ' +
((__t = ( orders[i].lastname )) == null ? '' : __t) +
'</td>\n                        <td style="width:165px;">' +
((__t = ( orders[i].items[j].name )) == null ? '' : __t) +
'</td>\n                        ';
 var attributes = _.keys(orders[i].items[j].userCombination);;
__p += '\n                        ';
 if( attributes.length !== 0) { ;
__p += '\n                          <td style="width:165px;">\n                          ';
 for (var k in attributes) { ;
__p += '  \n                            ' +
((__t = ( attributes[k] )) == null ? '' : __t) +
' : ' +
((__t = ( orders[i].items[j].userCombination[attributes[k]] )) == null ? '' : __t) +
'\n                            <br>\n                          ';
 } ;
__p += '\n                          </td>\n                        ';
 } else { ;
__p += '\n                          <td style="width:165px;">N/A</td>\n                        ';
 } ;
__p += '\n                        <td style="width:35px;">' +
((__t = ( orders[i].items[j].quantity )) == null ? '' : __t) +
'</td>\n                      </tr>\n                      ';
 count++ ;;
__p += '\n                      ';
 } ;
__p += '\n                    ';
 } ;
__p += '\n                  </table><br><br>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <strong><u>Kindly confirm if you have available stocks by replying to this email within 24 hours.</u></strong><br><br> \n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Let us know if you have any questions.<br><br>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Thanks!\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n</table>\n<a class="close-reveal-modal">&#215;</a>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/omd-order-table/order-courier.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status for-courier" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' \n  previousCourier=\'' +
((__t = ( order.courier || 'None' )) == null ? '' : __t) +
'\' previousWaybill=\'' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\'\n  ';
 if(ordersMenu == 'all' && role !== 'admin') { ;
__p += ' disabled=disabled ';
 } ;
__p += ' >\n  ';
 for(var x in courierList) { ;
__p += '\n    <option value="' +
((__t = ( courierList[x] )) == null ? '' : __t) +
'" ';
 if(order.courier == courierList[x] ) { ;
__p += ' selected  ';
 } ;
__p += ' > ' +
((__t = ( courierList[x] )) == null ? '' : __t) +
' </option>\n  ';
 } ;
__p += '\n</select>\n<div id="order-status-waybill-' +
((__t = ( order.id )) == null ? '' : __t) +
'" ';
 if(!order.waybill) { ;
__p += ' class="hidden" ';
 } ;
__p += '>\n\t';
 if(order.courier !== "Airspeed") { ;
__p += '\n\t  <a id="order-status-waybill-link-' +
((__t = ( order.id )) == null ? '' : __t) +
'" ';
 if (order.courierlink) { ;
__p += ' href= "' +
((__t = ( order.courierlink)) == null ? '' : __t) +
'" target="_blank"\n\t    ';
 } else { ;
__p += ' class="cursor_default" ';
 } ;
__p += '>\n\t    ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n\t  </a>\n\t';
 } else { ;
__p += '\n\t\t<form id="airspeedWaybillForm" method="post" target="_blank" action="' +
__e( airspeedPrintSettings.url ) +
'">\n      <input type="hidden" name="waybill" value="' +
((__t = ( order.waybill )) == null ? '' : __t) +
'" />\n      <input type="hidden" name="app_code" value="' +
__e( airspeedPrintSettings.appCode ) +
'" />\n      <input type="hidden" name="client" value="' +
__e( airspeedPrintSettings.clientId ) +
'" />\n      <input type="submit" value="' +
((__t = ( order.waybill )) == null ? '' : __t) +
'" name="btnSubmit" id="submit" />\n    </form>\n\t';
 } ;
__p += '\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/omd-order-table/order-notes.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'row add-note\' id=\'' +
((__t = ( id )) == null ? '' : __t) +
'-note\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\' note-value=\'' +
((__t = ( convertToHTMLEntities(notes) )) == null ? '' : __t) +
'\' >\n  <div class=\'small-10 columns\'>\n    <p class=\'preview-note\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\'>' +
((__t = ( notes ? stripHTML(notes).replace(/\n/g, '<br/>') : 'Add Note' )) == null ? '' : __t) +
'</p>\n    <textarea class=\'inline-edit-note hide\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\'></textarea>\n  </div>\n  <div class=\'small-2 columns open-notes-modal\'>\n    <i class=\'icon-edit\'></i>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PH/omd-order-table/order-payment-method.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(ordersMenu == "stocks") { ;
__p += '\n  ';
 if(order.paymentMethod == "bank-transfer" || order.paymentMethod == "cash-on-delivery") { ;
__p += '\n    <select class="payment-method" id="payment-' +
((__t = ( order.id )) == null ? '' : __t) +
'" orderId="' +
((__t = ( order.id )) == null ? '' : __t) +
'">\n      <option value="bank-transfer" \n        ';
 if(order.paymentMethod == "bank-transfer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >bank-transfer</option>\n      <option value="cash-on-delivery" \n        ';
 if(order.paymentMethod == "cash-on-delivery") { ;
__p += ' selected ';
 } ;
__p += ' \n        >cash-on-delivery</option>\n    </select>\n  ';
 } else { ;
__p += '\n    ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\n  ';
 } ;
__p += '\n';
 } else { ;
__p += '\n  ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n<p> &#8369; ' +
((__t = ( displayPrice(price) )) == null ? '' : __t) +
' </p>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/omd-order-table/order-payment-status.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status payment-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' cartId=\'' +
((__t = ( order.cartId )) == null ? '' : __t) +
'\'\n  previousStatus=\'' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
'\'>\n  <option value="awaiting-payment" \n    ';
 if(order.paymentStatus == "awaiting-payment") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Awaiting payment</option>\n  <option value="payment-received" \n    ';
 if(order.paymentStatus == "payment-received") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Payment received</option>\n  <option value="confirmed-paid" \n    ';
 if(order.paymentStatus == "confirmed-paid") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Confirmed paid</option>\n  <option value="refunded" \n    ';
 if(order.paymentStatus == "refunded") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Refunded</option>\n  <optgroup label="Cancelled">\n    <option status="cancelled" value="no-response-from-customer" \n      ';
 if(order.paymentStatus == "cancelled" && 
      order.paymentStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n      >No response from customer</option>\n    <option status="cancelled" value="customer-error" \n      ';
 if(order.paymentStatus == "cancelled" && 
      order.paymentStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Customer Error</option>\n  </optgroup>\n</select>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/omd-order-table/order-status.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(ordersMenu == "stocks") { ;
__p += '\n  <select class="select-status stocks-check-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'>\n    <option value="pending" \n      ';
 if(order.deliveryStatus == "pending") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Pending</option>\n    <option value="checking-stocks" \n      ';
 if(order.deliveryStatus == "checking-stocks") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Checking stocks</option>\n    <option value="stocks-available"\n      ';
 if(order.deliveryStatus == "stocks-available") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Stocks available</option>\n    <optgroup label="Cancelled">\n      <option status="cancelled" value="out-of-stock" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Stock</option>\n      <option status="cancelled" value="out-of-service-area" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-service-area") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Service Area</option>\n      <option status="cancelled" value="requested-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "requested-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Requested by customer</option>\n      <option status="cancelled" value="no-response-from-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >No response from customer</option>\n      <option status="cancelled" value="no-response-from-merchant"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "no-response-from-merchant") { ;
__p += ' selected ';
 } ;
__p += '\n        >No response from merchant</option>\n      <option status="cancelled" value="did-not-pass-verification"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "did-not-pass-verification") { ;
__p += ' selected ';
 } ;
__p += '\n        >Did not pass verification</option>\n      <option status="cancelled" value="customer-error" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Customer Error</option>\n      <option status="cancelled" value="test-order" \n        ';
 if(order.deliveryStatus == "test") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Test Order</option>\n    </optgroup>\n  </select>\n';
 } else if(ordersMenu == "delivery" || (ordersMenu == "all" && role == "admin")) { ;
__p += '\n  <select class="select-status ';
 if(ordersMenu == 'delivery') { ;
__p += ' for-delivery-status" ';
 } else { ;
__p += ' operations-all-status" ';
 } ;
__p += '\n    id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'paymentStatus=\'' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
'\'\n    paymentMethod=\'' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\'>\n    <option value="pending" \n      ';
 if(order.deliveryStatus == "pending") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Pending</option>\n    <option value="checking-stocks" \n      ';
 if(order.deliveryStatus == "checking-stocks") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Checking stocks</option>\n    <option value="stocks-available"\n      ';
 if(order.deliveryStatus == "stocks-available") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Stocks available</option>\n    <option value="for-pickup"\n      ';
 if(order.deliveryStatus == "for-pickup") { ;
__p += ' selected ';
 } ;
__p += '\n      >For pickup</option>\n    <option value="in-transit"\n      ';
 if(order.deliveryStatus == "in-transit") { ;
__p += ' selected ';
 } ;
__p += ' \n      >In transit</option>\n    <option value="delivered"\n      ';
 if(order.deliveryStatus == "delivered") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Delivered</option>\n    <optgroup label="Returned">\n      <option status="returned" value="product-defect" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product Defect</option>\n      <option status="returned" value="unsatisfied-customer" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "unsatisfied-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Unsatisfied Customer</option>\n    </optgroup>\n    <optgroup label="Cancelled">\n      <option status="cancelled" value="out-of-stock" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Stock</option>\n      <option status="cancelled" value="out-of-service-area" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-service-area") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Service Area</option>\n      <option status="cancelled" value="requested-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "requested-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Requested by customer</option>\n      <option status="cancelled" value="no-response-from-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >No response from customer</option>\n      <option status="cancelled" value="no-response-from-merchant"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "no-response-from-merchant") { ;
__p += ' selected ';
 } ;
__p += '\n        >No response from merchant</option>\n      <option status="cancelled" value="did-not-pass-verification"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "did-not-pass-verification") { ;
__p += ' selected ';
 } ;
__p += '\n        >Did not pass verification</option>\n      <option status="cancelled" value="customer-error" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Customer Error</option>\n      <option status="cancelled" value="test-order" \n        ';
 if(order.deliveryStatus == "test") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Test Order</option>\n      <option status="cancelled" value="address-not-existing" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "address-not-existing") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Address not existing</option>\n      <option status="cancelled" value="product-defect" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product defect</option>\n      <option status="cancelled" value="refused-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "refused-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Refused by customer</option>\n    </optgroup>\n  </select>\n  <div id="delivered-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="reveal-modal delivered-modal" data-reveal>\n    <div class="row">\n      <center><h2 id="shops-title" class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
'</h2></center>\n      <br/>\n      <label for="dp-delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'">Delivery Date: </label>\n      <input id="dp-delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="dp-delivery-date" type="text">\n    </div>\n    <br/>\n    <div class="row">\n      <div class="delivery-date-btn order-update modal-update selected" order-id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\'\n           previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\' id=\'delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'\'>Save</div>\n      <div id="delivery-date-cancel" class="order-update modal-cancel">Cancel</div>\n    </div>\n    <a class="close-status-modal">&#215;</a>\n  </div>\n';
 } else if(ordersMenu == "completed" || ordersMenu == "returned") { ;
__p += '\n  <select class=" select-status completed-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'>\n    <option value="delivered" \n      ';
 if(order.deliveryStatus == "delivered") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Delivered</option>\n    <optgroup label="Returned">\n      <option status="returned" value="product-defect" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product Defect</option>\n      <option status="returned" value="unsatisfied-customer" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "unsatisfied-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Unsatisfied Customer</option>\n    </optgroup>\n  </select>\n';
 } else { ;
__p += '\n  ' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n<div id="order-delivery-date" >\n  ';
 if(order.deliveryDate) { ;
__p += '\n    <a>' +
((__t = ( new Date(order.deliveryDate).toLocaleString().split(',')[0] )) == null ? '' : __t) +
'</a>\n  ';
 } ;
__p += '\n</div>\n';
 if(ordersMenu == 'delivery' || ordersMenu == 'completed' || ordersMenu == 'returned' || ordersMenu == 'all') { ;
__p += '\n  <div id="for-pickup-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="reveal-modal waybill-modal" data-reveal>\n    <center><h2 id="shops-title" class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
'</h2></center>\n    <form>\n      <div id="waybill-details1" class="row">\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Merchant: ' +
((__t = ( order.shopName )) == null ? '' : __t) +
'</label>\n        </div>\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Customer: ' +
((__t = ( order.firstname )) == null ? '' : __t) +
' ' +
((__t = ( order.lastname )) == null ? '' : __t) +
'</label>\n        </div>\n      </div>\n      <div id="waybill-details2" class="row">\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Items: ' +
((__t = ( order.count )) == null ? '' : __t) +
'</label>\n        </div>\n        <div class="large-6 columns">\n          ';
 var totalAmount = order.itemAmount + order.deliveryFee  ;
__p += '\n          <label class="order-modal-details1">Price: &#8369; ' +
((__t = ( totalAmount )) == null ? '' : __t) +
'</label>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="large-3 columns">\n          <label id="courier-no-label" class="order-modal-header2">Courier: </label>\n        </div>\n        <div class="large-9 columns">\n          <select class="select-status courier" id=\'courier-no-' +
((__t = ( order.id )) == null ? '' : __t) +
'-select\'>\n            ';
 for(var x in courierList) { ;
__p += '\n              <option value="' +
((__t = ( courierList[x] )) == null ? '' : __t) +
'" ';
 if(order.courier == courierList[x] ) { ;
__p += ' selected  ';
 } ;
__p += '> ' +
((__t = ( courierList[x]  )) == null ? '' : __t) +
' </option>\n            ';
 } ;
__p += '\n          </select>\n        </div>\n      </div>\n\n      <div class="row waybill-row-' +
((__t = ( order.id )) == null ? '' : __t) +
'">\n        ';
 if(order.courier !== "Airspeed") { ;
__p += '\n          <div class="large-3 columns">\n            <label id="waybill-no-label" class="order-modal-header2">Waybill # : </label>\n          </div>\n          <div class="large-9 columns">\n            <input id="waybill-no-' +
((__t = ( order.id )) == null ? '' : __t) +
'-text" type="text" value="' +
((__t = ( order.waybill )) == null ? '' : __t) +
'"/>\n          </div>\n        ';
 } ;
__p += '\n      </div>\n      \n      <center>\n        <div class="waybill-btn order-update modal-update selected" order-id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\'\n          previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\' id=\'waybill-' +
((__t = ( order.id )) == null ? '' : __t) +
'\'>Save</div>\n        <div id="waybill-cancel" class="order-update modal-cancel">Cancel</div>\n      </center>\n    </form>\n    <a class="close-status-modal">&#215;</a>\n  </div>\n';
 } ;


}
return __p
};

this["JST"]["assets/linker/templates/PH/omd-order-table/order-team.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status team-assignment';
 if(ordersMenu == 'all') { ;
__p += ' team-assignment-all';
 } ;
__p += '"\n  id="' +
((__t = ( order.id )) == null ? '' : __t) +
'" previousStatus="' +
((__t = ( order.teamAssigned )) == null ? '' : __t) +
'" ';
 if((ordersMenu == 'all' && role != 'admin') || (ordersMenu != 'all' && order.teamAssigned)) { ;
__p += 'disabled="disabled"';
 } ;
__p += '\n>\n  <option value="none">-</option>\n';
 var teams = teams.split(','); ;
__p += '\n';
 for(var i = 0; i < teams.length; i++) { ;
__p += '\n<option value="' +
((__t = ( teams[i] )) == null ? '' : __t) +
'"\n';
 if(order.teamAssigned == teams[i]) { ;
__p += 'selected';
 } ;
__p += '\n>' +
((__t = ( teams[i] )) == null ? '' : __t) +
'</option>\n';
 } ;
__p += '\n</select>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/order-details-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  var pathArray = window.location.pathname.split( '/' );
  var finance = false;
  if(pathArray[2] == 'finance') {
    finance = true;
  }
  var completed = false;
  if(pathArray[3] == 'completed') {
    completed = true;
  }
;
__p += '\n<form id="order-form-' +
((__t = (order.id)) == null ? '' : __t) +
'">\n<h1 class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
' </h1>\n<div class="order-modal-details1">\n  ';

    var createdAtDate = new Date(order.createdAt);
    var updatedAtDate = new Date(order.updatedAt);
    var deliveryDate;
    if(order.deliveryDate) {
      deliveryDate = new Date(order.deliveryDate).toLocaleString().split(',')[0];
    } else {
      deliveryDate = "N/A";
    }
  ;
__p += '\n  <p>Order Date: ' +
((__t = ( createdAtDate.toLocaleString() )) == null ? '' : __t) +
' </p>\n  <p>Last Update: ' +
((__t = ( updatedAtDate.toLocaleString() )) == null ? '' : __t) +
' </p>\n  <p>Payment Method: ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
' </p>\n  <p>Payment Status: ' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
' </p>\n  <p>Delivery Status: ' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
' </p>\n  <p>Delivery Date:\n    ';
 if(finance == false && order.deliveryStatus == 'delivered') { ;
__p += '\n      <img class="edit-delivery-date" for="DeliveryDate" id="updateDeliveryDate" src="../../images/edit.png">\n      <input type="text" id="editDeliveryDate" class="hidden" name="deliveryDate"/>\n    ';
 } ;
__p += '\n    <span id="defaultDeliveryDate">' +
((__t = ( deliveryDate )) == null ? '' : __t) +
'</span>\n  </p>\n  ';
 if(showMemberType) { ;
__p += '\n    <p>Member Type: ' +
((__t = ( order.memberType )) == null ? '' : __t) +
' </p>\n  ';
 } ;
__p += '\n</div>\n<hr>\n<div id="order-merchants">\n  <p class="order-modal-header2">' +
((__t = ( order.shopName )) == null ? '' : __t) +
'</p>\n  <br>\n  <br>\n  ';
 for (var y in items) { ;
__p += '\n    <div class="row">\n      <div class="small-2 columns"><span class="product-image" style="background-image: url(\'' +
((__t = (items[y].thumbnail )) == null ? '' : __t) +
'\');"></span></div>\n      <div class="small-3 columns">\n        <div class="order-modal-details1">' +
((__t = (items[y].name )) == null ? '' : __t) +
'</div>\n        ';

          var attributes = "";
          for(var b in items[y].userCombination) {
            attributes += items[y].userCombination[b] + ", "
          }
          attributes = attributes.substring(0, attributes.length - 2);
        ;
__p += '\n        <div class="order-modal-details2">' +
((__t = ( attributes )) == null ? '' : __t) +
'</div>\n      </div>\n      <div class="small-2 columns">\n        <span class="order-modal-details2">Qty.</span>\n        <span class="order-modal-details1">' +
((__t = (items[y].quantity )) == null ? '' : __t) +
'</span>\n      </div>\n      <div class="small-3 columns order-modal-details1 end">&#8369; ' +
((__t = ( displayPrice(items[y].price.sale) )) == null ? '' : __t) +
' \n      ';
 if (items[y].price.sale < items[y].price.regular) { ;
__p += '\n        <br> <strike class="order-modal-details2"> &#8369; ' +
((__t = ( displayPrice(items[y].price.regular) )) == null ? '' : __t) +
' </strike>\n      ';
 } ;
__p += '\n        ';
 if(showMemberType) { ;
__p += '\n          <br/> <span class="order-modal-details1"> Pricing Scheme: ' +
((__t = ( items[y].pricingScheme )) == null ? '' : __t) +
'</span>\n        ';
 } ;
__p += '\n      </div>\n      <!--\n      <div class="small-2 columns">\n        ';
 if(finance == false && !completed) {;
__p += '\n          <select name="' +
((__t = ( items[y].cartId )) == null ? '' : __t) +
'">\n            <option value="ok" selected>Cancel</option>\n            <optgroup label="Cancel Reason">\n              <option value="out-of-stock"\n                ';
 if(items[y].cancelReason == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += '\n              >Out of Stock</option>\n              <option value="customer-error"\n                ';
 if(items[y].cancelReason == "customer-error") { ;
__p += ' selected ';
 } ;
__p += '\n              >Customer Error</option>\n            </optgroup>\n          </select>\n        ';
 } else  { ;
__p += '\n            ' +
((__t = ( items[y].cancelReason )) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n      </div>\n      -->\n    </div>\n    <br>\n  ';
 } ;
__p += '\n</div>\n<br>\n<br>\n<div class="row">\n  <div class="small-6 columns order-modal-details1">Coupon: ' +
((__t = ( order.couponCode )) == null ? '' : __t) +
' </div>\n  <div class="small-3 columns text-right order-modal-details1">\n    <div class="summary">Coupon Discount:</div>\n    <div class="summary">Credits Used:</div>\n    <div class="summary">Delivery Fee:</div>\n    <div class="summary">Total Amount Due:</div>\n  </div>\n  <div class="small-3 columns text-right order-modal-details1">\n    ' +
((__t = ( displayPrice(order.couponDiscount))) == null ? '' : __t) +
' &#8369; <br>\n    ' +
((__t = ( displayPrice(order.creditDiscount ? order.creditDiscount : 0.00))) == null ? '' : __t) +
' &#8369; <br>\n    ';
 if (order.freeShipping !== true) { ;
__p += '\n      ' +
((__t = ( displayPrice(order.deliveryFee))) == null ? '' : __t) +
' &#8369;\n    ';
 } else{ ;
__p += '\n      (FREE) ' +
((__t = ( displayPrice(order.originalDeliveryFee) )) == null ? '' : __t) +
' &#8369;\n    ';
 } ;
__p += '\n    <br>\n    ' +
((__t = ( displayPrice(order.totalAmount))) == null ? '' : __t) +
' &#8369; <br>\n  </div>\n</div>\n<hr>\n<div class="row">\n  <div class="small-3 columns" id="customer-name"> ' +
((__t = ( order.deliveryInfo.firstName + " " + order.deliveryInfo.lastName )) == null ? '' : __t) +
' </div>\n    <div class="small-5 columns order-modal-details1" id="customer-details">\n      <!--\n      ';
 if(finance == false && !completed && order.waybill === null) { ;
__p += '\n        <img class="edit-info" for="Address" src="../../images/edit.png">\n      ';
 } ;
__p += '\n      -->\n      <span id="defaultAddress"> ' +
__e( order.deliveryInfo.addressString ) +
' </span>\n\n        <textarea id="editAddress" class="hidden" name="addressString">' +
((__t = ( order.deliveryInfo.addressString )) == null ? '' : __t) +
'</textarea>\n\n      <br>\n\n      ';
 if(finance == false && !completed){ ;
__p += '\n        <img class="edit-info" for="Mobile" src="../../images/edit.png">\n      ';
 } ;
__p += '\n\n      <textarea id="editMobile" type="text" name="mobile" class="hidden mobile-order-details" data-prefix="' +
((__t = (mobileNumber.prefix)) == null ? '' : __t) +
'" data-digits="' +
((__t = (mobileNumber.digitLimit)) == null ? '' : __t) +
'">' +
((__t = ( order.deliveryInfo.mobile )) == null ? '' : __t) +
'</textarea>\n      <span class="error-msg"></span>\n      <span id="defaultMobile"> ' +
((__t = ( order.deliveryInfo.mobile )) == null ? '' : __t) +
' </span>\n      <p>' +
__e( order.email ) +
'</p>\n      ';
 if(order.specialInstruction) { ;
__p += '\n        <br>\n        <div id="waybill-label">Special Instructions:</div>\n        <div class="order-modal-details1">' +
((__t = ( order.specialInstruction )) == null ? '' : __t) +
'</div>\n      ';
 } ;
__p += '\n    </div>\n  <div class="small-4 columns" id="order-waybill">\n    <div id="waybill-label">Waybill:</div>\n      <div class="order-modal-details1">\n        ';
 if (order.waybill) { ;
__p += '\n          ';
 if(finance == false && order.courier !== "Airspeed") { ;
__p += '\n            <img class="edit-info" for="Waybill" src="../../images/edit.png">\n            <textarea id="editWaybill" class="hidden" name="waybill">' +
((__t = ( order.waybill )) == null ? '' : __t) +
'</textarea>\n          ';
 } ;
__p += '\n          <span id="defaultWaybill">\n            ';
 if(order.courier !== "Airspeed" && order.courierlink) { ;
__p += '\n              <a href= "' +
((__t = ( order.courierlink)) == null ? '' : __t) +
'" target="_blank">\n                ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n              </a>\n            ';
 } else { ;
__p += '\n              ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n            ';
 } ;
__p += '\n          </span>\n        ';
 } else { ;
__p += '\n          N/A\n        ';
 } ;
__p += '\n      </div>\n    ';
 if(order.paymentMethod == "paypal") { ;
__p += '\n      <div id="waybill-label">PayPal ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.PAYMENTINFO_0_TRANSACTIONID || cart.paymentDetails.PAYMENTREQUESTINFO_0_TRANSACTIONID : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n    ';
 if(order.paymentMethod == "dragonpay") { ;
__p += '\n      <div id="waybill-label">DragonPay ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.refNo : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n    ';
 if(order.paymentMethod == "paymaya") { ;
__p += '\n      <div id="waybill-label">Transaction ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.id : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n  </div>\n</div>\n<br/>\n</form>\n\n';
 if(finance == false){ ;
__p += '\n  <center>\n    <div href="#" id="order-update" order-id="' +
((__t = (order.id)) == null ? '' : __t) +
'" class="modal-update update-order-details order-update selected">Update</div>\n    <div id="order-update" class="modal-cancel order-update order-details-cancel">Cancel</div>\n  </center>\n';
 } ;
__p += '\n\n<br/>\n\n<div class="order-modal-details1">\n  <p>UTM Source: ' +
((__t = ( order.utm_source || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Medium: ' +
((__t = ( order.utm_medium || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Campaign: ' +
((__t = ( order.utm_campaign || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Content: ' +
((__t = ( order.utm_content || 'N/A' )) == null ? '' : __t) +
' </p>\n</div>\n\n<a id="btn-hide-show" class="btn-hide-show close"> <span>Show</span> order status history</a>\n<table id="order-status-history-table" class="order-status-history-content">\n  <thead>\n    <th style="width: 25%;">Date</th>\n    <th style="width: 20%;">Status</th>\n    <th style="width: 20%;">Item</th>\n    <th style="width: 35%;">Auditor</th>\n  </thead>\n  <tbody>\n    ';
 if(status.length > 0) { ;
__p += '\n      ';
 for(var x in status) { ;
__p += '\n        ';
 if(status[x].status !== 'abandoned-checkout' || (status[x].status == 'abandoned-checkout' && status.length == 1)) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( new Date(status[x].createdAt).toLocaleString() )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].status )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].itemName )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].auditor )) == null ? '' : __t) +
'</td>\n          </tr>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    ';
 } else { ;
__p += '\n      <tr>\n        <td colspan=4><center>No order status history.</center></td>\n      </tr>\n    ';
 } ;
__p += '\n  </tbody>\n</table>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PH/out-of-stocks-from-cart-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="box">\n    <a class="close close-out-of-stock-modal">Close</a>\n\n    ';
 if( products.length == 1 ) { ;
__p += '\n    <p class="section-title">' +
((__t = ( products.length )) == null ? '' : __t) +
' item is already out of stock.</p>\n    ';
 } else { ;
__p += '\n    <p class="section-title">' +
((__t = ( products.length )) == null ? '' : __t) +
' items are already out of stock.</p>\n    ';
 } ;
__p += '\n\n    <div class="product-data">\n        ';
 for (var i in products) { ;
__p += '\n        ';
 var product = products[i] ;
__p += '\n        <div class="box">\n            <div class="product-image">\n                <span class="helper"></span><img src="' +
((__t = ( product.thumbnail )) == null ? '' : __t) +
'" alt="" />\n            </div>\n            <div class="product-details">\n                <div class="product-name">\n                    <input type="hidden" class="out-of-stock-cart-id" value="' +
((__t = ( product.cartId )) == null ? '' : __t) +
'">\n                    <p>' +
((__t = ( product.name )) == null ? '' : __t) +
'</p>\n                    ';

                        var attributes = "";
                        for(var b in product.userCombination) {
                            attributes += product.userCombination[b] + ", "
                        }
                        attributes = attributes.substring(0, attributes.length - 2);
                    ;
__p += '\n                    <p class="specs">' +
__e( attributes ) +
'</p>\n\n                </div>\n                <div class="quantity">\n                    <p>Qty<p>\n                    <p><span>' +
((__t = ( product.quantity )) == null ? '' : __t) +
'</span></p>\n                </div>\n                <div class="item-price">&#8369; ' +
((__t = ( displayPrice(product.price.sale * product.quantity) )) == null ? '' : __t) +
' </div>\n            </div>\n        </div><!-- end box -->\n        ';
 } ;
__p += '\n    </div><!-- end product-data -->\n\n    <div class="button-group">\n        <a class="button" id="remove-to-cart">Remove from cart</a>\n        <a class="btn-text close-out-of-stock-modal">Cancel</a>\n    </div>\n\n</div><!-- end box -->';

}
return __p
};

this["JST"]["assets/linker/templates/PH/product-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-popup hide"></div><div class="overlay-preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-product-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-product-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(results.total/results.page_offset) ;
__p += '\n  ';
 if(results.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (results.page_offset * (results.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === results.page){ ;
__p += '\n      ';
 var display_ceiling = results.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = results.page_offset * results.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( results.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-product-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'">' +
((__t = ( results.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < results.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-product-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var x in results.results) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(idsArr.indexOf(results.results[x].product_id) < 0) { ;
__p += '\n          <input class="product-item" type="checkbox" name="product-item" product-id="' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="product-item" type="checkbox" name="product-item" product-id="' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        <div class="item-image-container">\n          <center><a href="/products/' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" target="_blank"><img class="product-image" src="' +
((__t = ( results.results[x].thumbnail || '/images/image-holder.png' )) == null ? '' : __t) +
'"></a></center>\n        </div>\n        <div style="height: 105px;">\n          <div style="height: 70px;">\n            <div class="row">\n              <center><h2 class="item-products-title" >' +
((__t = ( results.results[x].name )) == null ? '' : __t) +
'</h2></center>\n            </div>\n            <div class="row">\n              <center><h2 class="shop-title" ><em>' +
((__t = ( results.results[x].shop.name )) == null ? '' : __t) +
'</em></h2></center>\n            </div>\n          </div>\n          <div class="row">\n            <center><h2 class="item-products-title" >&#8369; ' +
((__t = ( displayPrice(results.results[x].price.sale) )) == null ? '' : __t) +
'</h2></center>\n          </div>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button product-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/product-item-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  product.id = product.product_id;
  var onSale = 0;
  var dispPrice = product.price.regular; 
  if( product.price.sale < product.price.regular ) {
    dispPrice = product.price.sale;
    onSale = 1;
  }
;
__p += '\n<div class="item item-' +
((__t = ( product.id )) == null ? '' : __t) +
'">\n  <ul class="tabs-container">\n    ';
 if( onSale == 1 ) { ;
__p += '  <li class="tab-sale">sale</li> ';
 } ;
__p += '\n    <!-- <li class="tab-new-arrival">new arrival</li> -->\n  </ul>\n\n\n  <div>\n    ';
 /*since not all have thumbnails right now, lets show images[0] by default. */ ;
__p += '\n    <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e(product.name) +
'/' +
__e(product.id) +
'?ref=' +
((__t = ( page )) == null ? '' : __t) +
'" class="pic">\n      <span class="overlay-product"></span>\n      <span class="view-item">view details</span>\n      <img src="' +
__e( product.thumbnail !='undefined' ? product.thumbnail : product.images[0] ) +
'" alt="" />\n    </a>\n    <div class="text">\n      <div class="price-container">\n        ';
 if( onSale == 1 ) { ;
__p += ' <span class="old-price">&#8369; ' +
((__t = ( displayPrice(product.price.regular) )) == null ? '' : __t) +
'  </span> ';
 } ;
__p += '\n        <p class="price" data-price="' +
((__t = ( product.price.currency )) == null ? '' : __t) +
' ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'">&#8369; ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'</p>\n      </div>\n     ';
if( product.like ) { ;
__p += '\n       <a class="btn-like selected" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n     ';
 } else { ;
__p += '\n       <a class="btn-like" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n     ';
 } ;
__p += '\n      <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e(product.name) +
'/' +
__e(product.id) +
'?ref=' +
((__t = ( page )) == null ? '' : __t) +
'" class="product-title">' +
__e(product.name) +
'</a>\n    </div>\n  </div>\n  <span class="store" storeId="' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'"><span class="store-avatar" style="background: url(\'https://s3-ap-southeast-1.amazonaws.com/voyager-dev/marketplace/logo/thumbnail/' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span> from <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'">' +
__e( product.shop.name ) +
'</a></span>\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PH/recently-viewed-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  var onSale = 0;
  var dispPrice = product.price.regular; 
  if( product.price.sale < product.price.regular ) {
    dispPrice = product.price.sale;
    onSale = 1;
  }
;
__p += '\n';
 if( product.shop.shopType !== undefined && product.shop.shopType == "direct" ) { ;
__p += '\n<div class="item" title="This product can be directly purchased from Takatack using Takatack Coupons &amp; Promotions.">\n';
 } else { ;
__p += '\n<div class="item">\n';
 } ;
__p += '\n  <ul class="tabs-container">\n    ';
 if( onSale == 1 ) { ;
__p += '  <li class="tab-sale">sale</li> ';
 } ;
__p += '\n    <!-- <li class="tab-new-arrival">new arrival</li> -->\n  </ul>\n  <div>\n    <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e( product.seoName ) +
'/' +
__e(product.id) +
'?ref=rvi-product:' +
((__t = ( source )) == null ? '' : __t) +
'" class="pic">\n      <img src="' +
((__t = ( product.thumbnail )) == null ? '' : __t) +
'" alt="" />\n    </a>\n    <div class="text">\n      <div class="price-container">\n        ';
 if( onSale == 1 ) { ;
__p += '  <span class="old-price">&#8369; ' +
((__t = ( displayPrice(product.price.regular) )) == null ? '' : __t) +
'  </span> ';
 } ;
__p += '\n        <p class="price" data-price="' +
((__t = ( product.price.currency )) == null ? '' : __t) +
' ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'">&#8369; ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'</p>\n      </div>\n\n      ';
if( product.like ) { ;
__p += '\n        <a class="btn-like selected" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n      ';
 } else { ;
__p += '\n        <a class="btn-like" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n      ';
 } ;
__p += '\n\n      <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e( product.seoName ) +
'/' +
__e(product.id) +
'?ref=rvi-product:' +
((__t = ( source )) == null ? '' : __t) +
'" class="product-title">' +
((__t = ( product.name )) == null ? '' : __t) +
'</a>\n\n    </div>\n      \n  </div>\n  <!-- <span class="store"><span class="store-avatar" style="background: url(\'' +
((__t = ( logothumbnail )) == null ? '' : __t) +
'/' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span>from <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'">' +
((__t = ( product.shop.name )) == null ? '' : __t) +
'</a></span> -->\n\n  ';
 if( product.shop.shopType !== undefined && product.shop.shopType == "direct" ) { ;
__p += '\n  <span class="store concierge" storeId="' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'"><span class="store-avatar"></span> Fulfilled by Takatack</a></span>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PH/referral-coupon-settings-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="small-5 columns">\n    Edit ' +
((__t = ( name )) == null ? '' : __t) +
'\n  </div>\n</div>\n\n<hr>\n\n<form id="form-config">\n  <input type="hidden" name="edit-config-' +
((__t = ( name )) == null ? '' : __t) +
'" value="edit" >\n  <input type="hidden" name="config-name" id="config-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n  <div class="row">\n    <div class="small-12 columns">\n      <div class="row collapse">\n        <div class="small-12 columns">\n          <select id="discount_type" name="discount_type">\n            <option name="price" \n              ';
 if(discount_type == "price") { ;
__p += ' selected ';
 } ;
__p += ' \n            value="price" >Price</option>\n            <option name="percent_off"\n              ';
 if(discount_type == "percent_off") { ;
__p += ' selected ';
 } ;
__p += ' \n            value="percent_off">Percent</option>\n          </select>\n\n          Discount: <input id="discount" type="text" name="discount" value=' +
((__t = ( discount )) == null ? '' : __t) +
'>\n          Minimum Amount: <input id="minimum_amount" type="text" name="minimum_amount" value=' +
((__t = ( minimum_amount )) == null ? '' : __t) +
'>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="small-12 columns">\n      <div class="row collapse">\n        <div class="small-9 columns">\n        </div>\n        <div class="small-2 columns">\n          <button type=\'submit\' class="button postfix edit-config">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/PH/shop-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-disabled hide"></div><div class="preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-shop-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-shop-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(allShops.total/allShops.page_offset) ;
__p += '\n  ';
 if(allShops.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (allShops.page_offset * (allShops.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === allShops.page){ ;
__p += '\n      ';
 var display_ceiling = allShops.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = allShops.page_offset * allShops.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_floor + allShops.page_offset > allShops.total ? allShops.total : display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( allShops.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-shop-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'">' +
((__t = ( allShops.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < allShops.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-shop-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var i in allShops.result) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(idsArr.indexOf(allShops.result[i].id) < 0) { ;
__p += '\n          <input class="shop-item" type="checkbox" name="shop-item" shop-id="' +
((__t = ( allShops.result[i].id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="shop-item" type="checkbox" name="shop-item" product-id="' +
((__t = ( allShops.result[i].id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        ';
 if(allShops.result[i].stitched_images !== undefined){ ;
__p += '\n          <div class="item-image-container">\n            <img class="shop-image" src="' +
((__t = ( allShops.result[i].stitched_images )) == null ? '' : __t) +
'">\n          </div>\n        ';
 } ;
__p += '\n        <div class="row">\n          <center><h2 class="item-products-title" >' +
((__t = ( allShops.result[i].name )) == null ? '' : __t) +
'</h2></center>\n        </div>\n        <div class="row">\n         <h2 class="shop-title" ></h2>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button shop-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/PH/waybill-number.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="large-3 columns">\n    <label id="waybill-no-label" class="order-modal-header2">Waybill # : </label>\n</div>\n<div class="large-9 columns">\n    <input id="waybill-no-' +
((__t = ( id )) == null ? '' : __t) +
'-text" type="text" value="' +
((__t = ( previousWaybill )) == null ? '' : __t) +
'" />\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/SG/add-to-cart-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="box">\n  <a href="#" class="close">Close</a>\n\n  <p class="section-title">' +
((__t = ( result.quantity )) == null ? '' : __t) +
' item added to <a href="/cart">your shopping cart</a></p>\n\n  <div class="product-data">\n    <div class="store"><span class="store-avatar" style="background: url(\'' +
((__t = ( logothumbnail )) == null ? '' : __t) +
'/' +
((__t = ( result.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span> from \n      <a href="/shops/' +
((__t = ( result.shop.alias )) == null ? '' : __t) +
'">' +
((__t = ( result.shop.name )) == null ? '' : __t) +
'</a></div>\n    <div class="box">\n      <div class="product-image">\n        <span class="helper"></span><img src="' +
((__t = ( result.thumbnail )) == null ? '' : __t) +
'" alt="" />\n      <!--  removing for now.\n      <img src="/images/sample-cart-img1.png" />\n      --> \n      </div>\n      <div class="product-details">\n        <div class="product-name">\n          <p>' +
((__t = ( result.name )) == null ? '' : __t) +
'</p>\n          ';
if(result.color && result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.color )) == null ? '' : __t) +
', ' +
((__t = ( result.size )) == null ? '' : __t) +
'</p>\n          ';
 } else if(result.color && !result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.color )) == null ? '' : __t) +
'</p>\n          ';
 } else if(!result.color && result.size) { ;
__p += '\n            <p class="specs">' +
((__t = ( result.size )) == null ? '' : __t) +
'</p>\n          ';
 } ;
__p += '\n        </div>\n        <div class="quantity">\n          <p>Qty<p>\n          <p><span>' +
((__t = ( result.quantity )) == null ? '' : __t) +
'</span></p>\n        </div>\n        <div class="item-price">SGD ' +
((__t = ( displayPrice(result.price.sale * result.quantity) )) == null ? '' : __t) +
' </div>\n      </div>\n    </div><!-- end box -->\n  </div><!-- end product-data -->\n  <div class="button-group">        \n    <a class="btn-view-cart btn-text" href="/cart">View Cart (' +
((__t = ( cartCount )) == null ? '' : __t) +
')</a>\n    <a class="checkout button" href="/order">Checkout</a>\n  </div>\n\n  <!-- <p class="section-header">More items from the seller</p> -->\n  <div id="more-from-seller">   \n    <p class="section-title">More items from this <a href="/shops/' +
((__t = ( result.shop.alias )) == null ? '' : __t) +
'">shop</a></p>\n    <div class="list">\n      ';
 for(var x in moreFromSeller) { ;
__p += '\n        <div class="item">\n          <div>\n            <a href="/shops/' +
((__t = ( moreFromSeller[x].shop.alias )) == null ? '' : __t) +
'/' +
__e( moreFromSeller[x].seoName ) +
'/' +
__e( moreFromSeller[x].product_id ) +
'" class="pic">\n              <img src="' +
((__t = ( moreFromSeller[x].thumbnail )) == null ? '' : __t) +
'" alt="">\n            </a>\n            <div class="text">\n              <a href="/shops/' +
((__t = ( moreFromSeller[x].shop.alias )) == null ? '' : __t) +
'/' +
__e( moreFromSeller[x].seoName ) +
'/' +
__e(moreFromSeller[x].product_id ) +
'" class="product-title"><span>' +
((__t = (moreFromSeller[x].name )) == null ? '' : __t) +
'</span></a>\n              \n              <div class="price-container"> \n                <p class="price" >SGD ' +
((__t = ( displayPrice(moreFromSeller[x].price.sale) )) == null ? '' : __t) +
'</p>\n              </div>\n              ';
if( moreFromSeller[x].like ) { ;
__p += '\n                <a class="btn-like selected" data-productId=\'' +
((__t = ( moreFromSeller[x].product_id )) == null ? '' : __t) +
'\'></a>\n              ';
 } else { ;
__p += '\n                <a class="btn-like" data-productId=\'' +
((__t = ( moreFromSeller[x].product_id )) == null ? '' : __t) +
'\'></a>\n              ';
 } ;
__p += '\n            </div>\n          </div>\n        </div>\n      ';
 } ;
__p += '\n    </div><!-- end list -->\n  </div><!-- end more-from-seller -->\n\n</div><!-- end box -->';

}
return __p
};

this["JST"]["assets/linker/templates/SG/admin-coupon/coupon-claimants.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" data-reveal-id="claimants-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'">' +
((__t = ( coupon.claimants.length )) == null ? '' : __t) +
'</a>\n<div id="claimants-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n  <center><h2 class="sub-heading">Users who claimed coupon ' +
((__t = ( coupon.code )) == null ? '' : __t) +
'</h2></center>\n  <center>\n  ';
 if(coupon.claimants.length === 0) { ;
__p += '\n    <p class="no-result">No claimants for this coupon.</p>\n  ';
 } else { ;
__p += '\n    <table>\n      <thead>\n        <tr>\n          <th width="200">Email address</th>\n          <th width="200">Date Claimed</th>\n        </tr>\n      </thead>\n      <tbody>\n        ';
 for(var j in coupon.claimants) { ;
__p += '\n        <tr>\n          <td>' +
((__t = ( coupon.claimants[j].email )) == null ? '' : __t) +
'</td>\n          <td>' +
((__t = ( new Date(coupon.claimants[j].date_claimed).toDateString() )) == null ? '' : __t) +
'</td>\n        </tr>\n        ';
 } ;
__p += '\n      </tbody>\n    </table>\n  ';
 } ;
__p += '\n  </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/admin-coupon/coupon-details-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\n  ';
 if(coupons.length == 0) { ;
__p += '\n    <center>\n      <table class="coupons-list">\n        <thead>\n          <tr>\n            <th align="center">Code</th>\n            <th>Type</th>\n            <th>Description</th>\n            <th>Status</th>\n            <th>Start</th>\n            <th>Expiry</th>\n            <th>Discount</th>\n            <th>Minimum Amount of Purchase</th>\n            <th>Maximum Use Limit</th>\n            <th>Date Created</th>\n            <th>Allowed Users</th>\n            <th>Claimants</th>\n          </tr>\n        </thead>\n        <tbody>\n          <center><h2 class="sub-heading">No Filtered coupons found</h2></center>\n        </tbody>\n      </table>\n    </center>\n  ';
 } else { ;
__p += '\n    <center><h2 class="sub-heading">Filtered coupon codes under group code ' +
((__t = ( coupons[0].group_code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n      <table class="coupons-list">\n        <thead>\n          <tr>\n            <th align="center">Code</th>\n            <th>Type</th>\n            <th>Description</th>\n            <th>Status</th>\n            <th>Start</th>\n            <th>Expiry</th>\n            <th>Discount</th>\n            <th>Minimum Amount of Purchase</th>\n            <th>Maximum Use Limit</th>\n            <th>Date Created</th>\n            <th>Allowed Users</th>\n            <th>Claimants</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var i in coupons){ ;
__p += '\n            <tr>\n              <td scope="row" class="code">' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</td>\n\n              <td>' +
((__t = ( coupons[i].type )) == null ? '' : __t) +
'</td>\n\n              ';
 if(coupons[i].description === null || coupons[i].description === undefined) { ;
__p += '\n                <td>No description</td>\n              ';
 } else { ;
__p += '\n                <td>' +
((__t = ( coupons[i].description )) == null ? '' : __t) +
'</td>\n              ';
 } ;
__p += '\n\n              ';
 if(coupons[i].expiry === null) { ;
__p += '\n                ';
 if(coupons[i].rules.start_date_time && new Date(coupons[i].rules.start_date_time) > new Date()) { ;
__p += '\n                    <td class="inactive">NOT ACTIVE</td>\n                ';
 } else { ;
__p += '\n                    <td class="active">ACTIVE</td>\n                ';
 } ;
__p += '\n              ';
 } else { ;
__p += '\n                ';
 var now = new Date().getTime() ;
__p += '\n                ';
 var expiry = new Date(coupons[i].expiry).getTime(); ;
__p += '\n                ';
 if(now < expiry) { ;
__p += '\n                  ';
 if(coupons[i].rules.start_date_time && new Date(coupons[i].rules.start_date_time) > new Date()) { ;
__p += '\n                    <td class="inactive">NOT ACTIVE</td>\n                  ';
 } else { ;
__p += '\n                      <td class="active">ACTIVE</td>\n                  ';
 } ;
__p += '\n                ';
 } else { ;
__p += '\n                  <td class="inactive">EXPIRED</td>\n                ';
 } ;
__p += '\n              ';
 } ;
__p += '\n\n              ';
 if(coupons[i].rules.start_date_time) { ;
__p += '\n                <td>' +
((__t = ( new Date(coupons[i].rules.start_date_time) )) == null ? '' : __t) +
'</td>\n              ';
 } else { ;
__p += '\n                <td>No start time</td>\n              ';
 } ;
__p += '  \n\n              ';
 if(coupons[i].expiry) { ;
__p += '\n                <td>' +
((__t = ( new Date(coupons[i].expiry) )) == null ? '' : __t) +
'</td>\n              ';
 } else { ;
__p += '\n                <td>No expiry</td>\n              ';
 } ;
__p += '\n\n              ';
 if(!coupons[i].referral) { ;
__p += '\n                ';
 if(coupons[i].discount_type === "price") { ;
__p += '\n                  <td>SGD ' +
((__t = ( coupons[i].discount )) == null ? '' : __t) +
'</td>\n                ';
 } else if(coupons[i].discount_type === "percent_off"){ ;
__p += '\n                  <td>' +
((__t = ( coupons[i].discount )) == null ? '' : __t) +
'&#37;</td>\n                ';
 } ;
__p += '\n                \n                ';
 if(coupons[i].minimum_amount === null || coupons[i].minimum_amount === undefined) { ;
__p += '\n                  <td>No minimum amount required.</td>\n                ';
 } else { ;
__p += '\n                  <td>SGD ' +
((__t = ( coupons[i].minimum_amount )) == null ? '' : __t) +
'</td>\n                ';
 } ;
__p += '\n              ';
 } else { ;
__p += '\n                <td> Check CoreConfig </td>\n                <td> Check CoreConfig </td>\n              ';
 } ;
__p += '\n\n              \n              ';
 if(coupons[i].maximum_use === null || coupons[i].maximum_use === undefined || coupons[i].maximum_use === 0) { ;
__p += '\n                <td>NO LIMIT</td>\n              ';
 } else { ;
__p += '\n                ';
 if(coupons[i].maximum_use > coupons[i].claimants.length) { ;
__p += '\n                  <td class="active">' +
((__t = ( coupons[i].maximum_use )) == null ? '' : __t) +
'</td>\n                ';
 } else { ;
__p += '\n                  <td class="inactive">' +
((__t = ( coupons[i].maximum_use )) == null ? '' : __t) +
'</td>\n                ';
 } ;
__p += '\n              ';
 } ;
__p += '\n\n              <td>' +
((__t = ( new Date(coupons[i].createdAt) )) == null ? '' : __t) +
'</td>\n              \n              <td>\n              ';
 if(coupons[i].type == "specific") { ;
__p += '\n                <a href="#" data-reveal-id="users-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'">' +
((__t = ( coupons[i].users.length )) == null ? '' : __t) +
'</a>\n              ';
 } else { ;
__p += '\n                No User Restriction\n              ';
 } ;
__p += '\n              </td>\n\n              <td><a href="#" data-reveal-id="claimants-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'">' +
((__t = ( coupons[i].claimants.length )) == null ? '' : __t) +
'</a></td>\n            </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n  ';
 } ;
__p += '\n    </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>\n\n';
 for(var i in coupons){ ;
__p += '\n  <div id="users-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n    <center><h2 class="sub-heading">Allowed users to claim coupon ' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n    ';
 if(coupons[i].users.length === 0) { ;
__p += '\n      <p class="no-result">No users found.</p>\n    ';
 } else { ;
__p += '\n      <table>\n        <thead>\n          <tr>\n            <th width="200">Email address</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var j in coupons[i].users) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( coupons[i].users[j] )) == null ? '' : __t) +
'</td>\n          </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n    ';
 } ;
__p += '\n    </center>\n    <a class="close-reveal-modal">&#215;</a>\n  </div>\n  <div id="claimants-' +
((__t = ( coupons[i].id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n    <center><h2 class="sub-heading">Users who claimed coupon ' +
((__t = ( coupons[i].code )) == null ? '' : __t) +
'</h2></center>\n    <center>\n    ';
 if(coupons[i].claimants.length === 0) { ;
__p += '\n      <p class="no-result">No claimants for this coupon.</p>\n    ';
 } else { ;
__p += '\n      <table>\n        <thead>\n          <tr>\n            <th width="200">Email address</th>\n            <th width="200">Date Claimed</th>\n          </tr>\n        </thead>\n        <tbody>\n          ';
 for(var j in coupons[i].claimants) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( coupons[i].claimants[j].email )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( new Date(coupons[i].claimants[j].date_claimed).toDateString() )) == null ? '' : __t) +
'</td>\n          </tr>\n          ';
 } ;
__p += '\n        </tbody>\n      </table>\n    ';
 } ;
__p += '\n    </center>\n    <a class="close-reveal-modal">&#215;</a>\n  </div>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["assets/linker/templates/SG/admin-coupon/coupon-users.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" data-reveal-id="users-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'">' +
((__t = ( coupon.users.length )) == null ? '' : __t) +
'</a>\n<div id="users-' +
((__t = ( coupon._id )) == null ? '' : __t) +
'" class="reveal-modal" data-reveal>\n  <center><h2 class="sub-heading">Allowed users to claim coupon ' +
((__t = ( coupon.code )) == null ? '' : __t) +
'</h2></center>\n  <center>\n  ';
 if(coupon.users.length === 0) { ;
__p += '\n    <p class="no-result">No users found.</p>\n  ';
 } else { ;
__p += '\n    <table>\n      <thead>\n        <tr>\n          <th width="200">Email address</th>\n        </tr>\n      </thead>\n      <tbody>\n        ';
 for(var j in coupon.users) { ;
__p += '\n        <tr>\n          <td>' +
((__t = ( coupon.users[j] )) == null ? '' : __t) +
'</td>\n        </tr>\n        ';
 } ;
__p += '\n      </tbody>\n    </table>\n  ';
 } ;
__p += '\n  </center>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/admin-user/user-role.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p>' +
((__t = ( user.role.toUpperCase() )) == null ? '' : __t) +
'</p>\n<div id="edit-role-' +
((__t = ( user.id )) == null ? '' : __t) +
'" class="reveal-modal update-user" data-reveal>\n  <center><h2 id="shops-title">Update ' +
((__t = ( user.email )) == null ? '' : __t) +
'</h2></center>\n  <form>\n    <div class="row">\n      <div class="large-12 columns">\n        <label>Role\n          <select id=\'' +
((__t = ( user.id )) == null ? '' : __t) +
'-role\'>\n            <option value="user" \n              ';
 if(user.role == "user") { ;
__p += ' selected ';
 } ;
__p += ' \n              >User</option>\n            <option value="admin" \n              ';
 if(user.role == "admin") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Admin</option>\n            <option value="operations" \n              ';
 if(user.role == "operations") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Operations</option>\n            <option value="finance" \n              ';
 if(user.role == "finance") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Finance</option>\n            <option value="marketing" \n              ';
 if(user.role == "marketing") { ;
__p += ' selected ';
 } ;
__p += ' \n              >Marketing</option>\n          </select>\n        </label>\n      </div>\n    </div>\n    <center>\n      <a class="button edit-user-role" user-id="' +
((__t = ( user.id )) == null ? '' : __t) +
'" >Update user role</a>\n    </center>\n  </form>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/admin-user/user-type.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


var userType = "";
if(user.forOperatorApproval) {
  userType = "operator <span class='red'>(pending)</span>"
} else if(!user.forOperatorApproval && user.userType == 'operator') {
  userType = "operator <span class='green'>(approved)</span>"
} else {
  userType = "basic"
}
;
__p += '\n\n<p>' +
((__t = ( userType )) == null ? '' : __t) +
'</p>\n\n<div id="edit-user-type-' +
__e( user.id ) +
'" class="reveal-modal update-user-type" data-reveal>\n  <center>\n    <h4 id="shops-title">Update user type for:<br>' +
__e( user.email ) +
'</h4>\n  </center>\n  <form class="update-user-type-form">\n    <div class="row">\n      <div class="large-12 columns">\n        <p style="font-weight: bold;">Organization Details</p>\n        <p><span style="font-style: italic;">Name: </span>' +
__e( user.organization ) +
'</p>\n        <p><span style="font-style: italic;">Address Line 1: </span>' +
__e( user.organizationAddressOne ) +
'</p>\n        <p><span style="font-style: italic;">Address Line 2: </span>' +
__e( user.organizationAddressTwo ) +
'</p>\n        <p><span style="font-style: italic;">City: </span>' +
__e( user.organizationCity ) +
'</p>\n        <p><span style="font-style: italic;">State: </span>' +
__e( user.organizationState ) +
'</p>\n        <p><span style="font-style: italic;">Postal Code: </span>' +
__e( user.organizationPostalCode ) +
'</p>\n        <p><span style="font-style: italic;">Country: </span>' +
__e( user.organizationCountry ) +
'</p>\n        <p><span style="font-style: italic;">Contact Number: </span>' +
__e( user.organizationContactNumber ) +
'</p>\n      </div>\n    </div>\n    <br>\n    <center>\n    ';
 if(user.forOperatorApproval) { ;
__p += '\n    <div class="row">\n      <a class="button-approve button small edit-user-type" \n      data-id="' +
__e( user.id ) +
'" data-email="' +
__e( user.email ) +
'" data-response="approved">APPROVE</a>\n      <a class="button-reject button small edit-user-type" \n      data-id="' +
__e( user.id ) +
'" data-email="' +
__e( user.email ) +
'" data-response="rejected">REJECT</a>\n    </div>\n    ';
 } else { ;
__p += '\n      <p class="green" style="font-weight: bold;">User is already approved as operator.</p>\n    ';
 } ;
__p += '\n    </center>\n  </form>\n  <a class="close-reveal-modal">&#215;</a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/collection-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-disabled hide"></div><div class="preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-collection-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-collection-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(results.total/results.page_offset) ;
__p += '\n  ';
 if(results.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (results.page_offset * (results.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === results.page){ ;
__p += '\n      ';
 var display_ceiling = results.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = results.page_offset * results.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( results.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-collection-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'">' +
((__t = ( results.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < results.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-collection-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var x in results.result) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(results.result[x].type == 'brand') { ;
__p += '\n          <div class="collection-brand-tag">BRAND</div>\n        ';
 } ;
__p += '\n        ';
 if(idsArr.indexOf(results.result[x].id) < 0) { ;
__p += '\n          <input class="collection-item" type="checkbox" name="collection-item" collection-id="' +
((__t = ( results.result[x].id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="collection-item" type="checkbox" name="collection-item" collection-id="' +
((__t = ( results.result[x].id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        <div class="item-image-container center">\n          <center><img class="product-image" src="/images/favicon.png"></center>\n        </div>\n        <br/>\n        <div class="row">\n          <center><h2 class="item-products-title" >' +
((__t = ( results.result[x].name )) == null ? '' : __t) +
'</h2></center>\n        </div>\n        <div class="row">\n         <h2 class="shop-title" ></h2>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button collection-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/credit-details.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="small-5 columns">\n        ' +
((__t = ( user.firstname )) == null ? '' : __t) +
' ' +
((__t = ( user.lastname )) == null ? '' : __t) +
' <br>\n        ' +
((__t = ( user.email )) == null ? '' : __t) +
'\n    </div>\n    <div class="small-5 columns">\n        CREDITS: <br>\n        SGD ' +
((__t = ( displayPrice(user.credits) )) == null ? '' : __t) +
'\n    </div>\n</div>\n\n<hr>\n\n<form id="form-' +
((__t = ( user.email )) == null ? '' : __t) +
'">\n<input type="hidden" name="email" value="' +
((__t = ( user.email )) == null ? '' : __t) +
'">\n<input type="hidden" name="credit-operation" value="add" >\n    <div class="row">\n        <div class="small-8 columns">\n            <div class="row collapse">\n                <div class="small-2 columns">\n                    <a class="button prefix secondary credit-operation">+</a>\n                </div>\n                <div class="small-7 columns">\n                    <input type="text" placeholder="0" name="amount">\n                </div>\n                <div class="small-3 columns">\n                    <button type="submit" class="button postfix credit-update">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/edit-config-html.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="small-5 columns">\n        Edit ' +
((__t = ( name )) == null ? '' : __t) +
'\n    </div>\n</div>\n\n<hr>\n\n<form id="form-config">\n    <input type="hidden" name="edit-config-' +
((__t = ( name )) == null ? '' : __t) +
'" value="edit" >\n    <input type="hidden" name="config-name" id="config-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n    <div class="row">\n        <div class="small-12 columns">\n            <div class="row collapse">\n                <div class="small-12 columns">\n                    <textarea name=\'config-settings\' id=\'config-settings\'>' +
((__t = ( settings )) == null ? '' : __t) +
'</textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="small-12 columns">\n            <div class="row collapse">\n                <div class="small-9 columns">\n                </div>\n                <div class="small-2 columns">\n                    <button type=\'submit\' class="button postfix edit-config">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/SG/error.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="error-page error-page-500">\n  <div class="wrap order">\n\n      <div class="container">\n        <h2>Ooopppsss!!</h2>\n        <div class="section-title">There was an error.</div>\n        <div class="img-container"></div>\n        <p>\n          If you are encountering any problems within our site,\n        </p>\n        <p>\n          please email us at <span class="order-contacts"> support@takatack.com </span>\n        </p>\n      </div>\n\n  </div>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/merchant-email-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table width="600" cellpadding="15" style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; color: #2C3F58;">\n  <tr>\n    <td align="center" colspan="3">\n      <img src="https://voyager-dev.s3-ap-southeast-1.amazonaws.com/marketplace/takatack-email.png" alt="Takatack">\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <table cellpadding="5" width="600" class="main-table" style="border: #ccc solid 1px; padding: 20px;">\n        <tr>\n          <td colspan="3" align="center" cellpadding="10" class="heading" style="font-size: 1.8em; padding-bottom: 15px;">\n            <b>' +
__e( shop.name ) +
'</b>\n          </td>\n        </tr>\n        <tr>\n          <td width="200"></td>\n          <td width="200"></td>\n          <td width="200"></td>\n        </tr>\n        <tr>\n          <td colspan="4">\n            <table>\n              <tr>\n                <td>Good day!<br /><br /></td>\n              </tr>\n              <tr>\n                <td>We\'d like to give you a heads up on the following order/s on your store:<br /><br /></td>\n              </tr>\n              <tr>\n                <td>\n                  <table style="margin-top:35px; background:#f7f7f7; padding:15px;">\n                    <tr style="font-weight:bold; height:35px;">\n                      <td style="width:20px;">#</td>\n                      <td style="width:165px;">Customer Name</td>\n                      <td style="width:165px;">Product Name</td>\n                      <td style="width:165px;">Other Attributes</td>\n                      <td style="width:35px;">Quantity</td>\n                    </tr>\n                    ';
 var count = 1; ;
__p += '\n                    ';
 for(var i in orders){ ;
__p += '\n                      ';
 for( var j = 0; j < orders[i].count; j++ ){ ;
__p += '\n                      <tr style="height:35px;">\n                        <td style="width:20px;">' +
((__t = ( count )) == null ? '' : __t) +
'</td>\n                        <td style="width:165px;">' +
((__t = ( orders[i].firstname )) == null ? '' : __t) +
' ' +
((__t = ( orders[i].lastname )) == null ? '' : __t) +
'</td>\n                        <td style="width:165px;">' +
((__t = ( orders[i].items[j].name )) == null ? '' : __t) +
'</td>\n                        ';
 var attributes = _.keys(orders[i].items[j].userCombination);;
__p += '\n                        ';
 if( attributes.length !== 0) { ;
__p += '\n                          <td style="width:165px;">\n                          ';
 for (var k in attributes) { ;
__p += '  \n                            ' +
((__t = ( attributes[k] )) == null ? '' : __t) +
' : ' +
((__t = ( orders[i].items[j].userCombination[attributes[k]] )) == null ? '' : __t) +
'\n                            <br>\n                          ';
 } ;
__p += '\n                          </td>\n                        ';
 } else { ;
__p += '\n                          <td style="width:165px;">N/A</td>\n                        ';
 } ;
__p += '\n                        <td style="width:35px;">' +
((__t = ( orders[i].items[j].quantity )) == null ? '' : __t) +
'</td>\n                      </tr>\n                      ';
 count++ ;;
__p += '\n                      ';
 } ;
__p += '\n                    ';
 } ;
__p += '\n                  </table><br><br>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <strong><u>Kindly confirm if you have available stocks by replying to this email within 24 hours.</u></strong><br><br> \n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Let us know if you have any questions.<br><br>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Thanks!\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n</table>\n<a class="close-reveal-modal">&#215;</a>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/omd-order-table/order-courier.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status for-courier" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' \n  previousCourier=\'' +
((__t = ( order.courier || 'None' )) == null ? '' : __t) +
'\' previousWaybill=\'' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\'\n  ';
 if(ordersMenu == 'all' && role !== 'admin') { ;
__p += ' disabled=disabled ';
 } ;
__p += ' >\n  ';
 for(var x in courierList) { ;
__p += '\n    <option value="' +
((__t = ( courierList[x] )) == null ? '' : __t) +
'" ';
 if(order.courier == courierList[x] ) { ;
__p += ' selected  ';
 } ;
__p += ' > ' +
((__t = ( courierList[x] )) == null ? '' : __t) +
' </option>\n  ';
 } ;
__p += '\n</select>\n<div id="order-status-waybill-' +
((__t = ( order.id )) == null ? '' : __t) +
'" ';
 if(!order.waybill) { ;
__p += ' class="hidden" ';
 } ;
__p += '>\n  <a id="order-status-waybill-link-' +
((__t = ( order.id )) == null ? '' : __t) +
'" ';
 if (order.courierlink) { ;
__p += ' href= "' +
((__t = ( order.courierlink)) == null ? '' : __t) +
'" target="_blank"\n    ';
 } else { ;
__p += ' class="cursor_default" ';
 } ;
__p += '>\n    ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n  </a>\n</div>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/omd-order-table/order-notes.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'row add-note\' id=\'' +
((__t = ( id )) == null ? '' : __t) +
'-note\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\' note-value=\'' +
((__t = ( convertToHTMLEntities(notes) )) == null ? '' : __t) +
'\' >\n  <div class=\'small-10 columns\'>\n    <p class=\'preview-note\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\'>' +
((__t = ( notes ? stripHTML(notes).replace(/\n/g, '<br/>') : 'Add Note' )) == null ? '' : __t) +
'</p>\n    <textarea class=\'inline-edit-note hide\' order-id=\'' +
((__t = ( id )) == null ? '' : __t) +
'\'></textarea>\n  </div>\n  <div class=\'small-2 columns open-notes-modal\'>\n    <i class=\'icon-edit\'></i>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/SG/omd-order-table/order-payment-method.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(ordersMenu == "stocks") { ;
__p += '\n  ';
 if(order.paymentMethod == "bank-transfer" || order.paymentMethod == "cash-on-delivery") { ;
__p += '\n    <select class="payment-method" id="payment-' +
((__t = ( order.id )) == null ? '' : __t) +
'" orderId="' +
((__t = ( order.id )) == null ? '' : __t) +
'">\n      <option value="bank-transfer" \n        ';
 if(order.paymentMethod == "bank-transfer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >bank-transfer</option>\n      <option value="cash-on-delivery" \n        ';
 if(order.paymentMethod == "cash-on-delivery") { ;
__p += ' selected ';
 } ;
__p += ' \n        >cash-on-delivery</option>\n    </select>\n  ';
 } else { ;
__p += '\n    ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\n  ';
 } ;
__p += '\n';
 } else { ;
__p += '\n  ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n<p> SGD ' +
((__t = ( displayPrice(price) )) == null ? '' : __t) +
' </p>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/omd-order-table/order-payment-status.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status payment-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' cartId=\'' +
((__t = ( order.cartId )) == null ? '' : __t) +
'\'\n  previousStatus=\'' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
'\'>\n  <option value="awaiting-payment" \n    ';
 if(order.paymentStatus == "awaiting-payment") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Awaiting payment</option>\n  <option value="payment-received" \n    ';
 if(order.paymentStatus == "payment-received") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Payment received</option>\n  <option value="confirmed-paid" \n    ';
 if(order.paymentStatus == "confirmed-paid") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Confirmed paid</option>\n  <option value="refunded" \n    ';
 if(order.paymentStatus == "refunded") { ;
__p += ' selected ';
 } ;
__p += ' \n    >Refunded</option>\n  <optgroup label="Cancelled">\n    <option status="cancelled" value="no-response-from-customer" \n      ';
 if(order.paymentStatus == "cancelled" && 
      order.paymentStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n      >No response from customer</option>\n    <option status="cancelled" value="customer-error" \n      ';
 if(order.paymentStatus == "cancelled" && 
      order.paymentStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Customer Error</option>\n  </optgroup>\n</select>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/omd-order-table/order-status.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(ordersMenu == "stocks") { ;
__p += '\n  <select class="select-status stocks-check-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'>\n    <option value="pending" \n      ';
 if(order.deliveryStatus == "pending") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Pending</option>\n    <option value="checking-stocks" \n      ';
 if(order.deliveryStatus == "checking-stocks") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Checking stocks</option>\n    <option value="stocks-available"\n      ';
 if(order.deliveryStatus == "stocks-available") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Stocks available</option>\n    <optgroup label="Cancelled">\n      <option status="cancelled" value="out-of-stock" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Stock</option>\n      <option status="cancelled" value="out-of-service-area" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-service-area") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Service Area</option>\n      <option status="cancelled" value="requested-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "requested-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Requested by customer</option>\n      <option status="cancelled" value="no-response-from-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >No response from customer</option>\n      <option status="cancelled" value="no-response-from-merchant"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "no-response-from-merchant") { ;
__p += ' selected ';
 } ;
__p += '\n        >No response from merchant</option>\n      <option status="cancelled" value="did-not-pass-verification"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "did-not-pass-verification") { ;
__p += ' selected ';
 } ;
__p += '\n        >Did not pass verification</option>\n      <option status="cancelled" value="customer-error" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Customer Error</option>\n      <option status="cancelled" value="test-order" \n        ';
 if(order.deliveryStatus == "test") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Test Order</option>\n    </optgroup>\n  </select>\n';
 } else if(ordersMenu == "delivery" || (ordersMenu == "all" && role == "admin")) { ;
__p += '\n  <select class="select-status ';
 if(ordersMenu == 'delivery') { ;
__p += ' for-delivery-status" ';
 } else { ;
__p += ' operations-all-status" ';
 } ;
__p += '\n    id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'paymentStatus=\'' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
'\'\n    paymentMethod=\'' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
'\'>\n    <option value="pending" \n      ';
 if(order.deliveryStatus == "pending") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Pending</option>\n    <option value="checking-stocks" \n      ';
 if(order.deliveryStatus == "checking-stocks") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Checking stocks</option>\n    <option value="stocks-available"\n      ';
 if(order.deliveryStatus == "stocks-available") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Stocks available</option>\n    <option value="for-pickup"\n      ';
 if(order.deliveryStatus == "for-pickup") { ;
__p += ' selected ';
 } ;
__p += '\n      >For pickup</option>\n    <option value="in-transit"\n      ';
 if(order.deliveryStatus == "in-transit") { ;
__p += ' selected ';
 } ;
__p += ' \n      >In transit</option>\n    <option value="delivered"\n      ';
 if(order.deliveryStatus == "delivered") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Delivered</option>\n    <optgroup label="Returned">\n      <option status="returned" value="product-defect" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product Defect</option>\n      <option status="returned" value="unsatisfied-customer" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "unsatisfied-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Unsatisfied Customer</option>\n    </optgroup>\n    <optgroup label="Cancelled">\n      <option status="cancelled" value="out-of-stock" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Stock</option>\n      <option status="cancelled" value="out-of-service-area" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "out-of-service-area") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Out of Service Area</option>\n      <option status="cancelled" value="requested-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "requested-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Requested by customer</option>\n      <option status="cancelled" value="no-response-from-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "no-response-from-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >No response from customer</option>\n      <option status="cancelled" value="no-response-from-merchant"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "no-response-from-merchant") { ;
__p += ' selected ';
 } ;
__p += '\n        >No response from merchant</option>\n      <option status="cancelled" value="did-not-pass-verification"\n        ';
 if(order.deliveryStatus == "cancelled" &&
        order.deliveryStatusDetails == "did-not-pass-verification") { ;
__p += ' selected ';
 } ;
__p += '\n        >Did not pass verification</option>\n      <option status="cancelled" value="customer-error" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "customer-error") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Customer Error</option>\n      <option status="cancelled" value="test-order" \n        ';
 if(order.deliveryStatus == "test") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Test Order</option>\n      <option status="cancelled" value="address-not-existing" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "address-not-existing") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Address not existing</option>\n      <option status="cancelled" value="product-defect" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product defect</option>\n      <option status="cancelled" value="refused-by-customer" \n        ';
 if(order.deliveryStatus == "cancelled" && 
        order.deliveryStatusDetails == "refused-by-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Refused by customer</option>\n    </optgroup>\n  </select>\n  <div id="delivered-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="reveal-modal delivered-modal" data-reveal>\n    <div class="row">\n      <center><h2 id="shops-title" class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
'</h2></center>\n      <br/>\n      <label for="dp-delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'">Delivery Date: </label>\n      <input id="dp-delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="dp-delivery-date" type="text">\n    </div>\n    <br/>\n    <div class="row">\n      <div class="delivery-date-btn order-update modal-update selected" order-id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\'\n           previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\' id=\'delivery-date-' +
((__t = ( order.id )) == null ? '' : __t) +
'\'>Save</div>\n      <div id="delivery-date-cancel" class="order-update modal-cancel">Cancel</div>\n    </div>\n    <a class="close-status-modal">&#215;</a>\n  </div>\n';
 } else if(ordersMenu == "completed" || ordersMenu == "returned") { ;
__p += '\n  <select class=" select-status completed-status" id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\' previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\'>\n    <option value="delivered" \n      ';
 if(order.deliveryStatus == "delivered") { ;
__p += ' selected ';
 } ;
__p += ' \n      >Delivered</option>\n    <optgroup label="Returned">\n      <option status="returned" value="product-defect" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "product-defect") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Product Defect</option>\n      <option status="returned" value="unsatisfied-customer" \n        ';
 if(order.deliveryStatus == "returned" && 
        order.deliveryStatusDetails == "unsatisfied-customer") { ;
__p += ' selected ';
 } ;
__p += ' \n        >Unsatisfied Customer</option>\n    </optgroup>\n  </select>\n';
 } else { ;
__p += '\n  ' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n<div id="order-delivery-date" >\n  ';
 if(order.deliveryDate) { ;
__p += '\n    <a>' +
((__t = ( new Date(order.deliveryDate).toLocaleString().split(',')[0] )) == null ? '' : __t) +
'</a>\n  ';
 } ;
__p += '\n</div>\n';
 if(ordersMenu == 'delivery' || ordersMenu == 'completed' || ordersMenu == 'returned' || ordersMenu == 'all') { ;
__p += '\n  <div id="for-pickup-' +
((__t = ( order.id )) == null ? '' : __t) +
'" class="reveal-modal waybill-modal" data-reveal>\n    <center><h2 id="shops-title" class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
'</h2></center>\n    <form>\n      <div id="waybill-details1" class="row">\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Merchant: ' +
((__t = ( order.shopName )) == null ? '' : __t) +
'</label>\n        </div>\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Customer: ' +
((__t = ( order.firstname )) == null ? '' : __t) +
' ' +
((__t = ( order.lastname )) == null ? '' : __t) +
'</label>\n        </div>\n      </div>\n      <div id="waybill-details2" class="row">\n        <div class="large-6 columns">\n          <label class="order-modal-details1">Items: ' +
((__t = ( order.count )) == null ? '' : __t) +
'</label>\n        </div>\n        <div class="large-6 columns">\n          ';
 var totalAmount = order.itemAmount + order.deliveryFee  ;
__p += '\n          <label class="order-modal-details1">Price: SGD ' +
((__t = ( totalAmount )) == null ? '' : __t) +
'</label>\n        </div>\n      </div>\n      <div class="row">\n        <div class="large-3 columns">\n          <label id="courier-no-label" class="order-modal-header2">Courier: </label>\n        </div>\n        <div class="large-9 columns">\n          <select class="select-status courier" id=\'courier-no-' +
((__t = ( order.id )) == null ? '' : __t) +
'-select\'>\n            ';
 for(var x in courierList) { ;
__p += '\n              <option value="' +
((__t = ( courierList[x] )) == null ? '' : __t) +
'" ';
 if(order.courier == courierList[x] ) { ;
__p += ' selected  ';
 } ;
__p += '> ' +
((__t = ( courierList[x]  )) == null ? '' : __t) +
' </option>\n            ';
 } ;
__p += '\n          </select>\n        </div>\n      </div>\n      <div class="row">\n        <div class="large-3 columns">\n          <label id="waybill-no-label" class="order-modal-header2">Waybill # : </label>\n        </div>\n        <div class="large-9 columns">\n          <input id="waybill-no-' +
((__t = ( order.id )) == null ? '' : __t) +
'-text" type="text" value="' +
((__t = ( order.waybill )) == null ? '' : __t) +
'"/>\n        </div>\n      </div>\n      <center>\n        <div class="waybill-btn order-update modal-update selected" order-id=\'' +
((__t = ( order.id )) == null ? '' : __t) +
'\'\n          previousStatus=\'' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
'\' id=\'waybill-' +
((__t = ( order.id )) == null ? '' : __t) +
'\'>Save</div>\n        <div id="waybill-cancel" class="order-update modal-cancel">Cancel</div>\n      </center>\n    </form>\n    <a class="close-status-modal">&#215;</a>\n  </div>\n';
 } ;


}
return __p
};

this["JST"]["assets/linker/templates/SG/omd-order-table/order-team.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select class="select-status team-assignment';
 if(ordersMenu == 'all') { ;
__p += ' team-assignment-all';
 } ;
__p += '"\n  id="' +
((__t = ( order.id )) == null ? '' : __t) +
'" previousStatus="' +
((__t = ( order.teamAssigned )) == null ? '' : __t) +
'" ';
 if((ordersMenu == 'all' && role != 'admin') || (ordersMenu != 'all' && order.teamAssigned)) { ;
__p += 'disabled="disabled"';
 } ;
__p += '\n>\n  <option value="none">-</option>\n';
 var teams = teams.split(','); ;
__p += '\n';
 for(var i = 0; i < teams.length; i++) { ;
__p += '\n<option value="' +
((__t = ( teams[i] )) == null ? '' : __t) +
'"\n';
 if(order.teamAssigned == teams[i]) { ;
__p += 'selected';
 } ;
__p += '\n>' +
((__t = ( teams[i] )) == null ? '' : __t) +
'</option>\n';
 } ;
__p += '\n</select>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/order-details-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  var pathArray = window.location.pathname.split( '/' );
  var finance = false;
  if(pathArray[2] == 'finance') {
    finance = true;
  }
  var completed = false;
  if(pathArray[3] == 'completed') {
    completed = true;
  }
;
__p += '\n<form id="order-form-' +
((__t = (order.id)) == null ? '' : __t) +
'">\n<h1 class="order-modal-header1">Order #' +
((__t = ( order.id )) == null ? '' : __t) +
' </h1>\n<div class="order-modal-details1">\n  ';

    var createdAtDate = new Date(order.createdAt);
    var updatedAtDate = new Date(order.updatedAt);
    var deliveryDate;
    if(order.deliveryDate) {
      deliveryDate = new Date(order.deliveryDate).toLocaleString().split(',')[0];
    } else {
      deliveryDate = "N/A";
    }
  ;
__p += '\n  <p>Order Date: ' +
((__t = ( createdAtDate.toLocaleString() )) == null ? '' : __t) +
' </p>\n  <p>Last Update: ' +
((__t = ( updatedAtDate.toLocaleString() )) == null ? '' : __t) +
' </p>\n  <p>Payment Method: ' +
((__t = ( order.paymentMethod )) == null ? '' : __t) +
' </p>\n  <p>Payment Status: ' +
((__t = ( order.paymentStatus )) == null ? '' : __t) +
' </p>\n  <p>Delivery Status: ' +
((__t = ( order.deliveryStatus )) == null ? '' : __t) +
' </p>\n  <p>Delivery Date:\n    ';
 if(finance == false && order.deliveryStatus == 'delivered') { ;
__p += '\n      <img class="edit-delivery-date" for="DeliveryDate" id="updateDeliveryDate" src="../../images/edit.png">\n      <input type="text" id="editDeliveryDate" class="hidden" name="deliveryDate"/>\n    ';
 } ;
__p += '\n    <span id="defaultDeliveryDate">' +
((__t = ( deliveryDate )) == null ? '' : __t) +
'</span>\n  </p>\n  ';
 if(showMemberType) { ;
__p += '\n    <p>Member Type: ' +
((__t = ( order.memberType )) == null ? '' : __t) +
' </p>\n  ';
 } ;
__p += '\n</div>\n<hr>\n<div id="order-merchants">\n  <p class="order-modal-header2">' +
((__t = ( order.shopName )) == null ? '' : __t) +
'</p>\n  <br>\n  <br>\n  ';
 for (var y in items) { ;
__p += '\n    <div class="row">\n      <div class="small-2 columns"><span class="product-image" style="background-image: url(\'' +
((__t = (items[y].thumbnail )) == null ? '' : __t) +
'\');"></span></div>\n      <div class="small-3 columns">\n        <div class="order-modal-details1">' +
((__t = (items[y].name )) == null ? '' : __t) +
'</div>\n        ';

          var attributes = "";
          for(var b in items[y].userCombination) {
            attributes += items[y].userCombination[b] + ", "
          }
          attributes = attributes.substring(0, attributes.length - 2);
        ;
__p += '\n        <div class="order-modal-details2">' +
((__t = ( attributes )) == null ? '' : __t) +
'</div>\n      </div>\n      <div class="small-2 columns">\n        <span class="order-modal-details2">Qty.</span>\n        <span class="order-modal-details1">' +
((__t = (items[y].quantity )) == null ? '' : __t) +
'</span>\n      </div>\n      <div class="small-3 columns order-modal-details1 end">SGD ' +
((__t = ( displayPrice(items[y].price.sale) )) == null ? '' : __t) +
'\n      ';
 if (items[y].price.sale < items[y].price.regular) { ;
__p += '\n        <br> <strike class="order-modal-details2"> SGD ' +
((__t = ( displayPrice(items[y].price.regular) )) == null ? '' : __t) +
' </strike>\n      ';
 } ;
__p += '\n        ';
 if(showMemberType) { ;
__p += '\n        <br/> <span class="order-modal-details1"> Pricing Scheme: ' +
((__t = ( items[y].pricingScheme )) == null ? '' : __t) +
'</span>\n        ';
 } ;
__p += '\n      </div>\n      <!--\n      <div class="small-2 columns">\n        ';
 if(finance == false && !completed) {;
__p += '\n          <select name="' +
((__t = ( items[y].cartId )) == null ? '' : __t) +
'">\n            <option value="ok" selected>Cancel</option>\n            <optgroup label="Cancel Reason">\n              <option value="out-of-stock"\n                ';
 if(items[y].cancelReason == "out-of-stock") { ;
__p += ' selected ';
 } ;
__p += '\n              >Out of Stock</option>\n              <option value="customer-error"\n                ';
 if(items[y].cancelReason == "customer-error") { ;
__p += ' selected ';
 } ;
__p += '\n              >Customer Error</option>\n            </optgroup>\n          </select>\n        ';
 } else  { ;
__p += '\n            ' +
((__t = ( items[y].cancelReason )) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n      </div>\n      -->\n    </div>\n    <br>\n  ';
 } ;
__p += '\n</div>\n<br>\n<br>\n<div class="row">\n  <div class="small-6 columns order-modal-details1">Coupon: ' +
((__t = ( order.couponCode )) == null ? '' : __t) +
' </div>\n  <div class="small-3 columns text-right order-modal-details1">\n    <div class="summary">Coupon Discount:</div>\n    <div class="summary">Credits Used:</div>\n    <div class="summary">Delivery Fee:</div>\n    <div class="summary">Total Amount Due:</div>\n  </div>\n  <div class="small-3 columns text-right order-modal-details1">\n    ' +
((__t = ( displayPrice(order.couponDiscount))) == null ? '' : __t) +
' SGD <br>\n    ' +
((__t = ( displayPrice(order.creditDiscount ? order.creditDiscount : 0.00))) == null ? '' : __t) +
' SGD <br>\n    ';
 if (order.freeShipping !== true) { ;
__p += '\n      ' +
((__t = ( displayPrice(order.deliveryFee))) == null ? '' : __t) +
' SGD\n    ';
 } else{ ;
__p += '\n      (FREE) ' +
((__t = ( displayPrice(order.originalDeliveryFee) )) == null ? '' : __t) +
' SGD\n    ';
 } ;
__p += '\n    <br>\n    ' +
((__t = ( displayPrice(order.totalAmount))) == null ? '' : __t) +
' SGD <br>\n  </div>\n</div>\n<hr>\n<div class="row">\n  <div class="small-3 columns" id="customer-name"> ' +
((__t = ( order.deliveryInfo.firstName + " " + order.deliveryInfo.lastName )) == null ? '' : __t) +
' </div>\n    <div class="small-5 columns order-modal-details1" id="customer-details">\n      <!--\n      ';
 if(finance == false && !completed && order.waybill === null) { ;
__p += '\n        <img class="edit-info" for="Address" src="../../images/edit.png">\n      ';
 } ;
__p += '\n      -->\n      <span id="defaultAddress"> ' +
__e( order.deliveryInfo.addressString ) +
' </span>\n\n        <textarea id="editAddress" class="hidden" name="addressString">' +
((__t = ( order.deliveryInfo.addressString )) == null ? '' : __t) +
'</textarea>\n\n      <br>\n\n      ';
 if(finance == false && !completed){ ;
__p += '\n        <img class="edit-info" for="Mobile" src="../../images/edit.png">\n      ';
 } ;
__p += '\n\n      <textarea id="editMobile" type="text" name="mobile" class="hidden mobile-order-details" data-prefix="' +
((__t = (mobileNumber.prefix)) == null ? '' : __t) +
'" data-digits="' +
((__t = (mobileNumber.digitLimit)) == null ? '' : __t) +
'">' +
((__t = ( order.deliveryInfo.mobile )) == null ? '' : __t) +
'</textarea>\n      <span class="error-msg"></span>\n      <span id="defaultMobile"> ' +
((__t = ( order.deliveryInfo.mobile )) == null ? '' : __t) +
' </span>\n      <p>' +
__e( order.email ) +
'</p>\n        ';
 if(order.specialInstruction) { ;
__p += '\n        <br>\n        <div id="waybill-label">Special Instructions:</div>\n        <div class="order-modal-details1">' +
((__t = ( order.specialInstruction )) == null ? '' : __t) +
'</div>\n      ';
 } ;
__p += '\n    </div>\n  <div class="small-4 columns" id="order-waybill">\n    <div id="waybill-label">Waybill:</div>\n      <div class="order-modal-details1">\n        ';
 if (order.waybill) { ;
__p += '\n          ';
 if(finance == false) { ;
__p += '\n            <img class="edit-info" for="Waybill" src="../../images/edit.png">\n            <textarea id="editWaybill" class="hidden" name="waybill">' +
((__t = ( order.waybill )) == null ? '' : __t) +
'</textarea>\n          ';
 } ;
__p += '\n          <span id="defaultWaybill">\n            ';
 if (order.courierlink) { ;
__p += '\n              <a href= "' +
((__t = ( order.courierlink)) == null ? '' : __t) +
'" target="_blank">\n                ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n              </a>\n            ';
 } else  { ;
__p += '\n              ' +
((__t = ( order.waybill )) == null ? '' : __t) +
'\n            ';
 } ;
__p += '\n          </span>\n        ';
 } else { ;
__p += '\n          N/A\n        ';
 } ;
__p += '\n      </div>\n    ';
 if(order.paymentMethod == "paypal") { ;
__p += '\n      <div id="waybill-label">PayPal ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.PAYMENTINFO_0_TRANSACTIONID || cart.paymentDetails.PAYMENTREQUESTINFO_0_TRANSACTIONID : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n    ';
 if(order.paymentMethod == "dragonpay") { ;
__p += '\n      <div id="waybill-label">DragonPay ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.refNo : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n    ';
 if(order.paymentMethod == "paymaya") { ;
__p += '\n      <div id="waybill-label">Transaction ID:</div>\n      <div class="order-modal-details1">' +
((__t = ( (cart && cart.paymentDetails) ? cart.paymentDetails.id : 'NOT FOUND' )) == null ? '' : __t) +
'</div>\n    ';
 } ;
__p += '\n  </div>\n</div>\n<br/>\n</form>\n\n';
 if(finance == false){ ;
__p += '\n  <center>\n    <div href="#" id="order-update" order-id="' +
((__t = (order.id)) == null ? '' : __t) +
'" class="modal-update update-order-details order-update selected">Update</div>\n    <div id="order-update" class="modal-cancel order-update order-details-cancel">Cancel</div>\n  </center>\n';
 } ;
__p += '\n\n<br/>\n\n<div class="order-modal-details1">\n  <p>UTM Source: ' +
((__t = ( order.utm_source || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Medium: ' +
((__t = ( order.utm_medium || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Campaign: ' +
((__t = ( order.utm_campaign || 'N/A' )) == null ? '' : __t) +
' </p>\n  <p>UTM Content: ' +
((__t = ( order.utm_content || 'N/A' )) == null ? '' : __t) +
' </p>\n</div>\n\n<a id="btn-hide-show" class="btn-hide-show close"> <span>Show</span> order status history</a>\n<table id="order-status-history-table" class="order-status-history-content">\n  <thead>\n    <th style="width: 25%;">Date</th>\n    <th style="width: 20%;">Status</th>\n    <th style="width: 20%;">Item</th>\n    <th style="width: 35%;">Auditor</th>\n  </thead>\n  <tbody>\n    ';
 if(status.length > 0) { ;
__p += '\n      ';
 for(var x in status) { ;
__p += '\n        ';
 if(status[x].status !== 'abandoned-checkout' || (status[x].status == 'abandoned-checkout' && status.length == 1)) { ;
__p += '\n          <tr>\n            <td>' +
((__t = ( new Date(status[x].createdAt).toLocaleString() )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].status )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].itemName )) == null ? '' : __t) +
'</td>\n            <td>' +
((__t = ( status[x].auditor )) == null ? '' : __t) +
'</td>\n          </tr>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    ';
 } else { ;
__p += '\n      <tr>\n        <td colspan=4><center>No order status history.</center></td>\n      </tr>\n    ';
 } ;
__p += '\n  </tbody>\n</table>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/SG/out-of-stocks-from-cart-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="box">\n    <a class="close close-out-of-stock-modal">Close</a>\n\n    ';
 if( products.length == 1 ) { ;
__p += '\n    <p class="section-title">' +
((__t = ( products.length )) == null ? '' : __t) +
' item is already out of stock.</p>\n    ';
 } else { ;
__p += '\n    <p class="section-title">' +
((__t = ( products.length )) == null ? '' : __t) +
' items are already out of stock.</p>\n    ';
 } ;
__p += '\n\n    <div class="product-data">\n        ';
 for (var i in products) { ;
__p += '\n        ';
 var product = products[i] ;
__p += '\n        <div class="box">\n            <div class="product-image">\n                <span class="helper"></span><img src="' +
((__t = ( product.thumbnail )) == null ? '' : __t) +
'" alt="" />\n            </div>\n            <div class="product-details">\n                <div class="product-name">\n                    <input type="hidden" class="out-of-stock-cart-id" value="' +
((__t = ( product.cartId )) == null ? '' : __t) +
'">\n                    <p>' +
((__t = ( product.name )) == null ? '' : __t) +
'</p>\n                    ';

                        var attributes = "";
                        for(var b in product.userCombination) {
                            attributes += product.userCombination[b] + ", "
                        }
                        attributes = attributes.substring(0, attributes.length - 2);
                    ;
__p += '\n                    <p class="specs">' +
__e( attributes ) +
'</p>\n\n                </div>\n                <div class="quantity">\n                    <p>Qty<p>\n                    <p><span>' +
((__t = ( product.quantity )) == null ? '' : __t) +
'</span></p>\n                </div>\n                <div class="item-price">SGD ' +
((__t = ( displayPrice(product.price.sale * product.quantity) )) == null ? '' : __t) +
' </div>\n            </div>\n        </div><!-- end box -->\n        ';
 } ;
__p += '\n    </div><!-- end product-data -->\n\n    <div class="button-group">\n        <a class="button" id="remove-to-cart">Remove from cart</a>\n        <a class="btn-text close-out-of-stock-modal">Cancel</a>\n    </div>\n\n</div><!-- end box -->';

}
return __p
};

this["JST"]["assets/linker/templates/SG/product-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-popup hide"></div><div class="overlay-preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-product-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-product-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(results.total/results.page_offset) ;
__p += '\n  ';
 if(results.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (results.page_offset * (results.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === results.page){ ;
__p += '\n      ';
 var display_ceiling = results.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = results.page_offset * results.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( results.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-product-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'">' +
((__t = ( results.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < results.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( results.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-product-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var x in results.results) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(idsArr.indexOf(results.results[x].product_id) < 0) { ;
__p += '\n          <input class="product-item" type="checkbox" name="product-item" product-id="' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="product-item" type="checkbox" name="product-item" product-id="' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        <div class="item-image-container">\n          <center><a href="/products/' +
((__t = ( results.results[x].product_id )) == null ? '' : __t) +
'" target="_blank"><img class="product-image" src="' +
((__t = ( results.results[x].thumbnail || '/images/image-holder.png' )) == null ? '' : __t) +
'"></a></center>\n        </div>\n        <div style="height: 105px;">\n          <div style="height: 70px;">\n            <div class="row">\n              <center><h2 class="item-products-title" >' +
((__t = ( results.results[x].name )) == null ? '' : __t) +
'</h2></center>\n            </div>\n            <div class="row">\n              <center><h2 class="shop-title" ><em>' +
((__t = ( results.results[x].shop.name )) == null ? '' : __t) +
'</em></h2></center>\n            </div>\n          </div>\n          <div class="row">\n            <center><h2 class="item-products-title" >SGD ' +
((__t = ( displayPrice(results.results[x].price.sale) )) == null ? '' : __t) +
'</h2></center>\n          </div>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button product-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/product-item-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  product.id = product.product_id;
  var onSale = 0;
  var dispPrice = product.price.regular; 
  if( product.price.sale < product.price.regular ) {
    dispPrice = product.price.sale;
    onSale = 1;
  }
;
__p += '\n<div class="item item-' +
((__t = ( product.id )) == null ? '' : __t) +
'">\n  <ul class="tabs-container">\n    ';
 if( onSale == 1 ) { ;
__p += '  <li class="tab-sale">sale</li> ';
 } ;
__p += '\n    <!-- <li class="tab-new-arrival">new arrival</li> -->\n  </ul>\n\n\n  <div>\n    ';
 /*since not all have thumbnails right now, lets show images[0] by default. */ ;
__p += '\n    <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e(product.name) +
'/' +
__e(product.id) +
'?ref=' +
((__t = ( page )) == null ? '' : __t) +
'" class="pic">\n      <span class="overlay-product"></span>\n      <span class="view-item">view details</span>\n      <img src="' +
__e( product.thumbnail !='undefined' ? product.thumbnail : product.images[0] ) +
'" alt="" />\n    </a>\n    <div class="text">\n      <div class="price-container">\n        ';
 if( onSale == 1 ) { ;
__p += ' <span class="old-price">SGD ' +
((__t = ( displayPrice(product.price.regular) )) == null ? '' : __t) +
'  </span> ';
 } ;
__p += '\n        <p class="price" data-price="' +
((__t = ( product.price.currency )) == null ? '' : __t) +
' ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'">SGD ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'</p>\n      </div>\n     ';
if( product.like ) { ;
__p += '\n       <a class="btn-like selected" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n     ';
 } else { ;
__p += '\n       <a class="btn-like" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n     ';
 } ;
__p += '\n      <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e(product.name) +
'/' +
__e(product.id) +
'?ref=' +
((__t = ( page )) == null ? '' : __t) +
'" class="product-title">' +
__e(product.name) +
'</a>\n    </div>\n  </div>\n  <span class="store" storeId="' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'"><span class="store-avatar" style="background: url(\'https://s3-ap-southeast-1.amazonaws.com/voyager-dev/marketplace/logo/thumbnail/' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span> from <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'">' +
__e( product.shop.name ) +
'</a></span>\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/SG/recently-viewed-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  var onSale = 0;
  var dispPrice = product.price.regular; 
  if( product.price.sale < product.price.regular ) {
    dispPrice = product.price.sale;
    onSale = 1;
  }
;
__p += '\n';
 if( product.shop.shopType !== undefined && product.shop.shopType == "direct" ) { ;
__p += '\n<div class="item" title="This product can be directly purchased from Takatack using Takatack Coupons &amp; Promotions.">\n';
 } else { ;
__p += '\n<div class="item">\n';
 } ;
__p += '\n  <ul class="tabs-container">\n    ';
 if( onSale == 1 ) { ;
__p += '  <li class="tab-sale">sale</li> ';
 } ;
__p += '\n    <!-- <li class="tab-new-arrival">new arrival</li> -->\n  </ul>\n  <div>\n    <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e( product.seoName ) +
'/' +
__e(product.id) +
'?ref=rvi-product:' +
((__t = ( source )) == null ? '' : __t) +
'" class="pic">\n      <img src="' +
((__t = ( product.thumbnail )) == null ? '' : __t) +
'" alt="" />\n    </a>\n    <div class="text">\n      <div class="price-container">\n        ';
 if( onSale == 1 ) { ;
__p += '  <span class="old-price">SGD ' +
((__t = ( displayPrice(product.price.regular) )) == null ? '' : __t) +
'  </span> ';
 } ;
__p += '\n        <p class="price" data-price="' +
((__t = ( product.price.currency )) == null ? '' : __t) +
' ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'">SGD ' +
((__t = ( displayPrice(dispPrice) )) == null ? '' : __t) +
'</p>\n      </div>\n\n      ';
if( product.like ) { ;
__p += '\n        <a class="btn-like selected" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n      ';
 } else { ;
__p += '\n        <a class="btn-like" data-productId=\'' +
((__t = ( product.id )) == null ? '' : __t) +
'\'></a>\n      ';
 } ;
__p += '\n\n      <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'/' +
__e( product.seoName ) +
'/' +
__e(product.id) +
'?ref=rvi-product:' +
((__t = ( source )) == null ? '' : __t) +
'" class="product-title">' +
((__t = ( product.name )) == null ? '' : __t) +
'</a>\n\n    </div>\n      \n  </div>\n  <!-- <span class="store"><span class="store-avatar" style="background: url(\'' +
((__t = ( logothumbnail )) == null ? '' : __t) +
'/' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'.jpg\') no-repeat center;"></span>from <a href="/shops/' +
((__t = ( product.shop.alias )) == null ? '' : __t) +
'">' +
((__t = ( product.shop.name )) == null ? '' : __t) +
'</a></span> -->\n\n  ';
 if( product.shop.shopType !== undefined && product.shop.shopType == "direct" ) { ;
__p += '\n  <span class="store concierge" storeId="' +
((__t = ( product.shop.id )) == null ? '' : __t) +
'"><span class="store-avatar"></span> Fulfilled by Takatack</a></span>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["JST"]["assets/linker/templates/SG/referral-coupon-settings-modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="small-5 columns">\n    Edit ' +
((__t = ( name )) == null ? '' : __t) +
'\n  </div>\n</div>\n\n<hr>\n\n<form id="form-config">\n  <input type="hidden" name="edit-config-' +
((__t = ( name )) == null ? '' : __t) +
'" value="edit" >\n  <input type="hidden" name="config-name" id="config-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n  <div class="row">\n    <div class="small-12 columns">\n      <div class="row collapse">\n        <div class="small-12 columns">\n          <select id="discount_type" name="discount_type">\n            <option name="price" \n              ';
 if(discount_type == "price") { ;
__p += ' selected ';
 } ;
__p += ' \n            value="price" >Price</option>\n            <option name="percent_off"\n              ';
 if(discount_type == "percent_off") { ;
__p += ' selected ';
 } ;
__p += ' \n            value="percent_off">Percent</option>\n          </select>\n\n          Discount: <input id="discount" type="text" name="discount" value=' +
((__t = ( discount )) == null ? '' : __t) +
'>\n          Minimum Amount: <input id="minimum_amount" type="text" name="minimum_amount" value=' +
((__t = ( minimum_amount )) == null ? '' : __t) +
'>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="small-12 columns">\n      <div class="row collapse">\n        <div class="small-9 columns">\n        </div>\n        <div class="small-2 columns">\n          <button type=\'submit\' class="button postfix edit-config">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<a class="close-reveal-modal">&#215;</a>\n';

}
return __p
};

this["JST"]["assets/linker/templates/SG/shop-admin-temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="overlay-disabled hide"></div><div class="preloaderImg">Please wait...</div>\n<div class="row">\n  <div class="large-12 columns">\n    <div class="row collapse">\n      <div class="small-10 columns">\n        <input type="text" placeholder="Keywords" id="keywords-shop-admin" value="' +
((__t = ( keywords ? keywords : '' )) == null ? '' : __t) +
'" >\n      </div>\n      <div class="small-2 columns">\n        <a class="button postfix" id="search-shop-admin">Search</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  ';
 var page_count = Math.ceil(allShops.total/allShops.page_offset) ;
__p += '\n  ';
 if(allShops.total === 0){ ;
__p += '\n    ';
 var display_ceiling = 0 ;
__p += '\n    ';
 var display_floor = 0 ;
__p += '\n  ';
 } else { ;
__p += '\n    ';
 var display_floor = (allShops.page_offset * (allShops.page - 1)) + 1 ;
__p += '\n    ';
 if(page_count === allShops.page){ ;
__p += '\n      ';
 var display_ceiling = allShops.total ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 var display_ceiling = allShops.page_offset * allShops.page ;
__p += '\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n  \n  <div class="large-6 columns"><span id="result-title">\n    Displaying ' +
((__t = ( display_floor )) == null ? '' : __t) +
' to ' +
((__t = ( display_floor + allShops.page_offset > allShops.total ? allShops.total : display_ceiling )) == null ? '' : __t) +
' of ' +
((__t = ( allShops.total )) == null ? '' : __t) +
' results\n  </span></div>\n  <div class="large-6 columns">\n    <ul class="pagination">\n      ';
 if(display_floor !== 1) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="prev" id="prev-shop-admin">PREV</a></li>\n      ';
 } ;
__p += '\n      <li class="current"><a href="" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'">' +
((__t = ( allShops.page )) == null ? '' : __t) +
'</a></li>\n      ';
 if(display_ceiling < allShops.total) { ;
__p += '\n        <li class=""><a href="#" class="nav" data-page="' +
((__t = ( allShops.page )) == null ? '' : __t) +
'" data-page-count="' +
((__t = ( page_count )) == null ? '' : __t) +
'" \n        data-nav="next" id="next-shop-admin">NEXT</a></li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n<div class="column item-list">\n  ';
 for(var i in allShops.result) { ;
__p += '\n    <div class="large-3 columns end">\n      <div class="item-container">\n        ';
 if(idsArr.indexOf(allShops.result[i].id) < 0) { ;
__p += '\n          <input class="shop-item" type="checkbox" name="shop-item" shop-id="' +
((__t = ( allShops.result[i].id )) == null ? '' : __t) +
'" />\n        ';
 } else { ;
__p += '\n          <input class="shop-item" type="checkbox" name="shop-item" product-id="' +
((__t = ( allShops.result[i].id )) == null ? '' : __t) +
'" checked />\n        ';
 } ;
__p += '\n        ';
 if(allShops.result[i].stitched_images !== undefined){ ;
__p += '\n          <div class="item-image-container">\n            <img class="shop-image" src="' +
((__t = ( allShops.result[i].stitched_images )) == null ? '' : __t) +
'">\n          </div>\n        ';
 } ;
__p += '\n        <div class="row">\n          <center><h2 class="item-products-title" >' +
((__t = ( allShops.result[i].name )) == null ? '' : __t) +
'</h2></center>\n        </div>\n        <div class="row">\n         <h2 class="shop-title" ></h2>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n<center>\n  <a class="button edit-coupon-button default-button shop-item-update update-button">UPDATE</a>\n</center>';

}
return __p
};

this["JST"]["assets/linker/templates/SG/waybill-number.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="large-3 columns">\n    <label id="waybill-no-label" class="order-modal-header2">Waybill # : </label>\n</div>\n<div class="large-9 columns">\n    <input id="waybill-no-' +
((__t = ( id )) == null ? '' : __t) +
'-text" type="text" value="' +
((__t = ( previousWaybill )) == null ? '' : __t) +
'" />\n</div>\n';

}
return __p
};
