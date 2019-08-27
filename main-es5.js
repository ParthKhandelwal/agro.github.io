(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/AccountingPackage/day-book/day-book.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AccountingPackage/day-book/day-book.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"htmlPage\">\n<app-voucher-table [(vouchers)] = \"this.voucherService.vouchers\" #table></app-voucher-table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/CustomerPackage/address-list-view/address-list-view.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/CustomerPackage/address-list-view/address-list-view.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>address-list-view works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/CustomerPackage/customer-list-view/customer-list-view.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/CustomerPackage/customer-list-view/customer-list-view.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-customer-table [(customers)] = \"customers\" #table></app-customer-table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n<div class=\"invoicePrintView\" id=\"print-section\">\n  <div class=\"header\">\n    <div class=\"companyImage\">\n\n    </div>\n    <div class=\"voucherInformation\">\n      <div class=\"customerInformation\">\n        <b>Customer Information</b><br>\n        {{customer.name}}<br>\n        {{customer.fullAddress.name}}, {{customer.fullAddress.tehsilName}}<br>\n        {{customer.fullAddress.stateName}}\n      </div>\n      <div class=\"customVoucherInformation\">\n        <table>\n\n\n        <tr>\n        <td>Invoice Number</td>\n        <td>{{tallyVoucher.customVoucherDetails.voucherNumber}}</td>\n        </tr>\n        <tr>\n        <td>Date</td>\n        <td>{{tallyVoucher.customVoucherDetails.date | date: \"dd-MMM-yyyy\"}}</td>\n        </tr>\n        <tr>\n        <td>Created By</td>\n        <td>{{tallyVoucher.customVoucherDetails.date | date: \"dd-MMM-yyyy\"}}</td>\n        </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"body\">\n    <table class=\"table\" id = \"productTable\">\n      <tr class=\"table-header\">\n      <th width = '30%' class=\"header__item\">Product Details</th>\n      <th class=\"header__item\">Batch Details</th>\n      <th class=\"header__item\">Qty</th>\n      <th class=\"header__item\">CGST<br>SGST</th>\n      <th class=\"header__item\">Rate</th>\n      <th class=\"header__item\">Amount</th>\n      </tr>\n    <ng-container class=\"table-content\" *ngFor = \"let item of tallyVoucher.billedStockItems\">\n      <tr class=\"table-row\">\n      <td class=\"table-data\" width = '30%'>\n        <b>{{item.name}}</b> <br>\n        {{item.parent}}\n      </td>\n      <td class=\"table-data\">\n        {{item.batch.name}}<br>\n        {{item.batch.expiryDate| date: \"dd-MMM-yyyy\"}}\n      </td>\n      <td class=\"table-data\">\n        {{item.quantity}}\n      </td>\n      <td class=\"table-data\">\n        {{item.cgst}}<br>\n        {{item.sgst}}\n      </td>\n      <td class=\"table-data\">\n        {{item.rate}}\n      </td>\n      <td class=\"table-data\">\n        {{item.amount}}\n      </td>\n      </tr>\n    </ng-container>\n</table>\n<div class=\"lowerBody\">\n  <div class=\"posDetails\">\n    <table id='posTable'>\n      <tr>\n        <td width = \"97%\">Cash Recieved</td>\n        <td>{{tallyVoucher.customVoucherDetails.posCashRecieved}}</td>\n      </tr>\n      <tr>\n        <td>Invoice Total</td>\n        <td>{{tallyVoucher.ledgerEntry.cash}}</td>\n      </tr>\n      <tr>\n        <td>Balance</td>\n        <td>{{tallyVoucher.customVoucherDetails.posCashRecieved - tallyVoucher.ledgerEntry.cash}}</td>\n      </tr>\n    </table>\n\n  </div>\n  <div class=\"total\">\n  <table id = 'totalTable'>\n  <tr>\n    <td width = '100%'>Subtotal</td>\n    <td>{{tallyVoucher.ledgerEntry.subTotal}}</td>\n  </tr>\n  <tr>\n    <td width = '10%'>CGST</td>\n    <td>{{tallyVoucher.ledgerEntry.cgst}}</td>\n  </tr>\n  <tr>\n    <td width = '50%'>SGST</td>\n    <td>{{tallyVoucher.ledgerEntry.sgst}}</td>\n  </tr>\n  <tr>\n    <td width = '50%'><b>Total</b></td>\n    <td><b>{{tallyVoucher.ledgerEntry.cash}}</b></td>\n  </tr>\n  </table>\n  </div>\n\n\n</div>\n  </div>\n  <div class=\"footer\">\n    <div id=\"hsnPart\">\n      <table id = 'hsnTable' #hsnTable border=\"1\">\n        <col>\n        <col>\n        <colgroup span=\"2\"></colgroup>\n        <colgroup span=\"2\"></colgroup>\n        <col>\n        <tr>\n        <th rowspan=\"2\">HSN/SAC</th>\n        <th rowspan=\"2\">Taxable Value</th>\n        <th colspan=\"2\" scope=\"colgroup\">Central Tax</th>\n        <th colspan=\"2\" scope=\"colgroup\">State Tax</th>\n        <th rowspan=\"2\">Total</th>\n        </tr>\n        <tr>\n          <th scope=\"col\">Rate</th>\n          <th scope=\"col\">Amount</th>\n          <th scope=\"col\">Rate</th>\n          <th scope=\"col\">Amount</th>\n        </tr>\n\n          <ng-container *ngFor = 'let code of hsnDetails()'>\n          <tr>\n            <td>{{code.hsnCode}}</td>\n            <td>{{code.taxableValue}}</td>\n            <td>{{code.cgst.rate}}</td>\n            <td>{{code.cgst.amount}}</td>\n            <td>{{code.sgst.rate}}</td>\n            <td>{{code.sgst.amount}}</td>\n            <td>{{code.cgst.amount + code.sgst.amount}}</td>\n          </tr>\n          </ng-container>\n\n      </table>\n    </div>\n    <div class=\"termAndCondition\">\n\n    </div>\n  </div>\n</div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Products/expired-products/expired-products.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Products/expired-products/expired-products.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\n<app-batch-table #table></app-batch-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Products/product-list-view/product-list-view.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Products/product-list-view/product-list-view.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-stock-item-table [(stockItems)] = \"stockItems\" #table></app-stock-item-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Products/update-customer/update-customer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Products/update-customer/update-customer.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n<form class=\"\" action=\"index.html\" method=\"post\">\n  <div class=\"productBaseDetail\">\n    <mat-form-field>\n      <tr>\n        <td>Name:</td>\n        <td>{{product.name}}</td>\n      </tr>\n      <tr>\n        <td>Category</td>\n        <td>{{product.category}}</td>\n      </tr>\n      <tr>\n        <td>Parent</td>\n        <td>{{product.parent}}</td>\n      </tr>\n      <label for=\"\"></label>\n    </mat-form-field>\n  </div>\n  <div class=\"productTallyDetails\">\n\n  </div>\n\n</form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/VoucherPackage/cash-tendered/cash-tendered.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/VoucherPackage/cash-tendered/cash-tendered.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <col span=\"2\" width = \"250\">\n  <col span=\"2\" width = \"70\">\n <tr>\n   <td>Amount Due</td>\n   <td>{{data}}</td>\n </tr>\n <tr>\n   <td>Amount Recieved</td>\n   <td><input cdkFocusInitial matInput type=\"number\" name=\"amountRecieved\" (keydown.enter) = \"validate();false\" [(ngModel)] = \"amountRecieved\"></td>\n </tr>\n <tr>\n   <td>Balance</td>\n   <td ng-class = \"{failure: data > amountRecieved},success: data <= amountRecieved\">{{data - amountRecieved}}</td>\n </tr>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/complaints/complaints.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/complaints/complaints.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>complaints works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/confirmation-box/confirmation-box.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/confirmation-box/confirmation-box.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n {{message}}\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-form/create-address-form/create-address-form.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-form/create-address-form/create-address-form.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form data-type=\"default\" #f= 'ngForm' (submit)= 'f.form.valid && submit()' name=\"create-address-form\" accept-charset=\"UTF-8\" role=\"form\">\n\n    <mat-card class=\"userForm\">\n      <mat-card-header class=\"header\">\n        Address Details\n      </mat-card-header>\n      <mat-card-content>\n    <mat-form-field class=\"input\">\n      <input matInput type=\"text\" name=\"Name\" [(ngModel)]= 'address.name' required placeholder=\"Enter Name\">\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <input matInput name = 'tehsilName'  [(ngModel)] = 'address.tehsilName' placeholder=\"Enter Tehsil Name\">\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <input matInput type=\"text\" name=\"districtName\" [(ngModel)]= 'address.districtName' required placeholder=\"Enter District Name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"input\">\n      <mat-select placeholder=\"Select a user role\" name = \"role\" [(ngModel)]='address.stateName'>\n        <mat-option *ngFor = 'let name of placeOfSupplies' [value] = 'name'>{{name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <input matInput type=\"text\" name=\"noOfGovernmentLandRecords\" [(ngModel)]= 'address.noOfGovernmentLandRecords' placeholder=\"Enter Number of Government Land Records\">\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <input matInput type=\"text\" name=\"areaOfGovenmentLand\" [(ngModel)]= 'address.areaOfGovenmentLand' placeholder=\"Enter Area of Government Land Records\">\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <input matInput type=\"text\" name=\"noOfPrivateLandRecords\" [(ngModel)]= 'address.noOfPrivateLandRecords' placeholder=\"Enter Number Private of Land Records\">\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <input matInput type=\"text\" name=\"areaOfPrivateLand\" [(ngModel)]= 'address.areaOfPrivateLand' placeholder=\"Enter Area of Private Land Records\">\n    </mat-form-field>\n    <ng-container>\n      <button class=\"btn btn-lg btn-block btn-primary mb-3\" type=\"submit\" name=\"button\"> Save </button>\n    </ng-container>\n    </mat-card-content>\n    </mat-card>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-form/create-complaint-form/create-complaint-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-form/create-complaint-form/create-complaint-form.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>create-complaint-form works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-form/create-customer-form/create-customer-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-form/create-customer-form/create-customer-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n  <!-- Heading -->\n  <h1 data-type=\"header\" class=\"display-4 text-center mb-3\">Customer Details\n  </h1>\n  <!-- Subheading -->\n  <!-- Form -->\n  <form data-type=\"default\" #f= 'ngForm' (submit)= 'f.form.valid && submit()' name=\"create-farmer-form\" accept-charset=\"UTF-8\" role=\"form\">\n\n  <!-- Email address -->\n\t<div data-type=\"default\" class=\"form-group\">\n\t  <!-- Label -->\n\t  <label>Name<br data-type=\"default\"></label>\n\t  <!-- Input -->\n\t  <input name= \"name\" data-type=\"default\" type=\"text\" required placeholder=\"Enter customer name\" class=\"form-control\" required\n   #name= 'ngModel' [ngClass] = \"{'is-invalid': f.submitted && name.invalid}\" [(ngModel)]= 'customer.name'>\n\t</div>\n\t<!-- Password -->\n\t<div data-type=\"default\" class=\"form-group\">\n\t\t  <label>Father Name</label>\n      <input type=\"text\" name=\"fatherName\" value=\"\" class=\"form-control\" placeholder=\"Enter father's name\" [(ngModel)]= 'customer.fatherName'>\n\t</div>\n  <div data-type=\"default\" class=\"form-group\">\n\t\t  <label>Phone Number</label>\n      <input type=\"phoneNumber\" name=\"phoneNumber\" required value=\"\" class=\"form-control\" placeholder=\"Enter phone number\" required\n     #phoneNumber= 'ngModel' [ngClass] = \"{'is-invalid': f.submitted && phoneNumber.invalid}\" [(ngModel)]='customer.phoneNumber'>\n\t</div>\n  <div data-type=\"default\" class=\"form-group\">\n\n\t\t  <label>Address</label>\n      <select class=\"form-control\" name=\"address\" [(ngModel)] = 'customer.addressId'>\n      <option *ngFor=\"let address of addresses\" [value]=\"address._id\">{{address.name}}, {{address.stateName}}</option>\n      </select>\n\t</div>\n  <div data-type=\"default\" class=\"form-group\">\n\t\t  <label>Land Holding</label>\n      <input type=\"number\" name=\"landHolding\" value=\"\" class=\"form-control\" placeholder=\"Enter land amount\" [(ngModel)] = 'customer.landHolding'>\n\t</div>\n\n\t<!-- Submit -->\n\t<button class=\"btn btn-lg btn-block btn-primary mb-3\" type=\"submit\" name=\"button\"> Save </button>\n\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-form/create-order-form/create-order-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-form/create-order-form/create-order-form.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>create-order-form works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-form/create-stock-item-form/create-stock-item-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-form/create-stock-item-form/create-stock-item-form.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form data-type=\"default\" #f= 'ngForm' (submit)= 'f.form.valid && submit()' name=\"create-stockitem-form\" accept-charset=\"UTF-8\" role=\"form\">\n\n    <mat-card class=\"userForm\">\n      <mat-card-header class=\"header\">\n        Stock Item\n      </mat-card-header>\n      <mat-card-content>\n    <mat-form-field class=\"input\">\n      <input matInput type=\"text\" name=\"Name\" [(ngModel)]= 'item.name' required placeholder=\"Enter Name\">\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <input matInput name = 'hsnCode'  [(ngModel)] = 'item.hsnCode' placeholder=\"Enter HSN/SAC\" type=\"text\">\n    </mat-form-field>\n\n    <mat-form-field class=\"input\">\n      <mat-select name = 'ledger' placeholder='Select a Ledger' [(ngModel)] = \"item.ledger\">\n        <mat-option *ngFor = \"let ledger of ledgers\" [value]='ledger'>{{ledger}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <mat-select name = 'gstOvrDNNature' placeholder='Select an option' [(ngModel)] = \"item.gstovrdnnature\">\n        <mat-option value = \"Sales Taxable\">Sales Taxable</mat-option>\n        <mat-option value = \"Sales Nil Rated\">Sales Nil Rated</mat-option>\n        <mat-option value = \"Sales Exempt\">Sales Exempt</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <ng-container>\n      <tr>\n        <td>\n          <mat-form-field class=\"input\">\n            <mat-select name = 'godownName' placeholder='Select a Godown' [(ngModel)] = \"priceListItem.godownName\">\n              <mat-option *ngFor = \"let name of godowns\" [value]='name'>{{name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field>\n            <input matInput type=\"number\" name=\"price\" [(ngModel)]= 'priceListItem.price' required placeholder=\"Enter price\">\n          </mat-form-field>\n        </td>\n        <td>\n          <button  mat-raised-button color=\"accent\" type=\"button\" name=\"addPriceListItem\" (click) = \"addPriceListItem()\">Add</button>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-container>\n      <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\" [(dataSource)]= \"dataSource\">\n\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"godownName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Godown Name</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.godownName}}</td>\n        </ng-container>\n\n\n        <!-- Phone Number Column -->\n        <ng-container matColumnDef=\"price\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Price</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.price}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"update\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n          <td mat-cell *matCellDef=\"let row\">\n              <button  mat-button color=\"warn\" name=\"button\">\n                  <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">delete</mat-icon>\n              </button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </ng-container>\n\n    <ng-container>\n      <button class=\"btn btn-lg btn-block btn-primary mb-3\" type=\"submit\" name=\"button\"> Save </button>\n    </ng-container>\n    </mat-card-content>\n    </mat-card>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-form/create-tax-details-form/create-tax-details-form.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-form/create-tax-details-form/create-tax-details-form.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form data-type=\"default\" #f= 'ngForm' (submit)= 'f.form.valid && submit()' name=\"create-stockitem-form\" accept-charset=\"UTF-8\" role=\"form\">\n\n    <mat-card class=\"userForm\">\n      <mat-card-header class=\"header\">\n        HSN/SAC Detials\n      </mat-card-header>\n      <mat-card-content>\n    <mat-form-field class=\"input\">\n      <input matInput type=\"text\" name=\"hsn\" [(ngModel)]= 'taxDetail.hsnCode' required placeholder=\"Enter HSN/SAC\">\n    </mat-form-field>\n    <mat-form-field class=\"input\">\n      <input matInput name = 'cgst'  [(ngModel)] = 'taxDetail.cgst' required placeholder=\"Enter CGST Rate\" type=\"number\">\n    </mat-form-field>\n\n    <mat-form-field class=\"input\">\n      <input matInput name = 'sgst'  [(ngModel)] = 'taxDetail.sgst' required placeholder=\"Enter SGST Rate\" type=\"number\">\n    </mat-form-field>\n\n\n    <ng-container>\n      <button class=\"btn btn-lg btn-block btn-primary mb-3\" type=\"submit\" name=\"button\"> Save </button>\n    </ng-container>\n    </mat-card-content>\n    </mat-card>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-form/create-user-form/create-user-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-form/create-user-form/create-user-form.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userForm\">\n  <h1 align = \"center\">User Details</h1>\n  <form data-type=\"default\" #f= 'ngForm' (submit)= 'f.form.valid && submit()' name=\"create-user-form\" accept-charset=\"UTF-8\" role=\"form\">\n    <div class=\"basicUserDetails\">\n      <mat-card class=\"userForm\">\n        <mat-card-header class=\"header\">\n          Basic details\n        </mat-card-header>\n        <mat-card-content>\n      <mat-form-field class=\"input\">\n        <input matInput type=\"text\" name=\"userName\" [(ngModel)]= 'user._id' required placeholder=\"Enter username\">\n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input matInput name = 'password'  [(ngModel)] = 'user.password' placeholder=\"Enter password\" [type]=\"hide ? 'password' : 'text'\">\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input matInput type=\"text\" name=\"name\" [(ngModel)]= 'user.name' required placeholder=\"Enter name\">\n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <input matInput type=\"text\" name=\"contactNumber\" [(ngModel)]= 'user.contactNumber' required placeholder=\"Enter contactNumber\">\n      </mat-form-field>\n      <mat-form-field class=\"input\">\n        <mat-select placeholder=\"Select a user role\" name = \"role\" [(ngModel)]='user.role'>\n          <mat-option value = \"Company User\">Company User</mat-option>\n          <mat-option value = \"Field User\">Field User</mat-option>\n          <mat-option value = \"Admin User\">Admin User</mat-option>\n        </mat-select>\n      </mat-form-field>\n      </mat-card-content>\n      </mat-card>\n      </div>\n\n      <ng-container *ngIf = \"user.role == 'Company User'\">\n      <div class=\"additionalUserDetails\">\n      <mat-card class=\"userForm\">\n        <mat-card-header class=\"header\">\n          Company User Additional Details\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field class=\"input\">\n            <input matInput type=\"text\" name=\"talluUserName\" [(ngModel)]= 'user.talluUserName' placeholder=\"Enter Tally username\" required>\n          </mat-form-field>\n          <mat-form-field class=\"input\">\n            <input matInput type=\"text\" name=\"POSClassName\" [(ngModel)]= 'user.posClass' placeholder=\"Enter POS Class\">\n          </mat-form-field>\n          <mat-form-field class=\"input\">\n            <mat-select placeholder = \"Choose Godown\" name = 'godownName' [(ngModel)] = 'user.godownName' required>\n              <mat-option *ngFor = 'let name of godownNames' [value] = 'name'>{{name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"input\">\n            <mat-select placeholder = \"Choose Cash Ledger Name\" name = 'cashLedgerName' [(ngModel)] = 'user.cashLedgerName' required>\n              <mat-option *ngFor = 'let name of cashLedgers' [value] = 'name'>{{name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"input\">\n            <mat-select placeholder = \"Choose POS Cash Ledger Name\" name='posCashLedgerName' [(ngModel)] = 'user.posCashLedgerName' required>\n              <mat-option *ngFor = 'let name of posCashLedgers' [value] = 'name'>{{name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"input\">\n            <mat-select placeholder = \"Choose Basic Base Party Name\" name='basicBasePartyName' [(ngModel)] = 'user.basicBasePartyName' required>\n              <mat-option *ngFor = 'let name of basicBasePartyNames' [value] = 'name'>{{name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"input\">\n            <mat-select placeholder = \"Choose Place of Supply\" name = 'placeOfSupply' [(ngModel)] = 'user.placeOfSupply' required>\n              <mat-option *ngFor = 'let name of placeOfSupplies' [value] = 'name'>{{name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"input\">\n            <mat-select placeholder = \"Choose Voucher Type Name\" name = 'voucherTypeName' [(ngModel)] = 'user.voucherTypeName' required>\n              <mat-option *ngFor = 'let name of voucherTypeNames' [value] = 'name'>{{name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n            <input name = \"fileInput\"  style=\"display: none\" type=\"file\" (change)=\"onFileChanged($event)\" #fileInput>\n            <button mat-raised-button (click) = \"fileInput.click()\" type= 'button' name=\"button\">Select File</button>\n            <img [src]=\"url\" height=\"200\"> <br/>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    </ng-container>\n    <ng-container>\n      <button class=\"btn btn-lg btn-block btn-primary mb-3\" type=\"submit\" name=\"button\"> Save </button>\n    </ng-container>\n\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-form/create-voucher/create-voucher.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-form/create-voucher/create-voucher.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invoice\" (document:keydown.meta.k)=\"doSomething()\">\n  <form id=\"voucherForm\">\n    <div class=\"invoiceInformation invoice\">\n      <mat-card>\n        <mat-card-content>\n          <button  mat-button color=\"warn\" name=\"button\" (click)= \"sync()\" class=\"invoice\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">sync</mat-icon>\n          </button>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(formControl)] = \"date\" class=\"full-width\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n\n        <label for=\"Voucher Number\" class=\"headline voucherNumber\">{{tallyVoucher.customVoucherDetails.voucherNumber}}</label>\n\n\n\n      </mat-card-content>\n      </mat-card>\n    </div>\n\n\n      <div class=\"customerInformation invoice\">\n      <mat-card>\n        <mat-card-header>\n        <mat-form-field class=\"full-width\">\n\n          <input type=\"text\" #customerField (keyup.enter)= \"validateCustomer()\" placeholder=\"Enter customer id\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n            <mat-option *ngFor=\"let customer of filteredOptions | async\" [value]=\"customer\">\n              {{customer.phoneNumber +\" : \"+ customer.name}}\n            </mat-option>\n          </mat-autocomplete>\n\n        </mat-form-field>\n        </mat-card-header>\n        <mat-card-content>\n\n              <tr>\n                <td>Name: </td>\n                <td><label for=\"\" *ngIf = \"this.myControl.value\">{{this.myControl.value.name}}</label></td>\n              </tr>\n              <tr>\n                <td>Father Name: </td>\n                <td><label for=\"\" *ngIf = \"this.myControl.value\">{{this.myControl.value.fatherName}}</label></td>\n              </tr>\n              <tr>\n                <td>Address: </td>\n                <td><label for=\"\" *ngIf = \"this.myControl.value\">{{this.myControl.value.fullAddress.name}}</label></td>\n              </tr>\n              <tr>\n                <td>Total Land: </td>\n                <td><label for=\"\" *ngIf = \"this.myControl.value\">{{this.myControl.value.landHolding}}</label></td>\n              </tr>\n\n        </mat-card-content>\n        <table mat-table #customerHistoryTable class=\"full-width-table\" matSort aria-label=\"CustomerHistory\" [(dataSource)] = \"customerHistoryDataSource\">\n\n\n\n          <!-- Product Name Column -->\n          <ng-container matColumnDef=\"itemName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Product</th>\n            <td mat-cell *matCellDef=\"let row\">{{row._id.name}}</td>\n          </ng-container>\n\n          <!-- Date Column -->\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.date  | date: \"dd-MMM-yyyy\"}}</td>\n          </ng-container>\n\n          <!-- Quantity Column -->\n          <ng-container matColumnDef=\"quantity\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Qty</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.quantity}}</td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"customerHistoryDisplayedColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: customerHistoryDisplayedColumn;\"></tr>\n        </table>\n\n      </mat-card>\n    </div>\n\n    <div class=\"customerInformation invoice\">\n    <mat-card class=\"invoice\">\n      <mat-card-header>\n      Voucher Details\n      </mat-card-header>\n      <mat-card-content>\n\n            <tr>\n              <td>Cash Ledger</td>\n              <td><label for=\"\" *ngIf = \"this.myControl.value\">{{this.tallyVoucher.basicVoucherDetails.posCashLedgerName}}</label></td>\n            </tr>\n            <tr>\n              <td>Godown Name</td>\n              <td><label for=\"\" *ngIf = \"this.myControl.value\">{{this.cookie.get('tallyVoucher.basicVoucherDetails.godownName')}}</label></td>\n            </tr>\n            <tr>\n              <td>Cache Voucher: </td>\n              <td><label for=\"\" *ngIf = \"this.myControl.value\">{{this.myControl.value.address}}</label></td>\n            </tr>\n            <tr>\n              <td>Total Land: </td>\n              <td><label for=\"\" *ngIf = \"this.myControl.value\">{{this.myControl.value.landHolding}}</label></td>\n            </tr>\n            <tr>\n              <td>\n\n              </td>\n            </tr>\n\n      </mat-card-content>\n    </mat-card>\n\n      <mat-card class=\"invoice\">\n        <col width=\"130\">\n        <col width=\"70\">\n\n      <tr class=\"totalLabel\">\n        <td>Sub Total:</td>\n        <td>{{tallyVoucher.ledgerEntry.subTotal}}</td>\n\n      </tr>\n      <tr>\n        <td>CGST</td>\n        <td>{{tallyVoucher.ledgerEntry.cgst}}</td>\n\n      </tr>\n      <tr>\n        <td>SGST</td>\n        <td>{{tallyVoucher.ledgerEntry.sgst}}</td>\n      </tr>\n      <tr>\n        <td><b>Total</b></td>\n        <td><b>{{tallyVoucher.ledgerEntry.cash}}</b></td>\n      </tr>\n      </mat-card>\n\n\n  </div>\n\n\n\n\n  <div class=\"inventoryInformation invoice\">\n    <div class=\"addInventory\">\n\n      <tr>\n        <td>\n          <mat-form-field>\n            <input #productField (keydown.enter) = \"validateProduct();false\" type=\"text\" placeholder=\"Enter product name\" aria-label=\"Assignee\" matInput [formControl]=\"invControl\" [matAutocomplete]=\"autoInv\">\n            <mat-autocomplete  #autoInv=\"matAutocomplete\" [displayWith]=\"displayFnProduct\">\n              <mat-option *ngFor=\"let product of productFilteredOptions | async\" [(value)]=\"product\">\n                {{product.name}}\n              </mat-option>\n            </mat-autocomplete>\n\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field>\n            <input #quantityField (keydown.enter) = \"validateQuantity();false\" type=\"number\" placeholder=\"Enter qty\" aria-label=\"Quantity\" matInput [formControl]=\"qtyControl\">\n\n          </mat-form-field>\n        </td>\n      </tr>\n      <select #batchField *ngIf = \"qtyControl.value\" (keydown.enter)=\"addStockItem();false\" [(ngModel)]=\"batch\"  name = \"batchSelect\">\n        <option *ngFor=\"let item of batches\" [(ngValue)]=\"item\" >\n          {{item.name}} {{item.expiryDate  | date: \"dd-MMM-yyyy\"}}\n        </option>\n      </select>\n    </div>\n\n    <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\" [(dataSource)] = \"dataSource\">\n\n\n      <!-- Phone Number Column -->\n      <ng-container matColumnDef=\"Sno\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>S.no</th>\n        <td mat-cell *matCellDef=\"let row; let i = index;\"> {{i+1}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"itemName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Product</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n      </ng-container>\n\n\n\n      <!-- Father Name Column -->\n      <ng-container matColumnDef=\"batchName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Batch</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.batch.name}}</td>\n      </ng-container>\n\n      <!-- Land Holding Column -->\n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Qty</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.quantity}}</td>\n      </ng-container>\n\n          <!-- Land Holding Column -->\n          <ng-container matColumnDef=\"rate\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Rate</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.rate}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"amount\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Amount</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.quantity * row.rate}}</td>\n          </ng-container>\n\n      <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n        <td mat-cell *matCellDef=\"let row\">\n            <button  mat-button color=\"warn\" name=\"button\" (click)= \"deleteItem(row)\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">delete</mat-icon>\n            </button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n  </div>\n\n\n  </form>\n\n</div>\n<div id=\"printView\" class=\"printView\">\n<app-invoice-print-view #printView [(tallyVoucher)] = \"tallyVoucher\" [(customer)]= \"myControl.value\"></app-invoice-print-view>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customers/customers.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customers/customers.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navigation-bar></app-navigation-bar>\n\n<div class=\"htmlPage\">\n<side-navigation-bar [(navItems)] = \"items\">\n  <router-outlet></router-outlet>\n</side-navigation-bar>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\n<app-create-voucher></app-create-voucher>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-form/login-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-form/login-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-type=\"default\" class=\"card-body\">\n            <form data-type=\"default\" #f='ngForm' (submit)= \"f.form.valid && validate()\" accept-charset=\"UTF-8\" role=\"form\">\n                <fieldset data-type=\"default\">\n                    <div data-type=\"default\" class=\"form-group\">\n\n                      <input data-type=\"default\"\n                      [(ngModel)]= \"user.username\"\n                      type=\"text\" required\n                     #username= 'ngModel' [ngClass] = \"{'is-invalid': f.submitted && username.invalid}\" placeholder=\"Enter Username\" name=\"username\" class=\"form-control\"\n                      />\n                    </div>\n\n                    <div data-type=\"default\" class=\"form-group\">\n                      <input data-type=\"default\" [(ngModel)]= \"user.password\" type=\"password\" placeholder=\"Password\" name=\"password\" value=\"\" class=\"form-control\"\n                      required\n                     #password= 'ngModel' [ngClass] = \"{'is-invalid': f.submitted && password.invalid}\" />\n                    </div>\n                    <div data-type=\"default\" class=\"checkbox\"><label><input data-type=\"default\" name=\"remember\" type=\"checkbox\" value=\"Remember Me\" /> Remember Me </label></div>\n                    <button type=\"submit\" name=\"button\" class=\"btn btn-lg btn-success btn-block\">Login</button>\n                </fieldset>\n            </form>\n            <hr data-type=\"default\" />\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation-bar/navigation-bar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation-bar/navigation-bar.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--Navbar-->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n\n  <!-- Navbar brand -->\n  <a class=\"navibar-brand\" href=\"#\"><span>Agro</span>stop</a>\n\n  <!-- Collapsible content -->\n  <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\n\n    <!-- Links -->\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/home\">Dashboard<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/customers\">Customers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/sales\">Sales</a>\n      </li>\n\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/products\">Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/users\">Users</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/complaints\">Complaints</a>\n      </li>\n\n\n      <li data-type=\"default\" class=\"nav-item dropdown\">\n\t  <a id=\"navbarDropdown\" dropdownToggle role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\">\n\t\tDropdown\n\t  </a>\n\n\t</li>\n\n    </ul>\n    <!-- Links -->\n\n    <span class=\"navbar-text\">\n      {{user}}\n    </span>\n  <a class=\"nav-link\" (click) = \"logout()\" href=\"/\">Log Out</a>\n  </div>\n  <!-- Collapsible content -->\n\n</nav>\n<!--/.Navbar-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/orders.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/orders.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>orders works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sales/sales.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sales/sales.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\n<div class=\"htmlPage\">\n\n\n  <side-navigation-bar [(navItems)] = \"items\">\n    <router-outlet></router-outlet>\n  </side-navigation-bar>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-navigation-bar/side-navigation-bar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-navigation-bar/side-navigation-bar.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container  [hasBackdrop]='false' autosize role=\"navigation\">\n  <mat-sidenav [fixedInViewport]=\"true\" [fixedTopGap]='50' #drawer opened='true' class=\"sidenavBar\" disableClose=\"true\" mode=\"push\">\n    <mat-nav-list>\n      <ng-container *ngFor='let item of items'>\n        <div class=\"navLink\">\n          <a id=\"navLink\" routerLink='{{item.link}}'><mat-icon aria-hidden=\"false\" aria-label = 'title'>{{item.icon}}</mat-icon> <span>{{item.title}}</span></a><br>\n        </div>\n      </ng-container>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"sidenavBarContent\">\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stock-items/stock-items.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stock-items/stock-items.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\n<div class=\"htmlPage\">\n  <side-navigation-bar [(navItems)] = \"items\">\n    <router-outlet></router-outlet>\n  </side-navigation-bar>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/address-table/address-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/address-table/address-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8  customerTable\">\n\n  <div layout=\"row\" class=\"filterInputClass\" layout-align=\"center center\">\n    <button mat-raised-button (click)='createCustomer()' color='primary' name=\"button\">Create</button>\n    <mat-form-field class=\"filterInputClass\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n\n\n    <!-- Phone Number Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"tehsilName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Tehsil Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.tehsilName}}</td>\n    </ng-container>\n\n\n\n    <!-- Father Name Column -->\n    <ng-container matColumnDef=\"districtName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>District Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.districtName}}</td>\n    </ng-container>\n\n    <!-- Land Holding Column -->\n    <ng-container matColumnDef=\"stateName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>State Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.stateName}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"areaOfPrivateLand\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Area of Private Land</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.areaOfPrivateLand}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"update\">\n\n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n      <td mat-cell *matCellDef=\"let row\">\n\n        <button mat-button color=\"accent\" (click)='updateAddress(row)' name=\"button\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">edit</mat-icon>\n        </button>\n\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator [length]=\"dataSource?.data.length\" [pageIndex]=\"0\" [pageSize]=\"25\" [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/batch-table/batch-table.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/batch-table/batch-table.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8  customerTable\">\n\n  <div layout=\"row\" class=\"filterInputClass\" layout-align=\"center center\">\n    <mat-label>List of Batches expiring before :</mat-label>\n<mat-select [(ngModel)]=\"selectedValue\" (selectionChange)=\"getBatches($event.value)\">\n  <mat-option *ngFor=\"let period of periods\" [(value)]=\"period.value\">\n    {{period.name}}\n  </mat-option>\n</mat-select>\n\n</div>\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\" [dataSource]= \"dataSource\">\n\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"batchName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Batch Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row._id.batchName}}</td>\n    </ng-container>\n\n\n    <!-- Phone Number Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Product Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row._id.name}}</td>\n    </ng-container>\n\n    <!-- Land Holding Column -->\n    <ng-container matColumnDef=\"expiryDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Expiry Date</th>\n      <td mat-cell *matCellDef=\"let row\">{{row._id.expiryDate | date: \"dd-MMM-yyyy\"}}</td>\n    </ng-container>\n\n    <!-- Land Holding Column -->\n    <ng-container matColumnDef=\"closingBalance\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Closing Balance</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.closingBalance}}</td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"update\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n      <td mat-cell *matCellDef=\"let row\">\n          <button  mat-button color=\"primary\" name=\"button\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">remove_red_eye</mat-icon>\n          </button>\n          <button mat-button color=\"accent\" name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">edit</mat-icon>\n          </button>\n          <button  mat-button color=\"warn\" name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">delete</mat-icon>\n          </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"25\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/customer-table/customer-table.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/customer-table/customer-table.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8  customerTable\">\n\n  <div layout=\"row\" class=\"filterInputClass\" layout-align=\"center center\">\n    <button mat-raised-button (click)='createCustomer()' color='primary' name=\"button\">Create</button>\n  <mat-form-field class=\"filterInputClass\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n\n\n    <!-- Phone Number Column -->\n    <ng-container matColumnDef=\"phoneNumber\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Phone Number</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.phoneNumber}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n\n\n    <!-- Father Name Column -->\n    <ng-container matColumnDef=\"fatherName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Father Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.fatherName}}</td>\n    </ng-container>\n\n    <!-- Land Holding Column -->\n    <ng-container matColumnDef=\"landHolding\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Land Holding</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.landHolding}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"update\">\n  \n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n      <td mat-cell *matCellDef=\"let row\">\n          <button  mat-button color=\"primary\" (click) = 'viewCustomer()' name=\"button\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">remove_red_eye</mat-icon>\n          </button>\n          <button mat-button color=\"accent\" (click) = 'updateCustomer(row)' name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">edit</mat-icon>\n          </button>\n          <button  mat-button color=\"warn\" (click)='deleteCustomer(row)' name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">delete</mat-icon>\n          </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"25\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/order-table/order-table.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/order-table/order-table.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8  customerTable\">\n\n  <div layout=\"row\" class=\"filterInputClass\" layout-align=\"center center\">\n    <button mat-raised-button color='primary' name=\"button\">Create</button>\n  <mat-form-field class=\"filterInputClass\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\" #table>\n\n\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"_id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row._id}}</td>\n    </ng-container>\n\n    <!-- DateOfCreation Column -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Date of Creation</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.dateOfCreation | date: \"dd-MMM-yyyy\"}}</td>\n    </ng-container>\n\n\n    <!-- Land Holding Column -->\n    <ng-container matColumnDef=\"customerId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.customerId}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"update\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n      <td mat-cell *matCellDef=\"let row\">\n          <button  mat-button color=\"primary\" name=\"button\">View</button>\n          <button mat-button color=\"accent\" name=\"button\">Update</button>\n          <button  mat-button color=\"warn\" name=\"button\">Delete</button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"25\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/stock-item-table/stock-item-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/stock-item-table/stock-item-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8  customerTable\">\n\n  <div layout=\"row\" class=\"filterInputClass\" layout-align=\"center center\">\n    <button mat-raised-button (click)=\"onCreate()\" color='primary' name=\"button\">Create</button>\n  <mat-form-field class=\"filterInputClass\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\" [(dataSource)] = 'dataSource'>\n\n\n    <!-- Phone Number Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"parent\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Parent</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.parent}}</td>\n    </ng-container>\n\n\n\n    <!-- Father Name Column -->\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.category}}</td>\n    </ng-container>\n\n    <!-- Land Holding Column -->\n    <ng-container matColumnDef=\"closingBalance\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Closing Balance</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.closingBalance +\" \"+ row.baseUnits}}</td>\n    </ng-container>\n\n        <!-- Land Holding Column -->\n        <ng-container matColumnDef=\"price\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Price</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.price}}</td>\n        </ng-container>\n\n    <ng-container matColumnDef=\"update\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n      <td mat-cell *matCellDef=\"let row\">\n          <button  mat-button color=\"primary\" name=\"button\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">remove_red_eye</mat-icon>\n          </button>\n          <button mat-button color=\"accent\" name=\"button\" (click) = \"updateStockItem(row)\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">edit</mat-icon>\n          </button>\n          <button  mat-button color=\"warn\" name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">delete</mat-icon>\n          </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"25\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/tax-details-table/tax-details-table.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/tax-details-table/tax-details-table.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8  customerTable\">\n\n  <div layout=\"row\" class=\"filterInputClass\" layout-align=\"center center\">\n    <button mat-raised-button (click)='createTaxDetail()' color='primary' name=\"button\">Create</button>\n  <mat-form-field class=\"filterInputClass\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n\n\n    <!-- Phone Number Column -->\n    <ng-container matColumnDef=\"hsnCode\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>HSN/SAC</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.hsnCode}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"cgst\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>CGST Rate</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.cgst}}</td>\n    </ng-container>\n\n\n\n    <!-- Father Name Column -->\n    <ng-container matColumnDef=\"sgst\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>SGST Rate</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.sgst}}</td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"update\">\n\n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n      <td mat-cell *matCellDef=\"let row\">\n\n          <button mat-button color=\"accent\" (click) = 'updateTaxDetail(row)' name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">edit</mat-icon>\n          </button>\n          <button  mat-button color=\"warn\" (click)='deleteTaxDetail(row)' name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">delete</mat-icon>\n          </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"25\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/voucher-table/voucher-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/voucher-table/voucher-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8  customerTable\">\n\n  <div layout=\"row\" class=\"filterInputClass\" layout-align=\"center center\">\n    <button mat-raised-button color='primary' name=\"button\">Create</button>\n  <mat-form-field class=\"filterInputClass\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\" [(dataSource)]= \"dataSource\">\n\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.customVoucherDetails.date | date: \"dd-MMM-yyyy\"}}</td>\n    </ng-container>\n\n\n    <!-- Phone Number Column -->\n    <ng-container matColumnDef=\"voucherNumber\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Voucher Number</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.customVoucherDetails.voucherNumber}}</td>\n    </ng-container>\n\n    <!-- Land Holding Column -->\n    <ng-container matColumnDef=\"customerId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.customVoucherDetails.basicBuyerName}}</td>\n    </ng-container>\n\n\n    <!-- Address Column -->\n    <ng-container matColumnDef=\"address\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Address</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.customVoucherDetails.address}}</td>\n    </ng-container>\n\n    <!-- Father Name Column -->\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Total</th>\n      <td mat-cell *matCellDef=\"let row\"><b>{{row.ledgerEntry.cash | number : '1.0-0'}}</b></td>\n    </ng-container>\n\n\n\n    <ng-container matColumnDef=\"update\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n      <td mat-cell *matCellDef=\"let row\">\n          <button  mat-button color=\"primary\"  name=\"button\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">remove_red_eye</mat-icon>\n          </button>\n          <button mat-button color=\"accent\" (click) = 'updateVoucher(row)' name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">edit</mat-icon>\n          </button>\n          <button  mat-button color=\"warn\" name=\"button\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">delete</mat-icon>\n          </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"25\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-create-user-form></app-create-user-form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/complaint-view/complaint-view.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/complaint-view/complaint-view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>complaint-view works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/customer-view/customer-view.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/customer-view/customer-view.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>customer-view works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/order-view/order-view.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/order-view/order-view.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>order-view works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/stock-item-view/stock-item-view.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/stock-item-view/stock-item-view.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>stock-item-view works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/voucher-view/voucher-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/voucher-view/voucher-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invoice\">\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/AccountingPackage/day-book/day-book.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/AccountingPackage/day-book/day-book.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FjY291bnRpbmdQYWNrYWdlL2RheS1ib29rL2RheS1ib29rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/AccountingPackage/day-book/day-book.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/AccountingPackage/day-book/day-book.component.ts ***!
  \******************************************************************/
/*! exports provided: DayBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBookComponent", function() { return DayBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _tables_voucher_table_voucher_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tables/voucher-table/voucher-table.component */ "./src/app/tables/voucher-table/voucher-table.component.ts");
/* harmony import */ var _shared_voucher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/voucher.service */ "./src/app/shared/voucher.service.ts");





var DayBookComponent = /** @class */ (function () {
    function DayBookComponent(apiService, voucherService) {
        this.apiService = apiService;
        this.voucherService = voucherService;
        this.vouchers = [];
    }
    DayBookComponent.prototype.ngOnInit = function () {
        this.getCurrentVoucher();
    };
    DayBookComponent.prototype.getCurrentVoucher = function () {
        var _this = this;
        this.apiService.getVouchers(new Date(), new Date()).subscribe(function (res) {
            _this.voucherService.vouchers = res;
            _this.table.renderRows(_this.voucherService.vouchers);
            console.log("got all vouchers");
        }, function (err) {
            alert("An error has ocurred while sending your request");
        });
    };
    DayBookComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _shared_voucher_service__WEBPACK_IMPORTED_MODULE_4__["VoucherService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tables_voucher_table_voucher_table_component__WEBPACK_IMPORTED_MODULE_3__["VoucherTableComponent"], { static: false })
    ], DayBookComponent.prototype, "table", void 0);
    DayBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-day-book',
            template: __webpack_require__(/*! raw-loader!./day-book.component.html */ "./node_modules/raw-loader/index.js!./src/app/AccountingPackage/day-book/day-book.component.html"),
            styles: [__webpack_require__(/*! ./day-book.component.css */ "./src/app/AccountingPackage/day-book/day-book.component.css")]
        })
    ], DayBookComponent);
    return DayBookComponent;
}());



/***/ }),

/***/ "./src/app/CustomerPackage/address-list-view/address-list-view.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/CustomerPackage/address-list-view/address-list-view.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0N1c3RvbWVyUGFja2FnZS9hZGRyZXNzLWxpc3Qtdmlldy9hZGRyZXNzLWxpc3Qtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/CustomerPackage/address-list-view/address-list-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/CustomerPackage/address-list-view/address-list-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddressListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListViewComponent", function() { return AddressListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddressListViewComponent = /** @class */ (function () {
    function AddressListViewComponent() {
    }
    AddressListViewComponent.prototype.ngOnInit = function () {
    };
    AddressListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-list-view',
            template: __webpack_require__(/*! raw-loader!./address-list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/CustomerPackage/address-list-view/address-list-view.component.html"),
            styles: [__webpack_require__(/*! ./address-list-view.component.css */ "./src/app/CustomerPackage/address-list-view/address-list-view.component.css")]
        })
    ], AddressListViewComponent);
    return AddressListViewComponent;
}());



/***/ }),

/***/ "./src/app/CustomerPackage/customer-list-view/customer-list-view.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/CustomerPackage/customer-list-view/customer-list-view.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0N1c3RvbWVyUGFja2FnZS9jdXN0b21lci1saXN0LXZpZXcvY3VzdG9tZXItbGlzdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/CustomerPackage/customer-list-view/customer-list-view.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/CustomerPackage/customer-list-view/customer-list-view.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomerListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListViewComponent", function() { return CustomerListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _tables_customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tables/customer-table/customer-table.component */ "./src/app/tables/customer-table/customer-table.component.ts");




var CustomerListViewComponent = /** @class */ (function () {
    function CustomerListViewComponent(apiService) {
        this.apiService = apiService;
    }
    CustomerListViewComponent.prototype.ngOnInit = function () {
        this.getAllCustomers();
        console.log("customers component called");
    };
    CustomerListViewComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.apiService.getCustomers().subscribe(function (res) {
            _this.customers = res;
            _this.table.renderRows();
            console.log(_this.customers.length);
        }, function (err) {
            alert("An error has ocurred while sending your request");
        });
    };
    CustomerListViewComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tables_customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_3__["CustomerTableComponent"], { static: false })
    ], CustomerListViewComponent.prototype, "table", void 0);
    CustomerListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-list-view',
            template: __webpack_require__(/*! raw-loader!./customer-list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/CustomerPackage/customer-list-view/customer-list-view.component.html"),
            styles: [__webpack_require__(/*! ./customer-list-view.component.css */ "./src/app/CustomerPackage/customer-list-view/customer-list-view.component.css")]
        })
    ], CustomerListViewComponent);
    return CustomerListViewComponent;
}());



/***/ }),

/***/ "./src/app/Interceptor/agro-interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/Interceptor/agro-interceptor.ts ***!
  \*************************************************/
/*! exports provided: AgroInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgroInterceptor", function() { return AgroInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var AgroInterceptor = /** @class */ (function () {
    function AgroInterceptor(cookie) {
        this.cookie = cookie;
    }
    //function which will be called for all http calls
    AgroInterceptor.prototype.intercept = function (request, next) {
        //how to update the request Parameters
        var updatedRequest = request.clone({
            headers: request.headers.set("Authorization", "Bearer " + this.cookie.get('token'))
        });
        //logging the updated Parameters to browser's console
        console.log("Before making api call : ", updatedRequest);
        return next.handle(updatedRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            //logging the http response to browser's console in case of a success
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                console.log("api call success :", event);
            }
        }, function (error) {
            //logging the http response to browser's console in case of a failuer
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                console.log("api call error :", event);
            }
        }));
    };
    AgroInterceptor.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    AgroInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AgroInterceptor);
    return AgroInterceptor;
}());



/***/ }),

/***/ "./src/app/Model/address.ts":
/*!**********************************!*\
  !*** ./src/app/Model/address.ts ***!
  \**********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/Model/stock-item.ts":
/*!*************************************!*\
  !*** ./src/app/Model/stock-item.ts ***!
  \*************************************/
/*! exports provided: StockItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockItem", function() { return StockItem; });
var StockItem = /** @class */ (function () {
    function StockItem() {
    }
    return StockItem;
}());



/***/ }),

/***/ "./src/app/Model/tax-details.ts":
/*!**************************************!*\
  !*** ./src/app/Model/tax-details.ts ***!
  \**************************************/
/*! exports provided: TaxDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxDetails", function() { return TaxDetails; });
var TaxDetails = /** @class */ (function () {
    function TaxDetails() {
    }
    return TaxDetails;
}());



/***/ }),

/***/ "./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.invoicePrintView{\r\n  padding: 10px;\r\n  font-size: 12px;\r\n}\r\n.header{\r\n\r\n}\r\n.voucherInformation{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n.customerInformation{\r\n width: 45%;\r\n}\r\n.customVoucherInformation{\r\n  width: 45%;\r\n  margin-left:10%;\r\n}\r\n.body{\r\nwidth: 100%;\r\n}\r\n.lowerBody{\r\n  margin-top: 20px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n.total{\r\n  margin-left: 10%;\r\n  width: 45%;\r\n\r\n}\r\n.posDetails{\r\n  width: 45%\r\n\r\n}\r\n.footer{\r\n\r\n}\r\n.hsnPart{\r\n  width: 100%;\r\n}\r\n#productTable {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n#productTable td, #productTable th {\r\n  border: 1px solid #ddd;\r\n  padding: 2px;\r\n}\r\n#productTable tr:nth-child(even){background-color: #f2f2f2;}\r\n#productTable tr:hover {background-color: #ddd;}\r\n#productTable th {\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n#totalTable td{\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n#posTable td{\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n#hsnTable{\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n#hsnTable td, #hsnTable th {\r\n  border: 1px solid #ddd;\r\n  padding: 2px;\r\n}\r\n#hsnTable tr:nth-child(even){background-color: #f2f2f2;}\r\n#hsnTable tr:hover {background-color: #ddd;}\r\n#hsnTable th {\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  text-align: left;\r\n  background-color: #F1C40F;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJpbnRQYWNrYWdlL2ludm9pY2UtcHJpbnQtdmlldy9pbnZvaWNlLXByaW50LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTs7QUFFQTtBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0FBQ0EsV0FBVztBQUNYO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVOztBQUVaO0FBRUE7RUFDRTs7QUFFRjtBQUVBOztBQUVBO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHlEQUF5RDtFQUN6RCx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBRUEsaUNBQWlDLHlCQUF5QixDQUFDO0FBRTNELHdCQUF3QixzQkFBc0IsQ0FBQztBQUUvQztFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUVBLDZCQUE2Qix5QkFBeUIsQ0FBQztBQUV2RCxvQkFBb0Isc0JBQXNCLENBQUM7QUFFM0M7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvUHJpbnRQYWNrYWdlL2ludm9pY2UtcHJpbnQtdmlldy9pbnZvaWNlLXByaW50LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmludm9pY2VQcmludFZpZXd7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmhlYWRlcntcclxuXHJcbn1cclxuXHJcbi52b3VjaGVySW5mb3JtYXRpb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tZXJJbmZvcm1hdGlvbntcclxuIHdpZHRoOiA0NSU7XHJcbn1cclxuLmN1c3RvbVZvdWNoZXJJbmZvcm1hdGlvbntcclxuICB3aWR0aDogNDUlO1xyXG4gIG1hcmdpbi1sZWZ0OjEwJTtcclxufVxyXG5cclxuLmJvZHl7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG93ZXJCb2R5e1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4udG90YWx7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogNDUlO1xyXG5cclxufVxyXG5cclxuLnBvc0RldGFpbHN7XHJcbiAgd2lkdGg6IDQ1JVxyXG5cclxufVxyXG5cclxuLmZvb3RlcntcclxuXHJcbn1cclxuLmhzblBhcnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNwcm9kdWN0VGFibGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNwcm9kdWN0VGFibGUgdGQsICNwcm9kdWN0VGFibGUgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4jcHJvZHVjdFRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbiNwcm9kdWN0VGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuI3Byb2R1Y3RUYWJsZSB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0b3RhbFRhYmxlIHRke1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4jcG9zVGFibGUgdGR7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuI2hzblRhYmxle1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNoc25UYWJsZSB0ZCwgI2hzblRhYmxlIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuI2hzblRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbiNoc25UYWJsZSB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcblxyXG4jaHNuVGFibGUgdGgge1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUM0MEY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InvoicePrintViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePrintViewComponent", function() { return InvoicePrintViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoicePrintViewComponent = /** @class */ (function () {
    function InvoicePrintViewComponent() {
        this.uniqueHSN = [];
        this.printing = false;
    }
    InvoicePrintViewComponent.prototype.ngOnInit = function () {
    };
    InvoicePrintViewComponent.prototype.hsnDetails = function () {
        var e_1, _a, e_2, _b;
        var uniqueHSN = [];
        var items = this.tallyVoucher.billedStockItems.map(function (a) { return a.hsnCode; });
        var unique = Array.from(new Set(items));
        try {
            for (var unique_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](unique), unique_1_1 = unique_1.next(); !unique_1_1.done; unique_1_1 = unique_1.next()) {
                var code = unique_1_1.value;
                var totalTaxableValue = 0;
                var cgst;
                var sgst;
                try {
                    for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tallyVoucher.billedStockItems), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var item = _d.value;
                        if (item.hsnCode == code) {
                            totalTaxableValue = totalTaxableValue + item.amount;
                            cgst = item.cgst;
                            sgst = item.sgst;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                uniqueHSN.push({ hsnCode: code, taxableValue: totalTaxableValue, cgst: { rate: cgst, amount: (totalTaxableValue * cgst) / 100 }, sgst: { rate: sgst, amount: (totalTaxableValue * sgst) / 100 } });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (unique_1_1 && !unique_1_1.done && (_a = unique_1.return)) _a.call(unique_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return uniqueHSN;
    };
    InvoicePrintViewComponent.prototype.print = function () {
        this.printing = true;
        //this.uniqueHSN = this.hsnDetails();
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n          <html>\n            <head>\n              <title>Invoice</title>\n              <style>\n\n\n\n\n              .invoicePrintView{\n                padding: 10px;\n                font-size: 12px;\n              }\n              .header{\n\n              }\n\n              .voucherInformation{\n                display: flex;\n                width: 100%;\n                margin-bottom: 20px;\n              }\n\n              .customerInformation{\n               width: 45%;\n              }\n              .customVoucherInformation{\n                width: 45%;\n                margin-left:10%;\n              }\n\n              .body{\n              width: 100%;\n              }\n\n              .lowerBody{\n                margin-top: 20px;\n                display: flex;\n              }\n              .total{\n                margin-left: 10%;\n                width: 45%;\n\n              }\n\n              .posDetails{\n                width: 45%\n\n              }\n\n              .footer{\n\n              }\n              .hsnPart{\n                width: 100%;\n              }\n\n              #productTable {\n                font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n                border-collapse: collapse;\n                width: 100%;\n              }\n\n              #productTable td, #productTable th {\n                border: 1px solid #ddd;\n                padding: 2px;\n              }\n\n              #productTable tr:nth-child(even){background-color: #f2f2f2;}\n\n              #productTable tr:hover {background-color: #ddd;}\n\n              #productTable th {\n                padding-top: 2px;\n                padding-bottom: 2px;\n                text-align: left;\n                background-color: #4CAF50;\n                color: white;\n              }\n\n              #totalTable td{\n                border-bottom: 1px solid #ddd;\n              }\n\n              #posTable td{\n                border-bottom: 1px solid #ddd;\n              }\n              #hsnTable{\n                font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n                border-collapse: collapse;\n                width: 100%;\n              }\n\n              #hsnTable td, #hsnTable th {\n                border: 1px solid #ddd;\n                padding: 2px;\n              }\n\n              #hsnTable tr:nth-child(even){background-color: #f2f2f2;}\n\n              #hsnTable tr:hover {background-color: #ddd;}\n\n              #hsnTable th {\n                padding-top: 2px;\n                padding-bottom: 2px;\n                text-align: left;\n                background-color: #F1C40F;\n                color: white;\n              }\n\n\n\n              </style>\n            </head>\n        <body onload=\"window.print();window.close()\">" + printContents + "</body>\n          </html>");
        popupWin.document.close();
        this.printing = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tallyVoucher')
    ], InvoicePrintViewComponent.prototype, "tallyVoucher", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('customer')
    ], InvoicePrintViewComponent.prototype, "customer", void 0);
    InvoicePrintViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-print-view',
            template: __webpack_require__(/*! raw-loader!./invoice-print-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.html"),
            styles: [__webpack_require__(/*! ./invoice-print-view.component.css */ "./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.css")]
        })
    ], InvoicePrintViewComponent);
    return InvoicePrintViewComponent;
}());



/***/ }),

/***/ "./src/app/Products/expired-products/expired-products.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Products/expired-products/expired-products.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3RzL2V4cGlyZWQtcHJvZHVjdHMvZXhwaXJlZC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Products/expired-products/expired-products.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Products/expired-products/expired-products.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExpiredProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiredProductsComponent", function() { return ExpiredProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _tables_batch_table_batch_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tables/batch-table/batch-table.component */ "./src/app/tables/batch-table/batch-table.component.ts");




var ExpiredProductsComponent = /** @class */ (function () {
    function ExpiredProductsComponent(apiService) {
        this.apiService = apiService;
    }
    ExpiredProductsComponent.prototype.ngOnInit = function () {
    };
    ExpiredProductsComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tables_batch_table_batch_table_component__WEBPACK_IMPORTED_MODULE_3__["BatchTableComponent"], { static: false })
    ], ExpiredProductsComponent.prototype, "table", void 0);
    ExpiredProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expired-products',
            template: __webpack_require__(/*! raw-loader!./expired-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/Products/expired-products/expired-products.component.html"),
            styles: [__webpack_require__(/*! ./expired-products.component.css */ "./src/app/Products/expired-products/expired-products.component.css")]
        })
    ], ExpiredProductsComponent);
    return ExpiredProductsComponent;
}());



/***/ }),

/***/ "./src/app/Products/product-list-view/product-list-view.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Products/product-list-view/product-list-view.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC12aWV3L3Byb2R1Y3QtbGlzdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Products/product-list-view/product-list-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Products/product-list-view/product-list-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListViewComponent", function() { return ProductListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _tables_stock_item_table_stock_item_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tables/stock-item-table/stock-item-table.component */ "./src/app/tables/stock-item-table/stock-item-table.component.ts");




var ProductListViewComponent = /** @class */ (function () {
    function ProductListViewComponent(apiService) {
        this.apiService = apiService;
        this.stockItems = [];
    }
    ProductListViewComponent.prototype.ngOnInit = function () {
        this.getAllStockItems();
        //this.table.renderRows();
        console.log("customers component called");
    };
    ProductListViewComponent.prototype.getAllStockItems = function () {
        var _this = this;
        this.apiService.getAllStockItems().subscribe(function (res) {
            var e_1, _a;
            var item;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](res.stockItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item_1 = _c.value;
                    _this.stockItems.push(item_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.table.renderRows();
        }, function (err) {
            alert("An error has ocurred while sending your request");
        });
    };
    ProductListViewComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tables_stock_item_table_stock_item_table_component__WEBPACK_IMPORTED_MODULE_3__["StockItemTableComponent"], { static: false })
    ], ProductListViewComponent.prototype, "table", void 0);
    ProductListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list-view',
            template: __webpack_require__(/*! raw-loader!./product-list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/Products/product-list-view/product-list-view.component.html"),
            styles: [__webpack_require__(/*! ./product-list-view.component.css */ "./src/app/Products/product-list-view/product-list-view.component.css")]
        })
    ], ProductListViewComponent);
    return ProductListViewComponent;
}());



/***/ }),

/***/ "./src/app/Products/update-customer/update-customer.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Products/update-customer/update-customer.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3RzL3VwZGF0ZS1jdXN0b21lci91cGRhdGUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Products/update-customer/update-customer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Products/update-customer/update-customer.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Model_stock_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Model/stock-item */ "./src/app/Model/stock-item.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var UpdateCustomerComponent = /** @class */ (function () {
    function UpdateCustomerComponent(data, router, apiService) {
        this.data = data;
        this.router = router;
        this.apiService = apiService;
        if (data != null) {
            this.stockitem = data;
        }
    }
    UpdateCustomerComponent.prototype.ngOnInit = function () {
    };
    UpdateCustomerComponent.ctorParameters = function () { return [
        { type: _Model_stock_item__WEBPACK_IMPORTED_MODULE_3__["StockItem"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],] }] }
    ]; };
    UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-customer',
            template: __webpack_require__(/*! raw-loader!./update-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/Products/update-customer/update-customer.component.html"),
            styles: [__webpack_require__(/*! ./update-customer.component.css */ "./src/app/Products/update-customer/update-customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]))
    ], UpdateCustomerComponent);
    return UpdateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/VoucherPackage/cash-tendered/cash-tendered.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/VoucherPackage/cash-tendered/cash-tendered.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullWidthButton{\r\n  width: 100%;\r\n}\r\n\r\n.success{\r\n  color: 'red';\r\n}\r\n\r\n.failure{\r\n  color: 'green';\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVm91Y2hlclBhY2thZ2UvY2FzaC10ZW5kZXJlZC9jYXNoLXRlbmRlcmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvVm91Y2hlclBhY2thZ2UvY2FzaC10ZW5kZXJlZC9jYXNoLXRlbmRlcmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbFdpZHRoQnV0dG9ue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3VjY2Vzc3tcclxuICBjb2xvcjogJ3JlZCc7XHJcbn1cclxuLmZhaWx1cmV7XHJcbiAgY29sb3I6ICdncmVlbic7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/VoucherPackage/cash-tendered/cash-tendered.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/VoucherPackage/cash-tendered/cash-tendered.component.ts ***!
  \*************************************************************************/
/*! exports provided: CashTenderedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashTenderedComponent", function() { return CashTenderedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CashTenderedComponent = /** @class */ (function () {
    function CashTenderedComponent(messageInjected, dialogRef) {
        this.messageInjected = messageInjected;
        this.dialogRef = dialogRef;
        this.isValid = false;
        this.data = messageInjected;
    }
    CashTenderedComponent.prototype.ngOnInit = function () {
    };
    CashTenderedComponent.prototype.ngAfterViewInit = function () {
        //this.buttonRef.nativeElement.disable(true);
    };
    CashTenderedComponent.prototype.validate = function () {
        if (this.amountRecieved >= this.data) {
            this.isValid = true;
            this.dialogRef.close(this.amountRecieved);
        }
    };
    CashTenderedComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('continueButtonRef', { static: false })
    ], CashTenderedComponent.prototype, "buttonRef", void 0);
    CashTenderedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cash-tendered',
            template: __webpack_require__(/*! raw-loader!./cash-tendered.component.html */ "./node_modules/raw-loader/index.js!./src/app/VoucherPackage/cash-tendered/cash-tendered.component.html"),
            styles: [__webpack_require__(/*! ./cash-tendered.component.css */ "./src/app/VoucherPackage/cash-tendered/cash-tendered.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], CashTenderedComponent);
    return CashTenderedComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _CustomerPackage_customer_list_view_customer_list_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomerPackage/customer-list-view/customer-list-view.component */ "./src/app/CustomerPackage/customer-list-view/customer-list-view.component.ts");
/* harmony import */ var _tables_address_table_address_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tables/address-table/address-table.component */ "./src/app/tables/address-table/address-table.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _complaints_complaints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./complaints/complaints.component */ "./src/app/complaints/complaints.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _stock_items_stock_items_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-items/stock-items.component */ "./src/app/stock-items/stock-items.component.ts");
/* harmony import */ var _Products_expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Products/expired-products/expired-products.component */ "./src/app/Products/expired-products/expired-products.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-form/create-customer-form/create-customer-form.component */ "./src/app/create-form/create-customer-form/create-customer-form.component.ts");
/* harmony import */ var _create_form_create_complaint_form_create_complaint_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-form/create-complaint-form/create-complaint-form.component */ "./src/app/create-form/create-complaint-form/create-complaint-form.component.ts");
/* harmony import */ var _create_form_create_order_form_create_order_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-form/create-order-form/create-order-form.component */ "./src/app/create-form/create-order-form/create-order-form.component.ts");
/* harmony import */ var _create_form_create_user_form_create_user_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-form/create-user-form/create-user-form.component */ "./src/app/create-form/create-user-form/create-user-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_form_create_voucher_create_voucher_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./create-form/create-voucher/create-voucher.component */ "./src/app/create-form/create-voucher/create-voucher.component.ts");
/* harmony import */ var _AccountingPackage_day_book_day_book_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AccountingPackage/day-book/day-book.component */ "./src/app/AccountingPackage/day-book/day-book.component.ts");
/* harmony import */ var _Products_product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Products/product-list-view/product-list-view.component */ "./src/app/Products/product-list-view/product-list-view.component.ts");
/* harmony import */ var _tables_tax_details_table_tax_details_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tables/tax-details-table/tax-details-table.component */ "./src/app/tables/tax-details-table/tax-details-table.component.ts");























var routes = [
    {
        path: "home",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: "customers",
        component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_5__["CustomersComponent"],
        children: [
            { path: 'customerListView', component: _CustomerPackage_customer_list_view_customer_list_view_component__WEBPACK_IMPORTED_MODULE_6__["CustomerListViewComponent"] },
            { path: 'addressListView', component: _tables_address_table_address_table_component__WEBPACK_IMPORTED_MODULE_7__["AddressTableComponent"] }
        ]
    },
    {
        path: "orders",
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"]
    },
    {
        path: "complaints",
        component: _complaints_complaints_component__WEBPACK_IMPORTED_MODULE_9__["ComplaintsComponent"]
    },
    {
        path: "expired-products",
        component: _Products_expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_12__["ExpiredProductsComponent"]
    },
    {
        path: "users",
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"]
    },
    {
        path: "products",
        component: _stock_items_stock_items_component__WEBPACK_IMPORTED_MODULE_11__["StockItemsComponent"],
        children: [
            { path: 'product-list', component: _Products_product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_21__["ProductListViewComponent"] },
            { path: 'expired-batches', component: _Products_expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_12__["ExpiredProductsComponent"] },
            { path: 'tax-details', component: _tables_tax_details_table_tax_details_table_component__WEBPACK_IMPORTED_MODULE_22__["TaxDetailsTableComponent"] }
        ]
    },
    {
        path: "sales",
        component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"],
        children: [
            { path: 'create-sales-voucher', component: _create_form_create_voucher_create_voucher_component__WEBPACK_IMPORTED_MODULE_19__["CreateVoucherComponent"] },
            { path: 'day-book', component: _AccountingPackage_day_book_day_book_component__WEBPACK_IMPORTED_MODULE_20__["DayBookComponent"] }
        ]
    },
    {
        path: "create-customer",
        component: _create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_14__["CreateCustomerFormComponent"]
    },
    {
        path: "create-order",
        component: _create_form_create_order_form_create_order_form_component__WEBPACK_IMPORTED_MODULE_16__["CreateOrderFormComponent"]
    },
    {
        path: "create-user",
        component: _create_form_create_user_form_create_user_form_component__WEBPACK_IMPORTED_MODULE_17__["CreateUserFormComponent"]
    },
    {
        path: "create-complaint",
        component: _create_form_create_complaint_form_create_complaint_form_component__WEBPACK_IMPORTED_MODULE_15__["CreateComplaintFormComponent"]
    },
    {
        path: "",
        component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]
    },
    {
        path: "customer/{id}",
        component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]
    },
    {
        path: "**",
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Agrostop-WebApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _complaints_complaints_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./complaints/complaints.component */ "./src/app/complaints/complaints.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-form/create-customer-form/create-customer-form.component */ "./src/app/create-form/create-customer-form/create-customer-form.component.ts");
/* harmony import */ var _create_form_create_complaint_form_create_complaint_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create-form/create-complaint-form/create-complaint-form.component */ "./src/app/create-form/create-complaint-form/create-complaint-form.component.ts");
/* harmony import */ var _create_form_create_order_form_create_order_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./create-form/create-order-form/create-order-form.component */ "./src/app/create-form/create-order-form/create-order-form.component.ts");
/* harmony import */ var _create_form_create_user_form_create_user_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./create-form/create-user-form/create-user-form.component */ "./src/app/create-form/create-user-form/create-user-form.component.ts");
/* harmony import */ var _Interceptor_agro_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Interceptor/agro-interceptor */ "./src/app/Interceptor/agro-interceptor.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _tables_customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tables/customer-table/customer-table.component */ "./src/app/tables/customer-table/customer-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _view_customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./view/customer-view/customer-view.component */ "./src/app/view/customer-view/customer-view.component.ts");
/* harmony import */ var _confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./confirmation-box/confirmation-box.component */ "./src/app/confirmation-box/confirmation-box.component.ts");
/* harmony import */ var _tables_voucher_table_voucher_table_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./tables/voucher-table/voucher-table.component */ "./src/app/tables/voucher-table/voucher-table.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _create_form_create_voucher_create_voucher_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./create-form/create-voucher/create-voucher.component */ "./src/app/create-form/create-voucher/create-voucher.component.ts");
/* harmony import */ var _tables_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tables/order-table/order-table.component */ "./src/app/tables/order-table/order-table.component.ts");
/* harmony import */ var _tables_stock_item_table_stock_item_table_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./tables/stock-item-table/stock-item-table.component */ "./src/app/tables/stock-item-table/stock-item-table.component.ts");
/* harmony import */ var _stock_items_stock_items_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./stock-items/stock-items.component */ "./src/app/stock-items/stock-items.component.ts");
/* harmony import */ var _view_voucher_view_voucher_view_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./view/voucher-view/voucher-view.component */ "./src/app/view/voucher-view/voucher-view.component.ts");
/* harmony import */ var _view_complaint_view_complaint_view_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./view/complaint-view/complaint-view.component */ "./src/app/view/complaint-view/complaint-view.component.ts");
/* harmony import */ var _view_stock_item_view_stock_item_view_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./view/stock-item-view/stock-item-view.component */ "./src/app/view/stock-item-view/stock-item-view.component.ts");
/* harmony import */ var _view_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./view/order-view/order-view.component */ "./src/app/view/order-view/order-view.component.ts");
/* harmony import */ var _tables_batch_table_batch_table_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./tables/batch-table/batch-table.component */ "./src/app/tables/batch-table/batch-table.component.ts");
/* harmony import */ var _Products_expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Products/expired-products/expired-products.component */ "./src/app/Products/expired-products/expired-products.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _Products_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Products/update-customer/update-customer.component */ "./src/app/Products/update-customer/update-customer.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _CustomerPackage_customer_list_view_customer_list_view_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./CustomerPackage/customer-list-view/customer-list-view.component */ "./src/app/CustomerPackage/customer-list-view/customer-list-view.component.ts");
/* harmony import */ var _CustomerPackage_address_list_view_address_list_view_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./CustomerPackage/address-list-view/address-list-view.component */ "./src/app/CustomerPackage/address-list-view/address-list-view.component.ts");
/* harmony import */ var _tables_address_table_address_table_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./tables/address-table/address-table.component */ "./src/app/tables/address-table/address-table.component.ts");
/* harmony import */ var _create_form_create_address_form_create_address_form_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./create-form/create-address-form/create-address-form.component */ "./src/app/create-form/create-address-form/create-address-form.component.ts");
/* harmony import */ var _AccountingPackage_day_book_day_book_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./AccountingPackage/day-book/day-book.component */ "./src/app/AccountingPackage/day-book/day-book.component.ts");
/* harmony import */ var _create_form_create_stock_item_form_create_stock_item_form_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./create-form/create-stock-item-form/create-stock-item-form.component */ "./src/app/create-form/create-stock-item-form/create-stock-item-form.component.ts");
/* harmony import */ var _VoucherPackage_cash_tendered_cash_tendered_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./VoucherPackage/cash-tendered/cash-tendered.component */ "./src/app/VoucherPackage/cash-tendered/cash-tendered.component.ts");
/* harmony import */ var _PrintPackage_invoice_print_view_invoice_print_view_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./PrintPackage/invoice-print-view/invoice-print-view.component */ "./src/app/PrintPackage/invoice-print-view/invoice-print-view.component.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");
/* harmony import */ var _shared_agro_storage_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./shared/agro-storage.service */ "./src/app/shared/agro-storage.service.ts");
/* harmony import */ var _side_navigation_bar_side_navigation_bar_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./side-navigation-bar/side-navigation-bar.component */ "./src/app/side-navigation-bar/side-navigation-bar.component.ts");
/* harmony import */ var _Products_product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./Products/product-list-view/product-list-view.component */ "./src/app/Products/product-list-view/product-list-view.component.ts");
/* harmony import */ var _tables_tax_details_table_tax_details_table_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./tables/tax-details-table/tax-details-table.component */ "./src/app/tables/tax-details-table/tax-details-table.component.ts");
/* harmony import */ var _create_form_create_tax_details_form_create_tax_details_form_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./create-form/create-tax-details-form/create-tax-details-form.component */ "./src/app/create-form/create-tax-details-form/create-tax-details-form.component.ts");




































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_10__["LoginFormComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavigationBarComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_13__["CustomersComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"],
                _complaints_complaints_component__WEBPACK_IMPORTED_MODULE_15__["ComplaintsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"],
                _create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_17__["CreateCustomerFormComponent"],
                _create_form_create_complaint_form_create_complaint_form_component__WEBPACK_IMPORTED_MODULE_18__["CreateComplaintFormComponent"],
                _create_form_create_order_form_create_order_form_component__WEBPACK_IMPORTED_MODULE_19__["CreateOrderFormComponent"],
                _create_form_create_user_form_create_user_form_component__WEBPACK_IMPORTED_MODULE_20__["CreateUserFormComponent"],
                _tables_customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_26__["CustomerTableComponent"],
                _view_customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_32__["CustomerViewComponent"],
                _confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_33__["ConfirmationBoxComponent"],
                _tables_voucher_table_voucher_table_component__WEBPACK_IMPORTED_MODULE_34__["VoucherTableComponent"],
                _sales_sales_component__WEBPACK_IMPORTED_MODULE_35__["SalesComponent"],
                _create_form_create_voucher_create_voucher_component__WEBPACK_IMPORTED_MODULE_36__["CreateVoucherComponent"],
                _tables_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_37__["OrderTableComponent"],
                _tables_stock_item_table_stock_item_table_component__WEBPACK_IMPORTED_MODULE_38__["StockItemTableComponent"],
                _stock_items_stock_items_component__WEBPACK_IMPORTED_MODULE_39__["StockItemsComponent"],
                _view_voucher_view_voucher_view_component__WEBPACK_IMPORTED_MODULE_40__["VoucherViewComponent"],
                _view_complaint_view_complaint_view_component__WEBPACK_IMPORTED_MODULE_41__["ComplaintViewComponent"],
                _view_stock_item_view_stock_item_view_component__WEBPACK_IMPORTED_MODULE_42__["StockItemViewComponent"],
                _view_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_43__["OrderViewComponent"],
                _tables_batch_table_batch_table_component__WEBPACK_IMPORTED_MODULE_44__["BatchTableComponent"],
                _Products_expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_45__["ExpiredProductsComponent"],
                _Products_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_50__["UpdateCustomerComponent"],
                _CustomerPackage_customer_list_view_customer_list_view_component__WEBPACK_IMPORTED_MODULE_53__["CustomerListViewComponent"],
                _CustomerPackage_address_list_view_address_list_view_component__WEBPACK_IMPORTED_MODULE_54__["AddressListViewComponent"],
                _tables_address_table_address_table_component__WEBPACK_IMPORTED_MODULE_55__["AddressTableComponent"],
                _create_form_create_address_form_create_address_form_component__WEBPACK_IMPORTED_MODULE_56__["CreateAddressFormComponent"],
                _AccountingPackage_day_book_day_book_component__WEBPACK_IMPORTED_MODULE_57__["DayBookComponent"],
                _create_form_create_stock_item_form_create_stock_item_form_component__WEBPACK_IMPORTED_MODULE_58__["CreateStockItemFormComponent"],
                _VoucherPackage_cash_tendered_cash_tendered_component__WEBPACK_IMPORTED_MODULE_59__["CashTenderedComponent"],
                _PrintPackage_invoice_print_view_invoice_print_view_component__WEBPACK_IMPORTED_MODULE_60__["InvoicePrintViewComponent"],
                _side_navigation_bar_side_navigation_bar_component__WEBPACK_IMPORTED_MODULE_63__["SideNavigationBarComponent"],
                _Products_product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_64__["ProductListViewComponent"],
                _tables_tax_details_table_tax_details_table_component__WEBPACK_IMPORTED_MODULE_65__["TaxDetailsTableComponent"],
                _create_form_create_tax_details_form_create_tax_details_form_component__WEBPACK_IMPORTED_MODULE_66__["CreateTaxDetailsFormComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_46__["MatSelectModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_47__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_48__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_49__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_51__["MatListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_52__["MatToolbarModule"],
                ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_61__["StorageServiceModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _shared_api_service__WEBPACK_IMPORTED_MODULE_22__["ApiService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialog"], _shared_agro_storage_service__WEBPACK_IMPORTED_MODULE_62__["AgroStorageService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogConfig"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _Interceptor_agro_interceptor__WEBPACK_IMPORTED_MODULE_21__["AgroInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [_create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_17__["CreateCustomerFormComponent"], _create_form_create_tax_details_form_create_tax_details_form_component__WEBPACK_IMPORTED_MODULE_66__["CreateTaxDetailsFormComponent"], _PrintPackage_invoice_print_view_invoice_print_view_component__WEBPACK_IMPORTED_MODULE_60__["InvoicePrintViewComponent"], _VoucherPackage_cash_tendered_cash_tendered_component__WEBPACK_IMPORTED_MODULE_59__["CashTenderedComponent"], _create_form_create_stock_item_form_create_stock_item_form_component__WEBPACK_IMPORTED_MODULE_58__["CreateStockItemFormComponent"], _tables_customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_26__["CustomerTableComponent"], _confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_33__["ConfirmationBoxComponent"], _create_form_create_address_form_create_address_form_component__WEBPACK_IMPORTED_MODULE_56__["CreateAddressFormComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/complaints/complaints.component.css":
/*!*****************************************************!*\
  !*** ./src/app/complaints/complaints.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsYWludHMvY29tcGxhaW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/complaints/complaints.component.ts":
/*!****************************************************!*\
  !*** ./src/app/complaints/complaints.component.ts ***!
  \****************************************************/
/*! exports provided: ComplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsComponent", function() { return ComplaintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComplaintsComponent = /** @class */ (function () {
    function ComplaintsComponent() {
    }
    ComplaintsComponent.prototype.ngOnInit = function () {
    };
    ComplaintsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaints',
            template: __webpack_require__(/*! raw-loader!./complaints.component.html */ "./node_modules/raw-loader/index.js!./src/app/complaints/complaints.component.html"),
            styles: [__webpack_require__(/*! ./complaints.component.css */ "./src/app/complaints/complaints.component.css")]
        })
    ], ComplaintsComponent);
    return ComplaintsComponent;
}());



/***/ }),

/***/ "./src/app/confirmation-box/confirmation-box.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/confirmation-box/confirmation-box.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hdGlvbi1ib3gvY29uZmlybWF0aW9uLWJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/confirmation-box/confirmation-box.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/confirmation-box/confirmation-box.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmationBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBoxComponent", function() { return ConfirmationBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmationBoxComponent = /** @class */ (function () {
    function ConfirmationBoxComponent(messageInjected, dialogRef) {
        this.messageInjected = messageInjected;
        this.dialogRef = dialogRef;
        this.message = messageInjected;
    }
    ConfirmationBoxComponent.prototype.ngOnInit = function () {
    };
    ConfirmationBoxComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmationBoxComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    ConfirmationBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-box',
            template: __webpack_require__(/*! raw-loader!./confirmation-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/confirmation-box/confirmation-box.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-box.component.css */ "./src/app/confirmation-box/confirmation-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ConfirmationBoxComponent);
    return ConfirmationBoxComponent;
}());



/***/ }),

/***/ "./src/app/create-form/create-address-form/create-address-form.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/create-form/create-address-form/create-address-form.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input{\r\n  width: 100%\r\n}\r\n\r\n.header{\r\n  font-size: 24px;\r\n  align-self: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWZvcm0vY3JlYXRlLWFkZHJlc3MtZm9ybS9jcmVhdGUtYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1mb3JtL2NyZWF0ZS1hZGRyZXNzLWZvcm0vY3JlYXRlLWFkZHJlc3MtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0e1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/create-form/create-address-form/create-address-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/create-form/create-address-form/create-address-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateAddressFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAddressFormComponent", function() { return CreateAddressFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Model_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Model/address */ "./src/app/Model/address.ts");






var CreateAddressFormComponent = /** @class */ (function () {
    function CreateAddressFormComponent(data, router, apiService) {
        this.data = data;
        this.router = router;
        this.apiService = apiService;
        this.placeOfSupplies = [];
        this.address = {
            _id: "",
            name: "",
            districtName: "",
            tehsilName: "",
            stateName: "",
            countryName: "",
            noOfGovernmentLandRecords: 0,
            noOfPrivateLandRecords: 0,
            areaOfGovenmentLand: 0,
            areaOfPrivateLand: 0
        };
        if (data != null) {
            this.address = data;
        }
    }
    CreateAddressFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getPlaceOfSupplies().subscribe(function (res) {
            _this.placeOfSupplies = res.list;
        }, function (err) {
            console.log(err);
        });
    };
    CreateAddressFormComponent.prototype.submit = function () {
        this.apiService.addAddress(this.address).subscribe(function (res) {
            console.log("Address Created");
        }, function (err) {
            alert("Could not complete request. Please try again later");
        });
    };
    CreateAddressFormComponent.prototype.fillCustomer = function (address) {
        this.address = address;
    };
    CreateAddressFormComponent.ctorParameters = function () { return [
        { type: _Model_address__WEBPACK_IMPORTED_MODULE_5__["Address"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],] }] }
    ]; };
    CreateAddressFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-address-form',
            template: __webpack_require__(/*! raw-loader!./create-address-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-form/create-address-form/create-address-form.component.html"),
            styles: [__webpack_require__(/*! ./create-address-form.component.css */ "./src/app/create-form/create-address-form/create-address-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]))
    ], CreateAddressFormComponent);
    return CreateAddressFormComponent;
}());



/***/ }),

/***/ "./src/app/create-form/create-complaint-form/create-complaint-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/create-form/create-complaint-form/create-complaint-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1mb3JtL2NyZWF0ZS1jb21wbGFpbnQtZm9ybS9jcmVhdGUtY29tcGxhaW50LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/create-form/create-complaint-form/create-complaint-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/create-form/create-complaint-form/create-complaint-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateComplaintFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComplaintFormComponent", function() { return CreateComplaintFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateComplaintFormComponent = /** @class */ (function () {
    function CreateComplaintFormComponent() {
    }
    CreateComplaintFormComponent.prototype.ngOnInit = function () {
    };
    CreateComplaintFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-complaint-form',
            template: __webpack_require__(/*! raw-loader!./create-complaint-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-form/create-complaint-form/create-complaint-form.component.html"),
            styles: [__webpack_require__(/*! ./create-complaint-form.component.css */ "./src/app/create-form/create-complaint-form/create-complaint-form.component.css")]
        })
    ], CreateComplaintFormComponent);
    return CreateComplaintFormComponent;
}());



/***/ }),

/***/ "./src/app/create-form/create-customer-form/create-customer-form.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/create-form/create-customer-form/create-customer-form.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1mb3JtL2NyZWF0ZS1jdXN0b21lci1mb3JtL2NyZWF0ZS1jdXN0b21lci1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/create-form/create-customer-form/create-customer-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/create-form/create-customer-form/create-customer-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreateCustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerFormComponent", function() { return CreateCustomerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var CreateCustomerFormComponent = /** @class */ (function () {
    function CreateCustomerFormComponent(data, router, apiService) {
        this.data = data;
        this.router = router;
        this.apiService = apiService;
        this.addresses = [];
        this.customer = {
            _id: '',
            name: '',
            fatherName: '',
            phoneNumber: '',
            addressId: '',
            landHolding: 0
        };
        if (data != null) {
            this.customer = data;
        }
    }
    CreateCustomerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAddresses().subscribe(function (res) {
            _this.addresses = res;
        }, function (err) {
            console.log("Cannot fetch customer at this moment");
        });
    };
    CreateCustomerFormComponent.prototype.submit = function () {
        var _this = this;
        this.apiService.addCustomer(this.customer).subscribe(function (res) {
            alert(res);
        }, function (err) {
            console.log(_this.customer);
            console.log(err);
        });
    };
    CreateCustomerFormComponent.prototype.fillCustomer = function (customer) {
        this.customer = customer;
    };
    CreateCustomerFormComponent.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    CreateCustomerFormComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],] }] }
    ]; };
    CreateCustomerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-customer-form',
            template: __webpack_require__(/*! raw-loader!./create-customer-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-form/create-customer-form/create-customer-form.component.html"),
            styles: [__webpack_require__(/*! ./create-customer-form.component.css */ "./src/app/create-form/create-customer-form/create-customer-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]))
    ], CreateCustomerFormComponent);
    return CreateCustomerFormComponent;
}());



/***/ }),

/***/ "./src/app/create-form/create-order-form/create-order-form.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/create-form/create-order-form/create-order-form.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1mb3JtL2NyZWF0ZS1vcmRlci1mb3JtL2NyZWF0ZS1vcmRlci1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/create-form/create-order-form/create-order-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/create-form/create-order-form/create-order-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateOrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderFormComponent", function() { return CreateOrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateOrderFormComponent = /** @class */ (function () {
    function CreateOrderFormComponent() {
    }
    CreateOrderFormComponent.prototype.ngOnInit = function () {
    };
    CreateOrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-order-form',
            template: __webpack_require__(/*! raw-loader!./create-order-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-form/create-order-form/create-order-form.component.html"),
            styles: [__webpack_require__(/*! ./create-order-form.component.css */ "./src/app/create-form/create-order-form/create-order-form.component.css")]
        })
    ], CreateOrderFormComponent);
    return CreateOrderFormComponent;
}());



/***/ }),

/***/ "./src/app/create-form/create-stock-item-form/create-stock-item-form.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/create-form/create-stock-item-form/create-stock-item-form.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1mb3JtL2NyZWF0ZS1zdG9jay1pdGVtLWZvcm0vY3JlYXRlLXN0b2NrLWl0ZW0tZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/create-form/create-stock-item-form/create-stock-item-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/create-form/create-stock-item-form/create-stock-item-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateStockItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStockItemFormComponent", function() { return CreateStockItemFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Model_stock_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Model/stock-item */ "./src/app/Model/stock-item.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");








var CreateStockItemFormComponent = /** @class */ (function () {
    function CreateStockItemFormComponent(data, router, apiService) {
        this.data = data;
        this.router = router;
        this.apiService = apiService;
        this.godowns = [];
        this.ledgers = [];
        this.item = new _Model_stock_item__WEBPACK_IMPORTED_MODULE_5__["StockItem"]();
        this.priceListItem = {
            godownName: "",
            price: 0
        };
        this.displayedColumns = ['godownName', 'price', 'update'];
        if (data != null) {
            console.log(data);
            this.item = data;
        }
    }
    CreateStockItemFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getGodownNames().subscribe(function (res) {
            _this.godowns = res.list;
        }, function (err) {
            console.log(err);
        });
        this.apiService.getSalesLedger().subscribe(function (res) {
            _this.ledgers = res.list;
        }, function (err) {
            console.log(err);
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.item.priceList);
    };
    CreateStockItemFormComponent.prototype.ngAfterViewInit = function () {
        this.table.dataSource = this.dataSource;
    };
    CreateStockItemFormComponent.prototype.submit = function () {
        this.apiService.saveStockItem(this.item).subscribe(function (res) { console.log("stockItem saved"); }, function (err) { console.log("stockItem could not be saved"); });
    };
    CreateStockItemFormComponent.prototype.addPriceListItem = function () {
        this.item.priceList.push(this.priceListItem);
        this.table.renderRows();
        this.priceListItem = {
            godownName: "",
            price: 0
        };
    };
    CreateStockItemFormComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], { static: false })
    ], CreateStockItemFormComponent.prototype, "table", void 0);
    CreateStockItemFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-stock-item-form',
            template: __webpack_require__(/*! raw-loader!./create-stock-item-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-form/create-stock-item-form/create-stock-item-form.component.html"),
            styles: [__webpack_require__(/*! ./create-stock-item-form.component.css */ "./src/app/create-form/create-stock-item-form/create-stock-item-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]))
    ], CreateStockItemFormComponent);
    return CreateStockItemFormComponent;
}());



/***/ }),

/***/ "./src/app/create-form/create-tax-details-form/create-tax-details-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/create-form/create-tax-details-form/create-tax-details-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1mb3JtL2NyZWF0ZS10YXgtZGV0YWlscy1mb3JtL2NyZWF0ZS10YXgtZGV0YWlscy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/create-form/create-tax-details-form/create-tax-details-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/create-form/create-tax-details-form/create-tax-details-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreateTaxDetailsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaxDetailsFormComponent", function() { return CreateTaxDetailsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Model_tax_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Model/tax-details */ "./src/app/Model/tax-details.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var CreateTaxDetailsFormComponent = /** @class */ (function () {
    function CreateTaxDetailsFormComponent(data, router, apiService) {
        this.data = data;
        this.router = router;
        this.apiService = apiService;
        this.taxDetail = new _Model_tax_details__WEBPACK_IMPORTED_MODULE_3__["TaxDetails"]();
        if (data != null) {
            this.taxDetail = data;
        }
    }
    CreateTaxDetailsFormComponent.prototype.ngOnInit = function () {
    };
    CreateTaxDetailsFormComponent.prototype.submit = function () {
        var _this = this;
        this.apiService.addTaxDetail(this.taxDetail).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(_this.taxDetail);
            console.log(err);
        });
    };
    CreateTaxDetailsFormComponent.ctorParameters = function () { return [
        { type: _Model_tax_details__WEBPACK_IMPORTED_MODULE_3__["TaxDetails"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],] }] }
    ]; };
    CreateTaxDetailsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-tax-details-form',
            template: __webpack_require__(/*! raw-loader!./create-tax-details-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-form/create-tax-details-form/create-tax-details-form.component.html"),
            styles: [__webpack_require__(/*! ./create-tax-details-form.component.css */ "./src/app/create-form/create-tax-details-form/create-tax-details-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]))
    ], CreateTaxDetailsFormComponent);
    return CreateTaxDetailsFormComponent;
}());



/***/ }),

/***/ "./src/app/create-form/create-user-form/create-user-form.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/create-form/create-user-form/create-user-form.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userForm{\r\n  width: 100%;\r\n  align-content: center;\r\n  margin: 10px, 10px, 10px,10px;\r\n  padding: 10px;\r\n}\r\n\r\n.input{\r\n  width: 100%\r\n}\r\n\r\n.header{\r\n  font-size: 24px;\r\n  align-self: center;\r\n}\r\n\r\n.basicUserDetails{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.additionalUserDetails{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWZvcm0vY3JlYXRlLXVzZXItZm9ybS9jcmVhdGUtdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1mb3JtL2NyZWF0ZS11c2VyLWZvcm0vY3JlYXRlLXVzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJGb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHgsIDEwcHgsIDEwcHgsMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5iYXNpY1VzZXJEZXRhaWxze1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmFkZGl0aW9uYWxVc2VyRGV0YWlsc3tcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-form/create-user-form/create-user-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/create-form/create-user-form/create-user-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserFormComponent", function() { return CreateUserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");




var CreateUserFormComponent = /** @class */ (function () {
    function CreateUserFormComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.hide = true;
        this.user = {
            password: "",
            lastLogin: null,
            emailId: "",
            contactNumber: "",
            _id: "",
            role: "",
            tallyUserName: "",
            posCashLedgerName: "",
            cashLedgerName: "",
            basicBasePartyName: "",
            placeOfSupply: "",
            voucherTypeName: "",
            godownName: "",
            salesVoucherHeader: "",
            salesVoucherFooter: "",
        };
        this.posCashLedgers = [];
        this.cashLedgers = [];
        this.basicBasePartyNames = [];
        this.placeOfSupplies = [];
        this.voucherTypeNames = [];
        this.godownNames = [];
        this.url = '';
        this.selectedFile = '';
    }
    CreateUserFormComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    CreateUserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getCashLedgers().subscribe(function (res) {
            console.log(res);
            _this.posCashLedgers = res.list;
            _this.cashLedgers = res.list;
            _this.basicBasePartyNames = res.list;
        }, function (err) {
            console.log(err);
        });
        this.apiService.getVoucherTypeName().subscribe(function (res) {
            _this.voucherTypeNames = res.list;
        }, function (err) {
            console.log(err);
        });
        this.apiService.getPlaceOfSupplies().subscribe(function (res) {
            _this.placeOfSupplies = res.list;
        }, function (err) {
            console.log(err);
        });
        this.apiService.getGodownNames().subscribe(function (res) {
            _this.godownNames = res.list;
        }, function (err) {
            console.log(err);
        });
    };
    CreateUserFormComponent.prototype.submit = function () {
        this.apiService.saveUser(this.user).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    CreateUserFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],] }] }
    ]; };
    CreateUserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-user-form',
            template: __webpack_require__(/*! raw-loader!./create-user-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-form/create-user-form/create-user-form.component.html"),
            styles: [__webpack_require__(/*! ./create-user-form.component.css */ "./src/app/create-form/create-user-form/create-user-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]))
    ], CreateUserFormComponent);
    return CreateUserFormComponent;
}());



/***/ }),

/***/ "./src/app/create-form/create-voucher/create-voucher.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/create-form/create-voucher/create-voucher.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline{\r\n  font-size: 28px;\r\n  font-style: italic;\r\n}\r\n.invoice{\r\n  margin: 5px;\r\n}\r\n.full-width{\r\n  width: 100%;\r\n}\r\n.rightPart{\r\n  width: 65%;\r\n  float:right;\r\n}\r\n.rightTop{\r\n  width: 65%;\r\n  float:top;\r\n}\r\n.invoiceTotalDetails{\r\n  width: 100%;\r\n  float:right;\r\n}\r\n.customerInformation{\r\n  width: 25%;\r\n  float:left;\r\n  height: 70%;\r\n}\r\n.voucherNumber{\r\n  width: 40%;\r\n  float:right;\r\n}\r\n.date{\r\n  width: 40%;\r\n  float:left;\r\n}\r\n.invoiceInformation{\r\n  width: 100%;\r\n  float:none;\r\n}\r\n.inventoryInformation{\r\n  width: 47%;\r\n  float:right;\r\n}\r\n.totalLabel{\r\n  width: 50%;\r\n}\r\n.customerTitle{\r\n  width: 30%;\r\n}\r\n.customerValue{\r\n  width: 70%;\r\n}\r\n.full-width-table {\r\n  width: 100%;\r\n\r\n}\r\n.filterInputClass{\r\n  width: 50%;\r\n  margin: 10px 20px;\r\n  align-content: center;\r\n\r\n}\r\n.customerTable{\r\n  width: 70%;\r\n  margin: 20px auto;\r\n  padding: 10px;\r\n}\r\n.mat-row {\r\n  height: auto;\r\n}\r\n.mat-cell {\r\n  padding: 8px 8px 8px 0;\r\n}\r\n.printView{\r\n  display: none;\r\n  visibility: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWZvcm0vY3JlYXRlLXZvdWNoZXIvY3JlYXRlLXZvdWNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUlBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7O0FBRXZCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtZm9ybS9jcmVhdGUtdm91Y2hlci9jcmVhdGUtdm91Y2hlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRsaW5le1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLmludm9pY2V7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmlnaHRQYXJ0e1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuLnJpZ2h0VG9we1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgZmxvYXQ6dG9wO1xyXG59XHJcblxyXG4uaW52b2ljZVRvdGFsRGV0YWlsc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuLmN1c3RvbWVySW5mb3JtYXRpb257XHJcbiAgd2lkdGg6IDI1JTtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIGhlaWdodDogNzAlO1xyXG59XHJcblxyXG4udm91Y2hlck51bWJlcntcclxuICB3aWR0aDogNDAlO1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uZGF0ZXtcclxuICB3aWR0aDogNDAlO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuLmludm9pY2VJbmZvcm1hdGlvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDpub25lO1xyXG59XHJcbi5pbnZlbnRvcnlJbmZvcm1hdGlvbntcclxuICB3aWR0aDogNDclO1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG5cclxuXHJcbi50b3RhbExhYmVse1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmN1c3RvbWVyVGl0bGV7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uY3VzdG9tZXJWYWx1ZXtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5maWx0ZXJJbnB1dENsYXNze1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbWVyVGFibGV7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXJvdyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XHJcbn1cclxuXHJcbi5wcmludFZpZXd7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/create-form/create-voucher/create-voucher.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/create-form/create-voucher/create-voucher.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVoucherComponent", function() { return CreateVoucherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Model_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Model/address */ "./src/app/Model/address.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../create-form/create-customer-form/create-customer-form.component */ "./src/app/create-form/create-customer-form/create-customer-form.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _VoucherPackage_cash_tendered_cash_tendered_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../VoucherPackage/cash-tendered/cash-tendered.component */ "./src/app/VoucherPackage/cash-tendered/cash-tendered.component.ts");
/* harmony import */ var _shared_voucher_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/voucher.service */ "./src/app/shared/voucher.service.ts");
/* harmony import */ var _shared_pos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/pos.service */ "./src/app/shared/pos.service.ts");
















var CreateVoucherComponent = /** @class */ (function () {
    function CreateVoucherComponent(voucherService, apiService, dialog, dialogConfig, cookie, posService) {
        this.voucherService = voucherService;
        this.apiService = apiService;
        this.dialog = dialog;
        this.dialogConfig = dialogConfig;
        this.cookie = cookie;
        this.posService = posService;
        this.customer = {
            _id: '',
            name: '',
            fatherName: '',
            phoneNumber: '',
            addressId: '',
            fullAddress: new _Model_address__WEBPACK_IMPORTED_MODULE_2__["Address"](),
            landHolding: 0
        };
        this.tallyVoucher = {
            _id: "",
            customVoucherDetails: {
                date: null,
                basicBuyerName: "",
                address: "",
                posCashRecieved: 0,
                customerId: "",
                voucherNumber: "",
                createdBy: "",
            },
            ledgerEntry: {
                cgst: 0,
                sgst: 0,
                roundOff: 0,
                cash: 0,
                subTotal: 0,
                cashLedgerName: this.cookie.get('tallyVoucher.ledgerEntry.cashLedgerName')
            },
            basicVoucherDetails: {
                stateName: this.cookie.get('tallyVoucher.basicVoucherDetails.stateName'),
                countryOfResidence: this.cookie.get('tallyVoucher.basicVoucherDetails.countryOfResidence'),
                className: this.cookie.get('tallyVoucher.basicVoucherDetails.className'),
                posCashLedgerName: this.cookie.get('tallyVoucher.basicVoucherDetails.posCashLedgerName'),
                basicBasePartyName: this.cookie.get('tallyVoucher.basicVoucherDetails.basicBasePartyName'),
                placeOfSupply: this.cookie.get('tallyVoucher.basicVoucherDetails.placeOfSupply'),
                voucherTypeName: this.cookie.get('tallyVoucher.basicVoucherDetails.voucherTypeName')
            },
            billedStockItems: []
        };
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.invControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.qtyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.displayedColumns = ["Sno", "itemName", "batchName", "quantity", "rate", "amount", "delete"];
        this.customerHistoryDisplayedColumn = ["itemName", "date", "quantity"];
        this.customerHistory = [{ _id: { name: "parth" }, date: new Date(), quantity: 0 }];
        this.editMode = false;
    }
    CreateVoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.voucherService.tallyVoucher != null) {
            this.tallyVoucher = this.voucherService.tallyVoucher;
            this.editMode = true;
            this.voucherService.tallyVoucher = null;
        }
        //var uniqid = require('uniqid');
        //this.resetVoucher();
        this.apiService.getCustomers().subscribe(function (res) {
            _this.customers = res;
            if (_this.editMode) {
                _this.myControl.setValue(_this.customers.find(function (x) { return x._id == _this.tallyVoucher.customVoucherDetails.customerId; }));
                _this.date.setValue(_this.tallyVoucher.customVoucherDetails.date);
            }
            else {
                _this.date.setValue(new Date());
            }
            _this.filteredOptions = _this.myControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (name) { return name ? _this._filter(name) : _this.customers.slice(); }));
        }, function (err) {
            console.log("Cannot fetch customer at this moment");
        });
        this.apiService.getAllStockItemsForBilling().subscribe(function (res) {
            var e_1, _a;
            _this.products = res;
            if (_this.editMode) {
                var p;
                var _loop_1 = function (item) {
                    p = _this.products.find(function (x) { return x.name == item.name; });
                    item.cgst = p.cgst;
                    item.sgst = p.sgst;
                    item.hsnCode = p.hsnCode;
                };
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.tallyVoucher.billedStockItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        _loop_1(item);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            _this.productFilteredOptions = _this.invControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (name) { return name ? _this.product_filter(name) : _this.products.slice(); }));
        }, function (err) {
            console.log("Cannot fetch products at this moment");
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.tallyVoucher.billedStockItems);
        this.myControl.setValue(this.customer);
    };
    CreateVoucherComponent.prototype.ngAfterViewInit = function () {
        this.customerRef.nativeElement.focus();
    };
    CreateVoucherComponent.prototype.resetVoucher = function () {
        this.myControl.setValue({
            _id: '',
            name: '',
            fatherName: '',
            phoneNumber: '',
            addressId: '',
            fullAddress: new _Model_address__WEBPACK_IMPORTED_MODULE_2__["Address"](),
            landHolding: 0
        });
        this.tallyVoucher = {
            _id: "",
            customVoucherDetails: {
                date: this.date.value,
                basicBuyerName: "",
                address: "",
                posCashRecieved: 0,
                customerId: "",
                voucherNumber: this.cookie.get('tallyVoucher.voucherNumberPrefix') + "-*********",
                createdBy: ""
            },
            ledgerEntry: {
                cgst: 0,
                sgst: 0,
                roundOff: 0,
                cash: 0,
                subTotal: 0,
                cashLedgerName: this.cookie.get('tallyVoucher.ledgerEntry.cashLedgerName')
            },
            basicVoucherDetails: {
                stateName: "",
                countryOfResidence: "",
                className: this.cookie.get('tallyVoucher.basicVoucherDetails.className'),
                posCashLedgerName: this.cookie.get('tallyVoucher.basicVoucherDetails.posCashLedgerName'),
                basicBasePartyName: this.cookie.get('tallyVoucher.basicVoucherDetails.basicBasePartyName'),
                placeOfSupply: this.cookie.get('tallyVoucher.basicVoucherDetails.placeOfSupply'),
                voucherTypeName: this.cookie.get('tallyVoucher.basicVoucherDetails.voucherTypeName')
            },
            billedStockItems: []
        };
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.tallyVoucher.billedStockItems);
        this.customerHistory = [];
        this.customerHistoryDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.customerHistory);
        this.customerRef.nativeElement.focus();
    };
    CreateVoucherComponent.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    CreateVoucherComponent.prototype.displayFnProduct = function (user) {
        return user ? user.name : undefined;
    };
    CreateVoucherComponent.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.customers.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    CreateVoucherComponent.prototype.product_filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.products.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    CreateVoucherComponent.prototype.generateVoucherNumber = function () {
        return this.cookie.get('tallyVoucher.voucherNumberPrefix') + '-' + Date.now().toString(16);
    };
    CreateVoucherComponent.prototype.addStockItem = function (batchSelected) {
        var e_2, _a;
        var product = this.invControl.value;
        var priceListItem;
        var price;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](product.priceList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var priceListItem_1 = _c.value;
                if (priceListItem_1.godownName == this.cookie.get('tallyVoucher.basicVoucherDetails.godownName')) {
                    price = priceListItem_1.price;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var item = {
            name: product.name,
            godownName: this.cookie.get('tallyVoucher.basicVoucherDetails.godownName'),
            batches: product.batches,
            batch: this.batch,
            quantity: this.qtyControl.value,
            rate: price,
            hsnCode: product.hsnCode,
            cgst: product.cgst,
            sgst: product.sgst,
            amount: price * this.qtyControl.value
        };
        this.tallyVoucher.billedStockItems.push(item);
        this.dataSource._updateChangeSubscription();
        this.invControl.setValue("");
        this.qtyControl.setValue("");
        this.productRef.nativeElement.focus();
        this.calculateInvoiceTotal();
    };
    CreateVoucherComponent.prototype.firstBatch = function () {
        var e_3, _a;
        var product = this.invControl.value;
        if (product.name) {
            var batchTemp;
            var entry;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](product.batches), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var entry_1 = _c.value;
                    if (!batchTemp || batchTemp.expiryDate > entry_1.expiryDate) {
                        batchTemp = entry_1;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return batchTemp;
        }
    };
    CreateVoucherComponent.prototype.deleteItem = function (item) {
        for (var i = 0; i < this.tallyVoucher.billedStockItems.length; i++) {
            if (this.tallyVoucher.billedStockItems[i] === item) {
                this.tallyVoucher.billedStockItems.splice(i, 1);
            }
        }
        this.dataSource._updateChangeSubscription();
        this.calculateInvoiceTotal();
    };
    CreateVoucherComponent.prototype.calculateInvoiceTotal = function () {
        var e_4, _a;
        var item;
        var sgst = 0;
        var cgst = 0;
        var subTotal = 0;
        var total = 0;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tallyVoucher.billedStockItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item_1 = _c.value;
                sgst = sgst + ((item_1.amount * item_1.sgst) / 100);
                cgst = cgst + ((item_1.amount * item_1.cgst) / 100);
                subTotal = subTotal + (item_1.amount);
                total = subTotal + sgst + cgst;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.tallyVoucher.ledgerEntry.cgst = cgst;
        this.tallyVoucher.ledgerEntry.sgst = sgst;
        this.tallyVoucher.ledgerEntry.cash = total;
        this.tallyVoucher.ledgerEntry.subTotal = subTotal;
    };
    CreateVoucherComponent.prototype.validateQuantity = function () {
        if (!this.qtyControl.value || this.qtyControl.value == 0) {
            this.quantityRef.nativeElement.focus();
        }
        else {
            this.batch = this.firstBatch();
            this.batchRef.nativeElement.focus();
        }
    };
    CreateVoucherComponent.prototype.validateProduct = function () {
        if (!this.invControl.value) {
            this.saveVoucher();
        }
        else {
            if (this.invControl.value.name == null) {
                this.productRef.nativeElement.focus();
            }
            else {
                this.batches = this.invControl.value.batches;
                this.batch = this.firstBatch();
                this.quantityRef.nativeElement.focus();
            }
        }
    };
    CreateVoucherComponent.prototype.validateCustomer = function () {
        if (!this.myControl.value) {
            this.createCustomer();
            console.log("Customer Creation");
        }
        else {
            this.displayCustomerHistory();
            this.productRef.nativeElement.focus();
        }
    };
    CreateVoucherComponent.prototype.displayCustomerHistory = function () {
        var _this = this;
        this.apiService.getCustomerHistory(this.myControl.value._id).subscribe(function (res) {
            _this.customerHistory = res;
            _this.customerHistoryDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.customerHistory);
        }, function (err) {
            console.log("Cannot fetch customer at this moment");
        });
    };
    CreateVoucherComponent.prototype.saveVoucher = function () {
        var _this = this;
        if (this.editMode) {
            this.tallyVoucher.customVoucherDetails.basicBuyerName = this.myControl.value.name;
            this.tallyVoucher.customVoucherDetails.address = this.myControl.value.fullAddress.name;
            this.tallyVoucher.customVoucherDetails.customerId = this.myControl.value._id;
            this.tallyVoucher.basicVoucherDetails.stateName = this.myControl.value.fullAddress.stateName;
            this.tallyVoucher.basicVoucherDetails.countryOfResidence = this.myControl.value.fullAddress.countryName;
        }
        else {
            this.validateVoucher();
        }
        var dialogRef = this.dialog.open(_VoucherPackage_cash_tendered_cash_tendered_component__WEBPACK_IMPORTED_MODULE_11__["CashTenderedComponent"], {
            width: '350px',
            data: this.tallyVoucher.ledgerEntry.cash
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.tallyVoucher.customVoucherDetails.posCashRecieved = result;
                //this.voucherService.sendVoucher(this.tallyVoucher);
                _this.apiService.saveTallyVoucher(_this.tallyVoucher).subscribe(function (res) {
                    if (res.status == "SUCCESS") {
                        _this.editMode = false;
                        console.log(res.voucherId);
                        _this.printView.print();
                        _this.resetVoucher();
                    }
                    else if (res.status == "FAILURE") {
                        alert(res.cause);
                    }
                    else {
                        alert("Problem Occured. Please try again later");
                    }
                }, function (err) {
                    if (err.status == 500) {
                        _this.posService.addCacheVoucher(_this.tallyVoucher).then(function () {
                            alert("Tally is offline. Please try again later. Meanwhile the data is stored locally");
                        }, function (err) {
                            alert("Tally is offline. Please try again later. Meanwhile the data is stored locally");
                            alert("Could save voucher locally");
                        });
                    }
                    else {
                        _this.posService.addCacheVoucher(_this.tallyVoucher).then(function () {
                            alert("Problem ocurred at backend. Please try again later. Meanwhile the data is stored locally");
                        }, function (err) {
                            alert("Could save voucher locally");
                        });
                    }
                });
                // DO SOMETHING
            }
        });
    };
    CreateVoucherComponent.prototype.validateVoucher = function () {
        //var uniqid = require('uniqid');
        this.tallyVoucher.customVoucherDetails.createdBy = this.cookie.get('currentUser');
        this.tallyVoucher.customVoucherDetails.voucherNumber = uniqid__WEBPACK_IMPORTED_MODULE_10__["time"]();
        this.tallyVoucher.customVoucherDetails.date = this.date.value;
        this.tallyVoucher.customVoucherDetails.basicBuyerName = this.myControl.value.name;
        this.tallyVoucher.customVoucherDetails.address = this.myControl.value.fullAddress.name;
        this.tallyVoucher.customVoucherDetails.customerId = this.myControl.value._id;
        this.tallyVoucher.basicVoucherDetails.stateName = this.myControl.value.fullAddress.stateName;
        this.tallyVoucher.basicVoucherDetails.countryOfResidence = this.myControl.value.fullAddress.countryName;
    };
    CreateVoucherComponent.prototype.createCustomer = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        this.dialog.open(_create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_8__["CreateCustomerFormComponent"]);
    };
    CreateVoucherComponent.prototype.sync = function () {
        var _this = this;
        this.apiService.getUserDetails().subscribe(function (res) {
            console.log(res);
            _this.cookie.set('tallyVoucher.ledgerEntry.cashLedgerName', res.cashLedgerName),
                _this.cookie.set('tallyVoucher.basicVoucherDetails.stateName', res.placeOfSupply),
                _this.cookie.set('tallyVoucher.basicVoucherDetails.godownName', res.godownName),
                _this.cookie.set('tallyVoucher.basicVoucherDetails.countryOfResidence', "India"),
                _this.cookie.set('tallyVoucher.basicVoucherDetails.className', res.posClass),
                _this.cookie.set('tallyVoucher.basicVoucherDetails.posCashLedgerName', res.posCashLedgerName),
                _this.cookie.set('tallyVoucher.basicVoucherDetails.basicBasePartyName', res.basicBasePartyName),
                _this.cookie.set('tallyVoucher.basicVoucherDetails.placeOfSupply', res.placeOfSupply),
                _this.cookie.set('tallyVoucher.basicVoucherDetails.voucherTypeName', res.voucherTypeName);
        }, function (err) {
            alert("You are not connected to Server at this point");
        });
        this.apiService.getCustomers().subscribe(function (res) {
            _this.customers = res;
            _this.filteredOptions = _this.myControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (name) { return name ? _this._filter(name) : _this.customers.slice(); }));
        }, function (err) {
            console.log("Cannot fetch customer at this moment");
        });
    };
    CreateVoucherComponent.prototype.setTallyVoucher = function (tallyVoucher) {
        this.tallyVoucher = tallyVoucher;
    };
    CreateVoucherComponent.ctorParameters = function () { return [
        { type: _shared_voucher_service__WEBPACK_IMPORTED_MODULE_12__["VoucherService"] },
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] },
        { type: _shared_pos_service__WEBPACK_IMPORTED_MODULE_13__["PosService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('printView', { static: false })
    ], CreateVoucherComponent.prototype, "printView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], { static: false })
    ], CreateVoucherComponent.prototype, "datepicker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], { static: false })
    ], CreateVoucherComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], { static: false })
    ], CreateVoucherComponent.prototype, "customerHistoryTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productField', { static: false })
    ], CreateVoucherComponent.prototype, "productRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('quantityField', { static: false })
    ], CreateVoucherComponent.prototype, "quantityRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customerField', { static: false })
    ], CreateVoucherComponent.prototype, "customerRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('batchField', { static: false })
    ], CreateVoucherComponent.prototype, "batchRef", void 0);
    CreateVoucherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-voucher',
            template: __webpack_require__(/*! raw-loader!./create-voucher.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-form/create-voucher/create-voucher.component.html"),
            styles: [__webpack_require__(/*! ./create-voucher.component.css */ "./src/app/create-form/create-voucher/create-voucher.component.css")]
        })
    ], CreateVoucherComponent);
    return CreateVoucherComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(apiService) {
        this.apiService = apiService;
        this.items = [
            { title: "Customers", link: 'customerListView', icon: 'list' },
            { title: "Addresses", link: 'addressListView', icon: 'list' }
        ];
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/index.js!./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")]
        })
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(apiService, router, cookie) {
        this.apiService = apiService;
        this.router = router;
        this.cookie = cookie;
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.validate = function () {
        var _this = this;
        var url = 'http://localhost:3838/authenticate';
        this.apiService.authenticate(this.user).subscribe(function (res) {
            _this.cookie.set("token", res.token);
            _this.cookie.set("currentUser", _this.user.username);
            _this.router.navigateByUrl('/home');
        }, function (err) {
            alert("An error has ocurred while sending your request");
        });
    };
    LoginFormComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navibar-brand {\r\n\tcolor: #00ff00;\r\n\tfont-size:25px;\r\n    font-family: 'Kaushan Script','Helvetica Neue',Helvetica,Arial,cursive;\r\n\tfont-weight:700;\r\n\tletter-spacing:0.1em;\r\n}\r\n.navibar-brand  span{\r\n\tcolor: #fed136;\r\n\tfont-size:25px;font-weight:700;letter-spacing:0.1em;\r\n    font-family: 'Kaushan Script','Helvetica Neue',Helvetica,Arial,cursive;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0lBQ1gsc0VBQXNFO0NBQ3pFLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxjQUFjLENBQUMsZUFBZSxDQUFDLG9CQUFvQjtJQUNoRCxzRUFBc0U7QUFDMUUiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmliYXItYnJhbmQge1xyXG5cdGNvbG9yOiAjMDBmZjAwO1xyXG5cdGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsJ0hlbHZldGljYSBOZXVlJyxIZWx2ZXRpY2EsQXJpYWwsY3Vyc2l2ZTtcclxuXHRmb250LXdlaWdodDo3MDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6MC4xZW07XHJcbn1cclxuLm5hdmliYXItYnJhbmQgIHNwYW57XHJcblx0Y29sb3I6ICNmZWQxMzY7XHJcblx0Zm9udC1zaXplOjI1cHg7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjAuMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsJ0hlbHZldGljYSBOZXVlJyxIZWx2ZXRpY2EsQXJpYWwsY3Vyc2l2ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(apiService, cookie) {
        this.apiService = apiService;
        this.cookie = cookie;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    NavigationBarComponent.prototype.logout = function () {
        this.cookie.delete("token");
    };
    NavigationBarComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.apiService.getCurrentUser().subscribe(function (res) {
            _this.user = res.username;
        }, function (err) {
            console.log(err);
        });
    };
    NavigationBarComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],] }] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/navigation-bar/navigation-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]))
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        })
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/sales/sales.component.css":
/*!*******************************************!*\
  !*** ./src/app/sales/sales.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sales/sales.component.ts":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



var SalesComponent = /** @class */ (function () {
    function SalesComponent(apiService) {
        this.apiService = apiService;
        this.items = [
            { title: "Day Book", link: 'day-book', icon: 'book' },
            { title: "Voucher", link: 'create-sales-voucher', icon: 'add' }
        ];
    }
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    SalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! raw-loader!./sales.component.html */ "./node_modules/raw-loader/index.js!./src/app/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.css */ "./src/app/sales/sales.component.css")]
        })
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/shared/agro-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/agro-storage.service.ts ***!
  \************************************************/
/*! exports provided: AgroStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgroStorageService", function() { return AgroStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");



var AgroStorageService = /** @class */ (function () {
    function AgroStorageService(localStorage, sessionStorage) {
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
        this.vouchers = [];
        this.VOUCHER_LIST_KEY = "vouchers";
    }
    AgroStorageService.prototype.storeVoucherLocally = function (tallyVoucher) {
        var currentVoucherList = this.localStorage.get(this.VOUCHER_LIST_KEY) || [];
        // push new task to array
        currentVoucherList.push(tallyVoucher);
        // insert updated array to local storage
        this.localStorage.set(this.VOUCHER_LIST_KEY, currentVoucherList);
    };
    AgroStorageService.prototype.syncVouchers = function () {
    };
    AgroStorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"],] }] }
    ]; };
    AgroStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"]))
    ], AgroStorageService);
    return AgroStorageService;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var ApiService = /** @class */ (function () {
    function ApiService(httpClient, cookie) {
        this.httpClient = httpClient;
        this.cookie = cookie;
        this.WEB_SOCKET_URL = "http://localhost:3838";
        this.BASE_URL = "http://localhost:3838/api/";
    }
    ApiService.prototype.authenticate = function (user) {
        return this.httpClient.post('http://localhost:3838/authenticate', user);
    };
    ApiService.prototype.getCustomers = function () {
        return this.httpClient.get(this.BASE_URL + 'customers/getAll');
    };
    ApiService.prototype.getCustomer = function (id) {
        return this.httpClient.get(this.BASE_URL + 'customer/?id=' + id);
    };
    ApiService.prototype.addCustomer = function (customer) {
        return this.httpClient.post(this.BASE_URL + 'customer/create', customer);
    };
    ApiService.prototype.deleteCustomer = function (customer) {
        return this.httpClient.delete(this.BASE_URL + 'customer/delete/' + customer._id);
    };
    ApiService.prototype.getCurrentUser = function () {
        return this.httpClient.get(this.BASE_URL + 'user/currentUser');
    };
    ApiService.prototype.getVouchers = function (toDate, fromDate) {
        return this.httpClient.get(this.BASE_URL + 'vouchers?fromDate=' + fromDate + '&toDate=' + toDate);
    };
    ApiService.prototype.getAllVouchers = function () {
        return this.httpClient.get(this.BASE_URL + 'vouchers/getAll');
    };
    ApiService.prototype.getAllStockItems = function () {
        return this.httpClient.get(this.BASE_URL + 'stockitem/getAll');
    };
    ApiService.prototype.getAllStockItemsForBilling = function () {
        return this.httpClient.get(this.BASE_URL + 'stockitem/getStockItemListForBilling');
    };
    ApiService.prototype.getNearExpiryBatches = function (daysRemaining) {
        return this.httpClient.get(this.BASE_URL + 'stockitem/nearExpiryBatches?daysRemaining=' + daysRemaining);
    };
    ApiService.prototype.getCustomerHistory = function (id) {
        return this.httpClient.get(this.BASE_URL + 'customer/getCustomerHistory?id=' + id);
    };
    ApiService.prototype.saveTallyVoucher = function (tallyVoucher) {
        return this.httpClient.post(this.BASE_URL + 'voucher/saveVoucher', tallyVoucher);
    };
    ApiService.prototype.getCashLedgers = function () {
        return this.httpClient.get(this.BASE_URL + 'user/cashLedgers');
    };
    ApiService.prototype.getVoucherTypeName = function () {
        return this.httpClient.get(this.BASE_URL + 'user/voucherTypes');
    };
    ApiService.prototype.getPlaceOfSupplies = function () {
        return this.httpClient.get(this.BASE_URL + 'user/placeOfSupplies');
    };
    ApiService.prototype.getGodownNames = function () {
        return this.httpClient.get(this.BASE_URL + 'user/godownNames');
    };
    ApiService.prototype.saveUser = function (user) {
        return this.httpClient.post(this.BASE_URL + 'user/create', user);
    };
    ApiService.prototype.getUser = function (userName) {
        return this.httpClient.get(this.BASE_URL + 'user/' + userName);
    };
    ApiService.prototype.getAllAddresses = function () {
        return this.httpClient.get(this.BASE_URL + 'address/getAddressesWithDetail');
    };
    ApiService.prototype.getAddresses = function () {
        return this.httpClient.get(this.BASE_URL + 'address/getAddresses');
    };
    ApiService.prototype.addAddress = function (address) {
        return this.httpClient.post(this.BASE_URL + 'address/create', address);
    };
    ApiService.prototype.saveStockItem = function (item) {
        return this.httpClient.post(this.BASE_URL + 'stockitem/save', item);
    };
    ApiService.prototype.getSalesLedger = function () {
        return this.httpClient.get(this.BASE_URL + 'stockitem/salesLedgers');
    };
    ApiService.prototype.getUserDetails = function () {
        return this.httpClient.get(this.BASE_URL + 'user/userDetails');
    };
    ApiService.prototype.addTaxDetail = function (taxDetail) {
        return this.httpClient.post(this.BASE_URL + 'taxDetails/create', taxDetail);
    };
    ApiService.prototype.getTaxDetails = function () {
        return this.httpClient.get(this.BASE_URL + 'taxDetails/getAll');
    };
    ApiService.prototype.deleteTaxDetails = function (data) {
        return this.httpClient.delete(this.BASE_URL + 'taxDetails/delete?id=' + data.hsnCode);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/pos.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pos.service.ts ***!
  \***************************************/
/*! exports provided: PosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosService", function() { return PosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/api.service.ts");




var PosService = /** @class */ (function () {
    function PosService(apiService) {
        this.apiService = apiService;
        this.db = new ngx_indexed_db__WEBPACK_IMPORTED_MODULE_2__["NgxIndexedDB"]('agrostop', 1);
        this.posModeEnabled = false;
        this.db.openDatabase(1, function (evt) {
            var objectStore = evt.currentTarget.result.createObjectStore('cacheVoucher', { keyPath: 'customVoucherDetails.voucherNumber', autoIncrement: false });
            //objectStore.createIndex('name', 'name', { unique: false });
            //objectStore.createIndex('email', 'email', { unique: true });
        });
    }
    PosService.prototype.enablePOSMode = function () {
        if (!this.posModeEnabled) {
            this.posModeEnabled = true;
        }
    };
    PosService.prototype.addCacheVoucher = function (voucher) {
        return this.db.add('cacheVoucher', voucher);
    };
    PosService.prototype.countCacheVoucher = function () {
        this.db.count('cacheVoucher').then(function (voucherCount) {
            return voucherCount;
        }, function (error) {
            console.log(error);
        });
        return 0;
    };
    PosService.prototype.getAllCacheVouchers = function () {
        return this.db.getAll('cacheVoucher');
    };
    PosService.prototype.syncAllCacheVouchers = function () {
        var _this = this;
        this.db.getAll('cacheVoucher').then(function (vouchers) {
            var e_1, _a;
            var _loop_1 = function (voucher) {
                _this.apiService.saveTallyVoucher(voucher).subscribe(function (res) {
                    console.log('Voucher saved Successfully');
                    _this.db.delete('cacheVoucher', voucher.customVoucherDetails.voucherNumber).then(function () {
                        // Do something after delete
                    }, function (error) {
                        console.log(error);
                    });
                }, function (err) {
                    console.log('Voucher could not be saved');
                });
            };
            try {
                for (var vouchers_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](vouchers), vouchers_1_1 = vouchers_1.next(); !vouchers_1_1.done; vouchers_1_1 = vouchers_1.next()) {
                    var voucher = vouchers_1_1.value;
                    _loop_1(voucher);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (vouchers_1_1 && !vouchers_1_1.done && (_a = vouchers_1.return)) _a.call(vouchers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function (err) {
            alert("Error ocurred");
        });
    };
    PosService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    PosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PosService);
    return PosService;
}());



/***/ }),

/***/ "./src/app/shared/voucher.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/voucher.service.ts ***!
  \*******************************************/
/*! exports provided: VoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherService", function() { return VoucherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/api.service.ts");





var VoucherService = /** @class */ (function () {
    function VoucherService(apiService) {
        this.apiService = apiService;
        this.vouchers = [];
        this.serverUrl = this.apiService.WEB_SOCKET_URL + '/voucherSocket';
        this.title = 'WebSockets chat';
        this.initializeWebSocketConnection();
    }
    VoucherService.prototype.initializeWebSocketConnection = function () {
        var ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.serverUrl);
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
        var that = this;
        this.stompClient.connect({}, function (frame) {
            that.stompClient.subscribe("/voucherSocket", function (message) {
                console.log(that.vouchers);
                if (message.body) {
                    that.vouchers.push(JSON.parse(message.body));
                    console.log(message.body);
                }
            });
        });
    };
    VoucherService.prototype.sendVoucher = function (voucher) {
        console.log(JSON.stringify(voucher));
        this.stompClient.send("/app/voucher/save", {}, JSON.stringify(voucher));
    };
    VoucherService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    VoucherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VoucherService);
    return VoucherService;
}());



/***/ }),

/***/ "./src/app/side-navigation-bar/side-navigation-bar.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/side-navigation-bar/side-navigation-bar.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenavBar{\r\n  background-color: #2E4053;\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  height: 100%;\r\n  \twidth: 15%;\r\n\r\n}\r\n\r\n.navLink:hover{\r\n    background-color: #1C2833;\r\n}\r\n\r\n.navLink {\r\n  color: white;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.sidenavBarContent{\r\n\twidth: 85%;\r\n\theight: 100%;\r\n}\r\n\r\na{\r\n  padding: 5px 5px;\r\n-webkit-box-align: stretch;\r\n        align-items: stretch;\r\n}\r\n\r\nspan{\r\n  position: absolute;\r\n    margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXZpZ2F0aW9uLWJhci9zaWRlLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIseURBQXlEO0VBQ3pELFlBQVk7R0FDWCxVQUFVOztBQUViOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCLDBCQUFvQjtRQUFwQixvQkFBb0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbmF2aWdhdGlvbi1iYXIvc2lkZS1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXZCYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFNDA1MztcclxuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHR3aWR0aDogMTUlO1xyXG5cclxufVxyXG5cclxuLm5hdkxpbms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyODMzO1xyXG59XHJcblxyXG4ubmF2TGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2lkZW5hdkJhckNvbnRlbnR7XHJcblx0d2lkdGg6IDg1JTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmF7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/side-navigation-bar/side-navigation-bar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/side-navigation-bar/side-navigation-bar.component.ts ***!
  \**********************************************************************/
/*! exports provided: SideNavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationBarComponent", function() { return SideNavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavigationBarComponent = /** @class */ (function () {
    function SideNavigationBarComponent() {
    }
    SideNavigationBarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('navItems')
    ], SideNavigationBarComponent.prototype, "items", void 0);
    SideNavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'side-navigation-bar',
            template: __webpack_require__(/*! raw-loader!./side-navigation-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-navigation-bar/side-navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation-bar.component.css */ "./src/app/side-navigation-bar/side-navigation-bar.component.css")]
        })
    ], SideNavigationBarComponent);
    return SideNavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/stock-items/stock-items.component.css":
/*!*******************************************************!*\
  !*** ./src/app/stock-items/stock-items.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLWl0ZW1zL3N0b2NrLWl0ZW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/stock-items/stock-items.component.ts":
/*!******************************************************!*\
  !*** ./src/app/stock-items/stock-items.component.ts ***!
  \******************************************************/
/*! exports provided: StockItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockItemsComponent", function() { return StockItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



var StockItemsComponent = /** @class */ (function () {
    function StockItemsComponent(apiService) {
        this.apiService = apiService;
        this.items = [
            { title: "Products", icon: "list", link: 'product-list' },
            { title: "Expired Batches", icon: "list", link: 'expired-batches' },
            { title: "Tax Details", icon: "list", link: 'tax-details' }
        ];
    }
    StockItemsComponent.prototype.ngOnInit = function () {
    };
    StockItemsComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    StockItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-items',
            template: __webpack_require__(/*! raw-loader!./stock-items.component.html */ "./node_modules/raw-loader/index.js!./src/app/stock-items/stock-items.component.html"),
            styles: [__webpack_require__(/*! ./stock-items.component.css */ "./src/app/stock-items/stock-items.component.css")]
        })
    ], StockItemsComponent);
    return StockItemsComponent;
}());



/***/ }),

/***/ "./src/app/tables/address-table/address-table.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tables/address-table/address-table.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\r\n  width: 100%;\r\n\r\n}\r\n.filterInputClass{\r\n  width: 50%;\r\n  margin: 10px 20px;\r\n  align-content: center;\r\n\r\n}\r\n.customerTable{\r\n  width: 70%;\r\n  margin: 20px auto;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL2FkZHJlc3MtdGFibGUvYWRkcmVzcy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7O0FBRXZCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9hZGRyZXNzLXRhYmxlL2FkZHJlc3MtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuLmZpbHRlcklucHV0Q2xhc3N7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDEwcHggMjBweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY3VzdG9tZXJUYWJsZXtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tables/address-table/address-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/address-table/address-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddressTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressTableComponent", function() { return AddressTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _create_form_create_address_form_create_address_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../create-form/create-address-form/create-address-form.component */ "./src/app/create-form/create-address-form/create-address-form.component.ts");









var AddressTableComponent = /** @class */ (function () {
    function AddressTableComponent(apiService, dialog, dialogConfig) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.dialogConfig = dialogConfig;
        this.addresses = [];
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['name', 'districtName', 'tehsilName', 'stateName', 'areaOfPrivateLand', 'update'];
    }
    AddressTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllAddresses().subscribe(function (res) {
            _this.addresses = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.addresses);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.table.dataSource = _this.dataSource;
        }, function (err) {
            alert("Could not connect to the server. Please try again later.");
        });
        //this.dataSource.data = this.customers;//this.getAllCustomers();
    };
    AddressTableComponent.prototype.ngAfterViewInit = function () {
    };
    AddressTableComponent.prototype.renderRows = function () {
        this.table.renderRows();
    };
    AddressTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AddressTableComponent.prototype.viewCustomer = function () {
    };
    AddressTableComponent.prototype.updateAddress = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        this.dialog.open(_create_form_create_address_form_create_address_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateAddressFormComponent"], { data: data });
    };
    AddressTableComponent.prototype.createCustomer = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        this.dialog.open(_create_form_create_address_form_create_address_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateAddressFormComponent"]);
    };
    AddressTableComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], AddressTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
    ], AddressTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
    ], AddressTableComponent.prototype, "table", void 0);
    AddressTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-table',
            template: __webpack_require__(/*! raw-loader!./address-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/address-table/address-table.component.html"),
            styles: [__webpack_require__(/*! ./address-table.component.css */ "./src/app/tables/address-table/address-table.component.css")]
        })
    ], AddressTableComponent);
    return AddressTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/batch-table/batch-table.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tables/batch-table/batch-table.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\r\n  width: 100%;\r\n\r\n}\r\n.filterInputClass{\r\n  width: 50%;\r\n  margin: 10px 20px;\r\n  align-content: center;\r\n\r\n}\r\n.customerTable{\r\n  width: 80%;\r\n  margin: 20px auto;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL2JhdGNoLXRhYmxlL2JhdGNoLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHFCQUFxQjs7QUFFdkI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL2JhdGNoLXRhYmxlL2JhdGNoLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5maWx0ZXJJbnB1dENsYXNze1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbWVyVGFibGV7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tables/batch-table/batch-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/batch-table/batch-table.component.ts ***!
  \*************************************************************/
/*! exports provided: BatchTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchTableComponent", function() { return BatchTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");








var BatchTableComponent = /** @class */ (function () {
    function BatchTableComponent(apiService, dialog, dialogConfig) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.dialogConfig = dialogConfig;
        this.periods = [{ name: "1 month", value: 30 },
            { name: "3 month", value: 90 },
            { name: "6 month", value: 180 },
            { name: "1 year", value: 365 },];
        this.selectedValue = 90;
        this.displayedColumns = ['batchName', 'name', 'expiryDate', 'closingBalance'];
    }
    BatchTableComponent.prototype.ngOnInit = function () {
        this.getBatches(this.selectedValue);
        this.table.renderRows();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.batches);
        console.log("Batch table componenet called");
    };
    BatchTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    BatchTableComponent.prototype.renderRows = function () {
        this.table.renderRows();
    };
    BatchTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BatchTableComponent.prototype.getBatches = function (daysRemaining) {
        var _this = this;
        this.apiService.getNearExpiryBatches(daysRemaining).subscribe(function (res) {
            _this.batches = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.batches);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.table.dataSource = _this.dataSource;
            //this.table.renderRows();
            //console.log(this.customers.length);
        }, function (err) {
            alert("An error has ocurred while sending your request");
        });
    };
    BatchTableComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], BatchTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
    ], BatchTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
    ], BatchTableComponent.prototype, "table", void 0);
    BatchTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-batch-table',
            template: __webpack_require__(/*! raw-loader!./batch-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/batch-table/batch-table.component.html"),
            styles: [__webpack_require__(/*! ./batch-table.component.css */ "./src/app/tables/batch-table/batch-table.component.css")]
        })
    ], BatchTableComponent);
    return BatchTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/customer-table/customer-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/tables/customer-table/customer-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n\n}\n.filterInputClass{\n  width: 50%;\n  margin: 10px 20px;\n  align-content: center;\n\n}\n.customerTable{\n  width: 70%;\n  margin: 20px auto;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL2N1c3RvbWVyLXRhYmxlL2N1c3RvbWVyLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHFCQUFxQjs7QUFFdkI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL2N1c3RvbWVyLXRhYmxlL2N1c3RvbWVyLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG4uZmlsdGVySW5wdXRDbGFzc3tcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4uY3VzdG9tZXJUYWJsZXtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tables/customer-table/customer-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tables/customer-table/customer-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTableComponent", function() { return CustomerTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../create-form/create-customer-form/create-customer-form.component */ "./src/app/create-form/create-customer-form/create-customer-form.component.ts");
/* harmony import */ var _confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../confirmation-box/confirmation-box.component */ "./src/app/confirmation-box/confirmation-box.component.ts");










var CustomerTableComponent = /** @class */ (function () {
    function CustomerTableComponent(apiService, dialog, dialogConfig) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.dialogConfig = dialogConfig;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['phoneNumber', 'name', 'fatherName', 'landHolding', 'update'];
    }
    CustomerTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.customers);
        console.log("customers table componenet called");
        //this.dataSource.data = this.customers;//this.getAllCustomers();
    };
    CustomerTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    CustomerTableComponent.prototype.renderRows = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.customers);
        this.table.renderRows();
    };
    CustomerTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CustomerTableComponent.prototype.viewCustomer = function () {
    };
    CustomerTableComponent.prototype.updateCustomer = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        this.dialog.open(_create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateCustomerFormComponent"], { data: data });
    };
    CustomerTableComponent.prototype.deleteCustomer = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationBoxComponent"], {
            width: '350px',
            data: "Do you confirm the deletion of this customer: " + data.name + " ?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.apiService.deleteCustomer(data).subscribe(function (res) {
                    alert("Customer deleted successfully");
                }, function (err) {
                    console.log(err);
                });
                // DO SOMETHING
            }
        });
    };
    CustomerTableComponent.prototype.createCustomer = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        this.dialog.open(_create_form_create_customer_form_create_customer_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateCustomerFormComponent"]);
    };
    CustomerTableComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], CustomerTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
    ], CustomerTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
    ], CustomerTableComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('customers')
    ], CustomerTableComponent.prototype, "customers", void 0);
    CustomerTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-table',
            template: __webpack_require__(/*! raw-loader!./customer-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/customer-table/customer-table.component.html"),
            styles: [__webpack_require__(/*! ./customer-table.component.css */ "./src/app/tables/customer-table/customer-table.component.css")]
        })
    ], CustomerTableComponent);
    return CustomerTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/order-table/order-table.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tables/order-table/order-table.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\r\n  width: 100%;\r\n\r\n}\r\n.filterInputClass{\r\n  width: 50%;\r\n  margin: 10px 20px;\r\n  align-content: center;\r\n\r\n}\r\n.customerTable{\r\n  width: 70%;\r\n  margin: 20px auto;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL29yZGVyLXRhYmxlL29yZGVyLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHFCQUFxQjs7QUFFdkI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL29yZGVyLXRhYmxlL29yZGVyLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5maWx0ZXJJbnB1dENsYXNze1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbWVyVGFibGV7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tables/order-table/order-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/order-table/order-table.component.ts ***!
  \*************************************************************/
/*! exports provided: OrderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTableComponent", function() { return OrderTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");








var OrderTableComponent = /** @class */ (function () {
    function OrderTableComponent(apiService, dialog, dialogConfig) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.dialogConfig = dialogConfig;
        this.displayedColumns = ['_id', 'dateOfCreation', 'customerId', 'update'];
    }
    OrderTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.orders);
        console.log("customers table componenet called");
    };
    OrderTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    OrderTableComponent.prototype.renderRows = function () {
        this.table.renderRows();
    };
    OrderTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    OrderTableComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], OrderTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
    ], OrderTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
    ], OrderTableComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('orders')
    ], OrderTableComponent.prototype, "orders", void 0);
    OrderTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-table',
            template: __webpack_require__(/*! raw-loader!./order-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/order-table/order-table.component.html"),
            styles: [__webpack_require__(/*! ./order-table.component.css */ "./src/app/tables/order-table/order-table.component.css")]
        })
    ], OrderTableComponent);
    return OrderTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/stock-item-table/stock-item-table.component.css":
/*!************************************************************************!*\
  !*** ./src/app/tables/stock-item-table/stock-item-table.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\r\n  width: 100%;\r\n\r\n}\r\n.filterInputClass{\r\n  width: 50%;\r\n  margin: 10px 20px;\r\n  align-content: center;\r\n\r\n}\r\n.customerTable{\r\n  width: 70%;\r\n  margin: 20px auto;\r\n  padding: 10px;\r\n}\r\n.mat-row {\r\n  height: auto;\r\n}\r\n.mat-cell {\r\n  padding: 8px 8px 8px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL3N0b2NrLWl0ZW0tdGFibGUvc3RvY2staXRlbS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7O0FBRXZCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC90YWJsZXMvc3RvY2staXRlbS10YWJsZS9zdG9jay1pdGVtLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5maWx0ZXJJbnB1dENsYXNze1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbWVyVGFibGV7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXJvdyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tables/stock-item-table/stock-item-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tables/stock-item-table/stock-item-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: StockItemTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockItemTableComponent", function() { return StockItemTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _create_form_create_stock_item_form_create_stock_item_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../create-form/create-stock-item-form/create-stock-item-form.component */ "./src/app/create-form/create-stock-item-form/create-stock-item-form.component.ts");









var StockItemTableComponent = /** @class */ (function () {
    function StockItemTableComponent(apiService, dialog, dialogConfig) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.dialogConfig = dialogConfig;
        this.displayedColumns = ['name', 'parent', 'category', 'closingBalance', 'price', 'update'];
    }
    StockItemTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.stockItems);
        console.log("stockItems table componenet called");
    };
    StockItemTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    StockItemTableComponent.prototype.renderRows = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.stockItems);
        this.table.dataSource = this.dataSource;
        this.table.renderRows();
    };
    StockItemTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    StockItemTableComponent.prototype.onCreate = function () {
        alert("Stock Item creation is not supported. Please use Tally ERP to create Stock Item.");
    };
    StockItemTableComponent.prototype.updateStockItem = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        this.dialog.open(_create_form_create_stock_item_form_create_stock_item_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateStockItemFormComponent"], { data: data });
    };
    StockItemTableComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], StockItemTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
    ], StockItemTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
    ], StockItemTableComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('stockItems')
    ], StockItemTableComponent.prototype, "stockItems", void 0);
    StockItemTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-item-table',
            template: __webpack_require__(/*! raw-loader!./stock-item-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/stock-item-table/stock-item-table.component.html"),
            styles: [__webpack_require__(/*! ./stock-item-table.component.css */ "./src/app/tables/stock-item-table/stock-item-table.component.css")]
        })
    ], StockItemTableComponent);
    return StockItemTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/tax-details-table/tax-details-table.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/tables/tax-details-table/tax-details-table.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\r\n  width: 100%;\r\n\r\n}\r\n.filterInputClass{\r\n  width: 50%;\r\n  margin: 10px 20px;\r\n  align-content: center;\r\n\r\n}\r\n.customerTable{\r\n  width: 70%;\r\n  margin: 20px auto;\r\n  padding: 10px;\r\n}\r\n.mat-row {\r\n  height: auto;\r\n}\r\n.mat-cell {\r\n  padding: 8px 8px 8px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL3RheC1kZXRhaWxzLXRhYmxlL3RheC1kZXRhaWxzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHFCQUFxQjs7QUFFdkI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YXgtZGV0YWlscy10YWJsZS90YXgtZGV0YWlscy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4uZmlsdGVySW5wdXRDbGFzc3tcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jdXN0b21lclRhYmxle1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1yb3cge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tables/tax-details-table/tax-details-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tables/tax-details-table/tax-details-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: TaxDetailsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxDetailsTableComponent", function() { return TaxDetailsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../confirmation-box/confirmation-box.component */ "./src/app/confirmation-box/confirmation-box.component.ts");
/* harmony import */ var _create_form_create_tax_details_form_create_tax_details_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../create-form/create-tax-details-form/create-tax-details-form.component */ "./src/app/create-form/create-tax-details-form/create-tax-details-form.component.ts");










var TaxDetailsTableComponent = /** @class */ (function () {
    function TaxDetailsTableComponent(apiService, dialog, dialogConfig) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.dialogConfig = dialogConfig;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['hsnCode', 'cgst', 'sgst', 'update'];
    }
    TaxDetailsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getTaxDetails().subscribe(function (res) {
            _this.taxDetails = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.taxDetails);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.table.dataSource = _this.dataSource;
            _this.table.renderRows();
        }, function (err) {
            alert("Could not get Tax Details. Try again later");
        });
        console.log("customers table componenet called");
        //this.dataSource.data = this.customers;//this.getAllCustomers();
    };
    TaxDetailsTableComponent.prototype.ngAfterViewInit = function () {
    };
    TaxDetailsTableComponent.prototype.renderRows = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.taxDetails);
        this.table.renderRows();
    };
    TaxDetailsTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TaxDetailsTableComponent.prototype.viewCustomer = function () {
    };
    TaxDetailsTableComponent.prototype.updateTaxDetail = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        this.dialog.open(_create_form_create_tax_details_form_create_tax_details_form_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaxDetailsFormComponent"], { data: data });
    };
    TaxDetailsTableComponent.prototype.deleteTaxDetail = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationBoxComponent"], {
            width: '350px',
            data: "Do you confirm the deletion of this customer: " + data.name + " ?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.apiService.deleteTaxDetails(data).subscribe(function (res) {
                    alert("Customer deleted successfully");
                }, function (err) {
                    console.log(err);
                });
                // DO SOMETHING
            }
        });
    };
    TaxDetailsTableComponent.prototype.createTaxDetail = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        this.dialog.open(_create_form_create_tax_details_form_create_tax_details_form_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaxDetailsFormComponent"]);
    };
    TaxDetailsTableComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], TaxDetailsTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
    ], TaxDetailsTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
    ], TaxDetailsTableComponent.prototype, "table", void 0);
    TaxDetailsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tax-details-table',
            template: __webpack_require__(/*! raw-loader!./tax-details-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/tax-details-table/tax-details-table.component.html"),
            styles: [__webpack_require__(/*! ./tax-details-table.component.css */ "./src/app/tables/tax-details-table/tax-details-table.component.css")]
        })
    ], TaxDetailsTableComponent);
    return TaxDetailsTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/voucher-table/voucher-table.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tables/voucher-table/voucher-table.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\r\n  width: 100%;\r\n\r\n}\r\n.filterInputClass{\r\n  width: 50%;\r\n  margin: 10px 20px;\r\n  align-content: center;\r\n\r\n}\r\n.customerTable{\r\n  width: 80%;\r\n  margin: 20px auto;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL3ZvdWNoZXItdGFibGUvdm91Y2hlci10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7O0FBRXZCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy92b3VjaGVyLXRhYmxlL3ZvdWNoZXItdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuLmZpbHRlcklucHV0Q2xhc3N7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDEwcHggMjBweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY3VzdG9tZXJUYWJsZXtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tables/voucher-table/voucher-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/voucher-table/voucher-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: VoucherTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherTableComponent", function() { return VoucherTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_voucher_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/voucher.service */ "./src/app/shared/voucher.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var VoucherTableComponent = /** @class */ (function () {
    function VoucherTableComponent(apiService, dialog, dialogConfig, voucherService, router) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.dialogConfig = dialogConfig;
        this.voucherService = voucherService;
        this.router = router;
        this.displayedColumns = ['date', 'voucherNumber', 'customerId', 'address', 'amount', 'update'];
    }
    VoucherTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.vouchers);
        console.log(this.vouchers);
        console.log("customers table componenet called");
    };
    VoucherTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    VoucherTableComponent.prototype.renderRows = function (res) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.table.renderRows();
    };
    VoucherTableComponent.prototype.updateVoucher = function (data) {
        this.voucherService.tallyVoucher = data;
        this.router.navigate(['/sales/create-sales-voucher']);
    };
    VoucherTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    VoucherTableComponent.ctorParameters = function () { return [
        { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"] },
        { type: _shared_voucher_service__WEBPACK_IMPORTED_MODULE_7__["VoucherService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], VoucherTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
    ], VoucherTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
    ], VoucherTableComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vouchers')
    ], VoucherTableComponent.prototype, "vouchers", void 0);
    VoucherTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-voucher-table',
            template: __webpack_require__(/*! raw-loader!./voucher-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/voucher-table/voucher-table.component.html"),
            styles: [__webpack_require__(/*! ./voucher-table.component.css */ "./src/app/tables/voucher-table/voucher-table.component.css")]
        })
    ], VoucherTableComponent);
    return VoucherTableComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/view/complaint-view/complaint-view.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view/complaint-view/complaint-view.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY29tcGxhaW50LXZpZXcvY29tcGxhaW50LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/complaint-view/complaint-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/complaint-view/complaint-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComplaintViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintViewComponent", function() { return ComplaintViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComplaintViewComponent = /** @class */ (function () {
    function ComplaintViewComponent() {
    }
    ComplaintViewComponent.prototype.ngOnInit = function () {
    };
    ComplaintViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-view',
            template: __webpack_require__(/*! raw-loader!./complaint-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/complaint-view/complaint-view.component.html"),
            styles: [__webpack_require__(/*! ./complaint-view.component.css */ "./src/app/view/complaint-view/complaint-view.component.css")]
        })
    ], ComplaintViewComponent);
    return ComplaintViewComponent;
}());



/***/ }),

/***/ "./src/app/view/customer-view/customer-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/view/customer-view/customer-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY3VzdG9tZXItdmlldy9jdXN0b21lci12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/customer-view/customer-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/customer-view/customer-view.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewComponent", function() { return CustomerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CustomerViewComponent = /** @class */ (function () {
    function CustomerViewComponent(customerInjected) {
        this.customerInjected = customerInjected;
        this.customer = {
            _id: "",
            name: "",
            fatherName: "",
            landHolding: 0,
            addressId: "",
            phoneNumber: ""
        };
    }
    CustomerViewComponent.prototype.ngOnInit = function () {
    };
    CustomerViewComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    CustomerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-view',
            template: __webpack_require__(/*! raw-loader!./customer-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/customer-view/customer-view.component.html"),
            styles: [__webpack_require__(/*! ./customer-view.component.css */ "./src/app/view/customer-view/customer-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], CustomerViewComponent);
    return CustomerViewComponent;
}());



/***/ }),

/***/ "./src/app/view/order-view/order-view.component.css":
/*!**********************************************************!*\
  !*** ./src/app/view/order-view/order-view.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvb3JkZXItdmlldy9vcmRlci12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/order-view/order-view.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/order-view/order-view.component.ts ***!
  \*********************************************************/
/*! exports provided: OrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderViewComponent = /** @class */ (function () {
    function OrderViewComponent() {
    }
    OrderViewComponent.prototype.ngOnInit = function () {
    };
    OrderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-view',
            template: __webpack_require__(/*! raw-loader!./order-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/order-view/order-view.component.html"),
            styles: [__webpack_require__(/*! ./order-view.component.css */ "./src/app/view/order-view/order-view.component.css")]
        })
    ], OrderViewComponent);
    return OrderViewComponent;
}());



/***/ }),

/***/ "./src/app/view/stock-item-view/stock-item-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/view/stock-item-view/stock-item-view.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvc3RvY2staXRlbS12aWV3L3N0b2NrLWl0ZW0tdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/stock-item-view/stock-item-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/stock-item-view/stock-item-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: StockItemViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockItemViewComponent", function() { return StockItemViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StockItemViewComponent = /** @class */ (function () {
    function StockItemViewComponent() {
    }
    StockItemViewComponent.prototype.ngOnInit = function () {
    };
    StockItemViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-item-view',
            template: __webpack_require__(/*! raw-loader!./stock-item-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/stock-item-view/stock-item-view.component.html"),
            styles: [__webpack_require__(/*! ./stock-item-view.component.css */ "./src/app/view/stock-item-view/stock-item-view.component.css")]
        })
    ], StockItemViewComponent);
    return StockItemViewComponent;
}());



/***/ }),

/***/ "./src/app/view/voucher-view/voucher-view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/view/voucher-view/voucher-view.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#invoice{\r\n    padding: 30px;\r\n}\r\n\r\n.invoice {\r\n    position: relative;\r\n    background-color: #FFF;\r\n    min-height: 680px;\r\n    padding: 15px\r\n}\r\n\r\n.invoice header {\r\n    padding: 10px 0;\r\n    margin-bottom: 20px;\r\n    border-bottom: 1px solid #3989c6\r\n}\r\n\r\n.invoice .company-details {\r\n    text-align: right\r\n}\r\n\r\n.invoice .company-details .name {\r\n    margin-top: 0;\r\n    margin-bottom: 0\r\n}\r\n\r\n.invoice .contacts {\r\n    margin-bottom: 20px\r\n}\r\n\r\n.invoice .invoice-to {\r\n    text-align: left\r\n}\r\n\r\n.invoice .invoice-to .to {\r\n    margin-top: 0;\r\n    margin-bottom: 0\r\n}\r\n\r\n.invoice .invoice-details {\r\n    text-align: right\r\n}\r\n\r\n.invoice .invoice-details .invoice-id {\r\n    margin-top: 0;\r\n    color: #3989c6\r\n}\r\n\r\n.invoice main {\r\n    padding-bottom: 50px\r\n}\r\n\r\n.invoice main .thanks {\r\n    margin-top: -100px;\r\n    font-size: 2em;\r\n    margin-bottom: 50px\r\n}\r\n\r\n.invoice main .notices {\r\n    padding-left: 6px;\r\n    border-left: 6px solid #3989c6\r\n}\r\n\r\n.invoice main .notices .notice {\r\n    font-size: 1.2em\r\n}\r\n\r\n.invoice table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    margin-bottom: 20px\r\n}\r\n\r\n.invoice table td,.invoice table th {\r\n    padding: 15px;\r\n    background: #eee;\r\n    border-bottom: 1px solid #fff\r\n}\r\n\r\n.invoice table th {\r\n    white-space: nowrap;\r\n    font-weight: 400;\r\n    font-size: 16px\r\n}\r\n\r\n.invoice table td h3 {\r\n    margin: 0;\r\n    font-weight: 400;\r\n    color: #3989c6;\r\n    font-size: 1.2em\r\n}\r\n\r\n.invoice table .qty,.invoice table .total,.invoice table .unit {\r\n    text-align: right;\r\n    font-size: 1.2em\r\n}\r\n\r\n.invoice table .no {\r\n    color: #fff;\r\n    font-size: 1.6em;\r\n    background: #3989c6\r\n}\r\n\r\n.invoice table .unit {\r\n    background: #ddd\r\n}\r\n\r\n.invoice table .total {\r\n    background: #3989c6;\r\n    color: #fff\r\n}\r\n\r\n.invoice table tbody tr:last-child td {\r\n    border: none\r\n}\r\n\r\n.invoice table tfoot td {\r\n    background: 0 0;\r\n    border-bottom: none;\r\n    white-space: nowrap;\r\n    text-align: right;\r\n    padding: 10px 20px;\r\n    font-size: 1.2em;\r\n    border-top: 1px solid #aaa\r\n}\r\n\r\n.invoice table tfoot tr:first-child td {\r\n    border-top: none\r\n}\r\n\r\n.invoice table tfoot tr:last-child td {\r\n    color: #3989c6;\r\n    font-size: 1.4em;\r\n    border-top: 1px solid #3989c6\r\n}\r\n\r\n.invoice table tfoot tr td:first-child {\r\n    border: none\r\n}\r\n\r\n.invoice footer {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #777;\r\n    border-top: 1px solid #aaa;\r\n    padding: 8px 0\r\n}\r\n\r\n@media print {\r\n    .invoice {\r\n        font-size: 11px!important;\r\n        overflow: hidden!important\r\n    }\r\n\r\n    .invoice footer {\r\n        position: absolute;\r\n        bottom: 10px;\r\n        page-break-after: always\r\n    }\r\n\r\n    .invoice>div:last-child {\r\n        page-break-before: always\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92b3VjaGVyLXZpZXcvdm91Y2hlci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO1FBQ3pCO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaO0lBQ0o7O0lBRUE7UUFDSTtJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZvdWNoZXItdmlldy92b3VjaGVyLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnZvaWNle1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmludm9pY2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIG1pbi1oZWlnaHQ6IDY4MHB4O1xyXG4gICAgcGFkZGluZzogMTVweFxyXG59XHJcblxyXG4uaW52b2ljZSBoZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzk4OWM2XHJcbn1cclxuXHJcbi5pbnZvaWNlIC5jb21wYW55LWRldGFpbHMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG5cclxuLmludm9pY2UgLmNvbXBhbnktZGV0YWlscyAubmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4uaW52b2ljZSAuY29udGFjdHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG59XHJcblxyXG4uaW52b2ljZSAuaW52b2ljZS10byB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbn1cclxuXHJcbi5pbnZvaWNlIC5pbnZvaWNlLXRvIC50byB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4uaW52b2ljZSAuaW52b2ljZS1kZXRhaWxzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0XHJcbn1cclxuXHJcbi5pbnZvaWNlIC5pbnZvaWNlLWRldGFpbHMgLmludm9pY2UtaWQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjMzk4OWM2XHJcbn1cclxuXHJcbi5pbnZvaWNlIG1haW4ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHhcclxufVxyXG5cclxuLmludm9pY2UgbWFpbiAudGhhbmtzIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweFxyXG59XHJcblxyXG4uaW52b2ljZSBtYWluIC5ub3RpY2VzIHtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMzk4OWM2XHJcbn1cclxuXHJcbi5pbnZvaWNlIG1haW4gLm5vdGljZXMgLm5vdGljZSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtXHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG59XHJcblxyXG4uaW52b2ljZSB0YWJsZSB0ZCwuaW52b2ljZSB0YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmXHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIHRoIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIHRkIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzM5ODljNjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW1cclxufVxyXG5cclxuLmludm9pY2UgdGFibGUgLnF0eSwuaW52b2ljZSB0YWJsZSAudG90YWwsLmludm9pY2UgdGFibGUgLnVuaXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEuMmVtXHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIC5ubyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzk4OWM2XHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIC51bml0IHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGRcclxufVxyXG5cclxuLmludm9pY2UgdGFibGUgLnRvdGFsIHtcclxuICAgIGJhY2tncm91bmQ6ICMzOTg5YzY7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uaW52b2ljZSB0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkIHtcclxuICAgIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhXHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIHRmb290IHRyOmZpcnN0LWNoaWxkIHRkIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmVcclxufVxyXG5cclxuLmludm9pY2UgdGFibGUgdGZvb3QgdHI6bGFzdC1jaGlsZCB0ZCB7XHJcbiAgICBjb2xvcjogIzM5ODljNjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzM5ODljNlxyXG59XHJcblxyXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0ciB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmVcclxufVxyXG5cclxuLmludm9pY2UgZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYTtcclxuICAgIHBhZGRpbmc6IDhweCAwXHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuaW52b2ljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4IWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC5pbnZvaWNlIGZvb3RlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXNcclxuICAgIH1cclxuXHJcbiAgICAuaW52b2ljZT5kaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFnZS1icmVhay1iZWZvcmU6IGFsd2F5c1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/view/voucher-view/voucher-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/view/voucher-view/voucher-view.component.ts ***!
  \*************************************************************/
/*! exports provided: VoucherViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherViewComponent", function() { return VoucherViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VoucherViewComponent = /** @class */ (function () {
    function VoucherViewComponent() {
    }
    VoucherViewComponent.prototype.ngOnInit = function () {
    };
    VoucherViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-voucher-view',
            template: __webpack_require__(/*! raw-loader!./voucher-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/voucher-view/voucher-view.component.html"),
            styles: [__webpack_require__(/*! ./voucher-view.component.css */ "./src/app/view/voucher-view/voucher-view.component.css")]
        })
    ], VoucherViewComponent);
    return VoucherViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Parth Khandelwal\Documents\Agrostop-WebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map